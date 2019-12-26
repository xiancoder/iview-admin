<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">JS控制文件的下载</div>
            <div class="blogContent" v-highlight>
                <a :href="'/www.qichacha.com.png'" download>下载,成功</a>
                <script type="text/js">
                    <a :href="'/www.qichacha.com.png'" download>下载,成功</a>
                </script>
                <p>下载的是这个</p>
                <img :src="'/www.qichacha.com.png'" alt="" id="img" />
                <hr />
                <Row gutter="20">
                    <Col span="12">
                        <a href="javascript:;" onclick="dothis1()">dothis1() 下载, 失败了</a>
                        <script type="text/js">
                            function dothis1(){
                                var c = document.getElementById('img');
                                var f = "闹钟.png";
                                funDownload1(c, f);
                            }
                            function funDownload1(domImg, filename) {
                                /* 创建隐藏的可下载链接 */
                                var eleLink = document.createElement('a');
                                eleLink.download = filename;
                                eleLink.style.display = 'none';
                                /* 图片转base64地址 */
                                var canvas = document.createElement('canvas');
                                var context = canvas.getContext('2d');
                                var width = domImg.natureWidth;
                                var height = domImg.natureHeight;
                                context.drawImage(domImg, 0, 0);
                                /* 如果是PNG图片，则context.toDataURL('image/png') */
                                eleLink.href = context.toDataURL('image/jpeg');
                                /* 触发点击 */
                                document.body.appendChild(eleLink);
                                eleLink.click();
                                /* 然后移除 */
                                document.body.removeChild(eleLink);
                            }
                        </script>
                    </Col>
                    <Col span="12">
                        <a href="javascript:;" onclick="dothis2()">dothis2() 下载,成功</a>
                        <script type="text/html" id="there">
                            <!doctype html>
                            <html>
                                <head>
                                    <meta charset="utf-8">
                                    <title>测试</title>
                                </head>
                                <body>
                                    <h1>测试</h1>
                                </body>
                            </html>
                        </script>
                        <script type="text/js">
                            function dothis2(){
                                var c = $("#there").html();
                                var f = "index.html";
                                funDownload2(c, f);
                            }
                            function funDownload2(content, filename) {
                                // 创建隐藏的可下载链接
                                var eleLink = document.createElement('a');
                                eleLink.download = filename;
                                eleLink.style.display = 'none';
                                // 字符内容转变成blob地址
                                var blob = new Blob([content]);
                                eleLink.href = URL.createObjectURL(blob);
                                // 触发点击
                                document.body.appendChild(eleLink);
                                eleLink.click();
                                // 然后移除
                                document.body.removeChild(eleLink);
                            }
                        </script>
                    </Col>
                </Row>
                <hr />
                <script type="text/html" v-pre>
                    <a href="/download/F6E2EF384FA35BA4815BE2F6472A6C72" >点击下载</a>
                </script>
                <p>然后各种下载器可以自动识别名称, 下载后文件名直接为 "葫芦娃.mp4"</p>
                <p>这还是让后端做吧，这对于后端来说举手之劳，而前端我并没有听说过什么解决办法。</p>
                <script type="text/html" v-pre>
                    <a href="/download/F6E2EF384FA35BA4815BE2F6472A6C72" download="葫芦娃">点击下载</a>
                </script>
                <p>在 chrome和firefox 下是可行的，但其他大多数下载器并不支持(到现在(2018-08)不支持这个的只有IE和手机端的Safari了)。</p>
                <p>这种识别是通过http header传达的，后端只要给这个下载的响应头加上类似这个 content-disposition:attachment;filename=%2f%E3 就可以了。</p>
                <p>在java中实现如下：</p>
                <script type="text/js">
                    response.setHeader("content-disposition", "attachment;filename=" + URLEncoder.encode("葫芦娃.mp4", "utf-8"));
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
