<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格标准规范写法 V1 批量选中数据</div>
                <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 本模板经历实战可以使用 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 批量选中数据 分页以后 table不保存旧选中 返回上一页 不会选中已有内容 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 重大bug 每次读取分页后一定要清空选中数组 不然bug滚滚而来 </p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                    <p>给 data 项设置特殊 key _checked: true 可以默认选中当前项。</p>
                    <p>给 data 项设置特殊 key _disabled: true 可以禁止选择当前项。</p>
                    <p></p>
                    <script type="text/html" v-pre>
                        <Table border ref="tableID" :loading="loading" :columns="columns" :data="tableData"
                            @on-sort-change="hendleSort" @on-selection-change="selectedChange">
                        </Table>
                    </script>
                    <script type="text/js">
                        columns: [
                            { type: 'selection', width: 60, align: 'center' },
                            {title: '任务编号', key: 'taskNumber', sortable: true},
                            {title: '发布人', key: 'founder', sortable: true},
                            {title: '发布日期', key: 'foundTime', sortable: true},
                            {title: '负责人', key: 'personLiable'},
                            {title: '计划完成日期', key: 'completeTime', render: h.defaultH('completeTime')},
                            {title: '优先级', key: 'taskPriority'},
                            {title: '状态', key: 'taskStatus'}
                        ],
                        'tableSelection': [], // 表格选中项
                    </script>
                    <script type="text/js">
                        selectedChange (selection) {
                            const ids = []
                            selection = selection || []
                            selection.forEach(row => { ids.push(row.id) })
                            this.tableSelection = ids
                        },
                    </script>
                    <script type="text/js">
                        this.$api.task.listMine(this.serrchParam).then((info) => { // ajax
                            this.loading = false; // 加载完成
                            const infolist = (info.list || []).map(row => { // 根据条件禁止选中 // --------------------参考
                                row._disabled = row.taskNumber > 5500
                                return row
                            })
                            this.tableData = infolist
                            this.page.rowCount = info.rowcount
                            this.tableSelection = [] // -------------------------------------------------------重要
                        })
                    </script>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
        <div class="tableLayout">
            <tab></tab>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <Select v-model="search.taskPriority" placeholder='请选择任务级别'>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder='请选择任务状态'>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Button type="primary" @click="hendleSearch">搜索</Button>
                <Button type="default" @click="hendleReset">重置</Button>
                <Button type="default" class="fr" @click="handleSelectAll(false)">取消全选</Button>
                <Button type="default" class="fr" @click="handleSelectAll(true)">设置全选</Button>
            </div>
            <Table border ref="tableID" :loading="loading" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort" @on-selection-change="selectedChange">
            </Table>
            <div class="tableFooter">
                <span> {{tableSelection}} </span>
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
import { extend, extendF, debounce, nothing } from '@/utils'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具
import tab from './205tab'

export default {
    components: { tab },
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
                {type: 'selection', width: 60, align: 'center'},
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
            'tableSelection': [], // 表格选中项 // -------------------------------------------------------重要
            end1: 1 // 防呆设计
        }
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.task.priority().then(list => { this.dataSet.taskPriorityList = list })
            this.$api.task.status().then(list => { this.dataSet.taskStatuList = list })
        },
        download: debounce(function () { // 操作 任何操作将重置搜索项
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
            this.hendleGopage(1)
        },
        hendleReset () { // 重置
            extend(this.search, this.serrchBack) // 重置表现搜索项成备份搜索项
            this.hendleSearch()
        },
        hendleGopage (page) { // 跳转页
            extendF(this.search, this.serrchParam) // 恢复表现搜索项成实际搜索项
            this.page.pageIndex = page
            this.ajax()
        },
        hendleSort (param) { // 排序功能
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.order.orderKey = param.key
            this.order.order = param.order
            this.ajax()
        },
        handleSelectAll (status) {
            this.$refs.tableID.selectAll(status);
        },
        selectedChange (selection) { // -------------------------------------------------------重要
            const ids = []
            selection = selection || []
            selection.forEach(row => { ids.push(row.id) })
            this.tableSelection = ids
        },
        ajax: function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.task.listMine(this.serrchParam).then((info) => { // ajax
                this.loading = false; // 加载完成
                const infolist = (info.list || []).map(row => { // 根据条件禁止选中 // --------------------参考
                    row._disabled = row.taskNumber > 5500
                    return row
                })
                this.tableData = infolist
                this.page.rowCount = info.rowcount
                this.tableSelection = [] // -------------------------------------------------------重要
            })
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init(this)
        this.getDataSet()
    }
}
</script>
