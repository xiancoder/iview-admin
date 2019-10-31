import Vue from 'vue' // 核心
const config = {
    title: 'OA',
    cookieExpires: 1, // token在Cookie中存储的天数，默认1天
    useI18n: true, // 是否使用国际化，默认为false
    cacheTime: 2 * 60 * 1e3, // 使用缓存请求ajax的数据缓存多长时间
    baseUrl: { //  api请求基础路径
        dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
        pro: 'https://produce.com'
    },
    homeName: 'home_index', // 默认打开的首页的路由name值
    errorLogStore: true // 错误日志配置记录 (顶部标记,错误上报)
}
Vue.prototype.$config = config
export default config
