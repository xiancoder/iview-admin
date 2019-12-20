<template>
    <div class="tableLayout">
        <Tabs value="approval" style="margin-top: 20px" @on-click="changeTab">
            <TabPane label="审批人配置" name="approval"></TabPane>
            <TabPane label="抄送人配置" name="cc"></TabPane>
        </Tabs>
        <div class="tableTool" @keyup.enter.stop="hendleSearch">
            <Input style="width: 180px;margin-right: 10px" type="text" placeholder="请出入流程名称" v-model="keyword" @on-enter="handleSearch(1)"/>
            <Select v-model="typeId" style="width: 180px">
                <Option :value='-1'>全部流程类型</Option>
                <Option v-for="project in typeList" :value="project.typeId" :key="project.typeId">{{project.typeName}}</Option>
            </Select>
            <!-- <department-tree style="width:180px;" v-model="department" :name="department_name" @set-name="(val)=>{department_name=val}"></department-tree> -->
            <tree-drop ref="depart"
                v-model="department"
                placeholder="请选择部门"
                :name="department_name"
                :data="departData"
                @on-change="dataChange"
                @nameSel="(val)=>{department_name=val}">
            </tree-drop>
            <Select v-model="usPosition">
                <Option :value='-1'>请选择职位</Option>
                <Option v-for="row in postList" :value="row.id" :label="row.name" :key="row.id"></Option>
            </Select>
            <Button type="primary" style="margin: 0 10px" @click="handleSearch(1)">搜索</Button>
            <Button type="default" @click="resetSearch">重置</Button>
        </div>
        <div style="height:20px;"></div>
        <Table border :loading="loading" :columns="columns1" :data='data1'>
            <template slot-scope="{ row, index }" slot="state">
                <span v-show="row.state == 0" style='color:red;'>异常</span>
                <span v-show="row.state == 1">正常</span>
            </template>
            <template slot-scope="{ row, index }" slot="operation">
                <a style="margin-right:20px;" @click="edit(row.type,row.id)">编辑</a>
                <a @click="deletes(row.id)">删除</a>
            </template>
        </Table>
        <Modal
            v-model="selectModal"
            title="添加流程类型"
            @on-ok="addOk">
            <RadioGroup v-model="addType">
                <Radio v-for='row in typeList' :key="row.typeId" :label="row.typeId">{{row.typeName}}</Radio>
            </RadioGroup>
        </Modal>
        <Page ref="pager" :total=rowcount :page-size=page_size show-total show-elevator style="margin: 15px 0;float: right;clear: both" @on-change="handleSearch()"/>
        <Button type="primary" style="position: absolute;top: 20px;right: 20px;" @click="selectModal = true">添加流程</Button>
    </div>
</template>
<script>
import treeDrop from '@C/tree-drop'
export default {
    name: 'approval',
    components: {
        treeDrop
    },
    data () {
        return {
            page_size: 30, // 单页面数据
            currentPage: 1, // 当前页面
            loading: false, // 表格刷新
            rowcount: 0, // 全部数据条数
            selectModal: false, // 流程选择 弹框
            keyword: '', // 关键字搜索
            typeId: -1, // 流程类型
            typeList: [], // 流程类型列表 搜索
            postList: [], // 全部职位列表
            departData: [], // 部门树列表
            usPosition: -1, // 选中职位的全部ID
            department: -1, // 部门 id 搜索传的  默认是-1 ，本来是想传 -1 ，但是不知道为什么不行，组件没有触发。
            addType: 7, // 添加审批类型
            department_name: '请选择部门', // 选中的部门名称
            columns1: [
                {
                    title: '流程名称',
                    key: 'describe'
                },
                {
                    title: '流程类型',
                    key: 'type'
                },
                {
                    title: '用于部门',
                    key: 'deptName'
                },
                {
                    title: '用于职位',
                    key: 'postName'
                },
                {
                    title: '流程状态',
                    slot: 'state'
                },
                {
                    title: '操作',
                    slot: 'operation'
                }
            ],
            data1: []
        }
    },
    methods: {
        init () {
            this.loading = true
            // 如果没有如何参数。
            if (window.location.hash === '#/employee/approval') {
                // 默认搜索
                this.getList()
            } else {
                // url 带参数
                let self = this
                setTimeout(function () {
                    self.initSearch()
                    self.getList()
                }, 500)
            }
            // 获取部门树
            this.$get('api/hr/getdepartment', {
            }).then(res => {
                this.departData = res.data.data.departments
            })
            // 获取审批所有类型
            this.$get('api/hr/process_type', {
            }).then(res => {
                this.addType = res.data.data.list[0].typeId
                this.typeList = res.data.data.list
            })
        },
        initSearch () { // 如果是搜索后刷新，就直接从url 给this data 赋值。
            this.keyword = this.$route.query.processName.length ? this.$route.query.processName : ''; // 关键字
            this.typeId = parseInt(this.$route.query.type); // 类型
            this.department = parseInt(this.$route.query.dept); // 部门id
            this.department_name = this.$route.query.dName.length ? this.$route.query.dName : ''; // 部门id
            this.position = parseInt(this.$route.query.position); // 职位拼接字符串
            this.currentPage = parseInt(this.$route.query.page_index); // 当前页码
            this.$refs.pager.currentPage = parseInt(this.$route.query.page_index); // 当前页码
        },
        dataChange (e) { // 部门监听
            this.$get('api/hr/getdeptpost', {deptId: e}).then((res) => {
                this.postList = res.data.data.departments
                this.usPosition = -1
            })
        },
        getList: function () { // 获取列表数据
            this.loading = true
            // 获取部门列表
            this.$get('api/hr/process_list', {
                'processName': this.keyword, // 关键字搜索
                'type': this.typeId === -1 ? 'null' : this.typeId, // 流程总类型 请假类型通过接口获取
                'dept': this.department === -1 ? 'null' : this.department, // 部门ID  传null是全部 其他为部门id
                'position': this.usPosition === -1 ? 'null' : this.usPosition, // 选择职位 职位ID
                'page_index': this.currentPage, // 页码
                'page_size': this.page_size // 数据条数
            }).then((res) => {
                this.data1 = res.data.data.list
                this.rowcount = res.data.data.rowcount
                this.loading = false
            })
        },
        changeTab (name) { // tab 跳转
            this.$router.push({
                path: name
            })
        },
        addOk: function () { // 添加审批流程
            if (this.addType === 7) {
                this.$router.push({name: 'add-process'})
            } else if (this.addType === 8 || this.addType === 9 || this.addType === 11 || this.addType === 12) {
                this.$router.push({name: 'add-overtime', query: {type: this.addType}})
            } else {
                this.$Modal.warning({
                    title: '提示',
                    content: '暂无此类型审批流程',
                    onOk: () => {
                    }
                })
            }
        },
        edit: function (tp, e) { // 编辑审批配置
            // 接口设计有问题，类型是返回的字符串，只能用于展示，而且之前的跳转页面不是同一个，也不需要判断类型。
            if (tp === '请假') {
                this.$router.push({name: 'add-process', query: {id: e}})
            } else if (tp === '加班' || tp === '未打卡' || tp === '外出' || tp === '出差') {
                if (tp === '加班') {
                    this.$router.push({name: 'add-overtime', query: {id: e, type: 8}})
                } else if (tp === '未打卡') {
                    this.$router.push({name: 'add-overtime', query: {id: e, type: 9}})
                } else if (tp === '外出') {
                    this.$router.push({name: 'add-overtime', query: {id: e, type: 11}})
                } else if (tp === '出差') {
                    this.$router.push({name: 'add-overtime', query: {id: e, type: 12}})
                }
            }
        },
        deletes: function (e) { // 删除审批流程
            this.$Modal.confirm({
                title: '提示',
                content: '确定要删除该审批流程吗？',
                onOk: () => {
                    this.$post('api/hr/process_delete', {'wId': e}).then((res) => {
                        if (res.data.data && res.data.data.res === 1) {
                            // 重新读取列表
                            this.$Message.info('删除成功')
                            this.getList()
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '操作失败'
                            })
                        }
                    })
                }
            })
        },
        handleSearch: function (index) { // 点击搜索
            this.$refs.pager.currentPage = index
            this.currentPage = index
            this.loading = true
            this.getList()
            window.location.hash = '#/employee/approval?dName=' + this.department_name + '&processName=' + this.keyword + '&type=' + this.typeId + '&dept=' + this.department + '&position=' + this.usPosition + '&page_index=' + this.currentPage
        },
        resetSearch: function () { // 重置
            this.$refs['depart'].clearStyle()
            this.loading = true
            this.$refs.pager.currentPage = 1
            this.currentPage = 1
            this.department_name = '请选择部门'
            this.keyword = ''
            this.typeId = -1
            this.department = -1
            this.usPosition = -1
            window.location.hash = '#/employee/approval'
            this.init()
            this.getList()
        }
    },
    mounted: function () {
        this.init()
    }
};
</script>
