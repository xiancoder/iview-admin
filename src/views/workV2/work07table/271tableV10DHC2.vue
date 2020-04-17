<template>
    <div>
        <Tabs :value="currentName" @on-click="goto" type="card">
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
            name: 'workV2_work07table_271tableV10DHC2',
            currentName: '',
            balance: '-'
        }
    },
    computed: { // 计算属性
        tabList () {
            const list = [
                {name: 'workV2_work07table_271tableV10DHC2@mixin', title: '表格v10的DHCMixin'},
                {name: 'workV2_work07table_271tableV10DHC2@modal', title: '表格v10的DHC弹框表单'},
                {name: 'workV2_work07table_271tableV10DHC2@typesetting', title: '表格v10的DHC合理排版'}
            ]
            return list
        }
    },
    mounted: function () {
        this.currentName = this.$route.name
        if (this.currentName === this.name) { return goto(this.tabList[0].name, 'r') }
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
