/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年10月10日14:56:59
* 语句: npm run test:unit tests/unit/036unitTest.spec.js
*/
import { shallowMount } from '@vue/test-utils'
import TestPage from '@V/exp2/036unitTest'
import AppButton from '@V/exp2/036unitTest@addbutton'
// vue-router测试
// 不建议直接在localVue上挂载vue-router
// 使用mock的$route和$router更加灵活，方便测试
const $route = { path: '/some' }
const mockPush = jest.fn() // 带监听的空方法
const $router = { push: mockPush } // 路由监听
describe('[单元测试036unitTest]', () => {
    // wrapper是一个对象，包含了已经mounted的组件或vnode，及测试该组件或 vnode 的方法。
    // wrapper.vm是组件实例，包含该实例的所有方法和属性
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(TestPage, {
            stubs: ['app-button'],
            mocks: { $route, $router }
        })
    })
    afterEach(() => {
        wrapper.destroy()
    })
    // 点击按钮函数被触发
    // 注意此处的click事件是子组件(按钮组件$emit)的事件
    // 在父组件内不属于DOM原生事件,所以触发方式不能使用trigger,而应该使用$emit
    it('点击按钮, 成功调用方法', () => {
        // 创建mock函数
        const mockFn1 = jest.fn()
        wrapper.setMethods({ goVIPs: mockFn1 }) // 设置 Wrapper vm 的方法并强制更新。
        const routerButton = wrapper.find('.router app-button-stub') // 获取对应按钮
        routerButton.vm.$emit('click') // 点击按钮->注意触发方式不能使用trigger
        expect(mockFn1).toBeCalled() // 断言函数被触发且只触发一次
        expect(mockFn1).toHaveBeenCalledTimes(1)
    })
    // 测试内容：goVIPs()被调用->触发mock的push函数
    it('调用方法, 成功跳转', () => {
        wrapper.vm.goVIPs() // 执行函数
        expect(mockPush).toBeCalled() // 期望结果
    })
})
describe('[AppButton.vue]', () => {
    /**
     * 每个it测试一个小项目
     * 为了便于理解所以注释较多，实际测试代码中酌情增减
    */
    // 测试内容：props
    // 自定义props传递给AppButton组件，判断组件有获取到props
    it('props test', () => {
        const buttonProps = {
            type: 'danger',
            size: 'lg',
            disabled: true
        }
        const wrapper = shallowMount(AppButton, {
            propsData: buttonProps
        })
        // 断言已经获取到props
        expect(wrapper.props().size).toBe('lg')
        expect(wrapper.props().type).toBe('danger')
        expect(wrapper.props().disabled).toBe(true)
        // 每个it最后都应该销毁wrapper
        wrapper.destroy()
    })
    // 测试内容：computed(要注意计算属性不是函数，是变量，测试时很容易看着组件内写法按照函数测试)
    // 改变props的type，size，disable值时，cssClasses的值也会跟着改变
    it('computed test', () => {
        const wrapper = shallowMount(AppButton)
        // 设置props 断言computed计算属性（注意props有default值）
        wrapper.setProps({ type: 'danger' })
        expect(wrapper.vm.cssClasses).toBe('app-button app-button--md app-button--danger')
        wrapper.setProps({ size: 'lg' })
        expect(wrapper.vm.cssClasses).toBe('app-button app-button--lg app-button--danger')
        wrapper.setProps({ disabled: true })
        expect(wrapper.vm.cssClasses).toBe('app-button app-button--lg app-button--disabled')
        wrapper.destroy()
    })
    // 测试内容：func测试
    // 点击按钮组件时，正确触发点击事件
    it('click button onClick is clled', () => {
        const wrapper = shallowMount(AppButton)
        // 创建mock函数
        const mockFn = jest.fn()
        // 设置 Wrapper vm 的方法并强制更新。
        wrapper.setMethods({
            onClick: mockFn
        })
        // 获取buttonDOM元素
        const button = wrapper.find('button')
        // 测试点击按钮后有没有正确触发函数
        // 点击按钮
        button.trigger('click')
        // 断言函数被触发，且被触发一次
        expect(mockFn).toBeCalled()
        expect(mockFn).toHaveBeenCalledTimes(1)
        wrapper.destroy()
    })
    // 测试内容：$emit
    // 函数被触发后，emit的函数也会被触发
    it('when onClick is called $emit is called', () => {
        const wrapper = shallowMount(AppButton)
        // 测试$emmit函数被正确触发
        // mock函数替代点击按钮后$emit的函数，此处函数名相同，依然为click
        const mockFn1 = jest.fn()
        wrapper.vm.$on('click', mockFn1)
        // 测试mock函数是否被触发，触发的次数,以及参数
        wrapper.vm.onClick()
        expect(mockFn1).toBeCalled()
        expect(mockFn1).toHaveBeenCalledTimes(1)
        expect(mockFn1).toHaveBeenCalledWith('i am params')
        // 第二次点击button，依然测试mock函数是否被触发，触发的次数
        wrapper.vm.onClick()
        expect(mockFn1).toBeCalled()
        expect(mockFn1).toHaveBeenCalledTimes(2)
        expect(mockFn1).toHaveBeenCalledWith('i am params')
        wrapper.destroy()
    })
    // 测试内容：slots 普通插槽
    // 测试默认值
    it('slots default value test', () => {
        const wrapper = shallowMount(AppButton)
        const button = wrapper.find('button')
        expect(button.text()).toBe('submit')
        wrapper.destroy()
    })
    // 测试内容：slots 普通插槽
    // mount时传入自定义的内容作为slots，然后再断言自定义的内容存在与否
    // 自定义的内容可能会是text，html，componets等允许的内容
    it('slots test', () => {
        const wrapper = shallowMount(AppButton, {
            slots: {
                default: 'i am slots text' // 自定义slots内容
            }
        })
        const button = wrapper.find('button')
        expect(button.text()).toBe('i am slots text')
        wrapper.destroy()
    })
    // 测试内容：slots具名插槽->vue2.6更新后的新语法v-slots，3.0中会延续使用，并废除旧语法（在此提醒注意，不影响测试代码的书写）
    // 测试方法与slots普通插槽相同，此处传入为html,
    // 当传入组件时，只需断言wrapper中是否包含组件的DOM元素即可
    // expect(wrapper.contains('.container')).toBe(true)
    it('named slots test', () => {
        const wrapper = shallowMount(AppButton, {
            slots: {
                namedSlot: '<span>i am slots html</span>' // 自定义slots内容
            }
        })
        const button = wrapper.find('button')
        expect(button.contains('span')).toBe(true)
        const span = wrapper.find('button span')
        expect(span.text()).toBe('i am slots html')
        wrapper.destroy()
    })
    // 测试内容：slots作用域插槽->vue2.6更新后的新语法v-slots，3.0中会延续使用，并废除旧语法（在此提醒注意，不影响测试代码的书写）
    // 测试方法与slots具名插槽相同，此处传入为html,
    // 当传入组件时，只需断言wrapper中是否包含组件的DOM元素即可
    // expect(wrapper.contains('.container')).toBe(true)
    it('scoped slots test', () => {
        const wrapper = shallowMount(AppButton, {
            scopedSlots: {
                scopedSlot: '<span slot-scope="foo">{{ foo.user.lastName }}</span>' // 自定义slots内容
            }
        })
        const button = wrapper.find('button')
        expect(button.contains('span')).toBe(true)
        const span = wrapper.find('button span')
        expect(span.text()).toBe('holy')
        wrapper.destroy()
    })
    // 测试内容：精准DOM结构测试示例
    it('DOM test', () => {
        const wrapper = shallowMount(AppButton)
        expect(wrapper.contains('button')).toBeTruthy()
        wrapper.destroy()
    })
    // 测试内容：snapshot->概括的测试DOM结构
    // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试
    it('matches snapshot', () => {
        const wrapper = shallowMount(AppButton)
        expect(wrapper.html()).toMatchSnapshot()
        wrapper.destroy()
    })
})
