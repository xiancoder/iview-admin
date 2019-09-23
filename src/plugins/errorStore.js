import Vue from 'vue'
import { Store } from '@/store'
import config from '@/config'
// 开发环境 同时开关打开
// 执行错误监听
if (config.errorStore.Off && process.env.NODE_ENV === 'development') {
    Vue.config.errorHandler = (error, vm, mes) => {
        let info = {
            type: 'script',
            code: 0,
            mes: error.message,
            url: window.location.href
        }
        Vue.nextTick(() => {
            Store.dispatch('addErrorLog', info)
        })
    }
}
