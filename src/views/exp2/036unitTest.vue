<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">路由跳转的单元测试例</div>
            <div class="blogContent router">
                <app-button size="lg" @click="goVIPs">跳转到exp2_029unitTest页面</app-button>
                <input type="text" value="3333">
            </div>
        </div>
    </div>
</template>
<script>
import appButton from './036unitTest@addbutton'
export default {
    components: { appButton },
    data () {
        return {}
    },
    methods: {
        goVIPs () {
            this.$router.push({ name: 'exp2_029unitTest' })
        }
    },
    mounted () {
    }
}
</script>
