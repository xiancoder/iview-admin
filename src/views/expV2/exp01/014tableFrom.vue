<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格 弹窗表单</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:red"/> 请将弹窗表单中的表单作为组件引入 而非直接在本页面中编写 (杜绝又臭又长)</p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年11月27日18:07:07 更新 如果逻辑复杂超过两三个输入框 最好独立出来</p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                    <Button type="default" @click="model.show1=true">点击弹出表单</Button>
                    <Modal v-model="model.show1" closable :mask-closable="false" footer-hide width="600">
                        <from1 :startDate="startDate" @on-submit="handleSubmit1"/>
                    </Modal>
                    <router-link :to="{name:'expV2_exp01_014tableFrom@from'}">
                        <Button type="default"> 跳转表单 </Button>
                    </router-link>
                    <script type="text/html" v-pre>
                        <Button type="default" @click="model.show1=true">点击弹出表单</Button>
                    </script>
                    <script type="text/html" v-pre>
                        <Modal v-model="model.show1" closable :mask-closable="false" footer-hide width="600">
                            <from1 :startDate="startDate" @on-submit="handleSubmit1"/>
                        </Modal>
                    </script>
                    <script type="text/js">
                        handleSubmit1 (res) { // 表单1 提交完毕
                            this.model.show1 = false
                            if (res === 1) {
                                this.yunxiTable.ajax()
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
        </div>
    </div>
</template>
<script>
import from1 from './014tableFrom@from'
export default {
    data () {
        return {
            model: {
                show1: false
            },
            startDate: new Date(),
            end1: 1 // 防呆设计
        }
    },
    components: {
        from1
    },
    methods: {
        handleSubmit1 (res) { // 表单1 提交完毕
            this.model.show1 = false
            if (res === 1) {
                this.yunxiTable.ajax()
            }
        }
    }
}
</script>
