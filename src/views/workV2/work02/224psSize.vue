<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">PS常用的打印尺寸</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> A4纸张大小尺寸 : 宽度为210mm, 高度为297mm, 分辨率为300</p>
                <p><Icon type="md-checkmark" style="color:green"/> 身份证大小尺寸: 是高度54mm, 宽度85.6mm, 分辨率:200px</p>
                <p><Icon type="md-checkmark" style="color:green"/> 户口本大小尺寸: 是高度143mm, 宽度105mm, 分辨率:200px</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
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
