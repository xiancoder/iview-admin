<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">优化弹窗的方式</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效 随插随用</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Button @click="model.show1=!model.show1">修改密码::弹框</Button>
                <hr />
                <script type="text/html" v-pre>
                    <Modal v-model="model.show1" closable width="640" :mask-closable="false" footer-hide>
                        <from1 :flag="model.show1" :from="frm" @on-submit="handleSubmit1"/>
                    </Modal>
                </script>
                <script type="text/js">
                    import from1 from './211goodModalFrom'
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
                <p>表单页内部需要添加如下适配</p>
                <script type="text/js">
                    watch: { // 监听
                        flag (n, o) { // 离开时候清空输入框 归来时候初始化值
                            if (n === true) {
                                extend(this.frm, this.from)
                            } else {
                                this.$refs['form2235'].resetFields()
                            }
                        }
                    },
                    methods: {
                        ok () {
                            this.$refs['form2235'].validate(valid => {
                                if (valid) {
                                    this.$emit('on-submit', 1)
                                }
                            });
                        },
                        cancel () {
                            this.$emit('on-submit', 0)
                        }
                    },
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
import from1 from './211goodModalFrom'

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
