import { shallowMount, mount } from '@vue/test-utils'
import C039unitTest from '@V/exp2/039unitTest'
import axios from 'axios'

jest.mock('axios')
jest.mock('@/api/staff', () => ({
    JobList: jest.fn(() => Promise.resolve({ data: [1, 2, 3, 4, 5] })),
    restList: jest.fn(() => Promise.resolve({ data: {} }))
}))

describe('样例', () => {
    it('简单比较', () => {
        expect(1 + 2).toBe(3)
    })
    it('deep比较', () => {
        let data = {one: 1}
        data['two'] = 2
        expect(data).toEqual({ one: 1, two: 2 })
    })
    it('比较不相等', () => {
        expect(1 + 2).not.toBe(0)
    })
    it('结果为null', () => {
        let n = null
        expect(n).toBeNull()
        expect(n).toBeDefined()
        expect(n).not.toBeUndefined()
        expect(n).not.toBeTruthy()
        expect(n).toBeFalsy()
    })
    it('结果为0', () => {
        let z = 0;
        expect(z).not.toBeNull()
        expect(z).toBeDefined()
        expect(z).not.toBeUndefined()
        expect(z).not.toBeTruthy()
        expect(z).toBeFalsy()
    })
    it('数字比较大小', () => {
        let value = 2 + 2
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(3.5)
        expect(value).toBeLessThan(5)
        expect(value).toBeLessThanOrEqual(4.5)
        expect(value).toBe(4)
        expect(value).toEqual(4)
    })
    it('文本正则匹配', () => {
        expect('Christoph').toMatch(/stop/)
        expect('team').not.toMatch(/I/)
    })
    let shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer']
    it('数组包含', () => {
        expect(shoppingList).toContain('beer')
    })
})

describe.skip('跳过测试，不用大规模注释代码', () => {
    let foo = false;
    it('slip是否执行', () => {
        expect(foo).toBe(false)
    })
})

// 不知道为啥有好多红色报警信息
describe.skip('测试异步行为', () => {
    it('fetches async when a button is clicked', done => {
        const wrapper = shallowMount(C039unitTest)
        wrapper.find('button').trigger('click')
        expect(wrapper.vm.value).toBe(null)
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.value).toBe('value')
            done()
        })
    })
})

describe('039unitTest', () => {
    const wrapper1 = mount(C039unitTest)
    const wrapper2 = shallowMount(C039unitTest)
    it('是个vue页面', () => {
        expect(wrapper1.isVueInstance()).toBeTruthy()
    })
    it('点击实时执行', () => {
        wrapper2.find('button#aaa').trigger('click')
        expect(wrapper2.find('div#bbb').text()).toContain('1')
    })
    it('mock假装ajax', done => {
        // wrapper2.vm.getJobList() // 直接这样调用 this会混乱
        wrapper2.find('button#ggg2').trigger('click')
        expect(wrapper2.vm.jList.length).toBe(0)
        wrapper2.vm.$nextTick(() => {
            expect(wrapper2.vm.jList.length).toBe(5)
            done()
        })
    }, 10e3)
})
