<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[Nodejs] 服务器提供静态资源</div>
            <div class="blogContent" v-highlight>
                为啥node不给直接提供静态资源的读取 例如图片
                <p>原理： 使用node.js的fs.readFile来处理。</p>
                <p>根据请求地址，转换成实际的文件地址。</p>
                <p>判断文件是否存在，不存在返回404，存在则读取文件 ,并返回文件</p>
                <p>--------</p>
                <p>资料来源 https://blog.csdn.net/dong123dddd/article/details/51727238 还有好多</p>
                <code class="javascript">
                    let contentType = {
                        "css": "text/css", "gif": "image/gif", "html": "text/html", "ico": "image/x-icon",
                        "jpeg": "image/jpeg", "jpg": "image/jpeg", "js": "text/javascript",
                        "json": "application/json", "pdf": "application/pdf", "png": "image/png",
                        "svg": "image/svg+xml", "swf": "application/x-shockwave-flash", "tiff": "image/tiff",
                        "txt": "text/plain", "wav": "audio/x-wav", "wma": "audio/x-ms-wma",
                        "wmv": "video/x-ms-wmv", "xml": "text/xml"
                    }
                    const url = req.params.url
                    // 设置请求的返回头type,content的type类型列表见上面
                    res.setHeader("Content-Type", contentType.jpeg)
                    // 格式必须为 binary 否则会出错
                    var content =  fs.readFileSync('./www/' + url, "binary")
                    res.writeHead(200, "Ok")
                    res.write(content,"binary") // 格式必须为 binary，否则会出错
                    res.end();
                </code>
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
