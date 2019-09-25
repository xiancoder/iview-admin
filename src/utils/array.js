'use strict';
/// ///////////////////////////////////////////////////////////////////////////
// 数组去重唯一化
// =====================
// liuyp 2018年12月20日11:28:08
/// ///////////////////////////////////////////////////////////////////////////
export const unique = (array) => {
    return Array.from(new Set(array))
}
/// ///////////////////////////////////////////////////////////////////////////
// 数组去重唯一化(对象数组)
// =====================
// liuyp 2019年8月21日15:36:43
/// ///////////////////////////////////////////////////////////////////////////
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
/// ///////////////////////////////////////////////////////////////////////////
// 数组去重唯一化 (完美版)(推荐)
// @param arr {array} 待处理数组
// @param [att] {string} 唯一的属性 可不填
// =====================
// liuyp 2019年9月20日11:15:33
/// ///////////////////////////////////////////////////////////////////////////
export const arrayUnique = (arr, att) => {
    let resArr = []
    let json = {}
    for (let i = 0; i < arr.length; i++) {
        if (!att) {
            if (!json[arr[i]]) {
                resArr.push(arr[i])
                json[arr[i]] = 1
            }
        } else {
            if (!json[arr[i][att]]) {
                resArr.push(arr[i])
                json[arr[i][att]] = 1
            }
        }
    }
    return resArr
}
/// ///////////////////////////////////////////////////////////////////////////
// 判断两个数组是否一致
// 长度顺序和数值 不适用于多维数组
// 看来要整一个先把多维数组转成简单的数组然后在..进行对比
// =====================
// liuyp 2019年9月20日11:10:17
/// ///////////////////////////////////////////////////////////////////////////
export const contrast = (arrA, arrB) => {
    if (!Array.isArray(arrA) || !Array.isArray(arrB)) { return false; }
    if (arrA.length !== arrB.length) { return false; }
    for (let i = 0, l = arrA.length; i < l; i++) {
        if (arrA[i] !== arrB[i]) { return false; }
    }
    return true;
}
/// ///////////////////////////////////////////////////////////////////////////
// 多维数组简化为一维数组
// 可搭配使用这个方法用来判断多维数组是否一致
// =====================
// liuyp 2019年9月20日11:10:17
/// ///////////////////////////////////////////////////////////////////////////
export const arrayFlatten = (ac) => {
    let array = []
    let g = ac
    for (var i = 0; i < g.length; i++) {
        if (g[i] instanceof Array) { array = array.concat(arrayFlatten(g[i])); } else { array.push(g[i]); }
    }
    return array;
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2]))
}
