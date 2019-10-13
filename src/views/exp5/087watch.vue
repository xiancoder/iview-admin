<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">watch</div>
            <div class="blogContent" v-highlight>
                <p>键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。</p>
                <script type="text/js">watch: {
                    a: function (val, oldVal) {
                        console.log('new: %s, old: %s', val, oldVal)
                    },
                    // 方法名
                    b: 'someMethod',
                    // 深度 watcher
                    c: {
                        handler: function (val, oldVal) { /* ... */ },
                        deep: true, //深度观察
                        immediate：true, //绑定的时候就会执行一次
                    },
                    // 该回调将会在侦听开始之后被立即调用
                    d: {
                        handler: function (val, oldVal) { /* ... */ },
                        immediate: true
                    },
                    e: [
                        function handle1 (val, oldVal) { /* ... */ },
                        function handle2 (val, oldVal) { /* ... */ }
                    ],
                    // watch vm.e.f's value: {g: 5}
                    'e.f': function (val, oldVal) { /* ... */ }
                    }
                </script>
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
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
