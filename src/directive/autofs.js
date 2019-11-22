import Vue from 'vue' // 核心

const autofs = {
    bind: (el, binding) => {
        setTimeout(() => {
            el.innerHTML = '<div>' + el.innerHTML + '</div>'
            const div1 = el
            const div2 = el.querySelector('div')
            for (var i = 12, l = 100; i < l; i++) {
                div2.style.fontSize = i + 'px'
                console.log(div1.offsetHeight, div2.offsetHeight)
                if (div1.offsetHeight < div2.offsetHeight) {
                    div2.style.fontSize = (i - 1) + 'px'
                    break
                }
            }
        }, 200)
    }
}

Vue.directive('autofs', autofs) // 自动文字字体大小 v-autofs

export default autofs
