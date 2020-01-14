<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"> 富文本框 暂时没想到有啥用 临时作为上传学习截图的快捷工具</div>
            <div class="blogContent" v-highlight>
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
