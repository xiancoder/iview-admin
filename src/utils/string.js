'use strict';
// lodash // 不要直接使用 lodash 在这里套一层
/* ================================================================================*\
*  |说明|_STRING_首字母大写
\*================================================================================ */
export const capitalize = function (value) {
    if (!value) { return '' }
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}
/* ================================================================================*\
*  |说明|_STRING_驼峰化字符串 将“ab-cd”转化为“abCd”
\*================================================================================ */
export const humping = function (str) {
    return str.replace(/-(\w)/g, function ($0, $1) {
        return $1.toUpperCase();
    });
}
/* ================================================================================*\
*  |说明|_STRING_反驼峰化字符串 将“abCd”转化为“ab-cd”
\*================================================================================ */
export const antiHumping = function (str) {
    return str.replace(/[A-Z]/g, function (a) {
        return '-' + a.toLowerCase();
    });
}
/// ///////////////////////////////////////////////////////////////////////////
// 全角半角替换
// 返回一个无错值字符串
// 空格为12288,半角空格为32
// 其他字符半角(33-126)与全角(65281-65374)的对应关系是:均相差65248
// =====================
// liuyp 2019年1月22日19:49:31
/// ///////////////////////////////////////////////////////////////////////////
export const dbc2Sbc = function (str) {
    if ((str === null)) { return '' }
    return str.replace(/[\uff01-\uff5e]/g, function (a) {
        return String.fromCharCode(a.charCodeAt(0) - 65248)
    }).replace(/[\u3000]/g, ' ')
}
/// ///////////////////////////////////////////////////////////////////////////
// 两值切换
// =====================
// liuyp 2018年12月20日11:28:08
/// ///////////////////////////////////////////////////////////////////////////
export const toggle = function (S, A, B) { return (S === A) ? B : A }
/// ///////////////////////////////////////////////////////////////////////////
// 剔除html标签
// =====================
// liuyp 2018年12月20日11:28:08
/// ///////////////////////////////////////////////////////////////////////////
export const stripTags = function (str) {
    if (!str) { return '' } return str.replace(/<\/?[^>]+>/g, '')
}
/// ///////////////////////////////////////////////////////////////////////////
// 回文字符串判断 ( 正反读都一样)
// =====================
// liuyp 2018年12月20日11:28:08
/// ///////////////////////////////////////////////////////////////////////////
export const palindrome = (str) => {
    // 删除字符串中不必要的字符
    var re = /[W_]/g
    // 将字符串变成小写字符
    var lowRegStr = str.toLowerCase().replace(re, '')
    // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
    if (lowRegStr.length === 0) {
        return true
    }
    // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
    if (lowRegStr[0] !== lowRegStr[lowRegStr.length - 1]) {
        return false
    } else {
        return palindrome(lowRegStr.slice(1, lowRegStr.length - 1))
    }
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

export const moneyConvert = (value) => {
    let money = ''
    const fraction = ['角', '分']
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
    const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']]
    let head = value < 0 ? '欠' : ''
    value = Math.abs(value)
    let s = ''
    for (let k = 0; k < fraction.length; k++) {
        s += (digit[Math.floor(value * 10 * Math.pow(10, k)) % 10] + fraction[k]).replace(/零./, '')
    }
    s = s || '整'
    value = Math.floor(value)
    for (let i = 0; i < unit[0].length && value > 0; i++) {
        let p = ''
        for (let j = 0; j < unit[1].length && value > 0; j++) {
            p = digit[value % 10] + unit[1][j] + p
            value = Math.floor(value / 10)
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
    }
    money = head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
    return money
}
