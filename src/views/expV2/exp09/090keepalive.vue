<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Vue keep-alive实践总结 </div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>keep-alive是Vue.js的一个内置组件。</p>
                <p>它能够将不活动的组件实例保存在内存中，而不是直接将其销毁，它是一个抽象组件，不会被渲染到真实DOM中，也不会出现在父组件链中。</p>
                <script type="text/html">
                    <keep-alive>
                        <loading></loading>
                    </keep-alive>
                </script>
                <p>被keep-alive包裹的动态组件或router-view会缓存不活动的实例，再次被调用这些被缓存的实例会被再次复用，对于我们的某些不是需要实时更新的页面来说大大减少了性能上的消耗，不需要再次发送HTTP请求，但是同样也存在一个问题就是被keep-alive包裹的组件我们请求获取的数据不会再重新渲染页面，这也就出现了例如我们使用动态路由做匹配的话页面只会保持第一次请求数据的渲染结果，所以需要我们在特定的情况下强制刷新某些组件</p>
                <p>当组件在keep-alive内被切换时组件的activated、deactivated这两个生命周期钩子函数会被执行</p>
                <script type="text/js">
                    activated () {
                        console.log('keepalive', 'activated 重新刷新本页数据')
                    },
                    deactivated () {
                        console.log('keepalive', 'deactivated ???')
                    }
                </script>
                <p>使用keep-alive会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在activated阶段获取数据，承担原来created钩子中获取数据的任务。</p>
                <p>结合router，缓存部分页面 使用$route.meta的keepAlive属性：</p>
                <script type="text/html" v-pre>
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                </script>
                <p>需要在router中设置router的元信息meta：</p>
                <script type="text/js">
                    //...router.js
                    routes: [
                        { path: '/', name: 'Hello', component: Hello, meta: { keepAlive: false // 不需要缓存 } },
                        { path: '/page1', name: 'Page1', component: Page1, meta: { keepAlive: true // 需要被缓存 } }
                    ]
                </script>
                <p>使用效果</p>
                <p>(1) 在Page1页面输入框输入“asd”，然后手动跳转到Hello页面；</p>
                <p>(2) 回到Page1页面发现之前输入的"asd"依然保留，说明页面信息成功保存在内存中；</p>
                <p class="text-danger">这种方式要求每个页面必须写name 同时路由必须指明声明keepAlive 不建议这么用</p>
                <p>借鉴一下 <a href="http://www.jianshu.com/p/0b0222954483">vue-router 之 keep-alive，作者：RoamIn</a>这篇博客中的例子：</p>
                <ul>
                    <li>首页是A页面</li>
                    <li>B页面跳转到A，A页面需要缓存</li>
                    <li>C页面跳转到A，A页面不需要被缓存</li>
                </ul>
                <p>思路是在每个路由的beforeRouteLeave(to, from, next)钩子中设置to.meta.keepAlive：</p>
                <script type="text/js">
                    { path: '/', name: 'A', component: A, meta: { keepAlive: true // 需要被缓存 } }
                    export default {
                        beforeRouteLeave(to, from, next) {
                             // 设置下一个路由的 meta
                            to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
                            next();
                        }
                    };
                    export default {
                        beforeRouteLeave(to, from, next) {
                            // 设置下一个路由的 meta
                            to.meta.keepAlive = false; // C 跳转到 A 时让 A 不缓存，即刷新
                            next();
                        }
                    };
                    // 路由卫士
                    // 设置下一个路由的 meta
                    if (from.name && from.name.includes(to.name)) {
                        console.info(
                            '%c 资料库 %c 路由keepAlive ',
                            'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                            'background:green; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
                            '-'
                        )
                        to.meta.keepAlive = true // C 跳转到 A 时让 A 缓存，即保存原来状态
                    } else {
                        to.meta.keepAlive = false // C 跳转到 A 时让 A 不缓存，即刷新
                    }
                </script>
                <p class="text-danger">这种想法很好 但是页面的初始值要为true才能实现这么一系列操作 如果页面C转到无关页面D再转回来 C默认就false</p>
                <p><strong>prop:</strong></p>
                <ul>
                    <li>include: 字符串或正则表达式。只有匹配的组件会被缓存。</li>
                    <li>exclude: 字符串或正则表达式。任何匹配的组件都不会被缓存。</li>
                </ul>
                <script type="text/js">
                    // 组件
                    export default {
                        name: 'test-keep-alive',
                        data () {
                            return {
                                includedComponents: "test-keep-alive"
                            }
                        }
                    }
                </script>
                <script type="text/html">
                    <keep-alive include="test-keep-alive">
                        <!-- 将缓存name为test-keep-alive的组件 -->
                        <component></component>
                    </keep-alive>
                    <keep-alive include="a,b">
                        <!-- 将缓存name为a或者b的组件，结合动态组件使用 -->
                        <component :is="view"></component>
                    </keep-alive>
                    <!-- 使用正则表达式，需使用v-bind -->
                    <keep-alive :include="/a|b/">
                        <component :is="view"></component>
                    </keep-alive>
                    <!-- 动态判断 -->
                    <keep-alive :include="includedComponents">
                        <router-view></router-view>
                    </keep-alive>
                    <keep-alive exclude="test-keep-alive">
                        <!-- 将不缓存name为test-keep-alive的组件 -->
                        <component></component>
                    </keep-alive>
                </script>
                <hr />
                <p>
                    输入一个字符作为搜索凭据 然后进入表单项操作 然后返回来看看
                    <Input type="text" v-model="xxx" placeholder="请输入任务名称" style="width: 450px"/>
                    <Button type="default" @click="godetail">前往详情来测试</Button>
                </p>
                <script type="text/js">
                    router.beforeEach((to, from, next) => {
                        Store.dispatch('route/keepalive', to.name) // 路由keepAlive管理 当前页缓存
                    }
                </script>
                <p class="text-info">亲测有效</p>
                <p>悲剧 自从我加上了三层菜单的结构 这个东西就不好使了 keep-alive :include="cacheList" 必须放在你想要生效的 router-view 外层</p>
                <p>我为了搞多层菜单 引入了main2level 导致了本次记录的结果不生效 特此记录防止再错</p>
                <p></p>
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
    name: 'expV2_exp09_090keepalive',
    data () {
        return {
            xxx: ''
        }
    },
    methods: {
        godetail () {
            this.$router.push({name: 'expV2_exp09_090keepalive@add'})
        }
    },
    mounted () {
        console.log('keepalive', 'mounted 初始化')
    },
    activated () {
        console.log('keepalive', 'activated 重新刷新本页数据')
    },
    deactivated () {
        console.log('keepalive', 'deactivated ???')
    }
}
</script>
