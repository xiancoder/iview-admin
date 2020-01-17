<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">浏览器可能爆出的错误信息解析</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <script type="text/js">
                    "XMLHttpRequest"
                    // 请求
                    "cannot load ---------."
                    // 不能加载某资源
                    "Redirect from '---------' to '---------' has been blocked by CORS policy:"
                    //CORS策略拒绝某域名请求某资源
                    //(CORS，全称Cross-Origin Resource Sharing ，是一种允许当前域(domain)的资源(比如html/js/web service)被其他域(domain)的脚本请求访问的机制)
                    "No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin '---------' is therefore not allowed access."
                    //请求资源没有表现出'跨域访问'特性
                </script>
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
