'use strict';

// =====================
// 驼峰化字符串 camelCase (驼峰式命名)
// 将ab-cd转化为abCd
// =====================
// liuyp 2019年6月9日17:28:26
export const humping = function (str) {
    return str.replace(/-(\w)/g, function ($0, $1) {
        return $1.toUpperCase()
    })
}

// 反驼峰化字符串
// 将abCd转化为ab-cd
// kebab-case (短横线分隔式命名)
// =====================
// liuyp 2019年6月9日17:28:26
export const antiHumping = function (str) {
    return str.replace(/[A-Z]/g, function (a) {
        return '-' + a.toLowerCase()
    })
}

// =====================
// 获得url字符串中所有的参数
// =====================
// liuyp 2019年1月22日19:49:31
export const url2obj = (url) => {
    let t = {}
    let r = url.substr(1 + url.indexOf('?'))
    r = r.split('&')
    for (let n = 0; n < r.length; n++) {
        let o = r[n].split('=')
        t[o[0]] = decodeURIComponent(o.slice(1).join('='))
    }
    return t
}

// =====================
// 对象转换为url参数格式
// =====================
// liuyp 2019年1月22日19:49:31
export const obj2url = (obj) => {
    let arr = []
    let en = encodeURIComponent;
    for (let name in obj) {
        arr.push(en(name.replace(/^[ ]*|[ ]*$/g, '')) + '=' + en(obj[name]))
    }
    return arr.join('&');
}

// =====================
// URL_添加参数
// =====================
// liuyp 2019年1月22日19:49:31
export const urlChange = function (url, par, parvalue) {
    var pattern = par + '=([^&]*)'
    var replaceText = par + '=' + parvalue
    if (url.match(pattern)) {
        var tmp = '\\' + par + '=[^&]*'
        tmp = url.replace(new RegExp(tmp), replaceText)
        return (tmp);
    } else {
        if (url.match('[\?]')) {
            return url + '&' + replaceText;
        } else {
            return url + '?' + replaceText
        }
    }
}

// =====================
// 详细解析一个url,这段代码来自腾讯空间脚本
// =====================
// liuyp 2019年1月22日19:49:31
export const urlInfo = function (url) {
    let a = document.createElement('a');
    a.href = url;
    return {
        source: url, host: a.hostname, port: a.port, query: a.search,
        protocol: a.protocol.replace(':', ''),
        params: (function () {
            let b = {}
            let seg = a.search.replace(/^\?/, '').split('&')
            let len = seg.length
            let i = 0
            let s
            for (;i < len; i++) {
                if (!seg[i]) { continue }
                s = seg[i].split('=')
                b[s[0]] = s[1]
            }
            return b
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/g, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    }
}

// =====================
// 重复字段
// =====================
// liuyp 2020年4月17日15:12:20
export const repeat = function (str, time) {
    let res = ''
    for (var i = 0; i < time; i++) { res += str }
    return res
}

// =====================
// 字符串处理转码/解码 base64
// =====================
// liuyp 2018年12月17日23:29:26 整理先进
// liuyp 2019年10月11日11:28:45
const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
export const encodeBase64 = function (input) {
    let output = ''
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4
    let i = 0
    input = encodeUtf8(input)
    while (i < input.length) {
        chr1 = input.charCodeAt(i++)
        chr2 = input.charCodeAt(i++)
        chr3 = input.charCodeAt(i++)
        enc1 = chr1 >> 2
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
        enc4 = chr3 & 63
        if (isNaN(chr2)) {
            enc3 = enc4 = 64
        } else if (isNaN(chr3)) {
            enc4 = 64
        }
        output = output +
            _keyStr.charAt(enc1) +
            _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) +
            _keyStr.charAt(enc4)
    }
    return output
}
export const encodeUtf8 = function (string) {
    string = string.replace(/\r\n/g, '\n')
    let utftext = ''
    for (let n = 0; n < string.length; n++) {
        let c = string.charCodeAt(n)
        if (c < 128) {
            utftext += String.fromCharCode(c)
        } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192)
            utftext += String.fromCharCode((c & 63) | 128)
        } else {
            utftext += String.fromCharCode((c >> 12) | 224)
            utftext += String.fromCharCode(((c >> 6) & 63) | 128)
            utftext += String.fromCharCode((c & 63) | 128)
        }
    }
    return utftext
}
export const decodeBase64 = function (input) {
    let output = ''
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4
    let i = 0
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')
    while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++))
        enc2 = _keyStr.indexOf(input.charAt(i++))
        enc3 = _keyStr.indexOf(input.charAt(i++))
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4)
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
        chr3 = ((enc3 & 3) << 6) | enc4
        output = output + String.fromCharCode(chr1)
        if (enc3 !== 64) { output = output + String.fromCharCode(chr2) }
        if (enc4 !== 64) { output = output + String.fromCharCode(chr3) }
    }
    output = decodeUtf8(output);
    return output;
}
export const decodeUtf8 = function (utftext) {
    let string = ''
    let i, c, c2, c3
    i = c = c2 = 0
    while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
            string += String.fromCharCode(c)
            i++
        } else if ((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i + 1)
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63))
            i += 2
        } else {
            c2 = utftext.charCodeAt(i + 1)
            c3 = utftext.charCodeAt(i + 2)
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
            i += 3
        }
    }
    return string
}

// =====================
// 字符串处理转码/解码 unicode
// =====================
// liuyp 2019年1月10日17: 45: 58 整理先进
// liuyp 2019年10月11日11:28:45
export const asc2Uni = function (str) {
    const res = []
    if (str === '') { return '' }
    for (let i = 0, l = str.length; i < l; i++) {
        res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4)
    }
    return '\\u' + res.join('\\u')
}
export const uni2Asc = function (S) {
    return window.unescape(S.replace(/\\/g, '%'))
}

// =====================
// 首字母大写
// =====================
// liuyp 2019年6月9日17:28:26
export const capitalize = function (value) {
    if (!value) { return '' }
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}

// =====================
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

// =====================
// 两值切换
// =====================
// liuyp 2018年12月20日11:28:08
export const toggle = function (S, A, B) {
    return (S === A) ? B : A
}

// =====================
// 剔除html标签
// =====================
// liuyp 2018年12月20日11:28:08
export const stripTags = function (str) {
    if (!str) { return '' } return str.replace(/<\/?[^>]+>/g, '')
}

// =====================
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

// =====================
// 字符串随机生成
export const ramdomString = function (len) {
    len = len || 32;
    const chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890'
    const maxPos = chars.length
    let s = ''
    for (let i = 0; i < len; i++) { s += chars.charAt(Math.floor(Math.random() * maxPos)) }
    return s
}
