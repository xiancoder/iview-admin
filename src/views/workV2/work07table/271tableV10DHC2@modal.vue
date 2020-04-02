<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small> DHC补充内容 </small><b> 弹出表单 </b></h2>
            </div>
            <tab></tab>
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
                <Button type="primary" :loading="loading.btn1" @click="model.show1=!model.show1" class="fr">添加</Button>
            </div>
            <Table border :loading="loading.table" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="text" @click="model.show1=!model.show1" size="small">编辑</Button>
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
        <Modal v-model="model.show1" closable width="720" :mask-closable="false" footer-hide>
            <from1 :flag="model.show1" :from="model.frm1" @on-submit="handleSubmit4form"/>
        </Modal>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格v10模版规范</div>
                <Divider orientation="right">项目上的经验积累</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 1 搜索/排序/分页/操作 相互关系固化在代码中 尽量不要修改</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2 内容的花样尽量使用tool中h方法提供的render方式</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 3 所有右边的按钮使用btn代表 表格中的按钮使用op代表</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 4 btn必须考虑loading效果 op必须考虑节流效果</p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { nothing } from '@/utils/function'
import { h, saveParamState, getParamState, alertMsg } from '@/tools' // 自定义常用工具
import tab from './271tableV10DHC2'
import from1 from './272formV10'

export default {
    components: { tab, from1 },
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
            model: {
                show1: false,
                frm1: {
                    input1: '123456'
                }
            },
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 [[模版变量不要动]]
            order: { orderKey: '', order: '' }, // 排序 [[模版变量不要动]]
            columns: [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                {title: 'id', minWidth: 100, key: 'id', sortable: true},
                {title: '姓名', minWidth: 100, key: 'name'},
                {title: '性别', minWidth: 100, key: 'sex', render: h.readArr('sex', this.$api.student.pullSex('table'))},
                {title: '状态', minWidth: 100, key: 'state', render: h.readArr('state', this.$api.student.pullState('table'))},
                {title: '年龄', minWidth: 100, key: 'age'},
                {title: '留学时长', minWidth: 100, key: 'stay'},
                {title: '操作', minWidth: 80, slot: 'op', align: 'center'}
            ],
            'serrchParam': null, // 实际搜索项 [[模版变量不要动]]
            'tableData': [], // 表格内容 [[模版变量不要动]]
            end1: 1 // 防呆设计
        }
    },
    methods: {
        hendleEdit (row) { // 操作::编辑功能
            alertMsg(`姓名: ${row.name}<br/> 性别: ${row.sex}<br/> 状态: ${row.stare}<br/> 年龄: ${row.age}<br/> 留学时长: ${row.stay}<br/> `, '单元内容')
        },
        hendleDel (id) { // 操作::删除
            if (this.loading.op2) return false
            this.loading.op2 = true
            this.$api.student.del(id).then(() => {
                this.loading.op2 = false
                this.ajax()
            }, () => {
                this.loading.op2 = false
            })
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
            this.$api.student.listAll(this.serrchParam).then((info) => { // 发送ajax
                this.loading.table = false // 加载完成
                this.tableData = info.list
                this.page.rowCount = info.rowcount
            })
        },
        // 弹框交互
        handleSubmit4form (flag) {
            this.model.show1 = false
            console.log('提交', flag ? '成功' : '放弃')
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.initTable()
        this.initDataSet()
    }
}
</script>
