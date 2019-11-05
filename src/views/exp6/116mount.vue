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
                    var vm = new Vue({
                        // 数据
                        data: "声明需要响应式绑定的数据对象",
                        props: "接收来自父组件的数据",
                        propsData: "创建实例时手动传递props，方便测试props",
                        computed: "计算属性",
                        methods: "定义可以通过vm对象访问的方法",
                        watch: "Vue实例化时会调用$watch()方法遍历watch对象的每个属性",
                        // DOM
                        el: "将页面上已存在的DOM元素作为Vue实例的挂载目标",
                        template: "可以替换挂载元素的字符串模板",
                        render: "渲染函数，字符串模板的替代方案",
                        renderError: "仅用于开发环境，在render()出现错误时，提供另外的渲染输出",
                        // 生命周期钩子
                        beforeCreate: "发生在Vue实例初始化之后，data observer和event/watcher事件被配置之前",
                        created: "发生在Vue实例初始化以及data observer和event/watcher事件被配置之后",
                        beforeMount: "挂载开始之前被调用，此时render()首次被调用",
                        mounted: "el被新建的vm.$el替换，并挂载到实例上之后调用",
                        beforeUpdate: "数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前",
                        updated: "数据更改导致虚拟DOM重新渲染和打补丁之后被调用",
                        activated: "keep-alive组件激活时调用",
                        deactivated: "keep-alive组件停用时调用",
                        beforeDestroy: "实例销毁之前调用，Vue实例依然可用",
                        destroyed: "Vue实例销毁后调用，事件监听和子实例全部被移除，释放系统资源",
                        // 资源
                        directives: "包含Vue实例可用指令的哈希表",
                        filters: "包含Vue实例可用过滤器的哈希表",
                        components: "包含Vue实例可用组件的哈希表",
                        // 组合
                        parent: "指定当前实例的父实例，子实例用this.$parent访问父实例，父实例通过$children数组访问子实例",
                        mixins: "将属性混入Vue实例对象，并在Vue自身实例对象的属性被调用之前得到执行",
                        extends: "用于声明继承另一个组件，从而无需使用Vue.extend，便于扩展单文件组件",
                        provide&inject: "2个属性需要一起使用，用来向所有子组件注入依赖，类似于React的Context",
                        // 其它
                        name: "允许组件递归调用自身，便于调试时显示更加友好的警告信息",
                        delimiters: "改变模板字符串的风格，默认为{{}}",
                        functional: "让组件无状态(没有data)和无实例(没有this上下文)",
                        model: "允许自定义组件使用v-model时定制prop和event",
                        inheritAttrs: "默认情况下，父作用域的非props属性绑定会应用在子组件的根元素上。当编写嵌套有其它组件或元素的组件时，可以将该属性设置为false关闭这些默认行为",
                        comments: "设为true时会保留并且渲染模板中的HTML注释"
                    });
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
