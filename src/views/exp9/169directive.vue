<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">除了默认设置的核心指令( v-model 和 v-show ), Vue 也允许注册自定义指令</div>
            <div class="blogContent" v-highlight>
                <p><input v-focus>;</p>
                <script type="text/js">
                    /* 注册一个全局自定义指令 v-focus*/
                    Vue.directive('focus', {
                        inserted: function (el) { el.focus() }
                    })
                    /* 创建根实例*/
                    new Vue({ el: '#app' })
                </script>
                <p>我们也可以在实例使用 directives 选项来注册局部指令，这样指令只能在这个实例中使用：</p>
                <script type="text/js">
                    /* 创建根实例*/
                    new Vue({
                        el: '#app',
                        directives: {
                            // 注册一个局部的自定义指令 v-focus
                            focus: { inserted: function (el) { el.focus() } }
                        }
                    })
                </script>
                <p>指令定义函数提供了几个钩子函数（可选）：</p>
                <ul>
                    <li>bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。</li>
                    <li>inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。</li>
                    <li>update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。</li>
                    <li>componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。</li>
                    <li>unbind: 只调用一次， 指令与元素解绑时调用。</li>
                </ul>
                <p>钩子函数的参数有：</p>
                <ul>
                    <li>el: 指令所绑定的元素，可以用来直接操作 DOM 。</li>
                    <li>binding: 一个对象，包含以下属性：
                        <ul>
                            <li>name: 指令名，不包括 v- 前缀。</li>
                            <li>value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。</li>
                            <li>oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。</li>
                            <li>expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。</li>
                            <li>arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。</li>
                            <li>modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。</li>
                            <li>vnode: Vue 编译生成的虚拟节点。</li>
                            <li>oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。</li>
                        </ul>
                    </li>
                </ul>
                <p>指令函数可接受所有合法的 JavaScript 表达式</p>
                <p>简单demo</p>
                <script type="text/html" v-pre>
                    <div v-runoob="{ color: 'green', text: '菜鸟教程!' }"></div>
                </script>
                <script type="text/js">
                    Vue.directive('runoob', function (el, binding) {
                        /* 简写方式设置文本及背景颜色 */
                        el.innerHTML = binding.value.text
                        el.style.backgroundColor = binding.value.color
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
