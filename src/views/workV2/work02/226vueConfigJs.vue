<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue.config.js 配置项详解 研究这个相当于研究webpack了 差不多</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 解决问题1 收录图片字体脚本样式 到 固定文件夹</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>参考 <a href="https://cli.vuejs.org/zh/config/"></a></p>
                <p>参考 <a href="https://cli.vuejs.org/zh/guide/webpack.html#简单的配置方式"></a></p>
                <p>参考 <a href="https://segmentfault.com/a/1190000020029252"></a></p>
                <p>参考 <a href="https://webpack.js.org/configuration/dev-server/#devserverport"></a></p>
                <script type="text/js">
                    // 2019年12月26日20:07:23

                    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
                    // indexPath: 'index.html',

                    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
                    // 请始终使用 outputDir 而不要修改 webpack 的 output.path。
                    outputDir: 'dist',

                    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
                    runtimeCompiler: false,

                    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
                    // 设为false打包时不生成.map文件
                    productionSourceMap: false,

                    // 静态资源文件的目录
                    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
                    assetsDir: 'static',
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
