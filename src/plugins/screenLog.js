/*! screenlog - v0.1.3 - 2015-12-07
* https://github.com/chinchang/screenlog.js
* Copyright (c) 2015 Kushagra Gour; Licensed MIT */
function a (a, b) {
    var c = document.createElement(a)
    c.style.cssText = b
    return c
}
function b (b) {
    b.bgColor = b.bgColor || 'black'
    b.color = b.color || 'lightgreen'
    b.css = b.css || ''
    var c = a('div', 'font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:bold;padding:5px;text-align:left;opacity:0.8;position:fixed;right:0;top:0;min-width:200px;max-height:50vh;overflow:auto;z-index: 999999;background:' + b.bgColor + ';color:' + b.color + ';' + b.css)
    return c
}
function c () {
    var b = a('div', 'line-height:18px;background:' + (j.children.length % 2 ? 'rgba(255,255,255,0.1)' : ''))
    var c = [].slice.call(arguments).reduce(function (a, b) {
        return a + ' ' + b
    }, '')
    b.textContent = c
    j.appendChild(b)
    j.scrollTop = j.scrollHeight - j.clientHeight
}
function d () {
    j.innerHTML = ''
}
function e (a) {
    if (!k) {
        k = !0
        a = a || {}
        j = b(a)
        document.body.appendChild(j)
        if (!a.freeConsole) {
            l.log = console.log
            l.clear = console.clear
            console.log = i(c, 'log')
            console.clear = i(d, 'clear')
        }
    }
}
function f () {
    k = !1
    console.log = l.log
    console.clear = l.clear
    j.remove()
}
function g () {
    if (!k) throw new Error('You need to call `screenLog.init()` first.')
}
function h (a) {
    return function () {
        g()
        return a.apply(this, arguments)
    }
}
function i (a, b) {
    return function () {
        a.apply(this, arguments)
        typeof l[b] === 'function' && l[b].apply(console, arguments)
    }
}
var j
var k = !1
var l = {}
const screenLog = {
    init: e,
    log: i(h(c), 'log'),
    clear: i(h(d), 'clear'),
    destroy: h(f)
}
export default screenLog
