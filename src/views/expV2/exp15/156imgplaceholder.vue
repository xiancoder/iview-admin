<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">placeholder</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p><img src="http://via.placeholder.com/34x34"></p>
                <p><img src="http://via.placeholder.com/42x42"></p>
                <p><img src="http://via.placeholder.com/64x64"></p>
                <p><img src="http://via.placeholder.com/86x86"></p>
                <p><img src="http://via.placeholder.com/200x45"></p>
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
