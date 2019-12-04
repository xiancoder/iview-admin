<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">优化弹窗的方式</div>
            <div class="blogContent" v-highlight>
                <Button @click="model.show1=!model.show1">修改密码::弹框</Button>
                <hr />
                <script type="text/html" v-pre>
                    <Modal v-model="model.show1" closable width="640" :mask-closable="false" footer-hide>
                        <from1 :flag="model.show1" :from="frm" @on-submit="handleSubmit1"/>
                    </Modal>
                </script>
                <script type="text/js">
                    import from1 from './147goodModalFrom'
                    export default {
                        components: {
                            from1
                        },
                        data () {
                            return {
                                frm: { a: 1, b: 2 },
                                model: {
                                    show1: false
                                }
                            }
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
        <Modal v-model="model.show1" closable width="640" :mask-closable="false" footer-hide>
            <from1 :flag="model.show1" :from="frm" @on-submit="handleSubmit1"/>
        </Modal>
    </div>
</template>
<script>
import from1 from './147goodModalFrom'

export default {
    components: {
        from1
    },
    data () {
        return {
            frm: { input1: '123456' },
            model: {
                show1: false
            }
        }
    },
    methods: {
        handleSubmit1 (flag) {
            this.model.show1 = false
            console.log('提交', flag ? '成功' : '放弃')
        }
    },
    mounted () {
    }
}
</script>
