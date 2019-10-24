import axios from 'axios'
import { success, error } from '@/tools'

export default {
    login ({ userName, password }) { // 管理员登录
        userName = userName.trim() // 参数格式处理
        password = password.trim() // 参数格式处理
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/login',
                data: {
                    'un': userName, // 改装字段名
                    'pw': password
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.token) {
                    success(res.msg || '登录成功') // 提示并继续resolve
                    resolve(res.data.token)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    getUserInfo () { // 用户所有信息
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/getUserInfo',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) {
                    resolve(res.data)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    getNewMessageNum () { // 最新消息数量
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/getNewMessageNum',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data // 0隐藏 null表红点 数字代表数量
                if (res && res.data && res.data.res) {
                    resolve(res.data.res)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    getPowerList () { // 管理员的页面权限
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/powerlist',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data // 0隐藏 null表红点 数字代表数量
                if (res && res.data && res.data.list) {
                    resolve(res.data.list)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    logout () { // 退出登录
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/logout',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data // 0隐藏 null表红点 数字代表数量
                if (res && res.data && res.data.res) {
                    success(res.msg || '退出成功')
                    resolve(res.data.res)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    clearCache () { // 清除当前缓存
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/clearCache',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data // 0隐藏 null表红点 数字代表数量
                if (res && res.data && res.data.res) {
                    success(res.msg || '清除缓存成功')
                    resolve(res.data.res)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
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
    unitTest1 ({ userName, password }) { // 单元测试尝试
        userName = userName.trim() // 参数格式处理
        password = password.trim() // 参数格式处理
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('ok')
            }, 1e3)
        })
    },
    unitTest2 () { // 单元测试尝试
        return axios({
            method: 'GET',
            url: 'api/system/getUserInfo',
            data: {}
        })
    },
    end () {} // 错误占位符
}
