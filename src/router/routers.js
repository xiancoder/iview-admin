import Main from '@/views/main'
// import parentView from '@/components/parent-view'

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
// 处理一二级路由
const makeOneLevelRoute = (config) => {
    config.name = config.path
    config.component = config.component || Main
    config.path = '/' + config.path
    config.children = config.children || []
    config.children.forEach((v, i, a) => {
        makeTwoLevelRoute(v, config.name)
    })
    return config
}
// 处理三级路由
const makeTwoLevelRoute = (config, parentName) => {
    const path = config.path
    config.name = parentName + '_' + path
    config.path = '/' + parentName + '/' + path
    config.component = () => import('@/views/' + parentName + '/' + path + '.vue')
    config.meta = { keepAlive: false }
    return config
}
// 路由视图文件名必须和路由名字路径一致 方便查找定位
export default [
    {path: '/', redirect: '/home/index'}, // 默认路由视图
    makeOneLevelRoute({
        path: 'home', title: '首页', icon: 'md-globe',
        children: [
            {power: '0000', path: 'index', title: '首页'}
        ]
    }),
    makeOneLevelRoute({
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
    makeOneLevelRoute({
        path: 'exp2', title: '经验集卷二', icon: 'md-globe',
        children: [
            {power: '0000', path: '021route', title: '路由跳转'},
            {power: '0000', path: '021route@add', title: '路由跳转添加', hideMenu: true},
            {power: '0000', path: '022vfor', title: 'v-for循环'},
            {power: '0000', path: '023eslint', title: 'EsLint 校验规则'},
            {power: '0000', path: '024tools', title: '自定义 $tool'},
            {power: '0000', path: '025rule', title: '本框架开发规范'},
            {power: '0000', path: '026iviewDefault', title: 'iview改变默认配置'},
            {power: '0000', path: '027filter', title: '过滤器收集'},
            {power: '1299', path: '100newBee', title: '大牛养成'}
        ]
    }),
    makeOneLevelRoute({
        path: 'components', title: '组件', icon: 'logo-buffer',
        children: [
            {power: '0000', path: 'treeselectpage', icon: 'md-arrow-dropdown-circle', title: '树状下拉选择器'},
            {power: '0000', path: 'counttopage', icon: 'md-trending-up', title: '数字渐变'},
            {power: '0000', path: 'draglistpage', icon: 'ios-infinite', title: '拖拽列表'},
            {power: '0000', path: 'dragdrawerpage', icon: 'md-list', title: '可拖拽抽屉'},
            {power: '0000', path: 'orgtreepage', icon: 'ios-people', title: '组织结构树'},
            {power: '0000', path: 'treetablepage', icon: 'md-git-branch', title: '树状表格'},
            {power: '0000', path: 'cropperpage', icon: 'md-crop', title: '图片裁剪'},
            {power: '0000', path: 'tablespage', icon: 'md-grid', title: '多功能表格'},
            {power: '0000', path: 'splitpanepage', icon: 'md-pause', title: '分割窗口'},
            {power: '0000', path: 'markdownpage', icon: 'logo-markdown', title: 'Markdown编辑器'},
            {power: '0000', path: 'editorpage', icon: 'ios-create', title: '富文本编辑器'},
            {power: '0000', path: 'iconspage', icon: 'bear', title: '自定义图标'}
        ]
    }),
    /*
    {path: '/login', name: 'login', title: 'Login - 登录', component: () => import('@/views/login.vue')},
    {path: '/*', name: 'error-404', title: '404-页面不存在', component: () => import('@/views/error-page/404.vue')},
    // {path: '/403', name: 'error-403', title: '403-权限不足', component: () => import('@/views/error-page/403.vue')},
    {path: '/500', name: 'error-500', title: '500-服务端错误', component: () => import('@/views/error-page/500.vue')},
    {path: '/locking', name: 'locking', title: 'Lock - 锁屏', component: () => import('@C/lockscreen/locking-page.vue')},

    {path: '', name: 'doc', title: '文档', href: 'https://lison16.github.io/iview-admin-doc/#/', icon: 'ios-book'},
    {
        path: '/join', name: 'join', component: Main, hideInBread: true,
        children: [
            {path: 'join_page', name: 'join_page', icon: '_qq', title: 'QQ群', component: () => import('@/views/join-page.vue')}
        ]
    },
    {
        path: '/message', name: 'message', component: Main, hideInBread: true, hideInMenu: true,
        children: [
            {path: 'message_page', name: 'message_page', icon: 'md-notifications', title: '消息中心', component: () => import('@/views/single-page/message/index.vue')}
        ]
    },
    {
        path: '/update', name: 'update', icon: 'md-cloud-upload', title: '数据上传', component: Main,
        children: [
            {path: 'update_table_page', name: 'update_table_page', icon: 'ios-document', title: '上传Csv', component: () => import('@/views/update/update-table.vue')},
            {path: 'update_paste_page', name: 'update_paste_page', icon: 'md-clipboard', title: '粘贴表格数据', component: () => import('@/views/update/update-paste.vue')}
        ]
    },
    {
        path: '/excel', name: 'excel', icon: 'ios-stats', title: 'EXCEL导入导出', component: Main,
        children: [
            {path: 'upload-excel', name: 'upload-excel', icon: 'md-add', title: '导入EXCEL', component: () => import('@/views/excel/upload-excel.vue')},
            {path: 'export-excel', name: 'export-excel', icon: 'md-download', title: '导出EXCEL', component: () => import('@/views/excel/export-excel.vue')}
        ]
    },
    {
        path: '/tools_methods', name: 'tools_methods', hideInBread: true, component: Main,
        children: [
            {path: 'tools_methods_page', name: 'tools_methods_page', icon: 'ios-hammer', title: '工具方法', beforeCloseName: 'before_close_normal', component: () => import('@/views/tools-methods/tools-methods.vue')}
        ]
    },
    {
        path: '/i18n', name: 'i18n', hideInBread: true, component: Main,
        children: [
            {path: 'i18n_page', name: 'i18n_page', icon: 'md-planet', title: 'i18n - {{ i18n_page }}', component: () => import('@/views/i18n/i18n-page.vue')}
        ]
    },
    {
        path: '/error_store', name: 'error_store', hideInBread: true, component: Main,
        children: [
            {path: 'error_store_page', name: 'error_store_page', icon: 'ios-bug', title: '错误收集', component: () => import('@/views/error-store/error-store.vue')}
        ]
    },
    {
        path: '/error_logger', name: 'error_logger', hideInBread: true, hideInMenu: true, component: Main,
        children: [
            {path: 'error_logger_page', name: 'error_logger_page', icon: 'ios-bug', title: '错误收集', component: () => import('@/views/single-page/error-logger.vue')}
        ]
    },
    {
        path: '/directive', name: 'directive', hideInBread: true, component: Main,
        children: [
            {path: 'directive_page', name: 'directive_page', icon: 'ios-navigate', title: '指令', component: () => import('@/views/directive/directive.vue')}
        ]
    },
    {
        path: '/multilevel', name: 'multilevel', icon: 'md-menu', title: '多级菜单', component: Main,
        children: [
            {path: 'level_2_1', name: 'level_2_1', icon: 'md-funnel', title: '二级-1', component: () => import('@/views/multilevel/level-2-1.vue')},
            {path: 'level_2_2', name: 'level_2_2', access: ['super_admin'], icon: 'md-funnel', showAlways: true, title: '二级-2'},
                component: parentView,
                children: [
                    {path: 'level_2_2_1', name: 'level_2_2_1', icon: 'md-funnel', title: '三级', component: () => import('@/views/multilevel/level-2-2/level-2-2-1.vue')},
                    {path: 'level_2_2_2', name: 'level_2_2_2', icon: 'md-funnel', title: '三级', component: () => import('@/views/multilevel/level-2-2/level-2-2-2.vue')}
                ]
            },
            {path: 'level_2_3', name: 'level_2_3', icon: 'md-funnel', title: '二级-3', component: () => import('@/views/multilevel/level-2-3.vue')}
        ]
    },
    {
        path: '/argu', name: 'argu', hideInMenu: true, component: Main,
        children: [
            {path: 'params/:id', name: 'params', icon: 'md-flower', title: route => `{{ params }}-${route.params.id}`, notCache: true, beforeCloseName: 'before_close_normal', component: () => import('@/views/argu-page/params.vue')},
            {path: 'query', name: 'query', icon: 'md-flower', title: route => `{{ query }}-${route.query.id}`, notCache: true, component: () => import('@/views/argu-page/query.vue')}
        ]
    },
    {path: '/401', name: 'error_401', hideInMenu: true, component: () => import('@/views/error-page/401.vue')},
    {path: '/500', name: 'error_500', hideInMenu: true, component: () => import('@/views/error-page/500.vue')},
    {path: '*', name: 'error_404', hideInMenu: true, component: () => import('@/views/error-page/404.vue')}
     */
]
