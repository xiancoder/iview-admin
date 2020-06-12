'use strict'

// =====================
// 防抖
// 每次请求 稍候等待x秒 再请求 停止计时重新等待x秒
// 面向 自动保存 实时搜索
// =====================
// 2019年12月13日17:55:24 经历实战
export const debounce = (fn, interval = 2e3) => {
    let last = null
    let timer = 0
    return function() {
        const args = arguments
        const now = +new Date()
        last = now
        if (last && now - last < interval) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, interval)
    }
}

// =====================
// 节流
// 每次执行延时禁用 第一次生效以后等x秒才能第二次生效
// 面向 提交表单防止重复提交
// =====================
// 2019年12月13日17:55:24 经历实战
export const throttle = (fn, delay = 2e3) => {
    let last = null
    return function() {
        var args = arguments
        const now = +new Date()
        if (last && now - last < delay) {
            return false
        }
        last = now
        fn.apply(this, args)
    }
}

// =====================
// 空函数
// =====================
export const nothing = () => {}

// =====================
// 类数组转换为数组
// argusParseArray(1,2,3,4,5) 结果 [1,2,3,4,5]
// =====================
// liuyp 2019-11-15 10:48:11
export function argusParseArray() {
    var args = Array.prototype.slice.call(arguments, 0)
    return args
}
