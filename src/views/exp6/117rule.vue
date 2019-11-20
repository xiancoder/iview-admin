<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">编写页面应该注意的规范</div>
            <div class="blogContent" v-highlight>
                <p>1 相同性质功能方法放一起 各种形式的一起 做好标注</p>
                <p>2 注意格式 缩进有序 有利于阅读代码</p>
                <p>3 常用逻辑库 moment/lodash 已经引入 有需要者去util封装一层使用 禁止功能模块直接引入</p>
                <p>4 很重要 原因::避免过多引入依赖+配合单元测试</p>
                <p>5 路由相关的管理完全交给route模块</p>
                <p>6 状态相关的管理完全交给store模块</p>
                <p>7 axios配置以及接口内容完全交给api模块(包括接口,类型,参数,返回值)</p>
                <p>以上的设置均很重要 原因::配合单元测试</p>
                <p>8 api接口中负责 1 接收并处理前端容易使用的数据格式</p>
                <p>8 api接口中负责 2 记录接口名称端口类型</p>
                <p>8 api接口中负责 3 发送并接收返回值 处理正确错误 不提示返回给调用js</p>
                <p>8 api接口中负责 4 返回值处理数据格式</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
