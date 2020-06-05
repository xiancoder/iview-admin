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
            name: 'plop_tableV10P00'
        }
    },
    computed: { // 计算属性
        currentName () {
            const routeName = this.$route.name
            if (routeName === this.name) { goto(this.tabList[0].name, 'r') }
            return routeName
        },
        tabList () {
            const list = [
                {name: 'plop_tableV10P00@standard', title: '表格v10模版规范'}
            ]
            return list
        }
    },
    mounted: function () {
    },
    activated () {
    },
    deactivated () {
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
