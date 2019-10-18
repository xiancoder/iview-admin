<template>
    <div style="margin: 10px 0 5px;">
        <AutoComplete v-model="searchMenuVale" @on-search="handleSearch" placeholder="大声的说要找啥"
            style=" width: 162px; margin: 0 auto; display: block;">
            <Option v-for="(item, index) in dataSet" :value="item.name"
                :key="index">
                {{ item.title }}
            </Option>
        </AutoComplete>
    </div>
</template>
<script>
import { throttle } from '@/utils/function'
export default {
    data () {
        return {
            searchMenuVale: '',
            dataSet: []
        }
    },
    methods: {
        handleSearch (value) {
            const list = this.$store.state.system.routeList // 一维化路由
            this.throttleFunction(list, value, this)
        },
        throttleFunction: throttle((list, value, vm) => { // 修改全屏状态
            const res = []
            for (let i in list) {
                if (list[i].title&&list[i].title.indexOf(value)>-1) {
                    res.push({
                        name: i,
                        title: list[i].title
                    })
                }
            }
            vm.dataSet = res
        }, 2e3)
    }
}
</script>
