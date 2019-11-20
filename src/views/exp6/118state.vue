<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">状态管理 触发/监听</div>
            <div class="blogContent" v-highlight>
                <p>状态值变化 {{ teststate1 }}</p>
                <p>当前状态值为 {{ teststate2 }}</p>
                <p><Button @click="changeState()">changeState</Button></p>
                <script type="text/js">
                    data () {
                        return {
                            teststate1: ''
                        }
                    },
                    computed: {
                        teststate2 () {
                            return this.$store.state.user.testState || 'undefined'
                        }
                    },
                    watch: {
                        '$store.state.user.testState' (n, o) {
                            this.teststate1 = n + ' / ' + o
                        }
                    },
                    methods: {
                        changeState () {
                            this.$store.dispatch('user/handleTestState', this.$store.state.user.testState + 10)
                        }
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">页面刷新后，页面未保存的数据就会丢失，为了克服这个问题， vuex-persistedstate出现了</div>
            <div class="blogContent" v-highlight>
                <p>我们总是习惯于放在浏览器的sessionStorage和localStorage中。但是用了vue后，vuex便出现了。</p>
                <p>vuex优势：相比sessionStorage，存储数据更安全，<b>sessionStorage可以在控制台被看到</b>。</p>
                <p>vuex劣势：在F5刷新页面后，vuex会重新更新state，所以，存储的数据会丢失。</p>
                <ul>
                    <li>原理：将vuex的state存在localStorage或sessionStorage或cookie中一份</li>
                    <li>刷新页面的一瞬间，vuex数据消失，vuex回去sessionStorage中哪会数据，变相的实现了数据刷新不丢失~</li>
                </ul>
                <p>在store下的index.js中</p>
                <p>存储到sessionStorage，配置如下：</p>
                <script type="text/js">
                    import createPersistedState from "vuex-persistedstate"
                    const store = new Vuex.Store({
                        // ...
                        plugins: [createPersistedState({
                            storage: window.sessionStorage
                        })]
                    })
                </script>
                <p>vuex-persistedstate默认持久化所有state，指定需要持久化的state,配置如下：</p>
                <script type="text/js">
                    plugins: [createPersistedState({
                        storage: window.sessionStorage,
                        reducer(val) {
                            return { user: val.user }// 只储存state中的user
                        }
                    })]
                </script>
                <h2><font color="red"><del>经过使用觉得过于好使 还是将cache部分独立出去作为功能模块来控制更条理清楚</del></font></h2>
                <h2><font color="red">经过使用觉得好使</font></h2>
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
        return {
            teststate1: ''
        }
    },
    computed: {
        teststate2 () {
            return this.$store.state.user.testState || 'undefined'
        }
    },
    watch: {
        '$store.state.user.testState' (n, o) {
            this.teststate1 = n + ' / ' + o
        }
    },
    methods: {
        changeState () {
            this.$store.dispatch('user/handleTestState', this.$store.state.user.testState + 10)
        }
    }
}
</script>
