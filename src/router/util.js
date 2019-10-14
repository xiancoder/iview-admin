import Main from '@V/main'
import { objEqual } from '@/utils/object'
// 处理两层路由
export const makeTwoLevelRoute = (config) => {
    config.name = config.path
    config.component = config.component || Main
    config.path = '/' + config.path
    config.children = config.children || []
    config.children.forEach((v, i, a) => {
        makeTwoLevelRouteItem(v, config.name)
    })
    return config
}
export const makeTwoLevelRouteItem = (config, parentName) => {
    const path = config.path
    config.name = parentName + '_' + path
    config.path = '/' + parentName + '/' + path
    config.component = () => import('@V/' + parentName + '/' + path + '.vue')
    config.meta = { keepAlive: config.keepAlive || false }
    return config
}
// 处理一层路由
export const makeOneLevelRoute = (config) => {
    const path = config.path
    config.name = path
    config.component = () => import('@V/' + path + '.vue')
    config.path = '/' + config.path
    return config
}
/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
    const params1 = route1.params || {}
    const params2 = route2.params || {}
    const query1 = route1.query || {}
    const query2 = route2.query || {}
    return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
}
