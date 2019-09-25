import Vue from 'vue'
import storage from 'good-storage'// 开源storage的库，对localstorage和sessionstorage的封装
const U_TYPE = '_utype_' // 当前用户类型 （1.超管，2.门店管理员）
const SHOP_ID = '_sid_' // 存储用户id，用于从门店点击进入单门店
const SHOP_NAME = '_sname_' // 存储用户name，用于从门店点击进入单门店显示
const MCH_INFO = '_mch_' // 当前商户的key
const SHOP_INFO = '_shop_' // 当前门店的key
const ALL_MCH_LIST = '_mlist_' // 所有商户信息的key
const ALL_SHOP_LIST = '_slist_' // 所有门店信息的key
const TOKEN = 'Xian_loginToken_' // 登录token
const FRESH_TOKEN = '_refreshToken_' // 登录token
export const cache = {
    // 登录，存储用户类型
    setUserType (type) { storage.set(U_TYPE, type) },
    // 获取用户类型
    getUserType () { return storage.get(U_TYPE) },
    // 存储用户token
    setUserToken (token) { storage.set(TOKEN, token) },
    // 获取token
    getUserToken () { return storage.get(TOKEN) },
    // 删除token
    delUserToken () { storage.set(TOKEN, '') },
    // 存储刷新token
    setRefreshToken (token) { storage.set(FRESH_TOKEN, token) },
    // 获取刷新token
    getRefreshToken () { return storage.get(FRESH_TOKEN) },
    // 存储shopId
    setShopId (id) { storage.set(SHOP_ID, id) },
    // 获取shopId
    getShopId () { return storage.get(SHOP_ID) },
    // 删除shopId
    delShopId () { storage.set(SHOP_ID, '') },
    // 存储shopName（用户点击门店跳转后显示门店名称）
    setShopName (name) { storage.set(SHOP_NAME, name) },
    // 获取shopName
    getShopName () { return storage.get(SHOP_NAME) },
    // 登录之后，获取用户信息和所有商户或者门店信息，并存储
    setMchUserInfo (info) { storage.set(MCH_INFO, info) },
    // 获取当前商户信息
    getMchUserInfo () { return storage.get(MCH_INFO) },
    // 保存当前门店信息
    setShopUserInfo (info) { storage.set(SHOP_INFO, info) },
    // 获取当前门店信息
    getShopUserInfo () { return storage.get(SHOP_INFO) },
    // 保存所有商户列表
    setMchList (data) { storage.set(ALL_MCH_LIST, data) },
    // 保存所有门店列表
    setShopList (data) { storage.set(ALL_SHOP_LIST, data) },
    // 获取所有商户列表
    getMchList () { return storage.get(ALL_MCH_LIST) },
    // 获取所有门店列表
    getShopList () { return storage.get(ALL_SHOP_LIST) },
    // 清空所有商户列表
    delMchList () { storage.set(ALL_MCH_LIST, []) },
    // 清空所有门店列表
    delShopList () { storage.set(ALL_SHOP_LIST, []) }
}
Vue.prototype.$ls = cache
