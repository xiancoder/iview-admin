'use strict';
import _ from 'lodash'
// 首字母大写
// =====================
// liuyp 2019年6月9日17:28:26 lodash替换
export const capitalize = function (value) {
    if (!value) { return '' }
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}
export const upperFirst = _.upperFirst
// 驼峰化字符串 将ab-cd转化为abCd
// camelCase (驼峰式命名)
// =====================
// liuyp 2019年6月9日17:28:26 lodash替换
export const humping = function (str) {
    return str.replace(/-(\w)/g, function ($0, $1) {
        return $1.toUpperCase()
    })
}
export const camelCase = _.camelCase
// 反驼峰化字符串 将abCd转化为ab-cd
// kebab-case (短横线分隔式命名)
// =====================
// liuyp 2019年6月9日17:28:26 lodash替换
export const antiHumping = function (str) {
    return str.replace(/[A-Z]/g, function (a) {
        return '-' + a.toLowerCase()
    })
}
export const kebabCase = _.kebabCase
// 全角半角替换
// 返回一个无错值字符串
// 空格为12288,半角空格为32
// 其他字符半角(33-126)与全角(65281-65374)的对应关系是:均相差65248
// =====================
// liuyp 2019年1月22日19:49:31
export const dbc2Sbc = function (str) {
    if ((str === null)) { return '' }
    return str.replace(/[\uff01-\uff5e]/g, function (a) {
        return String.fromCharCode(a.charCodeAt(0) - 65248)
    }).replace(/[\u3000]/g, ' ')
}
// 两值切换
// =====================
// liuyp 2018年12月20日11:28:08
export const toggle = function (S, A, B) {
    return (S === A) ? B : A
}
// 打造重复值
// =====================
// liuyp 2019年6月9日17:28:26 lodash替换
export const repeat = _.repeat
// 剔除html标签
// =====================
// liuyp 2018年12月20日11:28:08
export const stripTags = function (str) {
    if (!str) { return '' } return str.replace(/<\/?[^>]+>/g, '')
}
// 回文字符串判断 ( 正反读都一样)
// =====================
// liuyp 2018年12月20日11:28:08
export const palindrome = (str) => {
    // 删除字符串中不必要的字符
    var re = /[W_]/g
    // 将字符串变成小写字符
    var lowRegStr = str.toLowerCase().replace(re, '')
    // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
    if (lowRegStr.length === 0) { return true }
    // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
    if (lowRegStr[0] !== lowRegStr[lowRegStr.length - 1]) { return false }
    return palindrome(lowRegStr.slice(1, lowRegStr.length - 1))
}
