<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">使用 X-Frame-Options iframe 嵌套策略</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>X-Frame-Options 有三个值:</p>
                <p>DENY 表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。</p>
                <p>SAMEORIGIN 表示该页面可以在相同域名页面的 frame 中展示。</p>
                <p>ALLOW-FROM uri 表示该页面可以在指定来源的 frame 中展示。</p>
                <p>换一句话说，如果设置为 DENY，不光在别人的网站 frame 嵌入时会无法加载，在同域名页面中同样会无法加载。另一方面，如果设置为 SAMEORIGIN，那么页面就可以在同域名页面的 frame 中嵌套。</p>
                <iframe src="https://www.douyu.com/5709860" frameborder="0"></iframe>
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
