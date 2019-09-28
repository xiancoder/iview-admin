import axios from 'axios'
export default {
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
    getTableData: () => {
        return axios.request({
            url: 'get_table_data',
            method: 'get'
        })
    },
    getDragList: () => {
        return axios.request({
            url: 'get_drag_list',
            method: 'get'
        })
    },
    errorReq: () => {
        return axios.request({
            url: 'error_url',
            method: 'post'
        })
    },
    getOrgData: formData => {
        return axios.request({
            url: 'image/upload',
            data: formData
        })
    },
    getTreeSelectData: formData => {
        return axios.request({
            url: 'image/upload',
            data: formData
        })
    },
    uploadImg: formData => {
        return axios.request({
            url: 'image/upload',
            data: formData
        })
    }
}
