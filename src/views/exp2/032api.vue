<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">api接口的设计初衷</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 前端页面方便使用的数据格式 想怎么用怎么用</p>
                <p><Icon type="md-checkmark" style="color:green"/> api接口调用 指定接口方法和传参</p>
                <p><Icon type="md-checkmark" style="color:green"/> 将数据格式(前端)进行整理 转格式 改变量名 准备提交</p>
                <p><Icon type="md-checkmark" style="color:green"/> 调用axios 指定url method 和 传参</p>
                <p><Icon type="md-checkmark" style="color:green"/> 卫士负责 之前传递header/token</p>
                <p><Icon type="md-checkmark" style="color:green"/> 之后response拦截 负责将status200之外的情况统统剔除 报错 </p>
                <p><Icon type="md-checkmark" style="color:green"/> 返回结果 json构造中的code没有用 不大对应该用上</p>
                <p><Icon type="md-checkmark" style="color:green"/> 方法模块处理返回结果 data中为有效内容 只返回有效数值</p>
                <p><Icon type="md-checkmark" style="color:red"/> 当返回数据有问题时 接口方法报错还是逻辑报错 额再想想</p>
                <p><Icon type="md-checkmark" style="color:red"/> 再想想</p>
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
