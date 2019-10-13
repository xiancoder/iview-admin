import Main from '@V/main'
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
    config.meta = { keepAlive: false }
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
