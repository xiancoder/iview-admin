import { extend, extendF } from '@/utils'
import { saveParamState, getParamState } from '@/tools' // 自定义常用工具
import { debounce } from '@/utils'

export default {
    beforeMount: function () {
        this.yunxiTable = { // 有用内容
            'serrchParam': null, // 实际搜索项
            'serrchBack': null, // 搜索项备份
            'tableData': [] // 表格内容
        }
        this.yunxiTable.init = () => { // 初始化
            if (!this.yunxiTable.serrchParam) {this.yunxiTable.serrchParam = {}} // 下发参数
            if (!this.yunxiTable.serrchBack) {this.yunxiTable.serrchBack = extend({}, this.search)} // 备份
            const query = getParamState()
            extend(this.search, query) // 设置表现搜索项成url缓存
            extendF(this.page, query)
            extendF(this.order, query)
            this.yunxiTable.ajax()
        }
        this.yunxiTable.search = () => { // 搜索
            extend(this.yunxiTable.serrchParam, this.search) // 设置实际搜索项成表现搜索项
            this.yunxiTable.goPage(1)
        }
        this.yunxiTable.reset = () => { // 重置
            extend(this.search, this.yunxiTable.serrchBack) // 重置表现搜索项成备份搜索项
            this.yunxiTable.search()
        }
        this.yunxiTable.goPage = (page) => { // 跳转页
            extendF(this.search, this.yunxiTable.serrchParam) // 恢复表现搜索项成实际搜索项
            this.page.pageIndex = page
            this.yunxiTable.ajax()
        }
        this.yunxiTable.sort = (param) => { // 排序功能
            // column/* 当前列数据 */, key/* 排序依据的指标 */, order/* 排序的顺序 值为 asc 或 desc */
            this.order.orderKey = param.key
            this.order.order = param.order
            this.yunxiTable.ajax()
        }
        this.yunxiTable.ajax = debounce(() => { // 业务ajax
            extend(this.yunxiTable.serrchParam, this.search) // 设置实际搜索项
            extend(this.yunxiTable.serrchParam, this.page) // 设置分页
            extend(this.yunxiTable.serrchParam, this.order) // 设置排序
            saveParamState(this.yunxiTable.serrchParam) // 存url
            this.loading = true // 加载中
            this.$api.task.listMine(this.yunxiTable.serrchParam).then((info) => { // ajax
                this.loading = false; // 加载完成
                this.yunxiTable.tableData = info.list
                this.page.rowCount = info.rowCount
            })
        })
    }
}
