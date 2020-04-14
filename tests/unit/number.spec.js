/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年9月18日16:44:53
* 更新：2019年12月3日15:08:07
* 语句: npm run test:unit tests/unit/number.spec.js
*/

import { expect } from 'chai'
import * as lib from '@/utils'

describe('[数字]常用方法', function () {
    it('数字两位补全/fillup2Digit', function () {
        expect(lib.fillup2Digit(1)).equal('01')
        expect(lib.fillup2Digit(10)).equal('10')
        expect(lib.fillup2Digit(100)).equal('10')
    })
    it('数字转中文(全兼容)/number2Chinese', function () {
        expect(lib.number2Chinese(2.67)).equal('二点六七')
        expect(lib.number2Chinese(23.67)).equal('二十三点六七')
        expect(lib.number2Chinese(20.67)).equal('二十点六七')
        expect(lib.number2Chinese(234.67)).equal('二百三十四点六七')
        expect(lib.number2Chinese(204.67)).equal('二百零四点六七')
        expect(lib.number2Chinese(2345.67)).equal('二千三百四十五点六七')
        expect(lib.number2Chinese(2040.67)).equal('二千零四十点六七')
        expect(lib.number2Chinese(23456.67)).equal('二万三千四百五十六点六七')
        expect(lib.number2Chinese(20006.67)).equal('二万零六点六七')
        expect(lib.number2Chinese(234567.67)).equal('二十三万四千五百六十七点六七')
        expect(lib.number2Chinese(204007.67)).equal('二十万四千零七点六七')
        expect(lib.number2Chinese(2345678.67)).equal('二百三十四万五千六百七十八点六七')
        expect(lib.number2Chinese(20450070.67)).equal('二千零四十五万零七十点六七')
        expect(lib.number2Chinese(23456789.67)).equal('二千三百四十五万六千七百八十九点六七')
        expect(lib.number2Chinese(20202020.67)).equal('二千零二十万二千零二十点六七')
        expect(lib.number2Chinese(5533)).equal('五千五百三十三')
        expect(lib.number2Chinese(5533.1)).equal('五千五百三十三点一')
        expect(lib.number2Chinese(5533.04)).equal('五千五百三十三点零四')
    })
    it('精准四则运算(加减乘除)/add/sub/mul/div', function () {
        // ////////////////////////////////////////////////////////////////////////////
        // 数字计算
        // 为了避免以后可能的计算精度问题
        // 所有的数字业务必须使用工具库来计算
        // ////////////////////////////////////////////////////////////////////////////
        // 原生代码计算浮点数 就是一坨shit
        // 0.1+ 0.2 = 0.30000000000000004
        // 6.6+1.32+1.2+1.2+1.2 = 11.519999999999998
        // 6.6-1.32-1.2-1.2-1.2 = 1.679999999999999
        // 6.6*1.31 = 8.645999999999999
        // 1.1/10 = 0.11000000000000001
        // 1.1/100 = 0.011000000000000001
        // ludash 寄予厚望 依旧是一坨shit 不再尝试
        // _.add(0.1, 0.2) = 0.30000000000000004
        // _.sum([6.6, 1.32, 1.2, 1.2, 1.2]) = 11.519999999999998
        // 精准四则运算方法
        expect(lib.add(1, 1)).equal(2)
        expect(lib.add(0.1, 0.2)).equal(0.3)
        expect(lib.add(0.3, 3)).equal(3.3)
        expect(lib.add(0.9, 0.1)).equal(1)
        expect(lib.add(0.11, 0.2)).equal(0.31)
        expect(lib.add(20000, 0.1)).equal(20000.1)
        expect(lib.add(-2, 4)).equal(2)
        expect(lib.add(-2, -4)).equal(-6)
        expect(lib.add(-2.12345, 2.12345)).equal(0)
        expect(lib.add(102, 2.24)).equal(104.24)
        expect(lib.add(0.369, 369)).equal(369.369)
        expect(lib.add(12, 21)).equal(33)
        expect(lib.add(121212, 131313)).equal(252525)
        expect(lib.add(10000, 0.05)).equal(10000.05)
        expect(lib.add(1132.11, 1233.6)).equal(2365.71)
        expect(lib.add(1132.11, 1233.62)).equal(2365.73)
        expect(lib.add(1132.11, 1233.625)).equal(2365.735)
        expect(lib.add(6.6, 1.32, 1.2, 1.2, 1.2)).equal(11.52)
        // 精准四则运算方法
        expect(lib.sub(1, 1)).equal(0)
        expect(lib.sub(6.6, 1.32, 1.2, 1.2, 1.2)).equal(1.68)
        expect(lib.sub(6.6, 1)).equal(5.6)
        expect(lib.sub(12, 1)).equal(11)
        expect(lib.sub(5, 1.2)).equal(3.8)
        expect(lib.sub(100, 20)).equal(80)
        expect(lib.sub(1000, 1)).equal(999)
        expect(lib.sub(0, 1.22)).equal(-1.22)
        expect(lib.sub(400, 123)).equal(277)
        expect(lib.sub(987654321, 1)).equal(987654320)
        expect(lib.sub(5.22, 9.33)).equal(-4.11)
        expect(lib.sub(1, -1)).equal(2)
        expect(lib.sub(6.656, 0)).equal(6.656)
        expect(lib.sub(6.656, 6.656)).equal(0)
        expect(lib.sub(1132.11, 1233.6)).equal(-101.49)
        expect(lib.sub(1233.6, 1132.11)).equal(101.49)
        expect(lib.sub(110.12, 110)).equal(0.12)
        // 精准四则运算方法
        expect(lib.mul(6.6, 1.32)).equal(8.712)
        expect(lib.mul(1, 1.32)).equal(1.32)
        expect(lib.mul(5, 10)).equal(50)
        expect(lib.mul(1.11, 5)).equal(5.55)
        expect(lib.mul(100, 100)).equal(10000)
        expect(lib.mul(0.01, 100)).equal(1)
        expect(lib.mul(0.1, 0.1)).equal(0.01)
        // 精准四则运算方法
        expect(lib.div(6.6, 1.32)).equal(5)
        expect(lib.div(1.1, 10)).equal(0.11)
        expect(lib.div(100, 5)).equal(20)
        expect(lib.div(50, 25)).equal(2)
        expect(lib.div(250, 0.25)).equal(1000)
        expect(lib.div(100, 100)).equal(1)
        expect(lib.div(0, 1)).equal(0)
        expect(lib.div(500, 1000)).equal(0.5)
        expect(lib.div(6.6, 6.6)).equal(1)
        expect(lib.div(6.666, 6)).equal(1.111)
        // 请注意 传递字符串类型也不会报错 只会转成对应浮点进行计算
        expect(lib.add('2', '4')).equal(6)
        expect(lib.sub('12', '1')).equal(11)
        expect(lib.mul('5', '10')).equal(50)
        expect(lib.div('50', '25')).equal(2)
        /// ///////////////////////////////////////////////////////////////////////////
        // 数字比较
        // 关于“字符串比对的规范”，案例：
        // 案例1：金额为1,999.00元，因为没有对 逗号做处理造成支付不成功；
        // 案例2：小时7:00与21:00比对，因处理不当造成21:00小于7:00
        /// ///////////////////////////////////////////////////////////////////////////
        expect(lib.lt('7', '21')).equal(true)
        expect(lib.lt('1', '11')).equal(true)
        expect(lib.lt('4', '22')).equal(true)
        expect(lib.lt('12', '13')).equal(true)
        expect(lib.lt('15', '51')).equal(true)
        expect(lib.gt('21:00', '7:00')).equal(true)
        expect(lib.gt('11:00', '7:00')).equal(true)
        expect(lib.gt('21:30', '21:21')).equal(true)
        expect(lib.gt('21:11', '7:11')).equal(true)
        expect(lib.eq('1,999.00', '1999')).equal(true)
        expect(lib.eq('1,000.00', '1000')).equal(true)
        expect(lib.eq('1,999,999.00', '1999999')).equal(true)
    })
    it('数字转中文(零至万)/number2Chinese2', function () {
        expect(lib.number2Chinese2(2)).equal('二')
        expect(lib.number2Chinese2(22)).equal('二十二')
        expect(lib.number2Chinese2(222)).equal('二百二十二')
        expect(lib.number2Chinese2(2222)).equal('二千二百二十二')
    })
    it('数字千分格式/thousand', function () {
        expect(lib.thousand(2)).equal('2')
        expect(lib.thousand(22)).equal('22')
        expect(lib.thousand(222)).equal('222')
        expect(lib.thousand(2222)).equal('2,222')
        expect(lib.thousand(1234567890)).equal('1,234,567,890')
        expect(lib.thousand(222.2)).equal('222.2')
        expect(lib.thousand(22.22)).equal('22.22')
        expect(lib.thousand(2.222)).equal('2.222')
        expect(lib.thousand(1234567.890)).equal('1,234,567.89')
        expect(lib.thousand('1234567.890')).equal('1,234,567.890')
        expect(lib.thousand('9999.99')).equal('9,999.99')
        expect(lib.thousand(9999.00)).equal('9,999')
        expect(lib.thousand('9999.00')).equal('9,999.00')
    })
    it('银行卡号/bankCartNum', function () {
        expect(lib.bankCartNum('6839202023030939201')).equal('6839 2020 2303 0939 201')
        expect(lib.bankCartNum('6839202023030939201', '  ', 4)).equal('6839  2020  2303  0939  201')
        expect(lib.bankCartNum('6839202023030939201', '-', 4)).equal('6839-2020-2303-0939-201')
        expect(lib.bankCartNum('6839202023030939201', ' ', 2)).equal('68 39 20 20 23 03 09 39 20 1')
    })
    it('数字估算/estimate', function () {
        expect(lib.estimate(12.33)).equal('12')
        expect(lib.estimate(123456)).equal('12万')
        expect(lib.estimate(12345)).equal('1.2万')
        expect(lib.estimate(1234)).equal('1234')
        expect(lib.estimate(123)).equal('123')
        expect(lib.estimate(12)).equal('12')
        expect(lib.estimate2(12.33)).equal('12')
        expect(lib.estimate2(123456)).equal('12万')
        expect(lib.estimate2(12345)).equal('1.2万')
        expect(lib.estimate2(1234)).equal('1234')
        expect(lib.estimate2(123)).equal('123')
        expect(lib.estimate2(12)).equal('12')
    })
    it('数字转大写金额/money2Chinese', function () {
        expect(lib.money2Chinese(2.67)).equal('贰圆陆角柒分')
        expect(lib.money2Chinese(23.67)).equal('贰拾叁圆陆角柒分')
        expect(lib.money2Chinese(20.67)).equal('贰拾圆陆角柒分')
        expect(lib.money2Chinese(234.67)).equal('贰佰叁拾肆圆陆角柒分')
        expect(lib.money2Chinese(204.67)).equal('贰佰零肆圆陆角柒分')
        expect(lib.money2Chinese(2345.67)).equal('贰仟叁佰肆拾伍圆陆角柒分')
        expect(lib.money2Chinese(2040.67)).equal('贰仟零肆拾圆陆角柒分')
        expect(lib.money2Chinese(23456.67)).equal('贰万叁仟肆佰伍拾陆圆陆角柒分')
        expect(lib.money2Chinese(20006.67)).equal('贰万零陆圆陆角柒分')
        expect(lib.money2Chinese(234567.67)).equal('贰拾叁万肆仟伍佰陆拾柒圆陆角柒分')
        expect(lib.money2Chinese(204007.67)).equal('贰拾万零肆仟零柒圆陆角柒分')
        expect(lib.money2Chinese(2345678.67)).equal('贰佰叁拾肆万伍仟陆佰柒拾捌圆陆角柒分')
        expect(lib.money2Chinese(20450070.67)).equal('贰仟零肆拾伍万零柒拾圆陆角柒分')
        expect(lib.money2Chinese(23456789.67)).equal('贰仟叁佰肆拾伍万陆仟柒佰捌拾玖圆陆角柒分')
        expect(lib.money2Chinese(20202020.67)).equal('贰仟零贰拾万零贰仟零贰拾圆陆角柒分')
        expect(lib.money2Chinese(5533)).equal('伍仟伍佰叁拾叁圆整')
        expect(lib.money2Chinese(5533.1)).equal('伍仟伍佰叁拾叁圆壹角')
        expect(lib.money2Chinese(5533.04)).equal('伍仟伍佰叁拾叁圆肆分')
        expect(lib.money2Chinese(1191.86)).equal('壹仟壹佰玖拾壹圆捌角陆分')
        expect(lib.money2Chinese(891.86)).equal('捌佰玖拾壹圆捌角陆分')
        expect(lib.money2Chinese(891.80)).equal('捌佰玖拾壹圆捌角')
    })
    it('数字保留x位小数/toDecimal', function () {
        expect(lib.toDecimal(123.1211)).equal(123.12)
        expect(lib.toDecimal(123.1299)).equal(123.13)
        expect(lib.toDecimal(123.13)).equal(123.13)
        expect(lib.toDecimal(123.1)).equal(123.1)
        expect(lib.toDecimal(123)).equal(123)
        expect(lib.toDecimal(123.1211, 3)).equal(123.121)
        expect(lib.toDecimal(123.1299, 3)).equal(123.13)
        expect(lib.toDecimal(123.1211, 0)).equal(123.12)
        expect(lib.toDecimal(123.1299, 5)).equal(123.1299)
    })
    it('数字强制保留x位小数(不四舍五入,且补零)/toDecimalForce', function () {
        expect(lib.toDecimalForce(123.1211)).equal('123.12')
        expect(lib.toDecimalForce(123.1211, 1)).equal('123.1')
        expect(lib.toDecimalForce(123.1211, 3)).equal('123.121')
        expect(lib.toDecimalForce(123.1211, 0)).equal('123.12')
        expect(lib.toDecimalForce(123.1)).equal('123.10')
        expect(lib.toDecimalForce(123.1, 1)).equal('123.1')
        expect(lib.toDecimalForce(123.1, 3)).equal('123.100')
        expect(lib.toDecimalForce(123.1211, 5)).equal('123.12110')
    })
    it('数字强制规范成2小数(不四舍五入)/toDecimalFormat', function () {
        expect(lib.toDecimalFormat(123.1211)).equal('123.12')
        expect(lib.toDecimalFormat(123.121)).equal('123.12')
        expect(lib.toDecimalFormat(123.1)).equal('123.1')
        expect(lib.toDecimalFormat(123)).equal('123')
        expect(lib.toDecimalFormat(123.12112342342)).equal('123.12')
    })
})
