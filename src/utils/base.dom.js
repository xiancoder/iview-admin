'use strict';

// =====================
// 当前浏览器名称
// =====================
export const getExplorer = () => {
    const ua = window.navigator.userAgent
    const isExplorer = (exp) => {
        return ua.indexOf(exp) > -1
    }
    if (isExplorer('MSIE')) return 'IE'
    else if (isExplorer('Firefox')) return 'Firefox'
    else if (isExplorer('Chrome')) return 'Chrome'
    else if (isExplorer('Opera')) return 'Opera'
    else if (isExplorer('Safari')) return 'Safari'
}

// =====================
// 获取地址栏参数
// =====================
// liuyp 2020年1月2日10:02:53
/* export const getUrLParam = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r !== null) return unescape(r[2])
    return null
} */
export const getUrlParam = (name, origin = null) => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = null
    if (origin === null) {
        r = window.location.search.substr(1).match(reg)
    } else {
        r = origin.substr(1).match(reg)
    }
    if (r !== null) return decodeURIComponent(r[2])
    return null
}
export const replaceUrlParam = (paramName, replaceWith) => {
    var oUrl = location.href.toString()
    var re = new RegExp('(' + paramName + '=)([^&]*)', 'gi')
    location.href = oUrl.replace(re, paramName + '=' + replaceWith)
    return location.href
}

// =====================
// scrollTop animation
// =====================
// liuyp 2019年9月6日 15:50:47
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60)
            }
        )
    }
    const difference = Math.abs(from - to)
    const step = Math.ceil(difference / duration * 50)

    const scroll = (start, end, step) => {
        if (start === end) {
            endCallback && endCallback()
            return
        }

        let d = (start + step > end) ? end : start + step
        if (start > end) {
            d = (start - step < end) ? end : start - step
        }

        if (el === window) {
            window.scrollTo(d, d)
        } else {
            el.scrollTop = d
        }
        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from, to, step)
}

// =====================
// dom js触发打印功能
// =====================
// liuyp 2020年2月6日 15:50:47
export function print (content, style) {
    let html = ''
    if (Object.prototype.toString.call(content).toLowerCase() === '[object array]') {
        content.forEach((one, index) => {
            if (index % 2 !== 0) {html += '<div STYLE="page-break-before:always"></div>'}
            html += one
            if (index % 2 !== 0) {html += '<div STYLE="page-break-after:always"></div>'}
        })
    } else if (typeof content === 'string') {
        html = content
    } else {
        return;
    }
    const printStr = `
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <style type="text/css" media="print">${style || ''}</style>
            </head>
            <body>${html || ''}</body>
        </html>
    `
    // const style = 'width=1000,height=600,left=150,top=150toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=yes'
    // const pwin = window.open('Print.htm', 'print', style) // 如果是本地测试需要先新建 如果是在域中使用则不需要
    // pwin.document.write(printStr)
    // pwin.document.close() // 这句很重要，没有就无法实现
    // pwin.print()
    // 不弹框测试
    const ifr = document.createElement('iframe')
    ifr.style.display = 'none'
    document.body.appendChild(ifr)
    const win = ifr.contentWindow
    win.document.write(printStr)
    win.document.close()
    win.print();
    setTimeout(() => {
        document.body.removeChild(ifr)
    }, 1e3);
}

// =====================
// 定位dom元素
// =====================
export const findNodeUpperByClasses = (ele, classes) => {
    let parentNode = ele.parentNode
    if (parentNode) {
        let classList = parentNode.classList
        if (classList && classes.every(className => classList.contains(className))) {
            return parentNode
        } else {
            return findNodeUpperByClasses(parentNode, classes)
        }
    }
}

// =====================
// makeDom_创_创建节点
/* 动态加入文字DIV */
// =====================
export function appendDiv (text, elem) {
    var dNode = document.createTextNode(text)
    var dElem = document.createElement(elem)
    dElem.appendChild(dNode)
    document.body.appendChild(dElem)
}

// =====================
// makeDom_增_动态插入节点
// 有insertBefore的应该也有insertAfter吧？
// 有appendChild的应该也有prependChild吧？
// document.body.insertBefore(xx, document.body.children.item(0));
// =====================
export function insertAfter (newEl, targetEl) {
    var parentEl = targetEl.parentNode;
    if (parentEl.lastChild === targetEl) {
        parentEl.appendChild(newEl);
    } else {
        parentEl.insertBefore(newEl, targetEl.nextElementSibling || targetEl.nextSibling);
    }
}
export function insertBefore (newEl, targetEl) {
    var parentEl = targetEl.parentNode;
    parentEl.insertBefore(newEl, targetEl);
}
export function prependChild (newEl, parentEl) {
    var r = parentEl.firstChild;
    return r && r.nodeType ? void parentEl.insertBefore(newEl, r) : void parentEl.appendChild(newEl)
}
export function appendChild (newEl, parentEl) {
    return parentEl.appendChild(newEl);
}

// =====================
// makeDom_增_测试手动插入脚本
// =====================
export function appendScript () {
    var script = document.createElement('script');
    script.src = '';
    document.body.appendChild(script);
}

// =====================
// makeDom_删_动态移除DOM
// =====================
export function remove (elem) {
    elem.parentNode && elem.parentNode.removeChild(elem);
}

// =====================
// makeDom_改_动态处理属性
// =====================
export function Attr (elem, attr, value) {
    if (value === undefined) {
        return elem.getAttribute(attr)
    } else if (value === '') {
        return elem.removeAttribute(attr)
    }
    return elem.setAttribute(attr, value)
}
// =====================
// makeDom_改_动态处理样式
// =====================
export function hasClass (el, k) {
    if (!el || !k) { return; }
    return (' ' + el.className + ' ').indexOf(' ' + k + ' ') > -1;
}
export function addClass (el, k) {
    if (!el || !k) { return; }
    if (!el.className) { el.className = k; return k }
    if (hasClass(el, k)) { el.className = [el.className, k].join(' '); }
}
export function removeClass (el, k) {
    if (!el || !k) { return; }
    if (k === '*') { el.className = k; return k }
    if (hasClass(el, k)) { el.className = (' ' + el.className + ' ').replace(k, ''); }
}
export function toggleClass (el, k) {
    if (!el || !k) { return; }
    return (hasClass(el, k)) ? removeClass(el, k) : addClass(el, k);
}

// =====================
// makeDom_断_元素属性
// 判断siblingNode和dom是否为同一个父元素下的同一级的元素，返回bool值
// =====================
export function isSiblingNode (element, siblingNode) {
    if (!siblingNode || !element) return false;
    return element.parentNode === siblingNode.parentNode;
}
