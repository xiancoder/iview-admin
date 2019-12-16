<template>
    <div class="tableLayout">
        <ButtonGroup style="margin-bottom: 10px" >
            <Button v-for="(row,index) in tabList" :key="index" @click="goto(index)" :type="currentTab==index?'primary':'default'">
                {{ row.title }}
            </Button>
        </ButtonGroup>
    </div>
</template>
<script>
import common from '@/mixin/utils'
export default {
    mixins: [common],
    data () {
        return {
            tabList: [
                { path: 'oa_employee_attendance', title: '月汇总表' },
                { path: 'oa_employee_attendance@detail', title: '明细表' },
                { path: 'oa_employee_attendance@remain', title: '剩余假期' },
                { path: 'oa_employee_attendance@vacation', title: '请假' },
                { path: 'oa_employee_attendance@duty', title: '值班' },
                { path: 'oa_employee_attendance@overtime', title: '加班' },
                { path: 'oa_employee_attendance@noCheck', title: '未打卡' },
                { path: 'oa_employee_attendance@outwork', title: '外出' },
                { path: 'oa_employee_attendance@busTrip', title: '出差' },
                { path: 'oa_employee_nopower', title: '无权限测试' }
            ],
            currentTab: 999
        }
    },
    methods: {
        goto (name, query) { // 跳转目录
            this.go(this.tabList[name].path)
        }
    },
    mounted: function () {
        this.currentTab = this.tabList.findIndex((row) => {
            return row.path === this.$route.name
        })
    }
};
</script>
