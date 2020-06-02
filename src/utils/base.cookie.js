'use strict';

// =====================
// 编译 字符串中的中文 方便Cookie保存
// =====================
// liuyp 2018年12月20日11:28:08
function encode (str) {
    return !str ? '' : (str + '').replace(/[\u4e00-\u9fa5]/g, function (v) {return escape(v)})
}
function decode (str) {
    return unescape(str)
}

// =====================
// Cookie保存/获取/删除
// =====================
// liuyp 2018年12月20日11:28:08 中文转义
export const setCookie = (name, content, time, path, domain, noEscape) => {
    let expire = new Date()
    expire.setTime(expire.getTime() + time * 1e3)
    document.cookie = name + '=' +
        (noEscape ? content : encode(content)) +
        '; expires=' + expire.toGMTString() +
        (path ? '; path=' + path : '; path=/') +
        (domain ? '; domain=' + domain : '')
    if (!content) { del(name) }
}
export const getCookie = (name) => {
    let r = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    let result = document.cookie.match(r)
    if (result !== null) {return decode(result[2])}
    return ''
}
export const getAllCookie = () => {
    let s = document.cookie
    let a1 = s.split('; ')
    let a2 = []
    for (let i = 0; i < a1.length; i++) {
        let t = a1[i].split('=')
        a2.push(t[0])
    }
    return a2;
}
export const delCookie = (name, path, domain) => {
    let n = get(name)
    if (n === null) return
    document.cookie = name + '=' +
        (path ? '; path=' + path : '; path=/') +
        (domain ? '; domain=' + domain : '') +
        ';expires=Fri, 02-Jan-1970 00:00:00 GMT'
}
export const delAllCookie = () => {
    let keys = document.cookie.match(/[^ =;]+(?=\=)/g)
    if (keys) {
        for (let i = keys.length; i--;) {document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()}
    }
}
