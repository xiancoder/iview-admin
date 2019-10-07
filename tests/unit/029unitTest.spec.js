import Vue from 'vue'
import iView from 'iview'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Hello from '@V/exp2/029unitTest'
Vue.use(iView)
// 单独测试单一文件 npm run test:unit tests\unit\029unitTest.spec.js
describe('[单元测试029unitTest]', () => {
    /* it('点击按钮后, count的值应该为1', () => {
        const Constructor = Vue.extend(Hello) // 获取组件实例
        const vm = new Constructor().$mount() // 挂载组件
        const button = vm.$el.querySelector('button') // 获取button
        const clickEvent = new window.Event('click') // 新建点击事件
        button.dispatchEvent(clickEvent) // 触发点击事件
        vm._watcher.run() // 监听点击事件
        expect(Number(vm.$el.querySelector('.num').textContent)).to.equal(1) // 断言:count的值应该是数字1
    })
    it('displays items from the list', () => {
        const Constructor = Vue.extend(Hello)
        const ListComponent = new Constructor().$mount()
        expect(ListComponent.$el.textContent).to.contain('play games')
    })
    it('adds a new item to list on click', () => {
        const Constructor = Vue.extend(Hello)
        const ListComponent = new Constructor().$mount()
        ListComponent.newItem = 'brush my teeth'
        const button = ListComponent.$el.querySelector('button')
        const clickEvent = new window.Event('click')
        button.dispatchEvent(clickEvent)
        ListComponent._watcher.run()
        expect(ListComponent.$el.querySelector('#tryhere').textContent).to.contain('sleep')
        expect(ListComponent.listItems).to.contain('sleep')
    })
    it('增加项目并点击按钮', () => {
        const vm = mount(Hello)
        vm.setData({ newItem: 'brush my teeth' })
        const button = vm.find({ ref: 'myButton' })
        button.trigger('click')
        expect(vm.text()).to.contain('brush my teeth')
        expect(vm.props().listItems).to.contain('brush my teeth')
    }) */
    it('测试 count 默认为 0', () => {
        const wrapper = mount(Hello)
        expect(wrapper.vm.count).to.equal(0)
    })
    it('点击增加 1', () => {
        const wrapper = mount(Hello)
        wrapper.find('#inc').trigger('click')
        expect(wrapper.vm.count).to.equal(1)
    })
    it('增加项目并点击按钮查看dom结构', () => {
        const wrapper = mount(Hello)
        wrapper.vm.newItem = 'xxx'
        const button = wrapper.find('#myButton')
        button.trigger('click') // 触发点击事件
        expect(wrapper.find('#tryhere').text()).to.contain('xxx')
        expect(wrapper.vm.listItems).to.contain('xxx')
    })
    it('未使用Vue-test-utils: 正确渲染h3的文字为Counter.vue', () => {
        const Constructor = Vue.extend(Hello)
        const vm = new Constructor().$mount()
        const H3 = vm.$el.querySelector('h3').textContent
        expect(H3).to.equal('Counter.vue')
    })
    it('使用Vue-test-Utils: 正确渲染h3的文字为Counter.vue', () => {
        const wrapper = mount(Hello)
        expect(wrapper.find('h3').text()).to.equal('Counter.vue')
    })
})
