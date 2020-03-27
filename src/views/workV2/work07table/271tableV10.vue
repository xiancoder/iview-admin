<template>
    <div>
        <div class="tableLayout">
            <h2>表格v10模版规范</h2>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <Select v-model="search.taskPriority" placeholder="请选择任务级别" style="width: 180px">
                    <Option value="0" label="全部任务级别"></Option>
                    <Option v-for="option in dataSet.taskPriorityList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder="请选择任务状态" style="width: 180px">
                    <Option value="0" label="全部任务状态"></Option>
                    <Option v-for="option in dataSet.taskStatuList" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Input type="text" v-model.trim="search.businessName" placeholder="请输入业务" style="width: 180px"/>
                <br />
                <Button type="primary" :loading="loading.table" @click="hendleSearch">搜索</Button>
                <Button type="default" :loading="loading.table" @click="hendleReset">重置</Button>
                <Button type="primary" :loading="loading.btn3" @click="hendleErrorTry" class="fr">错误演示</Button>
                <Button type="primary" :loading="loading.btn2" @click="hendleDrop" class="fr">删除表格</Button>
                <Button type="primary" :loading="loading.btn1" @click="hendleCreate" class="fr">创建表格</Button>
            </div>
            <Table border :loading="loading.table" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
                <template slot-scope="{ row, index }" slot="op">
                    <Button @click="hendleEdit(row)" size="small">编辑</Button>
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
import { extend, extendF } from '@/utils/object'
import { throttle, nothing } from '@/utils/function'
import { h, saveParamState, getParamState } from '@/tools' // 自定义常用工具

export default {
    data () {
        return {
            dataSet: {
                'taskPriorityList': [],
                'taskStatuList': []
            },
            search: {
                // 'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                // 'taskStatus': '', // 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                // 以上枚举的设置十分不利于前端规范化 请不要使用0为枚举id 因为0代表全部
                // 建议 使用空值来初始显示 (虽然不大爽)
                'taskPriority': '', // 级别 0全部1一般2重要3紧急
                'taskStatus': '', // 任务状态 0全部1待接受2执行中3待验收4验收通过5已废弃6已暂停
                'businessName': '' /* 想搜索的业务名称 */
            },
            loading: {
                table: false,
                btn1: false,
                btn2: false,
                btn3: false
            },
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns: [ // 必须指定最小宽度
                {title: '任务编号', minWidth: 100, key: 'taskNumber', sortable: true},
                {title: '发布人', minWidth: 100, key: 'founder', sortable: true},
                {title: '发布日期', minWidth: 100, key: 'foundTime', sortable: true},
                {title: '负责人', minWidth: 100, key: 'personLiable'},
                {title: '计划完成日期', minWidth: 100, key: 'completeTime', render: h.defaultH('completeTime')},
                {title: '优先级', minWidth: 100, key: 'taskPriority'},
                {title: '状态', minWidth: 100, key: 'taskStatus'},
                {title: '操作', minWidth: 80, slot: 'op'}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            end1: 1 // 防呆设计
        }
    },
    methods: {
        hendleCreate () { // 操作::创建表格
            this.loading.btn1 = true
            this.$api.student.createTable().then(() => {
                this.loading.btn1 = false
            }, () => {
                this.loading.btn1 = false
            })
        },
        hendleDrop () { // 操作::删除表格
            this.loading.btn2 = true
            this.$api.student.dropTable().then(() => {
                this.loading.btn2 = false
            }, () => {
                this.loading.btn2 = false
            })
        },
        hendleErrorTry () { // 操作::错误演示
            this.loading.btn3 = true
            this.$api.student.errorTry().then(() => {
                this.loading.btn3 = false
            }, () => {
                this.loading.btn3 = false
            })
        },
        hendleEdit (param) { // 操作::编辑功能
        },
        initDataSet () { // 初始化数据源 [[模版方法不要动]]
            this.$api.task.priority().then(list => {
                this.dataSet.taskPriorityList = list
            }, () => {
            })
            this.$api.task.status().then(list => {
                this.dataSet.taskStatuList = list
            }, () => {
            })
        },
        initTable () { // 初始化表格 [[模版方法不要动]]
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
        hendleReset () { // 重置 [[模版方法不要动]]
            extend(this.search, this.serrchBack) // 重置表现搜索项成备份搜索项
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
            this.$api.task.listMine(this.serrchParam).then((info) => { // 发送ajax
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
