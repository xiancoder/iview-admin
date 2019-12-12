<template>
    <div class="blogCss xianFrom">
        <div class="blog">
            <div class="blogTitle">关于Vue中的各种input的校验</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p></p>
                <Form ref="from0982" :model="frm" :rules="frmValidate" :label-width="150">
                    <FormItem label="测试">
                        <Button type="primary" @click="handleSubmit()">测试</Button>
                    </FormItem>

                    <Divider orientation="left">最基本的输入框 只保留必填校验</Divider>
                    <FormItem label="标题" prop="p01">
                        <Input type="text" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="标题" prop="p01">
                                <Input type="text" v-model="frm.p01" placeholder="请输入XXXX" style="width: 450px"/>
                                <div class="ivu-form-item-notice-tip">我是一条提示文本 当输入框错误时候我就会消失</div>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { required: true, message: '输入框不能为空' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">输入框 必填校验 + 最大长度</Divider>
                    <FormItem label="标题" prop="p02">
                        <Input type="text" v-model="frm.p02" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">输入框 必填校验 + 最大长度</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/js">
                            { type: 'string', min: 6, message: '最少输入6个字符' },
                            { type: 'string', max: 50, message: '最多输入50个字符' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">输入框 必填 + 最长50字符 + 邮箱校验</Divider>
                    <FormItem label="标题" prop="p03">
                        <Input type="text" v-model="frm.p03" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">输入框 必填 + 最长50字符 + 邮箱校验 </div>
                    </FormItem>
                    <FormItem>
                        <script type="text/js">
                            { type: 'email', message: '邮箱格式不正确' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">输入框 验证码 + 必须4位字符</Divider>
                    <FormItem label="验证码" prop="p04">
                        <Input type="text" v-model="frm.p04" placeholder="请输入验证码" maxlength="4"
                            style="width: 330px"/>
                        <span @click="flashccore()" style="margin-left: 20px;"> <ccode :content="ccore"></ccode> </span>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem label="验证码" prop="p04">
                                <Input type="text" v-model="frm.p04" placeholder="请输入验证码" maxlength="4"
                                    style="width: 330px"/>
                                <span @click="flashccore()" style="margin-left: 20px;"> <ccode :content="ccore"></ccode> </span>
                            </FormItem>
                        </script>
                        <script type="text/js">
                            { type: 'string', min: 4, message: '最少输入4个字符' },
                            { type: 'string', max: 4, message: '最多输入4个字符' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">输入框 验证码 + 必须11位字符 + 电话格式</Divider>
                    <FormItem label="标题" prop="p05">
                        <Input type="text" v-model="frm.p05" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">输入框 验证码 + 必须11位字符 + 电话格式</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/js">
                            import regExp from '@/utils/regexp'
                            { pattern: regExp.a05, message: '电话格式错误' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">输入框 验证码 + 价格 整数6位，小数点2位</Divider>
                    <FormItem label="标题" prop="p06">
                        <Input type="text" v-model="frm.p06" placeholder="请输入XXXX" style="width: 450px"/>
                        <div class="ivu-form-item-notice-tip">输入框 验证码 + 价格 整数6位，小数点2位</div>
                    </FormItem>
                    <FormItem>
                        <script type="text/js">
                            { pattern: regExp.a01, message: '整数6位，小数点2位' }
                        </script>
                    </FormItem>

                    <Divider orientation="left">提交</Divider>
                    <FormItem style="margin-top: 50px">
                        <Button type="default" @click="cancel">返回</Button>
                        <Divider type="vertical" />
                        <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                    </FormItem>
                    <FormItem>
                        <script type="text/html" v-pre>
                            <FormItem style="margin-top: 50px">
                                <Button type="default" @click="cancel">返回</Button>
                                <Divider type="vertical" />
                                <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
                            </FormItem>
                        </script>
                    </FormItem>
                </Form>
                <p></p>
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
import Ccode from '@C/ccode'
import { ramdomString } from '@/utils/string'
import regExp from '@/utils/regexp'

export default {
    components: { Ccode },
    data () {
        return {
            loading: false,
            ccore: '0000',
            frm: {
                p01: '', // 输入框测试
                p02: '', // 输入框测试
                p03: '', // 输入框测试
                p04: '', // 输入框测试
                p05: '', // 输入框测试
                p06: '' // 输入框测试
            },
            frmValidate: {
                p01: [
                    { required: true, message: '输入框不能为空' }
                ],
                p02: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, message: '最少输入6个字符' },
                    { type: 'string', max: 50, message: '最多输入50个字符' }
                ],
                p03: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', max: 50, message: '最多输入50个字符' },
                    { type: 'email', message: '邮箱格式不正确' }
                ],
                p04: [
                    { required: true, message: '验证码不能为空' },
                    { type: 'string', min: 4, message: '请输入4位验证码' },
                    { type: 'string', max: 4, message: '请输入4位验证码' }
                ],
                p05: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 11, message: '请输入11位手机号码' },
                    { type: 'string', max: 11, message: '请输入11位手机号码' },
                    { pattern: regExp.a05, message: '电话格式错误' }
                ],
                p06: [
                    { required: true, message: '输入框不能为空' },
                    { pattern: regExp.a01, message: '整数6位，小数点2位' }
                ]
            }
        }
    },
    methods: {
        flashccore () {
            this.ccore = ramdomString(4)
        },
        handleSubmit () {
            this.$refs['from0982'].validate((valid) => {
                if (valid) {
                    this.loading = true
                    setTimeout(() => {
                        alert('校验通过')
                        this.loading = false
                    }, 2e3)
                }
            });
        },
        cancel () {
            alert('离开')
        }
    },
    mounted () {
        this.flashccore()
    }
}
</script>
