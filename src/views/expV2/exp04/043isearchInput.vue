<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Iview AutoComplete</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>大声的说要找啥</p>
                <AutoComplete v-model="searchMenuVale" @on-change="handleSearch" placeholder="大声的说要找啥"
                    style="width:162px;display:block;">
                    <Option v-for="(item,index) in dataSet.autoCompleteShow" :value="item.title"
                        :key="index">
                        {{ item.title }}
                    </Option>
                </AutoComplete>
                <p><Icon type="md-checkmark" style="color:green"/> 1 点击回车不会选中下拉内容 (NG有个比较大的问题就是默认选中第一项)</p>
                <p><Icon type="md-checkmark" style="color:green"/> 2 没有默认值 </p>
                <p>{{dataSet.autoCompleteShow}}</p>
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
import { throttle } from '@/utils'
export default {
    data () {
        return {
            searchMenuVale: '', // 搜索内容
            dataSet: {
                autoComplete: [], // 数据源
                autoCompleteShow: [] // 数据源
            }
        }
    },
    methods: {
        initDataSet () { // 初始化数据源 [[模版方法不要动]]
            const list = this.$store.state.route.routeList // 一维化路由
            const res = []
            for (let i in list) {
                res.push({ name: i, title: list[i].title })
            }
            this.dataSet.autoComplete = res
            this.dataSet.autoCompleteShow = res
        },
        handleSearch (value) {
            if (value === '') {
                this.dataSet.autoCompleteShow = this.dataSet.autoComplete
            } else {
                this.dataSet.autoCompleteShow = this.dataSet.autoComplete.filter(function (v, i) {return v.title.indexOf(value) > -1})
            }
        },
        throttleFunction: throttle((list, value, vm) => {
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
    },
    mounted: function () {
        this.initDataSet()
    }
}
</script>
