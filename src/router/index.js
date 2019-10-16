import Vue from 'vue'
import Router from 'vue-router'
import { Store } from '@/store'
import { LoadingBarRun } from '@/tools'
import { routerList as routes, specialRouterList } from './routers'
import Config from '@/config'
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
    Store.dispatch('system/setMenuList', list) // 左侧树数据源
    Store.dispatch('system/setRoutePowerList', listOneLevel) // 一维扁平对象
}
router.beforeEach((to, from, next) => {
    console.info('仙', '准备跳转', to)
    if (Store.state.system.doNotDrawRouter) { return } // 回退再前进 之间的页面不做渲染
    LoadingBarRun(true) // 顶部进度条
    Store.dispatch('system/setBreadCrumb', to.name) // 左侧树数据源
    Store.dispatch('system/routeSpin', true) // 路由视图loading
    // 滚动条位置
    // 放弃 有更好的方法 路由提供了 scrollBehavior 钩子
    // 不再放弃 钩子有问题
    const scroller = document.getElementById('mainScrollFlag')
    if (scroller) scroller.scrollTo(0, 0)
    // 路由keepAlive管理
    Store.dispatch('system/keepalive', to.name) // 左侧树数据源
    const isLocked = Store.state.system.locking
    const goLocking = ['locking'].includes(to.name)
    if (isLocked && !goLocking) { // 锁定状态不允许去其他页面
        return next({ replace: true, name: 'locking' })
    }
    if (!isLocked && goLocking) { // 非锁定状态不允许去锁定页面
        return next(false) // 中止一切 复原url
    }
    const isLogined = Store.state.system.access
    const goLogin = ['login'].includes(to.name)
    if (!isLogined && !goLogin) { // 未登录状态不允许去其他页面
        return next({ replace: true, name: 'login' })
    }
    if (isLogined && goLogin) { // 登录状态不允许去注册登录页
        return next({ replace: true, name: Config.homeName })
    }
    if (specialRouterList.includes(to.name)) { // 默认页面不走鉴权
        return next()
    }
    Store.dispatch('system/hasPower', to.name).then((bool) => { // 鉴权
        console.info('仙', '鉴权页面', bool)
        if (!bool) { return next({name: 'error403'}) }
        next()
    })
})
router.afterEach(to => {
    LoadingBarRun(false) // 顶部进度条
    Store.dispatch('system/setTitle', to.name) // 左侧树数据源
    Store.dispatch('system/addTagNav', to) // 增加页面缓存标签
    Store.dispatch('system/routeSpin', false) // 路由视图loading
    console.info('仙', '跳转完成', to)
})
