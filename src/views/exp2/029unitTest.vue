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
                </br>
                <input v-model="newItem" >
                <button @click="addItemToList">Add</button>
                <!-- displays list -->
                <ul>
                    <li v-for="item in listItems" :key="item">{{ item }}</li>
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
            listItems: ['buy food', 'play games', 'sleep'],
            newItem: ''
        }
    },
    methods: {
        addItemToList () {
            this.listItems.push(this.newItem)
            this.newItem = ''
        }
    }
}
</script>
