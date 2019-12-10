<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[Nodejs] 服务器接收上传文件</div>
            <div class="blogContent" v-highlight>
                node + express 4.x ，中间件用的是 multer
                <p class="commend">cnpm install -save multer</p>
                <p class="commend">cnpm install -save path</p>
                <p>但实际上文件上传是已经成功了，因为上传成功后会保存在本地的一个文件夹里，里面是有我上传的文件的，而 express 我也用了 cors 解决跨域问题了，上传成功我也有返回 json 数据，但就是报错，求解</p>
                <script type="text/js">
                    const multer = require("multer"); //解析post文件数据
                    const fs = require("fs"); //文件模块，用于改文件名字
                    const pathLib = require("path"); //对路径进行解析
                    /* --- */
                    res.header('Access-Control-Allow-Origin', '*')
                    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
                    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
                    res.header('X-Powered-By', ' 3.2.1')
                    /* --- */
                    var pathNew = req.file.path + generateMixed(10) + '.jpg';
                    fs.rename(req.file.path, pathNew, function (err) {
                        let result
                        if (err) {
                            result = resultFormat(200, {res: 0, msg: '上传失败'})
                        } else {
                            result = resultFormat(200, {res: 1, msg: '上传成功', path: pathNew})
                        }
                        res.end(JSON.stringify(result))
                    });
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
