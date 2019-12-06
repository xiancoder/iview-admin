<template>
    <div class="tableLayout">
        <tab></tab>
        <div class="tableTool">
            <Select v-model="search.aderId" placeholder="请选择广告主" style="width: 180px">
                <Option value="" label="全部广告主"></Option>
                <Option v-for="option in dataSet.aderIdList" :value="option.id" :key="option.id" :label="option.name" >
                </Option>
            </Select>
            <Select v-model="search.companyId" placeholder="请选择相关公司" style="width: 180px" v-if="roleId==3">
                <Option value="" label="全部公司"></Option>
                <Option v-for="option in dataSet.companyList" :value="option.id" :key="option.id" :label="option.name">
                </Option>
            </Select>
            <Button type="primary" @click="hendleSearch">搜索</Button>
            <Button type="default" @click="hendleReset">重置</Button>
            <Button type="primary" class="fr" @click="hendleExport">导出</Button>
        </div>
        <Table border :loading="loading" :columns="columns1" :data="tableData" @on-sort-change="hendleSort"
            show-summary :summary-method="handleSum">
        </Table>
        <div class="tableFooter">
            <span> {{showPageCount(page.rowCount,page.index,page.pageSize)}}</span>
            <Page ref="pager" :page-size="page.pageSize" :current="page.index" :total="page.rowCount"
                show-sizer show-elevator class="fr"
                @on-change="v=>{page.index=v;hendleGopage()}"
                @on-page-size-change="v=>{page.pageSize=v;hendleGopage()}"/>
            </Page>
            <span class="fr"> {{showPageRow(page.rowCount,page.index,page.pageSize)}}</span>
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
                'aderIdList': [],
                'companyList': []
            },
            search: {
                aderId: '', // 广告主ID
                companyId: '' // 公司账户
            },
            loading: false,
            page: { pageIndex: 1, pageSize: 30, rowCount: 999 }, // 分页 变量名最好原样
            order: { orderKey: '', order: '' }, // 排序 变量名最好原样
            columns1: [
                {title: '广告主', key: 'ader_name', render: h.defaultH('balance')},
                {title: '用户名', key: 'user_name'},
                {title: '账户余额', key: 'balance', render: h.moneyFormat('balance')}
            ],
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [], // 表格内容
            'tableSumData': null, // 表格总计内容

            end1: 1 // 防呆设计
        }
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.role } // 用户角色权限
    },
    methods: {
        getDataSet () { // 初始化数据源
            this.$api.dspadvertiser.pull().then(list => { this.dataSet.aderIdList = list })
            if (this.roleId === 3) this.$api.dspsystem.companyList().then(list => { this.dataSet.companyList = list })
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
            this.$api.dspfinance.accountList(this.serrchParam, this.roleId, 'export')
        }),
        ajax: debounce(function () { // 业务ajax
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.dspfinance.accountList(this.serrchParam, this.roleId).then((info) => { // ajax
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
