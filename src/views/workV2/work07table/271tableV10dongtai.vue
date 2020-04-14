<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small>列的动态显隐</small><b>1234567890</b></h2>
            </div>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <Input type="text" v-model.trim="search.businessName" placeholder="请输入姓名" style="width: 180px"/>
                <Select v-model="search.sex" placeholder="请选择性别" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.sex" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder="请选择状态" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.state" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.age" placeholder="请选择年龄" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.age" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.stay" placeholder="请选择时长" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.stay" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <br />
                <Button type="primary" :loading="loading.table" @click="hendleSearch">搜索</Button>
                <Button type="default" :loading="loading.table" @click="hendleReset">重置</Button>
            </div>
            <Table border :loading="loading.table" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="text" size="small">编辑</Button>
                    <Button type="text" size="small">删除</Button>
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
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格v10的动态显隐</div>
                <Divider orientation="right">项目上的经验积累</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 1 需要注意搜索过后即ajax完成再执行显隐</p>
                    <p><Icon type="md-close" style="color:green"/> 2 动态计算 监听 似乎都不好使 还是在ajax前执行一下表格属性的变化吧</p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF, nothing } from '@/utils'

import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具
import tab from './271tableV10'

export default {
    components: { tab },
    data () {
        return {
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
                ]
            },
            search: {
                // 'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                // 'taskStatus': '', // 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                // 以上枚举的设置十分不利于前端规范化 请不要使用0为枚举id 因为0代表全部
                // 建议 使用空值来初始显示 (虽然不大爽)
                'sex': '', // 性别 0全部1男2女
                'state': '', // 状态 0全部1在校2记过3劝退4开除
                'name': '',
                'age': '',
                'stay': ''
            },
            loading: {
                table: false, // 表格加载
                btn1: false, btn2: false, btn3: false, btn4: false, // 功能节流
                op1: false, op2: false // 操作节流
            },
            columns: [], // 列配置 必须指定最小宽度 [[模版变量不要动]]
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 [[模版变量不要动]]
            order: { orderKey: '', order: '' }, // 排序 [[模版变量不要动]]
            'serrchParam': null, // 实际搜索项 [[模版变量不要动]]
            'tableData': [], // 表格内容 [[模版变量不要动]]
            end1: 1 // 防呆设计
        }
    },
    /* computed: { // 计算属性
        columns () {
            const c = [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                {'title': 'id', 'minWidth': 100, 'key': 'id', 'sortable': true},
                {'title': '姓名', 'minWidth': 100, 'key': 'name'},
                {'title': '性别', 'minWidth': 100, 'key': 'sex', 'render': h.readArr('sex', this.$api.student.pullSex('table'))},
                {'title': '状态', 'minWidth': 100, 'key': 'state', 'render': h.readArr('state', this.$api.student.pullState('table'))},
                {'title': '年龄', 'minWidth': 100, 'key': 'age'},
                {'title': '留学时长', 'minWidth': 100, 'key': 'stay'},
                {'title': '操作', 'minWidth': 80, 'slot': 'op', 'align': 'center'}
            ]
            if (this.serrchParam && this.serrchParam.sex === '2') {
                c.splice(2, 1)
            }
            console.log(c, this.serrchParam)
            return c
        }
    },
    watch: { // 监听
        serrchParam: {
            handler: function (val, oldval) {
                console.log(val)
                if( val.sex === '2' ) {
                    this.columns = [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                        {'title': 'id', 'minWidth': 100, 'key': 'id', 'sortable': true},
                        {'title': '姓名', 'minWidth': 100, 'key': 'name', 'slot': 'op'},
                        {'title': '状态', 'minWidth': 100, 'key': 'state', 'render': h.readArr('state', this.$api.student.pullState('table'))},
                        {'title': '年龄', 'minWidth': 100, 'key': 'age'},
                        {'title': '留学时长', 'minWidth': 100, 'key': 'stay'},
                        {'title': '操作', 'minWidth': 80, 'slot': 'op', 'align': 'center'}
                    ]
                }
            },
            deep:true//对象内部的属性监听，也叫深度监听
        },
    }, */
    methods: {
        initDataSet () { // 初始化数据源 [[模版方法不要动]]
            this.$api.student.pullSex().then(list => {
                this.dataSet.sex = list
            }, () => {
            })
            this.$api.student.pullState().then(list => {
                this.dataSet.state = list
            }, () => {
            })
        },
        changeColumns () { // 改变表格属性
            const c = [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                {'title': 'id', 'minWidth': 100, 'key': 'id', 'sortable': true},
                {'title': '姓名', 'minWidth': 100, 'key': 'name'},
                {'title': '性别', 'minWidth': 100, 'key': 'sex', 'render': h.readArr('sex', this.$api.student.pullSex('table'))},
                {'title': '状态', 'minWidth': 100, 'key': 'state', 'render': h.readArr('state', this.$api.student.pullState('table'))},
                {'title': '年龄', 'minWidth': 100, 'key': 'age'},
                {'title': '留学时长', 'minWidth': 100, 'key': 'stay'},
                {'title': '操作', 'minWidth': 80, 'slot': 'op', 'align': 'center'}
            ]
            if (this.serrchParam && this.serrchParam.sex === '2') {
                c.splice(2, 1)
            }
            this.columns = c
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
            this.changeColumns()
            saveParamState(this.serrchParam) // 存url
            this.loading.table = true // 加载中
            this.$api.student.listAll(this.serrchParam).then((info) => { // 发送ajax
                this.loading.table = false // 加载完成
                this.tableData = info.list
                this.page.rowCount = info.rowcount
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
