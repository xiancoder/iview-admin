<style>
    .position .divLeft .ivu-poptip-popper{
        min-width: 90px;
    };
    .position .divRight tbody tr td .ivu-table-cell .ivu-tooltip-rel{
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:3;
        max-height: 74px;
    }
    .ivu-poptip{
        position: relative;
    }
    .ivu-poptip-popper{
        min-width: 100px;
    }
</style>
<style scoped lang="less">
    .divLeft{
        width: 297px;
        position:fixed;
        top:75px;
        bottom:15px;
        left:215px;
        overflow:auto;
        margin-right: 20px;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        .ivu-poptip-inner{
            box-shadow: 0 1px 6px opacity;
        };
    }
    .divRight{
        box-sizing:border-box;
        padding-left: 300px;
        .pageStyle{
            margin: 15px 0;
            float: right;
            clear: both;
        }
        .deparDiv{
            display:inline-block;
            width:180px;
            margin-right:10px;
        }
    }
    .marR10{
        margin-right:10px;
    }
    .wid180{
        width:180px;
    }
    .wid160{
        width:160px;
    }
    .wid250{
        width:250px;
    }
    .delDiv{
        text-align: center;
        font-size: 14px;
        line-height: 50px;
    }
    .posiRel{
        position:relative;
    }
    .posiAbo{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        cursor:pointer;
    }
</style>
<template>
    <div class="prodectCss position">
        <div class="divLeft">
            <Button type="primary" @click="addPost(0)" v-show="positions.length==0">添加根目录</Button>
            <Tree ref="treePosi" :data="positions" :render="positionContent"></Tree>
            <Modal v-model="showModal" :title="titleAdd" :closable="false" :mask-closable="false">
                <Form ref="formItem" :model="formData" :rules="formRules" :label-width="150">
                    <FormItem label="职位名称" prop="positioName">
                        <Input class="wid250" type="text"  v-model="formData.positioName" placeholder="请输入职位名称" />
                    </FormItem>
                    <FormItem label="所属部门" prop="department">
                        <treeDrop v-model="formData.department" placeholder="请选择部门" :name="department_name" :data="departData1" @nameSel="(val)=>{ department_name=val}"></treeDrop>
                    </FormItem>
                    <FormItem label="职位描述" prop="desc">
                        <Input class="wid250" type="textarea" :autosize="{minRows: 3,}" v-model="formData.desc" placeholder="请输入职位描述" />
                    </FormItem>
                </Form>
                <div slot="footer">
                    <Button type="text" @click="cancel">取消</Button>
                    <Button type="primary" @click="ok">保存</Button>
                </div>
            </Modal>
            <Modal v-model="showDel" title="删除职位" :closable="false" :mask-closable="false">
                <p class="delDiv">确认要删除该职位吗？</p>
                <div slot="footer">
                    <Button type="text" @click="cancel2">取消</Button>
                    <Button type="primary" @click="ok2">确定</Button>
                </div>
            </Modal>
        </div>
        <div class="divRight">
            <div>
                <Input class="wid180" type="text" v-model="obj2.keyword" placeholder="职位名称" @on-enter="handleSearch(1)"/>
                <treeDrop ref="treeDrops" v-model="obj2.department" :name="department_name2" :data="departData2" @nameSel="(val)=>{ department_name2=val}"></treeDrop>
                <Select class="wid160" v-model="obj2.state" placeholder="全部状态">
                    <Option value='-1'>全部状态</Option>
                    <Option value='1'>启用</Option>
                    <Option value='0'>停用</Option>
                </Select>
                <Button type="primary" style="margin: 0 5px" @click="handleSearch(1)">搜索</Button>
                <Button type="default" @click="resetSearch">重置</Button>
            </div>
            <div style="height:20px;"></div>
            <Table :loading="loading" :columns="columns1" :data='data1'>
                <template slot-scope="{ row }" slot="postName">
                    <span>{{ row.postName }}</span>
                </template>
                <template slot-scope="{ row }" slot="deptName">
                    <span>{{ row.deptName }}</span>
                </template>
                <template slot-scope="{ row }" slot="desc">
                    <span>{{ row.desc }}</span>
                </template>
                <template slot-scope="{ row,index}" slot="postPersons">
                    <Tooltip v-if="row.postPersons" :content="row.postPersons" :placement='data1.length==index+1?"top":"bottom"' max-width="400" >
                        {{row.postPersons}}
                    </Tooltip>
                    <span v-if="!row.postPersons">-</span>
                </template>
                <template slot-scope="{ row }" slot="state">
                    <div class="posiRel" >
                        <i-switch v-model="row.state"/>
                        <div class="posiAbo" @click="open(row)"></div>
                    </div>
                </template>
            </Table>
            <Page class="pageStyle" ref="pager" :total=rowcount :page-size=30 show-total show-elevator @on-change="handleSearch()"/>
            <Modal v-model="showOpen" :title="titleOpen" :closable="false" :mask-closable="false">
                <p class="delDiv">{{contentOpen}}</p>
                <div slot="footer">
                    <Button type="text" @click="cancel3">取消</Button>
                    <Button type="primary" @click="ok3">确定</Button>
                </div>
            </Modal>
        </div>
    </div>
</template>
<script>
import treeDrop from '@C/tree-drop'
export default {
    name: 'positions',
    components: {
        treeDrop
    },
    data () {
        return {
            formData: {
                positioName: '',
                department: null,
                desc: ''
            },
            formRules: {
                positioName: [
                    { required: true, message: '请填写职位名称' },
                    { max: 20, message: '最多输入20个字符' }
                ],
                department: [
                    { required: true, message: '请选择所属部门' }
                ],
                desc: [
                    { max: 50, message: '最多输入50个字符' }
                ]
            },
            posParentId: '', // 父级职位id
            postId: 0, // 当前编辑的职位id
            department_name: '', // 选中的部门名称
            titleAdd: '添加职位',
            showModal: false,
            showDel: false,
            positions: [], // 职位树
            departData1: [], // 部门树
            departData2: [], // 部门树
            department_name2: '全部部门', // 选中的部门名称
            addPosId: true,
            pageIndex: 1,
            obj2: {
                keyword: '',
                department: null,
                postId: 0,
                state: '-1'
            },
            rowcount: 0,
            loading: false,
            columns1: [
                {
                    title: '职位名称',
                    slot: 'postName'
                },
                {
                    title: '所属部门',
                    slot: 'deptName'
                },
                {
                    title: '描述',
                    slot: 'desc'
                },
                {
                    title: '员工',
                    slot: 'postPersons'
                },
                {
                    title: '状态',
                    slot: 'state'
                }
            ],
            data1: [],
            showOpen: false,
            titleOpen: null,
            contentOpen: null,
            openState: null,
            openPostId: null
        }
    },
    methods: {
        init () {
            this.loading = true
            this.$get('api/hr/getdepartment', {
            }).then(res => {
                this.departData1 = res.data.data.departments
                this.departData2 = JSON.parse(JSON.stringify(res.data.data.departments))
                let data2 = {
                    children: [],
                    expand: true,
                    id: null,
                    title: '全部部门'
                }
                this.departData2.unshift(data2)
                this.getPost()
            })
        },
        getPost () {
            this.$get('api/hr/get_position', {
            }).then(res => {
                if (res.data.data.positions) {
                    this.positions = res.data.data.positions
                    if (this.$route.query.postId) {
                        this.postId = this.$route.query.postId
                    } else {
                        this.postId = this.positions[0].id
                    }
                    this.getList()
                } else {
                    this.positions = []
                }
            })
        },
        addPost (id) {
            this.titleAdd = '添加职位'
            this.formData.positioName = ''
            this.department_name = ''
            this.formData.desc = ''
            this.formData.department = null
            this.posParentId = id
            this.showModal = true
        },
        // 左侧-树节点内容设置
        positionContent (h, {root, node, data}) {
            return h('div', {
                style: {
                    display: 'inline-block',
                    cursor: 'pointer',
                    width: '100%'
                }
            }, [
                h('span', {
                    class: 'treeBtn',
                    style: {
                        backgroundColor: this.$route.query.postId === data.id ? 'rgb(213, 232, 252)' : (!this.$route.query.postId && data.id === this.positions[0].id) ? 'rgb(213, 232, 252)' : '',
                        padding: '5px'
                    },
                    on: {
                        click: (el) => {
                            let elementList = document.querySelectorAll('.treeBtn')
                            for (let i = 0; i < elementList.length; i++) {
                                elementList[i].style.backgroundColor = ''
                            }
                            el.target.style.backgroundColor = 'rgb(213, 232, 252)'
                            el.target.style.padding = '5px'
                            this.postId = data.id
                            this.pageIndex = 1
                            this.$refs.pager.currentPage = 1
                            let obj = {
                                postId: this.postId,
                                keyword: this.obj2.keyword,
                                department: this.obj2.department,
                                deparName: this.department_name2,
                                state: this.obj2.state,
                                pageIndex: this.pageIndex
                            }
                            this.$router.replace({name: 'positions', query: obj})
                            this.getList()
                        }
                    }
                }, data.title),
                h('Poptip', {
                    props: {
                        trigger: 'hover',
                        placement: 'bottom',
                        transfer: true
                    }
                }, [
                    h('Tag', {
                        style: {lineHeight: '18px', marginLeft: '5px'}
                    }, [h('Icon', { props: { type: 'md-menu' } })]),
                    h('div', {
                        slot: 'content'
                    }, [
                        // 添加
                        h('Button', {
                            props: {
                                icon: 'md-add'
                            },
                            style: {
                                padding: '3px',
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.addPosId = true
                                    this.addPost(data.id)
                                }
                            }
                        }),
                        // 编辑
                        h('Button', {
                            props: {
                                icon: 'md-create'
                            },
                            style: {
                                padding: '3px',
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.addPosId = false
                                    this.$get('api/hr/post_depart', {'postId': data.id}).then(res => {
                                        this.formData.department = res.data.data.depart[0].id
                                        this.department_name = res.data.data.depart[0].name
                                        this.formData.desc = res.data.data.depart[0].desc
                                    })
                                    this.titleAdd = '编辑职位'
                                    this.formData.positioName = data.title
                                    this.posParentId = -1
                                    this.postId = data.id
                                    this.showModal = true
                                }
                            }
                        }),
                        // 删除
                        h('Button', {
                            props: {
                                icon: 'ios-trash'
                            },
                            style: {
                                padding: '3px'
                            },
                            on: {
                                click: () => {
                                    this.showDel = true
                                    this.postId = data.id
                                }
                            }
                        })
                    ])
                ])
            ], data.title)
        },
        cancel () {
            this.showModal = false
            this.$refs.formItem.resetFields()
        },
        ok () {
            this.$refs.formItem.validate(valid => {
                if (valid) {
                    let para = {
                        'id': this.addPosId ? 0 : this.postId, // 0添加,职位id
                        'parentId': this.posParentId,
                        'positionName': this.formData.positioName, // 职位名称
                        'deptId': this.formData.department, // 部门id
                        'desc': this.formData.desc// 职位描述
                    }
                    this.$post('api/hr/add_position', para).then(res => {
                        if (!res.data.data) {
                            this.$Message.info({
                                content: res.data.msg || '操作失败'
                            })
                        } else if (res.data.data.res === 1) {
                            this.$Message.info({
                                content: '操作成功'
                            })
                            this.getPost()
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '操作失败'
                            })
                        }
                        this.showModal = false
                        this.$refs.formItem.resetFields()
                    })
                }
            })
        },
        // 左侧-删除职位
        cancel2 () {
            this.showDel = false
        },
        ok2 () {
            this.$get('api/hr/del_position', {id: this.postId}).then(res => {
                if (!res.data.data) {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                } else if (res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.getPost()
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
                this.showDel = false
            })
        },
        // 开关职位
        open (data) {
            this.showOpen = true
            this.openState = !data.state
            this.openPostId = data.id
            if (this.openState) {
                this.titleOpen = '开启职位'
                this.contentOpen = '确定要开启该职位吗？'
            } else {
                this.titleOpen = '关闭职位'
                this.contentOpen = '确定要关闭该职位吗？'
            }
        },
        cancel3 () {
            this.showOpen = false
        },
        ok3 () {
            this.$post('api/hr/position_open', {
                'id': this.openPostId,
                'state': this.openState
            }).then(res => {
                if (!res.data.data) {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                } else if (res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    if (this.$route.query.postId) {
                        this.postId = this.$route.query.postId
                    } else {
                        this.postId = this.positions[0].id
                    }
                    this.getList()
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
                this.showOpen = false
            })
        },
        getList () {
            this.loading = true
            // 获取列表数据
            let getData = () => {
                let para = {
                    'keyword': this.obj2.keyword,
                    'deptId': this.obj2.department,
                    'postId': this.postId,
                    'state': this.obj2.state === -1 ? null : this.obj2.state === 1,
                    'pageIndex': this.pageIndex,
                    'pageSize': 30
                }
                this.$get('api/hr/position_list', para).then(res => {
                    this.loading = false
                    this.data1 = res.data.data.list
                    this.rowcount = res.data.data.rowcount
                })
            }
            // 保存搜索条件
            if (this.$route.query.keyword !== undefined) {
                this.postId = this.$route.query.postId
                this.obj2.keyword = this.$route.query.keyword
                this.pageIndex = this.$route.query.pageIndex * 1
                this.$refs.pager.currentPage = this.$route.query.pageIndex * 1
                this.department_name2 = this.$route.query.deparName
                this.$nextTick(() => {
                    this.obj2.department = this.$route.query.department
                    this.obj2.state = this.$route.query.state
                    getData()
                })
                return false
            }
            getData()
        },
        handleSearch (v) {
            let obj = {
                postId: this.postId,
                keyword: this.obj2.keyword,
                department: this.obj2.department,
                deparName: this.department_name2,
                state: this.obj2.state,
                pageIndex: this.pageIndex
            }
            if (v) {
                this.$refs.pager.currentPage = 1
                obj.pageIndex = 1
            } else {
                obj.pageIndex = this.$refs.pager.currentPage
            }
            this.$router.replace({name: 'positions', query: obj})
            this.getList()
        },
        resetSearch () {
            this.$router.replace({name: 'positions'})
            this.obj2 = {
                keyword: '',
                state: '-1'
            }
            this.pageIndex = 1
            this.$refs.pager.currentPage = 1
            this.department_name2 = '全部部门'
            this.obj2.department = null
            this.$refs.treeDrops.clearStyle()
            this.getList()
        }
    },
    mounted () {
        this.init()
    }
}
</script>
