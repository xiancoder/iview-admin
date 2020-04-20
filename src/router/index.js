// 项目::路由模块
// 负责::所有的路由逻辑都集中在这里
// 2019年12月31日15:15:49 更新

import Vue from 'vue' // 核心
import Router from 'vue-router'
import { Store } from '@/store' // 自定义状态管理
import { LoadingBarRun } from '@/tools' // 自定义常用工具
import { homePage, routerList as routes, specialPowerList, loginPowerList, lockPowerList } from './routers'

// 重写路由的push方法
// 解决vue项目路由出现message: "Navigating to current location (XXX) is not allowed"的问题
// 原因：在路由中添加了相同的路由
// 先注掉 明显没有必须使用的必要
// 不能用 会导致页面无法跳转
/*
const routerPush = Router.prototype.push
Router.prototype.push = (location) => {
    return routerPush.call(this, location).catch(error => error)
}
const routerReplace = Router.prototype.replace
Router.prototype.replace = (location) => {
    return routerReplace.call(this, location).catch(error => error)
}
*/

Vue.use(Router)

// 路由实例 需要挂载到vue
export const router = new Router({
    routes,
    mode: 'hash'
    // mode: 'history', // 此模式可以使用 http://localhost:8081/login 来访问 但是刷新就汇报错
    /* scrollBehavior: (to, from, savedPosition) => { // 注意: 这个功能只在 HTML5 history 模式下可用。
        // return 期望滚动到哪个的位置
        if (savedPosition) { return savedPosition } else { return { x: 0, y: 0 } }
        // 如果你要模拟“滚动到锚点”的行为：
        // if (to.hash) { return { selector: to.hash } }
    } */
})

// 辅助状态管理 解析路由结构
// 由路由信息列表 整理成 树数据源 一维路由列表
// 本算法只支持二层目录结构
/* export const power2routes = (powerList) => { // 根据权限更新视图
    console.info('%c仙 根据权限更新视图', 'color:#05ff0f;background:#000;padding:0 5px;')
    // 目的是整理左边树数据源
    // 目的是整理一维视图
    const list = []
    const listOneLevel = {}
    routes.forEach((item, index) => { // 过滤页面
        const one = {
            icon: item.icon || 'md-globe',
            name: item.name,
            title: item.title,
            path: item.path
        }
        // 根据规则过滤二级页面组
        const childrenArr = (item.children || []).filter((row, index, arr) => { // 根据权限过滤页面
            let power = row.power && powerList.indexOf(row.power) > -1
            listOneLevel[row.name] = { title: row.title, path: row.path, power: power }
            if (!power) { return false } // 没有权限
            return !row.hideMenu
        })
        // 如果组中没有内容 放弃
        if (childrenArr && childrenArr.length !== 0) {
            one.children = childrenArr
            one.path = childrenArr[0].path
            list.push(one)
        }
        listOneLevel[one.name] = { title: one.title, path: one.path, power: true }
    })
    return { list, listOneLevel }
}
*/

// 辅助状态管理 解析路由结构
// 由路由信息列表 整理成 左边树数据源 一维路由列表
// 本算法多层目录结构
export const power2routesII = (powerList) => { // 根据权限更新视图
    console.info('%c仙 根据权限更新视图II', 'color:#05ff0f;background:#000;padding:0 5px;')
    const listOneLevel = {}
    const readRouterList = function (routeList, listOneLevel) {
        const list = []
        for (var i = 0, l = routeList.length; i < l; i++) {
            const item = routeList[i]
            const one = {
                icon: item.icon || 'md-globe',
                name: item.name,
                title: item.title,
                path: item.path
            }
            if (item.children && item.children.length) {
                const childrenArr = readRouterList(item.children, listOneLevel)
                // 如果组中没有内容 放弃
                if (childrenArr && childrenArr.length !== 0) {
                    one.children = childrenArr
                    one.path = childrenArr[0].path
                    list.push(one)
                } else {
                    one.children = []
                }
                if (one.name) {
                    listOneLevel[one.name] = { title: one.title, path: one.path, power: true }
                }
            } else { // 根据权限过滤页面
                let power = false
                if (item.power) {
                    if (item.power === '0000' || powerList.indexOf(item.power) > -1) {
                        power = item.power
                    }
                }
                if (power && !item.hideMenu) {
                    list.push(one)
                }
                if (one.name) {
                    listOneLevel[item.name] = { title: item.title, path: item.path, power: power }
                }
            }
        }
        return list
    }
    const list = readRouterList(routes, listOneLevel)
    return { list, listOneLevel }
}

// 辅助状态管理 解析单路由结构
// 根据路由名称解析前因后果
// 本算法只支持 同名称结果和 @符号子类
export const power2BreadCrumb = (routeList, routeName) => {
    const bca = []
    if (routeName && routeName !== homePage && routeList && routeName && routeName.indexOf('_') > -1) {
        let l1 = routeName.replace(/_.*$/g, '')
        let r1 = routeList[l1]
        if (r1 && l1 !== 'home') { bca.push(r1) }
        if (routeName.indexOf('@') > -1) {
            let l2 = routeName.replace(/@.*$/g, '').replace(/^.*_/g, '')
            let r2 = routeList[l2]
            if (r2) { bca.push(r2) }
        }
        let r3 = routeList[routeName]
        if (r3) { bca.push(r3) }
    }
    return bca
}

router.beforeEach((to, from, next) => {
    if (to && from && to.name === from.name) { // 本页面跳转 不做各种表示
        console.info('%c仙 参数变更', 'color:#05ff0f;background:#000;padding:0 5px;')
        return next({ replace: true })
    }

    if (Store.state.route.doNotDrawRouter) { // 回退再前进 之间的页面不做渲染
        console.info('%c仙 准备跳转 历史记录管理', 'color:#05ff0f;background:#000;padding:0 5px;')
        return
    }

    console.info('%c仙 准备跳转', 'color:#05ff0f;background:#000;padding:0 5px;', to)

    const isLogined = Store.getters['admin/access']
    const goLogin = loginPowerList.includes(to.name)
    if (isLogined && goLogin) { // 已登录去登录页 - 回首页
        console.info('%c仙 禁止 登录状态禁止去登录页面', 'color:#05ff0f;background:#000;padding:0 5px;')
        return next({ replace: true, name: homePage })
    }
    if (!isLogined && goLogin) { // 未登录去登录页 - 直达
        return next()
    }
    if (!isLogined && !goLogin) { // 未登录去其他页 - 回登录页
        console.info('%c仙 禁止 未登录状态禁止去非登录页面', 'color:#05ff0f;background:#000;padding:0 5px;')
        return next({ replace: true, name: loginPowerList[0] })
    }

    const isLocked = Store.state.system.locking
    const goLocking = lockPowerList.includes(to.name)
    if (isLocked && !goLocking) { // 已锁定去其他页 - 禁止
        return next(false)
    }

    if (goLocking) {
        if (!isLocked) {
            console.info('%c仙 准备跳转 未锁定状态去锁定页面', 'color:#05ff0f;background:#000;padding:0 5px;')
            return next()
        }
        console.info('%c仙 准备跳转 锁定状态不允许去非锁定页面', 'color:#05ff0f;background:#000;padding:0 5px;')
        return next({ replace: true, name: 'locking' })
    }

    Store.dispatch('route/setBreadCrumbList', to.name) // 面包屑

    if (specialPowerList.includes(to.name)) {
        console.info('%c仙 准备跳转 特殊不走鉴权', 'color:#05ff0f;background:#000;padding:0 5px;')
        return next()
    }

    if (specialPowerList.includes(to.name)) {
        console.info('%c仙 准备跳转 默认不走鉴权', 'color:#05ff0f;background:#000;padding:0 5px;')
        return next()
    }

    const goPowerPage = () => { // 权限页面的判断
        LoadingBarRun(true) // 顶部进度条
        Store.dispatch('route/keepalive', to.name) // 路由keepAlive管理 当前页缓存

        // 路由 transition 搞通了 这个不需要了
        // 路由 transition 动画生硬 还是用这个吧 2020年1月16日11:37:06
        Store.dispatch('route/routeSpin', true) // 路由视图loading

        // 滚动条位置
        // 放弃 有更好的方法 路由提供了 scrollBehavior 钩子
        // 不再放弃 上面说的钩子有问题
        // try {
        //    const scroller = document.getElementById('mainScrollFlag')
        //    if (scroller) scroller.scrollTo(0, 0)
        // } catch (e) {
        //     console.error('IE不支持scrollTo')
        // }
        // 改进整体结构 使用body的滚动
        window.scrollTo(0, 0)

        console.info('%c仙 准备跳转 跳转成功', 'color:#05ff0f;background:#000;padding:0 5px;')
        next() // 进入页面
    }

    Store.dispatch('route/hasPower', to.name).then((bool) => { // 鉴权
        console.info('%c仙 准备跳转 鉴权', 'color:#05ff0f;background:#000;padding:0 5px;', bool ? '有权限' : '无权限')
        if (!bool) { return next({name: 'error403'}) }
        goPowerPage()
    })
})

router.afterEach((to, from) => {
    LoadingBarRun(false) // 顶部进度条

    // 路由 transition 搞通了 这个不需要了
    // 路由 transition 动画生硬 还是用这个吧 2020年1月16日11:37:06
    Store.dispatch('route/routeSpin', false) // 路由视图loading

    if (to && from && to.name === from.name) { // 本页面跳转 不做各种表示
        return false
    }

    Store.dispatch('route/setTitle', to.name) // 设置标题
    Store.dispatch('route/addTagNav', to) // 增加页面缓存标签

    console.info('%c仙 跳转完成', 'color:#05ff0f;background:#000;padding:0 5px;', to)
})
