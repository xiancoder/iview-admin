<template>
    <Tabs :value="currentName" @on-click="goto">
        <TabPane v-for="(row, index) in tabList" :key="index" :label="row.title" :name="row.name">
        </TabPane>
    </Tabs>
</template>
<script>
import { goto } from '@/tools' // 自定义常用工具
export default {
    mixins: [{methods: {goto}}],
    data () {
        return {
            name: 'dspfinance_list',
            tabList: [
                { name: 'dspfinance_list@recharge', title: '充值记录' },
                { name: 'dspfinance_list@cost', title: '消耗记录' }
            ],
            currentName: ''
        }
    },
    mounted: function () {
        this.currentName = this.$route.name
        this.tabList.push({ name: 'dspfinance_list@account', title: '财务余额查询' })
        if (this.currentName === this.name) { return goto(this.tabList[0].name, 'r') }
    }
};
</script>
