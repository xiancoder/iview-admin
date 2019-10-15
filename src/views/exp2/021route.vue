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
                <p>vue路由 <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫">https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫</a></p>
                <p>用Vue.js + vue-router创建单页应用，是非常简单的。使用Vue.js时，我们就已经把组件组合成一个应用了，当你要把vue-router加进来，只需要配置组件和路由映射，然后告诉vue-router在哪里渲染他们。 </p>
                <script type="text/js">
                    <div id="app">
                      <h1>Hello App!</h1>
                      <p>
                        <!-- 使用 router-link 组件来导航. -->
                        <!-- 通过传入 `to` 属性指定链接. -->
                        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                        <router-link to="/foo">Go to Foo</router-link>
                        <router-link to="/bar">Go to Bar</router-link>### to
                        <!-- 字符串 -->
                        <router-link to="home">Home</router-link>
                        <!-- 渲染结果 -->
                        <a href="home">Home</a>
                        <!-- 使用 v-bind 的 JS 表达式 -->
                        <router-link v-bind:to="'home'">Home</router-link>
                        <!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
                        <router-link :to="'home'">Home</router-link>
                        <!-- 同上 -->
                        <router-link :to="{ path: 'home' }">Home</router-link>
                        <!-- 命名的路由 -->
                        <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
                        <!-- 带查询参数，下面的结果为 /register?plan=private -->
                        <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
                      </p>
                      <!-- 路由出口 -->
                      <!-- 路由匹配到的组件将渲染在这里 -->
                      <router-view></router-view>
                    </div>
                </script>
                <p>要注意，以/开头的嵌套路径会被当作根路径。这让你充分的使用嵌套组件而无须设置嵌套的路径。</p>
                <p>router.push() 这种方法会向history栈中添加记录 </p>
                <script type="text/js">
                    // 字符串
                    router.push('home')
                    // 对象
                    router.push({ path: 'home' })
                    // 命名的路由
                    router.push({ name: 'user', params: { userId: 123 }})
                    // 带查询参数，变成 /register?plan=private
                    router.push({ path: 'register', query: { plan: 'private' }})
                </script>
                <p>router.replace(location) </p>
                <p>router.replace(location) == </p>
                <p> router.go(n) </p>
                <p> 这个方法的参数是一个整数，意思是在history记录中向前或者后退多少步，类似window.history.go(n)</p>
                <p>重定向和别名</p>
                <script type="text/js">
                    const router = new VueRouter({ routes: [ {path: '/a', redirect: '/b'} ] })
                    // 重定向的目标也可以是一个命名的路由：
                    const router = new VueRouter({ routes: [ {path: '/a', redirect: {name: 'foo'}} ] })
                    // 甚至是一个方法
                    // 方法接收 目标路由 作为参数
                    // return 重定向的 字符串路径/路径对象
                    const router = new VueRouter({ routes: [ { path: '/a', redirect: to => { }} ] })
                </script>
                <p>别名 /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。</p>
                <script type="text/js">
                    const router = new VueRouter({ routes: [ { path: '/a', component: A, alias: '/b' } ] })
                </script>
                <p>HTML5 History模式 使用history模式时，URL就是正常的url。</p>
                <script type="text/js">
                    const router = new VueRouter({ mode: 'history', routes: [...] })
                </script>
                <p>过渡动效</p>
                <p> 是基本的动态组件，所以我们可以用组件给它添加一些过渡效果。</p>
                <p> 数据获取</p>
                <p>有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，你需要从服务器获取用户的数据，我们可以通过两种方式来实现：</p>
                <p> 1.导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据，在数据获取期间显示加载中的指示。 </p>
                <p> 2.导航完成之前获取：导航完成前，在路由的enter钩子中获取数据，在数据获取成功后执行导航。 </p>
                <p> 导航完成后获取数据 </p>
                <p> 当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的created钩子中获取数据。这让我们有机会再数据获取期间展示一个loading状态，还可以在不同视图间展示不同的loading状态。</p>
                <p>滚动行为</p>
                <p> 使用前端路由，当切换到新路由时，想要页面滚动到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。vue-router能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。</p>
                <script type="text/js">
                    export const router = new Router({
                        routes,
                        mode: 'hash',
                        // mode: 'history', // 此模式可以使用 http://localhost:8081/login 来访问
                        scrollBehavior (to, from, savedPosition) {
                            // return 期望滚动到哪个的位置
                            if (savedPosition) { return savedPosition } else { return { x: 0, y: 0 } } }
                            // 如果你要模拟“滚动到锚点”的行为：
                            // if (to.hash) { return { selector: to.hash } }
                        }
                    })
                </script>
                <p>路由懒加载</p>
                <p> 当打包构建应用时，Javascript包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。 </p>
                <p> 结合Vue的异步组件和Webpack的code splitting feature，轻松实现路由组件的懒加载。 </p>
                <p> 我们要做的就是把路由对应的组件定义成异步组件：</p>
                <script type="text/js">
                    const Foo = resolve => {
                        // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
                        // （代码分块）
                        require.ensure(['./Foo.vue'], () => {
                            resolve(require('./Foo.vue'))
                        })
                    }
                    // 或者
                    const Foo = resolve => require(['./Foo.vue'], resolve)
                </script>
                <p class="text-danger">falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值。</p>
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
