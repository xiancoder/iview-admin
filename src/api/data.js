import axios from 'axios'
export const saveErrorLogger = info => {
    console.error('仙', '错误日志', info)
    /* return axios.request({
        url: 'save_error_logger',
        data: info,
        method: 'post'
    }) */
}

export const getTableData = () => {
    return axios.request({
        url: 'get_table_data',
        method: 'get'
    })
}

export const getDragList = () => {
    return axios.request({
        url: 'get_drag_list',
        method: 'get'
    })
}

export const errorReq = () => {
    return axios.request({
        url: 'error_url',
        method: 'post'
    })
}

export const getOrgData = formData => {
    return axios.request({
        url: 'image/upload',
        data: formData
    })
}

export const getTreeSelectData = formData => {
    return axios.request({
        url: 'image/upload',
        data: formData
    })
}
export const uploadImg = formData => {
    return axios.request({
        url: 'image/upload',
        data: formData
    })
}
