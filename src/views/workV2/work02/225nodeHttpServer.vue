<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">http-server 简单方便，即配即用，不用繁琐的配置</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/>非常适合前端用来作为web服务器</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>配置代理步骤：</p>
                <ul>
                    <li>安装node，因为http-server是基于node的 <b>npm i http-server -g</b></li>
                    <li>查看帮助说明 <b>http-server -h</b></li>
                </ul>
                <p>C:\Users\Administrator>npm install http-server -save-dev</p>
                <p>C:\Users\Administrator>http-server -P http://test-cm.58wangwei.com:11111</p>
                <p>## -P 代理地址（就是要访问的接口下的域名）</p>
                <p>-> ww2-customer-web@1.0.0 start E:\xamppWorkspace\ww2-management-web</p>
                <p>-> http-server -P http://test-mr.58wangwei.com:11111/</p>
                <p>Starting up http-server, serving ./</p>
                <p>Available on:</p>
                <p>&nbsp;&nbsp;http://172.30.30.23:8081</p>
                <p>&nbsp;&nbsp;http://127.0.0.1:8081</p>
                <p>Unhandled requests will be served from: http://test-mr.58wangwei.com:11111/</p>
                <p>Hit CTRL-C to stop the server</p>
                <hr />
                <p>代理的用法</p>
                <script v-pre type="text/js">
                    // package.json
                    // 目前已经大量应用
                    "scripts": {
                        "start": "http-server -P http://test-mr.58wangwei.com:11111/ -a localhost -o",
                    },
                </script>
                <p>代理的接口不需要服务端设置跨域配置</p>
                <p>测试并有效的选项：</p>
                <ul>
                    <li>-p 要使用的端口（默认为8080）</li>
                    <li>-a 要使用的地址（默认为0.0.0.0）</li>
                    <li>-o 启动服务器后打开浏览器窗口</li>
                    <li>-P 或者将--proxy所有无法在本地解析的请求代理到给定的URL。例如：-P http://someurl.com</li>
                </ul>
                <p>可用选项：</p>
                <ul>
                    <li>-d 显示目录列表（默认为'True'）</li>
                    <li>-i 显示autoIndex（默认为'True'）</li>
                    <li>-g或者--gzip当启用时（默认为'False'），它将./public/some-file.js.gz代替./public/some-file.js</li>
                    <li>当文件的gzip压缩版本存在且请求接受gzip编码时。</li>
                    <li>-e或者--ext如果没有提供默认文件扩展名（默认为'html'）</li>
                    <li>-s或者--silent从输出中抑制日志消息</li>
                    <li>--cors通过Access-Control-Allow-Origin标头启用CORS</li>
                    <li>-c设置缓存控制max-age标头的缓存时间（以秒为单位），例如-c10为10秒（默认为“3600”）。</li>
                    <li>要禁用缓存，请使用-c-1。</li>
                    <li>-U或--utc在日志消息中使用UTC时间格式。</li>
                    <li>-S或--ssl启用https。</li>
                    <li>-C或--certssl cert文件的路径（默认值：cert.pem）。</li>
                    <li>-K或--keyssl密钥文件的路径（默认值：key.pem）。</li>
                    <li>-r或--robots提供/robots.txt（其内容默认为'User-agent：* \ nDisisis：/'）</li>
                    <li>-h或--help打印此列表并退出。</li>
                </ul>
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
