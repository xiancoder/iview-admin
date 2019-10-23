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
import Hello from '@V/exp2/035unitTest'
Vue.use(iView)

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
})
