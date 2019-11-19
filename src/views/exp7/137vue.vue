<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[Vuex] 全面了解</div>
            <div class="blogContent" v-highlight>
                <p>Vue.config.keyCodes 自定义键位触发事件</p>
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
                <p>Vue.extend( options )</p>
                <p>使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。</p>
                <p><b>data</b> 选项是特例，需要注意 - 在 <b>Vue.extend()</b> 中它必须是函数</p>
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
                <p>Vue.set( target, propertyName/index, value )</p>
                <p>向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。</p>
                <p>它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = 'hi')</p>
                <p>注意对象<b>不能是 Vue 实例，或者 Vue 实例的根数据对象</b>。构造结构??</p>
                <p>对应的还有 Vue.delete( target, propertyName/index )</p>
                <p>Vue.directive</p>
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
                <p>Vue.filter</p>
                <p>注册或获取全局过滤器</p>
                <script v-pre type="text/js">
                    // 注册
                    Vue.filter('my-filter', function (value) {
                        // 返回处理后的值
                    })
                    // getter，返回已注册的过滤器
                    var myFilter = Vue.filter('my-filter')
                </script>
                <p>Vue.component()</p>
                <p>注册或获取全局组件。注册还会自动使用给定的id设置组件的名称</p>
                <script v-pre type="text/html">
                    // 注册组件，传入一个扩展过的构造器
                    Vue.component('my-component', Vue.extend({ /* ... */ }))
                    // 注册组件，传入一个选项对象 (自动调用 Vue.extend)
                    Vue.component('my-component', { /* ... */ })
                    // 获取注册的组件 (始终返回构造器)
                    var MyComponent = Vue.component('my-component')
                </script>
                <p>Vue.use( plugin )</p>
                <p>安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。</p>
                <p>如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。</p>
                <p>该方法需要在调用 new Vue() 之前被调用。</p>
                <p>当 install 方法被同一个插件多次调用，插件将只会被安装一次。</p>
                <p>Vue.mixin( mixin )</p>
                <p>全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。</p>
                <p>插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。</p>
                <p>Vue.compile( template )</p>
                <p>在 render 函数中编译模板字符串。只在独立构建时有效</p>
                <script v-pre type="text/js">
                    var res = Vue.compile('<div><span>{{ msg }}</span></div>')
                    new Vue({
                        data: { msg: 'hello' },
                        render: res.render,
                        staticRenderFns: res.staticRenderFns
                    })
                </script>
                <p>data</p>
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
                <p>props</p>
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
                <p>computed</p>
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
                <p>methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。</p>
                <p>方法中的 this 自动绑定为 Vue 实例。</p>
                <p>注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。</p>
                <p>理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。</p>
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
                <p>watch</p>
                <p>一个对象，键是需要观察的表达式，值是对应回调函数。</p>
                <p>值也可以是方法名，或者包含选项的对象。</p>
                <p>Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。</p>
                <p>注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。</p>
                <p>理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。</p>
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
                <p>v-text 更新元素的 textContent</p>
                <script v-pre type="text/html">
                    <h1 v-text="msg"></h1>
                </script>
                <p>v-html 更新元素的 innerHTML</p>
                <script v-pre type="text/html">
                    <h1 v-html="msg"></h1>
                </script>
                <p>v-bind 当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</p>
                <p>语法：v-bind:title="msg"</p>
                <p>简写：:title="msg"</p>
                <script v-pre type="text/html">
                    <!-- 完整语法 -->
                    <a v-bind:href="url"></a>
                    <!-- 缩写 -->
                    <a :href="url"></a>
                </script>
                <p>v-on 绑定事件</p>
                <p>语法：v-on:click="say" or v-on:click="say('参数', $event)"</p>
                <p>简写：@click="say"</p>
                <p>说明：绑定的事件从methods中获取</p>
                <script v-pre type="text/html">
                    <!-- 完整语法 -->
                    <a v-on:click="doSomething"></a>
                    <!-- 缩写 -->
                    <a @click="doSomething"></a>
                    <!-- 方法传参 -->
                    <a @click="doSomething（“123”）"></a>
                </script>
                <p>事件修饰符</p>
                <pre>
                    .stop 阻止冒泡，调用 event.stopPropagation()
                    .prevent 阻止默认事件，调用 event.preventDefault()
                    .capture 添加事件侦听器时使用事件捕获模式
                    .self 只当事件在该元素本身（比如不是子元素）触发时触发回调
                    .once 事件只触发一次
                </pre>
                <p>v-model 在表单元素上创建双向数据绑定</p>
                <p>监听用户的输入事件以更新数据</p>
                <script v-pre type="text/html">
                    <input v-model="message" placeholder="edit me">
                    <p>Message is: {{ message }}</p>
                </script>
                <p>绑定表达式</p>
                <script v-pre type="text/html">
                    <input v-model="message" placeholder="edit me">
                    <p>Message is: {{ message?message:"" }}</p>
                </script>
                <p>如果message有值则显示message否则显示为空</p>
                <p>v-for 基于源数据多次渲染元素或模板块</p>
                <script v-pre type="text/html">
                    <!-- 1 基础用法 -->
                    <div v-for="item in items"> {{ item.text }} </div>
                    <!-- item 为当前项，index 为索引 -->
                    <p v-for="(item, index) in list">{{item}} -- {{index}}</p>
                    <!-- item 为值，key 为键，index 为索引 -->
                    <p v-for="(item, key, index) in obj">{{item}} -- {{key}}</p>
                    <p v-for="item in 10">{{item}}</p>
                </script>
                <p>key属性</p>
                <p>推荐：使用 v-for 的时候提供 key 属性，以获得性能提升。</p>
                <p>说明：使用 key，VUE会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。</p>
                <p>官方解释：当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。这个类似 Vue 1.x 的 track-by="$index" 。</p>
                <p>这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。</p>
                <p>样式处理 -class和style</p>
                <p>说明：这两个都是HTML元素的属性，使用v-bind，只需要通过表达式计算出字符串结果即可</p>
                <p>表达式的类型：字符串、数组、对象</p>
                <script v-pre type="text/html">
                    <!-- 1 -->
                    <div v-bind:class="{ active: true }"></div> ===>
                    <div class="active"></div>
                    <!-- 2 -->
                    <div :class="['active', 'text-danger']"></div> ===>
                    <div class="active text-danger"></div>
                    <!-- 3 -->
                    <div v-bind:class="[{ active: true }, errorClass]"></div> ===>
                    <div class="active text-danger"></div>
                    --- style ---
                    <!-- 1 -->
                    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
                    <!-- 2 将多个 样式对象 应用到一个元素上-->
                    <div v-bind:style="[baseStyles, overridingStyles]"></div>
                </script>
                <p>v-if 和 v-show 条件渲染</p>
                <p>v-if：根据表达式的值的真假条件，销毁或重建元素</p>
                <p>v-show：根据表达式之真假值，切换元素的 display CSS 属性</p>
                <p>这个指令保持在元素上直到关联实例结束编译。</p>
                <p>和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。</p>
                <p>防止刷新页面，网速慢的情况下出现[[ message ]]等数据格式</p>
                <script v-pre type="text/html">
                    <div v-cloak> {{ message }} </div>
                </script>
                <p>提升用户体验：v-cloak</p>
                <p>提升性能：v-pre</p>
                <h1>说明：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。</h1>
                <script v-pre type="text/html">
                    <span>{{ 哈哈 }}</span>
                </script>
                <p>提升性能：v-once</p>
                <p>说明：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。</p>
                <script v-pre type="text/html">
                    <span v-once>This will never change: {{msg}}</span>
                </script>
                <p>Dom元素获取: v-ref</p>
                 <p>在父组件上注册一个子组件的索引,便于直接访问,不需要表达式,必须提供参数id。</p>
                 <p>可以通过父组件的$refs对象访问子组件</p>
                 <p>当v-ref和v-for一起使用时,注册的值将是一个数组，包含多有的子组件，对应于绑定数组；</p>
                 <p>如果v-for使用在一个对象上，注册的值将是一个对象，包含所有的子组件，对应于绑定对象。</p>
                <p>Dom元素获取: v-el</p>
                <p>为Dom元素注册一个索引，方便通过所属实例的$els访问这个元素,可以用v-el：some-el设置this.$els.someEl.</p>
                <p></p>
                <script v-pre type="text/html">
                    <span v-el:msg>hello</span>
                    <span v-el:other-msg>world</span>
                </script>
                <p>通过this.$els获取相应的DOM元素:</p>
                <script type="text/js">
                    this.$els.msg.textContent  // ==>  "hello"
                    this.$els.otherMsg.textContent  // ==>  "world"
                </script>
                <p></p>
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
