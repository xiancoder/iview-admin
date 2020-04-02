<template>
    <div class="blogCss formLayout">
        <div class="blog">
            <div class="blogTitle">excel 导入 导出 辅助注册大批量 (用户/业务信息/配置)</div>
            <div class="blogContent" v-highlight>
                <p>1 准备注册20个用户</p>
                <p>2 导入信息excel</p>
                <p>3 前端逐个校验 出错停止 然后生成表格给用户确认</p>
                <p>4 批量或者单个提交后台</p>
                <p><Icon type="md-checkmark" style="color:green"/> 想法 如果我要批量注册10+用户</p>
                <p><Icon type="md-checkmark" style="color:green"/> 想法 如果我要批量注册100+用户</p>
                <p><Icon type="md-close" style="color:red"/> 想法 如果我要批量注册1000+用户 导入后台吧</p>
                <p class="text-success">2020年3月13日15:30:44 发现问题 修改优化</p>
                <Row>
                    <Col span="12">
                        <Form ref="from1234" :model="frm" :rules="frmValidate" :label-width="150">
                            <FormItem label="用户名" prop="user_name">
                                <Input type="text" v-model="frm.user_name" placeholder="请您输入用户名" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="登录密码" prop="user_pwd">
                                <Input type="text" v-model="frm.user_pwd" placeholder="请输入输入密码,6-20位字母、数字" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="联系方式" prop="contact_type">
                                <Select v-model="frm.contact_type" filterable placeholder="请选择联系方式" style="width:326px">
                                    <Option v-for="option in list" :value="option.id" :key="option.id" :label="option.name">
                                    </Option>
                                </Select>
                            </FormItem>
                            <FormItem label="手机号" prop="tel" v-if="frm.contact_type == 1">
                                <Input type="text" v-model="frm.tel" placeholder="请输入11位有效手机号" style="width: 326px"/>
                            </FormItem>
                            <FormItem label="微信" prop="wx" v-if="frm.contact_type == 2">
                                <Input type="text" v-model="frm.wx" placeholder="请输入微信号" style="width: 326px"/>
                            </FormItem>
                            <FormItem>
                                {{arr.length?'正在添加第'+(success.length+1)+'条信息...':'校验完成'}}
                            </FormItem>
                            <FormItem style="margin: 50px 0 0;">
                                <Button type="primary" :loading="loading" @click="handlebatchSubmit()">批量添加</Button>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col span="12">
                        <p>欲导入的数据</p>
                        <table class="api">
                            <tr> <th>用户名</th> <th>密码</th> <th>联系方式</th> <th>手机号</th> <th>微信</th> </tr>
                            <tr v-for="row in arr"> <td>{{row.user_name}}</td> <td>{{row.user_pwd}}</td> <td>{{row.contact_type}}</td> <td>{{row.tel}}</td> <td>{{row.wx}}</td> </tr>
                        </table>
                        <p>已经校验的数据</p>
                        <table class="api">
                            <tr> <th>用户名</th> <th>密码</th> <th>联系方式</th> <th>手机号</th> <th>微信</th> </tr>
                            <tr v-for="row in success"> <td>{{row.user_name}}</td> <td>{{row.user_pwd}}</td> <td>{{row.contact_type}}</td> <td>{{row.tel}}</td> <td>{{row.wx}}</td> </tr>
                        </table>
                    </Col>
                </Row>
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
import { extend, extendF } from '@/utils/object'
import regexp from '@/utils/regexp'
import { alert } from '@/tools'

export default {
    data () {
        return {
            loading: false,
            list: [
                {id: 1, name: '手机号'},
                {id: 2, name: '微信'}
            ],
            frm: {
                user_name: '', // 用户名
                user_pwd: '', // 密码
                contact_type: '', // 联系方式1,手机号,2-微信,3-qq,4-邮箱
                tel: '', // 手机号
                wx: '' // 微信
            },
            frmValidate: {
                user_name: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, message: '用户名最少6位' },
                    { type: 'string', max: 20, message: '用户名至多20位' },
                    { pattern: regexp.n22, message: '请勿输入非法字符' }
                ],
                user_pwd: [
                    { required: true, message: '密码不能为空' },
                    { type: 'string', min: 6, message: '密码最少6位' },
                    { type: 'string', max: 20, message: '密码至多20位' },
                    { validator: (rule, value, callback) => {
                        let v1 = 0
                        if (regexp.b01.test(value)) v1++
                        if (regexp.b02.test(value)) v1++
                        if (v1 < 2) { return callback(new Error('密码需同时包含数字、字母!')) }
                        if (!regexp.b04.test(value)) { return callback(new Error('只能包含数字、字母!')) }
                        callback();
                    } }
                ],
                contact_type: [
                    { required: true, message: '请选择联系方式' }
                ],
                tel: [
                    { required: true, validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('输入框不能为空'));
                        } else {
                            if (regexp.a05.test(value)) {
                                this.IsDisabled_t = true;
                            } else {
                                callback(new Error('请输入正确手机号'));
                                this.IsDisabled_t = false;
                            }
                            callback();
                        }
                    } }
                ],
                wx: [
                    { required: true, message: '输入框不能为空' },
                    { type: 'string', min: 6, message: '微信最少6位' },
                    { type: 'string', max: 20, message: '微信至多20位' },
                    { pattern: regexp.b06, message: '请勿输入非法字符' }
                ]
            },
            handlebatchSubmitIng: false,
            arr: [
                { user_name: 'xiexia', user_pwd: '123456aaa', contact_type: 1, tel: '13831111445', wx: '' },
                { user_name: 'xiesdf', user_pwd: '123456aaa', contact_type: 1, tel: '13831111448', wx: '' },
                { user_name: 'liuliu', user_pwd: '123456', contact_type: 2, tel: '', wx: 'adfasdf' },
                { user_name: 'xian_123', user_pwd: 'asd123', contact_type: 1, tel: '13634212365', wx: '' },
                { user_name: 'qwe123', user_pwd: '123456', contact_type: 1, tel: '138312', wx: '' }
            ],
            success: [
            ]
        }
    },
    methods: {
        handlebatchSubmit () {
            if (!this.arr.length) {
                alert('处理完成')
                this.$refs['from1234'].resetFields()
                return false
            }
            if (!this.handlebatchSubmitIng) {
                extendF(this.frm, this.arr[0])
            }
            this.handlebatchSubmitIng = true
            this.validate()
        },
        validate () {
            setTimeout(() => {
                this.$refs['from1234'].validate((valid) => {
                    if (valid) {
                        this.success.push(extend({}, this.frm))
                        this.arr.splice(0, 1)
                        this.handlebatchSubmitIng = false
                        extendF(this.frm, this.$options.data().frm)
                        this.handlebatchSubmit()
                    }
                })
            }, 500)
        }
    }
}
</script>
