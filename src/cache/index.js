import Vue from 'vue'
import storage from 'good-storage'// 开源storage的库，对localstorage和sessionstorage的封装
const USERTOKEN = 'Xian_loginToken_' // 登录userToken
const TAGNAV = 'Xian_tagNavList_' // 历史记录标签
const PARAMSTATE = 'Xian_paramState_' // 路由页面传参记录
export const cache = {
    setUserToken (v) { storage.set(USERTOKEN, v) }, // 存储用户userToken
    getUserToken () { return storage.get(USERTOKEN) }, // 获取用户userToken
    delUserToken () { storage.remove(USERTOKEN) }, // 删除用户userToken
    setTagNavList (v) { storage.set(TAGNAV, v) }, // 存储历史记录标签
    getTagNavList () { return storage.get(TAGNAV) }, // 获取历史记录标签
    setParamState (v) { storage.set(PARAMSTATE, v) }, // 存储页面参数
    getParamState () { return storage.get(PARAMSTATE) }, // 获取页面参数
    clearAll () { storage.clear() } // 清除所有
}
Vue.prototype.$ls = cache
