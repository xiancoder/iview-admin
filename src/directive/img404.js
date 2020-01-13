import Vue from 'vue' // 核心

const img404 = {
    bind: (el, binding) => {
        el.onerror = function (e) {
            e.target.src = '/static/img.null/null.png'
            el.onerror = null
        }
    }
}

Vue.directive('img404', img404) // 图片404的自动补偿

export default img404
