<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">URL中的大小写敏感</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>简单的说，URL是网址</p>
                <p>专业的说，URL是英语Uniform / Universal Resource Locator全称的缩写</p>
                <p>URL中某些部分是大小写敏感的（意思是大写和小写字母表示不同内容）而其他部分则对大小写不敏感。</p>
                <p class="text-danger">协议标识符（http）是大小写不敏感的。你可以在此输入HTTP、http、hTtp或任何其他大小写组合，都可以行得通。这一点也适用于HTTPS，它们完全一样。</p>
                <p class="text-danger">get形式传参放心 妥妥的大小写敏感 可以确信浏览器其他客户端会严格按照你输入的大小写形式进行传递。</p>
                <p>网址的名称（以server.zzidc.com为例）不会是大小写敏感的。</p>
                <p class="text-danger">为什？因为它是服务器的域名系统（DNS）名称，而DNS按规定不是大小写敏感的。</p>
                <p>你可以输入server.zzidc.com或者大小写和小写字母的任意其他组合，所有这些都是有效的。</p>
                <p></p>
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
