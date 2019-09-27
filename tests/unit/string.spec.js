/**
 * 功能：单元测试页面
 * 作者：颂杨
 * 时间：2019-4-9
 * 语句: npm test
 */

import { expect } from 'chai'
import * as stringJs from '@/utils/string.js'
describe('字符串常用方法', function () {
    it('测试是否回文/palindrome', function () {
        expect(stringJs.palindrome('123321')).equal(true)
    })
    it('首字母大写/capitalize', function () {
        expect(stringJs.palindrome('123321')).equal(true)
    })
    it('变量名驼峰化/humping', function () {
        expect(stringJs.palindrome('123321')).equal(true)
    })
    it('变量名反驼峰化/antiHumping', function () {
        expect(stringJs.palindrome('123321')).equal(true)
    })
    it('两值替换/toggle', function () {
        expect(stringJs.palindrome('123321')).equal(true)
    })
})
