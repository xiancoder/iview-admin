// 代码高亮文件引入
import hljs from 'highlight.js'
// 引入
import axios from 'axios'
// 样式文件,文件里面还有其他样式可供选择
import 'highlight.js/styles/atom-one-light.css'
export default {
    bind: (el, binding) => {
        const makeDom = () => {
            return (el) => {
                let c = el.innerHTML
                let sp = c.match(/^[ ]*[\n|\r|\r\n]([ ]*)/)
                let uiBs = (sp && sp[1] && Math.floor(sp[1].length / 4)) || 5
                el.innerHTML = c.replace(/\n|\r|\r\n/, '')
                    .replace(/^[ ]*|[ ]*$/g, '')
                    .replace(new RegExp('\n' + (new Array(parseInt(uiBs) * 4 + 1).join(' ')), 'g'), '<br>')
                    .replace(/ /g, '&nbsp;')
                hljs.highlightBlock(el)
            }
        }
        const makeDomFromUrl = () => {
            return (el) => {
                axios.get(el.src)
                    .then(function (response) {
                        let c = response.data
                        let sp = c.match(/^[ ]*[\n|\r|\r\n]([ ]*)/)
                        let uiBs = (sp && sp[1] && Math.floor(sp[1].length / 4)) || 5
                        let pre = document.createElement('pre')
                        el.parentNode.insertBefore(pre, el)
                        pre.innerHTML = c.replace(/\n|\r|\r\n/, '')
                            .replace(/^[ ]*|[ ]*$/g, '')
                            .replace(new RegExp('\r\n' + (new Array(parseInt(uiBs) * 4 + 1).join(' ')), 'g'), '')
                            .replace(/ /g, '&nbsp;')
                        hljs.highlightBlock(pre)
                    })
                    .catch(function (error) {
                        console.info(error)
                    })
            }
        }
        const makeDomWithStyle = (style) => {
            return (el) => {
                let c = el.innerHTML
                let sp = c.match(/^[ ]*[\n|\r|\r\n]([ ]*)/)
                let uiBs = (sp && sp[1] && Math.floor(sp[1].length / 4)) || 5
                let pre = document.createElement('pre')
                pre.className = style
                el.parentNode.insertBefore(pre, el)
                el.innerHTML = ''
                pre.innerHTML = c.replace(/\n|\r|\r\n/, '')
                    .replace(/^[ ]*|[ ]*$/g, '')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/v-/g, 'v_')
                    .replace(/^[ ]*|[ ]*$/g, '')
                    .replace(new RegExp('\n' + (new Array(parseInt(uiBs) * 4 + 1).join(' ')), 'g'), '<br>')
                    .replace(/ /g, '&nbsp;')
                hljs.highlightBlock(pre)
            }
        }
        el.querySelectorAll('code').forEach(makeDom())
        el.querySelectorAll('script[type="text/url"]').forEach(makeDomFromUrl())
        el.querySelectorAll('script[type="text/js"]').forEach(makeDomWithStyle('script'))
        el.querySelectorAll('script[type="text/css"]').forEach(makeDomWithStyle('css'))
        el.querySelectorAll('script[type="text/html"]').forEach(makeDomWithStyle('html'))
    }
}
