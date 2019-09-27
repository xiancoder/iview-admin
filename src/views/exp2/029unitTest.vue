<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">单元测试</div>
            <div class="blogContent" v-highlight>
                <Alert>单元测试的目的 任何改动影响了什么可以第一时间知道</Alert>
                <Alert>1 测试接口增删改查</Alert>
                <Alert>2 测试赋值字段显示</Alert>
                <Alert>3 测试提交返回跳转</Alert>
                <Alert>4 常用的公共方法</Alert>
                <Alert>5 前提是得调通!!!12312312</Alert>
                <br/>
                <h3>Counter.vue</h3>
                <div class="num">{{ count }}</div>
                <button @click="increment" id="inc">自增</button>
                <h1>My To Do List</h1>
                <br/>
                <input v-model="newItem" >
                <button @click="addItemToList" ref="myButton" id="myButton">Add</button>
                <ul id="tryhere">
                    <li v-for="item in listItems">{{ item }}</li>
                </ul>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
