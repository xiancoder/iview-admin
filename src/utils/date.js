// 不要直接使用moment 在这里套一层
import moment from 'moment'

// 当前时间
// =====================
// liuyp 2019年6月11日09:59:51 moment逻辑
// _bs( moment() ,result_flag_here
// _bs( moment(new Date()) ,result_flag_here
// _bs( moment(new Date(2017,1,1)).format('YYYY-MM-DD') == '2017-02-01' ,result_flag_here
// _bs( moment([2017,1,1]).format('YYYY-MM-DD') == '2017-02-01' ,result_flag_here
// _bs( moment(new Date(2017,1-1,1)).format('YYYY-MM-DD') == '2017-01-01' ,result_flag_here
// _bs( moment([2017,1-1,1]).format('YYYY-MM-DD') == '2017-01-01' ,result_flag_here
// 多种格式给moment赋值
// =====================
// liuyp 2019年6月11日09:59:51 moment逻辑
// _bs( moment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"]) ,result_flag_here
// _bs( moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"]) ,result_flag_here
// 深拷贝
// =====================
// liuyp 2019年6月11日09:59:51 moment逻辑
// _bs( moment(moment([2012])) ,result_flag_here
// _bs( moment([2012]).clone() ,result_flag_here
// 倒计时
// =====================
// liuyp 2019年6月11日09:59:51 moment逻辑
// _bs( moment([2007, 0, 29]).fromNow() ,result_flag_here
// _bs( moment([2007, 0, 29]).fromNow(true) ,result_flag_here
// 计算一个月有多少天
// =====================
// liuyp 2019年6月11日09:59:51 moment逻辑
// _bs( moment("2012-02", "YYYY-MM").daysInMonth() ,result_flag_here
// _bs( moment("2012-01", "YYYY-MM").daysInMonth() ,result_flag_here
// 计算某天星期几
// =====================
// liuyp 2019年6月11日09:59:51 moment逻辑
// _bs( moment().day() ,result_flag_here
// _bs( moment().day(-7) ,result_flag_here
// _bs( moment().day(7) ,result_flag_here
// _bs( moment().day(10) ,result_flag_here
// _bs( moment().day(24) ,result_flag_here
// 星座
// =====================
// liuyp 2019年1月9日11:00:26 收录
// liuyp 2019年10月3日18:07:32 改正错误
export const date2xz = function (D) {
    let m = D.getMonth() + 1
    let d = D.getDate()
    let i = 0
    let z = [1222, 120, 218, 320, 419, 520, 621, 722, 822, 922, 1023, 1123, 1222]
    let x = '\u6469\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50' +
      '\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b';
    if ((100 * m + d) >= z[0] || (100 * m + d) < z[1]) { i = 0 } else { for (i = 1; i < 12; i++) { if ((100 * m + d) >= z[i] && (100 * m + d) < z[i + 1]) break } }
    return x.substring(2 * i, 2 * i + 2)
}
// 天干地支
// =====================
// liuyp 2019年1月9日11:00:26
export const date2gz = function (D) {
    let y = D.getFullYear()
    let i = y - 1900 + 36
    let GZDict = ['\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u7678',
        '\u5b50\u4e11\u5bc5\u536f\u8fb0\u5df3\u5348\u672a\u7533\u9149\u620c\u4ea5'];
    return GZDict[0].charAt(i % 10) + GZDict[1].charAt(i % 12)
}
// 属相
// =====================
// liuyp 2019年1月9日11:00:26
export const date2sx = function (D) {
    let y = D.getFullYear()
    let SXDict = '\u9f20\u725b\u864e\u5154\u9f99\u86c7\u9a6c\u7f8a\u7334\u9e21\u72d7\u732a';
    return SXDict.charAt((y - 4) % 12)
}
// 农历时间
// =====================
// liuyp 2019年1月9日11:00:26
export const date2cnDate = function (D) {
    D = D || new Date()
    let yy = D.getFullYear()
    let mm = D.getMonth() + 1
    let dd = D.getDate()
    if (yy < 100) yy = '19' + yy
    const numString = ['\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341']
    const monString = ['\u6b63', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341', '\u51ac', '\u814a']
    const CalendarData = [0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95]
    const madd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    // let cYear
    let cMonth
    let cDay
    let TheDate
    const GetBit = (m, n) => { return (m >> n) & 1 }
    const e2c = (a, b, c) => {
        TheDate = new Date(a, b, c)
        let total
        let m
        let n
        let k
        let isEnd = false
        let tmp = TheDate.getYear()
        if (tmp < 1900) { tmp += 1900 }
        total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38
        if (TheDate.getYear() % 4 === 0 && TheDate.getMonth() > 1) total++
        for (m = 0; m > 0; m++) {
            k = (CalendarData[m] < 0xfff) ? 11 : 12
            for (n = k; n >= 0; n--) {
                if (total <= 29 + GetBit(CalendarData[m], n)) { isEnd = true; break }
                total = total - 29 - GetBit(CalendarData[m], n)
            } if (isEnd) break
        }
        // cYear = 1921 + m
        cMonth = k - n + 1
        cDay = total
        if (k === 12) {
            if (cMonth === Math.floor(CalendarData[m] / 0x10000) + 1) cMonth = 1 - cMonth
            if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) cMonth--
        }
    }
    const GetcDateString = () => {
        var tmp = ''
        if (cMonth < 1) {
            tmp += '(\u95f0)'
            tmp += monString[-cMonth - 1]
        } else { tmp += monString[cMonth - 1] }
        tmp += '\u6708'
        tmp += (cDay < 11) ? '\u521d' : ((cDay < 20) ? '\u5341' : ((cDay < 30) ? '\u5eff' : '\u4e09\u5341'))
        if (cDay % 10 !== 0 || cDay === 10) { tmp += numString[(cDay - 1) % 10] }
        return tmp
    }
    const GetLunarDay = (solarYear, solarMonth, solarDay) => {
        if (solarYear < 1921 || solarYear > 2020) { return '' } else {
            solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11
            e2c(solarYear, solarMonth, solarDay)
            return GetcDateString()
        }
    }
    return GetLunarDay(yy, mm, dd)
}
// 二十四节气(注节气指的是某一天)
// =====================
// liuyp 2019年1月9日11:00:26
export const date2jieqi = function (D) {
    let yyyy = D.getFullYear()
    let mm = D.getMonth() + 1
    let dd = D.getDate()
    mm = mm - 1;
    const sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343,
        285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
    const solarTerm = ['\u5c0f\u5bd2', '\u5927\u5bd2', '\u7acb\u6625', '\u96e8\u6c34', '\u60ca\u86f0', '\u6625\u5206',
        '\u6e05\u660e', '\u8c37\u96e8', '\u7acb\u590f', '\u5c0f\u6ee1', '\u8292\u79cd', '\u590f\u81f3', '\u5c0f\u6691',
        '\u5927\u6691', '\u7acb\u79cb', '\u5904\u6691', '\u767d\u9732', '\u79cb\u5206', '\u5bd2\u9732', '\u971c\u964d',
        '\u7acb\u51ac', '\u5c0f\u96ea', '\u5927\u96ea', '\u51ac\u81f3'];
    let tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    let tmp2 = tmp1.getUTCDate();
    let solarTerms = '';
    if (tmp2 === dd) solarTerms = solarTerm[mm * 2 + 1];
    tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    tmp2 = tmp1.getUTCDate();
    if (tmp2 === dd) solarTerms = solarTerm[mm * 2];
    return solarTerms;
}
// 判断是否闰年
// =====================
// liuyp 2019年1月9日11:00:26
// liuyp 2019年6月11日09:59:51 moment逻辑
export const date2isLeapYear = function (D) {
    let year = D.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)))
}
export const isLeapYear = function (D) {
    return moment(D).isLeapYear()
}
// 完整输出 "丙申(猴)年 (闰)五月廿"
// =====================
// liuyp 2019年1月9日11:00:26
export const date2all = function (D) {
    return date2gz(D) + '(' + date2sx(D) + ')\u5e74 ' +
    (date2isLeapYear(D) ? '(\u95f0)' : '') +
    date2cnDate(D) +
    (date2jieqi(D) ? ' ' + date2jieqi(D) : ' \u65e0\u8282\u6c14');
}
// 日期格式化
// @param O {date} 日期
// @param T {string} 格式字符串
// =====================
// liuyp 2019年9月20日11:25:25
/* export const dateFormater = (O, T) => { // 可用 但过时
    let D = new Date(O.getTime())
    T = T || 'yyyy-MM-dd HH:mm:ss'
    let o = {
        'M+': D.getMonth() + 1,
        'd+': D.getDate(),
        'h+': D.getHours() % 12 === 0 ? 12 : D.getHours() % 12,
        'H+': D.getHours(),
        'm+': D.getMinutes(),
        's+': D.getSeconds(),
        'q+': Math.floor((D.getMonth() + 3) / 3),
        'S': D.getMilliseconds()
    }
    let week = { '0': '\u65e5', '1': '\u4e00', '2': '\u4e8c', '3': '\u4e09', '4': '\u56db', '5': '\u4e94', '6': '\u516d' }
    if (/(y+)/.test(T)) { T = T.replace(RegExp.$1, (D.getFullYear().toString().substr(4 - RegExp.$1.length))) }
    if (/(E+)/.test(T)) { T = T.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[D.getDay().toString()]) }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(T)) {
            T = T.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return T
} */
export const dateFormater = (dataStr, pattern) => {
    pattern = pattern || 'YYYY-MM-DD HH:mm:ss'
    return moment(dataStr).format(pattern);
}
export const dateFormat = (dataStr, pattern) => { // 专门为项目服务的'YYYY-MM-DD'格式
    pattern = pattern || 'YYYY-MM-DD'
    return moment(dataStr).format(pattern);
}
// 获取今天之前一周时间的字符串数组
// =====================
// liuyp 2019年9月30日15:16:59
/* export function sevenRange () { // 放弃 未测试 也许更好
    const today = moment().format('YYYY-MM-DD');
    const last7 = moment().subtract(6,'days').format('YYYY-MM-DD');
    return [last7, today];
} */
export function sevenRange (D) {
    const date = D || new Date()
    const today = dateFormat(date)
    const last7 = dateFormat(dateSub(date, 6, 'd'))
    return [last7, today];
}
// 时间戳转换日期
// 防止ios出现日期bug 统一后台来的时间戳
// @param timestamp {int} 时间戳为10位/13位均可
// =====================
// liuyp 2019年9月20日11:25:25
const fillup2Digit = (num) => {
    let n = num.toString()
    return n[1] !== undefined ? n[0] + n[1] : '0' + n[0]
}
export const timestamp2Date = (timestamp) => {
    timestamp = parseInt(timestamp)
    while (timestamp < 1e12) { // 保证13位数据
        timestamp *= 10
    }
    let date = new Date(timestamp)
    let Y = date.getFullYear()
    let M = fillup2Digit(date.getMonth() + 1)
    let D = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
}
// 两日期是否相等
// y 年 q 季度 m 月 d 日 w 周 h 小时 n 分钟 s 秒 ms 毫秒
// @param u {string} 单位
// @param d1 {string} 日期一
// @param d2 {string} 日期二
// =====================
// liuyp 2019年9月20日11:25:25
export const dateEqual = (u, d1, d2) => {
    let f = ['setMilliseconds', 'setSeconds', 'setMinutes', 'setHours', 'setDate', 'setMonth', 'setYear']
    let dx = function (x) {
        d1[x](1)
        d2[x](1)
    }
    switch (u) {
        case ('ms'):
            break
        case ('y'):
            dx(f[5])
        case ('m'):
            dx(f[4])
        case ('d'):
            dx(f[3])
        case ('h'):
            dx(f[2])
        case ('n'):
            dx(f[1])
        case ('s'):
            dx(f[0])
            break
    }
    return d1.getTime() === d2.getTime()
}
// 指定格式字符串转换日期
// @author liuyp
// @param arg {string} 时间戳为10位/13位均可
// =====================
// liuyp 2019年9月20日11:25:25
export const dateObj = (arg) => {
    if (!arg) {
        return new Date()
    }
    arg = arg.replace(/(^\s*)|(\s*$)/g, '')
    let dtArr = arg.split(' ')
    let date = dtArr[0]
    let time = dtArr[dtArr.length - 1] ? dtArr[dtArr.length - 1] : ''
    if (dtArr.length === 1) {
        time = ''
    }
    let dArr = date.split('/')[1] ? date.split('/') : date.split('-')
    let year = dArr[0]
    let month = dArr[1] ? dArr[1] - 1 : 0
    let day = dArr[2] ? dArr[2] : 1
    let tArr = time.split(':')
    let hour = tArr[0] ? tArr[0] : 0
    let min = tArr[1] ? tArr[1] : 0
    let sec = tArr[2] ? tArr[2] : 0
    return new Date(year, month, day, hour, min, sec)
}
// 日期的加减法
// @param D {date} 日期
// @param N {int} 数量
// @param S {string} 单位
// =====================
// liuyp 2019年9月20日11:25:25
export const dateAdd = (D, N, S) => {
    let s = 0
    let m = 0
    let h = 0
    let d = 0
    let w = 0
    let q = 0
    let M = 0
    let y = 0
    if (S === 's') {
        s = N
    }
    if (S === 'm') {
        m = N
    }
    if (S === 'h') {
        h = N
    }
    if (S === 'd') {
        d = N
    }
    if (S === 'w') {
        w = N
    }
    if (S === 'q') {
        q = N
    }
    if (S === 'M') {
        M = N
    }
    if (S === 'y') {
        y = N
    }
    return new Date(
        D.getFullYear() + y,
        D.getMonth() + M + q * 3,
        D.getDate() + d + w * 7,
        D.getHours() + h,
        D.getMinutes() + m,
        D.getSeconds() + s
    )
}
export const dateSub = (D, N, S) => {
    return dateAdd(D, -1 * N, S)
}
// 计算其归属的计薪周期区间
// @param date {date} 根据日期
// @desc 获取今天归属哪个计薪周期 上个月26到这个月25 x 为今天月份 --- 八月
// @desc 如果今天日期大于等于26 x加一月 --- 不大于
// @desc x --- 八月计薪周期
// @desc [ x的上一月26, x月25 ]  --- 七月26到八月25
// =====================
// liuyp 2019年9月20日11:25:25
export const computeRange = (date) => { // 解释一下 moment对象和普通date对象不同
    date = moment(date || new Date()) // 所以参数不管是何种对象 都转为moment对象来处理
    let startDate = moment(date)
    let endDate = moment(date)
    if (date.date() >= 26) { endDate.add(1, 'months') } else { startDate.subtract(1, 'months') }
    return [
        moment(startDate).format('YYYY-MM-26'),
        moment(endDate).format('YYYY-MM-25')
    ]
}
// 计算其归属的计薪周期区间
// @param yearNum {int} 根据年份月份
// @param mouthNum {int} 根据年份月份
// =====================
// liuyp 2019年9月20日11:25:25
export const computeRangeByMouth = (yearNum, mouthNum) => {
    const date = new Date(yearNum, mouthNum - 1, 1)
    return computeRange(date)
}
// 天数转年月日数
// @param d {int} 天数
// =====================
// liuyp 2019年9月20日11:25:25
export const dateDays2ymd = (d) => {
    return [Math.floor(d / 365), Math.floor(d / 30) % 12, d % 30]
}
// 毫秒转日时分秒数
// @param d {int} 毫秒数
// =====================
// liuyp 2019年9月20日11:25:25
export const dateMs2dhns = (d) => {
    let d1 = Math.floor(d / 1000)
    let d2 = Math.floor(d1 / 60)
    let d3 = Math.floor(d2 / 60)
    let d4 = Math.floor(d3 / 24)
    return [d4, d3 % 24, d2 % 60, d1 % 60]
}
// 两个日期的相差
// =====================
// liuyp 2019年10月5日23:09:25
export const timeLong = (start, end) => {
    let S = new Date(start)
    let E = new Date(end)
    let M = ''
    if (S.getTime() > E.getTime()) return '现在的时间小于以前的时间!'
    if ((E.getTime() - S.getTime()) / (1000 * 60) < 1) return '刚刚'
    if (E.getFullYear() > S.getFullYear() && E.getMonth() >= S.getMonth()) { M += E.getFullYear() - S.getFullYear() + '年' }
    if (E.getMonth() > S.getMonth() && E.getDate() >= S.getDate()) { M += E.getMonth() - S.getMonth() + '个月' }
    if (E.getDate() > S.getDate() && E.getHours() >= S.getHours()) { M += E.getDate() - S.getDate() + '天' }
    if (E.getHours() > S.getHours() && E.getMinutes() >= S.getMinutes()) { M += E.getHours() - S.getHours() + '小时' }
    if (E.getMinutes() > S.getMinutes()) { M += E.getMinutes() - S.getMinutes() + '分钟' }
    return M
}
export const timeLong2 = (date1, date2) => {
    let y1 = Number(date1.substr(0, 4)) // 年
    let y2 = Number(date2.substr(0, 4))
    let m1 = Number(date1.substr(4, 2)) // 月
    let m2 = Number(date2.substr(4, 2))
    let ym1 = Number(date1.substr(0, 6)) // 年月
    let ym2 = Number(date2.substr(0, 6))
    let d1 = Number(date1.substr(6, 2)) // 日
    let d2 = Number(date2.substr(6, 2))
    let day = 0
    let month = 0
    let maxDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 当月最大天数
    let index = 0 // maxDay的数组编号
    while (ym1 < ym2) {
        if (m1 === 12) {
            m1 = 1
            y1++
            month++
        } else {
            m1++
            month++
        }
        ym1 = y1 * 100 + m1
    } // 递增到年月相同时停止
    if (d2 >= d1) { // 年月相同且日2>=日1
        day = d2 - d1
    } else { // 年月相同且日2<日1,取上月最大天数计算
        month-- // 最后月，不足一个月
        if (m2 === 1) { // 1月
            index = 11 // 取12月的
        } else if (m2 === 3) { // 2月
            index = 1 // 判断闰年否
            if (y2 % 100 === 0) {
                if (y2 % 400 === 0) {
                    maxDay[1] = 29
                }
            } else if (y2 % 4 === 0) {
                maxDay[1] = 29
            }
        } else {
            index = m2 - 1
        }
        day = maxDay[index] - d1 + d2
    }
    return ((month) ? (month + '月零') : '') + day + '天'
}
