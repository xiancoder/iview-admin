import { Api } from '@/api'
import { power2routes } from '@/router'
import { cache } from '@/cache'
export const store = {
    namespaced: true, // 作用域
    state: {
        avatorImgPath: '', // 用户头像
        userName: '', // 用户名
        userId: '', // 用户id
        token: cache.getUserToken(), // 服务器token
        access: '', // 登录标识??
        newMessageNumber: 0, // 新消息数量
        powerList: [], // 权限列表

        userInfo: { userName: '等', userPhoto: '' }, // 登录用户信息
        testState: 3721
    },
    mutations: {
        setAvator (state, avatorPath) { state.avatorImgPath = avatorPath }, // 设置头像
        setUserId (state, id) { state.userId = id }, // 设置管理员ID
        setUserName (state, name) { state.userName = name }, // 设置管理员姓名
        setAccess (state, access) { state.access = access }, // 设置登录标识??
        setToken (state, token) { state.token = token }, // 设置服务器token
        newMessageNumber (state, num) { state.newMessageNumber = num }, // 触发读取接口 保存最新消息数量
        updatePowerList (state, list) { state.powerList = list }, // 设置权限列表

        logout (state, vm) {
            let themeLink = document.querySelector('link[name="theme"]') // 恢复默认样式
            themeLink.setAttribute('href', '')
            let theme = '' // 清空打开的页面等数据，但是保存主题数据
            if (localStorage.theme) {
                theme = localStorage.theme
            }
            localStorage.clear()
            if (theme) {
                localStorage.theme = theme
            }
        },
        readUserInfo (state) { // 触发读取接口 保存当前登录用户所有信息
            Api.user.info().then(info => {
                state.userInfo = info
            })
        },
        setTestState (state, num) {
            state.testState = num
        }
    },
    actions: {
        login ({ commit }, param) { // 管理员登录
            return new Promise((resolve, reject) => {
                Api.user.login(param).then(token => {
                    commit('setToken', token)
                    cache.setUserToken(token)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        isLogined ({ commit }) { // 检查管理员是否登录
            return new Promise((resolve, reject) => {
                const token = cache.getUserToken()
                if (token) {resolve()} else {reject()}
            })
        },
        clearLs ({ commit }) { // 初始化管理员环境
            return new Promise((resolve, reject) => {
                console.info('仙', '清场')
                resolve()
            })
        },
        getUserInfo ({ state, commit }) { // 获取管理员相关信息
            return new Promise((resolve, reject) => {
                Api.user.getUserInfo(state.token).then(data => {
                    commit('setAvator', data.avator)
                    commit('setUserName', data.userName)
                    commit('setUserId', data.id)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        readNewMessageNumber ({ commit }) { // 读取最新消息数量
            return new Promise((resolve, reject) => {
                Api.user.newMessage().then(num => {
                    commit('newMessageNumber', num)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        readPower ({ commit }) { // 触发读取接口
            Api.user.powerList().then(powerList => { // 读取权限
                commit('updatePowerList', powerList)
                power2routes(powerList) // 传递给路由模块计算解析
            })
        },

        logout ({ commit }) {
            return new Promise((resolve, reject) => {
                Api.user.logout().then(msg => { // 读取权限 根据结果 显示树形结构
                    if (!msg) { commit('logout') }
                    resolve(msg)
                })
            })
        },
        // 测试一下全局状态
        handleTestState ({ commit }, num) {
            return new Promise((resolve, reject) => {
                commit('setTestState', num)
                resolve()
            })
        }
    }
}
