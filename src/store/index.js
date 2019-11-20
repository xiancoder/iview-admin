// 项目::状态管理模块
// 负责::所有的状态在这里初始化
// 注意::用户相关系统相关的接口由状态来负责
// 注意::页面增删改查逻辑相关接口由接口负责
// 注意::状态管理不负责逻辑校验 不负责接口字段对应 等一系列适配行为 单纯负责存值取值调用

import Vue from 'vue' // 核心
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate' // 状态持久化
import system from './system' // 系统相关
import user from './user' // 登录管理员相关
import data from './data' // 数据

Vue.use(Vuex)

// 默认使用localStorage/sessionStorage来固化数据，但是特殊情况（safari的无痕浏览模式）
// 但是localStorage/sessionStorage在iOS Safari、chrome和UC浏览器中的隐私模式（也叫无痕模式）下无法使用
// localStorage/sessionStorage对象仍然存在
// 但是setItem会报异常：QuotaExceededError
// getItem和removeItem直接忽略
try {
    window.localStorage.setItem('user', '123')
    window.localStorage.removeItem('user')
} catch (e) {
    alert('您处于无痕浏览模式，可能会发生意想不到的错误，请调整浏览器浏览模式！')
}

const plugins = [
    createPersistedState({ // 状态持久化
        storage: window.localStorage,
        reducer: (val) => {
            return { // 只储存指定的状态
                system: val.system
            }
        }
    })
]
const modules = {
    system,
    user,
    data
}
// 输出::状态实例
export const Store = new Vuex.Store({ // 状态 实例化
    plugins,
    modules
})
