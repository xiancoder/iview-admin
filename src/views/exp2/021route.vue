<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">发布任务表单</div>
            <div class="blogContent" v-highlight>
                <p>跳转到我的添加编辑页面 this.$route.name = {{ routeName }}</p>
                <p>注意 this.$route.name 和 this.$router.push</p>
                <Button to="/exp1/021route@add">/exp1/021route@add</Button>
                <Button @click="go1()">go1</Button>
                <Button @click="go2()">go2</Button>
                <script type="text/html">
                    go1 () { // 传递的参数刷新一下就没了 这是个bug
                        this.$router.push({ name: 'exp1_021route@add', params: { value: 'test1' } })
                    },
                    go2 () { // 墙裂建议用这个啊 保证传参的存在
                        this.$router.push({ path: '/exp1/021route@add', query: { value: 'test1' } })
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            routeName: this.$route.name
        }
    },
    methods: {
        go1 () {
            this.$router.push({ name: 'exp1_021route@add', params: { value: 'test1' } })
        },
        go2 () {
            this.$router.push({ path: '/exp1/021route@add', query: { value: 'test1' } })
        }
    }
}
</script>
