<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">v-on事件修饰符</div>
            <div class="blogContent" v-highlight>
                <script type="text/html">
                    <!-- 方法处理器 -->
                    <button v-on:click="doThis"></button>
                    <!-- 内联语句 -->
                    <button v-on:click="doThat('hello', $event)"></button>
                    <!-- 缩写 -->
                    <button @click="doThis"></button>
                    <!-- 停止冒泡 -->
                    <!-- 调用 event.stopPropagation() -->
                    <button @click.stop="doThis"></button>
                    <!-- 阻止默认行为 -->
                    <!-- 调用 event.preventDefault() -->
                    <button @click.prevent="doThis"></button>
                    <!-- 阻止默认行为，没有表达式 -->
                    <form @submit.prevent></form>
                    <!--  串联修饰符 -->
                    <button @click.stop.prevent="doThis"></button>
                    <!-- 键修饰符，键别名 -->
                    <input @keyup.enter="onEnter">
                    <!-- 键修饰符，键代码 -->
                    <input @keyup.13="onEnter">
                    <!-- 点击回调只会触发一次 -->
                    <button v-on:click.once="doThis"></button>
                    <!-- 对象语法 (2.4.0+) -->
                    <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
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
