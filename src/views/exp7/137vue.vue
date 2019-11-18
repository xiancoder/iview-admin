<template>
    <div class="blogCss">
        <Tabs type="border-card">
            <TabPane label="序">
            </TabPane>
            <TabPane label="Vue.config.keyCodes">
                <div v-highlight>
                    <p>自定义键位触发事件</p>
                    <script v-pre type="text/js">
                        // 类型：{ [key: string]: number | Array<number> }
                        Vue.config.keyCodes = {
                            v: 86,
                            f1: 112,
                            // camelCase 不可用
                            mediaPlayPause: 179,
                            // 取而代之的是 kebab-case 且用双引号括起来
                            "media-play-pause": 179,
                            up: [38, 87]
                        }
                    </script>
                    <script v-pre type="text/html">
                        <input type="text" @keyup.media-play-pause="method">
                    </script>
                </div>
            </TabPane>
            <TabPane label="Vue.extend( options )">
                <div v-highlight>
                    <p>使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。</p>
                    <p><b>data</b> 选项是特例，需要注意 - 在 <b>Vue.extend()</b> 中它必须是函数</p>
                    <p></p>
                    <script v-pre type="text/html">
                        <div id="mount-point"></div>
                    </script>
                    <script v-pre type="text/js">
                        // 创建构造器
                        var Profile = Vue.extend({
                            template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
                            data: function () {
                                return {
                                    firstName: 'Walter',
                                    lastName: 'White',
                                    alias: 'Heisenberg'
                                }
                            }
                        })
                        // 创建 Profile 实例，并挂载到一个元素上。
                        new Profile().$mount('#mount-point')
                    </script>
                    <p>请注意这不是运行时构造 如果你需要动态的创建一个示例 则不能这样做</p>
                </div>
            </TabPane>
            <TabPane label="Vue.set( target, propertyName/index, value )">
                <div>
                    <p>向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。</p>
                    <p>它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = 'hi')</p>
                    <p>注意对象<b>不能是 Vue 实例，或者 Vue 实例的根数据对象</b>。构造结构??</p>
                    <p>对应的还有 Vue.delete( target, propertyName/index )</p>
                    <p></p>
                </div>
            </TabPane>
            <TabPane label="遇到问题以及思路">
                <div v-highlight>
                    <p></p>
                    <script v-pre type="text/html">
                    </script>
                </div>
            </TabPane>
        </Tabs>
        <Tabs type="border-card">
            <TabPane label="序">
            </TabPane>
            <TabPane label="Vue.directive">
                <div v-highlight>
                    <p>注册或获取全局指令</p>
                    <script v-pre type="text/js">
                        // 注册
                        Vue.directive('my-directive', {
                            bind: function () {},
                            inserted: function () {},
                            update: function () {},
                            componentUpdated: function () {},
                            unbind: function () {}
                        })
                        // 注册 (指令函数)
                        Vue.directive('my-directive', function () {
                            // 这里将会被 `bind` 和 `update` 调用
                        })
                        // getter，返回已注册的指令
                        var myDirective = Vue.directive('my-directive')
                    </script>
                </div>
            </TabPane>
            <TabPane label="Vue.filter">
                <div v-highlight>
                    <p>注册或获取全局过滤器</p>
                    <script v-pre type="text/js">
                        // 注册
                        Vue.filter('my-filter', function (value) {
                            // 返回处理后的值
                        })
                        // getter，返回已注册的过滤器
                        var myFilter = Vue.filter('my-filter')
                    </script>
                </div>
            </TabPane>
            <TabPane label="Vue.component">
                <div v-highlight>
                    <p>注册或获取全局组件。注册还会自动使用给定的id设置组件的名称</p>
                    <script v-pre type="text/html">
                        // 注册组件，传入一个扩展过的构造器
                        Vue.component('my-component', Vue.extend({ /* ... */ }))
                        // 注册组件，传入一个选项对象 (自动调用 Vue.extend)
                        Vue.component('my-component', { /* ... */ })
                        // 获取注册的组件 (始终返回构造器)
                        var MyComponent = Vue.component('my-component')
                    </script>
                </div>
            </TabPane>
            <TabPane label="Vue.use( plugin )">
                <div>
                    <p>安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。</p>
                    <p>如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。</p>
                    <p>该方法需要在调用 new Vue() 之前被调用。</p>
                    <p>当 install 方法被同一个插件多次调用，插件将只会被安装一次。</p>
                </div>
            </TabPane>
            <TabPane label="Vue.mixin( mixin )">
                <div>
                    <p>全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。</p>
                    <p>插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。</p>
                </div>
            </TabPane>
            <TabPane label="Vue.compile( template )">
                <div v-highlight>
                    <p>在 render 函数中编译模板字符串。只在独立构建时有效</p>
                    <script v-pre type="text/js">
                        var res = Vue.compile('<div><span>{{ msg }}</span></div>')
                        new Vue({
                            data: { msg: 'hello' },
                            render: res.render,
                            staticRenderFns: res.staticRenderFns
                        })
                    </script>
                </div>
            </TabPane>
        </Tabs>
        <Tabs type="border-card">
            <TabPane label="序">
            </TabPane>
            <TabPane label="data">
                <div v-highlight>
                    <p>限制：组件的定义只接受 function。</p>
                    <p>Vue 实例的数据对象。Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化。</p>
                    <p>对象必须是纯粹的对象 (含有零个或多个的 key/value 对)：浏览器 API 创建的原生对象，原型上的属性会被忽略。大概来说，data 应该只能是数据 - 不推荐观察拥有状态行为的对象。</p>
                    <p>一旦观察过，不需要再次在数据对象上添加响应式属性。因此推荐在创建实例之前，就声明所有的根级响应式属性。</p>
                    <p>实例创建之后，可以通过 vm.$data 访问原始数据对象。Vue 实例也代理了 data 对象上所有的属性，因此访问 vm.a 等价于访问 vm.$data.a。</p>
                    <p>以 _ 或 $ 开头的属性 不会 被 Vue 实例代理，因为它们可能和 Vue 内置的属性、API 方法冲突。你可以使用例如 vm.$data._property 的方式访问这些属性。</p>
                    <p>当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。</p>
                    <p>如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！</p>
                    <p>通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。</p>
                    <p>如果需要，可以通过将 vm.$data 传入 JSON.parse(JSON.stringify(...)) 得到深拷贝的原始数据对象。</p>
                    <p><b>注意，如果你为 data 属性使用了箭头函数，则 this 不会指向这个组件的实例</b></p>
                    <p></p>
                    <script v-pre type="text/js">
                        var data = { a: 1 }
                        // 直接创建一个实例
                        var vm = new Vue({
                            data: data
                        })
                        vm.a // => 1
                        vm.$data === data // => true
                        // Vue.extend() 中 data 必须是函数
                        var Component = Vue.extend({
                            data: function () {
                                return { a: 1 }
                            }
                        })
                    </script>
                </div>
            </TabPane>
            <TabPane label="props">
                <div v-highlight>
                    <p>props 可以是数组或对象，用于接收来自父组件的数据。</p>
                    <p>props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。</p>
                    <p>可以基于对象的语法使用以下选项：</p>
                    <p>type: ?</p>
                    <p>可以是下列原生构造函数中的一种：String、Number、Boolean、Array、Object、Date、Function、Symbol、任何自定义构造函数、或上述内容组成的数组。</p>
                    <p>会检查一个 prop 是否是给定的类型，否则抛出警告。Prop 类型的更多信息在此。</p>
                    <p>default: any</p>
                    <p>为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。</p>
                    <p>required: Boolean</p>
                    <p>定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。</p>
                    <p>validator: Function</p>
                    <p>自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。</p>
                    <p>你可以在这里查阅更多 prop 验证的相关信息。</p>
                    <p></p>
                    <script v-pre type="text/js">
                        props: ['size', 'myMessage']
                        props: {
                            // 检测类型
                            height: Number,
                            // 检测类型 + 其他验证
                            age: {
                                type: Number,
                                default: 0,
                                required: true,
                                validator: function (value) { return value >= 0 }
                            }
                        }
                    </script>
                </div>
            </TabPane>
            <TabPane label="computed">
                <div v-highlight>
                    <p> 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。</p>
                    <p> 注意如果你为一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，</p>
                    <p> 不过你仍然可以将其实例作为函数的第一个参数来访问。</p>
                    <script v-pre type="text/js">
                        computed: { aDouble: vm => vm.a * 2 }
                    </script>
                    <p>注意，如果某个依赖 (比如非响应式属性) 在该实例范畴之外，则计算属性是不会被更新的。</p>
                    <p>计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。</p>
                    <script v-pre type="text/js">
                        var vm = new Vue({
                            data: { a: 1 },
                            computed: {
                                // 仅读取
                                aDouble: function () {
                                return this.a * 2
                                },
                                // 读取和设置
                                aPlus: {
                                    get: function () { return this.a + 1 },
                                    set: function (v) { this.a = v - 1 }
                                }
                            }
                        })
                        vm.aPlus // => 2
                        vm.aPlus = 3
                        vm.a // => 2
                        vm.aDouble // => 4
                    </script>
                </div>
            </TabPane>
            <TabPane label="methods">
                <div v-highlight>
                    <p>methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。</p>
                    <p>方法中的 this 自动绑定为 Vue 实例。</p>
                    <p>注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。</p>
                    <p>理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。</p>
                    <p></p>
                    <script v-pre type="text/js">
                        var vm = new Vue({
                            data: { a: 1 },
                            methods: {
                                plus: function () { this.a++ }
                            }
                        })
                        vm.plus()
                        vm.a // 2
                    </script>
                </div>
            </TabPane>
            <TabPane label="watch">
                <div v-highlight>
                    <p>一个对象，键是需要观察的表达式，值是对应回调函数。</p>
                    <p>值也可以是方法名，或者包含选项的对象。</p>
                    <p>Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。</p>
                    <p>注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。</p>
                    <p>理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。</p>
                    <p></p>
                    <script v-pre type="text/js">
                        var vm = new Vue({
                            data: {
                                a: 1, b: 2, c: 3, d: 4, e: { f: { g: 5 } }
                            },
                            watch: {
                                // 新值旧值
                                a: function (val, oldVal) {
                                    console.log('new: %s, old: %s', val, oldVal)
                                },
                                // 方法名
                                b: 'someMethod',
                                // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
                                c: {
                                    handler: function (val, oldVal) { /* ... */ },
                                    deep: true
                                },
                                // 该回调将会在侦听开始之后被立即调用
                                d: {
                                    handler: 'someMethod',
                                    immediate: true
                                },
                                e: [
                                    'handle1',
                                    function handle2 (val, oldVal) { /* ... */ },
                                    { handler: function handle3 (val, oldVal) { /* ... */ }, /* ... */ }
                                ],
                                // watch vm.e.f's value: {g: 5}
                                'e.f': function (val, oldVal) { /* ... */ }
                            }
                        })
                        vm.a = 2 // => new: 2, old: 1
                    </script>
                </div>
            </TabPane>
        </Tabs>
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
