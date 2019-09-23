import Vue from 'vue'
const config = {
    title: 'iView-admin-xian',
    cookieExpires: 1, // token在Cookie中存储的天数，默认1天
    useI18n: true, // 是否使用国际化，默认为false
    // 如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
    // 用来在菜单中显示文字
    baseUrl: { //  api请求基础路径
        dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
        pro: 'https://produce.com'
    },
    homeName: 'home', // 默认打开的首页的路由name值，默认为home
    errorStore: { // 错误日志配置
        showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
        Off: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
}
Vue.prototype.$config = config
export default config
