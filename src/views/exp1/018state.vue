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
