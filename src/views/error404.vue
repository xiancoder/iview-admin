<template>
    <error-content code="404" desc="Oh~~您的页面好像飞走了~" :src="src"/>
</template>

<script>
import errorContent from '@C/error-content'
export default {
    name: 'error_404',
    components: {
        errorContent
    },
    data () {
        return {
            src: '/error-page/error-404.svg'
        }
    }
}
</script>
