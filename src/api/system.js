import axios from 'axios'
import { success, error } from '@/tools'
export const api = {
    login ({ userName, password }) { // 管理员登录
        userName = userName.trim() // 参数格式处理
        password = password.trim() // 参数格式处理
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/login',
                data: {
                    'un': userName,
                    'pw': password
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res.code === 200) { // 服务器说ok
                    success('登录成功')
                    resolve(res && res.data && res.data.token)
                } else { // 服务器说error
                    error(res.msg || '登录失败')
                    reject(res && res.data)
                }
            }).catch(e => {
                error(e.message) // ajax异常后 中止操作
            })
        })
    },
    getUserInfo () { // 用户所有信息
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/getUserInfo',
                data: {}
            }).then(response => {
                const res = response.data
                resolve((res && res.data) || {})
            }).catch(e => {
                error(e.message) // 默认报错
                reject(e.message)
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
