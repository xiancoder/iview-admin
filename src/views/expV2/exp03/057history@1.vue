<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue-router 怎么操作页面的历史记录？</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>1111111111111111111111111111</p>
                <p><Button @click="jump2()">我是页面1我要跳页面2</Button></p>
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
        jump2 () {
            this.$router.push({'name': 'expV2_exp03_057history@2'})
        }
    },
    mounted () {
        console.log('我是页面1')
    }
}
</script>
