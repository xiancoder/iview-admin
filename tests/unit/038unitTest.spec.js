import { shallowMount, createLocalVue } from '@vue/test-utils'
import fromTest from '@V/exp2/038unitTest'
import axios from 'axios'
import iView from 'iview'
import '@/tools' // 常用工具 -挂载$tool
import '@/utils' // 常用方法 -挂载$util
// mock掉整个axios模块
// 返回值在使用的时候自定义
jest.mock('axios')
// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.use(iView)
localVue.prototype.$axios = axios // 挂载axios
describe('[单元测试038.表单单元流程]', () => {
    let wrapper
    beforeEach(() => {
        axios.mockClear()
        wrapper = shallowMount(fromTest, { localVue })
    })
    afterEach(() => {
        wrapper.destroy()
    })
    // 测试内容：axios->getData()函数
    // 为了配合axios测试,需要在组件代码的两处增加return,参见fromTest组件
    it('axios test', () => {
        // 此处只是使用了get,post/patch/delete/...与get相同
        // 自定义get的返回值
        const mockFn1 = jest.fn()
        wrapper.setMethods({
            '$api': {
                'unit': {
                    'getDetail' () {
                        return new Promise((resolve, reject) => {
                            resolve({
                                input1: '1111', // 输入框测试
                                input2: '1111' // 输入框测试
                            })
                        })
                    },
                    'submit' () {
                        return new Promise((resolve, reject) => {
                            resolve({
                                res: 1
                            })
                        })
                    }
                }
            },
            '$tool': {
                'jumpto': mockFn1
            }
        })
        return wrapper.vm.init().then(result => {
            expect(wrapper.vm.frm).toEqual({ input1: '1111', input2: '1111' }) // 输入框测试
            const inputs = wrapper.find('input')
            inputs.value = '2222'
            console.log(inputs)
            inputs.vm.onChange()
            expect(wrapper.vm.frm).toEqual({ input1: '2222', input2: '2222' }) // 输入框测试
            const button = wrapper.find('.tijiao')
            button.vm.$emit('click')
            expect(mockFn1).toBeCalled() // 断言函数被触发且只触发一次
        })
    })
})
