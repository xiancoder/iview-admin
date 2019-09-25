// 项目::接口控制
// 负责::所有的接口在这里记录
// 注意::页面增删改查逻辑相关接口由接口负责
// 注意::用户相关系统相关的接口由状态来负责(负责调用 其代码还是写在这里的)
// 注意::传参的整理 字段对应 结果的整理 关键内容挑选 容错
/*
    1.get方法：
        this.$service.get(<url>, { params: {<参数>} } ).then(res => { //调用成功 }).catch(err => { //调用失败 });
    2.post方法：
        this.$service.post(<url>, {<参数>} ).then(res => { //调用成功 }).catch(err => { //调用失败 });
    3.form-data上传文件： <  通过append向params对象添加数据: params.append('file', this.file); >
        this.$service.request({ method: 'post', url: <url>, data: <form-data格式>,
        headers: { 'Content-Type': 'multipart/form-data' } }).then(res => { });
*/
import Vue from 'vue'
import axios from 'axios'
import { Store } from '@/store'
import * as system from './system'
import * as employee from './employee'
import * as department from './department'
import * as position from './position'
import * as role from './role'
import * as task from './task'
// =====================================================================
axios.defaults.headers = { 'X-Requested-With': 'XMLHttpRequest' } // 设置默认请求头，如果不需要可以取消这一步
axios.defaults.timeout = 20000 // 请求超时的时间限制
axios.interceptors.request.use( // 开始设置请求 发起的拦截处理
    config => { // config 代表发起请求的参数的实体
        const token = Store.state.user.token
        config.headers['token'] = token || ''
        return config
    },
    error => { return Promise.reject(error) }
)
// 请求到结果的拦截处理
axios.interceptors.response.use(
    response => { // 返回请求正确的结果
        console.info('仙', '请求接口', response.config.url, response.data)
        return response
    },
    error => { // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
        if (!error || !error.response) { return Promise.reject(new Error('请求失败')) } // 先判断错误 后处理正确
        switch (error.response.status) {
            case 400: error.message = '错误请求'; break
            case 401: error.message = '未授权，请重新登录'; break
            case 403: alert('没有权限'); break
            case 404: error.message = '请求错误,未找到该资源'; break
            case 405: error.message = '请求方法未允许'; break
            case 408: error.message = '请求超时'; break
            case 413: alert('文件过大'); break
            case 500: alert('服务器错误'); break
            case 501: error.message = '网络未实现'; break
            case 502: error.message = '网络错误'; break
            case 503: error.message = '服务不可用'; break
            case 504: error.message = '网络超时'; break
            case 505: error.message = 'http版本不支持该请求'; break
            default: error.message = `连接错误, 错误详情:${error.response.status}`
        }
        return Promise.reject(error.message)
    }
)
// 输出::接口列表
export const Api = {
    system: system.api,
    employee: employee.api,
    department: department.api,
    position: position.api,
    role: role.api,
    task: task.api
}
Vue.prototype.$axios = axios // 挂载axios
Vue.prototype.$api = Api // 挂载api
Vue.prototype.$post = function (url, params) { // 将axios 的 post 方法，绑定到 vue 实例上面的 $post
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(resolve, reject)
            .catch(err => { reject(err) })
    })
}
Vue.prototype.$get = function (url, params) { // 将axios 的 get 方法，绑定到 vue 实例上面的 $get
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params })
            .then(resolve, reject)
            .catch(err => { reject(err) })
    })
}
