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
                    <li>-g或者--gzip当启用时（默认为'False'），它将./static/some-file.js.gz代替./static/some-file.js</li>
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
                <table class="api">
                    <thead> <tr> <th align="left">参数</th> <th align="left">作用</th> </tr> </thead>
                    <tbody>
                        <tr> <td align="left">-p 或者 --port</td> <td align="left">端口设置，默认是 <b>8080</b></td> </tr>
                        <tr> <td align="left">-a</td> <td align="left">监听地址设置默认是 <b>0.0.0.0</b></td> </tr>
                        <tr> <td align="left">-d</td> <td align="left">是否显示文件列表 默认<b>true</b></td> </tr>
                        <tr> <td align="left">-i</td> <td align="left">显示自动索引 默认<b>true</b></td> </tr>
                        <tr> <td align="left">-g 或者 --gzip</td> <td align="left">默认<b>false</b>，当文件的<b>gzip</b>版本存在且请求接受<b>gzip</b>编码时，它将服务于<b>./static/some-file.js.gz</b>，而不是<b>./static/some-file.js</b></td> </tr>
                        <tr> <td align="left">-e 或者 --ext</td> <td align="left">如果没有提供默认文件扩展名(默认为<b>html</b>)</td> </tr>
                        <tr> <td align="left">-s 或者 --silent</td> <td align="left">禁止控制台日志信息输出</td> </tr>
                        <tr> <td align="left">–cors</td> <td align="left">允许跨域资源共享</td> </tr>
                        <tr> <td align="left">-o</td> <td align="left">启动服务后打开默认浏览器</td> </tr>
                        <tr> <td align="left">-c</td> <td align="left">设置缓存<b>cache-control max-age heade</b>存留时间（以秒为单位），示例：<b>-c10</b>是<b>10</b>秒，默认是<b>3600</b>秒，如果要禁用缓存就使用<b>-c-1</b></td> </tr>
                        <tr> <td align="left">-U 或者 --utc</td> <td align="left">使用 <b>UTC</b>格式，在控制台输出时间信息</td> </tr>
                        <tr> <td align="left">-P 或者 --proxy</td> <td align="left">通过一个 <b>url</b>地址，代理不能通过本地解析的资源</td> </tr>
                        <tr> <td align="left">-S 或者 --ssl</td> <td align="left">使用<b>https</b>协议</td> </tr>
                        <tr> <td align="left">-C 或者 --cert</td> <td align="left"><b>ssl</b>证书文件的路径，默认是<b>cert.pem</b></td> </tr>
                        <tr> <td align="left">-K 或者 --key</td> <td align="left"><b>ssl</b>密匙文件路径</td> </tr>
                        <tr> <td align="left">-h 或者 --help</td> <td align="left">显示帮助</td> </tr>
                    </tbody>
                </table>
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
