import Vue from 'vue'
import config from '@/config'
export const store = {
    namespaced: true, // 作用域
    state: {
        isFullScreen: false, // 全屏 不能默认设置全屏
        breadCrumbList: [], // 面包屑内容
        routeList: [], // 一维路由信息列表
        menuList: [], // 路由结构 (过滤掉无权限页面)

        menuTheme: 'dark', // 主题
        themeColor: 'b', // 主题色彩
        lang: '', // 语言
        menuListNoPower: [], // 无权限路由列表
        currentPageName: '', // 当前页面的name (for面包屑)
        cachePage: [], // 缓存视图 不知作用 ???
        dontCache: ['artical-publish'], // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
        locking: false, // 锁屏状态
        spinLoading: false, // 路由视图加载中
        shrink: false, // 页面折叠状态
        author: 'liuyp', // 版权所有
        powerList: [] // 权限列表
    },
    mutations: {
        fullScreen (state, flag) { state.isFullScreen = flag }, // 重置全屏状态
        updateBreadCrumb (state, list) { state.breadCrumbList = list }, // 面包屑内容
        updateRoutePowerList (state, list) { state.routeList = list }, // 设置一维路由信息列表 完整信息
        updateMenuList (state, list) { state.menuList = list }, // 路由配置列表(已经过滤)

        routeSpinStart (state) { // 启动路由视图loading
            state.spinLoading = true
        },
        routeSpinEnd (state) { // 关闭路由视图loading
            setTimeout(function () {
                state.spinLoading = false
            }, 500)
        },
        updateNoPowerList (state, list) { // 无权限页面集合
            state.menuListNoPower = list
        },
        changeMenuTheme (state, theme) { // 改变主题
            state.menuTheme = theme
        },
        changeMainTheme (state, mainTheme) { // 改变色彩
            state.themeColor = mainTheme
        },
        initCachepage (state) { // 初始化缓存页面
            if (localStorage.cachePage) {
                state.cachePage = JSON.parse(localStorage.cachePage)
            }
        },
        closePage (state, name) { // 关闭缓存页面
            state.cachePage.forEach((item, index) => {
                if (item === name) {
                    state.cachePage.splice(index, 1)
                }
            })
        },
        switchLang (state, lang) { // 切换语言
            state.lang = lang
            Vue.config.lang = lang
        },
        setCurrentPageName (state, name) { // 设置当前页name
            if (!name) return false
            state.currentPageName = name
            const route = state.menuListOneLevel[name] || {}
            window.document.title = (route.title || 'OA-WEB') + ' | 资料库'
        },
        setFullScreen (state, flag) { // 设置全屏状态
            state.isFullScreen = flag
            if (flag) {
                let main = document.body
                if (main.requestFullscreen) { main.requestFullscreen() } else if (main.mozRequestFullScreen) { main.mozRequestFullScreen() } else if (main.webkitRequestFullScreen) { main.webkitRequestFullScreen() } else if (main.msRequestFullscreen) { main.msRequestFullscreen() }
            } else {
                if (document.exitFullscreen) { document.exitFullscreen() } else if (document.mozCancelFullScreen) { document.mozCancelFullScreen() } else if (document.webkitCancelFullScreen) { document.webkitCancelFullScreen() } else if (document.msExitFullscreen) { document.msExitFullscreen() }
            }
        },
        setLocking (state, flag) { // 设置页面锁定
            state.locking = flag
        },
        changeShrink (state, flag) { // 设置左边树折叠状态
            state.shrink = flag
        }
    },
    actions: {
        resetFullScreen ({ commit }) { // 重置一下全屏状态
            const bool = !!(document.fullscreenElement || document.mozFullScreenElement ||
                 document.webkitFullscreenElement || document.fullScreen ||
                 document.mozFullScreen || document.webkitIsFullScreen)
            commit('fullScreen', bool)
        },
        setBreadCrumb ({ commit, state }, routeName) { // 获取一维路由中当前路由的面包屑
            const bca = []
            let r0 = { title: '首页', path: '/home/index' }
            if( routeName.indexOf('_') > -1 ){
                let l1 = routeName.replace(/_.*$/g, '')
                let r1 = state.routeList[l1]
                if (r1 && l1 != 'home'){
                    bca.push(r0)
                    bca.push(r1)
                }
                if( routeName.indexOf('@') > -1 ){
                    let l2 = routeName.replace(/@.*$/g, '').replace(/^.*_/g, '')
                    let r2 = state.routeList[l2]
                    if (r2){
                        bca.push(r2)
                    }
                }
                let r3 = state.routeList[routeName]
                if (r3){
                    bca.push(r3)
                }
            }
            commit('updateBreadCrumb', bca)
        },
        setTitle ({ state }, routeName) { // 修改title
            const title = config.title || 'ABC'
            const resTitle = state.routeList[routeName].title || 'ABC'
            window.document.title = `${title} - ${resTitle}`
        },
        setRoutePowerList ({ commit }, list) { // 保存一维路由
            commit('updateRoutePowerList', list)
        },
        setMenuList ({ commit }, list) { // 保存左边树数据源
            commit('updateMenuList', list)
        },

        hasPower ({ state }, name) { // 判断是否有权限
            return state.menuListNoPower[name] === null
        }
    }
}
