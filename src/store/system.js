import config from '@/config'
import { Api } from '@/api'
import { power2routes, getRouteTitleHandled, routeHasExist } from '@/router'
import { cache } from '@/cache'
export const store = {
    namespaced: true, // 作用域
    state: {
        isFullScreen: false, // 全屏 不能默认设置全屏
        breadCrumbList: [], // 面包屑内容
        routeList: [], // 一维路由信息列表
        menuList: [], // 路由结构 (过滤掉无权限页面)
        avatorImgPath: '', // 用户头像
        userName: '', // 用户名
        userId: '', // 用户id
        token: cache.getUserToken(), // 服务器token
        access: '', // 登录标识??
        newMessageNum: 0, // 新消息数量
        powerList: [], // 权限列表
        lang: '', // 语言
        spinLoading: false, // 路由视图加载中
        locking: false, // 锁屏状态
        shrink: false, // 页面折叠状态
        tagNavList: [], // 历史记录tab
        errorList: [], // 错误列表
        author: 'liuyp' // 版权所有
    },
    getters: {
        errorCount: state => state.errorList.length
    },
    mutations: {
        fullScreen (state, flag) { state.isFullScreen = flag }, // 重置全屏状态
        updateBreadCrumb (state, list) { state.breadCrumbList = list }, // 面包屑内容
        updateRoutePowerList (state, list) { state.routeList = list }, // 设置一维路由信息列表 完整信息
        updateMenuList (state, list) { state.menuList = list }, // 路由配置列表(已经过滤)
        updateAvator (state, avatorPath) { state.avatorImgPath = avatorPath }, // 设置头像
        updateUserId (state, id) { state.userId = id }, // 设置管理员ID
        updateUserName (state, name) { state.userName = name }, // 设置管理员姓名
        updateAccess (state, access) { state.access = access }, // 设置登录标识??
        updateToken (state, token) { state.token = token }, // 设置服务器token
        updateNewMessageNum (state, num) { state.newMessageNum = num }, // 触发读取接口 保存最新消息数量
        updatePowerList (state, list) { state.powerList = list }, // 设置权限列表
        switchLang (state, lang) { state.lang = lang }, // 切换语言
        updateRouteSpin (state, bool) { state.spinLoading = bool }, // 路由视图loading
        addError (state, error) { state.errorList.push(error) }, // 记录错误
        setFullScreen (state, flag) { // 设置全屏状态
            state.isFullScreen = flag
            if (flag) {
                let main = document.body
                if (main.requestFullscreen) { main.requestFullscreen() } else if (main.mozRequestFullScreen) { main.mozRequestFullScreen() } else if (main.webkitRequestFullScreen) { main.webkitRequestFullScreen() } else if (main.msRequestFullscreen) { main.msRequestFullscreen() }
            } else {
                if (document.exitFullscreen) { document.exitFullscreen() } else if (document.mozCancelFullScreen) { document.mozCancelFullScreen() } else if (document.webkitCancelFullScreen) { document.webkitCancelFullScreen() } else if (document.msExitFullscreen) { document.msExitFullscreen() }
            }
        },
        setLocking (state, flag) { state.locking = flag }, // 设置页面锁定
        changeShrink (state, flag) { state.shrink = flag } // 设置左边树折叠状态
    },
    actions: {
        setFullScreen ({ commit }, flag) { // 重置一下全屏状态
            commit('fullScreen', flag)
        },
        setBreadCrumb ({ commit, state }, routeName) { // 获取一维路由中当前路由的面包屑
            const bca = []
            let r0 = { title: '首页', path: '/home/index' }
            bca.push(r0)
            if (state.routeList && routeName && routeName.indexOf('_') > -1 && routeName !== 'home_index') {
                let l1 = routeName.replace(/_.*$/g, '')
                let r1 = state.routeList[l1]
                if (r1 && l1 !== 'home') { bca.push(r1) }
                if (routeName.indexOf('@') > -1) {
                    let l2 = routeName.replace(/@.*$/g, '').replace(/^.*_/g, '')
                    let r2 = state.routeList[l2]
                    if (r2) { bca.push(r2) }
                }
                let r3 = state.routeList[routeName]
                if (r3) { bca.push(r3) }
            }
            console.log(routeName, state.routeList, bca)
            commit('updateBreadCrumb', bca)
        },
        setTitle ({ state }, routeName) { // 修改title
            const title = config.title || ''
            const routeInfo = state.routeList[routeName] || {}
            const resTitle = routeInfo.title || ''
            window.document.title = `${resTitle} ${resTitle ? '|' : ''} ${title}`
        },
        setRoutePowerList ({ commit }, list) { // 保存一维路由
            commit('updateRoutePowerList', list)
        },
        setMenuList ({ commit }, list) { // 保存左边树数据源
            commit('updateMenuList', list)
        },
        login ({ commit }, param) { // 管理员登录
            return new Promise((resolve, reject) => {
                Api.system.login(param).then(token => {
                    commit('updateToken', token)
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
        clearLs ({ commit }) { // 初始化环境
            return new Promise((resolve, reject) => {
                console.info('仙', '清场')
                resolve()
            })
        },
        routeSpin ({ commit }, bool) { // 启动关闭路由视图loading
            if (bool) commit('updateRouteSpin', true)
            else setTimeout(function () { commit('updateRouteSpin', false) }, 500)
        },
        getUserInfo ({ state, commit }) { // 获取管理员相关信息
            return new Promise((resolve, reject) => {
                Api.system.getUserInfo(state.token).then(data => {
                    commit('updateAvator', data.avator)
                    commit('updateUserName', data.userName)
                    commit('updateUserId', data.id)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        getNewMessageNum ({ commit }) { // 读取最新消息数量
            return new Promise((resolve, reject) => {
                Api.system.getNewMessageNum().then(num => {
                    commit('updateNewMessageNum', num)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        getPowerList ({ commit }) { // 触发读取接口
            Api.system.getPowerList().then(powerList => { // 读取权限
                commit('updatePowerList', powerList)
                power2routes(powerList) // 传递给路由模块计算解析
            })
        },
        getBasePowerList ({ commit }) { // 触发读取接口
            power2routes([]) // 传递给路由模块计算解析
        },
        hasPower ({ state }, name) { // 判断是否有权限
            return state.menuListNoPower[name] === null
        },
        addTagNav ({ state }, { route, type = 'unshift' }) {
            let router = getRouteTitleHandled(route)
            if (!routeHasExist(state.tagNavList, router)) {
                if (type === 'push') state.tagNavList.push(router)
                else {
                    if (router.name === config.homeName) state.tagNavList.unshift(router)
                    else state.tagNavList.splice(1, 0, router)
                }
            }
        },
        logout ({ commit }) { // 登出
            return new Promise((resolve, reject) => {
                Api.system.logout().then(flag => {
                    if (flag) {
                        commit('updateToken', '')
                        cache.clearAll()
                        resolve()
                    }
                }, errorMsg => {
                    alert(123)
                })
            })
        }
    }
}
