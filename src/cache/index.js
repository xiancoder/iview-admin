import Vue from 'vue' // 核心
import storage from 'good-storage'// 开源storage的库，对localstorage和sessionstorage的封装
import { isDateNotBeOverdue, dateAdd } from '@/utils'
const GLOBELCONFIG = 'Xian_globelConfig_' // 系统全局配置
const USERTOKEN = 'Xian_loginToken_' // 登录userToken
const USERTOKENTIME = 'Xian_loginTokenTime_' // 登录userToken
const TAGNAV = 'Xian_tagNavList_' // 历史记录标签
const PARAMSTATE = 'Xian_paramState_' // 路由页面传参记录
const LANG = 'Xian_language_' // 路由页面传参记录
const LOCKING = 'Xian_locking_' // 路由页面传参记录
export const cache = {
    setGlobelConfig (v) { storage.set(GLOBELCONFIG, v) }, // 存储系统配置
    getGlobelConfig () { return storage.get(GLOBELCONFIG) }, // 获取系统配置
    setUserToken (v) {
        storage.set(USERTOKENTIME, +(dateAdd(new Date(), 1, 'd')))
        storage.set(USERTOKEN, v)
    }, // 存储用户userToken
    getUserToken () {
        if (isDateNotBeOverdue(storage.get(USERTOKENTIME))) {return storage.get(USERTOKEN)}
        return null
    }, // 获取用户userToken
    delUserToken () { storage.remove(USERTOKEN) }, // 删除用户userToken
    setTagNavList (v) { storage.set(TAGNAV, v) }, // 存储历史记录标签
    getTagNavList () { return storage.get(TAGNAV) }, // 获取历史记录标签
    setParamState (v) { storage.set(PARAMSTATE, v) }, // 存储页面参数
    getParamState () { return storage.get(PARAMSTATE) }, // 获取页面参数
    setLang (v) { storage.set(LANG, v) }, // 存储页面语言
    getLang () { return storage.get(LANG) }, // 获取页面语言
    setLocking (v) { storage.set(LOCKING, v) }, // 存储锁屏状态
    getLocking () { return storage.get(LOCKING) }, // 获取锁屏状态
    clearAll () { storage.clear() } // 清除所有
}
Vue.prototype.$ls = cache
