<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">关于 Vue 插件富文本框 vue-html5-editor</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <div class="h5eCss" v-html="rich1"></div>
                <vue-html5-editor :content="rich1"
                    @change="val=>rich1=val" :height="250" style="width: 800px;">
                </vue-html5-editor>
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
import '@/plugins/vueEditor'
export default {
    data () {
        return {
            rich1: '' // 富文本
        };
    },
    methods: {
    },
    mounted () {
    }
}
</script>
