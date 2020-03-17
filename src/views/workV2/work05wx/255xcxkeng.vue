<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">小程序开发过程踩坑</div>
            <Divider orientation="right">项目在微信上的经验积累</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 有些手机有刘海屏 并不限于ios或android </p>
                <p><img src="/static/img.wx/xcxkeng/1.png" style="max-width:100%" alt="" /></p>
                <p><Icon type="md-close" style="color:red"/> 顶部栏背景色需要指定 </p>
                <p><img src="/static/img.wx/xcxkeng/2.png" style="max-width:100%" alt="" /></p>
                <p><Icon type="md-close" style="color:red"/> ios日期问题 </p>
                <p><img src="/static/img.wx/xcxkeng/3.png" style="max-width:100%" alt="" /></p>
                <p><Icon type="md-close" style="color:red"/> 未注册的业务域名 </p>
                <p><img src="/static/img.wx/xcxkeng/4.png" style="max-width:100%" alt="" /></p>
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
