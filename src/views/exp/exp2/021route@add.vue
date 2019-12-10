<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">我是 添加 / 编辑 页面</div>
            <div class="blogContent" v-highlight>
                <p>穿参 this.$route.params.value = {{ param }}</p>
                <p>穿参 this.$route.params.query = {{ query }}</p>
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
            param: this.$route.params.value,
            query: this.$route.query.value
        }
    }
}
</script>
