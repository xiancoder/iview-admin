<template>
    <div class="error-store">
        <Badge dot :count="countComputed">
            <Button type="text" @click="openErrorLoggerPage">
                <Icon :size="20" type="ios-bug"/>
            </Button>
        </Badge>
    </div>
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
<style lang="less">
.error-store{
    margin-right: 12px;
    .ivu-badge-dot{
        top: 20px;
    }
    .ivu-btn.ivu-btn-text{
        padding: 5px 1px 6px;
    }
}
</style>
