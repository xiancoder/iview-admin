'use strict';

// =====================
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

// =====================
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

// =====================
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

// =====================
// 事件发生的目标
// =====================
// liuyp 2018年12月27日19:44:45
export const eventTarget = (ev) => {
    ev = ev || window.event;
    /* IE和Chrome下是srcElement FF下是target */
    return ev.target || ev.srcElement;
}
