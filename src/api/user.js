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
            }).then(res => {
                resolve(res.data.token)
            }).catch(e => {
                reject(e)
            })
        })
    },
    getUserInfo () { // 用户所有信息
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/user/info',
                data: { }
            }).then(res => {
                resolve(res.data.data)
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
    newMessage () { // 最新消息数量
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/message/have',
                data: { }
            }).then(res => {
                // 0隐藏 null表红点 数字代表数量
                const newMessageNumber = res.data.data.res
                resolve(newMessageNumber)
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
