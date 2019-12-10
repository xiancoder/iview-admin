<template>
    <div>
        <div class="moneyBox" v-if="roleId==1">
            <div class="moneyBoxTitle">账户余额</div>
            <div class="moneyBoxNum">{{balance|moneyformat}} 元</div>
        </div>
        <Tabs :value="currentName" @on-click="goto">
            <TabPane v-for="(row, index) in tabList" :key="index" :label="row.title" :name="row.name">
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
import { goto } from '@/tools' // 自定义常用工具
export default {
    mixins: [{methods: {goto}}],
    data () {
        return {
            name: 'dsp_finance_list',
            currentName: '',
            balance: '-'
        }
    },
    computed: { // 计算属性
        roleId () { return this.$store.state.system.role}, // 用户角色权限
        tabList () {
            const list = [
                { name: 'dsp_finance_list@recharge', title: '充值记录' },
                { name: 'dsp_finance_list@cost', title: '消耗记录' }
            ]
            if (this.roleId !== 1) {
                list.push({ name: 'dsp_finance_list@account', title: '财务余额查询' })
            }
            return list
        }
    },
    mounted: function () {
        this.currentName = this.$route.name
        if (this.currentName === this.name) { return goto(this.tabList[0].name, 'r') }
        if (this.roleId === 1) {
            this.$api.dspfinance.accountList({}, this.roleId).then((info) => { // ajax
                this.balance = info.balance
            })
        }
    }
}
</script>
<style scope>
    .moneyBox{
        border: 1px solid #dcdee2; width: 400px; height: 85px; line-height: 85px; display: flex;
        margin: 0 0 30px; font-size: 17px;
    }
    .moneyBoxTitle{
        width: 119px; text-align: center; background: #2d8cf0; color: #fff;
    }
    .moneyBoxNum{
        text-align: center; width: 280px; background: #fff; font-weight: bold;
    }
</style>
