<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Vue点击登录的时候自动加了问号?</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>最近在用Vue来做登录页面, 当输入账号和密码之后, 点击登录刷新了一下, 莫名的在我路径后面多加了一个问号, 我在代码里打印没有打印出来, 但是当我第二次点击的时候才打印出来, 在打印后面给了路由跳转, 最后到路由跳转却执行不了?, 其次用debugger来做调试的, 我当前的判断竟然没有进去, 很奇怪, 判断可以打印, 用debugger调试没有执行</p>
                <p>第一点击登录, 刷新了一下, 路径后面多加一个问号</p>
                <p>第二次点击登录, 才打印出来</p>
                <p>用debugger调试, 判断没有进来</p>
                <hr />
                <p>貌似button默认是submit类型 改成type="button"就可以了 [button type="button"][/button]</p>
                <p class="text-danger">瞎说</p>
                <p></p>
                <hr />
                <p>你用了 form 表单。 然你的 input 都没有name属性。 你应该在 onSubmit 时 阻止下冒泡或默认事件 就可以了。 或者 把 el-form 组件去掉。 因为也没什么必要，加了form 无非就是 在两个input 中按回车能自动提交。</p>
                <p>我也出现url中加问号的情况，原因就是上面评论中说的form表单的提交事件。 我的解决方案是使用了click.prevent阻止默认事件，就好了。 [button @click.prevent="onSubmit" :plain="true"]登录[/button]</p>
                <p class="text-info">有道理 经过尝试 是对的</p>
                <script type="text/html" v-pre>
                    <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native.prevent="handleSubmit">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" prefix="ios-key" placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" prefix="md-lock" placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button @click.stop.prevent="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
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
