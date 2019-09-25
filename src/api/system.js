import axios from 'axios'
export const api = {
    login ({ userName, password }) { // 管理员登录
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/login',
                data: {
                    'un': userName,
                    'pw': password
                }
            }).then(response => {
                const res = response.data // 返回值是整个结果对象
                resolve((res && res.data && res.data.token) || '')
            }).catch(e => {
                reject(e)
            })
        })
    },
    getUserInfo () { // 用户所有信息
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/getUserInfo',
                data: { }
            }).then(response => {
                const res = response.data
                resolve((res && res.data) || {})
            })
        })
    },
    getNewMessageNum () { // 最新消息数量
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/getNewMessageNum',
                data: { }
            }).then(response => {
                const res = response.data
                // 0隐藏 null表红点 数字代表数量
                resolve((res && res.data && res.data.res) || null)
            })
        })
    },
    getPowerList () { // 管理员的页面权限
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/powerlist',
                data: { }
            }).then(response => {
                const res = response.data
                // 改造一下权限列表
                resolve((res && res.data && res.data.list) || null)
            })
        })
    },
    logout () { // 退出登录
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/system/logout',
                data: { }
            }).then(response => {
                const res = response.data // 返回值是整个结果对象
                resolve((res && res.data && res.data.res) || 0)
            })
        })
    },
    clearCache () { // 清除当前缓存
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/system/clearCache',
                data: { }
            }).then(response => {
                const res = response.data
                resolve((res && res.data && res.data.res) || 0)
            })
        })
    }
}
