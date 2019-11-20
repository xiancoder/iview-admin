<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">数据文本转url格式</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="输入" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填 【完美】</div>
                    </FormItem>
                    <FormItem label="转码" prop="text1">
                        <p>{{ frm.text1 }}</p>
                    </FormItem>
                    <FormItem label="转码" prop="text1">
                        <p>{{ frm.text12 }}</p>
                    </FormItem>
                    <FormItem label="解码" prop="text1">
                        <p>{{ frm.text3 }}</p>
                    </FormItem>
                    <FormItem label="解码" prop="text1">
                        <p>{{ frm.text32 }}</p>
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
                input1: '123',
                text1: '',
                text2: '',
                text3: ''
            }
        }
    },
    watch: {
        'frm.input1': {
            handler (val) {
                this.frm.text1 = encodeURI(val)
                this.frm.text12 = encodeURIComponent(val)
                this.frm.text3 = decodeURI(val)
                this.frm.text32 = decodeURIComponent(val)
            },
            immediate: true
        }

    },
    mounted () {
    }
}
</script>
