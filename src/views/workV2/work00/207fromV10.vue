<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表单V10标准规范</div>
                <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 本模板经历实战可以使用 </p>
                    <p>为了可以统一的方便的搞页面子节点的编写</p>
                    <p>此类页面必须遵守以下规定</p>
                    <p>1 父页面随便怎么写 子页面应该用父页面名字加$后跟自己名称</p>
                    <p>- - 1 所有的兄弟页面都是隐藏的</p>
                    <p>- - 2 所有的子类页面都是隐藏的</p>
                    <p>- - 3 符合12的所有页面都应该高亮第一个兄弟页面</p>
                    <p>- - 4 兄弟的子类 子类的兄弟 效果一致</p>
                    <p>2 子页面随便怎么写 路由应该隐藏掉节点</p>
                    <p>3 如果子页面多点开花 到处使用 请每处写一个页面 引入组件或者继承使用</p>
                    <script type="text/js">
                        {power: 'workv2-0', path: '207fromV10', title: '表单v10规范'},
                        {power: 'workv2-0', path: '207fromV10$edit', title: '表单v10规范子页面', hideMenu: true},
                        this.$router.push('workV2_work00_207fromV10$edit')
                    </script>
                    <p> <Button type="default" @click="hendleEdit">跳转子页面</Button> </p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            'end1': 1 // 防呆设计
        }
    },
    methods: {
        hendleEdit () {
            this.$router.push({name: 'workV2_work00_207fromV10$edit'})
        }
    },
    mounted: function () {
    }
}
</script>
