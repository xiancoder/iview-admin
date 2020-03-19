<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">公共方法 - 对象 - 常用逻辑 列举</div>
            <Divider orientation="right">项目在公共方法上的经验积累</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 判断类型 : isType (obj, type)</p>
                <p><Icon type="md-checkmark" style="color:green"/> 继承 (将父类全部交给子类) : extend</p>
                <p><Icon type="md-checkmark" style="color:green"/> 反继承 (子类挑自己需要的索取父类) : extendF</p>
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
        return {
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
