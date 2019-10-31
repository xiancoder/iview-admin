<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[VUE] 理清 Vue 中的钩子函数</div>
            <div class="blogContent" v-highlight>
                <script type="text/js">
                    import Vue from 'vue' // 核心
                    Vue.component('Test', {
                        data () { return {} },
                        computed: { },
                        methods: { },
                        props: { name: String },
                        template: `<div class="test">{ { name } }</div>`,
                        beforeCreate() { console.log('Test beforeCreate') },
                        created() { console.log('Test created') },
                        mounted() { console.log('Test mounted') },
                        beforeDestroy() { console.log('Test beforeDestroy') },
                        destroyed() { console.log('Test destroyed') },
                        beforeUpdate() { console.log('Test beforeUpdate') },
                        updated() { console.log('Test updated') }
                    })
                    Vue.component('Test1', {
                        data () { return {} },
                        computed: { },
                        methods: { },
                        props: { name: String },
                        template: '<div class="test1"><slot />{ { name } }</div>',
                        beforeCreate() { console.log('Test1 beforeCreate') },
                        created() { console.log('Test1 created') },
                        mounted() { console.log('Test1 mounted') },
                        beforeDestroy() { console.log('Test1 beforeDestroy') },
                        destroyed() { console.log('Test1 destroyed') },
                        beforeUpdate() { console.log('Test1 beforeUpdate') },
                        updated() { console.log('Test1 updated') }
                    })
                </script>
                <p>运行这个例子，会发现输出如下：</p>
                <pre>
                    Test1 beforeCreate
                    Test1 created
                    Test beforeCreate
                    Test created
                    Test mounted
                    Test1 mounted
                    -----------
                    Test1 beforeUpdate
                    Test beforeUpdate
                    Test updated
                    Test1 updated
                    -----------
                    -----------
                    Test1 beforeDestroy
                    Test beforeDestroy
                    Test destroyed
                    Test1 destroyed
                    -----------
                </pre>
                <p>实际上，此处可以对照 DOM 事件的捕获和冒泡过程来看：</p>
                <p>beforeCreate 、 created 、 beforeUpdate 、 beforeDestroy 是在“捕获”过程中调用的；</p>
                <p>mounted 、 updated 、 destroyed 是在“冒泡”过程中调用的。</p>
                <p></p>
                <script type="text/js">
                    Vue.directive('mydirective', {
                        bind() {},
                        inserted() {},
                        update() {},
                        componentUpdated() {},
                        unbind() {}
                    })
                </script>
                <script type="text/js">
                    import Vue from 'vue' // 核心
                    Vue.directive('dir', {
                        bind(el) { console.log('dir bind') console.log(!!el.parentNode) },
                        inserted(el) { console.log('dir inserted') console.log(!!el.parentNode) },
                        update(el) { console.log('dir update') console.log('-----', el.textContent) },
                        componentUpdated(el) { console.log('dir componentUpdated') console.log('-----', el.textContent) },
                        unbind(el) { console.log('dir unbind') console.log(!!el.parentNode) }
                    })
                    Vue.component('Test', {
                        props: { name: String, shouldBind: Boolean },
                        template: `<div><b>{ { name } }</b><span v-if="shouldBind" v-dir>{ { name } }</span></div>`
                    })
                    new Vue({
                        el: '#app',
                        data() { return { name: '', shouldBind: true } },
                        mounted() { setTimeout(() => { this.name = 'yibuyisheng' }, 1000)
                        setTimeout(() => { this.shouldBind = false }, 2000) },
                        template: '<Test :name="name" :should-bind="shouldBind" />'
                    })
                </script>
                <p>执行上述代码，可以看到如下输出：</p>
                <pre>
                    dir bind
                    false
                    dir inserted
                    true
                    dir update
                    -----
                    dir componentUpdated
                    ----- yibuyisheng
                    dir unbind
                    false
                </pre>
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
