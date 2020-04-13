<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">webpack-bundle-analyzer分析SPA应用</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> npm install --save-dev webpack-bundle-analyzer</p>
                <p><Icon type="md-checkmark" style="color:green"/> 在webpack的plugins中配置： new BundleAnalyzerPlugin()</p>
                <p><Icon type="md-checkmark" style="color:green"/> 在package.json 中增加 "analyz": "NODE_ENV=production npm_config_report=true npm run build"</p>
                <p><Icon type="md-close" style="color:red"/> 链接：<a href="https://www.jianshu.com/p/dbc22947a66d"></a> </p>
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
