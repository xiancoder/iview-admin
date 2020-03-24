<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">公众号配合服务器拉取用户信息(授权登录)</div>
            <Divider orientation="right">项目在微信上的经验积累</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>开发文档地址 <a href="https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Requesting_an_API_Test_Account.html"></a></p>
                <p></p>
                <p><img src="/static/img.wx/gzhdl/1.png" style="max-width:100%" alt="" /></p>
                <p>我们失误研究了开放平台的登录授权流程</p>
                <p class="text-danger">注意这个仅仅支持pc网站 (移动端没法自己扫自己)</p>
                <p><img src="/static/img.wx/gzhdl/2.png" style="max-width:100%" alt="" /></p>
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
