import Vue from 'vue' // 核心

Vue.prototype.showPageCount = function (totalCount, page, pageCount) { // 显示 '第 1 页/ 共 1 页'
    totalCount = totalCount || 0
    page = page || 1
    pageCount = pageCount || 10
    if (totalCount === 0) { return '当前第0 - 0条，共0条' }
    var startPage = (page - 1) * pageCount + 1
    var endPage = (page * pageCount < totalCount) ? page * pageCount : totalCount
    return '当前第  ' + startPage + ' - ' + endPage + '条，共 ' + totalCount + ' 条'
}

Vue.prototype.showPageRow = function (totalCount, page, pageCount) { // 显示 '当前显示 0 - 0 条/ 0 条数据'
    totalCount = totalCount || 0
    page = page || 1
    pageCount = pageCount || 10
    if (totalCount === 0) { return '第 1 页/ 共 1 页' }
    const totalPage = Math.floor((totalCount + pageCount - 1) / pageCount)
    return '第 ' + page + ' 页 / 共 ' + totalPage + ' 页'
}
