export default {
    bind: (el, binding) => {
        el.innerHTML = '<div>' + el.innerHTML + '</div>'
        const div = el.querySelector('div')
        const h = parseInt((el.style.height || el.scrollHeight || el.offsetHeight).replace('px', ''))
        for (let x = 12; x < 100; x++) {
            div.style.fontSize = x + 'px'
            const nh = div.clientHeight || div.offsetHeight
            console.log(h, nh)
            if (h < nh) {
                div.style.fontSize = (x - 1) + 'px'
                break
            }
        }
    }
}
