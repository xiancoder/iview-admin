<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">单元素/组件的过渡</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <h1><Icon type="md-close" style="color:red"/>没搞定没搞定</h1>
                <div id="demo">
                <button v-on:click="show = !show"> Toggle </button>
                <transition name="fade">
                    <p v-if="show">hello</p>
                </transition>
                </div>
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
            show: true
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style type="text/css">
    .fade-enter-active, .fade-leave-active { transition: opacity 5s; }
    .fade-enter, .fade-leave-to { opacity: 0; }
</style>
