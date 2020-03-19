<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">公共方法 - 字符串 - 常用逻辑 列举</div>
            <Divider orientation="right">项目在公共方法上的经验积累</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 字符串处理转码/解码 base64 encodeBase64/decodeBase64</p>
                <p><Icon type="md-checkmark" style="color:green"/> 解读维护URL : url2obj/obj2url/urlChange</p>
                <p><Icon type="md-checkmark" style="color:green"/> 驼峰化变量名/反驼峰化 : humping/antiHumping</p>
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
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
