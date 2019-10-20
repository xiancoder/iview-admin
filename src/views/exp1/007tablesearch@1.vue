<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格页第三版想法</div>
                <div class="blogContent" v-highlight>
                    <p>1 声明data 按照功能划分 搜索项/分页/排序/表格列属性</p>
                    <p>2 声明method 按照需要 首先放置 goto所有可能跳转 然后 hendleAjax, hendleSearch, hendleSort, hendlePage</p>
                    <p>3 代码堆之间使用 // ------------ 分割</p>
                    <p>4 ajax必须调用this.$api使用 参数转换/请求必须放在api模块</p>
                    <p>5 表格页作为最常用的第一层页面 其alert/comfime 请用js调用 其model请封装插件引入调用方便修改</p>
                    <p>6</p>
                    <p></p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <div class="tableTool">
                <Select v-model="yunxiTable.search.taskPriority" placeholder='请选择任务级别'>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="yunxiTable.search.taskStatus" placeholder='请选择任务状态'>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Button type="primary" @click="yunxiTable.hendleSearch">搜索</Button>
                <Button type="default" @click="yunxiTable.hendleReset">重置</Button>
                <Button type="default" @click="download">下载</Button>
            </div>
            <Table border :loading="yunxiTable.loading" :columns="yunxiTable.columns" :data="yunxiTable.tableData"
                @on-sort-change="yunxiTable.hendleSort">
            </Table>
            <div class="tableFooter">
                <Page ref="pager" :page-size="yunxiTable.page.size" :current="yunxiTable.page.index"
                    :total="yunxiTable.page.rowCount"
                    class="fr" show-total show-elevator @on-change="yunxiTable.hendleGoPage"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { debounce, nothing } from '@/utils/function'
import { h, saveParamState, getParamState } from '@/tools'
export default {
    data () {
        const yunxiTable = { // 有用内容
            'search': {
                'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                'taskStatus': '' // 状态 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
            },
            'loading': false,
            'page': {
                'pageIndex': 1,
                'pageSize': 30,
                'rowCount': 999
            }, // 分页 变量名最好原样
            'order': { 'orderKey': '', 'order': '' }, // 排序 变量名最好原样
            'columns': [
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
            'tableData': [] // 表格内容
        }
        this.yunxiTable.init = () => { // 初始化
            if (!this.yunxiTable.serrchParam) {this.yunxiTable.serrchParam = {}} // 下发参数
            if (!this.yunxiTable.serrchBack) {this.yunxiTable.serrchBack = extend({}, this.yunxiTable.search)} // 备份
            const query = getParamState()
            extend(this.yunxiTable.search, query) // 设置表现搜索项成url缓存
            extendF(this.yunxiTable.page, query)
            extendF(this.yunxiTable.order, query)
            this.yunxiTable.ajax()
        }
        this.yunxiTable.hendleSearch = () => { // 搜索
            extend(this.yunxiTable.serrchParam, this.yunxiTable.search) // 设置实际搜索项成表现搜索项
            this.yunxiTable.goPage(1)
        }
        this.yunxiTable.hendleReset = () => { // 重置
            extend(this.yunxiTable.search, this.yunxiTable.serrchBack) // 重置表现搜索项成备份搜索项
            this.yunxiTable.search()
        }
        this.yunxiTable.hendleGoPage = (page) => { // 跳转页
            extendF(this.yunxiTable.search, this.yunxiTable.serrchParam) // 恢复表现搜索项成实际搜索项
            this.yunxiTable.page.pageIndex = page
            this.yunxiTable.ajax()
        }
        this.yunxiTable.hendleSort = (param) => { // 排序功能
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.yunxiTable.order.orderKey = param.key
            this.yunxiTable.order.order = param.order
            this.yunxiTable.ajax()
        }
        this.yunxiTable.ajax = debounce(() => { // 业务ajax
            extend(this.yunxiTable.serrchParam, this.yunxiTable.search) // 设置实际搜索项
            extend(this.yunxiTable.serrchParam, this.yunxiTable.page) // 设置分页
            extend(this.yunxiTable.serrchParam, this.yunxiTable.order) // 设置排序
            saveParamState(this.yunxiTable.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.task.listMine(this.yunxiTable.serrchParam).then((info) => { // ajax
                this.yunxiTable.loading = false; // 加载完成
                this.yunxiTable.tableData = info.list
                this.yunxiTable.page.rowCount = info.rowCount
            })
        })
        return {
            yunxiTable,
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            end1: 1 // 防呆设计
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(() => { // 操作 任何操作将重置搜索项
            console.log(this.yunxiTable.serrchParam)
            this.yunxiTable.search()
        }),
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.yunxiTable.init(this)
        this.getDataSet()
    }
}
</script>
