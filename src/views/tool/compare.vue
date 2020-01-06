<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">专项对比工具 从一个列表中匹配出权限数组 过滤掉配置列表中的正确写法 剩下的就是错误写法</div>
            <div class="blogContent" v-highlight>
                <Form ref="formValidateId" :model="frm" :label-width="150" label-colon>
                    <FormItem label="权限数据源">
                        <Input type="textarea" v-model="frm.textarea1"
                            placeholder="请输入权限数据源 不用修饰的一大堆代码" :rows="8"
                            style="width: 800px"/>
                        <div class="ivu-form-item-notice-tip">请在这里粘贴包含权限的大量内容</div>
                    </FormItem>
                    <FormItem label="权限匹配正则">
                        <Input type="text" v-model="frm.regexp1" placeholder="请输入匹配权限字符串的正则" style="width: 800px"/>
                    </FormItem>
                    <FormItem label="权限列表">
                        <div class="xianUtil">
                            <ul class="liComma">
                                <li v-for="row in frm.powerArr">{{row}}</li>
                            </ul>
                        </div>
                        <div v-if="frm.powerArr.length==0">没有权限</div>
                    </FormItem>
                    <FormItem label="权限配置表">
                        <Input type="textarea" v-model="frm.textarea2"
                            placeholder="请输入权限配置表 不用修饰的一大堆代码" :rows="8"
                            style="width: 800px"/>
                        <div class="ivu-form-item-notice-tip">请在这里粘贴包含权限使用的大量业务代码</div>
                    </FormItem>
                    <FormItem label="操作按钮">
                        <Button type="primary" shape="circle" @click="doit">开始过滤权限列表</Button>
                    </FormItem>
                    <FormItem label="权限列表">
                        <div class="xianUtil">
                            <ul class="liComma">
                                <li v-for="row in frm.powerArr2">{{row}}</li>
                            </ul>
                        </div>
                        <div v-if="frm.powerArr.length==0">没有权限</div>
                    </FormItem>
                    <FormItem label="权限配置表处理结果">
                        <Input type="textarea" v-model="frm.textarea3"
                            placeholder="生成的结果 建议不要修改编辑" :rows="8"
                            style="width: 800px"/>
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
                regexp1: '"([^"]*[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+[^"]*)"',
                powerArr: [],
                textarea2: '',
                powerArr2: [],
                textarea3: ''
            }
        }
    },
    watch: {
        'frm.textarea1': {
            handler (val) {
                if (this.frm.regexp1) {
                    const regexp = new RegExp(this.frm.regexp1, 'g')
                    this.frm.powerArr = val.match(regexp) || []
                }
            },
            immediate: true
        }
    },
    methods: {
        doit () {
            const pa = this.frm.powerArr
            let str = this.frm.textarea2
            const arr = []
            for (var i = 0, l = pa.length; i < l; i++) {
                if (str.indexOf(pa[i]) > -1) {
                    str = str.replace(new RegExp(pa[i], 'g'), '▉▉▉▉▉')
                } else {
                    arr.push(pa[i])
                }
            }
            this.frm.powerArr2 = arr
            this.frm.textarea3 = str
        }
    }
}
</script>
