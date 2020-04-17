/**
* 功能：单元测试页面
* 作者：颂杨
* 时间：2019-4-9
* 语句: npm run test:unit tests/unit/string.spec.js
*/

import { expect } from 'chai'
import * as lib from '@/utils'

describe('字符串常用方法', function () {
    it('测试是否回文/palindrome', function () {
        expect(lib.palindrome('123321')).equal(true)
    })
    it('首字母大写/capitalize', function () {
        expect(lib.capitalize('abc')).equal('Abc')
    })
    it('全角字符/dbc2Sbc', function () {
        expect(lib.dbc2Sbc('ａｂｃ１２３')).equal('abc123')
    })
    it('变量名驼峰化/humping', function () {
        expect(lib.humping('ab-cd')).equal('abCd')
        expect(lib.camelCase('Foo Bar')).equal('fooBar')
        expect(lib.camelCase('--foo-bar--')).equal('fooBar')
        expect(lib.camelCase('__FOO_BAR__')).equal('fooBar')
    })
    it('变量名反驼峰化/antiHumping', function () {
        expect(lib.antiHumping('abCd')).equal('ab-cd')
        expect(lib.kebabCase('Foo Bar')).equal('foo-bar')
        expect(lib.kebabCase('fooBar')).equal('foo-bar')
        expect(lib.kebabCase('__FOO_BAR__')).equal('foo-bar')
    })
    it('两值替换/toggle', function () {
        expect(lib.toggle('a', 'a', 'b')).equal('b')
        expect(lib.toggle('AA', 'AA', 'BB')).equal('BB')
    })
    it('重复执行/repeat', function () {
        expect(lib.repeat('*', 3)).equal('***')
        expect(lib.repeat('abc', 2)).equal('abcabc')
        expect(lib.repeat('abc', 0)).equal('')
    })
    it('解析一个url请求/url2obj', function () {
        const url = 'https://www.baidu.com/s?wd=aaa&pn=10&oq=bbb&tn=ccc&ie=utf-8&rsv_idx=2&rsv_pq=ddd&rsv_t=fff'
        const url1 = lib.url2obj(url)
        expect(url1.wd).equal('aaa')
        expect(url1.pn).equal('10')
        const url2 = { a: 111, b: 222, c: 333 }
        expect('https://www.baidu.com/s?' + lib.obj2url(url2)).equal('https://www.baidu.com/s?a=111&b=222&c=333')
        expect(lib.obj2url({ a: '', b: '', c: '' })).equal('a=&b=&c=')
        expect(lib.obj2url({ a: ' aa', b: 'b b', c: 'cc ' })).equal('a=%20aa&b=b%20b&c=cc%20')
        expect(lib.obj2url({ ' aa': 'a', 'b b': 'b', 'cc ': 'c' })).equal('aa=a&b%20b=b&cc=c')
        expect(lib.obj2url({ a: '=', b: '=', c: '=' })).equal('a=%3D&b=%3D&c=%3D')
        expect(lib.urlChange('https://www.baidu.com/s?a=111&b=222&c=333', 'a', 222)).equal('https://www.baidu.com/s?a=222&b=222&c=333')
    })
})
