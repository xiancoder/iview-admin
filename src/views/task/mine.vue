<!-- :type="currentTab==0?'primary':''" 效果可以出来 但是会引发一个报警 -->
<!-- [Vue warn]: Invalid prop: custom validator check failed for prop "type" -->
<!-- 原因是 button组件声明的prop参数type类型为字符串 空显示不是 -->
<!-- 备份一个错误 -->
<template>
    <ButtonGroup style="margin-bottom: 10px" >
        <Button v-for="(row, index) in tabList" :key="index" @click="goto(tabList[index].name)"
            :type="currentTab==index?'primary':'default'">
            {{ row.title }}
        </Button>
    </ButtonGroup>
</template>
<script>
import { goto } from '@/tools' // 自定义常用工具
export default {
    mixins: [{methods: {goto}}],
    data () {
        return {
            name: 'task_mine',
            tabList: [
                { name: 'task_mine@publish', title: '我发布的任务' },
                { name: 'task_mine@conscient', title: '我负责的任务' },
                { name: 'task_mine@executive', title: '我执行的任务' },
                { name: 'task_mine@besend', title: '抄送我的任务' }
            ],
            currentTab: 999
        };
    },
    mounted: function () {
        const currentName = this.$route.name
        if (currentName === this.name) { return goto(this.tabList[0].name) }
        this.currentTab = this.tabList.findIndex((row) => { return row.name === currentName })
    }
};
</script>
