<template>
    <div style="height:900px;">
        <error-content code="403" desc="Oh~~您没有浏览这个页面的权限~" :src="src"/>
    </div>
</template>

<script>
import errorContent from '@C/error-content'

export default {
    name: 'error_403',
    components: {
        errorContent
    },
    data () {
        return {
            src: '/error-page/error-403.svg'
        }
    }
}
</script>
