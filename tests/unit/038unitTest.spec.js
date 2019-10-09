import { shallowMount, createLocalVue } from '@vue/test-utils'
import fromTest from '@V/exp2/038unitTest'
import axios from 'axios'
import iView from 'iview'
import '@/tools' // 常用工具 -挂载$tool
import '@/utils' // 常用方法 -挂载$util
// mock掉整个axios模块
// 返回值在使用的时候自定义
jest.mock('@/api/unit.js', () => ({
    getDetail: jest.fn(() => Promise.resolve({
        input1: '1111', // 输入框测试
        input2: '1111' // 输入框测试
    })),
    submit: jest.fn(() => Promise.resolve({
        res: 1
    }))
}))
// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.use(iView)
// skip语法可以跳过测试，不用大规模注释代码
describe.skip('skip', () => {
    let foo = false
    it('slip是否执行', () => {
        expect(foo).toBe(false)
    })
});
describe('[单元测试038.表单单元流程]', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(fromTest, { localVue })
    })
    afterEach(() => {
        wrapper.destroy()
    })
    it('axios test', done => {
        return wrapper.vm.init().then(result => {
            const mockFn1 = jest.fn()
            wrapper.setMethods({ '$tool': { 'jumpto': mockFn1 } })
            expect(wrapper.vm.frm).toEqual({ input1: '1111', input2: '1111' }) // 输入框测试
            // ======================== 测试
            const textInput = wrapper.find('input')
            textInput.setValue('4444')
            expect(textInput.element.value).toEqual('4444') // 改变值
            // ==================
            /*
            const target = wrapper.find('#cacaca1')
            // target.setData({ value: '2222' })
            target.vm.$emit('input', '2222')
            expect(target.props().value).toEqual('2222')
            const target2 = wrapper.find('#cacaca2')
            // target2.setData({ value: '2222' })
            target2.vm.$emit('input', '2222')
            */
            const wrapperArray = wrapper.findAll('.flag')
            wrapperArray.wrappers.forEach(wrapper => {
                wrapper.vm.$emit('input', '2222')
            })
            expect(wrapper.vm.frm).toEqual({ input1: '2222', input2: '2222' }) // 输入框测试
            wrapper.vm.submit()
            wrapper.vm.$nextTick(() => { // 异步监听
                expect(wrapper.vm.testResult2).toEqual([4]) // 输入框测试
                expect(mockFn1).toBeCalled() // 断言函数被触发且只触发一次
                const mockFn2 = jest.fn()
                wrapper.setMethods({ 'submit': mockFn2 })
                const buttonValidate = wrapper.find({ ref: 'formValidateId' })
                buttonValidate.trigger('click')
                wrapper.vm.$nextTick(() => { // 异步监听
                    expect(wrapper.vm.testResult).toEqual([1, 2, 3]) // 输入框测试
                    expect(mockFn2).toBeCalled() // 断言函数被触发且只触发一次
                })
            })
        })
    })
})
