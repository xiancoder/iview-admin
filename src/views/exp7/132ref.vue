<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue $refs的基本用法</div>
            <div class="blogContent" v-highlight>
                <h2>===============================================================================</h2>
                <script type="text/html">
                    <div id="app">
                        <input type="text" ref="input1"/>
                        <button @click="add">添加</button>
                    </div>
                </script>
                <script type="text/js">
                    new Vue({
                        el: "#app",
                        methods:{
                            add:function(){
                                this.$refs.input1.value ="22"; // this.$refs.input1  减少获取dom节点的消耗
                            }
                        }
                    })
                </script>
                <p>一般来讲，获取DOM元素，需document.querySelector（".input1"）获取这个dom节点，然后在获取input1的值。</p>
                <p>但是用ref绑定之后，我们就不需要在获取dom节点了，直接在上面的input上绑定input1，然后$refs里面调用就行。</p>
                <p>然后在javascript里面这样调用：this.$refs.input1  这样就可以减少获取dom节点的消耗了</p>
                <p>一般来讲，获取DOM元素，需document.querySelector（".input1"）获取这个dom节点，然后在获取input1的值。</p>
                <p>但是用ref绑定之后，我们就不需要在获取dom节点了，直接在上面的input上绑定input1，然后$refs里面调用就行。</p>
                <p>然后在javascript里面这样调用：this.$refs.input1 这样就可以减少获取dom节点的消耗了</p>
                <p>减少获取dom节点的消耗</p>
                <script type="text/html">
                    <p ref="input1"></p>
                </script>
                <script type="text/js">
                    this.$refs.input1.innerHTML = "减少获取dom节点的消耗"; // this.$refs
                </script>
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
