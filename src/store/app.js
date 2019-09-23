import Vue from 'vue'
import { power2routes } from '@/router'
import { Api } from '@/api'
export const store = {
    namespaced: true, // 作用域
    state: {
        menuTheme: 'dark', // 主题
        themeColor: 'b', // 主题色彩
        isFullScreen: false, // 全屏 -- 待议 似乎不能默认设置全屏
        lang: '', // 语言
        menuList: [], // 路由结构 (过滤权限)
        menuListOneLevel: [], // 路由一维集合 (过滤权限)
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
        updateMenuList (state, list) { // 路由配置列表(已经过滤)
            state.menuList = list
        },
        routeSpinStart (state) { // 启动路由视图loading
            state.spinLoading = true
        },
        routeSpinEnd (state) { // 关闭路由视图loading
            setTimeout(function () {
                state.spinLoading = false
            }, 500)
        },
        updateBreadcrumbList (state, list) { // 设置面包屑数据源
            state.menuListOneLevel = list
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
        resetFullScreen (state, flag) { // 重置一下全屏状态
            state.isFullScreen = !!(document.fullscreenElement || document.mozFullScreenElement ||
                                 document.webkitFullscreenElement || document.fullScreen ||
                                 document.mozFullScreen || document.webkitIsFullScreen)
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
        },
        updatePowerList (state, list) { // 设置权限列表
            state.powerList = list
        }
    },
    actions: {
        readPower ({ // 触发读取接口
            commit // 状态管理
        }) {
            Api.app.powerList().then(powerList => { // 读取权限
                power2routes(powerList) // 传递给路由模块
                commit('updatePowerList', powerList)
            })
        },
        hasPower ({ state }, name) { // 判断是否有权限
            return state.menuListNoPower[name] === null
        }
    }
}
