<template>
    <div style="padding:50px;">
        <Select v-model="frm.select1" style="width: 300px">
            <Option :value="1">广告主</Option> <Option :value="2">运营</Option> <Option :value="3">财务</Option>
        </Select>
        <hr>
        当前角色ID = {{roleId}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            frm: {
                select1: ''
            }
        }
    },
    mounted () {
        this.frm.select1 = this.$store.state.system.role
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.role || 2 } // 用户角色权限
    },
    watch: { // 监听
        'frm.select1': function (n, o) {
            this.$store.dispatch('system/setRole', n) // 获取用户信息
        }
    }
}
</script>
<style lang="less">
</style>
