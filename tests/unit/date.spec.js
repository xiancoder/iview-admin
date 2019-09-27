/**
 * 功能：单元测试页面
 * 作者：liuyp
 * 时间：2019年8月14日13:59:06
 * 时间：2019年9月18日16:34:52
 * 语句: npm test
 */

import { expect } from 'chai'
import * as dateJs from '@/utils/date.js'
describe('[日期]常用方法', function () {
    it('时间戳转日期/timestamp2Date', function () {
        expect(dateJs.timestamp2Date('1553765124101')).equal('2019-03-28 17:25:24')
        expect(dateJs.timestamp2Date('1553765124')).equal('2019-03-28 17:25:24')
        expect(dateJs.timestamp2Date(1553765124101)).equal('2019-03-28 17:25:24')
        expect(dateJs.timestamp2Date(1553765124)).equal('2019-03-28 17:25:24')
    })
    it('字符串转日期对象/dateObj', function () {
        expect(dateJs.dateObj('2017-11-12 13:14:15').getTime()).equal(new Date(2017, 10, 12, 13, 14, 15).getTime())
        expect(dateJs.dateObj('2017-11-12 13:14').getTime()).equal(new Date(2017, 10, 12, 13, 14, 0).getTime())
        expect(dateJs.dateObj('2017-11-12').getTime()).equal(new Date(2017, 10, 12, 0, 0, 0).getTime())
        expect(dateJs.dateObj('2017/11/12 13:14:15').getTime()).equal(new Date(2017, 10, 12, 13, 14, 15).getTime())
        expect(dateJs.dateObj('2017/11/12').getTime()).equal(new Date(2017, 10, 12, 0, 0, 0).getTime())
    })
    it('两日期是否相等/dateEqual', function () {
        expect(dateJs.dateEqual('y', dateJs.dateObj('2009-1-12 16:43:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('m', dateJs.dateObj('2009-12-14 16:43:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('d', dateJs.dateObj('2009-12-12 14:43:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('h', dateJs.dateObj('2009-12-12 16:46:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('n', dateJs.dateObj('2009-12-12 16:43:38'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
        expect(dateJs.dateEqual('s', dateJs.dateObj('2009-12-12 16:43:33'), dateJs.dateObj('2009-12-12 16:43:33'))).equal(true)
    })
    const today = dateJs.dateObj('2017-11-12 13:14:15')
    it('日期指定格式化/dateFormater', function () {
        expect(dateJs.dateFormater(today)).equal('2017-11-12 13:14:15')
        expect(dateJs.dateFormater(today, 'YYYY-MM-DD HH:mm:ss')).equal('2017-11-12 13:14:15')
        expect(dateJs.dateFormater(today, 'YYYY-MM-DD')).equal('2017-11-12')
    })
    it('日期加减法/dateAdd', function () {
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 's'))).equal('2017-11-12 13:14:17')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'm'))).equal('2017-11-12 13:16:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'h'))).equal('2017-11-12 15:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'd'))).equal('2017-11-14 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'w'))).equal('2017-11-26 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'q'))).equal('2018-05-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'M'))).equal('2018-01-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateAdd(today, 2, 'y'))).equal('2019-11-12 13:14:15')
    })
    it('日期加减法/dateSub', function () {
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 's'))).equal('2017-11-12 13:14:13')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'm'))).equal('2017-11-12 13:12:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'h'))).equal('2017-11-12 11:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'd'))).equal('2017-11-10 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'w'))).equal('2017-10-29 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'q'))).equal('2017-05-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'M'))).equal('2017-09-12 13:14:15')
        expect(dateJs.dateFormater(dateJs.dateSub(today, 2, 'y'))).equal('2015-11-12 13:14:15')
    })
    it('测试根据日期计算计薪周期/computeRange', function () {
        expect(dateJs.computeRange(new Date(2019, 1 - 1, 1)).toString() === '2018-12-26,2019-01-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 2 - 1, 4)).toString() === '2019-01-26,2019-02-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 3 - 1, 7)).toString() === '2019-02-26,2019-03-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 4 - 1, 10)).toString() === '2019-03-26,2019-04-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 5 - 1, 13)).toString() === '2019-04-26,2019-05-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 6 - 1, 17)).toString() === '2019-05-26,2019-06-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 7 - 1, 20)).toString() === '2019-06-26,2019-07-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 8 - 1, 23)).toString() === '2019-07-26,2019-08-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 9 - 1, 27)).toString() === '2019-09-26,2019-10-25').equal(true)
        expect(dateJs.computeRange(new Date(2019, 10 - 1, 30)).toString() === '2019-10-26,2019-11-25').equal(true)
    })
    it('测试根据年月计算计薪周期/computeRangeByMouth', function () {
        expect(dateJs.computeRangeByMouth(2019, 1).toString() === '2018-12-26,2019-01-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 2).toString() === '2019-01-26,2019-02-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 3).toString() === '2019-02-26,2019-03-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 4).toString() === '2019-03-26,2019-04-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 5).toString() === '2019-04-26,2019-05-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 6).toString() === '2019-05-26,2019-06-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 7).toString() === '2019-06-26,2019-07-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 8).toString() === '2019-07-26,2019-08-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 9).toString() === '2019-08-26,2019-09-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 10).toString() === '2019-09-26,2019-10-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 11).toString() === '2019-10-26,2019-11-25').equal(true)
        expect(dateJs.computeRangeByMouth(2019, 12).toString() === '2019-11-26,2019-12-25').equal(true)
    })
})
