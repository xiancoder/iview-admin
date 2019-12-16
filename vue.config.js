const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

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
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: true,
    // 运行时编译
    runtimeCompiler: true,
    // 方便别名
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@C', resolve('src/components'))
            .set('@S', resolve('src/style'))
            .set('@V', resolve('src/views'))
            .set('@R', resolve('src/router'))
            .set('@U', resolve('src/utils'))
            .set('@T', resolve('src/tools'))
    },
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理
    // 那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        hot: !!isDev, // 热模块替换
        inline: true, // 在开发服务器的两种不同模式之间切换
        historyApiFallback: true, // 使用HTML5历史记录API时，index.html很可能必须提供该页面来代替任何404响应
        stats: { colors: true },
        port: 4011, // 自定义修改端口
        proxy: { // 跨域
            // 匹配代理的url // 目标服务器地址 // 路径重写
            '/api': {
                target: 'http://localhost:4010/', // 代理目标地址
                // ws: true, // 是否启用websockets
                // secure:false, // 使用的是http协议则设置为false https协议则设置为true
                pathRewrite: {'^/api': '/web'},
                changeOrigin: true // 开启代理：在本地会创建一个虚拟服务端
            },
            '/epopen': { target: 'http://localhost:4010/', pathRewrite: {'^/epopen': '/epopen'}, changeOrigin: true }
        }
    }
}
