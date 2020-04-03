<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">长列表性能优化</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>Vue 会通过 Object.defineProperty 对数据进行劫持，来实现视图响应数据的变化，然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 Vue 来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间，那如何禁止 Vue 劫持我们的数据呢？可以通过 Object.freeze 方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了。</p>
                <script type="text/html">
                </script>
                <p></p>
                <script type="text/js">
                    export default {
                        data: () => ({
                            users: {}
                        }),
                        async created() {
                            const users = await axios.get("/api/users");
                            this.users = Object.freeze(users);
                        }
                    };
                    作者：我是你的超级英雄
                    链接：https://juejin.im/post/5d548b83f265da03ab42471d
                    来源：掘金
                    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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
