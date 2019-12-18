<template>
    <div class="tableLayout">
        <tab></tab>
        <div class="tableTool">
            <DatePicker type="month" :value="search.date" placeholder="选择日期" format="yyyy-MM" v-if="roleId==1"
                @on-change="(date)=>{search.date=date}" style="width: 150px">
            </DatePicker>
            <DatePicker :value="search.start2end" type="daterange" placeholder="选择开始日期结束日期" v-if="roleId==2||roleId==3"
                @on-change="search.start2end=$event" @on-clear="search.start2end=[]" split-panels style="width: 220px">
            </DatePicker>
            <Select v-model="search.aderId" filterable placeholder="请选择广告主"  style="width: 300px" v-if="roleId==2">
                <Option value="all" label="全部广告主"></Option>
                <Option v-for="option in dataSet.aderIdList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.state" placeholder="请选择状态" style="width: 150px" v-if="roleId==2||roleId==3">
                <Option value="all" label="全部状态"></Option>
                <Option v-for="option in dataSet.resultList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.type" placeholder="请选择充值方式" style="width: 150px" v-if="roleId==2||roleId==3">
                <Option value="all" label="全部充值方式"></Option>
                <Option v-for="option in dataSet.rechargeTypeList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Input type="text" v-model="search.searchName" placeholder="收款人、付款人、广告主" v-if="roleId==3"
                style="width: 180px"/>
            <Button type="primary" @click="hendleSearch">搜索</Button>
            <!--
            <Button type="primary" class="fr" @click="hendleExport" v-if="roleId==2||roleId==3">导出</Button>
            <Button type="primary" class="fr" @click="model.importBatch=!model.importBatch" v-if="roleId==3">批量导入</Button>
            -->
        </div>
        <Modal v-model="model.importBatch" closable width="640" :mask-closable="false" footer-hide>
            <import-batch :flag="model.importBatch" :from="{}" @on-submit="importBatchSubmit"/>
        </Modal>
        <Table border :loading="loading" :columns="columns1" :data="tableData" @on-sort-change="hendleSort"
            show-summary :summary-method="handleSum" v-if="roleId==1">
        </Table>
        <Table border :loading="loading" :columns="columns2" :data="tableData" @on-sort-change="hendleSort"
            show-summary :summary-method="handleSum" v-if="roleId==2">
        </Table>
        <Table border :loading="loading" :columns="columns3" :data="tableData" @on-sort-change="hendleSort"
            show-summary :summary-method="handleSum" v-if="roleId==3">
        </Table>
        <div class="tableFooter" v-if="roleId==2||roleId==3">
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
import tab from './list'
import { extend, extendF } from '@/utils/object'
import { nothing } from '@/utils/function'
import { sevenRange, todayMouth } from '@/utils/date'
import { h, saveParamState, getParamState, companyTableSumColumns } from '@/tools' // 自定义常用工具
import ImportBatch from './importBatchModal' // 修改

export default {
    components: { tab, ImportBatch },
    data () {
        const resultArr = this.$api.finance.resultList('table')
        const rechargeTypeArr = this.$api.finance.rechargeTypeList('table')
        const start2end = sevenRange()
        const date = todayMouth()
        return {
            dataSet: {
                'aderIdList': [],
                'resultList': [],
                'rechargeTypeList': []
            },
            search: {
                date, // 日期 yyyy-mm
                start2end, // 日期范围 yyyy-mm-dd
                aderId: 'all', // 广告主ID
                searchName: '', // 收款人付款人广告主
                state: 'all', // 状态 0全部1成功2失败
                type: 'all' // 充值方式 1银行转账2在线充值
            },
            model: {
                importBatch: false
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns1: [
                {title: '充值编号', key: 'code'},
                {title: '到账日期', key: 'arrival_date'},
                {title: '充值方式', key: 'recharge_type', render: h.readArr('recharge_type', rechargeTypeArr)},
                {title: '付款账号', key: 'recharge_account'},
                {title: '付款人', key: 'recharge_name'},
                {title: '充值金额', key: 'arrival_money'},
                {title: '状态', key: 'state', render: h.readArr('state', resultArr)}
            ],
            columns2: [
                {title: '充值编号', key: 'code'},
                {title: '广告主', width: 300, key: 'ader_name'},
                {title: '到账日期', key: 'arrival_date'},
                {title: '充值方式', key: 'recharge_type', render: h.readArr('recharge_type', rechargeTypeArr)},
                {title: '到账金额', key: 'arrival_money'},
                {title: '状态', key: 'state', render: h.readArr('state', resultArr)}
            ],
            columns3: [
                {title: '充值编号', key: 'code'},
                {title: '广告主', width: 300, key: 'ader_name'},
                {title: '到账日期', key: 'arrival_date'},
                {title: '充值方式', key: 'recharge_type', render: h.readArr('recharge_type', rechargeTypeArr)},
                {title: '付款账号', key: 'recharge_account'},
                {title: '付款人', key: 'recharge_name'},
                {title: '收款账号', key: 'arrival_account'},
                {title: '收款人', key: 'arrival_name'},
                {title: '到账金额', key: 'arrival_money'},
                {title: '摘要或用途', key: 'remark'},
                {title: '状态', key: 'state', render: h.readArr('state', resultArr)}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            'tableSumData': null, // 表格总计内容

            end1: 1 // 防呆设计
        }
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.userRoleId } // 用户角色权限
    },
    methods: {
        getDataSet () { // 初始化数据源
            if (this.roleId === 2) this.$api.advertiser.pull().then(list => { this.dataSet.aderIdList = list })
            if (this.roleId === 2 || this.roleId === 3) this.$api.finance.resultList().then(list => { this.dataSet.resultList = list })
            if (this.roleId === 2 || this.roleId === 3) this.$api.finance.rechargeTypeList().then(list => { this.dataSet.rechargeTypeList = list })
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
        /* hendleExport: debounce(function () { // 操作
            this.$api.finance.rechargeList(this.serrchParam, this.roleId, 'export')
        }), */
        ajax: function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.finance.rechargeList(this.serrchParam, this.roleId).then((info) => { // ajax
                this.loading = false; // 加载完成
                this.tableData = info.list
                this.page.rowCount = info.row_count
                this.tableSumData = info.sum
            })
        },
        importBatchSubmit (flag) {// 批量导入
            this.model.importBatch = false
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init(this)
        this.getDataSet()
    }
}
</script>
