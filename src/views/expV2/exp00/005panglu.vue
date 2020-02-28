<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">旁路概念</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>旁路 即区别于主回路，是指因功能需要时，可以切换到另一条回路上而不致于影响负载的正常运行。</p>
                <p>旁路概念应用于实际系统中有旁路母线、旁路开关等等。</p>
                <p>A某 请求一个页面 使用wifi 经过M机房 连入互联网</p>
                <p>B某 请求一个页面 使用wifi 经过M机房 连入互联网</p>
                <p>C某 请求一个页面 使用wifi 经过M机房 连入互联网</p>
                <p>D某 请求一个页面 使用wifi 经过M机房 连入互联网</p>
                <p class="text-info">- "M机房发现好多人使用我 好开心 ๑乛◡乛๑ "</p>
                <p class="text-info">- "决定用旁路分流一下[流量](镜像)"</p>
                <p>A某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网</p>
                <p>B某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网</p>
                <p>C某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网</p>
                <p>D某 请求一个页面 使用wifi 经过M机房 分流通道2 连入互联网</p>
                <p class="text-info">- "这样[分流通道1]有了三个流量"</p>
                <p class="text-info">- "M机房决定在[分流通道1]使用[劫持]放个广告 当然是偷偷的 ๑乛◡乛๑ "</p>
                <p>A某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网 获得的内容被劫持</p>
                <p>B某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网 获得的内容被劫持</p>
                <p>C某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网 获得的内容被劫持</p>
                <p>D某 请求一个页面 使用wifi 经过M机房 分流通道2 连入互联网</p>
                <p class="text-info">- "M机房发现自己没有广告 于是招商 找到了YX公司"</p>
                <p class="text-info">- "YX公司 给了一条ADX.js 并许诺 10块钱/千次UV(编的)"</p>
                <p>A某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网 获得的内容被劫持加入ADX.js</p>
                <p>B某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网 获得的内容被劫持加入ADX.js</p>
                <p>C某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网 获得的内容被劫持加入ADX.js</p>
                <p>D某 请求一个页面 使用wifi 经过M机房 分流通道2 连入互联网</p>
                <p class="text-info">- "ADX.js放在用户的页面上之后发生了..."</p>
                <p>A某 请求一个页面 使用wifi 经过M机房 分流通道1 连入互联网</p>
                <p>获得的内容被劫持加入ADX.js 用户看到正常页面 同时ADX.js生效</p>
                <p>收集信息 - 请求广告 - 渲染展示 - 展示上报 - 再次请求</p>
                <p class="text-info">- "运行了几天 没有用户投诉 M机房笑了 YX公司笑了"</p>
                <p></p>
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
