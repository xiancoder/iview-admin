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
    }
}
