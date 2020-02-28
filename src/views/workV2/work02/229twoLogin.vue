<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">两套登录入口</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 经过验证 可以使用 模式替换会蛮烦一下</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>项目中有两种角色 用户/员工</p>
                <p>项目中有四个域名 ABCD公司</p>
                <p>login.vue 负责两个角色的登录 根据 /staff.html 来显示员工的 /main.html或其他 来显示用户的</p>
                <p>使用如下方式判断 (判断使用计算属性或临时变量)</p>
                <script type="text/js">
                    const myRoleisAdmin = window.location.pathname.indexOf('staff.html') > -1 // 登录管理员还是登录用户
                </script>
                <p class="text-danger">2020年2月5日 11:25:50 注明一下 这个想法可行 但是在调试阶段 staff.html不生成无法访问 热更新也很费劲 所以修改这个判断方式 达到传值即可进入员工登录</p>
                <script type="text/js">
                    const myRoleisAdmin = window.location.href.indexOf('staff.html') > -1 // 登录管理员还是登录用户
                </script>
                const myRoleisAdmin = window.location.pathname.indexOf('staff.html') > -1 // 登录管理员还是登录用户
                <p>这样复制url就不会进错登录页面了</p>
                <p><Icon type="md-close" style="color:red"/> 但是 如果员工将员工url发给用户 用户也将看到员工登录界面 不大好 </p>
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
