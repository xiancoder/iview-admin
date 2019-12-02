<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格 总计信息列</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-close" style="color:red"/> 4.0.0出的新功能 需求格式长的丑</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 满足需求 需要额外方法来整理数据</p>
                    <script type="text/html" v-pre>
                        <Table border :loading="loading" :columns="columns" :data="tableData"
                            @on-sort-change="handleSort" show-summary :summary-method="handleSum">
                        </Table>
                    </script>
                    <script type="text/js">
                        handleSum ({ columns }) {
                            return companyTableSumColumns(columns, this.tableSumData)
                        },
                        this.tableSumData = { // 假装是读来的
                            'foundTime': 10000
                        }
                    </script>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <div class="tableTool">
                <Select v-model="search.taskPriority" placeholder='请选择任务级别'>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder='请选择任务状态'>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
            </div>
            <Table :loading="loading" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort" show-summary :summary-method="handleSum">
            </Table>
            <div class="tableFooter">
                <Page ref="pager" :page-size="page.size" :current="page.index"
                    :total="page.rowCount"
                    class="fr" show-total show-elevator @on-change="handleGoPage"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { debounce, nothing } from '@/utils/function'
import { h, saveParamState, getParamState, companyTableSumColumns } from '@/tools' // 自定义常用工具
export default {
    data () {
        return {
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            search: {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '' // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns: [
                {title: '任务编号', key: 'taskNumber', sortable: true},
                {title: '发布人', key: 'founder', sortable: true},
                {title: '发布日期', key: 'foundTime', sortable: true},
                {title: '负责人', key: 'personLiable'},
                {title: '计划完成日期', key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', key: 'taskPriority'},
                {title: '状态', key: 'taskStatus'}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            'tableSumData': null, // 表格总计内容

            end1: 1 // 防呆设计
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(function () { // 操作 任何操作将重置搜索项
            console.log(this.serrchParam)
            this.hendleSearch()
        }),
        init () { // 初始化
            if (!this.serrchParam) {this.serrchParam = {}} // 下发参数
            if (!this.serrchBack) {this.serrchBack = extend({}, this.search)} // 备份
            const query = getParamState()
            extend(this.search, query) // 设置表现搜索项成url缓存
            extendF(this.page, query)
            extendF(this.order, query)
            this.ajax()
        },
        hendleSearch () { // 搜索
            extend(this.serrchParam, this.search) // 设置实际搜索项成表现搜索项
            this.handleGoPage(1)
        },
        hendleReset () { // 重置
            extend(this.search, this.serrchBack) // 重置表现搜索项成备份搜索项
            this.hendleSearch()
        },
        hendleSort (param) { // 排序功能
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.order.orderKey = param.key
            this.order.order = param.order
            this.ajax()
        },
        handleGoPage (page) { // 跳转页
            extendF(this.search, this.serrchParam) // 恢复表现搜索项成实际搜索项
            this.page.pageIndex = page
            this.ajax()
        },
        handleSum ({ columns }) {
            return companyTableSumColumns(columns, this.tableSumData)
        },
        ajax: debounce(function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.task.listMine(this.serrchParam).then((info) => { // ajax
                this.loading = false; // 加载完成
                this.tableData = info.list
                this.tableSumData = { // 假装是读来的
                    'foundTime': 10000
                }
                this.page.rowCount = info.rowCount
            })
        }),
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init(this)
        this.getDataSet()
    }
}
</script>
