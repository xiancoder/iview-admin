<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">微信小程序的视频开发坑</div>
            <Divider orientation="right">项目在微信上的经验积累</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>文档地址 : <a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"></a></p>
                <p><img src="/static/img.wx/xcxsp/1.png" style="max-width:100%" alt="" /></p>
                <p>挺清晰是不是 看下图 坑在这那</p>
                <p><img src="/static/img.wx/xcxsp/2.png" style="max-width:100%" alt="" /></p>
                <p>稍微没写一个字母 他就搜不到相关信息 更别说我搜"后台"/"申明" 啥的</p>
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
