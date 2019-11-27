<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">历史记录referer的操作</div>
            <div class="blogContent" v-highlight>
                <p>1 可以禁用 </p>
                <script type="text/html">
                    1.如果 referer-policy 的值为never：删除 http head 中的 referer；
                    2.如果 referer-policy 的值为default：如果当前页面使用的是 https 协议，而正要加载的资源使用的是普通的 http 协议，则将 http header 中的 referer 置为空；
                    3.如果 referer-policy 的值为 origin：只发送 origin 部分；
                    4.如果 referer-policy 的值为 always：不改变http header 中的 referer 的值，注意：这种情况下，如果当前页面使用了 https 协议，而要加载的资源使用的是 http 协议，加载资源的请求头中也会携带 referer。
                    <meta name="referrer" content="never">
                </script>
                <p>点击测试一下 <a href="https://www.baidu.com" target="_new" class="btn-link">https://www.baidu.com</a> 使用控制台 document.referrer 看效果 <span class="text-success">测试有效</span></p>
                <hr />
                <p>2 可以去除 </p>
                <p>3 可以伪造 </p>
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
