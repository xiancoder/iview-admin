// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'expV2', title: '经验集 V2', icon: 'md-menu',
    children: [
        {
            path: 'exp01', title: '卷壹', icon: 'md-camera',
            children: [
                {power: '0000', path: '002eslint', title: 'EsLint 校验规则'},
                {power: '0000', path: '006jsx', title: 'Jsx 写法尝试'},
                {power: '0000', path: '010mockData', title: '假数据mock专家'},
                {power: '0000', path: '014tableFrom', title: '表格-依附表单弹框'},
                {power: '0000', path: '014tableFrom@from', title: '表单', hideMenu: true}
            ]
        }, {
            path: 'exp02', title: '卷贰', icon: 'md-game-controller-b',
            children: [
                {power: '0000', path: '021route', title: '路由跳转各种尝试'},
                {power: '0000', path: '021route@add', title: '路由跳转添加', hideMenu: true},
                {power: '0000', path: '022extends', title: 'VUE组件间的继承'},
                {power: '0000', path: '023from', title: '表单基本样式'},
                {power: '0000', path: '026iviewDefault', title: 'Iview 控件默认配置'},
                {power: '0000', path: '027filter', title: '过滤器收集整理'},
                {power: '0000', path: '039caothis', title: '箭头函数方法this坑'},
                {power: '0000', path: '040meta', title: 'Meta 标签详解'}
            ]
        }, {
            path: 'exp03', title: '卷叁', icon: 'md-chatbubbles',
            children: [
                {power: '0000', path: '043ibutton', title: 'IviewButton'},
                {power: '0000', path: '043iselect', title: 'IviewSelect'},
                {power: '0000', path: '043iinput', title: 'IviewInput'},
                {power: '0000', path: '043idatepacker', title: 'IviewDatepacker'},
                {power: '0000', path: '043iradio', title: 'IviewRadio'},
                {power: '0000', path: '043icheckbox', title: 'IviewCheckbox'},
                {power: '0000', path: '043iswitch', title: 'IviewSwitch'},
                {power: '0000', path: '043itag', title: 'IviewTag'},
                {power: '0000', path: '043imodal', title: 'IviewModal'},
                {power: '0000', path: '043iicon', title: 'IviewIcon'},
                {power: '0000', path: '043iavatar', title: 'IviewAvatar'},
                {power: '0000', path: '043idivider', title: 'IviewDivider'},
                {power: '0000', path: '043icell', title: 'IviewCell'},
                {power: '0000', path: '043ialert', title: 'IviewAlert'},
                {power: '0000', path: '043inotice', title: 'IviewNotice'},
                {power: '0000', path: '043igrid', title: 'IviewGrid 和所有'},
                {power: '0000', path: '043isearchInput', title: 'IviewAutoComplete'},
                {power: '0000', path: '043ipop', title: 'IviewTooltip 提示'},
                {power: '0000', path: '043ipage', title: 'IviewPage'},
                {power: '0000', path: '057history', title: '路由历史记录'},
                {power: '0000', path: '057history@1', title: '路由历史记录1', hideMenu: true},
                {power: '0000', path: '057history@2', title: '路由历史记录2', hideMenu: true},
                {power: '0000', path: '057history@3', title: '路由历史记录3', hideMenu: true},
                {power: '0000', path: '060newtabopen', title: '新页面打开'}
            ]
        }, {
            path: 'exp04', title: '卷肆', icon: 'md-construct',
            children: [
                {power: '0000', path: '062fanyinhao', title: '反引号推广'},
                {power: '0000', path: '063flexbox', title: 'Flex 布局基础'},
                {power: '0000', path: '064flexlayout', title: 'Flex 深层应用'},
                {power: '0000', path: '065gridbox', title: 'Grid 布局基础'},
                {power: '0000', path: '068kengopacity', title: 'opacity 的坑'},
                {power: '0000', path: '069kengfloat', title: 'float 的坑'},
                {power: '0000', path: '070csszindex', title: 'z-index 的坑'},
                {power: '0000', path: '071colgroup', title: '表格列属性'},
                {power: '0000', path: '072uglifyjs', title: 'uglifyjs 压缩混淆'},
                {power: '0000', path: '073typeError', title: '弱类型之坑'},
                {power: '0000', path: '075devtool', title: '开发者工具介绍'},
                {power: '0000', path: '077refer', title: '历史 referer 操作'},
                {power: '0000', path: '078void0bug', title: '空白void(0)跳转bug'},
                {power: '0000', path: '079microsoftyahei', title: '微软雅黑字体版权'}
            ]
        }, {
            path: 'exp05', title: '卷伍', icon: 'md-color-fill',
            children: [
                {power: '0000', path: '082download', title: 'JS  控制下载文档'},
                {power: '0000', path: '084public', title: '请求 public 内容'},
                {power: '0000', path: '085$set', title: 'vue $set 的用法'},
                {power: '0000', path: '086von', title: 'vue v-on 深挖'},
                {power: '0000', path: '087watch', title: 'vue watch 深挖'},
                {power: '0000', path: '088computed', title: 'vue computed 深挖'},
                {power: '0000', path: '089vfor', title: 'vue v-for 循环'},
                {power: '0000', path: '090keepalive', title: 'keep-alive'},
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
            path: 'exp06', title: '卷陆', icon: 'md-game-controller-b',
            children: [
                {power: '0000', path: '102watchls', title: 'ls的监听和事件广播'},
                {power: '0000', path: '103tabblur', title: '浏览器标签 blur'},
                {power: '0000', path: '105loadingcss', title: 'loading CSS'},
                {power: '0000', path: '114fileDown', title: '文件下载进度条'},
                {power: '0000', path: '115ajaxcache', title: '异步请求缓存'},
                {power: '0000', path: '116mount', title: '钩子函数流程'},
                {power: '0000', path: '118state', title: '状态的触发/监听'}
            ]
        }, {
            path: 'exp07', title: '卷柒', icon: 'md-flame',
            children: [
                {power: '0000', path: '123gujia', title: '占位符骨架屏'},
                {power: '0000', path: '127enterLeave', title: '路由进入退出钩子'},
                {power: '0000', path: '129pasteImg', title: '粘贴图片'},
                {power: '0000', path: '132ref', title: '$ref讲解'},
                {power: '0000', path: '134somefont', title: '不可见,url,AscII字符'},
                {power: '0000', path: '135doutu', title: '斗图神奇神器'},
                {power: '0000', path: '138globalclick', title: '全局相应点击'}
            ]
        }, {
            path: 'exp08', title: '卷捌', icon: 'md-game-controller-b',
            children: [
                {power: '0000', path: '142vhtml', title: 'v-html 测危险代码'},
                {power: '0000', path: '143transform', title: 'transform 形变'},
                {power: '0000', path: '145fromparam', title: '表单传参方式'},
                {power: '0000', path: '146copyTxt', title: '复制粘贴文本'},
                {power: '0000', path: '148customFrom', title: '组件内外表单校验'},
                {power: '0000', path: '149dynamicClick', title: '动态绑定事件'},
                {power: '0000', path: '150jscando', title: 'Js 权限能做到什么'},
                {power: '0000', path: '154deeplink', title: '深链接的深入研究'},
                {power: '0000', path: '155border', title: 'border 边框样式列举'},
                {power: '0000', path: '158vshowbug', title: 'v-show 有 bug'}
            ]
        }, {
            path: 'exp09', title: '卷玖', icon: 'md-game-controller-b',
            children: [
                {power: '0000', path: '162debounce', title: '防抖节流测试'},
                {power: '0000', path: '162autoSave', title: '表单自动保存(节流)'},
                {power: '0000', path: '168component', title: '组件编写'},
                {power: '0000', path: '169directive', title: '指令编写'},
                {power: '0000', path: '172rewriteRoutePush', title: '复写路由 push 方法'},
                {power: '0000', path: '173notification', title: '桌面通知简单API'},
                {power: '0000', path: '174console', title: 'Console 详解'},
                {power: '0000', path: '176arguments', title: 'argu 参数转换'},
                {power: '0000', path: '177wenhao', title: '登录两次bug'},
                {power: '0000', path: '178editTable', title: '表格可编辑可折叠'},
                {power: '0000', path: '200newBee', title: '收录200知识点'}
            ]
        }
    ]
})
