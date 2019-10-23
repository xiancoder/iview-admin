<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">我们常用的各种环境和包的形容</div>
            <div class="blogContent" v-highlight>
                <p><font size="20" color="#cc00ff">NodeJs</font> 是一个js的解析运行环境 在其中可以运行各种超越js权限的事情</p>
                <p><font size="20" color="#cc00ff">Webpack</font> 是一个捆绑器，它结合了各种JavaScript，CSS，HTML（和其他）文件，使他们可以随时由客户端处理。</p>
                <p><font size="20" color="#cc00ff">Babel</font> 是ECMAScript 6到ECMAScript 5的编译器。目前的浏览器不能解析所有的ECMAScript 6，因此需要进行转换。</p>
                <p><font size="20" color="#cc00ff">Karma</font> 是一个测试运行器，它运行一个Web服务器，其中包含项目的应用程序代码，并对其执行测试。</p>
                <p><font size="20" color="#cc00ff">Mocha</font> 是JavaScript的测试框架。 既可以在浏览器环境下运行,也可以在Node.js环境下运行。</p>
                <p><font size="20" color="#cc00ff">Chai</font> 是可以与Mocha一起使用的断言库。</p>
                <p class="text-danger"> Jest</font> 是facebook推出的一款测试框架,集成了 Mocha,chai,jsdom,sinon等功能。 </p>
                <p><font size="20" color="#cc00ff">jsdom</font> 是一个纯粹由 javascript 实现的一系列 web标准,特别是 WHATWG 组织制定的DOM <a href="https://www.javascriptcn.com/read-32166.html">https://www.javascriptcn.com/read-32166.html</a></p>
                <p><font size="20" color="#cc00ff">Sinon</font> 是用来辅助我们进行前端测试的，在我们的代码需要与其他系统或者函数对接时，它可以模拟这些场景，从而使我们测试的时候不再依赖这些场景。</p>
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
