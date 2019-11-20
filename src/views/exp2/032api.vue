<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">api接口的层级处理</div>
            <div class="blogContent" v-highlight>
                <p>ajax 请求发送</p>
                <p>ajax 服务器处理</p>
                <p>ajax 结果返回</p>
                <p>ajax route路由卫士response拦截 负责将status200之外的情况统统剔除 报错</p>
                <p>ajax 返回结果构造中的code没有用 不大对应该用上</p>
                <p>ajax api模块处理返回结果 data中为有效内容</p>
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
