import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { Store } from '@/store'
import iView from 'iview'
import { setTitle } from '@/libs/util'
// import config from '@/config'
// const { homeName } = config

Vue.use(Router)
// 路由实例 需要挂载到vue
export const router = new Router({
    routes
    // mode: 'history' // 此模式可以使用 http://localhost:8081/login 来访问
})
// 辅助状态管理 解析路由结构
// 由路由信息列表 整理成 树数据源 一维路由列表
// 本算法只支持二层目录结构
export const power2routes = (powerList) => { // 根据权限更新视图
    console.info('仙', '根据权限更新视图')
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
            listOneLevel[row.name] = { title: item.title, path: item.path }
            if (row.power && powerList.indexOf(row.power) < 0) { return false } // 没有权限
            return !row.hideMenu
        })
        // 如果组中没有内容 放弃
        if (childrenArr && childrenArr.length !== 0) {
            one.children = childrenArr
            one.path = childrenArr[0].path
            list.push(one)
            listOneLevel[one.name] = { title: one.title, path: one.path }
        }
    })
    Store.dispatch('app/setMenuList', list) // 左侧树数据源
    Store.dispatch('app/setRoutePowerList', listOneLevel) // 一维数组
}

// const LOGIN_PAGE_NAME = 'login'

/* const turnTo = (to, access, next) => {
    if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
    else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
} */

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start() // 顶部进度条
    Store.dispatch('app/setBreadCrumb', to.name) // 左侧树数据源
    Store.dispatch('app/setTitle', to.name) // 左侧树数据源

    next() // 跳转
    /* const token = getToken()
    if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
    name: LOGIN_PAGE_NAME // 跳转到登录页
    })
    } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
    } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
    name: homeName // 跳转到homeName页
    })
    } else {
    if (store.state.user.hasGetInfo) {
    turnTo(to, store.state.user.access, next)
    } else {
    store.dispatch('getUserInfo').then(user => {
    // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
    turnTo(to, user.access, next)
    }).catch(() => {
    setToken('')
    next({
    name: 'login'
    })
    })
    }
    } */
})

router.afterEach(to => {
    setTitle(to, router.app)
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})
