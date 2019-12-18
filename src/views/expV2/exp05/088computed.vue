<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">computed</div>
            <div class="blogContent" v-highlight>
                <p>计算属性将被混入到 Vue 实例中。</p>
                <p>所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。</p>
                <p>计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。</p>
                <p>注意，如果某个依赖 (比如非响应式属性) 在该实例范畴之外，则计算属性是不会被更新的。</p>
                <p>计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：</p>
                <script type="text/js">
                    //aDouble、aPlus不需要在data中声明
                    computed: {
                        // 仅读取
                        aDouble: function () { return this.a * 2 },
                        // 读取和设置
                        aPlus: {
                            get: function () { return this.a + 1 },
                            set: function (v) { this.a = v - 1 }
                        },
                        fullName: {
                            // getter
                            get: function () {
                                return this.firstName + ' ' + this.lastName
                            },
                            // setter
                            set: function (newValue) {
                                var names = newValue.split(' ')
                                this.firstName = names[0]
                                this.lastName = names[names.length - 1]
                            }
                        }
                    }
                    // ...
                </script>
                <p>我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，<b>不同的是计算属性是基于它们的依赖进行缓存的。</b></p>
                <p>我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。</p>
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
