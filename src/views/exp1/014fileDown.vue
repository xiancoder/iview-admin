<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">文件下载进度条</div>
            <div class="blogContent" v-highlight>
                <Button type="primary" :loading="loading" @click="getFileDownload()">{{ !loading?'下载':'下载中......' }}</Button>
                <Button type="primary" @click="loading = !loading">恢复</Button>
                <Progress :percent="percent" status="active" style="width:400px"/>
                <hr />
                <upload></upload>
                <hr />
                <table class="api" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                        <th class="separateColor">文件扩展名</th> <th>Content-Type(Mime-Type)</th>
                        <th class="separateColor">文件扩展名</th> <th>Content-Type(Mime-Type)</th>
                        <th class="separateColor">文件扩展名</th> <th>Content-Type(Mime-Type)</th>
                        <th class="separateColor">文件扩展名</th> <th>Content-Type(Mime-Type)</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td class="separateColor">.*（ 二进制流，不知道下载文件类型）</td> <td>application/octet-stream</td>
                        <td class="separateColor">.tif</td> <td>image/tiff</td>
                        <td class="separateColor">.ai</td> <td>application/postscript</td>
                        <td class="separateColor">.asp</td> <td>text/asp</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.avi</td> <td>video/avi</td>
                        <td class="separateColor">.biz</td> <td>text/xml</td>
                        <td class="separateColor">.bmp</td> <td>application/x-bmp</td>
                        <td class="separateColor">.class</td> <td>java/*</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.css</td> <td>text/css</td>
                        <td class="separateColor">.dll</td> <td>application/x-msdownload</td>
                        <td class="separateColor">.doc</td> <td>application/msword</td>
                        <td class="separateColor">.exe</td> <td>application/x-msdownload</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.gif</td> <td>image/gif</td>
                        <td class="separateColor">.htm</td> <td>text/html</td>
                        <td class="separateColor">.html</td> <td>text/html</td>
                        <td class="separateColor">.ico</td> <td>image/x-icon</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.ico</td> <td>application/x-ico</td>
                        <td class="separateColor">.ins</td> <td>application/x-internet-signup</td>
                        <td class="separateColor">.java</td> <td>java/*</td>
                        <td class="separateColor">.jpeg</td> <td>image/jpeg</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.jpg</td> <td>image/jpeg</td>
                        <td class="separateColor">.jpg</td> <td>application/x-jpg</td>
                        <td class="separateColor">.js</td> <td>application/x-javascript</td>
                        <td class="separateColor">.jsp</td> <td>text/html</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.math</td> <td>text/xml</td>
                        <td class="separateColor">.mhtml</td> <td>message/rfc822</td>
                        <td class="separateColor">.mp3</td> <td>audio/mp3</td>
                        <td class="separateColor">.mp4</td> <td>video/mpeg4</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.pdf</td> <td>application/pdf</td>
                        <td class="separateColor">.png</td> <td>image/png</td>
                        <td class="separateColor">.ppt</td> <td>application/vnd.ms-powerpoint</td>
                        <td class="separateColor">.ppt</td> <td>application/x-ppt</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.rm</td> <td>application/vnd.rn-realmedia</td>
                        <td class="separateColor">.rmvb</td> <td>application/vnd.rn-realmedia-vbr</td>
                        <td class="separateColor">.spl</td> <td>application/futuresplash</td>
                        <td class="separateColor">.svg</td> <td>text/xml</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.swf</td> <td>application/x-shockwave-flash</td>
                        <td class="separateColor">.tif</td> <td>image/tiff</td>
                        <td class="separateColor">.tif</td> <td>application/x-tif</td>
                        <td class="separateColor">.tiff</td> <td>image/tiff</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.torrent</td> <td>application/x-bittorrent</td>
                        <td class="separateColor">.txt</td> <td>text/plain</td>
                        <td class="separateColor">.wav</td> <td>audio/wav</td>
                        <td class="separateColor">.wmv</td> <td>video/x-ms-wmv</td>
                    </tr>
                    <tr>
                        <td class="separateColor">.xml</td> <td>text/xml</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import upload from './014fileDown@upload'
export default {
    data () {
        return {
            loading: false,
            percent: 0
        }
    },
    components: {
        upload
    },
    methods: {
        // 下载文件
        download (data) {
            if (!data) { return }
            // let url = window.URL.createObjectURL(new Blob([data]),
            var blob = new Blob([data], {type: 'video/mpeg4'})
            // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型
            var a = document.createElement('a')
            var href = window.URL.createObjectURL(blob); // 创建下载的链接
            a.href = href
            a.download = 'download.mp4'; // 下载后文件名
            document.body.appendChild(a)
            a.click(); // 点击下载
            document.body.removeChild(a); // 下载完成移除元素
            window.URL.revokeObjectURL(href); // 释放掉blob对象
        },
        getFileDownload () {
            this.loading = true
            axios({
                method: 'get',
                url: 'http://localhost:4010/api/file/download',
                data: {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                },
                // `onDownloadProgress` 允许为下载处理进度事件
                onDownloadProgress: progressEvent => {
                    // 对原生进度事件的处理
                    // 响应头要有Content-Length
                    console.log('onDownloadProgress')
                    if (event.lengthComputable) {
                        let percentComplete = event.loaded / event.total
                        console.log(percentComplete) // 最后输出1
                        this.percent = percentComplete * 100
                        if (percentComplete === 1) this.loading = false
                    }
                },
                // `maxContentLength` 定义允许的响应内容的最大尺寸
                maxContentLength: 2000000,
                responseType: 'blob'
            }).then(response => {
                this.download(response.data)
            })
        }
    },
    mounted () {
    }
}
</script>
