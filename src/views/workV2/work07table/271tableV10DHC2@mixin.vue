<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small> DHC补充内容 </small><b> MiXin尝试 - 失败品不建议使用 </b></h2>
            </div>
            <tab></tab>
            <div class="tableTool" @keyup.enter.stop="hendleSearch">
                <Input type="text" v-model.trim="search.businessName" placeholder="请输入姓名" style="width: 180px"/>
                <Select v-model="search.sex" placeholder="请选择性别" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.sex" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.taskStatus" placeholder="请选择状态" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.state" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.age" placeholder="请选择年龄" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.age" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <Select v-model="search.stay" placeholder="请选择时长" style="width: 180px">
                    <Option value="0" label="全部"></Option>
                    <Option v-for="option in dataSet.stay" :value="option.id" :key="option.id" :label="option.name" >
                    </Option>
                </Select>
                <br />
                <Button type="primary" :loading="loading.table" @click="hendleSearch">搜索</Button>
                <Button type="default" :loading="loading.table" @click="hendleReset">重置</Button>
            </div>
            <Table border :loading="loading.table" :columns="columns" :data="tableData"
                @on-sort-change="hendleSort">
                <template slot-scope="{ row, index }" slot="op">
                    <Button type="text" @click="hendleEdit(row)" size="small">编辑</Button>
                    <Button type="text" @click="hendleDel(row)" size="small">删除</Button>
                </template>
            </Table>
            <div class="tableFooter">
                <!-- 模版结构不要动 -->
                <span> {{showPageCount(page.rowCount,page.pageIndex,page.pageSize)}}</span>
                <Page ref="pager" :page-size="page.pageSize" :current="page.pageIndex" :total="page.rowCount"
                    show-sizer show-elevator class="fr"
                    @on-change="v=>{hendleGopage(v)}"
                    @on-page-size-change="v=>{page.pageSize=v;hendleGopage(1)}"/>
                </Page>
                <span class="fr"> {{showPageRow(page.rowCount,page.pageIndex,page.pageSize)}}</span>
            </div>
        </div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">不大好 只是尝试</div>
                <Divider orientation="right">项目上的经验积累</Divider>
                <div class="blogContent" v-highlight>
                    <p class="text-danger">mixin 不能实现 变量先声明后混入的方式 先凑合一下</p>
                    <script type="text/js">
                        import tableV12Minxin from '@/mixin/tableV12Minxin'
                        export default {
                            data () {
                                return {
                                    ...tableV12Minxin.data,
                                    'end1': 1 // 防呆设计
                                }
                            },
                            methods: {
                                ...tableV12Minxin.methods,
                                end2: nothing // 防呆设计
                            }
                        }
                    </script>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { nothing } from '@/utils'
import {h, alertMsg} from '@/tools' // 自定义常用工具
import tab from './271tableV10DHC2'
import tableV12Minxin from '@/mixin/tableV12Minxin'

export default {
    components: { tab },
    data () {
        return {
            dataSet: {
                'sex': [], // 性别 0全部1男2女
                'state': [], // 状态 0全部1在校2记过3劝退4开除
                'age': [ // 年龄
                    {id: '10', name: '10 ~ 20'}, {id: '20', name: '20 ~ 30'}, {id: '30', name: '30 ~ 40'},
                    {id: '40', name: '40 ~ 50'}, {id: '50', name: '50 ~ 60'}, {id: '60', name: '60 ~ 70'},
                    {id: '70', name: '70 ~ 80'}, {id: '80', name: '80 ~ 90'}
                ],
                'stay': [ // 时长
                    {id: '10', name: '0 ~ 10'}, {id: '20', name: '10 ~ 20'}, {id: '30', name: '20 ~ 30'}
                ]
            },
            search: {
                // 'taskPriority': '', // 级别 0:一般 1：重要 2：紧急
                // 'taskStatus': '', // 任务状态, 0:待接受；1:执行中；2:待验收;3.验收通过；4.已废弃；5.已暂停
                // 以上枚举的设置十分不利于前端规范化 请不要使用0为枚举id 因为0代表全部
                // 建议 使用空值来初始显示 (虽然不大爽)
                'sex': '', // 性别 0全部1男2女
                'state': '', // 状态 0全部1在校2记过3劝退4开除
                'name': '',
                'age': '',
                'stay': ''
            },
            loading: {
                table: false, // 表格加载
                btn1: false, btn2: false, btn3: false, btn4: false, // 功能节流
                op1: false, op2: false // 操作节流
            },
            columns: [ // 列配置 必须指定最小宽度 [[模版变量不要动]]
                {title: 'id', minWidth: 100, key: 'id', sortable: true},
                {title: '头像照片', minWidth: 100, key: 'pic', render: h.showHead('pic')},
                {title: '姓名', minWidth: 100, key: 'name'},
                {title: '生活照片', minWidth: 100, key: 'pic', render: h.showPic('pic'), align: 'center'},
                {title: '性别', minWidth: 100, key: 'sex', render: h.readArr('sex', this.$api.student.pullSex('table'))},
                {title: '状态', minWidth: 100, key: 'state', render: h.readArr('state', this.$api.student.pullState('table'))},
                {title: '年龄', minWidth: 100, key: 'age'},
                {title: '留学时长', minWidth: 100, key: 'stay'},
                {title: '操作', minWidth: 80, slot: 'op', align: 'center'}
            ],
            ...tableV12Minxin.data,
            end1: 1 // 防呆设计
        }
    },
    methods: {
        ...tableV12Minxin.methods,
        hendleEdit (row) { // 操作::编辑功能
            alertMsg(`姓名: ${row.name}<br/> 性别: ${row.sex}<br/> 状态: ${row.stare}<br/> 年龄: ${row.age}<br/> 留学时长: ${row.stay}<br/> `, '单元内容')
        },
        hendleDel (id) { // 操作::删除
            if (this.loading.op2) return false
            this.loading.op2 = true
            this.$api.student.del(id).then(() => {
                this.loading.op2 = false
                this.ajax()
            }, () => {
                this.loading.op2 = false
            })
        },
        initDataSet () { // 初始化数据源 [[模版方法不要动]]
            this.$api.student.pullSex().then(list => {
                this.dataSet.sex = list
            }, () => {
            })
            this.$api.student.pullState().then(list => {
                this.dataSet.state = list
            }, () => {
            })
        },
        ajaxCustom: function () { // 业务ajax [[模版方法不要动]]
            this.$api.student.listAll(this.serrchParam).then((info) => { // 发送ajax
                this.ajaxEnd()
                this.tableData = info.list.map(function (row) {
                    row.pic = 'https://i.loli.net/2017/08/21/599a521472424.jpg'
                    return row
                })
                this.page.rowCount = info.rowcount
            })
        },
        end2: nothing // 防呆设计
    },
    mounted: function () {
        this.init()
        this.initDataSet()
    }
}
</script>
