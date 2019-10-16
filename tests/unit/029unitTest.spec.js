/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年10月10日14:56:59
* 语句: npm run test:unit tests/unit/035unitTest.spec.js
*/
import Vue from 'vue'
import iView from 'iview'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Hello from '@V/exp2/029unitTest'
Vue.use(iView)
// 单独测试单一文件 npm run test:unit tests\unit\029unitTest.spec.js
describe('[单元测试029unitTest]', () => {
    it('可以实现直接获取vm的data 测试count默认为0', () => {
        const wrapper = mount(Hello)
        expect(wrapper.vm.count).to.equal(0)
    })
    it('可以根据ID定位元素模拟点击 点击增加1', () => {
        const wrapper = mount(Hello)
        wrapper.find('#inc').trigger('click')
        expect(wrapper.vm.count).to.equal(1)
    })
    it('修改vm的data并点击按钮并查看dom结构', () => {
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
})
