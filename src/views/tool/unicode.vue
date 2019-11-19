<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">数据文本转unicode格式</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="输入" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="请输入XXXX" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="转码(只转中文)" prop="text1">
                        <p>{{ frm.text1 }}</p>
                    </FormItem>
                    <FormItem label="转码" prop="text2">
                        <p>{{ frm.text2 }}</p>
                    </FormItem>
                    <FormItem label="解码" prop="text3">
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
/* eslint-disable */
//////////////////////////////////////////////////////////////////////////////
// 字符串处理转码/解码 unicode
// 工具类 指令
// =====================
// liuyp 2019年1月10日17: 45: 58 整理先进
//////////////////////////////////////////////////////////////////////////////
function asc2Uni(str) {
    var res = []; if(""==(str)) { return "" }
    for(var i = 0,l = str.length; i < l; i++) {
        res[i] =('00' + str.charCodeAt(i).toString(16)).slice(- 4);
    }
    return '\\u' + res.join('\\u');
}
function uni2Asc(S){
    return window.unescape(S.replace(/\\/g,"%"));
}
/* eslint-enable */
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
            handler (v1) {
                this.frm.text1 = v1.replace(/[\u4E00-\u9FA5\uF900-\uFA2D]+/g, function (ins) { return asc2Uni(ins) }).replace(/\\/g, '\\')
                this.frm.text2 = asc2Uni(v1)
                this.frm.text3 = uni2Asc(v1)
            },
            immediate: true
        }

    },
    mounted () {
    }
}
</script>
