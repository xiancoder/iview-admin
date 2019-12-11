import axios from 'axios' // http请求库
import { success, error } from '@/tools' // 自定义常用工具

export default {
    login ({ userName, password, host }) { // 广告主登录
        userName = userName.trim() // 参数格式处理
        password = password.trim() // 参数格式处理
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/ads_login',
                data: {
                    'user_name': userName, // 改装字段名
                    'user_pwd': password,
                    'platform_id': host
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.res_code) {
                    success(res.res || '登录成功') // 提示并继续resolve
                    resolve('YX')
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    StafLogin ({ userName, password }) { // 运营财务登录
        userName = userName.trim() // 参数格式处理
        password = password.trim() // 参数格式处理
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/login',
                data: {
                    'user_name': userName, // 改装字段名
                    'user_pwd': password
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.res_code) {
                    resolve(res.token)
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    regist (param) { // 注册
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/regist',
                data: param
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.res_code) {
                    success(res.res || '注册成功') // 提示并继续resolve
                    resolve()
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    imgCode () { // 图片验证码
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/captcha_code',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.res_code) {
                    resolve(res)
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    smsCode ({ tel, smstype }) { // 手机验证码
        return new Promise((resolve, reject) => {
            success('验证码已发送请注意查收') // 提示并继续resolve
            return false
            axios({
                method: 'GET',
                url: 'api/system/validate_code',
                data: {
                    'tel': tel,
                    // 'imgcode': imgcode
                    'smstype': smstype || ''
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.res_code) {
                    success(res.res || '验证码已发送请注意查收') // 提示并继续resolve
                    resolve(res)
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    google ({ code, token }) { // 二次验证
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/Google_authenticator',
                data: {
                    'c': code, // 改装字段名
                    'token': token,
                    'isbinding': 1
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.res_code) {
                    success(res.res || '登录成功') // 提示并继续resolve
                    resolve(res)
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    agreement () { // 合作协议
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'GET',
                url: 'api/user/agreement',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data.data
                if (res) {
                    resolve(res)
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    agreed () { // 同意
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: 'api/system/agreed',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) {
                    resolve(res.data)
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    getUserInfo () { // 用户所有信息
        return new Promise((resolve, reject) => {
            console.log(123)
            axios({
                method: 'GET',
                url: 'api/system/getUserInfo',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) {
                    resolve(res.data)
                } else {
                    error(res.res) // 报错并继续reject
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
                    error(res.res) // 报错并继续reject
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
                    error(res.res) // 报错并继续reject
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
                    success(res.res || '退出成功')
                    resolve(res.data.res)
                } else {
                    error(res.res) // 报错并继续reject
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
                    success(res.res || '清除缓存成功')
                    resolve(res.data.res)
                } else {
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    saveErrorLogger (info) { // vue错误上报
        return new Promise((resolve, reject) => {
            console.error('dsp', '错误日志', info)
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
    roleList () { // 角色区分权限
        return Promise.resolve([
            { id: '1', name: '广告主' },
            { id: '2', name: '运营' },
            { id: '3', name: '财务' }
        ])
    },
    companyList (forTableShow) { // 四个公司区分 forTableShow指表格枚举
        if (forTableShow) {
            return ['', 'www.jinjingzhiyuan.com', 'www.pingfuxinxi.com', 'www.yunxiwangluo.com', 'www.yunxizhihui.com']
        }
        return Promise.resolve([
            { id: '1', name: '平复信息技术河北有限公司' },
            { id: '2', name: '宁静致远科技服务河北有限公司' },
            { id: '3', name: '云袭网络技术河北有限公司' },
            { id: '4', name: '云袭智慧在线科技发展（北京）有限公司' }
        ])
    },
    modifyPwd ({ // 修改密码
        oldPwd,
        newPwd
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/system/modify_pwd',
                data: {
                    'old_pwd': oldPwd, // 旧密码
                    'onew_pwd': newPwd // 新密码
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    success(res.data.res || '修改密码成功,请重新登录') // 报错并继续reject
                    resolve()
                } else {
                    error(res.data.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    end () {} // 错误占位符
}
