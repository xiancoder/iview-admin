<template>
    <Button type="text" @click="handleChange" style="padding: 0;">
        <Tooltip :content="flag ? '退出全屏' : '全屏'" placement="bottom" theme="light"
            class="hand" v-if="showFullScreenBtn" >
            <Icon :size="23" :type="flag?'md-contract':'md-expand'"/>
        </Tooltip>
    </Button>
</template>
<script>
export default {
    data () {
        return {
            flag: false,
            showFullScreenBtn: window.navigator.userAgent.indexOf('MSIE') < 0
        }
    },
    methods: {
        handleChange () { // 修改全屏状态
            // 不能默认设置全屏 即刷新就全屏
            this.flag = !this.flag
            this.handleFullscreen()
        },
        handleFullscreen () {
            let main = document.body
            if (!this.flag) {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                }
            } else {
                if (main.requestFullscreen) {
                    main.requestFullscreen()
                } else if (main.mozRequestFullScreen) {
                    main.mozRequestFullScreen()
                } else if (main.webkitRequestFullScreen) {
                    main.webkitRequestFullScreen()
                } else if (main.msRequestFullscreen) {
                    main.msRequestFullscreen()
                }
            }
        }
    },
    mounted () {
    }
}
</script>
