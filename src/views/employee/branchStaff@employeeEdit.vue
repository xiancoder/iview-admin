<template>
    <div class="prodectCss info_container">
        <Form ref="formItem" :model="frm" :rules="ruleValidate" :label-width="150" class="myLayout">
            <div class="myLayoutLeft">
                <h2><span>基本信息</span></h2>
                <FormItem label="员工姓名" prop="userName">
                    <Input type="text" v-model="frm.userName" placeholder="请输入姓名"/>
                </FormItem>
                <FormItem label="性别" prop="gender">
                    <RadioGroup v-model="frm.gender">
                        <Radio :label="1">男</Radio>
                        <Radio :label="2">女</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="联系电话" prop="tel">
                    <Input type="text" v-model="frm.tel" placeholder="请输入电话"/>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input type="text" v-model="frm.email" placeholder="请输入邮箱"/>
                </FormItem>
                <FormItem label="婚姻状况" prop="marriage">
                    <Select v-model="frm.marriage">
                        <Option :value='2'>未知</Option>
                        <Option :value='1'>已婚</Option>
                        <Option :value='0'>未婚</Option>
                    </Select>
                </FormItem>
                <FormItem label="身份证号" prop="idNum">
                    <Input type="text" v-model="frm.idNum" placeholder="请输入身份证号"/>
                </FormItem>
                <FormItem label="生日" prop="birthday">
                    <DatePicker type="date" v-model="frm.birthday" placeholder="选择日期" style="width: 250px"></DatePicker>
                </FormItem>
                <FormItem label="QQ" prop="qq">
                    <Input type="text" v-model="frm.qq" placeholder="请输入QQ号"/>
                </FormItem>
                <FormItem label="家庭住址" prop="address">
                    <Input type="textarea" :autosize="true" v-model="frm.address" placeholder="请输入家庭住址" class="textArea"/>
                </FormItem>
            </div>
            <div class="myLayoutRight">
                <h2><span>职位信息</span></h2>
                <FormItem label="选择职位" prop="postIds">
                    <Button type="primary" @click="openTree">{{ postCurrentIds.length === 0 ? '选择职位' : '修改职位' }}</Button>
                    <Modal v-model="postTree" title="选择职位" :closable="false" :mask-closable="false">
                        <Tree :data="dataSet.postData" ref="tree4" :render="renderContent"></Tree>
                        <div slot="footer">
                            <Button type="default" @click="postCancel">取消</Button>
                            <Button type="primary" @click="postOk">确定</Button>
                        </div>
                    </Modal>
                    <span style="color: red;margin-left: 10px" v-show="postNull">请选择至少一个职位</span>
                </FormItem>
                <FormItem label="选择主职位" prop="postMain" v-if="postCurrent.length > 0">
                    <RadioGroup v-model="frm.postMain" vertical>
                        <Radio v-for="row in postCurrent" :key="row.id" :label="row.id">
                            <span>{{row.name}}</span>
                        </Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="部门" prop="depart">
                    <Input type="text" v-model="departName" placeholder="选择职位以确定部门" disabled/>
                </FormItem>
                <FormItem label="工号" prop="jobNum">
                    <Input type="text" v-model="frm.jobNum" placeholder="请输入工号"/>
                </FormItem>
                <FormItem label="入职日期" prop="entryDate">
                    <DatePicker type="date" v-model="frm.entryDate" placeholder="选择日期" style="width: 250px"></DatePicker>
                </FormItem>
                <FormItem label="转正日期" prop="regularDate">
                    <DatePicker type="date" v-model="frm.regularDate" placeholder="选择日期" style="width: 250px"></DatePicker>
                </FormItem>
                <h2><span>OA系统权限</span></h2>
                <FormItem label="OA系统角色" prop="oaRoleId">
                    <Select v-model="frm.oaRoleId">
                        <Option v-for="role in dataSet.roleList" :key="role.id" :value="role.id">{{role.roleName}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="账号管理员" prop="account">
                    <RadioGroup v-model="frm.accountManager">
                        <Radio :label="0">否</Radio>
                        <Radio :label="1">是</Radio>
                    </RadioGroup>
                </FormItem>
            </div>
            <FormItem class="myLayoutFooter">
                <Button type="default" @click="cancel">取消</Button>
                <Button type="primary" :loading="loading" @click="handleSubmit('formItem')">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { dateFormat } from '@/utils/date'
import { extendF, deepClone } from '@/utils/object'
import { common } from '@/mixin'
export default {
    mixins: [common],
    data () {
        let postValid = (rule, value, callback) => { // 自定义校验
            if (this.frm.postIds.length === 0) {
                return callback(new Error('错误'))
            } else {
                callback()
            }
        }
        return {
            userId: 0, // 页面主键
            loading: false,
            dataSet: {
                postData: [], // 职位树
                roleList: [] // 角色列表
            },
            postSelect: [], // 用来留存点击取消时所选职位对象数组
            postCurrent: [], // 所选职位对象数组
            postCurrentIds: [], // 所选职位id数组
            postTree: false,
            postNull: false,
            departName: '',
            frm: {
                userName: '',
                gender: 1,
                tel: '',
                email: '',
                marriage: 2,
                idNum: '',
                birthday: '',
                qq: '',
                address: '',
                departmentIds: [],
                depart: '',
                postIds: [],
                postMain: '',
                jobNum: '',
                entryDate: '',
                regularDate: '',
                oaRoleId: '',
                accountManager: 0
            },
            ruleValidate: {
                userName: [
                    { required: true, message: '姓名不能为空' },
                    { type: 'string', max: 20, message: '最多输入20个字符' }
                ],
                tel: [
                    { required: true, message: '电话不能为空' },
                    { type: 'string', max: 20, message: '只能输入20位以下的数字', pattern: /^[1-9]\d*$/ }
                ],
                email: [
                    { required: true, message: '邮箱不能为空' },
                    { type: 'email', message: '邮箱格式不正确' }
                ],
                idNum: [
                    { type: 'string', message: '身份证号格式错误', pattern: /^\d{18}$|^\d{17}[Xx]$|^\d{3}\*\*\*\*\w{3}$/ }
                ],
                qq: [
                    { required: true, message: 'QQ号不能为空' },
                    { type: 'string', min: 5, max: 15, message: '只能输入5~15位的数字', pattern: /^[1-9]\d*$/ }
                ],
                postIds: [
                    { required: true, validator: postValid }
                ],
                postMain: [
                    { required: true, message: '请选择主职位' }
                ],
                jobNum: [
                    { type: 'string', max: 20, message: '工号为20位以下', trigger: 'change' }
                ],
                oaRoleId: [
                    { required: true, type: 'number', message: '请选择系统角色' }
                ]
            }
        }
    },
    methods: {
        goto (name, query) { // 跳转目录
            if (name === 'employeeEdit') { this.go('employee_branchStaff@employeeEdit') }
        },
        // ///////////////////////////
        init () {
            this.$refs['formItem'].resetFields(); // 重置表单
            this.$api.position.list({}).then((list) => { // 获取职位列表
                this.dataSet.postData = list
            })
            this.$api.role.list({}).then((list) => { // 获取角色列表
                this.dataSet.roleList = list
            })
            // 获取员工详情
            this.userId = this.$route.query.userId
            if (this.userId) {
                this.$api.employee.detail({
                    userId: this.userId
                }).then(obj => {
                    extendF(this.frm, obj) // 获取详情
                    this.postCurrent = deepClone(this.frm.postArr)
                    this.postCurrentIds = deepClone(this.frm.postIds)
                    this.postOk(1)
                    this.$get('api/hr/detail_idNum', {
                        userId: this.userId
                    }).then((res) => {
                        this.frm.idNum = res.data.data.idNum
                    })
                })
            }
        },
        renderContent (h, { root, node, data }) { // 职位选择
            return h('span', {
                style: { display: 'inline-block', width: '100%' }
            }, [
                h('span', {
                    style: { color: this.postCurrentIds.indexOf(data.id) === -1 ? '#333' : '#0094eb' }
                }, [
                    h('span', data.title)
                ]),
                h('span', {
                    style: { display: 'inline-block', float: 'right', marginRight: '32px' }
                }, [
                    h('Checkbox', {
                        props: { value: this.postCurrentIds.indexOf(data.id) !== -1, disabled: !data.state },
                        style: { padding: 0, margin: 0 },
                        on: {
                            'on-change': () => {
                                if (this.postCurrentIds.indexOf(data.id) === -1) {
                                    this.postCurrentIds.push(data.id)
                                    this.postCurrent.push({id: data.id, name: data.title})
                                } else {
                                    this.postCurrentIds.splice(this.postCurrentIds.indexOf(data.id), 1)
                                    this.postCurrent.splice(this.postCurrent.findIndex(item => item.id === data.id), 1)
                                }
                            }
                        }
                    })
                ])
            ])
        },
        // /////////////////////////////////////////////////////////
        openTree () {
            this.postSelect = deepClone(this.postCurrent); // 主职位选中数组留存
            this.postTree = true
        },
        // 职位校验
        checkPost () {
            this.postNull = this.frm.postIds.length <= 0
        },
        // 职位按钮
        postCancel () {
            this.postCurrentIds = deepClone(this.frm.postIds)
            this.postCurrent = deepClone(this.postSelect)
            this.postTree = false
        },
        postOk (v) {
            this.frm.postIds = deepClone(this.postCurrentIds)
            this.postSelect = deepClone(this.postCurrent)
            this.checkPost()
            this.frm.departmentIds = []
            this.departName = ''
            if (this.frm.postIds.length > 0) {
                let ps = this.frm.postIds.join(',')
                this.$get('api/hr/post_depart', {
                    postId: ps
                }).then((res) => {
                    let departList = res.data.data.depart
                    for (let i = 0; i < departList.length; i++) {
                        this.frm.departmentIds.push(departList[i].id)
                        this.departName = this.departName + departList[i].name + ' '
                    }
                    this.postTree = false
                })
            } else {
                this.postTree = false
            }
            if (v !== 1) {
                this.frm.postMain = this.postCurrent[0].id
            }
        },
        // 提交表单
        postForm () {
            let birthday = this.frm.birthday !== null && typeof (this.frm.birthday) === 'object' ? dateFormat(this.frm.birthday, 'yyyy-MM-dd') : this.frm.birthday
            let entryDate = this.frm.entryDate !== null && typeof (this.frm.entryDate) === 'object' ? dateFormat(this.frm.entryDate, 'yyyy-MM-dd') : this.frm.entryDate
            let regularDate = this.frm.regularDate !== null && typeof (this.frm.regularDate) === 'object' ? dateFormat(this.frm.regularDate, 'yyyy-MM-dd') : this.frm.regularDate
            this.$post('api/hr/employeredit', {
                id: this.userId,
                departmentIds: this.frm.departmentIds,
                userName: this.frm.userName,
                gender: this.frm.gender,
                tel: this.frm.tel,
                email: this.frm.email,
                marriage: this.frm.marriage,
                idNum: this.frm.idNum,
                birthday: birthday,
                qq: this.frm.qq,
                address: this.frm.address,
                postIds: this.frm.postIds,
                postMain: this.frm.postMain,
                jobNum: this.frm.jobNum,
                entryDate: entryDate,
                regularDate: regularDate,
                oaroleid: this.frm.oaRoleId,
                accountManager: this.frm.accountManager
            }, {timeout: 20000}).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.$router.replace({
                        name: 'employee-index'
                    })
                } else {
                    this.$Message.info({
                        content: res.data.data || '操作失败'
                    })
                }
            })
        },
        handleSubmit (name) {
            this.checkPost()
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.postForm()
                    this.loading = true
                    let self = this
                    setTimeout(function () { self.loading = false; }, 2000)
                }
            })
        },
        cancel () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.push({
                        name: 'employee-index'
                    })
                },
                onCancel: () => {}
            })
        }
    },
    mounted () {
        this.init()
    }
}
</script>
<style scoped lang="less">
    .myLayout{position: relative;font-size: 14px;
        .myLayoutLeft{display: inline-block;width:400px;
        }
        .myLayoutRight{display: inline-block;width:400px;margin-left:20px;vertical-align: top;
        }
        h2{ border-bottom: 1px solid #dddddd; height: 35px; line-height: 35px; margin-bottom: 30px; }
        h2 span{ display: inline-block; padding: 0 32px; border-radius: 4px; font-weight:lighter; background-color: #495060; color: #ffffff; font-size: 14px; height: 31px; line-height: 31px; }
        .myLayoutFooter{margin-top: 50px;border-top: 1px solid #dddddd;padding-top: 15px;
            button{margin-right: 15px}
        }
    }
</style>
