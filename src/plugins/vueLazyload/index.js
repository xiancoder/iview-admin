import Vue from 'vue' // 核心
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'static/img.null/null.png',
    loading: 'static/img.null/loader1.gif',
    attempt: 1
})
