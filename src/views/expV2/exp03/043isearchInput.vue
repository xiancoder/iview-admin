<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Iview AutoComplete</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>大声的说要找啥</p>
                <AutoComplete v-model="searchMenuVale" @on-search="handleSearch" placeholder="大声的说要找啥"
                    style="width:162px;display:block;">
                    <Option v-for="(item,index) in dataSet" :value="item.name"
                        :key="index">
                        {{ item.title }}
                    </Option>
                </AutoComplete>
                <script type="text/html" v-pre>
                    <AutoComplete v-model="searchMenuVale" @on-search="handleSearch" placeholder="大声的说要找啥"
                        style="width:162px;margin:0 auto;display:block;">
                        <Option v-for="(item,index) in dataSet" :value="item.name"
                            :key="index">
                            {{ item.title }}
                        </Option>
                    </AutoComplete>
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
import { throttle } from '@/utils/function'
export default {
    data () {
        return {
            searchMenuVale: '', // 搜索内容
            dataSet: [] // 数据源
        }
    },
    methods: {
        handleSearch (value) {
            const list = this.$store.state.route.routeList // 一维化路由
            this.throttleFunction(list, value, this)
        },
        throttleFunction: throttle((list, value, vm) => { // 修改全屏状态
            const res = []
            for (let i in list) {
                if (list[i].title && list[i].title.indexOf(value) > -1) {
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
