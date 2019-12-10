<template>
    <div class="tableLayout info_container">
        <h2 style="margin: 30px 0">
            {{infoList.userName}}
            <Button type="default" style="margin: 0 15px 0 50px" @click="edit" v-show="accountUser === '0'">编辑员工档案</Button>
            <Button type="default" @click="resetPassword" v-show="accountUser === '0'">重置密码</Button>
        </h2>
        <Tabs v-model="tabName">
            <TabPane label="员工档案" name="0" style="padding: 0" :disabled="accountUser === '1'">
                <div class="cards_container" v-if="accountUser !== '1'">
                    <div class="info_card">
                        <div class="card_left">
                            <div style="height: 100%;position: relative">
                                <span class="card_title">基本信息</span>
                            </div>
                        </div>
                        <div class="card_content">
                            <Table border style="width: 100%;table-layout: fixed">
                                <tbody>
                                <tr>
                                    <td style="width: 100px">员工姓名</td>
                                    <td>{{infoList.userName || '-'}}</td>
                                    <td style="width: 100px">性别</td>
                                    <td>{{gender}}</td>
                                </tr>
                                <tr>
                                    <td>联系电话</td>
                                    <td>{{infoList.tel || '-'}}</td>
                                    <td>婚姻状况</td>
                                    <td>{{marriage}}</td>
                                </tr>
                                <tr>
                                    <td>身份证号</td>
                                    <td>
                                        {{idNum}}
                                        <span v-show="!noId">
                                    <a v-show="!idShow" style="margin-left: 10px;color: #666" @click="getId"><Icon type="ios-eye" :size="22" style="margin-top: -4px"/></a>
                                    <a v-show="idShow" style="margin-left: 10px;color: #666" @click="getId"><Icon type="ios-eye-off" :size="22" style="margin-top: -4px"/></a>
                                </span>
                                    </td>
                                    <td>生日</td>
                                    <td>{{birthday}}</td>
                                </tr>
                                <tr>
                                    <td>QQ</td>
                                    <td>{{infoList.qq || '-'}}</td>
                                    <td>邮箱</td>
                                    <td>{{infoList.email || '-'}}</td>
                                </tr>
                                <tr>
                                    <td>家庭住址</td>
                                    <td><Tooltip :content="address" placement="top" max-width="200" theme="light"><div class="notwrap_2">{{address}}</div></Tooltip></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style="width: 20%; position: absolute;top: 0; right: 0;height: 100%">
                            <div style="height: 100%;position: relative">
                                <div class="userPhoto" v-if="!infoList.userPhoto">{{fName[0]}}</div>
                                <img :src="infoList.userPhoto+ran" class="userImg" v-if="infoList.userPhoto">
                            </div>
                        </div>
                    </div>
                    <div class="info_card">
                        <div class="card_left">
                            <div style="height: 100%;position: relative">
                                <span class="card_title">职位信息</span>
                            </div>
                        </div>
                        <div class="card_content">
                            <Table border style="width: 100%;table-layout: fixed">
                                <tbody>
                                <tr>
                                    <td style="width: 100px">职位</td>
                                    <td>
                                        <span v-show="infoList.postName.length <= 0">-</span>
                                        <Tooltip :content="department" placement="top" max-width="200" theme="light"><div class="notwrap_2">{{infoList.postName.join(' ')}}</div></Tooltip>
                                    </td>
                                    <td style="width: 100px">主要职位</td>
                                    <td>{{infoList.postMainName || '-'}}</td>
                                </tr>
                                <tr>
                                    <td>入职日期</td>
                                    <td>{{entryDate}}</td>
                                    <td>转正日期</td>
                                    <td>{{regularDate}}</td>
                                </tr>
                                <tr>
                                    <td>工号</td>
                                    <td>{{jobNum}}</td>
                                    <td>部门</td>
                                    <td><Tooltip :content="department" placement="top" max-width="200" theme="light"><div class="notwrap_2">{{department}}</div></Tooltip></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="info_card" style="min-height: 150px">
                        <div class="card_left">
                            <div style="height: 100%;position: relative">
                                <span class="card_title" style="margin-top: -50px">系统信息</span>
                            </div>
                        </div>
                        <div class="card_content">
                            <Table border style="width: 100%;table-layout: fixed">
                                <tbody>
                                <tr>
                                    <td style="width: 100px">OA系统角色</td>
                                    <td>{{infoList.oaRoleName || '-'}}</td>
                                    <td style="width: 100px">qq绑定</td>
                                    <td>
                                        <span v-show="infoList.bindQQ">{{infoList.nickName}} <a @click="cutQQ">解绑</a></span>
                                        <a v-show="infoList.bindQQ === false" :href="url+infoList.id">绑定</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>账号权限</td>
                                    <td>{{account}}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane label="账号档案" name="1">
                <div class="task_top">
                    <span>账号信息</span>
                    <Button type="primary" @click="addOpen" style="float: right">添加</Button>
                    <Modal v-model="addModal" title="添加账号" :closable="false" :mask-closable="false">
                        <div style="width: 80%;margin: 0 auto">
                            <div style="margin-bottom: 15px">
                                <div style="display: inline-block;width: 90px;text-align: right"><span style="color: red">* </span>账号类型：</div>
                                <Select v-model="accountType" style="width: 250px">
                                    <Option v-for="option in typeList" :value="option.type_id" :key="option.id" :label="option.type_name"></Option>
                                </Select>
                            </div>
                            <div style="margin-bottom: 15px">
                                <div style="display: inline-block;width: 90px;text-align: right"><span style="color: red">* </span>账号名：</div>
                                <Input v-model="accountName" placeholder="" :maxlength="100" style="width: 250px" />
                            </div>
                        </div>
                        <div slot="footer">
                            <Button type="text" @click="cancelAdd">取消</Button>
                            <Button type="primary" @click="saveAdd">确定</Button>
                        </div>
                    </Modal>
                </div>
                <Table border :columns="columns1" :data="data1"></Table>
                <div class="task_top" style="margin-top: 20px">
                    <span>账号轨迹</span>
                </div>
                <div style="padding: 0 20px">
                    <div class="followContainer">
                        <div class="followModel" v-for="(log, index) in logList" :key="index" style="padding: 10px 20px">
                            <div class="followMethod">
                            </div>
                            <div>
                                <span>{{log.createdTimeStr}}</span>
                            </div>
                            <p style="margin-top: 10px;word-break: break-all;">{{log.content}}</p>
                        </div>
                    </div>
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
export default {
    name: 'employee-info',
    data () {
        return {
            tabName: '',
            accountUser: '',
            url: global.QQ_URL + Math.ceil(Math.random() * 10000) + '&outhUserId=',
            ran: '?t=' + Math.ceil(Math.random() * 10000),
            fName: '',
            noId: false,
            idShow: false,
            partId: '',
            fullId: '',
            infoList: {
                id: 0,
                department: [],
                postName: [],
                userPhoto: ''
            },
            addModal: false,
            accountType: '',
            accountName: '',
            typeList: [],
            columns1: [
                {
                    title: '最新更新时间',
                    key: 'updatedTimeStr'
                },
                {
                    title: '账号类型',
                    key: 'type'
                },
                {
                    title: '账号名',
                    key: 'account_name'
                },
                {
                    title: '负责人',
                    key: 'principal'
                },
                {
                    title: '操作',
                    render: (h, params) => {
                        return h('a', {
                            on: {
                                click: () => {
                                    this.$Modal.confirm({
                                        title: '删除账号',
                                        content: '<p>请先确认已在相应系统删除该员工账号，再进行删除。确定要删除吗？</p>',
                                        onOk: () => {
                                            this.deleteAccount(params.row.id)
                                        },
                                        onCancel: () => {}
                                    })
                                }
                            }
                        }, '删除')
                    }
                }
            ],
            data1: [],
            logList: []
        }
    },
    methods: {
        init () {
            // 初始化提示框
            this.infoList.id = this.$route.query.userId
            this.getList()
            if (window.location.href.substr(-6) === 'type=0') {
                this.$Message.info({
                    content: '绑定失败'
                })
            } else if (window.location.href.substr(-6) === 'type=1') {
                this.$Message.info({
                    content: '已绑定'
                })
            } else if (window.location.href.substr(-6) === 'type=2') {
                this.$Message.info({
                    content: '绑定成功'
                })
            }
            this.getAccount()
            this.getTypeList()
            this.getLog()
            this.$get('api/system/menulist', {
            }).then((res) => {
                let list = res.data.data.list.listPages
                let status = false
                for (let i = 0; i < list.length; i++) {
                    if (list[i].auth_name === '人事管理-部门与人员-员工档案') {
                        status = true
                    }
                }
                if (status) {
                    this.tabName = '0'
                    this.accountUser = '0'
                } else {
                    this.tabName = '1'
                    this.accountUser = '1'
                }
            })
        },
        getList () {
            this.$get('api/hr/employerdetail', {
                id: this.infoList.id
            }).then((res) => {
                this.infoList = res.data.data.result
                this.fName = this.infoList.userName
                this.partId = this.infoList.idNum
                this.noId = this.infoList.idNum === ''
            })
        },
        edit () {
            this.$router.push({name: 'employee-edit', query: {userId: this.infoList.id}})
        },
        resetPassword () {
            this.$Modal.confirm({
                title: '提示',
                content: '<p>确定要重置密码么？</p>',
                onOk: () => {
                    this.$get('api/hr/resetpwd', {
                        id: this.infoList.id
                    }).then((res) => {
                        if (res.data.data && res.data.data.res === 1) {
                            this.$Message.info({
                                content: '操作成功'
                            })
                        } else {
                            this.$Message.info({
                                content: '操作失败'
                            })
                        }
                    })
                }
            })
        },
        getId () {
            if (this.fullId === '') {
                this.$get('api/hr/detail_idNum', {
                    userId: this.infoList.id
                }).then((res) => {
                    this.fullId = res.data.data.idNum
                    this.infoList.idNum = this.fullId
                    this.idShow = true
                })
            } else {
                if (!this.idShow) {
                    this.infoList.idNum = this.fullId
                    this.idShow = true
                } else {
                    this.infoList.idNum = this.partId
                    this.idShow = false
                }
            }
        },
        cutQQ () {
            this.$get('api/hr/qq_unbind', {
                id: this.infoList.id
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.getList()
                } else {
                    this.$Message.info({
                        content: res.data.data || '操作失败'
                    })
                }
            })
        },
        getAccount () {
            this.$get('api/hr/account_list', {
                userId: this.infoList.id
            }).then((res) => {
                this.data1 = res.data.data.list
            })
        },
        getTypeList () {
            this.$get('api/hr/account_type', {
            }).then((res) => {
                this.typeList = res.data.data.list
            })
        },
        addOpen () {
            this.addModal = true
            this.accountType = ''
            this.accountName = ''
        },
        cancelAdd () {
            this.addModal = false
        },
        saveAdd () {
            if (this.accountType === '') {
                this.$Message.info({
                    content: '请选择账号类型'
                })
            } else if (this.accountName === '') {
                this.$Message.info({
                    content: '请输入账户名'
                })
            } else {
                this.$post('api/hr/account_add', {
                    type_id: this.accountType,
                    user_id: this.infoList.id,
                    account_name: this.accountName
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        this.$Message.info({
                            content: '添加成功'
                        })
                        this.getAccount()
                        this.getLog()
                        this.addModal = false
                    } else {
                        this.$Message.info({
                            content: res.data.msg || '添加失败'
                        })
                    }
                })
            }
        },
        deleteAccount (id) {
            this.$get('api/hr/account_del', {
                id: id
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.getAccount()
                    this.getLog()
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        },
        getLog () {
            this.$get('api/hr/account_log', {
                userId: this.infoList.id
            }).then((res) => {
                this.logList = res.data.data.list
            })
        }
    },
    mounted () {
        this.init()
    },
    computed: {
        idNum: function () {
            return this.infoList.idNum === '' ? '-' : this.infoList.idNum
        },
        address: function () {
            return (this.infoList.address === '' || this.infoList.address === null) ? '-' : this.infoList.address
        },
        gender: function () {
            return this.infoList.gender === 1 ? '男' : '女'
        },
        marriage: function () {
            return this.infoList.marriage === 0 ? '未婚' : (this.infoList.marriage === 1 ? '已婚' : '未知')
        },
        birthday: function () {
            return this.infoList.birthday === null ? '-' : this.infoList.birthday
        },
        entryDate: function () {
            return this.infoList.entryDate === null ? '-' : this.infoList.entryDate
        },
        regularDate: function () {
            return this.infoList.regularDate === null ? '-' : this.infoList.regularDate
        },
        jobNum: function () {
            return this.infoList.jobNum === '' ? '-' : this.infoList.jobNum
        },
        department: function () {
            let departList = ''
            if (this.infoList.department) {
                for (let i = 0; i < this.infoList.department.length; i++) {
                    departList = departList + this.infoList.department[i]['name'] + ' '
                }
            }
            return departList
        },
        account: function () {
            return this.infoList.accountManager === 0 ? '非账号管理员' : '账号管理员'
        }
    }
}
</script>
<style scoped lang="less">
    .userPhoto{
        font-size:20px;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        width: 70px;
        height:70px;
        line-height: 70px;
        border-radius: 35px;
        color: #f56a00;
        background-color: #fde3cf;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -35px 0 0 -35px
    }
    .userImg{
        display: inline-block;
        width: 70px;
        height:70px;
        border-radius: 35px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -35px 0 0 -35px
    }
    .task_top{
        border-bottom: 1px solid #dddddd;
        height: 35px;
        line-height: 35px;
        margin-bottom: 10px;
    }
    .task_top button{
        height: 30px;
    }
    .task_top span{
        display: inline-block;
        padding: 0 32px;
        border-radius: 4px;
        font-weight:lighter;
        background-color: #495060;
        color: #ffffff;
        font-size: 14px;
        height: 35px;
        line-height: 35px;
    }
</style>
