'use strict';

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

// 绑定事件 on(element, event, handler)
// =====================
export const on = (function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()

// 解绑事件 off(element, event, handler)
// =====================
export const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()

// 阻止事件冒泡 防止默认行为
// =====================
// liuyp 2018年12月27日19:44:45
export const eventStop = (ev) => {
    /* IE和Chrome下是window.event FF下是e */
    ev = ev || window.event;
    /* 防止默认行为 */
    if (ev.preventDefault) { ev.preventDefault() } else { ev.returnValue = false; }
    /* 阻止事件冒泡 */
    if (ev.stopPropagation) { ev.stopPropagation() } else { ev.cancelBubble = true; }
}

// 事件发生的目标
// =====================
// liuyp 2018年12月27日19:44:45
export const eventTarget = (ev) => {
    ev = ev || window.event;
    /* IE和Chrome下是srcElement FF下是target */
    return ev.target || ev.srcElement;
}

// 获取地址栏参数
// =====================
// liuyp 2020年1月2日10:02:53
export const getUrLParam = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r !== null) return unescape(r[2])
    return null
}

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

/* ================================================================================ *\
// makeDom_原生API
// 属性 / 方法 描述
* element.accessKey //设置或返回元素的快捷键。
* element.appendChild() //向元素添加新的子节点，作为最后一个子节点。
* element.attributes //返回元素属性的 NamedNodeMap。
* element.childNodes //返回元素子节点的 NodeList。
* element.children
* element.style.cssText
* element.className //设置或返回元素的 class 属性。
* element.clientHeight //返回元素的可见高度。
* element.clientWidth //返回元素的可见宽度。
* element.cloneNode() //克隆元素。
* element.compareDocumentPosition() //比较两个元素的文档位置。
* element.contentEditable //设置或返回元素的文本方向。
* element.dir //设置或返回元素的文本方向。
* element.firstChild //返回元素的首个子。
* element.getAttribute() //返回元素节点的指定属性值。
* element.getAttributeNode() //返回指定的属性节点。
* element.getElementsByTagName() //返回拥有指定标签名的所有子元素的集合。
* element.getFeature() //返回实现了指定特性的 API 的某个对象。
* element.getUserData() //返回关联元素上键的对象。
* element.hasAttribute() //如果元素拥有指定属性，则返回true，否则返回 false。
* element.hasAttributes() //如果元素拥有属性，则返回 true，否则返回 false。
* element.hasChildNodes() //如果元素拥有子节点，则返回 true，否则 false。
* element.id //设置或返回元素的 id。
* element.innerHTML //设置或返回元素的内容。
* element.insertBefore() //在指定的已有的子节点之前插入新节点。
* element.isContentEditable //设置或返回元素的内容。
* element.isDefaultNamespace() //如果指定的 namespaceURI 是默认的，则返回 true，否则返回 false。
* element.isEqualNode() //检查两个元素是否相等。
* element.isSameNode() //检查两个元素是否是相同的节点。
* element.isSupported() //如果元素支持指定特性，则返回 true。
* element.lang //设置或返回元素的语言代码。
* element.lastChild //返回元素的最后一个子元素。
* element.namespaceURI //返回元素的 namespace URI。
* element.nextSibling //返回位于相同节点树层级的下一个节点。
* element.nodeName //返回元素的名称。
* element.nodeType //返回元素的节点类型。
* element.nodeValue //设置或返回元素值。
* element.normalize() //合并元素中相邻的文本节点，并移除空的文本节点。
* element.offsetHeight //返回元素的高度。
* element.offsetWidth //返回元素的宽度。
* element.offsetLeft //返回元素的水平偏移位置。
* element.offsetParent //返回元素的偏移容器。
* element.offsetTop //返回元素的垂直偏移位置。
* element.ownerDocument //返回元素的根元素（文档对象）。
* element.parentNode //返回元素的父节点。
* element.previousSibling //返回位于相同节点树层级的前一个元素。
* element.removeAttribute() //从元素中移除指定属性。
* element.removeAttributeNode() //移除指定的属性节点，并返回被移除的节点。
* element.removeChild() //从元素中移除子节点。
* element.replaceChild() //替换元素中的子节点。
* element.scrollHeight //返回元素的整体高度。
* element.scrollLeft //返回元素左边缘与视图之间的距离。
* element.scrollTop //返回元素上边缘与视图之间的距离。
* element.scrollWidth //返回元素的整体宽度。
* element.setAttribute() //把指定属性设置或更改为指定值。
* element.setAttributeNode() //设置或更改指定属性节点。
* element.setIdAttribute()
* element.setIdAttributeNode()
* element.setUserData() //把对象关联到元素上的键。
* element.style //设置或返回元素的 style 属性。
* element.tabIndex //设置或返回元素的 tab 键控制次序。
* element.tagName //返回元素的标签名。
* element.textContent //设置或返回节点及其后代的文本内容。
* element.title //设置或返回元素的 title 属性。
* element.toString() //把元素转换为字符串。
* nodelist.item() //返回 NodeList 中位于指定下标的节点。
* nodelist.length //返回 NodeList 中的节点数。
\* ================================================================================ */
// makeDom_创_创建节点
/* 动态加入文字DIV */
export function appendDiv (text, elem) {
    var dNode = document.createTextNode(text)
    var dElem = document.createElement(elem)
    dElem.appendChild(dNode)
    document.body.appendChild(dElem)
}
// makeDom_增_动态插入节点
// 有insertBefore的应该也有insertAfter吧？
// 有appendChild的应该也有prependChild吧？
// document.body.insertBefore(xx, document.body.children.item(0));
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
// makeDom_增_测试手动插入脚本
export function appendScript () {
    var script = document.createElement('script');
    script.src = '';
    document.body.appendChild(script);
}
// makeDom_删_动态移除DOM
export function remove (elem) {
    elem.parentNode && elem.parentNode.removeChild(elem);
}
// makeDom_改_动态处理属性
export function Attr (elem, attr, value) {
    if (value === undefined) {
        return elem.getAttribute(attr)
    } else if (value === '') {
        return elem.removeAttribute(attr)
    }
    return elem.setAttribute(attr, value)
}
// makeDom_改_动态处理样式
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
// makeDom_查_原生选择器
// document.querySelector('div a')
// document.querySelectorAll('div a').length
// document.querySelectorAll('div a')[0]
// document.querySelector('#test')
// document.querySelector('input:disabled')
// document.querySelector('span:not(label)').innerHTML
// document.querySelectorAll('input[id^=test]')[1].value
// document.querySelectorAll('input[id$=t2]').length
// document.querySelectorAll('input[id*=est]').length
// document.querySelector('.testSpan').innerHTML
// document.querySelector('ul li:nth-child(2)').innerHTML
// document.querySelectorAll('ul li:nth-child(3n)')[0].innerHTML
// document.querySelectorAll('ul li:nth-child(odd)')[1].innerHTML
// document.querySelector('ul li:first-child').innerHTML
// document.querySelector('ul li:last-child').innerHTML
// document.querySelectorAll('li[class]')[0].innerHTML
// document.querySelectorAll('div label')[0].innerHTML
// document.querySelectorAll('div > label')[0].innerHTML
// document.querySelectorAll('div + label')[0].innerHTML
// document.querySelectorAll('div ~ label')[1].innerHTML
// makeDom_查_元素间关系
// 父节点
export function parentNode (node) {
    return node.parentNode;
}
// 众一级子DOM
export function childrenNode (node) {
    return node.children;
}
// 下一个兄弟节点
export function nextSiblingNode (node) {
    var tempLast = node.parentNode.lastChild;
    if (node === tempLast) return null;
    var tempObj = node.nextSibling;
    while (tempObj.nodeType !== 1 && tempObj.nextSibling !== null) {
        tempObj = tempObj.nextSibling;
    } return (tempObj.nodeType === 1) ? tempObj : null;
}
// 前一个兄弟节点
export function prevSiblingNode (node) {
    var tempFirst = node.parentNode.firstChild;
    if (node === tempFirst) return null;
    var tempObj = node.previousSibling;
    while (tempObj.nodeType !== 1 && tempObj.previousSibling !== null) {
        tempObj = tempObj.previousSibling;
    }
    return (tempObj.nodeType === 1) ? tempObj : null;
}
// makeDom_断_元素属性
// 判断siblingNode和dom是否为同一个父元素下的同一级的元素，返回bool值
export function isSiblingNode (element, siblingNode) {
    if (!siblingNode || !element) return false;
    return element.parentNode === siblingNode.parentNode;
}
// makeDom_动态计算应该显示的基准
export function asdfasdfsaf () {
    (function (win, doc) {
        function change () {
            doc.documentElement.style.fontSize = 100 * doc.documentElement.clientWidth / 320 + 'px';
        }
        change();
        win.addEventListener('resize', change, false);
    })(window, document);
}
export function asdfasdfsaf2 () {
    var phoneWidth = parseInt(window.screen.width);
    var phoneScale = phoneWidth / 640;
    document.write('<meta name="viewport" content="width=640,initial-scale=' + phoneScale + ',minimum-scale=' + phoneScale + ',maximum-scale="+phoneScale+",target-densitydpi=device-dpi">');
}
