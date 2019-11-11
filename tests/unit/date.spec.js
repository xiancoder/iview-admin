/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年8月14日13:59:06
* 时间：2019年9月18日16:34:52
* 时间：2019年10月3日23:29:22
* 语句: npm run test:unit tests/unit/date.spec.js
*/

import { expect } from 'chai'
import * as dateJs from '@/utils/date.js'

describe('[日期]常用方法', function () {
    it('根据日期计算星座/date2xz', function () {
        expect(dateJs.date2xz(new Date(1987, 0, 31))).equal('水瓶')
        expect(dateJs.date2xz(new Date(1988, 5, 2))).equal('双子')
        expect(dateJs.date2xz(new Date(1987, 0, 3))).equal('摩羯')
        expect(dateJs.date2xz(new Date(2019, 8, 3))).equal('处女')
        expect(dateJs.date2xz(new Date(2019, 9, 26))).equal('天蝎')
    })
    it('根据日期计算天干地支/date2gz', function () {
        expect(dateJs.date2gz(new Date(2005, 1, 1))).equal('乙酉')
        expect(dateJs.date2gz(new Date(2019, 1, 1))).equal('己亥')
    })
    it('根据日期计算属相/date2sx', function () {
        expect(dateJs.date2sx(new Date(1987, 1, 1))).equal('兔')
        expect(dateJs.date2sx(new Date(1988, 1, 1))).equal('龙')
        expect(dateJs.date2sx(new Date(2019, 1, 1))).equal('猪')
        expect(dateJs.date2sx(new Date(2020, 1, 1))).equal('鼠')
    })
    it('根据日期计算农历时间/date2cnDate', function () {
        expect(dateJs.date2cnDate(new Date(1987, 0, 31))).equal('正月初三')
        expect(dateJs.date2cnDate(new Date(2019, 9, 3))).equal('九月初五')
    })
    it('根据日期查看二十四节气/date2jieqi', function () {
        expect(dateJs.date2jieqi(new Date(1987, 9, 24))).equal('霜降')
        expect(dateJs.date2jieqi(new Date(1987, 9, 9))).equal('寒露')
        expect(dateJs.date2jieqi(new Date(2019, 9, 24))).equal('霜降')
    })
    it('根据日期判断是否闰年/date2isLeapYear', function () {
        expect(dateJs.date2isLeapYear(new Date(1987, 1, 1))).equal(false)
        expect(dateJs.date2isLeapYear(new Date(1988, 1, 1))).equal(true)
        expect(dateJs.date2isLeapYear(new Date(2019, 1, 1))).equal(false)
        expect(dateJs.date2isLeapYear(new Date(2020, 1, 1))).equal(true)
        expect(dateJs.date2isLeapYear(new Date(2000, 1, 1))).equal(true)
        expect(dateJs.isLeapYear(new Date(1987, 1, 1))).equal(false)
        expect(dateJs.isLeapYear(new Date(1988, 1, 1))).equal(true)
        expect(dateJs.isLeapYear(new Date(2019, 1, 1))).equal(false)
        expect(dateJs.isLeapYear(new Date(2020, 1, 1))).equal(true)
        expect(dateJs.isLeapYear(new Date(2000, 1, 1))).equal(true)
        expect(dateJs.isLeapYear([2000])).equal(true)
        expect(dateJs.isLeapYear([2001])).equal(false)
        expect(dateJs.isLeapYear([2100])).equal(false)
    })
    it('根据日期获取完整信息/date2all', function () {
        expect(dateJs.date2all(new Date(1987, 0, 31))).equal('丁卯(兔)年 正月初三 无节气')
        expect(dateJs.date2all(new Date(1988, 5, 2))).equal('戊辰(龙)年 (闰)四月十八 无节气')
        expect(dateJs.date2all(new Date(2008, 7, 1))).equal('戊子(鼠)年 (闰)七月初一 无节气')
    })
    it('根据日期进行格式化/dateFormater和dateFormat', function () {
        const today = dateJs.dateObj('2017-11-12 13:14:15')
        expect(dateJs.dateFormater(today)).equal('2017-11-12 13:14:15')
        expect(dateJs.dateFormater(today, 'YYYY-MM-DD HH:mm:ss')).equal('2017-11-12 13:14:15')
        expect(dateJs.dateFormater(today, 'YYYY-MM-DD')).equal('2017-11-12')
        expect(dateJs.dateFormat(today)).equal('2017-11-12')
        expect(dateJs.dateFormat(new Date(1988, 5, 2))).equal('1988-06-02')
        expect(dateJs.dateFormat([2017, 1 - 1, 1])).equal('2017-01-01')
        expect(dateJs.dateFormat(1573454365066)).equal('2019-11-11')
    })
    it('根据日期获取往前一周时间/sevenRange', function () {
        expect(dateJs.sevenRange(new Date(2009, 6, 6)).join(',')).equal('2009-06-30,2009-07-06')
        expect(dateJs.sevenRange(new Date(2019, 9, 3)).join(',')).equal('2019-09-27,2019-10-03')
        expect(dateJs.sevenRange(new Date(2019, 8, 13)).join(',')).equal('2019-09-07,2019-09-13')
        expect(dateJs.sevenRange(new Date(2019, 7, 6)).join(',')).equal('2019-07-31,2019-08-06')
    })
    it('根据时间戳获得日期字符串/timestamp2Date', function () {
        expect(dateJs.timestamp2Date('1553765124101')).equal('2019-03-28 17:25:24')
        expect(dateJs.timestamp2Date('1553765124')).equal('2019-03-28 17:25:24')
        expect(dateJs.timestamp2Date(1553765124101)).equal('2019-03-28 17:25:24')
        expect(dateJs.timestamp2Date(1553765124)).equal('2019-03-28 17:25:24')
    })
    it('根据格式字符串转日期对象/dateObj', function () {
        expect(dateJs.dateObj('2017-11-12 13:14:15').getTime()).equal(new Date(2017, 10, 12, 13, 14, 15).getTime())
        expect(dateJs.dateObj('2017-11-12 13:14').getTime()).equal(new Date(2017, 10, 12, 13, 14, 0).getTime())
        expect(dateJs.dateObj('2017-11-12').getTime()).equal(new Date(2017, 10, 12, 0, 0, 0).getTime())
        expect(dateJs.dateObj('2017/11/12 13:14:15').getTime()).equal(new Date(2017, 10, 12, 13, 14, 15).getTime())
        expect(dateJs.dateObj('2017/11/12').getTime()).equal(new Date(2017, 10, 12, 0, 0, 0).getTime())
    })
    it('根据两日期对象判断是否相等/dateEqual', function () {
        expect(dateJs.dateEqual('y', dateJs.dateObj('2009-1-12 16:43:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('m', dateJs.dateObj('2009-12-14 16:43:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('d', dateJs.dateObj('2009-12-12 14:43:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('h', dateJs.dateObj('2009-12-12 16:46:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('n', dateJs.dateObj('2009-12-12 16:43:38'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('s', dateJs.dateObj('2009-12-12 16:43:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
    })
    it('日期加减法/dateAdd和dateSub', function () {
        const today = new Date(2017, 10, 12, 13, 14, 15)
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 's'))).equal('2017-11-12 13:14:17')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'm'))).equal('2017-11-12 13:16:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'h'))).equal('2017-11-12 15:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'd'))).equal('2017-11-14 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'w'))).equal('2017-11-26 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'q'))).equal('2018-05-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'M'))).equal('2018-01-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'y'))).equal('2019-11-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 's'))).equal('2017-11-12 13:14:13')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'm'))).equal('2017-11-12 13:12:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'h'))).equal('2017-11-12 11:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'd'))).equal('2017-11-10 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'w'))).equal('2017-10-29 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'q'))).equal('2017-05-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'M'))).equal('2017-09-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'y'))).equal('2015-11-12 13:14:15')
    })
    it('根据日期计算计薪周期/computeRange', function () {
        expect(dateJs.computeRange(new Date(2019, 1 - 1, 1)).toString()).equal('2018-12-26,2019-01-25')
        expect(dateJs.computeRange(new Date(2019, 2 - 1, 4)).toString()).equal('2019-01-26,2019-02-25')
        expect(dateJs.computeRange(new Date(2019, 3 - 1, 7)).toString()).equal('2019-02-26,2019-03-25')
        expect(dateJs.computeRange(new Date(2019, 4 - 1, 10)).toString()).equal('2019-03-26,2019-04-25')
        expect(dateJs.computeRange(new Date(2019, 5 - 1, 13)).toString()).equal('2019-04-26,2019-05-25')
        expect(dateJs.computeRange(new Date(2019, 6 - 1, 17)).toString()).equal('2019-05-26,2019-06-25')
        expect(dateJs.computeRange(new Date(2019, 7 - 1, 20)).toString()).equal('2019-06-26,2019-07-25')
        expect(dateJs.computeRange(new Date(2019, 8 - 1, 23)).toString()).equal('2019-07-26,2019-08-25')
        expect(dateJs.computeRange(new Date(2019, 9 - 1, 27)).toString()).equal('2019-09-26,2019-10-25')
        expect(dateJs.computeRange(new Date(2019, 10 - 1, 30)).toString()).equal('2019-10-26,2019-11-25')
    })
    it('两日期相差间隔/timeLong', function () {
        expect(dateJs.timeLong('2016.01.01 16:00:00', '2016.08.26 22:40:00')).equal('7个月25天6小时40分钟')
        expect(dateJs.timeLong('2016.08.26 22:40:00', '2016.08.26 22:40:00')).equal('刚刚')
        expect(dateJs.timeLong('2016.01.01 08:20:00', '2017.08.26 16:45:36')).equal('1年7个月25天8小时25分钟')
        expect(dateJs.timeLong('2016.01.01 16:00:00', '2016.01.26 22:40:00')).equal('25天6小时40分钟')
        expect(dateJs.timeLong('2016.01.01 16:00:00', '2016.01.01 22:40:00')).equal('6小时40分钟')
        expect(dateJs.timeLong('2019.09.30 24:00:00', '2019.10.06 24:00:00')).equal('6天')
        expect(dateJs.timeLong2('20191005', '20191008')).equal('3天')
        expect(dateJs.timeLong2('20190930', '20191006')).equal('7天')
        expect(dateJs.timeLong2('20190905', '20191008')).equal('1月零3天')
        expect(dateJs.timeLong2('20190105', '20191008')).equal('9月零3天')
    })
    it('根据年月计算计薪周期/computeRangeByMouth', function () {
        expect(dateJs.computeRangeByMouth(2019, 1).toString()).equal('2018-12-26,2019-01-25')
        expect(dateJs.computeRangeByMouth(2019, 2).toString()).equal('2019-01-26,2019-02-25')
        expect(dateJs.computeRangeByMouth(2019, 3).toString()).equal('2019-02-26,2019-03-25')
        expect(dateJs.computeRangeByMouth(2019, 4).toString()).equal('2019-03-26,2019-04-25')
        expect(dateJs.computeRangeByMouth(2019, 5).toString()).equal('2019-04-26,2019-05-25')
        expect(dateJs.computeRangeByMouth(2019, 6).toString()).equal('2019-05-26,2019-06-25')
        expect(dateJs.computeRangeByMouth(2019, 7).toString()).equal('2019-06-26,2019-07-25')
        expect(dateJs.computeRangeByMouth(2019, 8).toString()).equal('2019-07-26,2019-08-25')
        expect(dateJs.computeRangeByMouth(2019, 9).toString()).equal('2019-08-26,2019-09-25')
        expect(dateJs.computeRangeByMouth(2019, 10).toString()).equal('2019-09-26,2019-10-25')
        expect(dateJs.computeRangeByMouth(2019, 11).toString()).equal('2019-10-26,2019-11-25')
        expect(dateJs.computeRangeByMouth(2019, 12).toString()).equal('2019-11-26,2019-12-25')
    })
    it('查看日期是否没有过期/isDateNotBeOverdue', function () {
        expect(dateJs.isDateNotBeOverdue(21312445)).equal(false) // 這種非標準的時間戳只會轉成1970這種,已經過期
        expect(dateJs.isDateNotBeOverdue(undefined)).equal(false) // 传入undefined为false,不传参就是undefined
        expect(dateJs.isDateNotBeOverdue(null)).equal(false) // 传入null虽然返回0,但也是false
        expect(dateJs.isDateNotBeOverdue('1988-10-21')).equal(false) // 歷史悠久的也是錯的
        expect(dateJs.isDateNotBeOverdue('1970-13-51')).equal(false) // 非標準格式的返回false
        expect(dateJs.isDateNotBeOverdue('s2018ww-13-51')).equal(false) // 非標準的日期也是false
        expect(dateJs.isDateNotBeOverdue('safdaserw')).equal(false) // 普通字符串會返回fasle
        expect(dateJs.isDateNotBeOverdue(1533097116565, new Date(2018, 11, 2))).equal(false) // 已經過期
        expect(dateJs.isDateNotBeOverdue(1544284800000, new Date(2018, 11, 2))).equal(true)
        expect(dateJs.isDateNotBeOverdue('2018-12-01', new Date(2018, 11, 2))).equal(false) // 標準格式的返回true
        expect(dateJs.isDateNotBeOverdue('2018/12/09', new Date(2018, 11, 2))).equal(true) // 標準格式的返回true
        expect(dateJs.isDateNotBeOverdue(+new Date(2018, 11, 2, 10, 10, 10), new Date(2018, 11, 2, 12, 0, 0))).equal(false)
        expect(dateJs.isDateNotBeOverdue(+new Date(2018, 11, 2, 11, 10, 10), new Date(2018, 11, 2, 12, 0, 0))).equal(false)
        expect(dateJs.isDateNotBeOverdue(+new Date(2018, 11, 2, 12, 10, 10), new Date(2018, 11, 2, 12, 0, 0))).equal(true)
        expect(dateJs.isDateNotBeOverdue(+new Date(2018, 11, 2, 14, 10, 10), new Date(2018, 11, 2, 12, 0, 0))).equal(true)
        expect(dateJs.isDateNotBeOverdue(+new Date(2018, 11, 2, 17, 10, 10), new Date(2018, 11, 2, 12, 0, 0))).equal(true)
        expect(dateJs.isDateNotBeOverdue(+new Date(2018, 11, 3, 10, 10, 10), new Date(2018, 11, 2, 12, 0, 0))).equal(true)
        expect(dateJs.isDateNotBeOverdue(+new Date(2018, 11, 6, 10, 10, 10), new Date(2018, 11, 2, 12, 0, 0))).equal(true)
        expect(dateJs.isDateNotBeOverdue(+new Date(2018, 10, 2, 10, 10, 10), new Date(2018, 11, 2, 12, 0, 0))).equal(false)
    })
})
