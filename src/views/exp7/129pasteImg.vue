<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">实际工作中如果用的好的话，这就是技术储备</div>
            <div class="blogContent" v-highlight>
                <p>我要尝试一下从网站上，截图或者资料，然后通过拷贝复制粘贴的方式来，在浏览器上实时转换成bc64格式</p>
                <div ref="insideDomRef" style="min-height: 150px; width: 400px; display: block; background: #FFC107;">
                    <p v-bind="log"></p>
                    <img :src="thispic" style="max-width:100%" alt="" />
                </div>
                <p>bs64 = {{thispic}}</p>
                <p>文件上传路径是http://localhost:8086/{{ serverpath }} </p>
                <ul><li>&lt;img src="http://localhost:8086/{{ serverpath }}" style="max-width:100%" alt="" /&gt;</li></ul>
                <p>成功了</p>
                <script type="text/js">
                    pasteEle.addEventListener("paste", function (e){
                        if ( !(e.clipboardData && e.clipboardData.items) ) { return ; }
                        for (var i = 0, len = e.clipboardData.items.length; i < len; i++) {
                            var item = e.clipboardData.items[i];
                            if (item.kind === "string") {
                                item.getAsString(function (str) {
                                    // str 是获取到的字符串
                                })
                            } else if (item.kind === "file") {
                                var pasteFile = item.getAsFile();
                                // pasteFile就是获取到的文件
                            }
                        }
                    });
                </script>
                <p>clipboardData的属性介绍</p>
                <table class="api"> <thead> <tr> <th align="left">属性</th> <th align="left">类型</th> <th align="left">说明</th> </tr> </thead> <tbody> <tr> <td align="left">dropEffect</td> <td align="left">String</td> <td align="left">默认是 none</td> </tr> <tr> <td align="left">effectAllowed</td> <td align="left">String</td> <td align="left">默认是 uninitialized</td> </tr> <tr> <td align="left">files</td> <td align="left">FileList</td> <td align="left">粘贴操作为空List</td> </tr> <tr> <td align="left">items</td> <td align="left">DataTransferItemList</td> <td align="left">剪切板中的各项数据</td> </tr> <tr> <td align="left">types</td> <td align="left">Array</td> <td align="left">剪切板中的数据类型 该属性在Safari下比较混乱</td> </tr> </tbody> </table>
                <p>items的DataTransferItem有两个属性kind和type</p>
                <table class="api"> <thead> <tr> <th align="left">属性</th> <th align="left">说明</th> </tr> </thead> <tbody> <tr> <td align="left">kind</td> <td align="left">一般为<font color="#000000"><code><font face="NSimsun">string</font></code>或者<code><font face="NSimsun">file</font></code></font></td> </tr> <tr> <td align="left">type</td> <td align="left">具体的数据类型，例如具体是哪种类型字符串或者哪种类型的文件，即<code><font color="#000000" face="NSimsun">MIME-Type</font></code></td> </tr> </tbody> </table>
                <p>一般types中常见的值有</p>
                <table class="api"> <thead> <tr> <th align="left">值</th> <th align="left">说明</th> </tr> </thead> <tbody> <tr> <td align="left">text/plain</td> <td align="left">普通字符串</td> </tr> <tr> <td align="left">text/html</td> <td align="left">带有样式的html</td> </tr> <tr> <td align="left">Files</td> <td align="left">文件(例如剪切板中的数据)</td> </tr> </tbody> </table>
                <p>坑在这里</p>
                <p>对于图片如果想要获取粘贴的图片进行上传,只有直接右键复制的图片才能识别到,ctrl+c的并不能识别.....</p>
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
        return {
            thispic: '',
            serverpath: '~~~',
            log: ''
        }
    },
    methods: {
    },
    mounted () {
        // `this` 指向 vm 实例
        this.$refs.insideDomRef.addEventListener('paste', (event) => {
            var items = (event.clipboardData || window.clipboardData).items
            console.log(items)
            var file = null
            if (items && items.length) {
                // 搜索剪切板items
                for (var i = 0; i < items.length; i++) {
                    if (items[i].type.indexOf('image') !== -1) {
                        file = items[i].getAsFile()
                        break
                    }
                }
            } else {
                this.log = '当前浏览器不支持'
                return
            }
            if (!file) {
                this.log = '粘贴内容非图片'
                return
            }
            // 此时file就是我们的剪切板中的图片对象
            // 如果需要预览，可以执行下面代码
            var reader = new FileReader()
            reader.onload = (event) => {
                this.thispic = event.target.result
            }
            reader.readAsDataURL(file)
            // this.update(file) 自定义的方法可以放外面么
            /* const formData = new FormData() // 创建form对象
            formData.append('addFile', file) // 通过append向form对象添加数据
            const instance = axios.create({
                withCredentials: true
            })
            instance.post('/ele_api/fileUpload', formData).then(response => {
                console.log(response.data)
                this.serverpath = response.data.data.path
            }) */
        })
    }
}
</script>
