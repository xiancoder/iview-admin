const FileManagerPlugin = require('filemanager-webpack-plugin')
const path = require('path')

const resolve = dir => { return path.join(__dirname, dir) }
const isDev = !!(process.env.NODE_ENV === 'development')

module.exports = {
    // 项目部署基础
    // 默认情况下，我们假设你的应用将被部署在域的根目录下,
    // 例如：https://www.my-app.com/
    // 默认：'/'
    // 如果您的应用程序部署在子路径中，则需要在这指定子路径
    // 例如：https://www.foobar.com/my-app/
    // 需要将它改为'/my-app/'
    // iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
    // baseUrl: BASE_URL,
    publicPath: isDev ? '/' : '/',
    // 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
    // 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。
    // 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
    // 当 lintOnSave 是一个 truthy 的值时，eslint-loader 在开发和生产构建下都会被启用。
    lintOnSave: isDev,
    // 参考 https://cli.vuejs.org/zh/config/#devserver-proxy
    // 2019年12月26日20:07:23
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    // indexPath: 'index.html',
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
    // 请始终使用 outputDir 而不要修改 webpack 的 output.path。
    outputDir: 'dist',
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    // 富文本编辑器 需要此配置 2020年1月2日10:57:47
    runtimeCompiler: true,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 静态资源文件的目录
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    // 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
    pages: {
        main: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/main.html',
            // 在 dist/index.html 的输出
            filename: 'main.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Xian-Index-Page-2019',
            // 在这个页面中包含的块，默认情况下会包含 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'main']
        }
    },
    // 调整 webpack 配置最简单的方式
    configureWebpack: config => {
        if (!isDev) {
            config.plugins.push(
                new FileManagerPlugin({
                    onEnd: [{
                        copy: [
                            { source: resolve('dist/main.html'), destination: resolve('dist/staff.html') }
                        ]
                    }]
                })
            )
        }
    },
    // 允许更细粒度的控制其内部配置。
    chainWebpack: config => {
        // 方便别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@C', resolve('src/components'))
            .set('@S', resolve('src/style'))
            .set('@V', resolve('src/views'))
            .set('@R', resolve('src/router'))
            .set('@U', resolve('src/utils'))
            .set('@T', resolve('src/tools'))
        if (!isDev) {
            // 移除 插件
            config.plugins.delete('preload')
            config.plugins.delete('prefetch')
        }
    },
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理
    // 那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        // 启用webpack的热模块更换功能
        hot: isDev,
        // 在开发服务器的两种不同模式之间切换
        inline: true,
        // 告诉dev-server在服务器启动后打开浏览器。将其设置true为打开默认浏览器。
        open: true,
        // 指定打开浏览器时要浏览的页面。
        // webpack-dev-server --open-page "/different/page"
        openPage: '/index.html',
        // 使用HTML5历史记录API时，index.html很可能必须提供该页面来代替任何404响应
        historyApiFallback: true,
        // 此选项使您可以精确控制显示哪些捆绑软件信息。如果您需要一些捆绑软件信息，但又不是全部，这可能是一个很好的中间立场。
        stats: { colors: true },
        // 自定义修改端口 指定端口号以侦听以下请求
        // 通过CLI使用 webpack-dev-server --port 8080
        port: 4011,
        // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
        // 这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
        proxy: {
            // 匹配代理的url // 目标服务器地址 // 路径重写
            '/api': {
                // 代理目标地址
                target: 'http://localhost:4010/',
                // 是否启用websockets
                // ws: true,
                // 使用的是http协议则设置为false https协议则设置为true
                // secure:false,
                pathRewrite: {'^/api': '/api'},
                changeOrigin: true // 开启代理：在本地会创建一个虚拟服务端
            },
            '/epopen': { target: 'http://localhost:4010/', pathRewrite: {'^/epopen': '/epopen'}, changeOrigin: true }
        }
    }
}
