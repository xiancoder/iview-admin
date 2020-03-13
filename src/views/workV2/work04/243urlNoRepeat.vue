<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">域名验重问题</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p class="text-danger">目的 : 搞一个黑名单列表 (精准匹配URL)</p>
                <p class="text-danger">接口 : 需要搞一个生效列表 一个新增列表 一个删除列表</p>
                <p>每录入一个域名 即对比三个表</p>
                <p>- - 生效列表有的 不入库 没有的 继续</p>
                <p>- - 新增列表有的 不入库 没有的 继续</p>
                <p>- - 删除列表有的 清理删除列表one 不入库 没有的 继续</p>
                <p>- - 入库</p>
                <p></p>
                <p></p>
                <p></p>
                <p class="text-danger">目的 : 搞一个黑名单列表 (模糊匹配URL)</p>
                <p class="text-danger">接口 : 需要搞一个生效列表 一个新增列表 一个删除列表</p>
                <p>小范围域名 pic.baidu.com / 大范围域名 baidu.com</p>
                <p>- - 当库里有大域名时候 小的不入库</p>
                <p>- - 当库里有小域名时候 大的入库 (应该清算库里所有的小域名并移除)</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
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
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
