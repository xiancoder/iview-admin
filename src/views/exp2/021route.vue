<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">路由跳转 方法测试</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 墙裂建议使用name 并且穿参用 query: { value: 'test1' }</p>
                <p>跳转到我的 添加/编辑 页面并携带参数 本页面路由 {{ routeName }}</p>
                <p>要注意，以/开头的嵌套路径会被当作根路径。这让你充分的使用嵌套组件而无须设置嵌套的路径。</p>
                <p>router.push() 这种方法会向history栈中添加记录 </p>
                <Button to="/exp2/021route@add">to=/exp2/021route@add</Button>
                &nbsp;
                <Button @click="go1()">go1</Button>
                &nbsp;
                <Button @click="go2()">go2</Button>
                <script type="text/html">
                    go1 () { // 传递的 params: { value: 'test1' } 刷新一下就没了 这是个bug
                        this.$router.push({ name: 'exp2_021route@add', params: { value: 'test1' } })
                    },
                    go2 () { // 墙裂建议用 query: { value: 'test1' } 啊 保证传参的存在
                        this.$router.push({ path: '/exp2/021route@add', query: { value: 'test1' } })
                    }
                    router.push('home')
                    router.push({ path: 'home' })
                    router.push({ name: 'user', params: { userId: 123 }})
                    router.push({ path: 'register', query: { plan: 'private' }})
                    router.replace(location)
                    router.go(n) // 这个方法的参数是一个整数，意思是在history记录中向前或者后退多少步，类似window.history.go(n)
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">快捷的路由跳转按钮</div>
            <div class="blogContent" v-highlight>
                <script type="text/html">
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
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">导航守卫（路由跳转前验证登录）</div>
            <div class="blogContent" v-highlight>
                <p>路由跳转前做一些验证，比如登录验证（未登录去登录页），是网站中的普遍需求。</p>
                <p>对此，vue-route 提供的 beforeRouteUpdate 可以方便地实现导航守卫（navigation-guards）。</p>
                <p>贴上：<a href="https://router.vuejs.org/zh-cn/advanced/navigation-guards.html">文档地址</a></p>
                <p>你可以使用 router.beforeEach 注册一个全局前置守卫：</p>
                <script type="text/js">
                    const router = new VueRouter({ ... })
                    router.beforeEach((to, from, next) => {
                        // to: Route: 即将要进入的目标 路由对象
                        // from: Route: 当前导航正要离开的路由
                        // next: Function: 一定要调用该方法来 resolve 这个钩子。
                        next(); // 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
                        next(false); // 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
                        next('/'); next({ path: '/' }); // 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
                        next(error); // (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
                    })
                </script>
                <p>当一个导航触发时，全局前置守卫按照创建顺序调用。</p>
                <p>守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。</p>
                <p>确保要调用 next 方法，否则钩子就不会被 resolved。</p>
                <script type="text/js">
                    const vueRouter = new Router({
                        routes: [
                            //......
                            {
                              path: '/account',
                              name: 'account',
                              component: Account,
                              children: [
                                {name: 'course', path: 'course', component: CourseList},
                                {name: 'order', path: 'order', component: OrderList}
                              ]
                            }
                        ]
                    });
                    vueRouter.beforeEach(function (to, from, next) {
                        const nextRoute = [ 'account', 'order', 'course'];
                        const auth = store.state.auth;
                        //跳转至上述3个页面
                        if (nextRoute.indexOf(to.name) >= 0) {
                            //未登录
                            if (!store.state.auth.IsLogin) {
                                vueRouter.push({name: 'login'})
                            }
                        }
                        //已登录的情况再去登录页，跳转至首页
                        if (to.name === 'login') {
                            if (auth.IsLogin) {
                                vueRouter.push({name: 'home'});
                            }
                        }
                        next();
                    });
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">重定向和别名</div>
            <div class="blogContent" v-highlight>
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
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">过渡动效</div>
            <div class="blogContent" v-highlight>
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
                        scrollBehavior (to, from, savedPosition) {
                            // return 期望滚动到哪个的位置
                            if (savedPosition) { return savedPosition } else { return { x: 0, y: 0 } } }
                            // 如果你要模拟“滚动到锚点”的行为：
                            // if (to.hash) { return { selector: to.hash } }
                        }
                    })
                </script>
                <p><span style="background-color: #ffff00;">注意: 这个功能只在 HTML5 history 模式下可用。</span></p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">路由懒加载</div>
            <div class="blogContent" v-highlight>
                <p class="text-danger">falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值。</p>
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
            routeName: this.$route.name
        }
    },
    methods: {
        go1 () {
            this.$router.push({ name: 'exp2_021route@add', params: { value: 'test1' } })
        },
        go2 () {
            this.$router.push({ path: '/exp2/021route@add', query: { value: 'test1' } })
        }
    },
    beforeRouteEnter: (to, from, next) => {
        // vue 路由指定钩子事件
        console.log('在渲染该组件的对应路由被 confirm 前调用')
        // 不！能！获取组件实例 `this` 因为当钩子执行前，组件实例还没被创建
        next()
    },
    beforeRouteUpdate (to, from, next) {
        // vue 路由指定钩子事件
        console.log('在当前路由改变，但是改组件被复用时调用')
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        next()
    },
    beforeRouteLeave (to, from, next) {
        // vue 路由指定钩子事件
        console.log('导航离开该组件的对应路由时调用')
        // 可以访问组件实例 `this`
        next()
    }
}
</script>
