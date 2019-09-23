import { Api } from '@/api'
import { cache } from '@/cache'
export const store = {
    namespaced: true, // 作用域
    state: {
        avatorImgPath: '', // 用户头像
        userName: '', // 用户名
        userId: '', // 用户id
        token: cache.getUserToken(), // 服务器token
        access: '', // 登录标识

        userInfo: { userName: '等', userPhoto: '' }, // 登录用户信息
        newMessageNumber: 0, // 新消息数量
        testState: 3721
    },
    mutations: {
        setAvator (state, avatorPath) { state.avatorImgPath = avatorPath }, // 设置头像
        setUserId (state, id) { state.userId = id }, // 设置管理员ID
        setUserName (state, name) { state.userName = name }, // 设置管理员姓名
        setAccess (state, access) { state.access = access }, // 设置登录标识
        setToken (state, token) { // 设置服务器token
            state.token = token
            cache.saveUserToken(token)
        },

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
        readNewMessageNumber (state) { // 触发读取接口 保存最新消息数量
            Api.user.newMessage().then(num => {
                state.newMessageNumber = num
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
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        getUserInfo ({ state, commit }) { // 获取管理员相关信息
            return new Promise((resolve, reject) => {
                Api.user.getUserInfo(state.token).then(data => {
                    commit('setAvator', data.avator)
                    commit('setUserName', data.name)
                    commit('setUserId', data.user_id)
                    commit('setAccess', data.access)
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
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
