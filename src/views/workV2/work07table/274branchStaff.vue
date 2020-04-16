<template>
    <div class="tableLayout layout">
        <div class="depart-tree layoutLeft">
            <Button type="primary" @click="value='',modalEditDept()" v-show="accountNum==0">添加根目录</Button>
            <Tree :data="dataSet.treeData" :render="treeDomDraw">
            </Tree>
         </div>
        <div class="layoutRight">
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <Select v-model="search.status" style="width:180px;">
                    <Option v-for="option in dataSet.stateList" :value="option.id" :key="option.id" :label="option.name" ></Option>
                </Select>
                <Input v-model="search.keyword" placeholder="员工姓名、工号" style="width:180px;" @on-enter="getTableList('search')"/>
                <Select v-model="search.postIds" multiple placeholder="请选择职位" :max-tag-count="2" style="width: 260px;">
                    <Option v-for="option in dataSet.postList" :value="option.id" :key="option.id" :label="option.name" ></Option>
                </Select>
                <Button type="primary" @click="getTableList('search')">搜索</Button>
                <Button @click="cancleAll">重置</Button>
                <Button type="primary" class="fr" @click="goto('employeeEdit')" v-show="accountNum==0">添加员工</Button>
                <Button type="primary" class="fr" @click="goto('positions')" v-show="accountNum==0">管理职位</Button>
            </div>
            <div class="tableTool" v-show="tableSelectedUsers.length>0">
                <span>已勾选<strong style="color:red"> {{tableSelectedUsers.length}} </strong>位员工</span>
                <Button type="primary" @click="modal.dept = true">修改部门</Button>
                <Button type="primary" @click="modal.status = true">修改状态</Button>
                <Button type="primary" @click="setCurrentLeader(1)">设为本级负责人</Button>
                <Button type="primary" @click="setCurrentLeader(0)" >取消本级负责人</Button>
            </div>
            <Table border :size="'large'":columns="tableColumns" highlight-row ref="selection" :loading="loading"
                @on-current-change="onTableClick" @on-selection-change="onTableSelect" :data="tableDataSet">
            </Table>
            <div class="tableFooter">
                <Button @click="handleSelectAll(true)">Set all selected</Button>
                <Page ref="pager" :page-size="page.size" :current="page.index" :total="page.rowCount" show-total show-elevator class="fr"
                    @on-page-size-change="pageChange" @on-change="pageChange"
                />
            </div>
        </div>
        <Modal v-model="modal.dept" title="选择部门" :closable="false" :mask-closable="false">
            <Tree :data="dataSet.treeData" :render="deptModalDomDraw"></Tree>
            <div slot="footer">
                <Button type="default" @click="deptModalCancel">取消</Button>
                <Button type="primary" @click="deptModalOk">确定</Button>
            </div>
        </Modal>
        <Modal v-model="modal.deptCreate" title="新建部门" :closable="false" :mask-closable="false">
            <Input v-model="fromDeptCreateName" placeholder="请输入部门名称">
            </Input>
            <div slot="footer">
                <Button type="default" @click="deptCreateModalCancel">取消</Button>
                <Button type="primary" @click="deptCreateModalOk">确定</Button>
            </div>
        </Modal>
        <Modal v-model="modal.status" title="选择状态" :closable="false" :mask-closable="false">
            <Select v-model="fromUserStatus" style="width:100%;">
                <Option v-for="option in dataSet.stateList2" :value="option.id" :key="option.id" :label="option.name" ></Option>
            </Select>
            <div slot="footer">
                <Button type="default" @click="statusModalCancel">取消</Button>
                <Button type="primary" @click="statusModalOk">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
import { extend, extendF } from '@/utils'
import { h } from '@/tools' // 自定义常用工具
export default {
    data () {
        // 固定数据源写在这里
        // 职位状态
        const stateList = this.$api.employee.pullStatus()
        const stateList2 = stateList.slice(1)
        return {
            accountNum: 1, // sessionStorage.getItem('account'),
            tableDataSet: [], // 表格数据
            tableColumns: [ // 表格配置
                {
                    type: 'selection', width: 60, align: 'center'
                }, {
                    title: '员工', width: 250, key: 'userName', align: 'left',
                    render: h.avatar1('userPhoto', 'userName', 'tel', 'name')
                }, {
                    title: '工号', key: 'jobNum',
                    render: h.defaultH('jobNum')
                }, {
                    title: '职位', key: 'post',
                    render: h.strList1('post')
                }, {
                    title: '账号', key: 'email', width: 200,
                    render: h.defaultH('email')
                }, {
                    title: '状态', key: 'userStatus',
                    render: h.readArr('userStatus', stateList2.map(x => x.name))
                }
            ],
            dataSet: { // 数据源
                stateList,
                stateList2,
                treeData: [],
                postList: []
            },
            search: { // 搜索项
                status: 2, // 用户状态, 0:离职，1:在职
                keyword: '', // 工号或姓名
                postIds: [] // 职位 多选
            },
            page: { // 分页
                index: 1,
                size: 30,
                rowCount: 999
            },
            loading: false,
            treeSelectedDepId: 0, // 存储选中的部门
            tableSelectedUsers: [], // 存储选中的用户
            modal: { // 弹窗开关
                dept: false, // 选择部门
                status: false, // 状态
                deptCreate: false // 新建部门
            },
            deptModalIds: [], // 部门弹框 选择树 id数组
            fromDeptName: '', // 修改部门 弹框输入框值
            fromUserStatus: '', // 修改员工状态
            fromDeptCreateId: '', // 添加部门ID
            fromDeptCreateName: '' // 添加部门名称
        }
    },
    methods: {
        go (name, obj) {
            if (obj) {
                this.$router.push({ name, obj });
            } else if (name) {
                this.$router.push({ name });
            } else {
                window.location.reload();
            }
        },
        saveParamState (obj) {
            // const time = new Date().getTime()
            // const name = this.$router.history.current.name
            // window.localStorage.setItem(name + time, JSON.stringify(obj));
            // const query = { 'search': time }
            // this.$router.replace({ name, query }) // 不能回退
            console.log('存', obj)
            // this.$router.push({ name, obj })
            this.$router.replace({ name, query: obj })
        },
        getParamState () {
            /* const time = this.$route.query.search
            const name = this.$router.history.current.name
            if (time) {
                try {
                    const obj = window.localStorage.getItem(name + time);
                    return JSON.parse(obj)
                } catch (e) {
                    return {}
                }
            }
            if (window.history.length <= 1) {
                window.localStorage.clear()
            } */
            console.log('取', this.$route.query)
            return this.$route.query
        },
        alert (msg) {
            this.$Message.info({
                content: msg || '处理中，请稍后'
            });
        },
        success (msg) {
            this.$Message.info({
                content: msg || '保存成功'
            });
        },
        error (msg) {
            this.$Message.info({
                content: msg || '保存失败',
                duration: 10,
                closable: true
            });
        },
        confirm (msg) {
            return new Promise((resolve, reject) => {
                this.$Modal.confirm({
                    title: '请确认',
                    content: '<p>' + msg + '</p>',
                    onOk: resolve || function () {},
                    onCancel: reject || function () {}
                });
            });
        },
        goto (name, query) { // 跳转目录
            if (name === 'employeeEdit') { this.go('employee_branchStaff@employeeEdit') }
            if (name === 'positions') { this.go('employee_branchStaff@positions') }
            if (name === 'info') { this.go('branchStaff@employeeInfo', query) }
        },
        // 不想使用 import { mapActions } from 'vuex'
        // 不想使用 this.$store.dispatch("addAction")
        // 不想使用 ...mapActions({
        //     this.$api.employee.list: 'employee/list',
        //     this.$api.employee.pullStatus: 'employee/pullStatus',
        //     this.$api.employee.editPostStatus: 'employee/editPostStatus',
        //     this.$api.employee.editDept: 'employee/editDept',
        //     this.$api.department.list: 'department/list',
        //     this.$api.department.editLeader: 'department/editLeader',
        //     this.$api.department.del: 'department/del',
        //     this.$api.department.create: 'department/create',
        //     this.$api.position.pull: 'position/pull'
        // }),
        // ///////////////////////////
        // 部门树相关
        treeDomDraw (h, { root, node, data }) { // 绘制树形结构
            return h('div', {
                'style': { display: 'inline-block', cursor: 'pointer', border: 'none', outline: 'none' }
            }, [
                h('span', {
                    'style': {
                        padding: '5px',
                        backgroundColor: data.id === this.treeSelectedDepId ? 'rgb(213, 232, 252)' : '#fff'
                    },
                    'on': { click: (souce) => {this.onTreeSelect(data.id)} }
                }, data.title + '(' + data.id + ')'),
                h('Poptip', {
                    'props': { trigger: 'hover', title: data.title, placement: 'right', transfer: true },
                    'style': { marginLeft: '5px' }
                }, [
                    h('Tag', {
                        style: {lineHeight: '18px'}
                    }, [
                        h('Icon', { props: {type: 'md-menu'} })
                    ]),
                    h('div', { slot: 'content' }, [
                        h('Button', { // 添加
                            props: { icon: 'md-add' },
                            style: { padding: '3px', marginRight: '5px' },
                            on: { click: () => { this.treeMenuAddButton(data.id) } }
                        }),
                        h('Button', { // 编辑
                            props: { icon: 'md-create' },
                            style: { padding: '3px', marginRight: '5px' },
                            on: { click: () => { this.treeMenuEditButton(data) } }
                        }),
                        h('Button', { // 删除
                            props: { icon: 'ios-trash' },
                            style: { padding: '3px' },
                            on: { click: () => { this.treeMenuDelButton(data.id) } }
                        })
                    ])
                ])
            ])
        },
        getTreeList: function () {
            this.$api.department.list().then((list) => {
                this.dataSet.treeData = list
                this.onTreeSelect()
            })
        },
        treeMenuAddButton: function (id) { // 树目录 添加
            this.tableSelectedUsers = []
            this.fromDeptCreateName = ''
            this.fromDeptCreateId = id
            this.modal.deptCreate = 'c'
        },
        treeMenuEditButton: function (data) { // 树目录 编辑
            this.fromDeptCreateName = data.title
            this.fromDeptCreateId = data.id
            this.modal.deptCreate = 'e'
        },
        deptCreateModalOk: function () {
            if (this.fromDeptCreateName === '') {
                this.alert('请填写部门名称')
                return
            }
            this.$api.department.create({
                fun: this.modal.deptCreate,
                id: this.fromDeptCreateId,
                name: this.fromDeptCreateName
            }).then((errorMsg) => {
                this.modal.deptCreate = false
                if (errorMsg) {
                    this.error(errorMsg)
                } else {
                    this.cancleAll()
                    this.alert('操作成功')
                }
            })
        },
        deptCreateModalCancel: function () {
            this.modal.deptCreate = false
        },
        treeMenuDelButton: function (id) { // 树目录 删除
            this.confirm('确认要删除此部门吗?').then(() => {
                this.$api.department.del({id}).then((errorMsg) => {
                    if (!errorMsg) {
                        this.cancleAll()
                    } else {
                        this.error(errorMsg)
                    }
                })
            })
        },
        onTreeSelect: function (id) { // 树选中某列
            if (id) {
                this.treeSelectedDepId = id
                this.search.postIds = []
                this.getTableList('search')
            }
            this.$api.position.pull({
                deptId: this.treeSelectedDepId
            }).then((list) => {
                this.dataSet.postList = list
            })
        },
        // ///////////////////////////
        // 表格工具条
        cancleAll: function () { // 重置
            this.getTableList('reset')
            this.getTreeList()
        },
        pageChange: function (page) {
            this.page.index = page
            this.getTableList('page')
        },
        // ///////////////////////////
        // 表格相关
        getTableList (fun, page) {
            if (!this.searchParam1234) { // 搜索对象 作用 存值 避免混淆
                this.searchParam1234 = {}
            }
            if (!this.searchBack1234) { // 为重置保留一个备份
                this.searchBack1234 = extend({}, this.search)
            }
            if (fun === 'search') { // 搜索
                extend(this.searchParam1234, this.search)
                this.page.index = 1
            } else if (fun === 'page') { // 跳转页
                extendF(this.search, this.searchParam1234) // 将搜索对象的值转移给组件 防止误解
                extend(this.searchParam1234, this.page)
            } else if (fun === 'reset') { // 重置
                extend(this.search, this.searchBack1234)
                // this.treeSelectedDepId = ''
                // this.onTreeSelect()
                this.page.index = 1
            } else if (fun === 'init') { // 初始化
                const query = this.getParamState()
                extend(this.searchParam1234, query)
                extendF(this.search, query)
                extendF(this.page, query)
                this.treeSelectedDepId = query.treeSelectedDepId
            }
            this.searchParam1234.treeSelectedDepId = this.treeSelectedDepId
            this.loading = true // 加载中
            this.onTableSelect(null) // 清空表格选中
            this.saveParamState(this.searchParam1234) // 存url
            this.$api.employee.list(this.searchParam1234).then((info) => { // ajax
                this.loading = false; // 加载完成
                this.tableDataSet = info.list
                this.page.rowCount = info.rowCount
            })
        },
        handleSelectAll (flag) { // 全选
            this.$refs.selection.selectAll(flag)
        },
        onTableClick: function (data) { // 点击表格某行跳转
            // this.goto('info', {userId: data.id})
        },
        onTableSelect: function (data) { // 选中表格某行checkbox
            this.tableSelectedUsers = data || []
        },
        // ///////////////////////////
        // 员工修改部门弹框
        // 部门 department 缩写成 dept
        deptModalDomDraw (h, { root, node, data }) {
            return h('span', {
                style: { display: 'inline-block', width: '100%' }
            }, [
                h('span', {
                    style: { color: this.deptModalIds.indexOf(data.id) === -1 ? '#333' : '#0094eb' }
                }, [
                    h('span', data.title)
                ]),
                h('span', {
                    style: { display: 'inline-block', float: 'right', marginRight: '32px' }
                }, [
                    h('Checkbox', {
                        props: { value: this.deptModalIds.indexOf(data.id) !== -1 },
                        style: { padding: 0, margin: 0 },
                        on: {
                            'on-change': () => {
                                if (this.deptModalIds.indexOf(data.id) === -1) {
                                    this.deptModalIds.push(data.id)
                                } else {
                                    this.deptModalIds.splice(this.deptModalIds.indexOf(data.id), 1)
                                }
                            }
                        }
                    })
                ])
            ])
        },
        deptModalOk () {
            if (this.deptModalIds.length === 0) {
                this.alert('请选择部门')
                return
            }
            this.$api.employee.editDept({
                users: this.tableSelectedUsers, // 人员们
                departmentids: this.deptModalIds // 部门id
            }).then((errorMsg) => {
                if (!errorMsg) {
                    this.success('操作成功')
                    location.reload()
                } else {
                    this.error(errorMsg)
                }
                this.modal.dept = false
            })
        },
        deptModalCancel () {
            this.deptModalIds = []
            this.modal.dept = false
        },
        // ///////////////////////////
        // 员工修改状态
        statusModalOk () {
            this.$api.employee.editPostStatus({
                users: this.tableSelectedUsers,
                userStatus: this.fromUserStatus
            }).then((errorMsg) => {
                if (!errorMsg) {
                    this.alert('操作成功')
                    this.getTableList()
                } else {
                    this.error(errorMsg)
                }
                this.modal.status = false
            })
        },
        statusModalCancel () {
            this.modal.status = false
        },
        // ///////////////////////////
        // 确认/取消 负责人
        // 负责人 leader
        setCurrentLeader (flag) {
            this.confirm('确认要修改本级负责人?').then(() => {
                this.$api.department.editLeader({
                    users: this.tableSelectedUsers, // 员工数组
                    depId: this.search.depId, // 部门id
                    flag // 设置状态
                }).then((errorMsg) => {
                    if (errorMsg) {
                        this.error(errorMsg || '操作失败')
                    } else {
                        this.success('操作成功')
                        this.getTableList()
                    }
                })
            })
        },
        // ///////////////////////////
        maxTagPlaceholder (num) {
            return '等其它' + num + '个'
        }
    },
    mounted () {
        // 初始化表格
        this.getTableList('init')
        // 刷新树
        this.getTreeList()
    }
}
</script>
<style scoped lang="less">
    .layout{
        .layoutLeft{
            overflow: auto; position: absolute; top: 20px; left: 31px; bottom: 0; width: 255px;
            padding: 10px; background: #fff; border: 1px solid #dcdee2;
        }
        .layoutRight{
            display: inline-block;padding-left: 280px;
            .layoutTool2{
                margin-bottom:15px;
                > *{margin-right: 10px;}
                span{ display: inline-block; line-height: 30px; height: 31px; vertical-align: bottom;}
            }
        }
    }
</style>
