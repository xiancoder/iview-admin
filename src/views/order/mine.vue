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
            name: 'order_mine',
            tabList: [
                {name: 'order_mine@sendList', title: '已发工单'},
                {name: 'order_mine@receiveList', title: '已收工单'},
                {name: 'order_mine@draftsList', title: '草稿箱'},
                {name: 'order_mine@endList', title: '已结工单'}
            ],
            currentTab: 999
        }
    },
    mounted: function () {
        const currentName = this.$route.name
        if (currentName === this.name) { return goto(this.tabList[0].name) }
        this.currentTab = this.tabList.findIndex((row) => { return row.name === currentName })
    }
}
</script>
