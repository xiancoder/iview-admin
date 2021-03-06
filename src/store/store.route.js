// 项目::管理员/登录用户/操作人状态管理模块
// 负责::所有的管理员状态都集中在这里
// 2019年12月30日18:32:05 更新

import config from '@/config' // 自定义配置
import { Api } from '@/api'
import { power2routesII, power2BreadCrumb } from '@/router' // 自定义路由定义
import { homePage, specialPowerList, loginPowerList } from '@/router/routers'

export default {
    namespaced: true, // 作用域,配置上以后才能够dispach system/xxx 建议必须 不同的状态里有相同字段值
    state: { // 缓存字段以及默认值
        breadCrumbList: [], // 面包屑内容数组 实时解析路由 首页-一级路由-二级路由
        routeList: [], // 一维化列表 所有的路由信息 主要是使用权限 名称
        menuList: [], // 左边树形目录列表(已经过滤) 所有的有权限路由列表
        powerList: null, // 权限列表 请求后台得到的页面权限列表 todo 似乎没有保存的必要???
        tagNavList: [], // 历史记录tab列表

        spinLoading: false, // 路由视图加载中 main.vue组件的loadiing效果
        cacheList: [], // keepalive的缓存页面 缓存方式是 组件页面设置name 加入此数组即可
        doNotDrawRouter: false, // 不要渲染路由 目的是管理url的前进和后退

        end: 1 // 防呆设计
    },
    mutations: { // 触发事件 注意 vue只有mutations才能触发任意使用状态的代码位置的监听渲染 建议大写
        BREADCRUMBLIST (state, a) { state.breadCrumbList = a },
        ROUTELIST (state, a) { state.routeList = a },
        MENULIST (state, a) { state.menuList = a },
        POWERLIST (state, a) { state.powerList = a },
        TAGNAVLIST (state, a) { state.tagNavList = a },

        SPINLOADING (state, b) { state.spinLoading = b },
        CACHELIST (state, a) { state.cacheList = a },

        END: function () {} // 防呆设计
    },
    actions: {
        setBreadCrumbList ({ commit, state }, routeName) { // 根据当前路由计算面包屑
            window.currentName = routeName
            const bca = power2BreadCrumb(state.routeList, routeName)
            commit('BREADCRUMBLIST', bca)
        },
        getPowerList ({ commit }, powerList) { // 触发读取权限接口
            return new Promise((resolve, reject) => {
                const logic = (powerList) => { // 读取权限
                    const { list, listOneLevel } = power2routesII(powerList) // 传递给路由模块计算解析
                    commit('POWERLIST', powerList)
                    commit('MENULIST', list)
                    commit('ROUTELIST', listOneLevel)
                    resolve()
                }
                if (powerList) {
                    logic(powerList)
                } else {
                    Api.system.getPowerList().then(logic).catch(() => logic([]))
                }
            })
        },
        hasPower ({ state }, name) { // 判断是否有权限 得多考虑权限没有返回的情况
            const loopObj = () => {
                return new Promise((resolve, reject) => {
                    if (state.menuList.length === 0) {
                        setTimeout(() => {
                            console.info(
                                '%c 资料库 %c 等待鉴权 ',
                                'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                                'background:green; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
                                '-'
                            )
                            loopObj().then(resolve).catch(reject)
                        }, 1e3)
                        return false
                    }
                    const routeInfo = state.routeList[name] || {}
                    resolve(routeInfo.power)
                })
            }
            return loopObj()
        },
        setTagNavList ({ commit }, a) { // 历史记录列表
            commit('TAGNAVLIST', a)
        },
        addTagNav ({ state, commit }, route) { // 添加历史记录标签
            const name = route.name
            if (homePage === name) return false
            if (specialPowerList.includes(name)) return false
            if (loginPowerList.includes(name)) return false
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
            const index = list.findIndex(function (row) {
                return name === row.name || name.replace(/@.*/g, '') === row.name || name === row.name.replace(/@.*/g, '')
            })
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
            if (list.length > 10) {
                list.splice(1, 1)
            }
            commit('TAGNAVLIST', list)
        },
        routeSpin ({ commit }, b) { // 启动关闭路由视图loading
            // 路由 transition 搞通了 这个不需要了
            // 路由 transition 动画生硬 还是用这个吧 2020年1月16日11:37:06
            if (b) commit('SPINLOADING', true)
            else setTimeout(function () { commit('SPINLOADING', false) }, 500) // 不再延时
        },
        keepalive ({ state, commit }, toname) { // 启动关闭路由视图loading
            toname = toname.replace(/[@|$]/g, '_')
            if (state.cacheList && state.cacheList.length) {
                let includes = false
                let ins = false
                state.cacheList.forEach(row => {
                    if (toname.includes(row)) { includes = true }
                    if (toname === row) { ins = true }
                })
                if (ins) {
                    console.info(
                        '%c 资料库 %c 本页面已缓存 NoKeepAlive',
                        'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                        'background:green; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
                        state.cacheList, toname
                    )
                    return false
                }
                if (includes) {
                    const list = Object.assign(state.cacheList)
                    list.push(toname)
                    commit('CACHELIST', list)
                    console.info(
                        '%c 资料库 %c 页面缓存 KeepAlive',
                        'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                        'background:green; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
                        list, toname
                    )
                    return false
                }
            }
            console.info(
                '%c 资料库 %c 初始页面缓存 KeepAlive',
                'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                'background:green; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
                '-'
            )
            commit('CACHELIST', [toname])
        },
        noRender ({ commit }, b) { // 是否渲染
            commit('DONOTDRAWROUTER', b)
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
