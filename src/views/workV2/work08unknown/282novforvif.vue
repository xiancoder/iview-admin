<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">v-for 遍历必须为 item 添加 key，且避免同时使用 v-if</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>（1）v-for 遍历必须为 item 添加 key 在列表数据进行遍历渲染时，需要为每一项 item 设置唯一 key 值，方便 Vue.js 内部机制精准找到该条列表数据。当 state 更新时，新的状态值和旧的状态值对比，较快地定位到 diff 。 </p>
                <p>（2）v-for 遍历避免同时使用 v-if v-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候，必要情况下应该替换成 computed 属性。</p>
                <script type="text/js">
                    推荐：
                    <ul>
                        <li
                            v-for="user in activeUsers"
                            :key="user.id">
                            {{ user.name }}
                        </li>
                    </ul>
                    computed: {
                        activeUsers: function () {
                            return this.users.filter(function (user) {
                         return user.isActive
                            })
                        }
                    }
                    不推荐：
                    <ul>
                        <li
                            v-for="user in users"
                            v-if="user.isActive"
                            :key="user.id">
                            {{ user.name }}
                        </li>
                    </ul>
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
