<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small>复杂排版</small><b>定型渲染</b></h2>
            </div>
            <tab></tab>
            <Table border :loading="loading.table" :columns="columns" :data="tableData"
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
</template>
<script>
import { extend, extendF, nothing } from '@/utils'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具
import tab from './271tableV10DHC2'

export default {
    name: 'workV2_work07table_271tableV10DHC2_fuza', // 如果想用缓存必须声明页面name
    components: { tab },
    data () {
        return {
            dataSet: {
            },
            search: {
            },
            loading: {
                table: false // 表格加载
            },
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 [[模版变量不要动]]
            order: { orderKey: '', order: '' }, // 排序 [[模版变量不要动]]
            columns: [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                {'title': 'id', 'minWidth': 100, 'key': 'id', 'sortable': true},
                {
                    title: '学生', 'minWidth': 200, key: 'name', align: 'left',
                    render: h.avatar2('userPhoto', 'name', 'tel', 'pos')
                },
                {'title': '性别', 'minWidth': 100, 'key': 'sex', 'render': h.readArr('sex', this.$api.student.pullSex('table'))},
                {'title': '状态', 'minWidth': 100, 'key': 'state', 'render': h.readArr('state', this.$api.student.pullState('table'))},
                {'title': '年龄', 'minWidth': 100, 'key': 'age'},
                {'title': '留学时长', 'minWidth': 100, 'key': 'stay'},
                {'title': '操作', 'minWidth': 80, 'slot': 'op', 'align': 'center'}
            ],
            'serrchParam': null, // 实际搜索项 [[模版变量不要动]]
            'tableData': [], // 表格内容 [[模版变量不要动]]
            end1: 1 // 防呆设计
        }
    },
    methods: {
        initTable () { // 初始化表格 [[模版方法不要动]]
            if (!this.serrchParam) {this.serrchParam = {}} // 下发参数
            const query = getParamState()
            extend(this.search, query) // 设置表现搜索项成url缓存
            extendF(this.page, query)
            extendF(this.order, query)
            this.ajax()
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
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.initTable()
    }
}
</script>
