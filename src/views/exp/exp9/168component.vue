<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">组件（Component）是 Vue.js 最强大的功能之一。学习一下怎么编写组件</div>
            <div class="blogContent" v-highlight>
                <p>资料 <a href="http://doc.vue-js.com/v2/guide/components.html#什么是组件？"></a></p>
                <p>要注册一个全局组件，你可以使用 Vue.component(tagName, options)。</p>
                <script type="text/js">
                    Vue.component('my-component', {})
                </script>
                <p>对于自定义标签名，Vue.js 不强制要求遵循 W3C规则 （小写，并且包含一个短杠），尽管遵循这个规则比较好。</p>
                <p>不必在全局注册每个组件。通过使用组件实例选项注册，可以使组件仅在另一个实例/组件的作用域中可用</p>
                <script type="text/js">
                    var Child = {
                        template: '[div]A custom component![/div]'
                    }
                    new Vue({
                        components: {
                            'my-component': Child /* [my-component] 将只在父模板可用*/
                        }
                    })
                </script>
                <p>当使用 DOM 作为模版时（例如，将 el 选项挂载到一个已存在的元素上）, 你会受到 HTML 的一些限制</p>
                <p>因为 Vue 只有在浏览器解析和标准化 HTML 后才能获取模版内容。</p>
                <p>尤其像这些元素 ul ， ol， table ， select 限制了能被它包裹的元素， option 只能出现在其它元素内部。</p>
                <p>自定义组件 my-row 被认为是无效的内容，因此在渲染的时候会导致错误。变通的方案是使用特殊的 is 属性</p>
                <script type="text/html">
                    <table>
                        <tr is="my-row"></tr>
                    </table>
                </script>
                <p>那么 Vue 会在控制台发出警告，告诉你在组件中 data 必须是一个函数。最好理解这种规则的存在意义。</p>
                <script type="text/js">
                    Vue.component('simple-counter', {
                        template: '[button v=on:click="counter += 1"]{ { counter } }[/button]',
                        data: function () { /* data 是一个函数，因此 Vue 不会警告，但是我们为每一个组件返回了同一个对象引用 */
                            return data
                        }
                    })
                </script>
                <p>在 Vue.js 中，父子组件的关系可以总结为 props down, events up</p>
                <p>父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。看看它们是怎么工作的。</p>
                <p>组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。</p>
                <p>prop 是父组件用来传递数据的一个自定义属性。子组件需要显式地用 props 选项 声明 </p>
                <script type="text/js">
                    Vue.component('simple-counter', {
                        template: '[button v=on:click="counter += 1"]{ { counter } }[/button]',
                        data: function () {
                            return data
                        }
                    })
                </script>
                <p>HTML 特性不区分大小写。当使用非字符串模版时，prop的名字形式会从 camelCase 转为 kebab-case（短横线隔开）</p>
                <script type="text/html" v-pre>
                    <child v=bind:my-message="parentMsg"></child>
                    <!-- 使用 v=bind 的缩写语法通常更简单 -->
                    <child :my-message="parentMsg"></child>
                </script>
                <p>初学者常犯的一个错误是使用字面量语法传递数值</p>
                <p>因为它是一个字面 prop ，它的值以字符串 "1" 而不是以实际的数字传下去。</p>
                <p>如果想传递一个实际的 JavaScript 数字，需要使用 v_bind ，从而让它的值被当作 JavaScript 表达式计算</p>
                <script type="text/html" v-pre>
                    <!-- 传递了一个字符串"1" -->
                    <comp someprop="1"></comp>
                    <!-- 传递实际的数字 -->
                    <comp v_bind:someprop="1"></comp>
                </script>
                <p>prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。</p>
                <p>这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。</p>
                <script type="text/js">
                    props: ['initialCounter', 'size'],
                    data: function () {
                        return { counter: this.initialCounter }
                    }
                    computed: {
                        normalizedSize: function () {
                            return this.size.trim().toLowerCase()
                        }
                    }
                    mounted () {
                        var canvas = this.$el.querySelector('#canvas')
                    }
                </script>
                <p>组件可以为 props 指定验证要求</p>
                <p>如果未指定验证要求，Vue 会发出警告。当组件给其他人使用时这很有用。</p>
                <p>当 prop 验证失败了， Vue 将拒绝在子组件上设置此值，如果使用的是开发版本会抛出一条警告。</p>
                <script type="text/js">
                    Vue.component('example', {
                        props: {
                            /* 基础类型检测 （`null` 意思是任何类型都可以）*/
                            propA: Number,
                            /* 多种类型*/
                            propB: [String, Number],
                            /* 必传且是字符串*/
                            propC: { type: String, required: true },
                            /* 数字，有默认值*/
                            propD: { type: Number, default: 100 },
                            /* 数组／对象的默认值应当由一个工厂函数返回*/
                            propE: { type: Object, default: function () { return { message: 'hello' } } },
                            /* 自定义验证函数*/
                            propF: { validator: function (value) { return value > 10 } }
                        }
                    })
                </script>
                <p>每个 Vue 实例都实现了事件接口(Events interface)，即： 使用 $on(eventName) 监听事件 使用 $emit(eventName) 触发事件</p>
                <p>Vue的事件系统分离自浏览器的EventTarget API。尽管它们的运行类似，但是$on 和 $emit 不是addEventListener 和 dispatchEvent 的别名。</p>
                <script type="text/html" v-pre>
                    <div id="counter-event-example">
                        <p>{ { total } }</p>
                        <button-counter v=on:increment="incrementTotal"></button-counter>
                        <button-counter v=on:increment="incrementTotal"></button-counter>
                    </div>
                </script>
                <script type="text/js">
                    Vue.component('button-counter', {
                        template: '<button v=on:click="increment">{ { counter } }</button>',
                        data: function () {
                            return {
                                counter: 0
                            }
                        },
                        methods: {
                            increment: function () {
                                this.counter += 1
                                this.$emit('increment')
                            }
                        },
                    })
                    new Vue({
                        el: '#counter-event-example',
                        data: {
                            total: 0
                        },
                        methods: {
                            incrementTotal: function () {
                                this.total += 1
                            }
                        }
                    })
                </script>
                <p>子组件已经和它外部完全解耦了。它所做的只是触发一个父组件关心的内部事件</p>
                <h3>有时候，你可能想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v=on 。</h3>
                <p>自定义事件也可以用来创建自定义的表单输入组件</p>
                <script type="text/html" v-pre>
                    <my-component v=on:click.native="doTheThing"></my-component>
                    <input v=model="something">
                    <input v=bind:value="something" v=on:input="something = $event.target.value">
                    <input v=bind:value="something" v=on:input="something = arguments[0]">
                </script>
                <p>多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用保留的 component 元素，动态地绑定到它的 is 特性</p>
                <script type="text/js">
                    var vm = new Vue({
                        el: '#example',
                        data: { currentView: 'home' },
                        components: {
                            home: { /* ... */ },
                            posts: { /* ... */ },
                            archive: { /* ... */ }
                        }
                    })
                </script>
                <script type="text/html" v-pre>
                    <component v=bind:is="currentView">
                        <!-- 组件在 vm.currentview 变化时改变！ -->
                    </component>
                </script>
                <p>如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数</p>
                <p>在编写组件时，记住是否要复用组件有好处。一次性组件跟其它组件紧密耦合没关系，但是可复用组件应当定义一个清晰的公开接口。</p>
                <p>Vue 组件的 API 来自三部分 - props, events 和 slots ： Props 允许外部环境传递数据给组件 Events 允许组件触发外部环境的副作用 Slots 允许外部环境将额外的内容组合在组件中。</p>
                <p>使用 v=bind 和 v=on 的简写语法，模板的缩进清楚且简洁：</p>
                <script type="text/html" v-pre>
                    <my-component :foo="baz" :bar="qux" @event-a="doThis" @event-b="doThat" >
                        <img slot="icon" src="...">
                        <p slot="main-text">Hello!</p>
                    </my-component>
                </script>
                <h3>尽管有 props 和 events ，但是有时仍然需要在 JavaScript 中直接访问子组件。为此可以使用 ref 为子组件指定一个索引 ID 。</h3>
                <script type="text/html" v-pre>
                    <div id="parent">
                        <user-profile ref="profile"></user-profile>
                    </div>
                </script>
                <script type="text/js">
                    var parent = new Vue({ el: '#parent' })
                    var child = parent.$refs.profile /* 访问子组件 */
                </script>
                <p>当 ref 和 v_for 一起使用时， ref 是一个数组或对象，包含相应的子组件。</p>
                <p>$refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅作为一个直接访问子组件的应急方案——应当避免在模版或计算属性中使用 $refs 。</p>
                <h3>在大型应用中，我们可能需要将应用拆分为多个小模块，按需从服务器下载。为了让事情更简单， Vue.js 允许将组件定义为一个工厂函数，动态地解析组件的定义。Vue.js 只在组件需要渲染时触发工厂函数，并且把结果缓存起来，用于后面的再次渲染。</h3>
                <script type="text/js">
                    Vue.component('async-example', function (resolve, reject) {
                        setTimeout(function () {
                            resolve({
                                template: '<div>I am async!</div>'
                            })
                        }, 1000)
                    })
                    /* 工厂函数接收一个 resolve 回调，在收到从服务器下载的组件定义时调用。 */
                    /* 也可以调用 reject(reason) 指示加载失败。这里 setTimeout 只是为了演示。 */
                    Vue.component('async-webpack-example', function (resolve) {
                        /* 这个特殊的 require 语法告诉 webpack */
                        /* 自动将编译后的代码分割成不同的块， */
                        /* 这些块将通过 Ajax 请求自动下载。 */
                        require(['./my-async-component'], resolve)
                    })
                </script>
                <p>当注册组件（或者 props）时，可以使用 kebab-case ，camelCase ，或 TitleCase 。Vue 不关心这个。</p>
                <script type="text/js">
                    /* 在组件定义中 */
                    components: {
                        /* 使用 camelCase 形式注册 */
                        'kebab-cased-component': { /* ... */ },
                        'camelCasedComponent': { /* ... */ },
                        'TitleCasedComponent': { /* ... */ }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!-- 在HTML模版中始终使用 kebab-case -->
                    <kebab-cased-component></kebab-cased-component>
                    <camel-cased-component></camel-cased-component>
                    <title-cased-component></title-cased-component>
                </script>
                <p>当使用字符串模式时，可以不受 HTML 的 case-insensitive 限制。</p>
                <p>这意味实际上在模版中，你可以使用 camelCase 、 PascalCase 或者 kebab-case 来引用你的组件和 prop：</p>
                <script type="text/html" v-pre>
                    <!-- 在字符串模版中可以用任何你喜欢的方式! -->
                    <my-component></my-component>
                    <myComponent></myComponent>
                    <MyComponent></MyComponent>
                </script>
                <p>如果组件未经 slot 元素传递内容，你甚至可以在组件名后使用 / 使其自闭合： my-component</p>
                <p>当然，这只在字符串模版中有效。因为自闭的自定义元素是无效的 HTML ，浏览器原生的解析器也无法识别它。</p>
                <p>组件在它的模板内可以递归地调用自己，不过，只有当它有 name 选项时才可以</p>
                <p>如果你不谨慎, 递归组件可能导致死循环</p>
                <p>如果子组件有 inline-template 特性，组件将把它的内容当作它的模板，而不是把它当作分发内容。这让模板更灵活。</p>
                <p>但是 inline-template 让模板的作用域难以理解。</p>
                <p>最佳实践是使用 template 选项在组件内定义模板或者在 .vue 文件中使用 template 元素。</p>
                <script type="text/html" v-pre>
                    <my-component inline-template>
                        <div>
                            <p>These are compiled as the component's own template.</p>
                            <p>Not parent's transclusion content.</p>
                        </div>
                    </my-component>
                </script>
                <p>另一种定义模版的方式是在 JavaScript 标签里使用 text/x-template 类型，并且指定一个id。例如：</p>
                <p>这在有很多模版或者小的应用中有用，否则应该避免使用，因为它将模版和组件的其他定义隔离了。</p>
                <script type="text/html" v-pre>
                    <script type="text/x-template" id="hello-world-template">
                        <p>Hello hello hello</p>
                    [/script>
                </script>
                <script type="text/js">
                    Vue.component('hello-world', {
                        template: '#hello-world-template'
                    })
                </script>
                <p>使用 v=once 的低级静态组件(Cheap Static Component)</p>
                <p>尽管在 Vue 中渲染 HTML 很快，不过当组件中包含大量静态内容时，可以考虑使用 v=once 将渲染结果缓存起来，就像这样：</p>
                <script type="text/js">
                    Vue.component('terms-of-service', {
                        template: '\
                            <div v=once>\
                                <h1>Terms of Service</h1>\
                                ... a lot of static content ...\
                            </div>\
                        '
                    })
                </script>
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
