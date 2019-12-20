<template>
    <div class="tableLayout">
        <tab></tab>
        <div class="tableTool" @keyup.enter.stop="hendleSearch">
            <DatePicker type="month" :value="search.date" placeholder="选择日期" format="yyyy-MM" v-if="roleId==1"
                @on-change="(date)=>{search.date=date}" style="width: 150px">
            </DatePicker>
            <DatePicker :value="search.start2end" type="daterange" placeholder="选择开始日期结束日期" v-if="roleId==2||roleId==3"
                @on-change="search.start2end=$event" @on-clear="search.start2end=[]" split-panels style="width: 220px">
            </DatePicker>
            <Select v-model="search.aderId" filterable placeholder="请选择广告主" style="width: 300px" v-if="roleId==2||roleId==3">
                <Option value="all" label="全部广告主"></Option>
                <Option v-for="option in dataSet.aderIdList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <!--
            <Input type="text" v-model="search.businessId" placeholder="请输入业务" style="width: 180px" v-if="roleId==2"/>
            -->
            <Select v-model="search.businessId" filterable placeholder="请选择业务" style="width: 180px" v-if="roleId==3">
                <Option value="all" label="全部业务"></Option>
                <Option v-for="option in dataSet.businessIdList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.state" placeholder="请选择状态" style="width: 150px" v-if="roleId==2||roleId==3">
                <Option value="all" label="全部状态"></Option>
                <Option v-for="option in dataSet.stateList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Button type="primary" @click="hendleSearch">搜索</Button>
            <Button type="primary" class="fr" @click="hendleExport" v-if="roleId==2||roleId==3">导出</Button>
        </div>
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
import { debounce, nothing } from '@/utils/function'
import { sevenRange, todayMouth } from '@/utils/date'
import { h, saveParamState, getParamState, companyTableSumColumns } from '@/tools' // 自定义常用工具
export default {
    components: { tab },
    data () {
        const stateArr = this.$api.finance.stateList('table')
        const start2end = sevenRange()
        const date = todayMouth()
        return {
            dataSet: {
                'aderIdList': [],
                'businessIdList': [],
                'stateList': []
            },
            search: {
                date, // 日期 yyyy-mm
                start2end, // 日期范围 yyyy-mm-dd
                aderId: 'all', // 广告主ID
                businessId: 'all', // 业务ID
                state: 'all' // 状态 0失败1成功
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns1: [
                {title: '消耗日期', key: 'date'},
                {title: '预估消耗金额', key: 'cost_pre', render: h.moneyFormat('cost_pre')},
                {title: '实际消耗金额', key: 'cost_real', render: h.moneyFormat('cost_real')},
                {title: '状态', key: 'state', render: h.readArr('state', stateArr)}
            ],
            columns2: [
                {title: '消耗日期', key: 'date'},
                {title: '广告主', width: 300, key: 'ader_name'},
                {title: '预估消耗金额', key: 'cost_pre', render: h.moneyFormat('cost_pre')},
                {title: '实际消耗金额', key: 'cost_real', render: h.moneyFormat('cost_real')},
                {title: '状态', key: 'state', render: h.readArr('state', stateArr)}
            ],
            columns3: [
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

            end1: 1 // 防呆设计
        }
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.userRoleId } // 用户角色权限
    },
    methods: {
        getDataSet () { // 初始化数据源
            if (this.roleId === 2 || this.roleId === 3) this.$api.advertiser.pull().then(list => { this.dataSet.aderIdList = list })
            if (this.roleId === 3) this.$api.business.pull().then(list => { this.dataSet.businessIdList = list })
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
            this.$api.finance.costList(this.serrchParam, this.roleId, 'export')
        }),
        ajax: function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.finance.costList(this.serrchParam, this.roleId).then((info) => { // ajax
                this.loading = false; // 加载完成
                this.tableData = info.list
                this.page.rowCount = info.row_count
                this.tableSumData = info.sum
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
