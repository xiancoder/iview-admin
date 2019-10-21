<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格 弹窗表单</div>
                <div class="blogContent" v-highlight>
                    <p>1 请将弹窗表单中的表单作为组件引入 而非直接在本页面中编写 (杜绝又臭又长)</p>
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
                <Button type="default" @click="model.show1=true">表单提交</Button>
                <Button type="default" @click="gogo">表单跳过去看看</Button>
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
        <Modal v-model="model.show1" title="下线"
            :closable="false" :mask-closable="false" footer-hide>
            <from1 :startDate="startDate" @on-submit="handleSubmit1"/>
        </Modal>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { debounce } from '@/utils/function'
import { h, saveParamState, getParamState } from '@/tools'
import from1 from './014from1'
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
            'tableData': [], // 表格内容
            init: () => { // 初始化
                if (!this.yunxiTable.serrchParam) {this.yunxiTable.serrchParam = {}} // 下发参数
                if (!this.yunxiTable.serrchBack) {this.yunxiTable.serrchBack = extend({}, this.yunxiTable.search)} // 备份
                const query = getParamState()
                extend(this.yunxiTable.search, query) // 设置表现搜索项成url缓存
                extendF(this.yunxiTable.page, query)
                extendF(this.yunxiTable.order, query)
                this.yunxiTable.ajax()
            },
            hendleSearch: () => { // 搜索
                extend(this.yunxiTable.serrchParam, this.yunxiTable.search) // 设置实际搜索项成表现搜索项
                this.yunxiTable.goPage(1)
            },
            hendleReset: () => { // 重置
                extend(this.yunxiTable.search, this.yunxiTable.serrchBack) // 重置表现搜索项成备份搜索项
                this.yunxiTable.search()
            },
            hendleGoPage: (page) => { // 跳转页
                extendF(this.yunxiTable.search, this.yunxiTable.serrchParam) // 恢复表现搜索项成实际搜索项
                this.yunxiTable.page.pageIndex = page
                this.yunxiTable.ajax()
            },
            hendleSort: (param) => { // 排序功能
                // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
                this.yunxiTable.order.orderKey = param.key
                this.yunxiTable.order.order = param.order
                this.yunxiTable.ajax()
            },
            ajax: debounce(() => { // 业务ajax
                extend(this.yunxiTable.serrchParam, this.yunxiTable.search) // 设置实际搜索项
                extend(this.yunxiTable.serrchParam, this.yunxiTable.page) // 设置分页
                extend(this.yunxiTable.serrchParam, this.yunxiTable.order) // 设置排序
                saveParamState(this.yunxiTable.serrchParam) // 存url
                this.yunxiTable.loading = true // 加载中
                this.$api.task.listMine(this.yunxiTable.serrchParam).then((info) => { // ajax
                    this.yunxiTable.loading = false; // 加载完成
                    this.yunxiTable.tableData = info.list
                    this.yunxiTable.page.rowCount = info.rowCount
                })
            })
        }
        return {
            yunxiTable,
            model: {
                show1: false
            },
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            startDate: new Date(2019,3,4),
            end1: 1 // 防呆设计
        }
    },
    components: {
        from1
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(function () { // 操作 任何操作将重置搜索项
            console.log(this.yunxiTable.serrchParam)
            this.yunxiTable.search()
        }),
        handleSubmit1 (res) { // 表单1 提交完毕
            this.model.show1=false
            if ( res === 1 ) {
                this.yunxiTable.ajax()
            }
        },
        gogo (res) { // 表单1 提交完毕
            const name = "exp1_014from1"
            this.$router.push({name})
        },
    },
    mounted: function () {
        this.yunxiTable.init()
        this.getDataSet()
    }
}
</script>
