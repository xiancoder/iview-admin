import Vue from 'vue' // 核心
import VueI18n from 'vue-i18n'
import customZhCn from './lang-zh-CN'
import customZhTw from './lang-zh-TW'
import customEnUs from './lang-en-US'
import zhCnLocale from 'iview/src/locale/lang/zh-CN'
import enUsLocale from 'iview/src/locale/lang/en-US'
import zhTwLocale from 'iview/src/locale/lang/zh-TW'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = localLang || 'zh-CN'

Vue.config.lang = lang

// vue-i18n 6.x+写法
Vue.locale = () => {}
const messages = {
    'zh-CN': Object.assign(zhCnLocale, customZhCn),
    'zh-TW': Object.assign(zhTwLocale, customZhTw),
    'en-US': Object.assign(enUsLocale, customEnUs)
}
export const i18n = new VueI18n({
    locale: lang,
    messages
})

export const showTitle = (item, vm) => {
    return vm.$config.useI18n ? vm.$t(item.name) : ((item.meta && item.meta.title) || item.name)
}

// vue-i18n 5.x写法
// Vue.locale('zh-CN', Object.assign(zhCnLocale, customZhCn))
// Vue.locale('en-US', Object.assign(zhTwLocale, customZhTw))
// Vue.locale('zh-TW', Object.assign(enUsLocale, customEnUs))
