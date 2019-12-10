<template>
    <div style="padding:20px;">
        <h3>路由跳转的单元测试用例</h3>
        <br /> <hr /> <br />
        <p><Icon type="md-checkmark" style="color:green"/> 有效 可行 代码见test文件夹中</p>
        <br /> <hr /> <br />
        <app-button size="lg" @click="goVIPs">跳转 this.$router.push({ name: 'exp2_035unitTest' }) </app-button>
        <br /> <br /> <hr /> <br />
        <input type="text" value="3333">
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
            this.$router.push({ name: 'exp2_035unitTest' })
        }
    },
    mounted () {
    }
}
</script>
