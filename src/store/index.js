// 项目::状态管理模块
// 负责::所有的状态在这里初始化
// 注意::用户相关系统相关的接口由状态来负责
// 注意::页面增删改查逻辑相关接口由接口负责
// 注意::状态管理不负责逻辑校验 不负责接口字段对应 等一系列适配行为 单纯负责存值取值调用
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate' // 状态持久化
import * as system from './system' // 系统相关
import * as user from './user' // 登录管理员相关
import * as employee from './employee' // 职员相关
import app2 from './app2' //
import user2 from './user2' //
// =====================================================================
Vue.use(Vuex)
const plugins = [
    createPersistedState() // 状态持久化
]
const modules = {
    system: system.store,
    user: user.store,
    employee: employee.store,
    app2,
    user2
}
// 输出::状态实例
export const Store = new Vuex.Store({ plugins, modules }) // 状态 实例化
