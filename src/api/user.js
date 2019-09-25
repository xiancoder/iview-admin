import axios from 'axios'
export const api = {
    login ({ userName, password }) { // 管理员登录
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/user/login',
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
                url: 'api/user/getUserInfo',
                data: { }
            }).then(response => {
                const res = response.data
                resolve((res && res.data) || {})
            })
        })
    },
    newMessage () { // 最新消息数量
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/message/have',
                data: { }
            }).then(response => {
                const res = response.data
                // 0隐藏 null表红点 数字代表数量
                resolve((res && res.data && res.data.res) || null)
            })
        })
    },
    powerList () { // 管理员的页面权限
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/menulist',
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
                url: '/api/system/loginout',
                data: { }
            }).then(res => {
                if (res.data.data && res.data.data.res) resolve()
                else resolve(res.data.data)
            })
        })
    },
    clearCache () { // 清除当前缓存
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/system/remove_all_cache',
                data: { }
            }).then(res => {
                if (res.data.data && res.data.data.res) resolve()
                else resolve(res.data.msg)
            })
        })
    }
}
