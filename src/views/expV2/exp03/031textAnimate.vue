<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">单元素/组件的过渡</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效 很漂亮</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <hr />
                <button v-on:click="show = !show"> Toggle </button>
                <hr />
                <transition name="fuck">
                    <p v-if="show">hello</p>
                </transition>
                <hr />
                <transition-group name="shit">
                     <!-- 这里尽量不直接使用index作为key -->
                    <span v-for="(item, index) of list" :key="'shit'+index">
                        {{item.title}} -
                    </span>
                </transition-group>
                <hr />
                <button @click="handleBtnClick1">handleBtnClick1</button>
                <button @click="handleBtnClick2">handleBtnClick2</button>
                <transition name="fuck">
                    <div v-if="show" @click="show = !show"
                        style=" position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: #00000096; z-index: 9998; ">
                        <img src="static/img.byj/3.png" alt="" style="position: fixed; min-width: 50px; max-width: 80%; max-height: 80%; z-index: 9999; top: 50%; left: 50%; transition: all 300ms ease 0s; transform: translate(-50%, -50%); cursor: -webkit-zoom-out;"/>
                    </div>
                </transition>
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
let count = 0
export default {
    data () {
        return {
            show: true,
            list: []
        }
    },
    methods: {
        handleBtnClick1 () {
            this.list.push({ id: count++, title: 'hello world ' + count })
            this.list.push({ id: count++, title: 'hello world ' + count })
        },
        handleBtnClick2 () {
            this.list.splice(0, 5)
        }
    },
    mounted () {
    }
}
</script>
<style type="text/css">
    .fuck-enter-active, .fuck-leave-active { transition: opacity 5s; }
    .fuck-enter, .fuck-leave-to { opacity: 0; }
    .shit-enter-active, .shit-leave-active { transition: opacity 1s; }
    .shit-enter, .shit-leave-to { opacity: 0; }
</style>
