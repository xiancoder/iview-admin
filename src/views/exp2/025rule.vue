<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">开发本框架应注意的规范</div>
            <div class="blogContent" v-highlight>
                <Alert type="info">常用逻辑库 moment/lodash 已经引入 有需要者去util封装一层使用 禁止功能模块直接引入</Alert>
                <Alert type="error">很重要 原因::避免过多引入依赖+配合单元测试</Alert>
                <Alert type="info">localstorege/cookie的管理完全交给cache模块</Alert>
                <Alert type="info">路由相关的管理完全交给route模块</Alert>
                <Alert type="info">状态相关的管理完全交给store模块</Alert>
                <Alert type="info">axios配置以及接口内容完全交给api模块(包括接口,类型,参数,返回值)</Alert>
                <Alert type="error">以上的设置均很重要 原因::配合单元测试</Alert>
                <Alert type="success">api接口中负责 1 接收并处理前端容易使用的数据格式</Alert>
                <Alert type="success">api接口中负责 2 记录接口名称端口类型</Alert>
                <Alert type="success">api接口中负责 3 发送并接收返回值 处理正确错误 不提示返回给调用js</Alert>
                <Alert type="success">api接口中负责 4 返回值处理数据格式</Alert>
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
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
