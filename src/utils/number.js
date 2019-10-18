'use strict'
// 随机数字
// =====================
// liuyp 2019年6月9日17:28:26 lodash替换
// _bs(_.flattenDeep([1, [2, [3, [4]], 5]]) ,result_flag_here
// _bs(_.random(0, 5) ,result_flag_here
// _bs(_.random(5) ,result_flag_here
// _bs(_.random(5, true) ,result_flag_here
// _bs(_.random(1.2, 5.2) ,result_flag_here
// UUID
// =====================
// liuyp 2019年6月9日22:00:05
// _bs(numberJs.uuid(10,5) ,result_flag_here
// _bs(numberJs.uuid(32) ,result_flag_here
// _bs(numberJs.uuid(32,5) ,result_flag_here
// 数字转换为简写汉字一到十
// =====================
// liuyp 2018年12月20日11:28:08
export const cnNumber = function (num) {
    let n = num + ''
    let cn = ['\u96f6', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d']
    for (let i = 0; i < 10; i++) n = n.replace(new RegExp(i, 'g'), cn[i])
    return n
}
// 数位补全(2位)
// @param num {int} 补全的数值 请自觉传入最多两位
// @returns {String} 处理后的字符串
// @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
// =====================
// liuyp 2019年9月20日10:41:05
export const fillup2Digit = (num) => {
    let n = num.toString()
    return n[1] !== undefined ? n[0] + n[1] : '0' + n[0]
}
// 数字转换为简写汉字读数
// =====================
// liuyp 2019年1月22日19:49:31
export const number2Chinese = (num) => {
    // 如果数字含有小数部分，那么可以将小数部分单独取出
    // 将小数部分的数字转换为字符串的方法：
    let chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    let chnUnitSection = ['', '万', '亿', '万亿', '亿亿']
    let chnUnitChar = ['', '十', '百', '千']
    let numToChn = function (num) {
        let index = num.toString().indexOf('.')
        if (index === -1) {
            return ''
        }
        let str = num.toString().slice(index)
        let a = '点'
        for (let i = 1; i < str.length; i++) {
            a += chnNumChar[parseInt(str[i])]
        }
        return a || ''
    }
    // 定义在每个小节的内部进行转化的方法，其他部分则与小节内部转化方法相同
    function sectionToChinese (section) {
        let str = ''
        let chnstr = ''
        let zero = false
        let count = 0 // zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
        while (section > 0) {
            let v = section % 10 // 对数字取余10，得到的数即为个位数
            if (v === 0) { // 如果数字为零，则对字符串进行补零
                // 如果遇到连续多次取余都是0，那么只需补一个零即可
                if (zero) {
                    zero = false
                    chnstr = chnNumChar[v] + chnstr
                }
            } else {
                zero = true // 第一次取余之后，如果再次取余为零，则需要补零
                str = chnNumChar[v]
                str += chnUnitChar[count]
                chnstr = str + chnstr
            }
            count++
            section = Math.floor(section / 10)
        }
        return chnstr
    }
    // 定义整个数字全部转换的方法，需要依次对数字进行10000为单位的取余
    // 然后分成小节，按小节计算，当每个小节的数不足1000时，则需要进行补零
    let a = numToChn(num)
    num = Math.floor(num)
    let unitPos = 0
    let strIns = ''
    let chnStr = ''
    let needZero = false
    if (num === 0) { return chnNumChar[0] }
    while (num > 0) {
        let section = num % 10000
        if (needZero) { chnStr = chnNumChar[0] + chnStr }
        strIns = sectionToChinese(section)
        strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0]
        chnStr = strIns + chnStr
        needZero = (section < 1000) && (section > 0)
        num = Math.floor(num / 10000)
        unitPos++
    }
    return (chnStr + a).replace(/^一十/g, '十')
}
export const number2Chinese2 = (num) => {
    const keys = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    let count = ['', '十', '百', '千']
    let str = ''
    let nums = num.toString().split('').reverse()
    nums.map(function (a, index) {
        str = keys[a] + (a === 0 ? '' : count[index > 3 ? index - 4 : index]) + (index === '4' ? '万' : '') + str
    })
    return str.replace(/(零(?=零))|(零$)|(零(?=万))/g, '')
}
// 金额转换为汉字大写
// 适用场景 不含小数且最多处理到万级别
// =====================
// liuyp 2019年1月22日19:49:31
export const money2Chinese = (money) => {
    // let cnNums = ['\u96f6', '\u58f9', '\u8d30', '\u53c1', '\u5002', '\u4f0d', '\u9646', '\u67d2', '\u634c', '\u7396']
    // \u5002倂\u8086肆
    let cnNums = ['\u96f6', '\u58f9', '\u8d30', '\u53c1', '\u8086', '\u4f0d', '\u9646', '\u67d2', '\u634c', '\u7396']
    let cnIntRadice = ['', '\u62fe', '\u4f70', '\u4edf']
    let cnIntUnits = ['', '\u4e07', '\u4ebf', '\u5146']
    let cnDecUnits = ['\u89d2', '\u5206', '\u6beb', '\u5398']
    let cnInteger = '\u6574'
    let cnIntLast = '\u5706'
    let maxNum = 999999999999999.9999
    let integerNum
    let decimalNum
    let chineseStr = ''
    let parts
    if (money === '') { return '' }
    money = parseFloat(money)
    if (money >= maxNum) { return '' }
    if (money === 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger
        return chineseStr
    }
    money = money.toString()
    if (money.indexOf('.') === -1) {
        integerNum = money
        decimalNum = ''
    } else {
        parts = money.split('.')
        integerNum = parts[0]
        decimalNum = parts[1].substr(0, 4)
    }
    if (parseInt(integerNum, 10) > 0) {
        let zeroCount = 0
        let IntLen = integerNum.length
        for (let i = 0; i < IntLen; i++) {
            let n = integerNum.substr(i, 1)
            let p = IntLen - i - 1
            let q = p / 4
            let m = p % 4
            if (n === '0') {
                zeroCount++
            } else {
                if (zeroCount > 0) { chineseStr += cnNums[0] }
                zeroCount = 0
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
            }
            if (m === 0 && zeroCount < 4) { chineseStr += cnIntUnits[q] }
        }
        chineseStr += cnIntLast
    }
    if (decimalNum !== '') {
        let decLen = decimalNum.length
        for (let i = 0; i < decLen; i++) {
            let n = decimalNum.substr(i, 1)
            if (n !== '0') { chineseStr += cnNums[Number(n)] + cnDecUnits[i] }
        }
    }
    if (chineseStr === '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger
    } else if (decimalNum === '') {
        chineseStr += cnInteger
    }
    return chineseStr
}
// UUID 生成
// =====================
// liuyp 2019年6月9日22:00:05
export const uuid = function (len, radix) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    let uuid = []
    let i
    radix = radix || chars.length
    if (len) { for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]; } else {
        let r; uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'; uuid[14] = '4'
        for (let i = 0; i < 36; i++) { if (!uuid[i]) { r = 0 | Math.random() * 16; uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]; } }
    }
    return uuid.join('')
}
// 从18位/17位身份证号算出校验位
// (1)十七位数字本体码加权求和公式
// S = Ai * Wi, i = 2, ... , 18
// Y = mod(S, 11)
// i: 表示号码字符从右至左包括校验码字符在内的位置序号
// Ai:表示第i位置上的身份证号码字符值
// Wi:表示第i位置上的加权因子
// i: 18 17 16 15 14 13 12 11 10 9 8 7  6 5 4 3 2 1
// Wi: 7  9 10  5  8  4  2  1  6 3 7 9 10 5 8 4 2 1
// (2)校验码字符值的计算
// Y: 0 1 2 3 4 5 6 7 8 9 10
// 校验码: 1 0 X 9 8 7 6 5 4 3  2
// =====================
// liuyp 2019年9月20日10:58:12
export const idCardNumCompute = function (idcardno) {
    // 权重值
    let verify18rights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
    let verify18Checkdigit = '10X98765432'
    let sum = 0
    for (let i = 0; i <= 16; i++) { sum += parseInt(idcardno.charAt(i)) * verify18rights[i]; }
    // 对权重值取模
    return verify18Checkdigit.charAt(sum % 11)
}
// 数字估算
// 源,过滤数组
// 为了适应浏览器局限宽度来显示数字,需要对数字进行估算显示
// =====================
// liuyp 2019年9月20日10:58:12
export const estimate = function (n, s) {
    s = s || 4; if (s < 5) s = 5; n = parseInt(n)
    function getNum (nl, u) {
        let jqxsd = 2 - 2 * (u.length)
        let zs = n / nl
        if (zs > 1e3) { jqxsd = 0 } else if (zs > 100) { if (u.length) { jqxsd = 0 } else { jqxsd = 1 } } else if (zs > 10) { if (u.length) { jqxsd = 0 } else { jqxsd = 2 } } else { if (u.length) { jqxsd = 1 } else { jqxsd = 2 } }
        return Number(zs.toFixed(jqxsd)) + u
    }
    if (n > 1e8) { return getNum(1e8, '亿') } else if (n > 1e4) { return getNum(1e4, '万') }
    return getNum(1, '')
}
export const estimate2 = function (n, s) {
    s = s || 4
    if (s < 5) s = 5
    n = parseInt(n)
    const getNum = (nl, u) => {
        let jqxsd = 2 - 2 * (u.length)
        let zs = n / nl
        if (zs > 1e3) {jqxsd = 0} else if (zs > 100) {
            if (u.length) {jqxsd = 0} else {jqxsd = 1}
        } else if (zs > 10) {
            if (u.length) {jqxsd = 0} else {jqxsd = 2}
        } else { if (u.length) {jqxsd = 1} else {jqxsd = 2} }
        return Number(zs.toFixed(jqxsd)) + u
    }
    if (n > 1e8) {return getNum(1e8, '亿')}
    if (n > 1e4) {return getNum(1e4, '万')}
    return getNum(1, '')
}
// 小数点后位数
// =====================
// liuyp 2019年9月20日10:58:12
const places = function (n) {
    try { return n.toString().split('.')[1].length } catch (e) { return 0 }
}
// 剔除小数点
// =====================
// liuyp 2019年9月20日10:58:12
export const noplaces = function (n) {
    return Number(n.toString().replace('.', ''))
}
// 精准加法
// 对于整数，前端出现问题的几率可能比较低，毕竟很少有业务需要需要用到超大整数，只要运算结果不超过 Math.pow(2, 53) 就不会丢失精度。
// 对于小数，前端出现问题的几率还是很多的，尤其在一些电商网站涉及到金额等数据。解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）
// =====================
// liuyp 2019年9月20日10:58:12
export const add = function (/* arguments */) {
    let args = []
    let l = arguments.length
    if (l === 0) { return 0 }
    for (let i = 0; i < l; i++) { args[i] = parseFloat(arguments[i]) }
    if (l === 1) { return args[0] }
    let m = 0
    let r2 = 0
    for (let i = 0; i < l; i++) { m = Math.max(places(args[i]), m) }
    m = Math.pow(10, m)
    for (let i = 0; i < l; i++) { r2 += args[i] * m }
    return r2 / m
}
// 精准减法
// =====================
// liuyp 2019年9月20日10:58:12
export const sub = function (/* arguments */) {
    let l = arguments.length
    if (l === 0) { return 0 }
    let args = []
    for (let i = 0; i < l; i++) { args[i] = parseFloat(arguments[i]) }
    if (l === 1) { return args[0] }
    let m = 0
    let r2 = args[0]
    for (let i = 0; i < l; i++) { m = Math.max(places(args[i]), m) }
    m = Math.pow(10, m)
    r2 *= m
    for (let i = 1; i < l; i++) { r2 -= args[i] * m }
    return r2 / m
}
// 精准乘法
// =====================
// liuyp 2019年9月20日10:58:12
export const mul = function (/* arguments */) {
    let args = []
    let l = arguments.length
    if (l === 0) { return 0 }
    if (l === 1) { return parseFloat(arguments[0]) }
    let m = 0
    let r2 = 1
    for (let i = 0; i < l; i++) {
        let n = parseFloat(arguments[i]).toString()
        let r1 = places(n)
        args[i] = n
        m += r1
    }
    m = Math.pow(10, m)
    for (let i = 0; i < l; i++) { r2 *= Number(args[i].replace(/\./g, '')) }
    return r2 / m
}
// 精准除法
// =====================
// liuyp 2019年9月20日10:58:12
export const div = function (bcs, cs) {
    bcs = parseFloat(bcs)
    cs = parseFloat(cs)
    let t1 = places(bcs)
    let t2 = places(cs)
    let r1 = noplaces(bcs)
    let r2 = noplaces(cs)
    return mul((r1 / r2), Math.pow(10, t2 - t1))
}
// 数字精准比较
// =====================
// liuyp 2019年9月20日10:58:12
const parseFloatRemoveNotNum = function (s) {
    return parseFloat(s.replace(/[^0-9\.]/g, '') || 0)
}
export const compare = function (a, b) {
    let ax = parseFloatRemoveNotNum(a)
    let bx = parseFloatRemoveNotNum(b)
    if (ax === bx) { return '=' } else { return ax > bx ? '>' : '<' }
}
// 数字千分金钱
// 返回一个千分金钱的字符串
/* export const thousand = function (str) { // 可用 但过时
    let s=(str+""),n=s.valueOf().length%3
    if (n){return s.slice(0,n)+s.slice(n).replace(/(\d{3})/g,',$1')}
    return s.replace(/(\d{3})/g,',$1').slice(1)
} */
export const thousand = function (num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
// 四位分隔银行账号
export const bankCartNum = function (S) {
    let len = S.length
    let s2 = ''
    let max = Math.floor(len / 4)
    for (let i = 0; i < max; i++) { let s = S.slice(len - 4, len); S = S.substr(0, len - 4); s2 = (' ' + s) + s2; len = S.length }
    return S + s2
}
// IP地址的校验
export const validateIP = function (e) {
    let t = 0
    if (e === '0.0.0.0') t = 1
    else if (e === '255.255.255.255') t = 2
    else {
        let n = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)
        if (n === null) t = 5
        else {
            for (let field = 1; field <= 4; field++) {
                n[field] > 255 && (t = 4)
                n[field] === 255 && field === 4 && (t = 3)
            }
        }
    } return t > 0
}
// IP地址的比较
export const compareIP = function (ipBegin, ipEnd) {
    let temp1 = ipBegin.split('.')
    let temp2 = ipEnd.split('.')
    for (let i = 0; i < 4; i++) {
        if (temp1[i] > temp2[i]) { return 1; } else if (temp1[i] < temp2[i]) { return -1; }
    } return 0
}
// 保留x位小数
// 功能：将浮点数四舍五入，取小数点后x位
export const toDecimal = function (num, pos) {
    let result = parseFloat(num)
    if (isNaN(num)) { return 0 }
    pos = pos || 2
    const bit10 = Math.pow(10, pos)
    result = Math.round(num * bit10) / bit10
    return result
}
// 强制保留2位小数，如：2，会在2后面补上00.即2.00
export const toDecimalForce = function (num, pos) {
    let result = parseFloat(num)
    if (isNaN(num)) { return 0 }
    pos = pos || 2
    const bit10 = Math.pow(10, pos)
    result = Math.round(num * bit10) / bit10
    var s = result.toString()
    var rs = s.indexOf('.')
    if (rs < 0) {
        rs = s.length
        s += '.'
    }
    while (s.length <= rs + pos) { s += '0' }
    return s
}
// 一个数字字符串 小数 的 保留两位 格式限定处理
// 非四舍五入 直接舍
export const toDecimalFormat = function (s) {
    s = parseFloat(s)
    if (isNaN(s)) { return 0 }
    // return s.substring(0,s.indexOf(".") + 3) // 非小数 报错
    return s.toString().replace(/([0-9]+\.[0-9]{2})[0-9]*/, '$1') // 挺好 略麻烦
}
// 五舍六入
// "保留2位小数 1000.003.toFixed(2) "1000.00"
// "保留1位小数 1000.08.toFixed(1) "1000.1"
// "保留1位小数 1000.04.toFixed(1) "1000.1"
// "保留1位小数 1000.05.toFixed(1) "1000.2"
// 科学计数
// 3.1415.toExponential(2) "3.14e+0"
// 3.1455.toExponential(2) "3.15e+0"
// 3.1445.toExponential(2) "3.14e+0"
// 3.1665.toExponential(1) "3.2e+0"
// 精确到n位，不含n位
// "精确到小数点第2位 3.1415.toPrecision(2) "3.1"
// "精确到小数点第3位 3.1465.toPrecision(3) "3.15"
// "精确到小数点第2位 3.1455.toPrecision(2) "3.1"
// "精确到小数点第5位 3.141592679287.toPrecision(5) 3.1416"
