<style scoped>
    .hand{
        cursor: pointer
    }
</style>
<template>
    <Tooltip :content="flag ? '退出全屏' : '全屏'"
        placement="bottom" theme="light" class="hand" v-if="showFullScreenBtn" >
        <Icon :type="flag ? 'md-contract' : 'md-expand'" :size="23" @click="handleChange()"></Icon>
    </Tooltip>
</template>
<script>
export default {
    name: 'fullscreenBtn', // 注册为组件时候name可以用来递归自己
    data () {
        return {
            showFullScreenBtn: window.navigator.userAgent.indexOf('MSIE') < 0
        }
    },
    computed: {
        flag () { return this.$store.state.app.isFullScreen } // 全屏状态
    },
    methods: {
        handleChange () { // 修改全屏状态
            this.$store.commit('app/setFullScreen', !this.flag)
        }
    }
}
</script>
