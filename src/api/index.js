// 项目::接口处理模块
// 负责::所有的接口处理逻辑都集中在这里
// 2019年12月31日14:47:54 更新

import Vue from 'vue' // 核心
import axios from 'axios' // http请求库 axios配置
import { Store } from '@/store' // 自定义状态管理
// 系统
import system from './api.system'
import unit from './api.unit'
import stands from './api.stands'
import blog from './api.blog'
// oa
import department from './api.department'
import employee from './api.employee'
import position from './api.position'
import role from './api.role'
import user from './api.user'
import task from './api.task'
// dsp
import advertiser from './api.advertiser' // 广告主
import business from './api.business' // 业务
import finance from './api.finance' // 财务报表
import charge from './api.charge' // 支付相关
import cost from './api.cost' // 花费清单

export const Api = {
    // 系统
    system,
    unit,
    blog,
    stands,
    // dsp
    finance,
    charge,
    cost,
    advertiser,
    business,
    // oa
    department,
    employee,
    position,
    user,
    task,
    role
} // 接口列表

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
        const token = Store.state.admin.token
        config.headers['token'] = token || ''
        let url = config.url
        if (!/^http|^\//.test(url)) url = '/' + url // 当请求为index.html时 斜杠可以保证请求的是根目录
        config.url = url.replace(/[\/\\]/g, '/')
        if (config.method.toLowerCase() === 'get') {
            config.params = config.params || config.data
        } else { // 适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
            config.data = config.data || config.params
        }
        return config
    },
    error => { return Promise.reject(error) }
)
axios.interceptors.response.use( // 请求到结果的拦截处理
    response => { // 返回请求正确的结果
        console.info('%c仙 请求接口', 'color:#05ff0f;background:#000;padding:0 5px;', response.config.url, response.data)
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
                Store.dispatch('admin/logout') // 登出
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
