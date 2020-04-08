<template>
    <div style="height:900px;">
        <error-content code="500" desc="Oh~~鬼知道服务器经历了什么~" :src="src"/>
    </div>
</template>

<script>
import errorContent from '@C/error-content'

export default {
    name: 'error_500',
    components: {
        errorContent
    },
    data () {
        return {
            src: '/error-page/error-500.svg'
        }
    }
}
</script>
