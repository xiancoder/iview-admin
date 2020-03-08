<template>
    <Button type="text" @click="openErrorLoggerPage" style="padding: 0;">
        <Badge dot :count="countComputed">
            <Icon :size="23" type="ios-bug"/>
        </Badge>
    </Button>
</template>
<script>
export default {
    name: 'ErrorStore',
    computed: {
        countComputed () { return this.$store.getters['system/errorCount'] }
    },
    methods: {
        openErrorLoggerPage () {
            this.$router.push({ name: 'home_errorlogger' })
        }
    }
}
</script>
