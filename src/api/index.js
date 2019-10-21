import Vue from 'vue'
import axios from 'axios'
import { Store } from '@/store'
import system from './system'
import user from './user'
import task from './task'
import data from './data'
import unit from './unit'
import department from './department'
import employee from './employee'
import position from './position'
import role from './role'

export const Api = {
    system, user, task, data, unit,
    department, employee, position, role
} // 接口列表

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
axios.interceptors.response.use( // 请求到结果的拦截处理
    response => { // 返回请求正确的结果
        console.info('仙', '请求接口', response.config.url, response.data)
        return response
    },
    error => { // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
        // 断网 或者 请求超时 状态
        if (!error.response) {
            // 请求超时状态
            if (error.message.includes('timeout')) {
                // console.log('超时了');
                Promise.reject(new Error('请求超时，请检查网络是否连接正常'))
            } else {
                // 可以展示断网组件
                // console.log('断网了');
                Promise.reject(new Error('请求失败，请检查网络是否已连接'))
            }
        }
        switch (error.response.status) {
            case 400: error.message = '错误请求'; break
            case 401:
                error.message = '未授权，请重新登录';
                Store.dispatch('system/logout') // 登出
                break
            case 403: error.message = '没有权限'; break
            case 404: error.message = '网络请求不存在'; break
            case 405: error.message = '请求方法未允许'; break
            case 408: error.message = '请求超时'; break
            case 413: error.message = '文件过大'; break
            case 500: error.message = '服务器错误'; break
            case 501: error.message = '网络未实现'; break
            case 502: error.message = '系统正在升级，请稍后重试'; break
            case 503: error.message = '服务不可用'; break
            case 504: error.message = '网络超时'; break
            case 505: error.message = 'http版本不支持该请求'; break
            default: error.message = `连接错误，错误详情:${error.response.status}`
        }
        return Promise.reject(error)
    }
)
