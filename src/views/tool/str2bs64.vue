<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">数据文本转bs64</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="输入" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填 【完美】</div>
                    </FormItem>
                    <FormItem label="转码" prop="text1">
                        <p>{{ frm.text1 }}</p>
                    </FormItem>
                    <FormItem label="转码验证" prop="text1">
                        <p>{{ frm.text2 }}</p>
                    </FormItem>
                    <FormItem label="解码" prop="text1">
                        <p>{{ frm.text3 }}</p>
                    </FormItem>
                </Form>
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
import { encodeBase64, decodeBase64 } from '@/utils/string'
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
                this.frm.text1 = encodeBase64(val)
                this.frm.text2 = decodeBase64(encodeBase64(val))
                this.frm.text3 = decodeBase64(val)
            },
            immediate: true
        }

    },
    mounted () {
    }
}
</script>
