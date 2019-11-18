<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[Vuex] 全面了解</div>
            <div class="blogContent" v-highlight>
                <p>区分 actions 和 mutations 并不是为了解决竞态问题，<b>而是为了能用 devtools 追踪状态变化</b>。</p>
                <p>事实上在 vuex 里面 actions 只是一个架构性的概念，<b>并不是必须的</b></p>
                <p>说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutation 就行。异步竞态怎么处理那是用户自己的事情。</p> <p>vuex 真正限制你的只有 mutation 必须是同步的这一点（<b>在 redux 里面就好像 reducer 必须同步返回下一个状态一样</b>）。</p>
                <p>同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态（和 reducer 一样），这样 devtools 就可以打个 snapshot 存下来，然后就可以随便 time-travel 了。</p>
                <p>如果你开着 devtool 调用一个异步的 action，你可以清楚地看到它所调用的 mutation 是何时被记录下来的，并且可以立刻查看它们对应的状态。</p>
                <p>亲测： 如果在mutation中做了异步操作，在dev-tools中会立即打印一个snapshot，而此时异步操作还没有执行完，此时的snapshot的信息是错误的。</p>
                <p>而在action中做异步操作dev-tools会等等异步操作执行完才去打印mutation的一个snapshot,这样便于我们回查time-travel,查看在某个mutation里的变化。</p>
                <p>Vuex提供了commit方法来修改状态</p>
                <script type="text/html" v-pre>
                    const mutations={
                        add(state){
                            state.count++
                        },
                        reduce(state){
                            state.count--
                        }
                    }
                    <button @click="$store.commit('add')">+</button>
                    <button @click="$store.commit('reduce')">-</button>
                    reduce: function () {
                        this.$store.commit('add', 10) // html标签是可以不写this
                    }
                </script>
                <p>mutations : 突变/改变 - 改变状态的标准入口/规定方式</p>
                <p>actions : 业务逻辑涉及请求/改变状态/影响全局的方法</p>
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
