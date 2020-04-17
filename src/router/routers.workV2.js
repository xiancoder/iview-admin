// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'workV2', title: '工作集 V2', icon: 'md-menu',
    children: [
        {
            path: 'work00', title: '卷零', icon: 'md-heart',
            children: [
                {power: 'workv2-0', path: '201daterange', title: '日期范围优化'},
                {power: 'workv2-0', path: '202api', title: 'API模块优缺点'},
                {power: 'workv2-0', path: '202apiAdd', title: 'API模块ADD接口'},
                {power: 'workv2-0', path: '202apiList', title: 'API模块LIST接口'},
                {power: 'workv2-0', path: '202apiDrop', title: 'API模块DROP接口'},
                {power: 'workv2-0', path: '203fromdifto', title: '来源提交格式不同'},
                {power: 'workv2-0', path: '204trytransfer', title: '尝试多搜索+穿梭框'},
                {power: 'workv2-0', path: '205tab', title: '表格v10模版规范'},
                {power: 'workv2-0', path: '205tableV10', title: '表格v10模版规范', hideMenu: true},
                {power: 'workv2-0', path: '205tableV10@bro', title: '表格v10兄弟页面', hideMenu: true},
                {power: 'workv2-0', path: '205tableV11', title: '表格v11模版规范'},
                {power: 'workv2-0', path: '205tableV12', title: '表格v12模版规范(疑)'},
                {power: 'workv2-0', path: '205tableV13', title: '表格v13模版规范'},
                {power: 'workv2-0', path: '205tableNoData', title: '表格-无数据'},
                {power: 'workv2-0', path: '205tableTab', title: '表格v10 Tab规范'},
                {power: 'workv2-0', path: '205tableWithIcon', title: '表格v10应用小图标'},
                {power: 'workv2-0', path: '205tableMaxHeight', title: '表格v10高度限定'},
                {power: 'workv2-0', path: '205tableBatch', title: '表格v10批量操作'},
                {power: 'workv2-0', path: '205tableTools', title: '表格v10搜索项'},
                {power: 'workv2-0', path: '205tableSort', title: '表格v10排序功能'},
                {power: 'workv2-0', path: '205tableSum', title: '表格v10总计框'},
                {power: 'workv2-0', path: '205tableV20', title: '表格v20尝试'},
                {power: 'workv2-0', path: '207fromV10', title: '表单v10规范'},
                {power: 'workv2-0', path: '207fromV10$edit', title: '表单v10规范子页面', hideMenu: true},
                {power: 'workv2-0', path: '207axios', title: 'Axios 详解'},
                {power: 'workv2-0', path: '207allValidate', title: '表单所有校验方式'},
                {power: 'workv2-0', path: '207hardValidate', title: '表单复杂校验方式'},
                {power: 'workv2-0', path: '207validateInput', title: '表单v10输入框'},
                {power: 'workv2-0', path: '207validate1rAr', title: '表单v10一荣俱荣'},
                {power: 'workv2-0', path: '207validateSmallTable', title: '表单v10增删小表格'},
                {power: 'workv2-0', path: '207validateTextArea', title: '表单v10文本域框'},
                {power: 'workv2-2', path: '207vueInputTrimSpace', title: '输入框小心写空格'},
                {power: 'workv2-0', path: '207validateNumber', title: '表单v1数字框'},
                {power: 'workv2-0', path: '207validateFile', title: '表单v10文件上传框'},
                {power: 'workv2-0', path: '207validateOther', title: '表单v10其他框'},
                {power: 'workv2-0', path: '207validatePwd', title: '表单v10密码框'},
                {power: 'workv2-0', path: '207validateRadio', title: '表单v10单选复选框'},
                {power: 'workv2-0', path: '207validateRich', title: '表单v10富文本框'},
                {power: 'workv2-0', path: '207validateSelect', title: '表单v10下拉框'},
                {power: 'workv2-0', path: '207validateSelectCascade', title: '表单v10级联效果'},
                {power: 'workv2-0', path: '207validateDate', title: '表单v10日期框'},
                {power: 'workv2-0', path: '207validateSubmit', title: '表单v10提交逻辑'},
                {power: 'workv2-0', path: '208creditSvgCss', title: 'Svg 银行卡信用卡'},
                {power: 'workv2-0', path: '209vuehtml5editor', title: '富文本 Html5Editor'},
                {power: 'workv2-0', path: '209vuehtml5editorApply', title: '富文本 H5E 应用'}
            ]
        },
        {
            path: 'work01', title: '卷壹', icon: 'md-heart',
            children: [
                {power: 'workv2-1', path: '210showMsg', title: '提示信息框规范'},
                {power: 'workv2-1', path: '211tableFrom', title: '依附表单弹框尝试'},
                {power: 'workv2-1', path: '211tableFrom@from', title: '表单', hideMenu: true},
                {power: 'workv2-1', path: '211goodModal', title: '更好的弹框写法'},
                {power: 'workv2-1', path: '212tools', title: '超公共 tools 模块'},
                {power: 'workv2-1', path: '213smsBtn', title: '短信验证码按钮'},
                {power: 'workv2-1', path: '214formData', title: '提交用 FormData'},
                {power: 'workv2-1', path: '215fontawesome', title: 'font 绘制 logo'},
                {power: 'workv2-1', path: '216vviewer', title: '小图大图预览插件'},
                {power: 'workv2-1', path: '217tabs', title: '兄弟页面统一tabs'},
                {power: 'workv2-1', path: '218tableV1unitTest', title: '表格v1单元测试'},
                {power: 'workv2-1', path: '219iospic', title: 'iOS图片旋转bug'}
            ]
        },
        {
            path: 'work02', title: '卷贰', icon: 'md-heart',
            children: [
                {power: 'workv2-2', path: '220git', title: '公司GIT管理流程'},
                {power: 'workv2-2', path: '221keyup', title: '按键监听事件写法'},
                {power: 'workv2-2', path: '222contact', title: '联系人卡片 Css'},
                {power: 'workv2-2', path: '223chromeCopyTab', title: '谷歌复制网页bug'},
                {power: 'workv2-2', path: '224psSize', title: 'PS常用尺寸'},
                {power: 'workv2-2', path: '225nodeHttpServer', title: 'Node 代理服务器'},
                {power: 'workv2-2', path: '225nodeServerUpload', title: 'Node 文件上传'},
                {power: 'workv2-2', path: '225nodeServerimg', title: 'Node 静态资源'},
                {power: 'workv2-2', path: '225nodeCmd', title: 'Node 执行 CMD'},
                {power: 'workv2-2', path: '225nodePginfo', title: 'Node 批量更新版本'},
                {power: 'workv2-2', path: '225nodeCrossEnv', title: 'Node 环境变量'},
                {power: 'workv2-2', path: '226vueConfigJs', title: 'vue.config.js'},
                {power: 'workv2-2', path: '226vueVision', title: 'Node 运行时编译'},
                {power: 'workv2-2', path: '226webpackPluginFilemanager', title: 'filemanager-w-p'},
                {power: 'workv2-2', path: '228fireEvent', title: '尝试触发事件'},
                {power: 'workv2-2', path: '229twoLogin', title: '两个角色登录入口'}
            ]
        },
        {
            path: 'work03', title: '卷叁', icon: 'md-heart',
            children: [
                {power: 'workv2-2', path: '230bat', title: '批处理集合'},
                {power: 'workv2-2', path: '231indent', title: '多行文本缩进样式'},
                {power: 'workv2-2', path: '232clicknative', title: '原生点击native'},
                {power: 'workv2-2', path: '233qqlink', title: '深链接:客服QQ'},
                {power: 'workv2-2', path: '234ticketCss', title: '栅格布局 票据样式'},
                {power: 'workv2-2', path: '235showMore', title: '查看更多css实现'},
                {power: 'workv2-2', path: '236zoombg', title: '缩放下的背景样式'},
                {power: 'workv2-2', path: '237print', title: '打印功能集锦'},
                {power: 'workv2-2', path: '238datepanel', title: '日期面板网摘组件'},
                {power: 'workv2-2', path: '239toutou', title: '偷学网络配置'}
            ]
        },
        {
            path: 'work04', title: '卷肆', icon: 'md-heart',
            children: [
                {power: 'workv2-2', path: '240googleerror', title: '浏览器插件报错'},
                {power: 'workv2-2', path: '241html2canvas', title: '浏览器区域截图'},
                {power: 'workv2-2', path: '242screenlog', title: '屏幕日志'},
                {power: 'workv2-2', path: '243urlNoRepeat', title: '域名验重问题'},
                {power: 'workv2-2', path: '244iframe', title: 'iframe 父子页面'},
                {power: 'workv2-2', path: '244budianji', title: '补点击脚本'},
                {power: 'workv2-2', path: '244charu360', title: '360插入脚本'},
                {power: 'workv2-2', path: '244baiduurl', title: '百度URL参数解读'},
                {power: 'workv2-2', path: '244document', title: 'document 复习'},
                {power: 'workv2-2', path: '245webpackbundleanalyzer', title: 'webpack 打包分析'}
            ]
        },
        {
            path: 'work05wx', title: '卷伍-微信篇', icon: 'md-heart',
            children: [
                {power: 'workv2-2', path: '250csgzh', title: '微信公众测试号踩坑'},
                {power: 'workv2-2', path: '251xcxly', title: '微信小程序和蓝牙'},
                {power: 'workv2-2', path: '252gzhdl', title: '微信各种授权登录'},
                {power: 'workv2-2', path: '253xcxsp', title: '微信小程序视频'},
                {power: 'workv2-2', path: '254gzhzdycd', title: '公众号自定义菜单'},
                {power: 'workv2-2', path: '255xcxkeng', title: '小程序开发踩坑'}
            ]
        },
        {
            path: 'work06util', title: '卷伍-方法篇', icon: 'md-heart',
            children: [
                {power: 'workv2-2', path: '260dateUtil', title: '日期常用列举'},
                {power: 'workv2-2', path: '261arrayUtil', title: '数组常用列举'},
                {power: 'workv2-2', path: '262objUtil', title: '对象常用列举'},
                {power: 'workv2-2', path: '263stringUtil', title: '字符串常用列举'},
                {power: 'workv2-2', path: '264functionUtil', title: '方法常用列举'},
                {power: 'workv2-2', path: '265easyFun', title: '便宜方法积累'}
            ]
        },
        {
            path: 'work07table', title: '卷陆-真实操演', icon: 'md-heart',
            children: [
                {power: 'workv2-2', path: '271tableV10', title: '表格v10模版规范'},
                {power: 'workv2-2', path: '271tableV10@', title: '表格v10模版规范', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10@$edit', title: '表单页-回跳信息保留', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10@tab', title: '表格v10Tab规范', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10@userSay', title: '用户反映注意的点', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10@fspo', title: '搜索排序分页操作', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10@rule', title: '开发者应遵守', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10DHC', title: '表格v10的DHC1'},
                {power: 'workv2-2', path: '271tableV10DHC@betch', title: '表格v10的DHC批量处理', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10DHC@icon', title: '表格v10的DHC小图标', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10DHC@height', title: '表格v10的DHC高度限定', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10DHC@search', title: '表格v10的DHC搜索项', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10DHC@sum', title: '表格v10的DHC总计', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10DHC2', title: '表格v10的DHC2'},
                {power: 'workv2-2', path: '271tableV10DHC2@mixin', title: '表格v10的DHCMixin', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10DHC2@modal', title: '表格v10的DHC弹框表单', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10DHC2@typesetting', title: '表格v10的DHC合理排版', hideMenu: true},
                {power: 'workv2-2', path: '271tableV10dongtai', title: '表格v10的动态显隐'},
                {power: 'workv2-2', path: '272formV10', title: '表单v10模版规范'},
                {power: 'workv2-2', path: '272formV10DHC', title: '表单v10的DHC1'},
                {power: 'workv2-2', path: '272formV10DHC$add1', title: '表单v10的DHC添加普通表单', hideMenu: true},
                {power: 'workv2-2', path: '272formV10DHC$extends', title: '表单v10的DHC继承重写', hideMenu: true},
                {power: 'workv2-2', path: '273apiUnitTest', title: '接口的单元测试'},
                {power: 'workv2-2', path: '274meetingRoom', title: '预约会议室'},
                {power: 'workv2-2', path: '274branchStaff', title: '部门与人员'},
                {power: 'workv2-2', path: '274tableV10branchStaff', title: '部门与人员V10版'},
                {power: 'workv2-2', path: '274reportInfo', title: '周报详情'},
                {power: 'workv2-2', path: '275splitpane', title: '分割窗口组件'}
            ]
        }
    ]
})
