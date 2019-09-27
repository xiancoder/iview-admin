import Main from '@V/main'
import parentView from '@C/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *    title: { String|Number|Function }
 *                 显示在侧边栏、面包屑和标签栏的文字
 *                 使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *                 可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *    hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *    hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *    notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *    access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *    icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *    beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */
// 处理两层路由
const makeTwoLevelRoute = (config) => {
    config.name = config.path
    config.component = config.component || Main
    config.path = '/' + config.path
    config.children = config.children || []
    config.children.forEach((v, i, a) => {
        makeTwoLevelRouteItem(v, config.name)
    })
    return config
}
const makeTwoLevelRouteItem = (config, parentName) => {
    const path = config.path
    config.name = parentName + '_' + path
    config.path = '/' + parentName + '/' + path
    config.component = () => import('@V/' + parentName + '/' + path + '.vue')
    config.meta = { keepAlive: false }
    return config
}
// 处理一层路由
const makeOneLevelRoute = (config) => {
    const path = config.path
    config.name = path
    config.component = () => import('@V/' + path + '.vue')
    config.path = '/' + config.path
    return config
}
// 路由视图文件名必须和路由名字路径一致 方便查找定位
export default [
    {path: '/', redirect: '/home/index'}, // 默认路由视图
    // {path: '/*', redirect: '/error404'}, // 默认404视图
    makeOneLevelRoute({ path: 'login', title: '登录' }),
    makeOneLevelRoute({ path: 'locking', title: '锁屏' }),
    makeOneLevelRoute({ path: 'error404', title: '页面不存在' }),
    makeOneLevelRoute({ path: 'error401', title: '权限不足' }),
    makeOneLevelRoute({ path: 'error500', title: '服务端错误' }),
    makeTwoLevelRoute({
        path: 'home', title: '首页', icon: 'md-globe',
        children: [
            {power: '0000', path: 'index', title: '首页'},
            {power: '0000', path: 'message', icon: 'md-notifications', title: '消息中心'},
            {power: '0000', path: 'errorlogger', icon: 'md-bug', title: '错误收集'},
            {power: '0000', path: 'errorstore', icon: 'md-bug', title: '错误收集'}
        ]
    }),
    makeTwoLevelRoute({
        path: 'exp1', title: '经验集卷一', icon: 'md-globe',
        children: [
            {power: '0000', path: '001bebal', title: 'bebal说明'},
            {power: '0000', path: '002from', title: '表单样式'},
            {power: '0000', path: '003cname', title: '组件name'},
            {power: '0000', path: '004validate', title: '表单校验'},
            {power: '0000', path: '005oldTable', title: '原生表格'},
            {power: '0000', path: '006editITable', title: '编辑表格'},
            {power: '0000', path: '007jsx', title: 'JSX详解'},
            {power: '0000', path: '008mail', title: 'JS发邮件?'},
            {power: '0000', path: '009ibutton', title: 'IviewButton'},
            {power: '0000', path: '010iicon', title: 'IviewIcon'},
            {power: '0000', path: '011name', title: '命名法'},
            {power: '0000', path: '012idivider', title: 'IviewDivider'},
            {power: '0000', path: '013icell', title: 'IviewCell'},
            {power: '0000', path: '014ialert', title: 'IviewAlert'},
            {power: '0000', path: '015inotice', title: 'IviewNotice'},
            {power: '0000', path: '016imodal', title: 'IviewModal'},
            {power: '0000', path: '017autoTable', title: '自动化表格规范'},
            {power: '0000', path: '018state', title: '状态的触发/监听'},
            {power: '0000', path: '019cmd', title: 'Node执行CMD'},
            {power: '0000', path: '020pginfo', title: 'Node查看包版本'}
        ]
    }),
    makeTwoLevelRoute({
        path: 'exp2', title: '经验集卷二', icon: 'md-globe',
        children: [
            {power: '0000', path: '021route', title: '路由跳转'},
            {power: '0000', path: '021route@add', title: '路由跳转添加', hideMenu: true},
            {power: '0000', path: '022vfor', title: 'v-for循环'},
            {power: '0000', path: '023eslint', title: 'EsLint 校验规则'},
            {power: '0000', path: '024tools', title: '自定义 $tool'},
            {power: '0000', path: '025rule', title: '本框架开发规范'},
            {power: '0000', path: '026iviewDefault', title: 'iview改变默认配置'},
            {power: '0000', path: '027filter', title: '过滤器整理'},
            {power: '0000', path: '028pluginLike', title: '插件比喻'},
            {power: '0000', path: '029unitTest', title: '单元测试'},
            {power: '0000', path: '030vueVision', title: 'vue几个版本'},
            {power: '0000', path: '031mockjs', title: '玩转假数据'},
            {power: '0000', path: '032api', title: 'api流程梳理'},
            {power: '1299', path: '100newBee', title: '大牛养成'}
        ]
    }),
    makeTwoLevelRoute({
        path: 'task', title: '任务管理', icon: 'md-buffer',
        children: [
            { power: '0401', path: 'mine', title: '我的任务' },
            { power: '0402', path: 'mine@publish', title: '我发布的任务', hideMenu: true },
            { power: '0402', path: 'mine@conscient', title: '我负责的任务', hideMenu: true },
            { power: '0403', path: 'mine@executive', title: '我执行的任务', hideMenu: true },
            { power: '0404', path: 'mine@besend', title: '抄送我的任务', hideMenu: true },
            { power: '0406', path: 'mine@@info', title: '任务详情', hideMenu: true },
            { power: '0405', path: 'mine@@release', title: '发布任务', hideMenu: true },
            { power: '0407', path: 'mine@@restart', title: '重启任务', hideMenu: true }
        ]
    }),
    makeTwoLevelRoute({
        path: 'components', title: '组件', icon: 'logo-buffer',
        children: [
            {power: '0000', path: 'treeselect', icon: 'md-arrow-dropdown-circle', title: '树状下拉选择器'},
            {power: '0000', path: 'countto', icon: 'md-trending-up', title: '数字渐变'},
            {power: '0000', path: 'draglist', icon: 'ios-infinite', title: '拖拽列表'},
            {power: '0000', path: 'dragdrawer', icon: 'md-list', title: '可拖拽抽屉'},
            {power: '0000', path: 'orgtree', icon: 'ios-people', title: '组织结构树'},
            {power: '0000', path: 'treetable', icon: 'md-git-branch', title: '树状表格'},
            {power: '0000', path: 'cropper', icon: 'md-crop', title: '图片裁剪'},
            {power: '0000', path: 'tables', icon: 'md-grid', title: '多功能表格'},
            {power: '0000', path: 'splitpane', icon: 'md-pause', title: '分割窗口'},
            {power: '0000', path: 'markdown', icon: 'logo-markdown', title: 'Markdown编辑器'},
            {power: '0000', path: 'editor', icon: 'ios-create', title: '富文本编辑器'},
            {power: '0000', path: 'icons', icon: 'bear', title: '自定义图标'}
        ]
    }),
    makeTwoLevelRoute({
        path: 'update', title: '数据上传', icon: 'md-cloud-upload',
        children: [
            {power: '0000', path: 'updatetable', icon: 'md-arrow-dropdown-circle', title: '上传Csv'},
            {power: '0000', path: 'updatepaste', icon: 'md-trending-up', title: '粘贴表格数据'}
        ]
    }),
    makeTwoLevelRoute({
        path: 'excel', title: 'EXCEL导入导出', icon: 'ios-stats',
        children: [
            {power: '0000', path: 'treeselect', icon: 'md-add', title: '导入EXCEL'},
            {power: '0000', path: 'countto', icon: 'md-download', title: '导出EXCEL'}
        ]
    }),
    {
        path: '/multilevel', name: 'multilevel', icon: 'md-menu', title: '多级菜单', component: Main,
        children: [
            {power: '0000', path: 'level_2_1', name: 'level_2_1', icon: 'md-funnel', title: '二级-1', component: () => import('@V/multilevel/level-2-1.vue')},
            {power: '0000', path: 'level_2_2', name: 'level_2_2', access: ['super_admin'], icon: 'md-funnel', showAlways: true, title: '二级-2',
                component: parentView,
                children: [
                    {path: 'level_2_2_1', name: 'level_2_2_1', icon: 'md-funnel', title: '三级', component: () => import('@V/multilevel/level-2-2/level-2-2-1.vue')},
                    {path: 'level_2_2_2', name: 'level_2_2_2', icon: 'md-funnel', title: '三级', component: () => import('@V/multilevel/level-2-2/level-2-2-2.vue')}
                ]
            },
            {path: 'level_2_3', name: 'level_2_3', icon: 'md-funnel', title: '二级-3', component: () => import('@V/multilevel/level-2-3.vue')}
        ]
    }
    /*
    {path: '/401', name: 'error_401', hideInMenu: true, component: () => import('@V/error-page/401.vue')},
    {path: '/500', name: 'error_500', hideInMenu: true, component: () => import('@V/error-page/500.vue')},
    {path: '*', name: 'error_404', hideInMenu: true, component: () => import('@V/error-page/404.vue')}
    {path: '', name: 'doc', title: '文档', href: 'https://lison16.github.io/iview-admin-doc/#/', icon: 'ios-book'},

    {
        path: '/tools_methods', name: 'tools_methods', hideInBread: true, component: Main,
        children: [
            {path: 'tools_methods_', name: 'tools_methods_', icon: 'ios-hammer', title: '工具方法', beforeCloseName: 'before_close_normal', component: () => import('@V/tools-methods/tools-methods.vue')}
        ]
    },
    {
        path: '/i18n', name: 'i18n', hideInBread: true, component: Main,
        children: [
            {path: 'i18n_', name: 'i18n_', icon: 'md-planet', title: 'i18n - {{ i18n_page }}', component: () => import('@V/i18n/i18n-page.vue')}
        ]
    },
    {
        path: '/directive', name: 'directive', hideInBread: true, component: Main,
        children: [
            {path: 'directive_', name: 'directive_', icon: 'ios-navigate', title: '指令', component: () => import('@V/directive/directive.vue')}
        ]
    },
    {
        path: '/argu', name: 'argu', hideInMenu: true, component: Main,
        children: [
            {path: 'params/:id', name: 'params', icon: 'md-flower', title: route => `{{ params }}-${route.params.id}`, notCache: true, beforeCloseName: 'before_close_normal', component: () => import('@V/argu-page/params.vue')},
            {path: 'query', name: 'query', icon: 'md-flower', title: route => `{{ query }}-${route.query.id}`, notCache: true, component: () => import('@V/argu-page/query.vue')}
        ]
    },
     */
]
