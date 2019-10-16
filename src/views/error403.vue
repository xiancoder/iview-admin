<template>
  <error-content code="403" desc="Oh~~您没有浏览这个页面的权限~" :src="src"/>
</template>

<script>
import error401 from '@/assets/images/error-page/error-403.svg'
import errorContent from '@C/error-content'
export default {
    name: 'error_403',
    components: {
        errorContent
    },
    data () {
        return {
            src: error401
        }
    }
}
</script>
