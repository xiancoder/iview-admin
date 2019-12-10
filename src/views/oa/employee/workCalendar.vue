<template>
    <div class="tableLayout">
        <h2>
            <span>节假日设置</span>
            <Button type="primary" style="float: right" @click="openDate(1,0)">添加</Button>
        </h2>
        <Table border :columns="columns1" :data="tableData1" class="space">
            <template slot-scope="{ row, index }" slot="date">
                {{row.begin}}至{{row.end}}
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <a @click="openDate(1,row.id,row.name,row.begin,row.end)" style="margin-right: 20px">编辑</a>
                <a @click="deleteDate(row.id)">删除</a>
            </template>
        </Table>
        <h2>
            <span>例外工作日设置</span>
            <Button type="primary" style="float: right" @click="openDate(2,0)">添加</Button>
        </h2>
        <Table border :columns="columns2" :data="tableData2" class="space">
            <template slot-scope="{ row, index }" slot="date">
                {{row.begin}}至{{row.end}}
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <a @click="openDate(2,row.id,row.name,row.begin,row.end)" style="margin-right: 20px">编辑</a>
                <a @click="deleteDate(row.id)">删除</a>
            </template>
        </Table>
        <Modal v-model="dateModal" :title="title" :closable="false" :mask-closable="false">
            <div style="width: 360px;margin: 0 auto;position: relative">
                <div class="modal_label"><span>*</span> {{kindName}}：</div>
                <Input v-model="dateName" :maxlength="10" placeholder="10字符以内" style="width: 250px"/>
                <div class="modal_label"><span>*</span> 起止时间：</div>
                <DatePicker type="daterange" :editable="false" :value="date" @on-change="dateGet" format="yyyy-MM-dd" style="width: 250px" placeholder="请选择时间区间"></DatePicker>
            </div>
            <div slot="footer">
                <Button type="text" @click="cancelDate">取消</Button>
                <Button type="primary" @click="saveDate">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
export default {
    name: 'work-calendar',
    data () {
        return {
            deleteModal: false,
            dateModal: false,
            type: '',
            id: 0,
            date: [],
            begin: '',
            end: '',
            dateName: '',
            tableData1: [],
            columns1: [
                {
                    title: '节假日名称',
                    key: 'name'
                },
                {
                    title: '起止日期',
                    slot: 'date'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ],
            tableData2: [],
            columns2: [
                {
                    title: '节假日名称',
                    key: 'name'
                },
                {
                    title: '起止日期',
                    slot: 'date'
                },
                {
                    title: '工时（小时）',
                    key: 'workhour'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ]
        }
    },
    computed: {
        title () {
            let a = this.id === 0 ? '添加' : '编辑'
            let b = this.type === 1 ? '节假日' : '例外工作日'
            return a + b
        },
        kindName () {
            if (this.type === 1) {
                return '节假日名称'
            } else {
                return '例外工作日名称'
            }
        }
    },
    methods: {
        init () {
            this.getList()
        },
        getList () {
            this.$get('/api/hr/holiday_list', {
            }).then((res) => {
                this.tableData1 = res.data.data.holiday
                this.tableData2 = res.data.data.exception
            })
        },
        openDate (type, id, name, begin, end) {
            if (id === 0) {
                this.dateName = ''
                this.date = []
                this.begin = ''
                this.end = ''
            } else {
                this.dateName = name
                this.date = [begin, end]
                this.begin = begin
                this.end = end
            }
            this.dateModal = true
            this.type = type
            this.id = id
        },
        dateGet (t) {
            this.begin = t[0]
            this.end = t[1]
        },
        cancelDate () {
            this.dateModal = false
        },
        saveDate () {
            if (this.dateName === '') {
                this.$Message.info({
                    content: '请输入名称'
                })
                return
            }
            if (this.begin === '') {
                this.$Message.info({
                    content: '请选择时间区间'
                })
                return
            }
            if (this.type === 1) {
                this.$post('/api/hr/holiday_edit', {
                    id: this.id,
                    name: this.dateName,
                    begin: this.begin,
                    end: this.end
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        this.$Message.info({
                            content: '操作成功'
                        })
                        this.getList()
                        this.dateModal = false
                    } else {
                        this.$Message.info({
                            content: res.data.msg || '操作失败'
                        })
                    }
                })
            } else if (this.type === 2) {
                this.$post('/api/hr/holiday_exception_edit', {
                    id: this.id,
                    name: this.dateName,
                    begin: this.begin,
                    end: this.end
                }).then((res) => {
                    if (res.data.data && res.data.data.res === 1) {
                        this.$Message.info({
                            content: '操作成功'
                        })
                        this.getList()
                        this.dateModal = false
                    } else {
                        this.$Message.info({
                            content: res.data.msg || '操作失败'
                        })
                    }
                })
            }
        },
        deleteDate (id) {
            this.id = id
            this.$Modal.confirm({
                title: '提示',
                content: '<p>确认要删除吗？</p>',
                onOk: () => {
                    this.$get('/api/hr/holiday_del', {
                        id: this.id
                    }).then((res) => {
                        if (res.data.data && res.data.data.res === 1) {
                            this.$Message.info({
                                content: '操作成功'
                            })
                            this.getList()
                            this.deleteModal = false
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '操作失败'
                            })
                        }
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
<style scoped>
    h2{
        border-bottom: 1px solid #dddddd;
        height: 35px;
        line-height: 35px;
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
    .space{
        margin: 30px 0 50px 0;
    }
    .modal_label{
        display: inline-block;
        width: 105px;
        text-align: right;
        margin-bottom: 30px;
    }
    .modal_label span{
        color: red;
    }
</style>
