import Vue from 'vue' // 核心
// import VueHtml5Editor from 'vue-html5-editor/dist/vue-html5-editor-liuyp.js'
import VueHtml5Editor from 'vue-html5-editor/dist/vue-html5-editor-liuyp-forFileUpload.js'
import './vueEditor.less'
// import VueHtml5Editor from '@/../plugins/vue-html5-editor' // 修改了一个粘贴不触发问题
// 遇到一个错误
// Errors while compiling. Reload prevented.
// 热更新报错 重启编译一遍就好了
Vue.use(VueHtml5Editor, {
    name: 'vue-html5-editor',
    showModuleName: false,
    icons: {
        text: 'fa fa-pencil',
        color: 'fa fa-paint-brush',
        font: 'fa fa-font',
        align: 'fa fa-align-justify',
        list: 'fa fa-list',
        link: 'fa fa-chain',
        unlink: 'fa fa-chain-broken',
        tabulation: 'fa fa-table',
        image: 'fa fa-file-image-o',
        hr: 'fa fa-minus',
        eraser: 'fa fa-eraser'
    },
    // 配置图片模块
    // config image module
    image: {
        // 文件最大体积，单位字节 max file size
        sizeLimit: 10000 * 1024,
        upload: {
            url: '/api/file/upload',
            fieldName: 'upload',
            headers: {},
            params: {}
        },
        compress: {
            width: 1600,
            height: 1600,
            quality: 80
        },
        uploadHandler (responseText) {
            const response = JSON.parse(responseText)
            console.log(response)
            const res = response.data
            if (res && res.path && res.path.upload) {
                return res.path.upload;
            }
            return '';
        }
    },
    // 语言，内建的有英文（en-us）和中文（zh-cn）
    // default en-us, en-us and zh-cn are built-in
    language: 'zh-cn',
    hiddenModules: [],
    visibleModules: [ 'text', 'color', 'font', 'align', 'list', 'link', 'unlink', 'tabulation', 'image', 'hr', 'eraser' ],
    modules: {
        // omit,reference to source code of build-in modules
    }
})
