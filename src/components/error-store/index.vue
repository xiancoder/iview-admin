<template>
    <Button type="text" @click="openErrorLoggerPage" style="padding: 0;">
        <Badge dot :count="countComputed">
            <Icon :size="23" type="ios-bug"/>
        </Badge>
    </Button>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ErrorStore',
    computed: {
        ...mapGetters([
            'errorCount'
        ]),
        countComputed () { return this.$store.state.system.errorCount ? 0 : this.count }
    },
    methods: {
        openErrorLoggerPage () {
            this.$router.push({ name: 'home_errorlogger' })
        }
    }
}
</script>
