import config from '@/config'
import { Api } from '@/api'
import { power2routes, router } from '@/router'
import { specialRouterList } from '@/router/routers'
import { cache } from '@/cache'
export default {
    namespaced: true, // 作用域
    state: {
        theme: 'dark', // 主题
        isFullScreen: false, // 全屏 不能默认设置全屏
        breadCrumbList: [], // 面包屑内容
        routeList: [], // 一维路由信息列表
        menuList: [], // 路由结构 (过滤掉无权限页面)
        userAvatorPath: '', // 管理员头像
        userName: '', // 管理员名
        userId: '', // 管理员ID
        userEmail: '', // 管理员EMAIL
        userDeptId: '', // 管理员部门ID
        userRoleId: '', // 管理员角色ID
        userRoleName: '', // 管理员角色NAME
        userPostId: '', // 管理员职位ID
        token: cache.getUserToken() || '', // 服务器token
        access: !!cache.getUserToken() || false, // 登录标识
        newMessageNum: 0, // 新消息数量
        powerList: [], // 权限列表
        lang: '', // 语言
        spinLoading: false, // 路由视图加载中
        locking: cache.getLocking() || false, // 锁屏状态
        shrink: false, // 页面折叠状态
        tagNavList: cache.getTagNavList() || [], // 历史记录tab
        errorList: [], // 错误列表
        doNotDrawRouter: false, // 不要渲染路由
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
        updateUserAvatorPath (state, v) { state.userAvatorPath = v }, // 设置管理员头像
        updateUserName (state, v) { state.userName = v }, // 设置管理员名
        updateUserId (state, v) { state.userId = v }, // 设置管理员ID
        updateUserEmail (state, v) { state.userEmail = v }, // 设置管理员EMAIL
        updateUserDeptId (state, v) { state.userDeptId = v }, // 设置管理员部门ID
        updateUserRoleId (state, v) { state.userRoleId = v }, // 设置管理员角色ID
        updateUserRoleName (state, v) { state.userRoleName = v }, // 设置管理员角色NAME
        updateUserPostId (state, v) { state.userPostId = v }, // 设置管理员职位ID
        updateAccess (state, access) { state.access = access }, // 设置登录标识
        updateToken (state, token) { cache.setUserToken(token); state.token = token }, // 设置服务器token
        removeToken (state, token) { cache.clearAll(); state.token = '' }, // 设置服务器token
        updateTagNavList (state, list) { cache.setTagNavList(list); state.tagNavList = list }, // 设置历史记录tab
        updateNewMessageNum (state, num) { state.newMessageNum = num }, // 触发读取接口 保存最新消息数量
        updatePowerList (state, list) { state.powerList = list }, // 设置权限列表
        switchLang (state, lang) { state.lang = lang }, // 切换语言
        updateRouteSpin (state, bool) { state.spinLoading = bool }, // 路由视图loading
        addError (state, error) { state.errorList.push(error) }, // 记录错误
        setFullScreen (state, flag) { // 设置全屏状态
            state.isFullScreen = flag
            if (flag) {
                let main = document.body
                if (main.requestFullscreen) { main.requestFullscreen() } else
                if (main.mozRequestFullScreen) { main.mozRequestFullScreen() } else
                if (main.webkitRequestFullScreen) { main.webkitRequestFullScreen() } else
                if (main.msRequestFullscreen) { main.msRequestFullscreen() }
            } else {
                if (document.exitFullscreen) { document.exitFullscreen() } else
                if (document.mozCancelFullScreen) { document.mozCancelFullScreen() } else
                if (document.webkitCancelFullScreen) { document.webkitCancelFullScreen() } else
                if (document.msExitFullscreen) { document.msExitFullscreen() }
            }
        },
        setLocking (state, flag) { cache.setLocking(flag); state.locking = flag }, // 设置页面锁定
        changeShrink (state, flag) { state.shrink = flag }, // 设置左边树折叠状态
        noRender (state, flag) { state.doNotDrawRouter = flag } // 不要渲染路由 为了回退再前进
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
                    commit('updateAccess', true)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        isLogined ({ commit }) { // 检查管理员是否登录
            return new Promise((resolve, reject) => {
                const token = cache.getUserToken()
                resolve(!!token)
            })
        },
        routeSpin ({ commit }, bool) { // 启动关闭路由视图loading
            if (bool) commit('updateRouteSpin', true)
            else setTimeout(function () { commit('updateRouteSpin', false) }, 500)
        },
        getUserInfo ({ state, commit }) { // 获取管理员相关信息
            return new Promise((resolve, reject) => {
                Api.system.getUserInfo(state.token).then(data => {
                    commit('updateUserAvatorPath', data.userPhoto) // 设置管理员头像
                    commit('updateUserName', data.userName) // 设置管理员名
                    commit('updateUserId', data.id) // 设置管理员ID
                    commit('updateUserEmail', data.email) // 设置管理员EMAIL
                    commit('updateUserDeptId', data.deptId) // 设置管理员部门ID
                    commit('updateUserRoleId', data.roleId) // 设置管理员角色ID
                    commit('updateUserRoleName', data.roleName) // 设置管理员角色NAME
                    commit('updateUserPostId', data.postId) // 设置管理员职位ID
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
            return new Promise((resolve, reject) => {
                Api.system.getPowerList().then(powerList => { // 读取权限
                    commit('updatePowerList', powerList)
                    power2routes(powerList) // 传递给路由模块计算解析
                    resolve()
                })
            })
        },
        getBasePowerList ({ commit }) { // 触发读取接口
            power2routes([]) // 传递给路由模块计算解析
        },
        hasPower ({ state }, name) { // 判断是否有权限
            const routeInfo = state.routeList[name] || {}
            return routeInfo.power
        },
        addTagNav ({ state, commit }, route) {
            const name = route.name
            if (specialRouterList.includes(name)) return false
            const routeInfo = state.routeList[name]
            if (!routeInfo) return false
            const list = Object.assign(state.tagNavList)
            try {
                list.forEach((row, index, arr) => {
                    if (name === row.name) throw new Error(index)
                })
            } catch (e) {
                if (e.message) list.splice(e.message, 1)
            }
            list.push({
                name,
                title: routeInfo.title,
                query: route.query,
                param: route.param
            })
            commit('updateTagNavList', list)
        },
        setTagNavList ({ commit }, list) {
            commit('updateTagNavList', list)
        },
        gologin ({ commit }) { // 去登录页
            return new Promise((resolve, reject) => {
            })
        },
        logout ({ commit }) { // 登出
            return new Promise((resolve, reject) => {
                console.info('仙', '登出清场')
                Api.system.logout().then(flag => {
                    console.info('登出结果', flag)
                }, errorMsg => {
                    console.error('登出失败')
                }).finally(res => {
                    commit('removeToken', '')
                    router.push('login')
                    resolve()
                })
            })
        },
        noRender ({ commit }, bool) { // 去登录页
            return new Promise((resolve, reject) => {
                commit('noRender', bool)
                resolve()
            })
        }
    }
}
