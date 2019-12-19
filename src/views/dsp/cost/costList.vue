<template>
    <div class="tableLayout">
        <Tabs>
            <TabPane label="消耗管理"></TabPane>
        </Tabs>
        <div class="tableTool">
            <DatePicker :value="search.start2end" type="daterange" placeholder="选择开始日期结束日期"
                @on-change="search.start2end=$event" @on-clear="search.start2end=[]" split-panels style="width: 220px">
            </DatePicker>
            <Select v-model="search.aderId" filterable placeholder="请选择广告主" style="width: 150px" v-if="roleId==2">
                <Option value="all" label="全部广告主"></Option>
                <Option v-for="option in dataSet.aderIdList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Input type="text" v-model="search.businessName" placeholder="请输入业务" style="width: 180px"/>
            <Select v-model="search.state" placeholder="请选择状态" style="width: 150px">
                <Option value="all" label="全部状态"></Option>
                <Option v-for="option in dataSet.stateList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Button type="warning" @click="model.importRealCost=!model.importRealCost" class="fr">上传封账数据</Button>
            <Button type="warning" @click="model.importRealPre=!model.importRealPre" class="fr">上传预估消耗</Button>
            <br>
            <Button type="primary" @click="hendleSearch">搜索</Button>
            <Button type="primary" @click="hendleClose">封账</Button>
            <Button type="primary" @click="model.closeBatch=!model.closeBatch">批量封账</Button>
            <Button type="primary" class="fr" @click="hendleExport">导出</Button>
        </div>
        <Modal v-model="model.importRealPre" closable width="640" :mask-closable="false" footer-hide>
            <import-real-pre :flag="model.importRealPre" :from="{}" @on-submit="importRealPreSubmit"/>
        </Modal>
        <Modal v-model="model.importRealCost" closable width="640" :mask-closable="false" footer-hide>
            <import-real-cost :flag="model.importRealCost" :from="{}" @on-submit="importRealCostSubmit"/>
        </Modal>
        <Modal v-model="model.closeBatch" closable width="500" :mask-closable="false" footer-hide>
            <close-batch :flag="model.closeBatch" :from="{}" @on-submit="closeBatchSubmit"/>
        </Modal>
        <Table border :loading="loading" :columns="columns1" :data="tableData" @on-sort-change="hendleSort"
            @on-selection-change="selectedChange"
            show-summary :summary-method="handleSum" >
        </Table>
        <div class="tableFooter">
            <span> {{showPageCount(page.rowCount,page.pageIndex,page.pageSize)}}</span>
            <Page ref="pager" :page-size="page.pageSize" :current="page.pageIndex" :total="page.rowCount"
                show-sizer show-elevator class="fr"
                @on-change="v=>{hendleGopage(v)}"
                @on-page-size-change="v=>{page.pageSize=v;hendleGopage(1)}"/>
            </Page>
            <span class="fr"> {{showPageRow(page.rowCount,page.pageIndex,page.pageSize)}}</span>
        </div>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils/object'
import { debounce, nothing } from '@/utils/function'
import { sevenRange } from '@/utils/date'
import { h, saveParamState, getParamState, companyTableSumColumns, error } from '@/tools' // 自定义常用工具
import ImportRealPre from './importRealPreModal' // 上传预估消耗
import ImportRealCost from './importRealCostModal' // 上传封账数据
import CloseBatch from './closeBatchModal' // 批量封账

export default {
    components: { ImportRealCost, ImportRealPre, CloseBatch },
    data () {
        const stateArr = this.$api.finance.stateList('table')
        const start2end = sevenRange()
        return {
            dataSet: {
                'aderIdList': [],
                'stateList': []
            },
            search: {
                date: '', // 日期 yyyy-mm
                start2end, // 日期范围 yyyy-mm-dd
                aderId: 'all', // 广告主ID
                businessName: '', // 业务名称
                state: 'all' // 状态 0失败1成功
            },
            model: {
                importRealPre: false,
                importRealCost: false,
                closeBatch: false
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns1: [
                {type: 'selection', width: 70, align: 'center'},
                {title: '消耗日期', key: 'date'},
                {title: '广告主', width: 300, key: 'ader_name'},
                {title: '用户名', key: 'user_name'},
                {title: '业务名称', key: 'buis_name'},
                {title: '预估消耗金额', key: 'cost_pre', render: h.moneyFormat('cost_pre')},
                {title: '实际消耗金额', key: 'cost_real', render: h.moneyFormat('cost_real')},
                {title: '状态', key: 'state', render: h.readArr('state', stateArr)}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            'tableSumData': null, // 表格总计内容
            'tableSelection': [], // 表格选中项

            end1: 1 // 防呆设计
        }
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.userRoleId } // 用户角色权限
    },
    methods: {
        getDataSet () { // 初始化数据源
            if (this.roleId === 2) this.$api.advertiser.pull().then(list => { this.dataSet.aderIdList = list })
            if (this.roleId === 2 || this.roleId === 3) this.$api.finance.stateList().then(list => { this.dataSet.stateList = list })
        },
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
        handleSum ({ columns }) {
            return companyTableSumColumns(columns, this.tableSumData)
        },
        hendleExport: debounce(function () { // 操作
            this.$api.cost.costList(this.serrchParam, 'export')
        }),
        selectedChange (selection) {
            const ids = []
            selection = selection || []
            selection.forEach(row => { ids.push(row.id) })
            this.tableSelection = ids
        },
        hendleClose () {
            if (this.tableSelection.length) {
                this.$tool.confirm('封账后数据不可修改, 确认将所选数据进行封账吗?', '封账确认').then(() => {
                    this.$api.cost.sealAccount(this.tableSelection).then((info) => { // ajax
                        this.init(this)
                    })
                })
            } else {
                error('请选择封账数据')
            }
        },
        ajax: function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.cost.costList(this.serrchParam).then((info) => { // ajax
                this.loading = false; // 加载完成
                const infolist = (info.list || []).map(row => { // 根据条件禁止选中
                    row._disabled = row.state === 2
                    return row
                })
                this.tableData = infolist
                this.page.rowCount = info.row_count
                this.tableSumData = info.sum
                this.tableSelection = [] // 清空之前的选中
            })
        },
        closeBatchSubmit (flag) {
            this.model.closeBatch = false
            if (flag === 1) this.init(this)
        },
        importRealCostSubmit (flag) {
            this.model.importRealCost = false
            this.hendleGopage(1)
        },
        importRealPreSubmit (flag) {
            this.model.importRealPre = false
            this.hendleGopage(1)
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init(this)
        this.getDataSet()
    }
}
</script>
