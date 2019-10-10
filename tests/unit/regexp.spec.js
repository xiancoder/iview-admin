/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年10月10日13:35:02
* 语句: npm run test:unit tests/unit/regexp.spec.js
*/

import { expect } from 'chai'
import regexp from '@/utils/regexp.js'

// 可以测试哪些数据匹配 哪些不匹配
// 将所有的测试数据都放在数组中 返回匹配上的内容下标
const doloop = (strArr, regexp) => {
    const target = []
    const length = strArr.length
    for (var index in strArr) {
        if (index === 0 || index === length - 1) continue
        const key = strArr[index]
        if (regexp.test(key)) { target.push(index) }
    }
    return target
}

describe('测试正则是否符合要求', function () {
    const strArr = [
        'begin', // 好计数
        '12.34', '12.345', '12.3', '12', '1234', // 1-5 以下类推
        '123456', '123456789', '0', '012', '0.12', // 6-10
        'abc', '你好', 'hu123', '妖妖0', '>_<', // 11-15
        '13013019070131002X', '130130190806023139', '哈_哈', '052410', 'wwx@qwe.com', // 16
        '13831111444', '15810875532', '14420000000', '12345678912', '0311-85575234', // 21
        'end' // 防呆设计
    ]
    it('匹配整数，小数限2位', function () {
        const target = doloop(strArr, regexp.a01)
        expect(target.join()).equal('1,3,4,5,6,7,10,17,21,22,23,24')
    })
    it('匹配整数限6位，小数限2位（不含0）', function () {
        const target = doloop(strArr, regexp.a02)
        expect(target.join()).equal('1,3,4,5,6,10')
    })
    it('匹配整数限6位，小数限2位（包含0）', function () {
        const target = doloop(strArr, regexp.a03)
        expect(target.join()).equal('1,3,4,5,6,8,10')
    })
    it('15或18位 身份证号', function () {
        const target = doloop(strArr, regexp.a04)
        expect(target.join()).equal('16,17')
    })
    it('广义范围手机号', function () {
        const target = doloop(strArr, regexp.a05)
        expect(target.join()).equal('21,22,23,24')
    })
})
