/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年12月20日16:09:26
* 语句: npm run test:unit tests/unit/218tableV1unitTest.spec.js
*/
import Vue from 'vue'
import iView from 'iview'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Page from '@V/workV2/work01/218tableV1unitTest'
Vue.use(iView)

describe('单元测试 表格规范 V1 初始化', () => {
    it('基本初始参数应当为初始值', () => {
        const wrapper = mount(Page)
        const wm = wrapper.vm
        wm.$nextTick(() => { // 异步监听
            expect(wm.end1).to.equal(1)
            expect(wrapper.find('.tableFooter span:first-child').text()).to.equal('当前第0 - 0条，共0条')
        })
    })
    /*
    it('ajax执行结果', () => {
        const wrapper = mount(Page,{
            sync: true
        })
        const wm = wrapper.vm
        expect(wm.end1).to.equal(2)
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
    */
})
