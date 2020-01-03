<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">同一项目不同浏览器tab之间的ls/tab事件通知</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
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
        window.addEventListener('hibeauty', () => {
            console.error('三体入侵了')
        });
    }
}
</script>
