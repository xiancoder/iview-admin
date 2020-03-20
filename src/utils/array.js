'use strict';

// =====================
// 数组去重唯一化
// =====================
// liuyp 2018年12月20日11:28:08
export const unique = (array) => {
    return Array.from(new Set(array))
}
// 数组去重唯一化(对象数组)
// =====================
// liuyp 2019年8月21日15:36:43
export const uniqueObj = (data, fun) => {
    var newData = [];
    fun = fun || function (a, b) { return a === b }
    for (var i = 0, len = data.length; i < len; i++) {
        var flag = 1;
        for (var j = 0, len2 = newData.length; j < len2; j++) {
            if (fun(newData[j], data[i])) { flag = 0; break; }
        }
        if (flag === 1) newData.push(data[i])
    }
    return newData;
}
// 数组去重唯一化 (完美版)(推荐)
// @param arr {array} 待处理数组
// @param [att] {string} 唯一的属性 可不填
// =====================
// liuyp 2019年9月20日11:15:33
export const arrayUnique = (arr, att) => {
    let resArr = []
    let json = {}
    for (let i = 0; i < arr.length; i++) {
        if (!att) {
            if (!json['_' + arr[i]]) {
                resArr.push(arr[i])
                json['_' + arr[i]] = 1
            }
        } else {
            if (!json['_' + arr[i][att]]) {
                resArr.push(arr[i])
                json['_' + arr[i][att]] = 1
            }
        }
    }
    json = {}
    return resArr
}

// =====================
// 判断两个数组是否一致
// 长度顺序和数值 不适用于多维数组
// 看来要整一个先把多维数组转成简单的数组然后在..进行对比
// =====================
// liuyp 2019年9月20日11:10:17
export const contrast = (arrA, arrB) => {
    if (!Array.isArray(arrA) || !Array.isArray(arrB)) { return false; }
    if (arrA.length !== arrB.length) { return false; }
    for (let i = 0, l = arrA.length; i < l; i++) {
        if (arrA[i] !== arrB[i]) { return false; }
    }
    return true;
}

// =====================
// 多维数组简化为一维数组
// 可搭配使用这个方法用来判断多维数组是否一致
// =====================
// liuyp 2019年9月20日11:10:17
export const arrayFlatten = (ac) => {
    let array = []
    let g = ac
    for (var i = 0; i < g.length; i++) {
        if (g[i] instanceof Array) {
            array = array.concat(arrayFlatten(g[i]))
        } else {
            array.push(g[i])
        }
    }
    return array;
}

// =====================
// 包含确认/交集/差集/并集/补集
// 新数组,不伤源头
// =====================
// liuyp 2018年12月20日11:28:08
// _bs(_.Array_contains([1,2,3,4,5,6],12),result_flag_here
// _bs(_.Array_intersect([1,2,3,4,5,6],[4,5,6,7,8,9]),result_flag_here
// _bs(_.Array_minus([1,2,3,4,5,6],[4,5,6,7,8,9]),result_flag_here
// _bs(_.Array_union([1,2,3,4,5,6],[4,5,6,7,8,9]),result_flag_here
// _bs(_.Array_complement([1,2,3,4,5,6],[4,5,6,7,8,9]),result_flag_here
function arrayFilter (A, fn) {
    fn = fn || function () {}; var arr = [];
    for (var i = 0, l = A.length; i < l; i++) {if (fn(A[i])) {arr.push(A[i])}}
    return arr
}
function arrayContains (A, V) {
    var i = A.length; while (i--) {if (A[i] === V) { return true }} return false
}
export function arrayIntersect (a, b) {
    return arrayFilter(arrayUnique(a), function (o) {return arrayContains(b, o)})
}
export function arrayMinus (a, b) {
    return arrayFilter(arrayUnique(a), function (o) {return !arrayContains(b, o)})
}
export function arrayUnion (a, b) {
    return arrayUnique(a.concat(b))
}
export function arrayComplement (a, b) {
    return arrayMinus(arrayUnion(a, b), arrayIntersect(a, b))
}
// =====================
// 数组洗牌
// =====================
// liuyp 2018年12月20日11:28:08
export function arrayShuffle (o) { // v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
        // 666
    }
    return o;
}

// ===================== // ===================== // =====================// ===================== // ===================== // =====================
// ===================== // ===================== // =====================// ===================== // ===================== // =====================
// ===================== // ===================== // =====================// ===================== // ===================== // =====================

// forEach
export const forEach = (arr, fn) => {
    if (!arr.length || !fn) return
    let i = -1
    let len = arr.length
    while (++i < len) {
        let item = arr[i]
        fn(item, i, arr)
    }
}
// 两个数组的并集, 两个数组的元素为数值或字符串
export const getUnion = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2]))
}
