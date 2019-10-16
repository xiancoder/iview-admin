import config from '@/config'
import { Api } from '@/api'
import { power2routes, router } from '@/router'
import { specialRouterList } from '@/router/routers'
import { cache } from '@/cache'
const lsToken = cache.getUserToken() || ''
const lsLocking = cache.getLocking() || false
const lsTagNavList = cache.getTagNavList() || []
export default {
    namespaced: true, // 作用域,配置上以后才能够dispach system/xxx 建议必须 不同的状态里有相同字段值
    state: { // 缓存字段以及默认值
        theme: 'dark', // 主题 todo 计划做白色和黑色主题

        isFullScreen: false, // 全屏 为header中组件按钮准备 但是不能默认设置全屏 即刷新就全屏

        breadCrumbList: [], // 面包屑内容数组 实时解析路由 首页-一级路由-二级路由
        routeList: [], // 一维化列表 所有的路由信息 主要是使用权限 名称
        menuList: [], // 左边树形目录列表(已经过滤) 所有的有权限路由列表
        powerList: [], // 权限列表 请求后台得到的页面权限列表 todo 似乎没有保存的必要???
        tagNavList: lsTagNavList, // 历史记录tab列表

        userAvatorPath: '', // 管理员头像
        userName: '', // 管理员名
        userId: '', // 管理员ID
        userEmail: '', // 管理员EMAIL
        userDeptId: '', // 管理员部门ID
        userRoleId: '', // 管理员角色ID
        userRoleName: '', // 管理员角色NAME
        userPostId: '', // 管理员职位ID

        token: lsToken, // 服务器token 用于存在header中与服务器交换数据使用
        access: !!lsToken, // 登录标识 根据token来判断
        locking: lsLocking, // 锁屏状态

        newMessageNum: 0, // 新消息数量

        lang: '', // 系统表现语言 资源国际化没有完成 todo

        spinLoading: false, // 路由视图加载中 main.vue组件的loadiing效果

        shrink: false, // 界面左边树形菜单折叠状态

        doNotDrawRouter: false, // 不要渲染路由 目的是管理url的前进和后退

        cacheList: [], // keepalive的缓存页面 缓存方式是 组件页面设置name 加入此数组即可

        errorList: [], // 错误列表 todo 收集系统所有的错误 伺机发送

        author: 'liuyp' // 版权所有 结尾容错
    },
    getters: {
        errorCount: state => state.errorList.length
    },
    mutations: { // 触发事件 注意 vue只有mutations才能触发任意使用状态的代码位置的监听渲染 建议大写
        //THEME

        FULLSCREEN (state, flag) { state.isFullScreen = flag }, // 修改全屏状态

        BREADCRUMBLIST (state, list) { state.breadCrumbList = list }, // 面包屑内容
        ROUTELIST (state, list) { state.routeList = list }, // 设置一维路由信息列表 完整信息
        MENULIST (state, list) { state.menuList = list }, // 左边树形目录列表(已经过滤)
        POWERLIST (state, list) { state.powerList = list }, // 设置权限列表
        TAGNAVLIST (state, list) { cache.setTagNavList(list); state.tagNavList = list }, // 设置历史记录tab

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
        removeToken (state, token) { cache.clearAll(); state.token = ''; state.access = false }, // 设置服务器token
        updateCacheList (state, list) { state.cacheList = list }, // 设置keepalive的页面
        updateNewMessageNum (state, num) { state.newMessageNum = num }, // 触发读取接口 保存最新消息数量
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
            const token = cache.getUserToken()
            commit('updateAccess', !!token)
            return !!token
        },
        routeSpin ({ commit }, bool) { // 启动关闭路由视图loading
            if (bool) commit('updateRouteSpin', true)
            else setTimeout(function () { commit('updateRouteSpin', false) }, 500)
        },
        keepalive ({ state, commit }, toname) { // 启动关闭路由视图loading
            if (state.cacheList && state.cacheList.length) {
                let includes = false
                let ins = false
                state.cacheList.forEach(row => {
                    if (toname.includes(row)) { includes = true }
                    if (toname === row) { ins = true }
                })
                if (ins) {
                    console.info('仙', '路由keepAlive*')
                    return false
                }
                if (includes) {
                    const x = Object.assign(state.cacheList)
                    x.push(toname)
                    commit('updateCacheList', x)
                    console.info('仙', '路由keepAlive+', x)
                    return false
                }
            }
            console.info('仙', '路由keepAlive-', toname)
            commit('updateCacheList', [toname])
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
        hasPower ({ state }, name) { // 判断是否有权限 得多考虑权限没有返回的情况
            return new Promise((resolve, reject) => {
                const logic = () => {
                    const routeInfo = state.routeList[name] || {}
                    resolve(routeInfo.power)
                }
                let num = 10
                if (state.menuList.length === 0) {
                    const i = setInterval(() => {
                        if (num < 0) {clearInterval(i); return}
                        num--
                        if (state.menuList.length === 0) {return}
                        clearInterval(i)
                        logic()
                    }, 1e3)
                    return
                }
                logic()
            })
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
                commit('removeToken', '')
                router.push('login')
            })
        },
        logout ({ commit }) { // 登出
            return new Promise((resolve, reject) => {
                console.info('仙', '登出清场')
                Api.system.logout().then(() => {
                    console.info('登出成功')
                    commit('removeToken', '')
                    router.push('login')
                    resolve()
                }, errorMsg => {
                    console.error('登出失败')
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
