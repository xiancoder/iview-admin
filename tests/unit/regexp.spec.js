/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年10月10日13:35:02
* 语句: npm run test:unit tests/unit/regexp.spec.js
*/

import { expect } from 'chai'
import regexp from '@/utils/regexp.js'

describe('测试正则是否符合要求', function () {
    it('匹配整数，小数限2位', function () {
        expect(regexp.a01.test('12.34')).equal(true)
        expect(regexp.a01.test('12.3')).equal(true)
        expect(regexp.a01.test('12')).equal(true)
        expect(regexp.a01.test('1234')).equal(true)
        expect(regexp.a01.test('123456')).equal(true)
        expect(regexp.a01.test('123456789')).equal(true)
        expect(regexp.a01.test('0.12')).equal(true)
        expect(regexp.a01.test('130130190806023139')).equal(true)
    })
    it('匹配整数限6位，小数限2位（不含0）', function () {
        expect(regexp.a02.test('12.34')).equal(true)
        expect(regexp.a02.test('12.3')).equal(true)
        expect(regexp.a02.test('12')).equal(true)
        expect(regexp.a02.test('1234')).equal(true)
        expect(regexp.a02.test('123456')).equal(true)
        expect(regexp.a02.test('0.12')).equal(true)
    })
    it('匹配整数限6位，小数限2位（包含0）', function () {
        expect(regexp.a03.test('12.34')).equal(true)
        expect(regexp.a03.test('12.3')).equal(true)
        expect(regexp.a03.test('12')).equal(true)
        expect(regexp.a03.test('1234')).equal(true)
        expect(regexp.a03.test('123456')).equal(true)
        expect(regexp.a03.test('0')).equal(true)
        expect(regexp.a03.test('0.12')).equal(true)
    })
    it('15或18位 身份证号', function () {
        expect(regexp.a04.test('320311770706001')).equal(true)
        expect(regexp.a04.test('13013019070131002X')).equal(true)
        expect(regexp.a04.test('130130190806023139')).equal(true)
    })
    it('广义范围手机号', function () {
        expect(regexp.a05.test('13831111444')).equal(true)
        expect(regexp.a05.test('15810875532')).equal(true)
        expect(regexp.a05.test('14420000000')).equal(true)
        expect(regexp.a05.test('12345678912')).equal(true)
        expect(regexp.a05.test('0311-85575234')).equal(true)
    })
})
