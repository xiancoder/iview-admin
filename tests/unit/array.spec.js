/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年9月18日16:46:14
* 语句: npm run test:unit tests/unit/array.spec.js
*/

import { expect } from 'chai'
import * as lib from '@/utils'

describe('[数组]常用方法', function () {
    it('数组去重唯一化/unique', function () {
        expect(lib.unique([1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 6, 7, 7, 7]).toString()).equal('1,2,3,4,5,6,7')
    })
    it('数组去重唯一化(对象数组)/arrayUnique', function () {
        expect(lib.arrayUnique([1, 2, 3, 1, 2, 3]).length).equal(3)
        expect(lib.arrayUnique([{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }], 'id').length).equal(3)
    })
    it('数组去重唯一化 (完美版)(推荐)/arrayUnique', function () {
        expect(lib.arrayUnique([1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 6, 7, 7, 7]).toString()).equal('1,2,3,4,5,6,7')
        expect(lib.arrayUnique([0, 2, 3, 3, 3, 4, 5, 6, null, 6, 6, 7, 7, 7]).toString()).equal('0,2,3,4,5,6,,7')
    })
    it('测试数组两个数组是否一致', function () {
        expect(lib.contrast([1, 2, 3, 4], [1, 2, 3, 4])).equal(true)
        expect(lib.contrast([1, 2, 3, 4], [true, 2, 3, 4])).equal(false)
        expect(lib.contrast([1, 2, 0, 4], [1, 2, false, 4])).equal(false)
    })
    it('数组简化为一维/arrayFlatten', function () {
        expect(lib.arrayFlatten([1, [2, 3], 4, [5, [6, [7, [8]]], 9], 0]).toString()).equal('1,2,3,4,5,6,7,8,9,0')
    })
    it('得到两个数组的并集/arrayUnion', function () {
        expect(lib.arrayUnion([1, 2, 3], [2, 3, 4]).toString()).equal('1,2,3,4')
    })
})
