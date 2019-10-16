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
                <code>可以实现直接获取vm的data 检查默认值 测试count默认为0 ::: count = {{ count }}</code>
                <hr />
                <code>可以根据ID定位元素模拟点击 点击增加1 ::: <button @click="increment" id="inc">count++</button> <span class="num">{{ count }}</span></code>
                <hr />
                <code>修改vm的data并点击按钮并查看dom结构</code>
                <div id="tryhere"> <input v-model="newItem" ><button @click="addItemToList" ref="myButton" id="myButton">Add</button>
                <span v-for="item in listItems">{{ item }}</span> </div>
                <hr />
                <code>使用或者不是用Vue-test-utils: 都能检测出正确渲染h3的文字为Counter.vue</code>
                <h3>Counter.vue</h3>
            </div>
            <div class="blogFooter">
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
