import parentView from '@/views/parentView'
import Main from '@V/main'
import MarkDown from '@V/markDown'
import { makeMultiLevelRoute, makeTwoLevelRoute, makeOneLevelRoute } from './util'

export const homePage = 'home_index' // 首页

export const specialPowerList = [homePage, 'error403', 'error404', 'error500'] // 必须登录的不走鉴权的核心页面

export const loginPowerList = ['login', 'regiest', 'ccode', 'phone'] // 未登录时候可以访问的页面

export const lockPowerList = ['locking'] // 锁屏时候可以访问的页面

// 路由视图文件名必须和路由名字路径一致 方便查找定位
export const routerList = [
    {path: '/', redirect: '/home/index'}, // 默认路由视图
    makeOneLevelRoute({ path: 'login', title: '登录' }),
    makeOneLevelRoute({ path: 'regiest', title: '注册' }),
    makeOneLevelRoute({ path: 'ccode', title: '二次验证' }),
    makeOneLevelRoute({ path: 'phone', title: '移动端' }),
    makeOneLevelRoute({ path: 'locking', title: '锁屏' }),
    makeTwoLevelRoute({
        path: 'home', title: '首页', icon: 'md-globe',
        children: [
            {power: '0000', path: 'index', title: '首页'},
            {power: '0000', path: 'message', icon: 'md-notifications', title: '消息中心'},
            {power: '0000', path: 'errorlogger', icon: 'md-bug', title: '错误收集测试'},
            {power: '0000', path: 'error404', icon: 'md-boat', title: '页面不存在'},
            {power: '0000', path: 'error403', icon: 'md-bonfire', title: '权限不足'},
            {power: '0000', path: 'error500', icon: 'md-cafe', title: '服务端错误'}
        ]
    }),

    makeMultiLevelRoute({
        path: 'exp', title: '经验集', icon: 'md-menu',
        children: [
            {
                path: 'exp1', title: '卷壹', icon: 'md-camera',
                children: [
                    {power: '0000', path: '001bebal', title: 'Bebal 相关配置'},
                    {power: '0000', path: '002eslint', title: 'EsLint 校验规则'},
                    {power: '0000', path: '004cname', title: '组件 name 属性'},
                    {power: '0000', path: '003eslintignore', title: 'Eslint 指定校验目录'},
                    {power: '0000', path: '005oldTable', title: '原生表格 lodash尝试'},
                    {power: '0000', path: '006editITable', title: '编辑表格'},
                    {power: '0000', path: '008tableBatch', title: '表格-批量操作'},
                    {power: '0000', path: '008tableNoData', title: '表格-无数据'},
                    {power: '0000', path: '008tableObj', title: '表格-超集中(废弃)'},
                    {power: '0000', path: '009tableMixin', title: '表格-mixin(废弃)'},
                    {power: '0000', path: '010mockData', title: '假数据mock专家'},
                    {power: '0000', path: '011tableTools', title: '表格-搜索项规范'},
                    {power: '0000', path: '012showMsg', title: '提示信息框规范'},
                    {power: '0000', path: '013tableSum', title: '表格-总计框规范'},
                    {power: '0000', path: '014tableFrom', title: '表格-依附表单弹框'},
                    {power: '0000', path: '014from1', title: '表单', hideMenu: true}
                ]
            }, {
                path: 'exp2', title: '卷贰', icon: 'md-cart',
                children: [
                    {power: '0000', path: '021route', title: '路由跳转各种尝试'},
                    {power: '0000', path: '021route@add', title: '路由跳转添加', hideMenu: true},
                    {power: '0000', path: '022extends', title: 'VUE组件间的继承'},
                    {power: '0000', path: '023from', title: '表单基本样式'},
                    {power: '0000', path: '024validate', title: '表单所有校验方式'},
                    {power: '0000', path: '025vvvali', title: '表单复杂校验方式'},
                    {power: '0000', path: '026iviewDefault', title: 'Iview 控件默认配置'},
                    {power: '0000', path: '027filter', title: '过滤器收集整理'},
                    {power: '0000', path: '028pluginLike', title: '插件比喻'},
                    {power: '0000', path: '029iospic', title: 'iOS图片旋转bug'},
                    {power: '0000', path: '030vueVision', title: 'VUE竟然好几个版本'},
                    {power: '0000', path: '031mail', title: 'JS发邮件权限'},
                    {power: '0000', path: '032api', title: '$api模块说明 v1'},
                    {power: '0000', path: '033exports', title: 'exports 简单说明'},
                    {power: '0000', path: '034tools', title: '超公共 $tool 模块'},
                    {power: '0000', path: '035unitTest', title: '单元测试入门'},
                    {power: '0000', path: '036unitTest', title: '单元测试路由'},
                    {power: '0000', path: '037unitTest', title: '单元测试 Axios'},
                    {power: '0000', path: '038unitTest', title: '表单单元流程'},
                    {power: '0000', path: '039unitTest', title: 'Jest和方法this坑'},
                    {power: '0000', path: '040meta', title: 'Meta 标签详解'}
                ]
            }, {
                path: 'exp3', title: '卷叁', icon: 'md-chatbubbles',
                children: [
                    {power: '0000', path: '041zhihu3layout', title: '三大框架简比'},
                    {power: '0000', path: '042jsx', title: 'JSX 语法详解'},
                    {power: '0000', path: '043ibutton', title: 'IviewButton'},
                    {power: '0000', path: '044iselect', title: 'IviewSelect'},
                    {power: '0000', path: '045iinput', title: 'IviewInput'},
                    {power: '0000', path: '046idatepk', title: 'IviewDatepacker'},
                    {power: '0000', path: '047iradio', title: 'IviewRadio'},
                    {power: '0000', path: '047icheckbox', title: 'IviewCheckbox'},
                    {power: '0000', path: '047iswitch', title: 'IviewSwitch'},
                    {power: '0000', path: '048itag', title: 'IviewTag'},
                    {power: '0000', path: '049imodal', title: 'IviewModal'},
                    {power: '0000', path: '050iicon', title: 'IviewIcon'},
                    {power: '0000', path: '051iavatar', title: 'IviewAvatar'},
                    {power: '0000', path: '052idivider', title: 'IviewDivider'},
                    {power: '0000', path: '053icell', title: 'IviewCell'},
                    {power: '0000', path: '054ialert', title: 'IviewAlert'},
                    {power: '0000', path: '055inotice', title: 'IviewNotice'},
                    {power: '0000', path: '056igrid', title: 'iviewGrid 和所有'},
                    {power: '0000', path: '057history', title: '路由历史记录'},
                    {power: '0000', path: '057history@1', title: '路由历史记录1', hideMenu: true},
                    {power: '0000', path: '057history@2', title: '路由历史记录2', hideMenu: true},
                    {power: '0000', path: '057history@3', title: '路由历史记录3', hideMenu: true},
                    {power: '0000', path: '058routerpic', title: '路由浏览图片'},
                    {power: '0000', path: '059debounce', title: '防抖节流测试'},
                    {power: '0000', path: '060newtabopen', title: '新页面打开'}
                ]
            }, {
                path: 'exp4', title: '卷肆', icon: 'md-construct',
                children: [
                    {power: '0000', path: '061whilePromise', title: 'Promise 挂起'},
                    {power: '0000', path: '062fanyinhao', title: '反引号推广'},
                    {power: '0000', path: '063flexbox', title: 'Flex 布局基础'},
                    {power: '0000', path: '064flexlayout', title: 'Flex 深层应用'},
                    {power: '0000', path: '065gridbox', title: 'Grid 布局基础'},
                    {power: '0000', path: '066redux', title: 'Redux 基础'},
                    {power: '0000', path: '067promiseEs6', title: 'Promise 基础'},
                    {power: '0000', path: '068kengopacity', title: 'opacity 的坑'},
                    {power: '0000', path: '069kengfloat', title: 'float 的坑'},
                    {power: '0000', path: '070csszindex', title: 'z-index 的坑'},
                    {power: '0000', path: '071colgroup', title: '表格列属性'},
                    {power: '0000', path: '072uglifyjs', title: 'uglifyjs 拯救旧项目'},
                    {power: '0000', path: '073typeError', title: '弱类型之坑'},
                    {power: '0000', path: '074webpack', title: 'webpack 检查主机'},
                    {power: '0000', path: '075devtool', title: '开发者工具'},
                    {power: '0000', path: '076single', title: '单点登录概述'},
                    {power: '0000', path: '077refer', title: '历史 referer 操作'},
                    {power: '0000', path: '078void0bug', title: 'void(0) 跳转bug'},
                    {power: '0000', path: '079microsoftyahei', title: '微软雅黑版权'},
                    {power: '0000', path: '080yin', title: '名词缩写发音'}
                ]
            }, {
                path: 'exp5', title: '卷伍', icon: 'md-color-fill',
                children: [
                    {power: '0000', path: '081templete', title: '标签 templete'},
                    {power: '0000', path: '082download', title: 'JS  控制下载文档'},
                    {power: '0000', path: '083innerDB', title: 'innerDB 数据库'},
                    {power: '0000', path: '084public', title: '请求 public 内容'},
                    {power: '0000', path: '085$set', title: 'vue $set 的用法'},
                    {power: '0000', path: '086von', title: 'vue v-on 深挖'},
                    {power: '0000', path: '087watch', title: 'vue watch 深挖'},
                    {power: '0000', path: '088computed', title: 'vue computed 深挖'},
                    {power: '0000', path: '089vfor', title: 'vue v-for 循环'},
                    {power: '0000', path: '090keepalive', title: 'keep-alive', keepAlive: true},
                    {power: '0000', path: '090keepalive@add', title: 'keep-alive 缓存页', hideMenu: true},
                    {power: '0000', path: '091textcss', title: '文本样式'},
                    {power: '0000', path: '092waining', title: '警告内容样式'},
                    {power: '0000', path: '093ddd', title: '换行/省略号'},
                    {power: '0000', path: '094mouse', title: '鼠标样式'},
                    {power: '0000', path: '095qqimg', title: 'qq头像排列'},
                    {power: '0000', path: '096xiewen', title: '斜纹样式'},
                    {power: '0000', path: '097shadow', title: '阴影样式'},
                    {power: '0000', path: '098sidai', title: '丝带样式'},
                    {power: '0000', path: '099css3xingzhuang', title: 'css3 绘制各种形状'},
                    {power: '0000', path: '100autofontsize', title: '自动字体大小'}
                ]
            }, {
                path: 'exp6', title: '卷陆', icon: 'md-easel',
                children: [
                    {power: '0000', path: '101looknodown', title: '评审看不下去代码'},
                    {power: '0000', path: '102watchls', title: 'ls的监听和事件广播'},
                    {power: '0000', path: '103tabblur', title: '浏览器标签 blur'},
                    {power: '0000', path: '104echart', title: 'echart'},
                    {power: '0000', path: '105loadingcss', title: 'loading CSS'},
                    {power: '0000', path: '106yiyongxing', title: '易用性描述'},
                    {power: '0000', path: '107kaifakunjing', title: '需求开发|困境'},
                    {power: '0000', path: '108axios', title: 'Axios详解'},
                    {power: '0000', path: '111name', title: '命名法'},
                    {power: '0000', path: '112serverUpload', title: 'node 文件上传'},
                    {power: '0000', path: '113serverimg', title: 'node 静态资源'},
                    {power: '0000', path: '114fileDown', title: '文件下载进度条'},
                    {power: '0000', path: '115ajaxcache', title: '异步请求缓存'},
                    {power: '0000', path: '116mount', title: '钩子函数流程'},
                    {power: '0000', path: '117rule', title: '规范想法'},
                    {power: '0000', path: '118state', title: '状态的触发/监听'},
                    {power: '0000', path: '119cmd', title: 'Node 执行 CMD'},
                    {power: '0000', path: '120pginfo', title: 'Node 批量更新版本'}
                ]
            }, {
                path: 'exp7', title: '卷柒', icon: 'md-flame',
                children: [
                    {power: '0000', path: '121youku', title: '优酷视频'},
                    {power: '0000', path: '122mimang', title: '略迷茫'},
                    {power: '0000', path: '123gujia', title: '占位符骨架屏'},
                    {power: '0000', path: '124mulLevelTable', title: '尝试多层表格'},
                    {power: '0000', path: '125vuehtml5editor', title: '富文本 html5editor'},
                    {power: '0000', path: '126vviewer', title: '小图大图预览插件'},
                    {power: '0000', path: '127enterLeave', title: '路由进入退出钩子'},
                    {power: '0000', path: '128ipage', title: 'IviewPage'},
                    {power: '0000', path: '129pasteImg', title: '粘贴图片'},
                    {power: '0000', path: '130jslist', title: '好多技术栈'},
                    {power: '0000', path: '131package', title: '自定义脚本命令'},
                    {power: '0000', path: '132ref', title: '$ref讲解'},
                    {power: '0000', path: '133codetip', title: '编码建议'},
                    {power: '0000', path: '134somefont', title: '不可见,url,AscII字符'},
                    {power: '0000', path: '135doutu', title: '斗图神奇神器'},
                    {power: '0000', path: '136vuex', title: 'vuex 讲解'},
                    {power: '0000', path: '137vue', title: 'vue 公共方法'},
                    {power: '0000', path: '138globalclick', title: '全局相应点击'},
                    {power: '0000', path: '139git', title: '公司GIT管理流程'},
                    {power: '0000', path: '140tabs', title: '兄弟页面统一tabs'}
                ]
            }, {
                path: 'exp8', title: '卷捌', icon: 'md-game-controller-b',
                children: [
                    {power: '0000', path: '141dspwhat', title: 'DSP 项目产品思路'},
                    {power: '0000', path: '142vhtml', title: 'v-html 危险'},
                    {power: '0000', path: '143transform', title: 'transform 形变'},
                    {power: '0000', path: '144searchInput', title: 'IviewAutoComplete'},
                    {power: '0000', path: '145fromparam', title: '表单传参方式'},
                    {power: '0000', path: '146copyTxt', title: '复制粘贴文本'},
                    {power: '0000', path: '147goodModal', title: 'IviewModal 弹框'},
                    {power: '0000', path: '148customFrom', title: '组件内外表单校验'},
                    {power: '0000', path: '149dynamicClick', title: '动态绑定事件'},
                    {power: '0000', path: '150jscando', title: 'Js 权限能做到什么'},
                    {power: '0000', path: '151iframe', title: 'iframe 父子页面'},
                    {power: '0000', path: '152websocket', title: 'WebSocket 协议'},
                    {power: '0000', path: '153Ipop', title: 'IviewTooltip 提示'},
                    {power: '0000', path: '154deeplink', title: '深链接的深入研究'},
                    {power: '0000', path: '155border', title: 'border 边框样式列举'},
                    {power: '0000', path: '156img404', title: '图片404补偿(无效)'},
                    {power: '0000', path: '157formData', title: 'FormData'},
                    {power: '0000', path: '158vshowbug', title: 'v-show 有 bug'},
                    {power: '0000', path: '159fontawesome', title: 'font awesome'},
                    {power: '0000', path: '160wordCss', title: '仿 Word 的 Css'}
                ]
            }, {
                path: 'exp9', title: '卷玖', icon: 'md-game-controller-b',
                children: [
                    {power: '0000', path: '161creditSvgCss', title: 'SVG 信用卡样式'},
                    {power: '0000', path: '162autoSave', title: '表单自动保存 (未弄)'},
                    {power: '0000', path: '163svg', title: 'SVG symbol模版'},
                    {power: '0000', path: '164socket', title: 'Socket 研究记录'},
                    {power: '0000', path: '165cnzz', title: 'Cnzz 研究记录'},
                    {power: '0000', path: '166loadrule', title: 'Vue 加载顺序'},
                    {power: '0000', path: '167version', title: '版本发布规则'},
                    {power: '0000', path: '168component', title: '组件编写'},
                    {power: '0000', path: '169directive', title: '指令编写'},
                    {power: '0000', path: '170icard', title: 'IviewCard'},
                    {power: '0000', path: '171contact', title: '联系人卡片 Css'},
                    {power: '0000', path: '172rewriteRoutePush', title: '复写路由 Route'},
                    {power: '0000', path: '173notification', title: '桌面通知简单API'},
                    {power: '0000', path: '200newBee', title: '收录200知识点'}
                ]
            }
        ]
    }),

    makeMultiLevelRoute({
        path: 'expV2', title: '经验集', icon: 'md-menu',
        children: [
            {
                path: 'exp01', title: '卷壹', icon: 'md-camera',
                children: [
                    {power: '0000', path: '001bebal', title: 'Bebal 相关配置'},
                    {power: '0000', path: '002eslint', title: 'EsLint 校验规则'}
                ]
            }, {
                path: 'exp02', title: '卷贰', icon: 'md-cart',
                children: [
                    {power: '0000', path: '200newBee', title: '收录200知识点'}
                ]
            }
        ]
    }),

    makeMultiLevelRoute({
        path: 'workV2', title: '工作集', icon: 'md-menu',
        children: [
            {
                path: 'work01', title: '卷壹', icon: 'md-heart',
                children: [
                    {power: '0000', path: '201daterange', title: '日期范围优化'},
                    {power: '0000', path: '202api', title: 'api接口承上启下'},
                    {power: '0000', path: '203fromdifto', title: '来源提交格式不同'},
                    {power: '0000', path: '204trytransfer', title: '尝试多搜索+穿梭框'},
                    {power: '0000', path: '205tableV1', title: '表格规范v1模版'},
                    {power: '0000', path: '205tableMaxHeight', title: '表格v1高度限定'},
                    {power: '0000', path: '207validateInput', title: '表单v1输入框'},
                    {power: '0000', path: '207validateNumber', title: '表单v1数字框'},
                    {power: '0000', path: '207validateFile', title: '表单v1校验上传框'},
                    {power: '0000', path: '207validateOther', title: '表单v1其他框'},
                    {power: '0000', path: '207validatePwd', title: '表单v1密码框'},
                    {power: '0000', path: '207validateRadio', title: '表单v1单选复选框'},
                    {power: '0000', path: '207validateRich', title: '表单v1富文本框'},
                    {power: '0000', path: '207validateSelect', title: '表单v1下拉框'},
                    {power: '0000', path: '207validateDate', title: '表单v1日期框'}
                ]
            },
            {
                path: 'work02', title: '卷贰', icon: 'md-heart',
                children: [
                    {power: '0000', path: '300brove', title: '收集300个'}
                ]
            }
        ]
    }),

    makeTwoLevelRoute({
        path: 'tool', title: '趁手工具第三代', icon: 'md-images',
        children: [
            {power: '0000', path: 'str2bs64', title: '文字转bs64'},
            {power: '0000', path: 'img2bs64', title: '图片转bs64'},
            {power: '0000', path: 'unicode', title: 'unicode转码'},
            {power: '0000', path: 'md5', title: 'md5转码'},
            {power: '0000', path: 'url', title: 'url转码'},
            {power: '0000', path: 'repeat', title: '字符重复'},
            {power: '0000', path: 'norepeat', title: '去重'},
            {power: '0000', path: 'strformat', title: '文本格式化'}
        ]
    }),

    makeMultiLevelRoute({
        path: 'dsp', title: 'DSP开发', icon: 'md-menu',
        children: [
            {
                path: 'home', title: 'DSP首页', icon: 'md-globe',
                children: [
                    {power: '0000', path: 'index', title: 'DSP首页'}
                ]
            }, {
                path: 'finance', title: 'DSP财务账单', icon: 'md-contacts',
                children: [
                    { power: '0000', path: 'list', title: 'DSP财务账单' },
                    { power: '0000', path: 'list@recharge', title: 'DSP充值记录', hideMenu: true },
                    { power: '0000', path: 'list@cost', title: 'DSP消耗记录', hideMenu: true },
                    { power: '0000', path: 'list@account', title: 'DSP账户余额查询', hideMenu: true }
                ]
            }, {
                path: 'charge', title: 'DSP收款账户', icon: 'md-contacts',
                children: [
                    { power: '0000', path: 'chargeInfo', title: 'DSP收款账户' }
                ]
            }, {
                path: 'cost', title: '消耗管理', icon: 'md-contacts',
                children: [
                    { power: '0000', path: 'costList', title: '消耗管理' }
                ]
            }
        ]
    }),

    makeMultiLevelRoute({
        path: 'oa', title: 'OA开发', icon: 'md-menu',
        children: [
            {
                path: 'employee', title: '人事管理', icon: 'md-contacts',
                children: [
                    { power: '0000', path: 'branchStaff', title: '部门与人员' },
                    { power: '0000', path: 'branchStaff@positions', title: '职位管理', hideMenu: true },
                    { power: '0000', path: 'branchStaff@employeeInfo', title: '员工信息', hideMenu: true },
                    { power: '0000', path: 'branchStaff@employeeEdit', title: '编辑员工信息', hideMenu: true },
                    { power: '0000', path: 'workCalendar', title: '工作日历' },
                    { power: '0000', path: 'approvalConfig', title: '审批配置' },
                    { power: '0000', path: 'approvalConfig@processAdd', title: '添加流程', hideMenu: true },
                    { power: '0000', path: 'approvalConfig@overtimeAdd', title: '添加流程', hideMenu: true },
                    { power: '0000', path: 'attendance', title: '考勤管理' },
                    { power: '0000', path: 'attendance@detail', title: '明细表', hideMenu: true },
                    { power: '0000', path: 'attendance@processAdd', title: '添加流程', hideMenu: true },
                    { power: '0000', path: 'attendance@remain', title: '剩余假期', hideMenu: true },
                    { power: '0000', path: 'attendance@vacation', title: '请假', hideMenu: true },
                    { power: '0000', path: 'attendance@duty', title: '值班', hideMenu: true },
                    { power: '0000', path: 'attendance@overtime', title: '加班', hideMenu: true },
                    { power: '0000', path: 'attendance@noCheck', title: '未打卡', hideMenu: true },
                    { power: '0000', path: 'attendance@outwork', title: '外出', hideMenu: true },
                    { power: '0000', path: 'attendance@busTrip', title: '出差', hideMenu: true },
                    { power: '9999', path: 'nopower', title: '无权限测试' },
                    { power: '0000', path: 'cc@edit', title: '抄送人添加/编辑', hideMenu: true },
                    { power: '0000', path: 'cc@list', title: '抄送人配置', hideMenu: true }
                ]
            }, {
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
            }, {
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
            }
        ]
    }),

    makeTwoLevelRoute({
        path: 'components', title: '组件(未测试)', icon: 'logo-buffer',
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
        path: 'update', title: '数据上传(未测试)', icon: 'md-cloud-upload',
        children: [
            {power: '0000', path: 'updatetable', icon: 'md-arrow-dropdown-circle', title: '上传Csv'},
            {power: '0000', path: 'updatepaste', icon: 'md-trending-up', title: '粘贴表格数据'}
        ]
    }),
    makeTwoLevelRoute({
        path: 'excel', title: 'EXCEL相关(未测试)', icon: 'ios-stats',
        children: [
            {power: '0000', path: 'uploadexcel', icon: 'md-add', title: '导入EXCEL'},
            {power: '0000', path: 'exportexcel', icon: 'md-download', title: '导出EXCEL'}
        ]
    }),
    {
        path: '/multilevel', name: 'multilevel', icon: 'mdmenu', title: '多级菜单', component: Main,
        children: [
            {power: '0000', path: 'level1', name: 'level1', icon: 'mdfunnel', title: '二级1', component: () => import('@V/multilevel/level1.vue')},
            {power: '0000', path: 'level2', name: 'level2', access: ['superadmin'], icon: 'mdfunnel', showAlways: true, title: '二级2',
                component: parentView,
                children: [
                    {power: '0000', path: 'level21', name: 'level21', icon: 'mdfunnel', title: '三级', component: () => import('@V/multilevel/level2/level21.vue')},
                    {power: '0000', path: 'level22', name: 'level22', icon: 'mdfunnel', title: '三级', component: () => import('@V/multilevel/level2/level22.vue')}
                ]
            },
            {path: 'level23', name: 'level3', icon: 'mdfunnel', title: '二级3', component: () => import('@V/multilevel/level3.vue')}
        ]
    },
    {
        path: '/wiki', name: 'wiki', icon: 'md-infinite', title: '其他模式', component: MarkDown,
        children: [
            {power: '0000', path: 'wiki', name: 'wiki', icon: 'md-funnel', title: 'wiki', component: () => import('@V/other/wiki.vue')},
            {power: '0000', path: 'music', name: 'music', icon: 'md-funnel', title: '音乐', component: () => import('@V/other/music.vue')},
            {power: '0000', path: 'ad', name: 'ad', icon: 'md-funnel', title: '广告', component: () => import('@V/other/ad.vue')},
            {power: '0000', path: 'firstPage', name: 'firstPage', icon: 'md-funnel', title: '首页', component: () => import('@V/other/firstPage.vue')},
            {power: '0000', path: 'blog', name: 'blog', icon: 'md-funnel', title: '博客', component: () => import('@V/other/blog.vue')}
        ]
    },
    {
        path: '/i18n', name: 'i18n', title: 'i18n', component: Main,
        children: [
            {path: 'i18n_', name: 'i18n_', icon: 'md-planet', title: 'i18n - {{ i18n_page }}', component: () => import('@V/i18n/i18n-page.vue')}
        ]
    },
    {path: '/*', redirect: '/error404'}, // 默认404视图
    makeOneLevelRoute({ path: 'error404', title: '页面不存在' }),
    makeOneLevelRoute({ path: 'error403', title: '权限不足' }),
    makeOneLevelRoute({ path: 'error500', title: '服务端错误' })
]
