import axios from 'axios' // http请求库
import { success, error } from '@/tools' // 自定义常用工具

export default {
    login ({ userName, password, host }) { // 用户登录
        userName = userName.trim() // 参数格式处理
        password = password.trim() // 参数格式处理
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/login',
                data: {
                    'user_name': userName, // 改装字段名
                    'user_pwd': password,
                    'platform_id': host
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    resolve(res)
                } else {
                    error(res.data.res) // 报错并继续reject
                    reject(res.data.res)
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    staffLogin ({ userName, password }) { // 员工登录
        userName = userName.trim() // 参数格式处理
        password = password.trim() // 参数格式处理
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/staff_login',
                data: {
                    'user_name': userName, // 改装字段名
                    'user_pwd': password
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    resolve(res)
                } else {
                    error(res.data.res) // 报错并继续reject
                    reject(res.data.res)
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    register (param) { // 注册
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/system/register',
                data: param
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.res_code) {
                    success(res.res || '注册成功') // 提示并继续resolve
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
    verificationmail (param) { // 邮箱验证
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'GET',
                url: 'api/system/verificationmail',
                data: param
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data.data
                if (res && res.res_code) {
                    success(res.res || '验证成功') // 提示并继续resolve
                    resolve(res)
                } else {
                    resolve(res)
                    error(res.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    certification (param) { // 认证
        let fd = new FormData()
        if (param.type === 1) {
            fd.append('type', param.type)
            fd.append('name', param.name)
            fd.append('code', param.code);
            fd.append('positive', param.positive);
            fd.append('reverse', param.reverse);
            fd.append('handheld', param.handheld);
        } else {
            fd.append('type', param.type)
            fd.append('license', param.license)
            fd.append('company_name', param.company_name);
            fd.append('license_code', param.license_code);
            fd.append('legal_person', param.legal_person);
            fd.append('legal_positive', param.legal_positive);
            fd.append('legal_reverse', param.legal_reverse);
            fd.append('legal_code', param.legal_code);
        }
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/user/certification',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: fd,
                timeout: 300000
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data.data
                if (res && res.res_code) {
                    success(res.res || '认证成功') // 提示并继续resolve
                    resolve(res)
                } else {
                    resolve(res)
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
            axios({
                method: 'GET',
                url: 'api/system/validate_code',
                data: {
                    'tel': tel,
                    'smstype': smstype || '1'
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
                url: 'api/system/google_auth',
                data: {
                    'c': code, // 改装字段名
                    'token': token,
                    'isbinding': 1
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    resolve(res)
                } else {
                    error(res.data.res) // 报错并继续reject
                    reject(res.data.res)
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
                url: 'api/user/agreed',
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
                if (res && res.data && res.data.num) {
                    resolve(res.data.num)
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
                if (res && res.data && res.data.res_code === 1) {
                    success(res.msg || '退出成功')
                    resolve(res.data.res)
                } else {
                    error(res.data.res) // 报错并继续reject
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
    roleList () { // 角色区分权限
        return Promise.resolve([
            { id: '1', name: '广告主' },
            { id: '2', name: '运营' },
            { id: '3', name: '财务' }
        ])
    },
    companyList (forTableShow) { // 四个公司区分 forTableShow指表格枚举
        if (forTableShow) {
            return [
                { id: '1', name: 'localhost:4011' },
                { id: '2', name: 'localhost:4012' },
                { id: '3', name: 'localhost:4013' },
                { id: '4', name: 'localhost:4014' }
            ]
        }
        return Promise.resolve([
            { id: '1', name: 'A公司' },
            { id: '2', name: 'B公司' },
            { id: '3', name: 'C公司' },
            { id: '4', name: 'D公司' }
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
                if (res && res.data && res.data.res_code) {
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
