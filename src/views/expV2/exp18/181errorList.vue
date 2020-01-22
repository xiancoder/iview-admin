<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">浏览器错误控制</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>浏览器可能爆出的错误信息解析</p>
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
                <p>vue对错误信息的处理</p>
                <blockquote>
                    <p>如果在组件渲染时出现运行错误，错误将会被传递至全局 <b>Vue.config.errorHandler</b> 配置函数 (如果已设置)。</p>
                    <p>利用这个钩子函数来配合错误跟踪服务是个不错的主意。</p>
                    <p>比如 <a href="https://sentry.io/" target="_blank" rel="noopener">Sentry</a>，它为 Vue 提供了<a href="https://sentry.io/for/vue/" target="_blank" rel="noopener">官方集成</a>。</p>
                </blockquote>
                <p>我个人建议官方应该有详细的介绍。总的来说，Vue 中异常处理包含以下几个方面的技巧：</p>
                <p>技巧 1：errorHandler 你也许知道，这是 Vue 中最广泛使用的异常处理方式。</p>
                <script type="text/js">
                    Vue.config.errorHandler = function(err, vm, info) {};
                    Vue.config.errorHandler = function(err, vm, info) {
                        console.log(`Error: ${err.toString()}\nInfo: ${info}`);
                    };
                </script>
                <p>技巧 2: warnHandler 用来捕获 Vue warning。记住在生产环境是不起作用的。</p>
                <script type="text/js">
                    Vue.config.warnHandler = function(msg, vm, trace) {};
                    Vue.config.warnHandler = function(msg, vm, trace) {
                        console.log(`Warn: ${msg}\nTrace: ${trace}`);
                    };
                </script>
                <p>技巧 3: renderError</p>
                <p>技巧 4: errorCaptured</p>
                <p>errorCaptured是个很有趣的特性，我想那些构建组件库的开发者应该会用到吧。这个特性更像是面向组件开发者而不是一般开发者。</p>
                <p>终极技巧: window.onerror</p>
                <p>技巧 2: warnHandler 用来捕获 Vue warning。记住在生产环境是不起作用的。</p>
                <script type="text/js">
                    window.onerror = function(message, source, line, column, error) {};
                </script>
                <p>我想函数的参数中只有source难以从字面上理解吧，它代表了当前的 URL。</p>
                <p>接下来事情就比较好玩了。如果你定义了onerror，但是没有启用Vue.config.errorHandler，那么有很多异常都抓不到。</p>
                <p></p>
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
