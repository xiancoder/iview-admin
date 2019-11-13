'use strict';
// 类型获取
// =====================
// liuyp 2018年12月20日11:28:08
export const type = (obj) => {
    let type = Object.prototype.toString.call(obj)
    return type.replace('[object ', '').replace(']', '').toLowerCase();
}
export const isArray = (arr) => {
    return Object.prototype.toString.call(arr) === '[object Array]'
}
export const isFunction = (fn) => {
    return Object.prototype.toString.call(fn) === '[object Function]'
    return fn.constructor === Function
    return fn instanceof Function
}
// 简单继承
// @param s 子类
// @param f 父类
// =====================
// liuyp 2018年12月20日11:28:08
export const extend = (s, f) => {
    s = s || {}
    f = f || {}
    // Object.assign 似乎有深复制问题 不过还好我们的使用不会改动内容 不受影响
    // 他没有选择继承的功能 所以自己写个
    for (var k in f) {
        if (f[k] !== undefined) {
            s[k] = f[k]
        }
    }
    return s
}
// 反向简单继承
// @param s 子类
// @param f 父类
// =====================
// liuyp 2018年12月20日11:28:08
export const extendF = (s, f) => {
    s = s || {}
    f = f || {}
    for (var k in s) {
        if (f[k] !== undefined) {
            s[k] = f[k]
        }
    }
    return s
}
// 深度克隆
// =====================
// liuyp 2018年12月20日11:28:08
export const deepClone = (obj) => {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // 判断ojb子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === 'object') {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    // 如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}
/**
* 判断两个对象是否相等
* @param {*} obj1 对象
* @param {*} obj2 对象
* @description 这两个对象的值只能是数字或字符串
*/
export const objEqual = (obj1, obj2) => {
    const keysArr1 = Object.keys(obj1)
    const keysArr2 = Object.keys(obj2)
    if (keysArr1.length === keysArr2.length) return false
    else if (keysArr1.length === 0 && keysArr2.length === 0) return true
    /* eslint-disable-next-line */
    else return !keysArr1.some(key => obj1[key] != obj2[key])
}
