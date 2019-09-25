export default {
    methods: {
        // 初始化逻辑
        // 搜索项, 数据源, 表格列设定, 表格属性
        handleInit ([searchDataBack, dataList, tableColumns, tableInfo]) {
            console.info('哈哈哈')
            return {
                searchDataBack,
                searchData: { ...searchDataBack, page: tableInfo.page },
                ...searchDataBack,
                ...dataList,
                ...tableInfo,
                tableColumns
            }
        },
        // 搜索按钮执行逻辑
        handleSearch () {
            // 收集上传新数据
            // 分页定位1
            // searchData
            for (let key in this.searchDataBack) {
                this.searchData[key] = this[key]
            }
            this.searchData.page = 1
            this.page = 1
            this.handleAjax()
        },
        // 分页按钮执行逻辑
        handleGoPage () {
            // 不收集上传新数据
            // 分页定位n
            // searchData
            this.searchData.page = this.page
            this.handleAjax()
        },
        // 重置按钮执行逻辑
        handleReset () {
            for (let key in this.searchDataBack) {
                this[key] = this.searchDataBack[key]
            }
            this.page = 1
            this.handleAjax()
        }
    }
}
