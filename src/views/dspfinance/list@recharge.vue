<template>
    <div class="tableLayout">
        <div v-if="roleId==1">1231231231231231</div>
        <tab></tab>
        <div class="tableTool">
            <DatePicker type="date" v-model="search.date1" placeholder="选择日期" v-if="roleId==1"
                @on-change="search.date=$event" style="width: 180px">
            </DatePicker>
            <DatePicker :value="search.start2end" type="daterange" placeholder="选择开始日期结束日期" v-if="roleId==2||roleId==3"
                @on-change="search.start2end=$event" @on-clear="search.start2end=[]" split-panels style="width: 180px">
            </DatePicker>
            <Select v-model="search.userId" placeholder='请选择广告主'  style="width: 180px" v-if="roleId==2">
                <Option v-for="option in dataSet.userIdList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.state" placeholder='请选择状态' style="width: 180px" v-if="roleId==2||roleId==3">
                <Option v-for="option in dataSet.stateList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.type" placeholder='请选择充值方式' style="width: 180px" v-if="roleId==2||roleId==3">
                <Option v-for="option in dataSet.typeList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Input type="text" v-model="search.searchName" placeholder="收款人、付款人、广告主" v-if="roleId==3"
                style="width: 180px"/>
            <Button type="primary" @click="hendleSearch">搜索</Button>
            <Button type="default" @click="hendleReset">重置</Button>
            <Button type="primary" class="fr" @click="hendleExport" v-if="roleId==2||roleId==3">导出</Button>
            <Button type="primary" class="fr" @click="hendleExport" v-if="roleId==3">批量导入</Button>
        </div>
        <Table border :loading="loading" :columns="columns1" :data="tableData" @on-sort-change="hendleSort"
            v-if="roleId==1">
        </Table>
        <Table border :loading="loading" :columns="columns2" :data="tableData" @on-sort-change="hendleSort"
            show-summary :summary-method="handleSum" v-if="roleId==2">
        </Table>
        <Table border :loading="loading" :columns="columns3" :data="tableData" @on-sort-change="hendleSort"
            show-summary :summary-method="handleSum" v-if="roleId==3">
        </Table>
        <div class="tableFooter">
            <Page ref="pager" :page-size="page.size" :current="page.index" :total="page.rowCount"
                class="fr" show-total show-elevator @on-change="hendleGopage" />
            </Page>
        </div>
    </div>
</template>
<script>
import tab from './list'
import { extend, extendF } from '@/utils/object'
import { debounce, nothing } from '@/utils/function'
import { h, saveParamState, getParamState, companyTableSumColumns } from '@/tools' // 自定义常用工具
export default {
    components: { tab },
    data () {
        return {
            dataSet: {
                'userIdList': [],
                'stateList': [],
                'typeList': []
            },
            search: {
                date: '', // 日期 yyyy-mm
                start2end: '', // 日期范围 yyyy-mm-dd
                userId: '', // 广告主ID
                searchName: '', // 收款人付款人广告主
                state: 0, // 状态 0失败1成功
                type: 1 // 充值方式 1银行转账2在线充值
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns1: [
                {title: '充值编号', key: 'code'},
                {title: '到账日期', key: 'arrival_date'},
                {title: '充值方式', key: 'recharge_type', render: h.readArr('recharge_type', ['', '银行转账', '在线充值'])},
                {title: '付款账号', key: 'recharge_account'},
                {title: '付款人', key: 'recharge_name'},
                {title: '充值金额', key: 'recharge_money'},
                {title: '状态', key: 'state', render: h.readArr('state', ['失败', '成功'])}
            ],
            columns2: [
                {title: '充值编号', key: 'code'},
                {title: '广告主', key: 'user_name'},
                {title: '到账日期', key: 'arrival_date'},
                {title: '充值方式', key: 'recharge_type', render: h.readArr('recharge_type', ['', '银行转账', '在线充值'])},
                {title: '到账金额', key: 'arrival_money'},
                {title: '状态', key: 'state', render: h.readArr('state', ['失败', '成功'])}
            ],
            columns3: [
                {title: '充值编号', key: 'code'},
                {title: '广告主', key: 'user_name'},
                {title: '到账日期', key: 'arrival_date'},
                {title: '充值方式', key: 'recharge_type', render: h.readArr('recharge_type', ['', '银行转账', '在线充值'])},
                {title: '付款账号', key: 'recharge_account'},
                {title: '付款人', key: 'recharge_name'},
                {title: '收款账号', key: 'arrival_account'},
                {title: '收款人', key: 'arrival_name'},
                {title: '到账金额', key: 'arrival_money'},
                {title: '摘要或用途', key: 'remark'},
                {title: '状态', key: 'state', render: h.readArr('state', ['失败', '成功'])}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            'tableSumData': null, // 表格总计内容

            end1: 1 // 防呆设计
        }
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.role || 2 } // 用户角色权限
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.dspadvertiser.pull().then(list => { this.dataSet.userIdList = list })
            this.$api.dspfinance.state().then(list => { this.dataSet.stateList = list })
            this.$api.dspfinance.type().then(list => { this.dataSet.typeList = list })
        },
        changeTab (name) { this.$tool.jumpto(name) },
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
            this.$api.dspfinance.rechargelist(this.serrchParam, this.roleId, 'export')
        }),
        ajax: debounce(function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.dspfinance.rechargelist(this.serrchParam, this.roleId).then((info) => { // ajax
                this.loading = false; // 加载完成
                this.tableData = info.list
                this.page.rowCount = info.rowcount
                this.tableSumData = info.sum
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
