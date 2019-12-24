<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">事件处理 事件参数 键盘事件 相应方式</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。</p>
                <script type="text/html" v-pre>
                    <button v-on:click="counter += 1">Add 1</button>
                </script>
                <p>然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个需要调用的方法名称。</p>
                <script type="text/html" v-pre>
                    <button v-on:click="greet">Greet</button>
                </script>
                <p>内联处理器中的方法除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：</p>
                <p>有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：</p>
                <script type="text/html" v-pre>
                    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
                        Submit
                    </button>
                </script>
                <p>在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。</p>
                <p>为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。</p>
                <script type="text/html" v-pre>
                    <!-- 阻止单击事件继续传播 -->
                    <a v-on:click.stop="doThis"></a>
                    <!-- 提交事件不再重载页面 -->
                    <form v-on:submit.prevent="onSubmit"></form>
                    <!-- 修饰符可以串联 -->
                    <a v-on:click.stop.prevent="doThat"></a>
                    <!-- 只有修饰符 -->
                    <form v-on:submit.prevent></form>
                    <!-- 添加事件监听器时使用事件捕获模式 -->
                    <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
                    <div v-on:click.capture="doThis">...</div>
                    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
                    <!-- 即事件不是从内部元素触发的 -->
                    <div v-on:click.self="doThat">...</div>
                </script>
                <p>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。</p>
                <script type="text/html" v-pre>
                    <!-- 点击事件将只会触发一次 -->
                    <a v-on:click.once="doThis"></a>
                    <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
                    <!-- 而不会等待 `onScroll` 完成  -->
                    <!-- 这其中包含 `event.preventDefault()` 的情况 -->
                    <div v-on:scroll.passive="onScroll">...</div>
                </script>
                <p>在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：</p>
                <script type="text/html" v-pre>
                    <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
                    <input v-on:keyup.enter="submit">
                </script>
                <p>keyCode 的事件用法已经被废弃了并可能不会被最新的浏览器支持。</p>
                <p>为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：</p>
                <p>.enter .tab .delete (捕获“删除”和“退格”键) .esc .space .up .down .left .right</p>
                <p>可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。</p>
                <p>.ctrl .alt .shift .meta</p>
                <p>注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。</p>
                <script type="text/html" v-pre>
                    <!-- Alt + C -->
                    <input @keyup.alt.67="clear">
                    <!-- Ctrl + Click -->
                    <div @click.ctrl="doSomething">Do something</div>
                </script>
                <p>.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。</p>
                <script type="text/html" v-pre>
                    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
                    <button @click.ctrl="onClick">A</button>
                    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
                    <button @click.ctrl.exact="onCtrlClick">A</button>
                    <!-- 没有任何系统修饰符被按下的时候才触发 -->
                    <button @click.exact="onClick">A</button>
                </script>
                <p>标按钮修饰符.left .right .middle</p>
                <p>这些修饰符会限制处理函数仅响应特定的鼠标按钮。</p>
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
