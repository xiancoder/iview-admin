<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">JS控制文件的下载</div>
            <div class="blogContent" v-highlight>
                <a :href="'./www.qichacha.com.png'" download>下载,成功</a>
                <script type="text/js">
                    <a :href="'./www.qichacha.com.png'" download>下载,成功</a>
                </script>
                <hr />
                <img :src="'./www.qichacha.com.png'" alt="" id="img" />
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
                                // 创建隐藏的可下载链接
                                var eleLink = document.createElement('a');
                                eleLink.download = filename;
                                eleLink.style.display = 'none';
                                // 图片转base64地址
                                var canvas = document.createElement('canvas');
                                var context = canvas.getContext('2d');
                                var width = domImg.natureWidth;
                                var height = domImg.natureHeight;
                                context.drawImage(domImg, 0, 0);
                                // 如果是PNG图片，则context.toDataURL('image/png')
                                eleLink.href = context.toDataURL('image/jpeg');
                                // 触发点击
                                document.body.appendChild(eleLink);
                                eleLink.click();
                                // 然后移除
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
