<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">我们常用的各种环境和包的形容</div>
            <div class="blogContent" v-highlight>
                <p>NodeJs 是一个js的解析运行环境 在其中可以运行各种超越js权限的事情</p>
                <p>Webpack 是一个捆绑器，它结合了各种JavaScript，CSS，HTML（和其他）文件，使他们可以随时由客户端处理。</p>
                <p>Babel 是ECMAScript 6到ECMAScript 5的编译器。目前的浏览器不能解析所有的ECMAScript 6，因此需要进行转换。</p>
                <p>Karma 是一个测试运行器，它运行一个Web服务器，其中包含项目的应用程序代码，并对其执行测试。</p>
                <p>Mocha 是JavaScript的测试框架。</p>
                <p>Chai 是可以与Mocha一起使用的断言库。</p>
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
