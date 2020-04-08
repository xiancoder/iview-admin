<template>
    <div class="error-page">
        <div class="content-con">
            <img :src="src" :alt="code">
            <div class="text-con">
                <h4>{{ code }}</h4>
                <h5>{{ desc }}</h5>
            </div>
            <div class="back-btn-group">
                <Button size="large" type="text" @click="backHome">返回首页</Button>
                <Button size="large" type="text" @click="backPrev">返回上一页({{ second }}s)</Button>
            </div>
        </div>
    </div>
</template>
<script>
import { homePage } from '@/router/routers'
import '@S/error.less'

export default {
    name: 'error_content',
    data () {
        return {
            second: 5,
            timer: null
        }
    },
    props: {
        code: String,
        desc: String,
        src: String
    },
    methods: {
        backHome () {
            this.$router.replace({ name: homePage })
        },
        backPrev () {
            this.$router.go(-1)
        }
    },
    mounted () {
        this.timer = setInterval(() => {
            if (this.second === 0) this.backPrev()
            else this.second--
        }, 1000)
    },
    beforeDestroy () {
        clearInterval(this.timer)
    }
}
</script>
