<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">文本长度</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="直接展示长度">
                        <Input type="textarea" v-model="frm.textarea1"
                            placeholder="直接展示长度" :rows="8"
                            style="width: 800px"/>
                        <div class="ivu-form-item-notice-tip">文本长度 length = {{frm.textarea1.length}}</div>
                    </FormItem>
                    <FormItem label="直接展示长度">
                        <Input type="textarea" v-model="frm.textarea2"
                            placeholder="直接展示长度" :rows="8"
                            style="width: 800px"/>
                        <div class="ivu-form-item-notice-tip">文本长度 length = {{frm.textarea2.length}}</div>
                    </FormItem>
                </Form>
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
            frm: {
                textarea1: '',
                textarea2: ''
            }
        }
    },
    watch: {
    },
    mounted () {
    }
}
</script>
