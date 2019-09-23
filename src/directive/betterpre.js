export default {
    bind: (el, binding) => {
        let els = el.querySelectorAll('pre')
        els.forEach((one) => {
            let c = 'PRE资料:\n' + one.innerHTML
            let sp = c.match(/^[ ]*[\n|\r|\r\n]([ ]*)/)
            let uiBs = (sp && sp[1] && Math.floor(sp[1].length / 4)) || 5
            var rg = new RegExp('\n' + (new Array(parseInt(uiBs) * 4 + 1).join(' ')), 'g')
            one.innerHTML = c.replace(/^[ ]*|[ ]*$/g, '').replace(rg, '\n')
        })
    }
}
