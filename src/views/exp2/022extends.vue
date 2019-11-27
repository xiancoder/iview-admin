<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">组件的extends继承</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 相比mixin 这种方式更好更随意 大力推广</p>
                <script type="text/js" v-pre>
                    import Vue from 'vue' // 核心
                    const compoent = {
                        props: {
                            propOne: String
                        },
                        template: `
                            <div>
                                <input type="text" v-model="text">
                                <span @click="handleChange">{{propOne}}</span>
                            </div>
                        `,
                        data () {
                            return {
                                text: 0
                            }
                        },
                        mounted () {
                            console.log('comp mounted')
                        },
                        methods: {
                            handleChange () {
                                this.$emit('change')
                            }
                        }
                    }
                    // 继承的方式很简单
                    // 如下
                    const componet2 = {
                        extends: compoent, //第一种继承方式
                        propsData: {
                            propOne: 'xxx' //传值给继承组件的props
                        },
                        data () { //会和继承组件的data合并
                            return {
                                text: 1
                            }
                        },
                        mounted () { //会和继承组件的mounted方法合并
                            console.log(this.$parent.$options.name)  //通过this.$parent调用父组件的值
                        }
                    };
                    const CompVue = Vue.extend(compoent) // 第二种继承方式
                    new CompVue({
                        el: '#root',
                        propsData: {
                            propOne: 'xxx'
                        },
                        data: {
                            text: '123'
                        },
                        mounted () {
                            console.log('instance mounted')
                        }
                    })
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
