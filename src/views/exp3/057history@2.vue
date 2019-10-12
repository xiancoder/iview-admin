<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue-router 怎么操作页面的历史记录？</div>
            <div class="blogContent" v-highlight>
                <p>2222222222222222222222222222222</p>
                <p><Button @click="jump1()">我是页面2我要回退页面1</Button></p>
                <p><Button @click="jump0()">我是页面2我要回退页面0</Button></p>
                <p><Button @click="jump0jump3()">我是页面2我要回退页面0前进到页面3</Button></p>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
        jump1 () {
            this.$router.go(-1)
        },
        jump0 () {
            this.$router.go(-2)
        },
        jump0jump3 () {
            this.$store.dispatch('system/noRender', true).then(() => {
                this.$router.go(-2)
                setTimeout(() => {
                    this.$store.dispatch('system/noRender', false).then(() => {
                        this.$router.push({'name': 'exp3_057history@3'})
                    })
                }, 500)
            })
        }
    },
    mounted () {
        console.log('我是页面2')
    }
}
</script>
