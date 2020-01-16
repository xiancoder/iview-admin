<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">汉字转音调拼音</div>
            <div class="blogContent" v-highlight>
                <a href="https://www.npmjs.com/package/pinyin4js"></a><br />
                <a href="https://npm.runkit.com/pinyin4js"></a>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="输入汉字" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填 【完美】</div>
                    </FormItem>
                    <FormItem label="转转音" prop="text1">
                        <p>{{ frm.text1 }}</p>
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
import pinyin4js from 'pinyin4js'

export default {
    data () {
        return {
            frm: {
                input1: '壮哉我大石家庄',
                text1: ''
            }
        }
    },
    watch: {
        'frm.input1': {
            handler (val) {
                this.frm.text1 = pinyin4js.convertToPinyinString(this.frm.input1, ' ', pinyin4js.WITH_TONE_MARK)
            },
            immediate: true
        }
    },
    mounted () {
    }
}
</script>
