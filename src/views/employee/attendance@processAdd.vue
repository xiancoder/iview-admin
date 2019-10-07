<style>
    .toolbar{
        z-index: 1!important;
    }
    .responseSelect .ivu-select{
        width: auto;
    }
    .font12 textarea{
        font-size:12px;
    }
    .dateStyle .ivu-select-dropdown{
        width: 250px;
        padding: 0 16px;
    }
</style>
<style scoped lang="less">
    h2{
        border-bottom: 1px solid #dddddd;
        height: 35px;
        line-height: 35px;
        margin-bottom: 30px;
    }
    h2 span{
        display: inline-block;
        padding: 0 32px;
        border-radius: 4px;
        font-weight:lighter;
        background-color: #495060;
        color: #ffffff;
        font-size: 14px;
        height: 31px;
        line-height: 31px;
    }
    .info_area{
        width: 400px;
        font-size: 14px;
    }
    .wid250{
        width:250px;
    }
    .wid450{
        width:450px;
    }
    .textStyle{
        min-width:870px;
        width: 90%;
    }
    .marL15{
        margin-left: 15px;
    }
    .marT50{
        margin-top: 50px
    }
    .position{
        padding-bottom:10px;
        white-space: nowrap;
        .positionDay{
            display:inline-block;
            width:80px;
            padding:0px 10px;
            text-align:right;
        }
    }
</style>
<template>
    <div class="prodectCss">
        <Form ref="formItem" :model="formData" :rules="ruleValidate" :label-width="150">
            <h2><span>{{wId?"编辑":"添加"}}请假流程</span></h2>
            <div>
                <FormItem label="流程名称" prop="name">
                    <Input class="wid250" type="text" v-model="formData.name" placeholder="请输入流程名称"/>
                </FormItem>
                <FormItem label="所属部门" prop="dept">
                    <tree-drop
                        v-model="formData.dept"
                        placeholder="请选择部门"
                        :name="department_name"
                        :data="departData"
                        @on-change="dataChange"
                        @nameSel="(val)=>{department_name=val}">
                    </tree-drop>
                </FormItem>
                <FormItem label="用于职位" prop="post">
                    <Select class="wid250" v-model="formData.post" :multiple="true" filterable placeholder="请搜索 / 选择用于职位">
                        <Option v-for="row in usPosition" :value="row.postId" :key="row.postId" :label="row.postName"></Option>
                    </Select>
                </FormItem>
                <FormItem label="审批职位" prop="approval">
                    <div v-for="(row,index) in position" :key="row.node" class="position">
                        <span class="positionDay">{{row.dayName}}</span>
                        <span v-for="(row1,index1) in position[index].postId" :key="row1.node" >
                            <Button :type="row1.state > 0?'primary':'error'" @click="openModal(index,index1)">{{row1.name?row1.name:"请选择审批职位"}}</Button>
                            &nbsp;<Icon v-show="index1 !== position[index].postId.length - 1" :size="20" type="md-arrow-round-forward" />&nbsp;
                        </span>
                        <span style="margin-left:30px;">
                            <Button type="primary" @click="addNode(index)">+</Button>
                            <Button type="primary" v-show="position[index].postId.length !== 1" @click="deleteNode(index)">-</Button>
                        </span>
                    </div>
                </FormItem>
                <Modal v-model="nodeModal" title="添加审批职位" :closable="false" :mask-closable="false">
                    <div style="width: 70%;margin: 0 auto">
                        <span>选择审批职位：</span>
                        <tree-drop
                            v-model="approval_ids"
                            placeholder="请选择职位"
                            :name="approval_name"
                            :data="positions"
                            @nameSel="(val)=>{approval_name=val}">
                        </tree-drop>
                    </div>
                    <div slot="footer">
                        <Button type="text" @click="cancelNode">取消</Button>
                        <Button type="primary" @click="okNode">保存</Button>
                    </div>
                </Modal>
                <FormItem label="抄送人">
                    <Select class="wid450" v-model="ccId">
                        <Option :value=-1>请选择抄送人模板</Option>
                        <Option v-for="project in ccList" :value="project.id" :key="project.id">{{project.name}}({{project.userName | Tostring}})</Option>
                    </Select>
                    <span style="color:red;margin-left:40px;">如果没有合适的抄送人配置,请在抄送人配置点击添加抄送人创建</span>
                </FormItem>
            </div>
            <FormItem class="marT50">
                <Button type="default" @click="cancel">取消</Button>
                <Button class="marL15" :loading="loading" type="primary" @click="ok('formItem')">确定</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import treeDrop from '@C/tree-drop'
export default {
    name: 'add-process',
    components: {
        treeDrop
    },
    data () {
        return {
            loading: false,
            wId: 0, // 流程ID
            departData: [], // 部门树
            department_id: 0, // 选中的部门id
            department_name: '', // 选中的部门名称
            usPosition: [], // 用于职位
            positions: [], // 职位树
            approvalRow: '', // 审批人当前行数
            approvalNode: '', // 审批人当前节点数
            approval_ids: 0, // 审批职位绑定的临时职位id
            approval_name: '请选择审批职位', // 当前选中的审批职位名称
            ccId: -1, // 抄送配置ID
            ccList: [], // 抄送人列表
            nodeModal: false, // 添加审批流程 弹框
            ruleValidate: { // 表单验证相关
                name: [
                    { required: true, message: '流程名称不能为空', trigger: 'blur' },
                    { max: 20, message: '流程名称最长为20个字符' }
                ],
                dept: [
                    { required: true, message: '请选择部门' }
                ],
                post: [
                    { required: true, message: '请选择用于职位' }
                ],
                approval: [
                    { required: true, message: '请填写完整审批职位' }
                ]
            },
            formData: { // 表单绑定数据
                name: '', // 流程名称
                dept: -1, // 部门
                post: [], // 用于职位
                approval: '' // 审批职位
            },
            position: [] // 审批人条数
        }
    },
    methods: {
        init () {
            // 获取部门树
            this.$get('api/hr/getdepartment', {
            }).then(res => {
                this.departData = res.data.data.departments
            })
            // 抄送人配置列表
            this.$get('api/hr/cc_setting_list').then(res => {
                this.ccList = res.data.data.list
            })
            // 判断添加还是编辑
            this.wId = this.$route.query.id
            if (this.$route.query.id) {
                // 获取审批配置详情
                this.$get('api/hr/process_details', {
                    id: this.$route.query.id
                }).then(res => {
                    let datas = res.data.data.list
                    this.formData.name = datas.process; // 获取配置名称
                    this.formData.dept = datas.deptId; // 获取详情部门 id
                    this.department_id = datas.deptId; // 获取详情部门 id
                    this.department_name = datas.deptName; // 获取详情部门 名称
                    let arrs = [];// 生成审批节点树
                    arrs.length = datas.approvalList.length
                    for (let t = 0; t < datas.approvalList.length; t++) {
                        arrs[t] = {
                            day: datas.approvalList[t].dayId,
                            dayName: datas.approvalList[t].day,
                            postId: datas.approvalList[t].postList
                        }
                    }
                    this.$nextTick(() => {
                        this.formData.post = datas.postId; // 匹配职位列表 生成职位树
                        this.ccId = datas.copytoId;// 赋值赋值补上，使用这种写法就赋值上了，详情看官网，大意是在下次事件循环之后再赋值。
                        this.position = arrs
                    })
                })
            } else {
                // 添加
                // 获取审批人条数
                this.$get('api/hr/approval_list', {
                }).then(res => {
                    let list = res.data.data.list
                    let arrs = []
                    arrs.length = list.length
                    for (let t = 0; t < list.length; t++) {
                        arrs[t] = {
                            day: list[t].id,
                            dayName: list[t].day,
                            postId: [{
                                name: '',
                                id: '',
                                state: '1'
                            }]
                        }
                    }
                    this.$nextTick(() => { // 赋值赋值补上，使用这种写法就赋值上了，详情看官网，大意是在下次事件循环之后再赋值。
                        this.position = arrs
                    })
                })
            }
            // 获取全部职位树
            this.$get('api/hr/get_position', {
            }).then(res => {
                this.positions = res.data.data.positions
            })
        },
        // 部门修改监听
        dataChange (e) {
            // 清空职位选择
            this.formData.post = []
            // 获取全部职位树
            this.$get('api/hr/process_post', {
                deptId: e
            }).then(res => {
                this.usPosition = res.data.data.list
            })
        },
        openModal (idx, idx2) { // 修改审批人
            // idx 是 审批职位的 第几行
            // idx2 是 第几个
            this.approvalRow = idx
            this.approvalNode = idx2
            this.nodeModal = true
        },
        addNode (index) { // 添加审批人节点
            var add = {}
            add.id = ''
            add.name = ''
            add.state = 1
            this.position[index].postId.push(add)
        },
        deleteNode (index) { // 删除审批人节点
            this.position[index].postId.pop()
        },
        cancel () { // 取消提交
            this.$Modal.confirm({
                title: '提示',
                content: '<p>信息还未保存，确定要离开当前页面么？</p>',
                onOk: () => {
                    this.$router.replace({name: 'approval-config'})
                },
                onCancel: () => {}
            })
        },
        ok (form) { // 提交成功
            let self = this
            this.$refs[form].validate((valid) => {
                if (valid) {
                    self.loading = true
                    let ation = []; // 依次审批职位
                    ation.length = this.position.length
                    // 优化数据结构
                    for (let s1 = 0; s1 < this.position.length; s1++) {
                        ation[s1] = {
                            day: this.position[s1].day,
                            ApprovalPostId: []
                        }
                        for (let s2 = 0; s2 < this.position[s1].postId.length; s2++) {
                            ation[s1].ApprovalPostId.push(this.position[s1].postId[s2].id)
                        }
                    }
                    this.$post('api/hr/process_add', {
                        'wId': 7,
                        'id': this.wId, // 流程ID
                        'process': this.formData.name,
                        'deptId': this.formData.dept,
                        'postId': this.formData.post,
                        'positionList': ation,
                        'copytoId': this.ccId === -1 ? null : this.ccId
                    }).then(res => {
                        if (res.data.data && res.data.data.res === 1) {
                            this.$Message.info({
                                content: '操作成功'
                            })
                            setTimeout(function () {
                                self.$router.go(-1)
                            }, 500)
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '操作失败'
                            })
                        }
                    })
                    setTimeout(function () { self.loading = false; }, 2000)
                } else {
                    return false
                }
            })
        },
        cancelNode () { // 取消添加节点
            this.nodeModal = false
        },
        okNode () { // 选择审批人职位
            this.position[this.approvalRow].postId[this.approvalNode].id = this.approval_ids
            this.position[this.approvalRow].postId[this.approvalNode].name = this.approval_name
            this.position[this.approvalRow].postId[this.approvalNode].state = 1; // 选中后修改状态
            this.nodeModal = false
        }
    },
    mounted () {
        this.init(); // 页面初始化
    },
    filters: { // 过滤器
        Tostring: function (arr) { // 数组转字符串
            var string = arr.toString()
            return string
        }
    },
    watch: {
        position: {
            deep: true,
            handler: function (newVal, oldVal) {
                // 监听审批职位改动。
                for (let x = 0; x < this.position.length; x++) {
                    for (let y = 0; y < this.position[x].postId.length; y++) {
                        if (!this.position[x].postId[y].name || !this.position[x].postId[y].id) {
                            console.log('错误节点为' + x + '行' + y + '节点')
                            this.formData.approval = ''
                            return
                        }
                    }
                    this.formData.approval = '1'; // 设置一个值，代表审批职位可提交
                }
            }
        }
    }
}
</script>
