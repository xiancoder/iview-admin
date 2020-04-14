<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">金钱数字转换为汉字大写</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="转换">
                        <Input type="textarea" v-model="frm.textarea1"
                            placeholder="金钱数字转换为汉字大写" :rows="8"
                            style="width: 800px"/>
                        <div class="ivu-form-item-notice-tip">转换为中文 = {{textarea2}}</div>
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
import { money2Chinese } from '@/utils'

export default {
    data () {
        return {
            frm: {
                textarea1: ''
            }
        }
    },
    computed: { // 计算属性
        textarea2 () {
            return money2Chinese(this.frm.textarea1)
        }
    },
    watch: {
    },
    mounted () {
    }
}
</script>
