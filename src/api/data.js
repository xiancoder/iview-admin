import axios from 'axios'
export default {
    getOrgData: formData => { // 组织架构图
        return axios.request({
            method: 'get',
            url: 'mock/data/orgdata',
            data: formData
        })
    },
    getTableData: () => { // 获得演示表格数据
        return axios.request({
            url: 'mock/data/tabledata',
            method: 'get'
        })
    },
    getTreeSelectData: formData => { // 树形下拉框
        return axios.request({
            url: 'mock/data/treeselectdata',
            data: formData
        })
    },
    getDragList: () => {
        return axios.request({
            url: 'mock/data/draglist',
            method: 'get'
        })
    },
    uploadImg: formData => {
        return axios.request({
            url: 'mock/image/upload',
            data: formData
        })
    },
    saveErrorLogger (info) { // vue错误上报
        return new Promise((resolve, reject) => {
            console.error('仙', '错误日志', info)
            axios.request({
                method: 'post',
                url: 'api/data/errorlogger',
                data: info
            }).then(response => { // 请注意这个返回值是整个结果对象
            }).catch(e => {
            })
        })
    },
    errorReq: () => {
        return axios.request({
            url: 'mock/data/error',
            method: 'post'
        })
    }
}
