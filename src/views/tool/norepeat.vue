<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">行列去重</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="输入" prop="input1">
                        <Input type="textarea" v-model="frm.textarea1" show-word-limit
                            placeholder="请输入XXXX" maxlength="1000" rows="8"
                            style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填 【完美】</div>
                    </FormItem>
                    <FormItem label="转码" prop="text1">
                        <Input type="textarea" v-model="frm.textarea2" show-word-limit
                            placeholder="请输入XXXX" maxlength="1000" rows="8"
                            style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">大发生发</div>
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
import { lineUnique } from '@/utils/string'
export default {
    data () {
        return {
            frm: {
                textarea1: `
                    懒人图库
                    www.lanrentuku.com
                    www.nifengla.com
                    www.lanrentuku.com
                    懒人图库
                    www.maitianquan.com
                    www.lanrentuku.com
                    zheye.cc
                    www.nifengla.com
                    www.maitianquan.com
                    zheye.cc
                    懒人图库
                    www.lanrentuku.com
                `,
                textarea2: ''
            }
        }
    },
    watch: {
        'frm.textarea1': {
            handler (val) {
                let list = val
                var arr = list.split('\n')
                arr = lineUnique(arr)
                let result = ''
                for (var key in arr) { result += arr[key] + '\n' }
                this.frm.textarea2 = result
            },
            immediate: true
        }
    },
    mounted () {
    }
}
</script>
