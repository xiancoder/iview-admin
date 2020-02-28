// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'expV2', title: '经验集 V2', icon: 'md-menu',
    children: [
        {
            path: 'exp00', title: '卷零零', icon: 'md-camera',
            children: [
                {power: 'expv2-12345', path: '001weixingzhreadme', title: 'WX公众号开发必读'},
                {power: 'expv2-12345', path: '002eslint', title: 'EsLint 校验规则'},
                {power: 'expv2-12345', path: '003weixingzhkaifa', title: 'WX公众号简单流程'},
                {power: 'expv2-12345', path: '003weixinxcxlanya', title: 'WX小程序与蓝牙'},
                {power: 'expv2-12345', path: '006jsx', title: 'Jsx 写法尝试'}
            ]
        }, {
            path: 'exp01', title: '卷零壹', icon: 'md-camera',
            children: [
                {power: 'expv2-12345', path: '010mockData', title: '假数据mock专家'}
            ]
        }, {
            path: 'exp02', title: '卷零贰', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-12345', path: '021route', title: '路由跳转各种尝试'},
                {power: 'expv2-12345', path: '021route@add', title: '路由跳转添加', hideMenu: true},
                {power: 'expv2-12345', path: '022extends', title: 'VUE组件间的继承'},
                {power: 'expv2-12345', path: '023from', title: '表单基本样式'},
                {power: 'expv2-12345', path: '026iviewDefault', title: 'Iview 控件默认配置'},
                {power: 'expv2-12345', path: '027filter', title: '过滤器收集整理'}
            ]
        }, {
            path: 'exp03', title: '卷零叁', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-12345', path: '031textAnimate', title: '文本动画'},
                {power: 'expv2-12345', path: '032lizituan', title: 'canvas粒子图案效果'},
                {power: 'expv2-12345', path: '034postmessage', title: 'postMessage详解'},
                {power: 'expv2-12345', path: '035qqcookie', title: 'QQ cookie 偶遇'},
                {power: 'expv2-12345', path: '036indexDB', title: 'indexDB 数据库简介'},
                {power: 'expv2-12345', path: '036indexDBTry', title: 'indexDB 数据库代码'},
                {power: 'expv2-12345', path: '039caothis', title: '箭头函数方法this坑'}
            ]
        }, {
            path: 'exp04', title: '卷零肆', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-12345', path: '040meta', title: 'Meta 标签详解'},
                {power: 'expv2-12345', path: '043ibutton', title: 'IviewButton'},
                {power: 'expv2-12345', path: '043iselect', title: 'IviewSelect'},
                {power: 'expv2-12345', path: '043iinput', title: 'IviewInput'},
                {power: 'expv2-12345', path: '043idatepacker', title: 'IviewDatepacker'},
                {power: 'expv2-12345', path: '043iradio', title: 'IviewRadio'},
                {power: 'expv2-12345', path: '043icheckbox', title: 'IviewCheckbox'},
                {power: 'expv2-12345', path: '043iswitch', title: 'IviewSwitch'},
                {power: 'expv2-12345', path: '043itag', title: 'IviewTag'},
                {power: 'expv2-12345', path: '043imodal', title: 'IviewModal'},
                {power: 'expv2-12345', path: '043iicon', title: 'IviewIcon'},
                {power: 'expv2-12345', path: '043iavatar', title: 'IviewAvatar'},
                {power: 'expv2-12345', path: '043idivider', title: 'IviewDivider'},
                {power: 'expv2-12345', path: '043icell', title: 'IviewCell'},
                {power: 'expv2-12345', path: '043ialert', title: 'IviewAlert'},
                {power: 'expv2-12345', path: '043inotice', title: 'IviewNotice'},
                {power: 'expv2-12345', path: '043igrid', title: 'IviewGrid 和所有'},
                {power: 'expv2-12345', path: '043isearchInput', title: 'IviewAutoComplete'},
                {power: 'expv2-12345', path: '043ipop', title: 'IviewTooltip 提示'},
                {power: 'expv2-12345', path: '043ipage', title: 'IviewPage'}
            ]
        }, {
            path: 'exp05', title: '卷零伍', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-12345', path: '057history', title: '路由历史记录'},
                {power: 'expv2-12345', path: '057history@1', title: '路由历史记录1', hideMenu: true},
                {power: 'expv2-12345', path: '057history@2', title: '路由历史记录2', hideMenu: true},
                {power: 'expv2-12345', path: '057history@3', title: '路由历史记录3', hideMenu: true}
            ]
        }, {
            path: 'exp06', title: '卷零陆', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-67890', path: '060newtabopen', title: '新页面打开'},
                {power: 'expv2-67890', path: '062fanyinhao', title: '反引号推广'},
                {power: 'expv2-67890', path: '063flexbox', title: 'Flex 布局基础'},
                {power: 'expv2-67890', path: '064flexlayout', title: 'Flex 深层应用'},
                {power: 'expv2-67890', path: '065gridbox', title: 'Grid 布局基础'},
                {power: 'expv2-67890', path: '068kengopacity', title: 'opacity 的坑'},
                {power: 'expv2-67890', path: '069kengfloat', title: 'float 的坑'}
            ]
        }, {
            path: 'exp07', title: '卷零柒', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-67890', path: '070csszindex', title: 'z-index 的坑'},
                {power: 'expv2-67890', path: '071colgroup', title: '表格列属性'},
                {power: 'expv2-67890', path: '072uglifyjs', title: 'uglifyjs 压缩混淆'},
                {power: 'expv2-67890', path: '073typeError', title: '弱类型之坑'},
                {power: 'expv2-67890', path: '075devtool', title: '开发者工具介绍'},
                {power: 'expv2-67890', path: '077refer', title: '历史 referer 操作'},
                {power: 'expv2-67890', path: '078void0bug', title: '空白void(0)跳转bug'}
            ]
        }, {
            path: 'exp08', title: '卷零捌', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-67890', path: '082download', title: 'JS  控制下载文档'},
                {power: 'expv2-67890', path: '084public', title: '请求 public 内容'},
                {power: 'expv2-67890', path: '085$set', title: 'vue $set 的用法'},
                {power: 'expv2-67890', path: '086von', title: 'vue v-on 深挖'},
                {power: 'expv2-67890', path: '087watch', title: 'vue watch 深挖'},
                {power: 'expv2-67890', path: '088computed', title: 'vue computed 深挖'},
                {power: 'expv2-67890', path: '089vfor', title: 'vue v-for 循环'}
            ]
        }, {
            path: 'exp09', title: '卷零玖', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-67890', path: '090keepalive', title: 'keep-alive'},
                {power: 'expv2-67890', path: '090keepalive@add', title: 'keep-alive 缓存页', hideMenu: true},
                {power: 'expv2-67890', path: '091textcss', title: '文本样式'},
                {power: 'expv2-67890', path: '091ddd', title: '换行/省略号'},
                {power: 'expv2-67890', path: '091mouse', title: '鼠标样式'},
                {power: 'expv2-67890', path: '091xiewen', title: '斜纹样式'},
                {power: 'expv2-67890', path: '091shadow', title: '阴影样式'},
                {power: 'expv2-67890', path: '091sidai', title: '丝带样式'},
                {power: 'expv2-67890', path: '091child', title: 'CSS选择器'},
                {power: 'expv2-67890', path: '091calc', title: 'CSS计算'},
                {power: 'expv2-67890', path: '092waining', title: '警告内容样式'},
                {power: 'expv2-67890', path: '095qqimg', title: 'qq头像排列'},
                {power: 'expv2-67890', path: '099css3sanjiao', title: 'css3 绘制三角形'},
                {power: 'expv2-67890', path: '099css3xingzhuang', title: 'css3 绘制各种形状'}
            ]
        }, {
            path: 'exp10', title: '卷拾', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-67890', path: '100autofontsize', title: '自动字体大小'},
                {power: 'expv2-67890', path: '102watchls', title: 'ls/tab 事件广播'},
                {power: 'expv2-67890', path: '102watchls2', title: 'ls/tab 监听'},
                {power: 'expv2-67890', path: '103tabblur', title: '浏览器标签 blur'},
                {power: 'expv2-67890', path: '105loadingcss', title: 'loading CSS'}
            ]
        }, {
            path: 'exp11', title: '卷拾壹', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-22345', path: '114fileDown', title: '文件下载进度条'},
                {power: 'expv2-22345', path: '115ajaxcache', title: '异步请求缓存'},
                {power: 'expv2-22345', path: '116mount', title: '钩子函数流程'},
                {power: 'expv2-22345', path: '118state', title: '状态的触发/监听'}
            ]
        }, {
            path: 'exp12', title: '卷拾贰', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-22345', path: '123gujia', title: '占位符骨架屏'},
                {power: 'expv2-22345', path: '127enterLeave', title: '路由进入退出钩子'},
                {power: 'expv2-22345', path: '129pasteImg', title: '粘贴图片'}
            ]
        }, {
            path: 'exp13', title: '卷拾叁', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-22345', path: '132ref', title: '$ref讲解'},
                {power: 'expv2-22345', path: '134font', title: '不可见,url,AscII字符'},
                {power: 'expv2-22345', path: '134fontAwesome', title: 'Font Awesome'},
                {power: 'expv2-22345', path: '134microsoftyahei', title: '微软雅黑字体版权'},
                {power: 'expv2-22345', path: '134freefont', title: '各种字体展示'},
                {power: 'expv2-22345', path: '135doutu', title: '斗图神奇神器'},
                {power: 'expv2-22345', path: '138globalclick', title: '全局相应点击'}
            ]
        }, {
            path: 'exp14', title: '卷拾肆', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-22345', path: '142vhtml', title: 'v-html 测危险代码'},
                {power: 'expv2-22345', path: '143transform', title: 'transform 形变'},
                {power: 'expv2-22345', path: '145urlParam', title: '页面传参详解'},
                {power: 'expv2-22345', path: '146copyTxt', title: '复制粘贴文本'},
                {power: 'expv2-22345', path: '148customFrom', title: '组件内外表单校验'},
                {power: 'expv2-22345', path: '149dynamicClick', title: '动态绑定事件'}
            ]
        }, {
            path: 'exp15', title: '卷拾伍', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-22345', path: '150jscando', title: 'Js权限能做到什么'},
                {power: 'expv2-22345', path: '154deeplink', title: '深链接的深入研究'},
                {power: 'expv2-22345', path: '155border', title: 'border 边框样式列举'},
                {power: 'expv2-22345', path: '156img404', title: '图片404补偿'},
                {power: 'expv2-22345', path: '158vshowbug', title: 'v-show 有 bug'}
            ]
        }, {
            path: 'exp16', title: '卷拾陆', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-27890', path: '162debounce', title: '防抖节流测试'},
                {power: 'expv2-27890', path: '162autoSave', title: '表单自动保存(节流)'},
                {power: 'expv2-27890', path: '168component', title: '组件编写'},
                {power: 'expv2-27890', path: '169directive', title: '指令编写'}
            ]
        }, {
            path: 'exp17', title: '卷拾柒', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-27890', path: '172rewriteRoutePush', title: '复写路由 push 方法'},
                {power: 'expv2-27890', path: '173notification', title: '桌面通知简单API'},
                {power: 'expv2-27890', path: '174console', title: 'Console 详解'},
                {power: 'expv2-27890', path: '176arguments', title: 'argu 参数转换'},
                {power: 'expv2-27890', path: '177wenhao', title: '登录两次bug'},
                {power: 'expv2-27890', path: '178editTable', title: '表格可编辑可折叠'},
                {power: 'expv2-27890', path: '179excelop', title: 'Excel 辅助操作'},
                {power: 'expv2-27890', path: '179excelregiest', title: 'Excel 辅助注册'}
            ]
        }, {
            path: 'exp18', title: '卷拾捌', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-27890', path: '181errorList', title: '浏览器错误信息'},
                {power: 'expv2-27890', path: '182h5tag', title: 'H5 各种标签'},
                {power: 'expv2-27890', path: '183jsAudio', title: 'Js 播放声音'},
                {power: 'expv2-27890', path: '184qrcode', title: '生成二维码'}
            ]
        }, {
            path: 'exp19', title: '卷拾玖', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-27890', path: '191svg', title: 'svg收录'},
                {power: 'expv2-27890', path: '192asciiPic', title: 'ascii 绘图'},
                {power: 'expv2-27890', path: '193flag', title: '所有国旗'},
                {power: 'expv2-27890', path: '194placeholdit', title: 'placeholdit'},
                {power: 'expv2-27890', path: '195todo', title: 'TODO'},
                {power: 'expv2-27890', path: '196chart', title: '聊天面板'}
                {power: 'expv2-27890', path: '196QA', title: 'VUE 面试题精华'}
            ]
        }, {
            path: 'exp20', title: '卷贰拾', icon: 'md-game-controller-b',
            children: [
                {power: 'expv2-27890', path: '200newBee', title: '收录200知识点'}
            ]
        }
    ]
})
