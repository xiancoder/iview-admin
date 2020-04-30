<template>
    <div class="split-pane-page-wrapper">
        <split-pane v-model="offset">
            <div slot="left" class="pane">
                <Tree :data="dataSet.treeData" :render="treeDomDraw">
                </Tree>
            </div>
            <div slot="right" class="pane">
                <div class="tableLayout">
                    <div class="tableTool" @keyup.enter.stop="hendleSearch">
                        <Select v-model="search.status" placeholder="请选择??" style="width:180px;">
                            <Option v-for="option in dataSet.stateList" :value="option.id" :key="option.id" :label="option.name" ></Option>
                        </Select>
                        <Input v-model="search.keyword" placeholder="员工姓名、工号" style="width:180px;"
                            @on-enter="hendleSearch"/>
                        <Select v-model="search.postIds" multiple placeholder="请选择职位" :max-tag-count="2" style="width:180px">
                            <Option v-for="option in dataSet.postList" :value="option.id" :key="option.id" :label="option.name" ></Option>
                        </Select>
                        <br />
                        <Button type="warning" :loading="loading.table" @click="hendleSearch">搜索</Button>
                        <Button type="default" :loading="loading.table" @click="hendleReset">重置</Button>
                    </div>
                    <div class="tableTool" v-show="tableSelection.length>0">
                        <span>已勾选<strong style="color:red"> {{tableSelection.length}} </strong>位员工</span>
                        <Button type="primary">修改部门</Button>
                        <Button type="primary">修改状态</Button>
                        <Button type="primary">设为本级负责人</Button>
                        <Button type="primary">取消本级负责人</Button>
                    </div>
                    <Table border :loading="loading.table" :columns="columns" :data="tableData"
                        @on-selection-change="selectedChange"
                        @on-sort-change="hendleSort">
                        <template slot-scope="{ row, index }" slot="op">
                            <Button type="text" @click="hendleEdit(row)" size="small">编辑</Button>
                            <Button type="text" @click="hendleDel(row)" size="small">删除</Button>
                        </template>
                    </Table>
                    <div class="tableFooter">
                        <!-- 模版结构不要动 -->
                        <span> {{showPageCount(page.rowCount,page.pageIndex,page.pageSize)}}</span>
                        <Page ref="pager" :page-size="page.pageSize" :current="page.pageIndex" :total="page.rowCount"
                            show-sizer show-elevator class="fr"
                            @on-change="v=>{hendleGopage(v)}"
                            @on-page-size-change="v=>{page.pageSize=v;hendleGopage(1)}"/>
                        </Page>
                        <span class="fr"> {{showPageRow(page.rowCount,page.pageIndex,page.pageSize)}}</span>
                    </div>
                </div>
            </div>
        </split-pane>
    </div>
    </div>
</template>
<script>
import SplitPane from '@C/split-pane'
import { extend, extendF, nothing } from '@/utils'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具

export default {
    components: { SplitPane },
    data () {
        // 固定数据源写在这里
        // 职位状态
        const stateList = this.$api.employee.pullStatus()
        const stateList2 = stateList.slice(1)

        return {
            offset: 0.2,
            dataSet: {
                'sex': [], // 性别 0全部1男2女
                'state': [], // 状态 0全部1在校2记过3劝退4开除
                'age': [ // 年龄
                    {id: '10', name: '10 ~ 20'}, {id: '20', name: '20 ~ 30'}, {id: '30', name: '30 ~ 40'},
                    {id: '40', name: '40 ~ 50'}, {id: '50', name: '50 ~ 60'}, {id: '60', name: '60 ~ 70'},
                    {id: '70', name: '70 ~ 80'}, {id: '80', name: '80 ~ 90'}
                ],
                'stay': [ // 时长
                    {id: '10', name: '0 ~ 10'}, {id: '20', name: '10 ~ 20'}, {id: '30', name: '20 ~ 30'}
                ],
                stateList, // 下拉列表
                treeData: [] // 树
            },
            search: {
                status: 2, // 用户状态, 0:离职，1:在职
                keyword: '', // 工号或姓名
                postIds: [] // 职位 多选
            },
            loading: {
                table: false, // 表格加载
                btn1: false, btn2: false, btn3: false, btn4: false, // 功能节流
                op1: false, op2: false // 操作节流
            },
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 [[模版变量不要动]]
            order: { orderKey: '', order: '' }, // 排序 [[模版变量不要动]]
            columns: [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                { type: 'selection', width: 60, align: 'center' },
                { title: '员工', width: 250, key: 'userName', align: 'left', render: h.avatar1('userPhoto', 'userName', 'tel', 'name') },
                { title: '工号', key: 'jobNum', render: h.defaultH('jobNum') },
                { title: '职位', key: 'post', render: h.strList1('post') },
                { title: '账号', key: 'email', width: 200, render: h.defaultH('email') },
                { title: '状态', key: 'userStatus', render: h.readArr('userStatus', stateList2.map(x => x.name)) }
            ],
            'serrchParam': null, // 实际搜索项 [[模版变量不要动]]
            'tableData': [], // 表格内容 [[模版变量不要动]]
            'tableSelection': [], // 表格选中项
            end1: 1 // 防呆设计
        }
    },
    methods: {
        selectedChange (selection) { //  批量处理
            const ids = []
            selection = selection || []
            selection.forEach(row => { ids.push(row.id) })
            this.tableSelection = ids
        },

        // 部门树相关
        treeDomDraw (h, { root, node, data }) { // 绘制树形结构
            return h('div', {
                'style': { display: 'inline-block', cursor: 'pointer', border: 'none', outline: 'none' }
            }, [
                h('span', {
                    'style': {
                        padding: '5px',
                        backgroundColor: data.id === this.treeSelectedDepId ? 'rgb(213, 232, 252)' : '#f5f7f9'
                    },
                    'on': { click: (souce) => {this.onTreeSelect(data.id)} }
                }, data.title + '(' + data.id + ')'),
                h('Poptip', {
                    'props': { trigger: 'hover', title: data.title, placement: 'right', transfer: true },
                    'style': { marginLeft: '5px' }
                }, [
                    h('Tag', {
                        style: {lineHeight: '18px'}
                    }, [
                        h('Icon', { props: {type: 'md-menu'} })
                    ]),
                    h('div', { slot: 'content' }, [
                        h('Button', { // 添加
                            props: { icon: 'md-add' },
                            style: { padding: '3px', marginRight: '5px' }
                            // on: { click: () => { this.treeMenuAddButton(data.id) } }
                        }),
                        h('Button', { // 编辑
                            props: { icon: 'md-create' },
                            style: { padding: '3px', marginRight: '5px' }
                            // on: { click: () => { this.treeMenuEditButton(data) } }
                        }),
                        h('Button', { // 删除
                            props: { icon: 'ios-trash' },
                            style: { padding: '3px' }
                            // on: { click: () => { this.treeMenuDelButton(data.id) } }
                        })
                    ])
                ])
            ])
        },
        onTreeSelect () {
        },

        initDataSet () { // 初始化数据源 [[模版方法不要动]]
            this.$api.student.pullSex().then(list => {
                this.dataSet.sex = list
            }, () => {
            })
            this.$api.student.pullState().then(list => {
                this.dataSet.state = list
            }, () => {
            })
            this.$api.department.list().then(list => {
                this.dataSet.treeData = list
                this.onTreeSelect()
            }, () => {
            })
        },
        initTable () { // 初始化表格 [[模版方法不要动]]
            if (!this.serrchParam) {this.serrchParam = {}} // 下发参数
            const query = getParamState()
            extend(this.search, query) // 设置表现搜索项成url缓存
            extendF(this.page, query)
            extendF(this.order, query)
            this.ajax()
        },
        hendleSearch () { // 搜索
            extend(this.serrchParam, this.search) // 设置实际搜索项成表现搜索项
            this.hendleGopage(1)
        },
        hendleReset () { // 重置 [[模版方法不要动]]
            extend(this.search, this.$options.data().search) // 重置表现搜索项成备份搜索项
            this.hendleSearch()
        },
        hendleGopage (page) { // 跳转页 [[模版方法不要动]]
            extendF(this.search, this.serrchParam) // 恢复表现搜索项成实际搜索项
            this.page.pageIndex = page
            this.ajax()
        },
        hendleSort (param) { // 排序功能 [[模版方法不要动]]
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.order.orderKey = param.key
            this.order.order = param.order
            this.ajax()
        },
        ajax: function () { // 业务ajax [[模版方法不要动]]
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading.table = true // 加载中
            this.$api.employee.list(this.serrchParam).then((info) => { // 发送ajax
                this.loading.table = false // 加载完成
                this.tableData = info.list
                this.page.rowCount = info.rowCount
            })
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.initTable()
        this.initDataSet()
    }
}
</script>
<style lang="less">
.split-pane-page-wrapper{
    height: 1800px;
    .pane{
        width: 100%; height: 100%;
    }
    .left-pane{
        padding: 22px 0 0 27px;
    }
}
</style>
