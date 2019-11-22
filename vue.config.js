const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

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
    publicPath: BASE_URL,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: true,
    // 运行时编译
    runtimeCompiler: true,
    // 方便别名
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('@C', resolve('src/components'))
            .set('@S', resolve('src/style'))
            .set('@V', resolve('src/views'))
    },
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理
    // 那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
        stats: { colors: true },
        port: 4011, // 设置访问的端口号
        proxy: {
            // 匹配代理的url // 目标服务器地址 // 路径重写
            '/api': { target: 'http://localhost:4010/', pathRewrite: {'^/api': '/web'}, changeOrigin: true },
            '/epopen': { target: 'http://localhost:4010/', pathRewrite: {'^/epopen': '/epopen'}, changeOrigin: true }
        }
    }
}
