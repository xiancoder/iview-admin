import Vue from 'vue' // 核心
const config = {
    title: 'VUE资料库',
    cookieExpires: 1, // token在Cookie中存储的天数，默认1天
    console: true, // 是否开启console调试
    useI18n: true, // 是否使用国际化，默认为false
    cacheTime: 2 * 60 * 1e3, // 使用缓存请求ajax的数据缓存多长时间
    baseUrl: { //  api请求基础路径
        dev: '',
        pro: ''
    },
    errorLogStore: true // 错误日志配置记录 (顶部标记,错误上报)
}
Vue.prototype.$config = config
if (config.console !== true || process.env.NODE_ENV !== 'development') {
    window.console = {
        log: function () {},
        info: function () {},
        success: function () {},
        error: function () {},
        warn: function () {}
    }
}
export default config
