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
        expect(stringJs.capitalize('abc')).equal('Abc')
        expect(stringJs.upperFirst('fred')).equal('Fred')
    })
    it('全角字符/dbc2Sbc', function () {
        expect(stringJs.dbc2Sbc('ａｂｃ１２３')).equal('abc123')
    })
    it('变量名驼峰化/humping', function () {
        expect(stringJs.humping('ab-cd')).equal('abCd')
        expect(stringJs.camelCase('Foo Bar')).equal('fooBar')
        expect(stringJs.camelCase('--foo-bar--')).equal('fooBar')
        expect(stringJs.camelCase('__FOO_BAR__')).equal('fooBar')
    })
    it('变量名反驼峰化/antiHumping', function () {
        expect(stringJs.antiHumping('abCd')).equal('ab-cd')
        expect(stringJs.kebabCase('Foo Bar')).equal('foo-bar')
        expect(stringJs.kebabCase('fooBar')).equal('foo-bar')
        expect(stringJs.kebabCase('__FOO_BAR__')).equal('foo-bar')
    })
    it('两值替换/toggle', function () {
        expect(stringJs.toggle('a', 'a', 'b')).equal('b')
        expect(stringJs.toggle('AA', 'AA', 'BB')).equal('BB')
    })
    it('重复执行/repeat', function () {
        expect(stringJs.repeat('*', 3)).equal('***')
        expect(stringJs.repeat('abc', 2)).equal('abcabc')
        expect(stringJs.repeat('abc', 0)).equal('')
    })
})
