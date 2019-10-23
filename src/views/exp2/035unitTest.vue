<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">单元测试</div>
            <div class="blogContent">
                <p>单元测试的目的 任何改动影响了什么可以第一时间知道</p>
                <p>1 测试接口增删改查 (提防接口同学觉得没事直接改数据)</p>
                <p>2 测试赋值字段显示 (检查初始值)</p>
                <p>3 测试提交返回跳转 (核心流程不能乱)</p>
                <p>4 常用的公共方法 (提防需要时候使用直接掉链子)</p>
                <p>5 前提是得调通!!!</p>
                <hr/>
                <p><b>这一集不放置高亮代码 因为单元测试执行时候会频繁提示指令未载入</b></p>
                <p>广播: 需要使用前台打印机打印的，请通过共享方式连接，测试下是否改善打印机无法连接的情况。</p>
                <p>使用方法：win+R ---> 输入 \\print-server\HPM427 然后确定。需要帮助的，请直接联系我。</p>
                <hr />
                <pre>
                    实际 vm.count = {{ count }}
                    it('可以实现直接获取vm的data 测试count默认为0', () => {
                        const wrapper = mount(Hello)
                        expect(wrapper.vm.count).to.equal(0)
                    })
                    实际 <button @click="increment" id="inc">count++</button> <span class="num">{{ count }}</span>
                    it('可以根据ID定位元素模拟点击 点击增加1', () => {
                        const wrapper = mount(Hello)
                        wrapper.find('#inc').trigger('click')
                        expect(wrapper.vm.count).to.equal(1)
                    })
                    实际 <button @click="addItemToList" ref="myButton" id="myButton">Add</button>
                    实际 <input v-model="newItem" >
                    实际 <div id="tryhere"> <span v-for="item in listItems">{{ item }}</span> </div>
                    it('修改vm的data并点击按钮并查看dom结构', () => {
                        const wrapper = mount(Hello)
                        wrapper.vm.newItem = 'xxx'
                        const button = wrapper.find('#myButton')
                        button.trigger('click') // 触发点击事件
                        expect(wrapper.find('#tryhere').text()).to.contain('xxx')
                        expect(wrapper.vm.listItems).to.contain('xxx')
                    })
                    实际 <h3>Counter.vue</h3>
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
                </pre>
            </div>
            <div class="blogFooter">
                123123
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'test',
    data () {
        return {
            count: 0,
            listItems: ['buy food', 'play games', 'sleep'],
            newItem: ''
        }
    },
    methods: {
        increment () {
            this.count++
        },
        addItemToList () {
            this.listItems.push(this.newItem);
            this.newItem = '';
        }
    }
}
</script>
