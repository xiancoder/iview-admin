<template>
    <div style="height:900px;">
        <error-content code="404" desc="Oh~~您的页面好像飞走了~" :src="src"/>
    </div>
</template>

<script>
import error404 from '@/assets/images/error-page/error-404.svg'
import errorContent from '@C/error-content'
export default {
    name: 'error_404',
    components: {
        errorContent
    },
    data () {
        return {
            src: error404
        }
    }
}
</script>
