import Vue from 'vue' // 核心
import Router from 'vue-router'
import { Store } from '@/store' // 自定义状态管理
import { LoadingBarRun } from '@/tools' // 自定义常用工具
import { routerList as routes, specialPowerList, loginPowerList, lockPowerList } from './routers'
import Config from '@/config' // 自定义配置

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
export const power2routes = (powerList) => { // 根据权限更新视图
    console.info('仙', '根据权限更新视图', {powerList})
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

// 辅助状态管理 解析单路由结构
// 根据路由名称解析前因后果
// 本算法只支持 同名称结果和 @符号子类
export const power2BreadCrumb = (routeList, routeName) => {
    const bca = []
    let r0 = { title: '首页', path: '/home/index' }
    bca.push(r0)
    if (
        routeList &&
        routeName &&
        routeName.indexOf('_') > -1 &&
        routeName !== 'home_index'
    ) {
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
        console.info('仙', '参数变更')
        return next()
    }

    if (Store.state.system.doNotDrawRouter) { // 回退再前进 之间的页面不做渲染
        console.info('仙', '准备跳转', '历史记录管理')
        return
    }

    console.info('仙', '准备跳转', to)

    LoadingBarRun(true) // 顶部进度条

    const isLocked = Store.state.system.locking
    const goLocking = lockPowerList.includes(to.name)
    if (isLocked) {
        if (goLocking) { return next() }
        console.info('仙', '准备跳转', '锁定状态不允许去其他页面')
        return next({ replace: true, name: 'locking' })
    }

    const isLogined = Store.getters['system/access']
    const goLogin = loginPowerList.includes(to.name)
    if (!isLogined) {
        if (goLogin) { return next() }
        console.info('仙', '准备跳转', '未登录状态不允许去其他页面')
        return next({ replace: true, name: 'login' })
    }

    Store.dispatch('system/setBreadCrumbList', to.name) // 面包屑
    Store.dispatch('system/routeSpin', true) // 路由视图loading

    if (specialPowerList.includes(to.name)) {
        console.info('仙', '准备跳转', '特殊页面 不走鉴权')
        return next()
    }

    if (specialPowerList.includes(to.name)) {
        console.info('仙', '准备跳转', '默认页面 不走鉴权')
        return next()
    }

    const goPowerPage = () => { // 权限页面的判断
        Store.dispatch('system/keepalive', to.name) // 路由keepAlive管理 当前页缓存

        if (!isLocked && goLocking) {
            console.info('仙', '准备跳转', '非锁定状态不允许去锁定页面')
            return next(false) // 中止一切 复原url
        }

        if (isLogined && goLogin) {
            console.info('仙', '准备跳转', '登录状态不允许去注册登录页')
            return next({ replace: true, name: Config.homeName })
        }

        // 滚动条位置
        // 放弃 有更好的方法 路由提供了 scrollBehavior 钩子
        // 不再放弃 钩子有问题
        try {
            const scroller = document.getElementById('mainScrollFlag')
            if (scroller) scroller.scrollTo(0, 0)
        } catch (e) {
            console.error('IE不支持scrollTo')
        }

        console.info('仙', '准备跳转', '跳转成功')
        next() // 进入页面
    }

    Store.dispatch('system/hasPower', to.name).then((bool) => { // 鉴权
        console.info('仙', '准备跳转', '鉴权页面', bool ? '有权限' : '无权限')
        if (!bool) { return next({name: 'error403'}) }
        goPowerPage()
    })
})

router.afterEach((to, from) => {
    if (to && from && to.name === from.name) { // 本页面跳转 不做各种表示
        return false
    }

    LoadingBarRun(false) // 顶部进度条

    Store.dispatch('system/setTitle', to.name) // 设置标题
    // Store.dispatch('system/addTagNav', to) // 增加页面缓存标签
    Store.dispatch('system/routeSpin', false) // 路由视图loading

    console.info('仙', '跳转完成', to)
})
