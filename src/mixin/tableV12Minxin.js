import { extend, extendF } from '@/utils/object'
import { saveParamState, getParamState } from '@/tools' // 自定义常用工具

export default {
    data: {
        'dataSet': {},
        'search': {},
        'loading': false,
        'page': { 'pageIndex': 1, 'pageSize': 30, 'rowCount': 999 }, // 分页 变量名最好原样
        'order': { 'orderKey': '', 'order': '' }, // 排序 变量名最好原样
        'serrchParam': null, // 实际搜索项
        'tableData': [] // 表格内容
    },
    methods: {
        init () { // 初始化
            if (!this.serrchParam) {this.serrchParam = {}} // 下发参数
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
            extend(this.search, this.$options.data().search) // 重置表现搜索项成备份搜索项
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
        ajax: function () { // 业务ajax开始
            extend(this.serrchParam, this.search) // 设置实际搜索项
            extend(this.serrchParam, this.page) // 设置分页
            extend(this.serrchParam, this.order) // 设置排序
            saveParamState(this.serrchParam) // 存url
            this.loading = true // 加载中
            this.ajaxCustom()
        },
        ajaxEnd: function () { // 业务ajax结束
            this.loading = false; // 加载完成
        }
    }
}
