// 防抖 每次执行延时禁用
// 有专门的包
// =====================
export const debounce = (fn, delay) => {
    delay = delay || 200
    var timer
    return function () {
        var th = this
        var args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            timer = null
            fn.apply(th, args)
        }, delay)
    }
}
// 节流 每次请求稍候等待
// 有专门的包
export const throttle = (fn, interval) => {
    var last
    var timer
    interval = interval || 200
    return function () {
        var th = this
        var args = arguments
        var now = +new Date()
        if (last && now - last < interval) {
            clearTimeout(timer)
            timer = setTimeout(function () {
                last = now
                fn.apply(th, args)
            }, interval)
        } else {
            last = now
            fn.apply(th, args)
        }
    }
}
// 回调函数需要执行的次数
export const doCustomTimes = (times, callback) => {
    let i = -1
    while (++i < times) { callback(i) }
}
// 空函数
export const nothing = () => {}
// 类数组转换为数组
// argusParseArray(1,2,3,4,5) 结果 [1,2,3,4,5]
// =====================
// liuyp 2019-11-15 10:48:11
export function argusParseArray () {
    var args = Array.prototype.slice.call(arguments, 0)
    return args
}
// bind的应用
// =====================
// liuyp 2019-11-15 10:48:11
export function handleCaller937 () {
    function FunctionBind () { return this.x; }
    return FunctionBind.bind({x: 1})();
    // handleCaller937() 结果 1
}
