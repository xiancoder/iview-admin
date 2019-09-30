import Main from '@V/main'
import parentView from '@C/parent-view'
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
export const specialRouterList = ['error401', 'error404', 'error500', 'login', 'locking']
// 路由视图文件名必须和路由名字路径一致 方便查找定位
export const routerList = [
    {path: '/', redirect: '/home/index'}, // 默认路由视图
    makeOneLevelRoute({ path: 'login', title: '登录' }),
    makeOneLevelRoute({ path: 'locking', title: '锁屏' }),
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
            {power: '0000', path: '034eslintignore', title: 'Eslint管理'},
            {power: '0000', path: '024tools', title: '自定义 $tool'},
            {power: '0000', path: '025rule', title: '本框架开发规范'},
            {power: '0000', path: '026iviewDefault', title: 'iview改变默认配置'},
            {power: '0000', path: '027filter', title: '过滤器整理'},
            {power: '0000', path: '028pluginLike', title: '插件比喻'},
            {power: '0000', path: '029unitTest', title: '单元测试'},
            {power: '0000', path: '030vueVision', title: 'vue几个版本'},
            {power: '0000', path: '031mockjs', title: '玩转假数据'},
            {power: '0000', path: '032api', title: 'api流程梳理'},
            {power: '0000', path: '033exports', title: '混用exports'},
            {power: '0000', path: '035iospic', title: 'iOS图片旋转bug'},
            {power: '1299', path: '100newBee', title: '大牛养成'}
        ]
    }),
    makeTwoLevelRoute({
        path: 'task', title: '任务管理', icon: 'logo-buffer',
        children: [
            { power: '0401', path: 'mine', title: '我的任务' },
            { power: '0402', path: 'mine@publish', title: '我发布的任务', hideMenu: true },
            { power: '0402', path: 'mine@conscient', title: '我负责的任务', hideMenu: true },
            { power: '0403', path: 'mine@executive', title: '我执行的任务', hideMenu: true },
            { power: '0404', path: 'mine@besend', title: '抄送我的任务', hideMenu: true },
            { power: '0406', path: 'mine@@info', title: '任务详情', hideMenu: true },
            { power: '0405', path: 'mine@@release', title: '发布任务', hideMenu: true },
            { power: '0407', path: 'mine@@restart', title: '重启任务', hideMenu: true },
            { power: '0401', path: 'subordinate', title: '下属任务' }
        ]
    }),
    makeTwoLevelRoute({
        path: 'order', title: '工单管理', icon: 'md-mail',
        children: [
            { power: '0401', path: 'mine', title: '我的工单' },
            { power: '0402', path: 'mine@sendList', title: '已发工单', hideMenu: true },
            { power: '0402', path: 'mine@receiveList', title: '已收工单', hideMenu: true },
            { power: '0402', path: 'mine@draftsList', title: '草稿箱', hideMenu: true },
            { power: '0402', path: 'mine@endList', title: '已结工单', hideMenu: true },
            { power: '0402', path: 'mine@@info', title: '工单详情', hideMenu: true },
            { power: '0402', path: 'mine@@release', title: '工单发布', hideMenu: true },
            { power: '0401', path: 'subordinate', title: '下属工单' },
            { power: '0402', path: 'subordinate@@info', title: '工单详情', hideMenu: true },
            { power: '0401', path: 'group', title: '组管理' },
            { power: '0402', path: 'group@edit', title: '组添加/编辑', hideMenu: true }
        ]
    }),
    makeTwoLevelRoute({
        path: 'components', title: '组件', icon: 'logo-buffer',
        children: [
            {power: '0000', path: 'cropper', icon: 'md-crop', title: '图片裁剪'},
            {power: '0000', path: 'splitpane', icon: 'md-pause', title: '分割窗口'},
            {power: '0000', path: 'dragdrawer', icon: 'md-list', title: '可拖拽抽屉'},
            {power: '0000', path: 'countto', icon: 'md-trending-up', title: '数字渐变'},
            {power: '0000', path: 'orgtree', icon: 'ios-people', title: '组织结构树'},
            {power: '0000', path: 'treetable', icon: 'md-git-branch', title: '树状表格'},
            {power: '0000', path: 'tables', icon: 'md-grid', title: '多功能表格'},
            {power: '0000', path: 'markdown', icon: 'logo-markdown', title: 'Markdown编辑器'},
            {power: '0000', path: 'editor', icon: 'ios-create', title: '富文本编辑器'},
            {power: '0000', path: 'treeselect', icon: 'md-arrow-dropdown-circle', title: '树状下拉选择器'},
            {power: '0000', path: 'draglist', icon: 'ios-infinite', title: '拖拽列表'},
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
    },
    /*
    {
        path: '/i18n', name: 'i18n', hideInBread: true, component: Main,
        children: [
            {path: 'i18n_', name: 'i18n_', icon: 'md-planet', title: 'i18n - {{ i18n_page }}', component: () => import('@V/i18n/i18n-page.vue')}
        ]
    },
     */
    makeOneLevelRoute({ path: 'error404', title: '页面不存在' }),
    makeOneLevelRoute({ path: 'error401', title: '权限不足' }),
    makeOneLevelRoute({ path: 'error500', title: '服务端错误' }),
    {path: '/*', redirect: '/error404'} // 默认404视图
]
