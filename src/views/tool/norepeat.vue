<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">行列去重</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="输入" prop="input1">
                        <Input type="textarea" v-model="frm.textarea1" show-word-limit
                            placeholder="请输入XXXX" maxlength="1000" :rows="8"
                            style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填 【完美】</div>
                    </FormItem>
                    <FormItem label="转码" prop="text1">
                        <Input type="textarea" v-model="frm.textarea2" show-word-limit
                            placeholder="请输入XXXX" maxlength="1000" :rows="8"
                            style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">大发生发</div>
                    </FormItem>
                </Form>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">单字去重</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId2" :model="frm2" :label-width="150" label-colon>
                    <FormItem label="输入" prop="input1">
                        <Input type="textarea" v-model="frm2.textarea1" show-word-limit
                            placeholder="请输入XXXX" maxlength="1000" :rows="8"
                            style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">必填 【完美】</div>
                    </FormItem>
                    <FormItem label="转码" prop="text1">
                        <Input type="textarea" v-model="frm2.textarea2" show-word-limit
                            placeholder="请输入XXXX" maxlength="1000" :rows="8"
                            style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">大发生发</div>
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
import { arrayUnique } from '@/utils'
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
            },
            frm2: {
                textarea1: `
                    璃璃璃璃墨阳云筱残·雪莲茉·伊文思·蕊夏清·碎墨音·芊乐梦黛怡·墨丽莎·梦灵
                `,
                textarea2: ''
            }
        }
    },
    watch: {
        'frm.textarea1': {
            handler (val) {
                let list = val
                var arr = list.split(/\r|\n|\r\n/g)
                arr = arrayUnique(arr)
                let result = ''
                for (var key in arr) { result += arr[key] + '\n' }
                this.frm.textarea2 = result
            },
            immediate: true
        },
        'frm2.textarea1': {
            handler (val) {
                let list = val
                var arr = list.split('')
                arr = arrayUnique(arr)
                let result = ''
                for (var key in arr) { result += arr[key] }
                this.frm2.textarea2 = result
            },
            immediate: true
        }
    },
    mounted () {
    }
}
</script>
