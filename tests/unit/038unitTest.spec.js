/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年10月10日14:56:59
* 语句: npm run test:unit tests/unit/038unitTest.spec.js
*/
import { mount, createLocalVue } from '@vue/test-utils'
import fromTest from '@V/exp2/038unitTest'
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
        wrapper = mount(fromTest, { localVue })
    })
    afterEach(() => {
        wrapper.destroy()
    })
    // 倒着一步一步赋值验证
    it('提交ajax成功后应该触发跳转方法', () => {
        const mockFn1 = jest.fn()
        wrapper.setMethods({ '$tool': { 'jumpto': mockFn1 } })
        wrapper.vm.submit()
        wrapper.vm.$nextTick(() => { // 异步监听
            expect(wrapper.vm.testResult2).toEqual([4]) // 输入框测试
            expect(mockFn1).toBeCalled() // 断言函数被触发且只触发一次
        })
    })
    it('验证成功后提交ajax(还没写)', () => {
        expect(1 + 1).toEqual(2)
    })
    it('点击按钮触发验证', () => {
        return wrapper.vm.init().then(result => {
            const mockFn2 = jest.fn()
            wrapper.setMethods({ 'submit': mockFn2 })
            const buttonValidate = wrapper.find('.flagBtn')
            buttonValidate.trigger('click')
            wrapper.vm.$nextTick(() => { // 异步监听
                expect(wrapper.vm.testResult).toEqual([1, 2, 3]) // 输入框测试
                expect(mockFn2).toBeCalled() // 断言函数被触发且只触发一次
            })
        })
    })
    it('iview输入框可以根据事件修改内容触发监听', () => {
        const wrapperArray = wrapper.findAll('.flag')
        wrapperArray.wrappers.forEach(wrapper => {
            wrapper.vm.$emit('input', '2222')
        })
        expect(wrapper.vm.frm).toEqual({ input1: '2222', input2: '2222' }) // 输入框测试
    })
    it('表单初始化可以给变量赋初始值', () => {
        wrapper.vm.init().then(result => {
            expect(wrapper.vm.frm).toEqual({ input1: '1111', input2: '1111' }) // 输入框测试
        })
    })
    it('验证保存快照', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})
