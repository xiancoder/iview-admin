<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"></div>
            <div class="blogContent" v-highlight>
                <Button @click="model.show1=!model.show1">修改密码::弹框</Button>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <Modal v-model="model.show1" title="修改密码" :closable="false" :mask-closable="false" footer-hide>
            <from1 :in="frm" @on-submit="handleSubmit1"/>
        </Modal>
    </div>
</template>
<script>
import from1 from './147goodFrom'

export default {
    components: {
        from1
    },
    data () {
        return {
            frm: {
                a: 1,
                b: 2
            },
            model: {
                show1: false
            }
        }
    },
    methods: {
        handleSubmit1 () {
            alert(123)
        }
    },
    mounted () {
    }
}
</script>
