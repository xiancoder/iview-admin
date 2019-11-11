import config from '@/config' // 自定义配置
import { Api } from '@/api'
import { router, power2routes, power2BreadCrumb } from '@/router' // 自定义路由定义
import { specialRouterList } from '@/router/routers'

export default {
    namespaced: true, // 作用域,配置上以后才能够dispach system/xxx 建议必须 不同的状态里有相同字段值
    state: { // 缓存字段以及默认值
        theme: 'dark', // 主题 todo 计划做白色和黑色主题
        shrink: false, // 界面树形菜单折叠状态
        lang: '', // 系统表现语言 资源国际化没有完成 todo

        breadCrumbList: [], // 面包屑内容数组 实时解析路由 首页-一级路由-二级路由
        routeList: [], // 一维化列表 所有的路由信息 主要是使用权限 名称
        menuList: [], // 左边树形目录列表(已经过滤) 所有的有权限路由列表
        powerList: null, // 权限列表 请求后台得到的页面权限列表 todo 似乎没有保存的必要???
        tagNavList: [], // 历史记录tab列表

        userAvatorPath: '', // 管理员头像
        userName: '', // 管理员名
        userId: '', // 管理员ID
        userEmail: '', // 管理员EMAIL
        userDeptId: '', // 管理员部门ID
        userRoleId: '', // 管理员角色ID
        userRoleName: '', // 管理员角色NAME
        userPostId: '', // 管理员职位ID

        token: '', // 服务器token 用于存在header中与服务器交换数据使用
        locking: false, // 锁屏状态

        spinLoading: false, // 路由视图加载中 main.vue组件的loadiing效果
        cacheList: [], // keepalive的缓存页面 缓存方式是 组件页面设置name 加入此数组即可
        doNotDrawRouter: false, // 不要渲染路由 目的是管理url的前进和后退

        newMessageNum: 0, // 新消息数量

        errorList: [], // 错误列表 todo 收集系统所有的错误 伺机发送
        paramList: {}, // 页面请求参数记录 根据url中的时间戳对应读取

        end: 1 // 结尾容错
    },
    getters: {
        errorCount: state => state.errorList.length,
        access: state => !!state.token // 登录标识 根据token来判断
    },
    mutations: { // 触发事件 注意 vue只有mutations才能触发任意使用状态的代码位置的监听渲染 建议大写
        THEME (state, v) { state.theme = v },
        SHRINK (state, b) { state.shrink = b },
        LANG (state, v) { state.lang = v },

        BREADCRUMBLIST (state, a) { state.breadCrumbList = a },
        ROUTELIST (state, a) { state.routeList = a },
        MENULIST (state, a) { state.menuList = a },
        POWERLIST (state, a) { state.powerList = a },
        TAGNAVLIST (state, a) { state.tagNavList = a },

        USERAVATORPATH (state, v) { state.userAvatorPath = v },
        USERNAME (state, v) { state.userName = v },
        USERID (state, v) { state.userId = v },
        USEREMAIL (state, v) { state.userEmail = v },
        USERDEPTID (state, v) { state.userDeptId = v },
        USERROLEID (state, v) { state.userRoleId = v },
        USERROLENAME (state, v) { state.userRoleName = v },
        USERPOSTID (state, v) { state.userPostId = v },

        TOKEN (state, token) { localStorage.clear(); state.token = token },
        LOCKING (state, b) { state.locking = b },
        DONOTDRAWROUTER (state, flag) { state.doNotDrawRouter = flag },

        SPINLOADING (state, b) { state.spinLoading = b },
        CACHELIST (state, a) { state.cacheList = a },

        NEWMESSAGENUM (state, num) { state.newMessageNum = num },

        ERRORLIST (state, error) { state.errorList.push(error) },
        CLEARERRORLIST (state, error) { state.errorList = [] },
        // PARAMLIST 不需要触发渲染

        END: function () {} // 结尾容错
    },
    actions: {
        setTheme ({ commit }, v) { commit('THEME', v) }, // 修改主题
        setShrink ({ commit }, b) { commit('SHRINK', !!b) }, // 修改界面树形菜单折叠状态
        updateTheme ({ commit }, { theme, shrink }) { // 修改主题相关
            commit('THEME', theme)
            commit('SHRINK', !!shrink)
        },

        setBreadCrumbList ({ commit, state }, routeName) { // 根据当前路由计算面包屑
            const bca = power2BreadCrumb(state.routeList, routeName)
            commit('BREADCRUMBLIST', bca)
        },
        // setRouteList ({ commit }, a) { commit('ROUTELIST', a) }, // 保存一维路由
        // setMenuList ({ commit }, a) { commit('MENULIST', a) },  // 保存左边树数据源
        getPowerList ({ commit }) { // 触发读取权限接口
            return new Promise((resolve, reject) => {
                Api.system.getPowerList().then(powerList => { // 读取权限
                    const { list, listOneLevel } = power2routes(powerList) // 传递给路由模块计算解析
                    commit('POWERLIST', powerList)
                    commit('MENULIST', list)
                    commit('ROUTELIST', listOneLevel)
                    resolve()
                })
            })
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
                        if (num < 0) {
                            clearInterval(i);
                            alert('网络请求失败, 请刷新页面再试');
                            return
                        }
                        num--
                        if (state.powerList === null) {return}
                        clearInterval(i)
                        if (state.powerList.length === 0) {
                            alert('您的权限读取有误, 请联系管理员');
                            return
                        }
                        logic()
                    }, 1e3)
                    return
                }
                logic()
            })
        },
        setTagNavList ({ commit }, a) { commit('TAGNAVLIST', a) }, // 历史记录列表
        addTagNav ({ state, commit }, route) { // 添加历史记录标签
            const name = route.name
            if (specialRouterList.includes(name)) return false
            const routeInfo = state.routeList[name]
            if (!routeInfo) return false
            const list = Object.assign(state.tagNavList)
            /*
            // 记录一下 foreach 怎样停下来
            try {
                list.forEach((row, index, arr) => {
                    if (name === row.name) throw new Error(index)
                })
            } catch (e) {
                if (e.message) list.splice(e.message, 1)
            }
            */
            const index = list.findIndex(function (row) { return name === row.name })
            const data = {
                name,
                title: routeInfo.title,
                query: route.query,
                param: route.param
            }
            if (index !== -1) {
                list[index] = data
            } else {
                list.push(data)
            }
            commit('TAGNAVLIST', list)
        },

        getUserInfo ({ state, commit }) { // 获取管理员相关信息
            return new Promise((resolve, reject) => {
                Api.system.getUserInfo(state.token).then(data => {
                    commit('USERAVATORPATH', data.userPhoto) // 设置管理员头像
                    commit('USERNAME', data.userName) // 设置管理员名
                    commit('USERID', data.id) // 设置管理员ID
                    commit('USEREMAIL', data.email) // 设置管理员EMAIL
                    commit('USERDEPTID', data.deptId) // 设置管理员部门ID
                    commit('USERROLEID', data.roleId) // 设置管理员角色ID
                    commit('USERROLENAME', data.roleName) // 设置管理员角色NAME
                    commit('USERPOSTID', data.postId) // 设置管理员职位ID
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        login ({ commit }, param) { // 管理员登录
            return new Promise((resolve, reject) => {
                Api.system.login(param).then(token => {
                    commit('TOKEN', token)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        gologin ({ commit }) { // 去登录页
            commit('TOKEN', '')
            router.push('login')
        },
        logout ({ commit }) { // 登出
            return new Promise((resolve, reject) => {
                console.info('仙', '登出清场')
                Api.system.logout().then(() => {
                    console.info('登出成功')
                    commit('TOKEN', '')
                    router.push('login')
                    resolve()
                }, errorMsg => {
                    console.error('登出失败')
                    resolve()
                })
            })
        },
        setLocking ({ commit }, b) { commit('LOCKING', !!b) }, // 锁屏状态

        routeSpin ({ commit }, b) { // 启动关闭路由视图loading
            if (b) commit('SPINLOADING', true)
            else setTimeout(function () { commit('SPINLOADING', false) }, 500)
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
                    commit('CACHELIST', x)
                    console.info('仙', '路由keepAlive+', x)
                    return false
                }
            }
            console.info('仙', '路由keepAlive-', toname)
            commit('CACHELIST', [toname])
        },
        noRender ({ commit }, b) { commit('DONOTDRAWROUTER', b) }, // 是否渲染

        getNewMessageNum ({ commit }) { // 读取最新消息数量
            return new Promise((resolve, reject) => {
                Api.system.getNewMessageNum().then(num => {
                    commit('NEWMESSAGENUM', num)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        pushError ({ commit }, error) { // 增加一个错误
            commit('ERRORLIST', error)
            console.log('定时下发报错信息记录')
        },
        clearError ({ commit }) { // 错误太多 看着烦
            commit('CLEARERRORLIST')
            console.log('清空报错信息记录')
        },

        // pageParamList ({ state }, { title, content }) {}, // 不需要 也不好实现
        setTabHiddenWatching () {
            const hiddenProperty = ['hidden', 'webkitHidden', 'mozHidden', 'msHidden']
            const len = hiddenProperty.length
            let propertyKey = ''
            for (var i = 0; i < len; i++) {
                if (hiddenProperty[i] in document) {
                    propertyKey = hiddenProperty[i] // 获取具体的hidden属性名
                    break
                }
            }
            let eventKey = '';
            if (propertyKey && propertyKey !== '') {
                eventKey = propertyKey.replace(/hidden/i, 'visibilitychange')
            }
            // 获取具体事件名eventKey
            const tabPageVisibilityManager = function (pauseCallback, resumeCallback) {
                document.addEventListener(eventKey, function () {
                    if (!document[propertyKey]) {
                        if (resumeCallback) { resumeCallback() }
                    } else {
                        if (pauseCallback) { pauseCallback() }
                    }
                })
            }
            let oldTitle = ''
            tabPageVisibilityManager(function () { // 暂停
                oldTitle = window.document.title
                window.document.title = `已离开 | ${oldTitle}`
            }, function () { // 恢复
                window.document.title = oldTitle
            });
        },
        // 公共逻辑操作
        setTitle ({ state }, routeName) { // 修改title
            const title = config.title || ''
            const routeInfo = state.routeList[routeName] || {}
            const resTitle = routeInfo.title || ''
            window.document.title = `${resTitle} ${resTitle ? '|' : ''} ${title}`
        }
    }
}
