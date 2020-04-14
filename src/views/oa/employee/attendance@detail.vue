<style lang="less">
    .table_center .ivu-table th{
        text-align: center;
    }
    .table_center .ivu-table td{
        text-align: center;
    }
    .form_margin .ivu-form-item{
        margin-bottom: 20px;
    }
</style>
<template>
    <div class="tableLayout">
        <tab></tab>
        <div class="tableTool" @keyup.enter.stop="hendleSearch">
            <DatePicker style="width: 180px" type="daterange" :clearable="false"
                :editable="false" :value="date" @on-change="dateGet" format="yyyy-MM-dd">
            </DatePicker>
            <treeDrop ref="depart" v-model="searchBox.deptId" placeholder="请选择部门"
                :name="searchBox.departName" :data="departData"
                @nameSel="(val)=>{searchBox.departName = val}">
            </treeDrop>
            <Select v-model="searchBox.status" style="width: 180px">
                <Option v-for="st in statusList" :value="st.value" :key="st.value">{{st.name}}</Option>
            </Select>
            <br />
            <Input style="width: 180px" type="text" placeholder="员工姓名、工号"
                v-model="searchBox.keyword" @on-enter="handleSearch(1)"/>
            <Button type="primary" @click="handleSearch(1)">搜索</Button>
            <Button type="default" @click="resetSearch">重置</Button>
            <Button type="primary" class="fr" @click="detailCreate(3)">核对考勤</Button>
            <Button type="primary" class="fr" @click="detailCreate(2)">生成考勤</Button>
            <Button type="primary" class="fr" @click="outPort">批量导出</Button>
            <!-- <a class="out_port" @click="detailCreate(3)">核对考勤</a>
            <a class="out_port" style="margin-right: 10px" @click="detailCreate(2)">生成考勤</a>
            <a class="out_port" download="" target="_blank" :href="url" style="margin-right: 10px" @click="outPort">批量导出</a> -->
        </div>
        <Table border :loading="loading" :columns="tableColumns" :data='currentTable' stripe class="table_center">
            <template slot-scope="{ row, index }" slot="slot1">
                <h3>{{row.userName}}</h3>
                <br />
                <span>部门: {{row.deptName}}</span>
                <br />
                <span>工号: {{row.workNum}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="slot2">
                <span>上班打卡: {{row.checkIn}}</span>
                <br />
                <span>下班打卡: {{row.checkOut}}</span>
                <br />
                <span>未出勤天数: {{row.not}}</span>
                <br />
                <span>应出勤: {{row.ought}}</span>
                <br />
                <span>实出勤: {{row.real}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="slot3">
                <span>旷工: {{row.absenteeism}}（天）</span>
                <br />
                <span>请假: {{row.vacation}}（天）</span>
                <br />
                <span>迟到、早退: {{row.tardiness}}（次）</span>
                <br />
                <span>调休: {{row.dayoff}}（小时）</span>
                <br />
                <span>转换年假: {{row.annualTurn}}（小时）</span>
            </template>
            <template slot-scope="{ row, index }" slot="slot4">
                <span>年假: {{row.annual}}（小时）</span>
                <br />
                <span>事假: {{row.personalLeave}}（小时）</span>
                <br />
                <span>婚假: {{row.marriageLeave}}（天）</span>
                <br />
                <span>丧假: {{row.sadLeave}}（天）</span>
                <br />
                <span>产假: {{row.maternityLeave}}（天）</span>
                <br />
                <span>陪产假: {{row.paternityLeave}}（天）</span>
            </template>
            <template slot-scope="{ row, index }" slot="slot5">
                <span>未打卡: {{row.noCard}}（次）</span>
                <br />
                <span>外出: {{row.goOut}}（次）</span>
                <br />
                <span>出差: {{row.travel}}（天）</span>
                <br />
                <span>加班: {{row.overTime}}（小时）</span>
                <br />
                <span>值班: {{row.duty}}（小时）</span>
            </template>
            <template slot-scope="{ row, index }" slot="slot6">
                <span>{{row.workFull||'-'}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="slot7">
                <span>生日奖: {{row.birthday}}</span>
                <br />
                <span>加班餐补: {{row.overTimeSubsidy}}</span>
                <br />
                <span>行车补助: {{row.trafficSubsidy}}</span>
                <br />
                <span>合计: {{row.total}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="status">
                <span v-if="row.status === 1">未生成</span>
                <span v-if="row.status === 2">已生成</span>
                <span v-if="row.status === 3">待核对</span>
                <span v-if="row.status === 4">已核对</span>
            </template>
        </Table>
        <Page ref="pager" :total=totalCount :page-size=searchBox.pageSize show-total show-elevator style="margin: 15px 0;float: right;clear: both" @on-change="handleSearch"/>
        <Modal v-model="editModal" title="编辑考勤明细" :closable="false" :mask-closable="false">
            <div style="width: 70%;margin: 0 auto">
                <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="100" class="form_margin">
                    <FormItem label="姓名：" prop="userName" style="margin-bottom: 0">
                        {{editName}}
                    </FormItem>
                    <FormItem label="日期：" prop="date" style="margin-bottom: 10px">
                        {{editDate}}
                    </FormItem>
                    <FormItem label="迟到、早退：" prop="tardiness">
                        <i-input type="text" v-model="formItem.tardiness" placeholder="请输入迟到、早退次数"><span slot="append">次</span></i-input>
                    </FormItem>
                    <FormItem label="加班餐补：" prop="overTimeSubsidy">
                        <i-input type="text" v-model="formItem.overTimeSubsidy" placeholder="请输入加班餐补"><span slot="append">元</span></i-input>
                    </FormItem>
                    <FormItem label="行车补助：" prop="trafficSubsidy">
                        <i-input type="text" v-model="formItem.trafficSubsidy" placeholder="请输入行车补助"><span slot="append">元</span></i-input>
                    </FormItem>
                    <FormItem label="工牌扣除：" prop="cardDeduct">
                        <i-input type="text" v-model="formItem.cardDeduct" placeholder="请输入工牌扣除"><span slot="append">元</span></i-input>
                    </FormItem>
                    <FormItem label="备注：" prop="remarks">
                        <Input type="textarea" class="textArea" :autosize="true" v-model="formItem.mark" placeholder="请输入备注"/>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">
                <Button type="text" @click="cancelEdit">取消</Button>
                <Button type="primary" @click="saveEdit">保存</Button>
            </div>
        </Modal>
        <Spin size="large" fix v-if="spinShow">
            <Icon type="ios-loading" size=36 class="demo-spin-icon-load"></Icon>
            <div style="font-size: 24px">
                <span v-if="actionNum === 1">正在导出</span>
                <span v-if="actionNum === 2">正在生成</span>
                <span v-if="actionNum === 3">正在核对</span>
            </div>
        </Spin>
    </div>
</template>
<script>
import treeDrop from '@C/tree-drop'
import { sevenRange } from '@/utils'
import tab from './attendance@tab.vue'
export default {
    components: {treeDrop, tab},
    data () {
        return {
            actionNum: '', // 加载中文字控制
            spinShow: false, // 加载中开关
            url: '', // 导出链接
            statusList: [
                {value: -1, name: '全部状态'},
                {value: 1, name: '未生成'},
                {value: 2, name: '已生成'},
                {value: 3, name: '待核对'},
                {value: 4, name: '已核对'}
            ], // 状态列表
            date: [], // 初始日期
            searchBox: {
                begin: '',
                end: '',
                keyword: '',
                deptId: -1,
                departName: '',
                status: -1,
                pageIndex: 1,
                pageSize: 30
            }, // 搜索条件
            departData: [], // 部门树
            currentTable: [
            ], // 列表
            totalCount: 0, // 总数
            loading: false, // 列表加载
            editModal: false, // 编辑弹框
            editName: '',
            editDate: '',
            formItem: { // 编辑表单
                tardiness: '',
                overTimeSubsidy: '',
                trafficSubsidy: '',
                cardDeduct: '',
                mark: ''
            },
            ruleValidate: { // 表单校验
                tardiness: [
                    { required: true, message: '请输入迟到、早退次数' },
                    { type: 'string', message: '数据格式错误', pattern: /^(0|[1-9][0-9]*)$/ }
                ],
                overTimeSubsidy: [
                    { required: true, message: '请输入加班餐补' },
                    { type: 'string', message: '数据格式错误', pattern: /^(0|[1-9][0-9]*)$/ }
                ],
                trafficSubsidy: [
                    { required: true, message: '请输入行车补助' },
                    { type: 'string', message: '数据格式错误', pattern: /^\d{0,8}\.{0,1}(\d{1,2})?$/ }
                ],
                cardDeduct: [
                    { required: true, message: '请输入工牌扣除' },
                    { type: 'string', message: '数据格式错误', pattern: /^(0|[1-9][0-9]*)$/ }
                ]
            },
            tableColumns: [ // 列表项
                { title: '日期', key: 'date', fixed: 'left', width: 100 },
                { title: '姓名', slot: 'slot1', fixed: 'left', width: 200 },
                { title: '出勤天数', key: 'dayNum', fixed: 'left', width: 70 },
                { title: '考勤记录', slot: 'slot2', width: 170 },
                { title: '已用假期', slot: 'slot3', width: 170 },
                { title: '假期', slot: 'slot4', width: 170 },
                { title: '额外情况', slot: 'slot5', width: 170 },
                { title: '全勤奖', slot: 'slot6', width: 80 },
                { title: '福利', slot: 'slot7', width: 170 },
                { title: '工牌扣除', key: 'cardDeduct', width: 90 },
                { title: '备注（迟到、早退分钟数）', key: 'mark', width: 110 },
                { title: '状态', slot: 'status', width: 80 }
            ]
        }
    },
    methods: {
        init () {
            this.initDate()
            this.$get('api/hr/getdepartment', {
            }).then(res => {
                this.departData = res.data.data.departments
            })
            if (this.$route.query.pageIndex) {
                this.searchBox = {
                    begin: this.$route.query.begin,
                    end: this.$route.query.end,
                    keyword: this.$route.query.keyword,
                    deptId: parseInt(this.$route.query.deptId),
                    departName: this.$route.query.departName,
                    status: parseInt(this.$route.query.status),
                    pageIndex: parseInt(this.$route.query.pageIndex),
                    pageSize: parseInt(this.$route.query.pageSize)
                }
            }
            this.getList()
        },
        // 初始化日期
        initDate () {
            this.date = sevenRange()
            this.searchBox.begin = this.date[0]
            this.searchBox.end = this.date[1]
        },
        dateGet (t) {
            this.searchBox.begin = t[0]
            this.searchBox.end = t[1]
        },
        // 筛选条件转换
        paramsSwitch (v) {
            let pa = JSON.parse(JSON.stringify(this.searchBox))
            if (v === 1) {
                delete pa.pageIndex
                delete pa.pageSize
            }
            pa.status = this.searchBox.status === -1 ? null : this.searchBox.status
            pa.deptId = this.searchBox.deptId === -1 ? null : this.searchBox.deptId
            return pa
        },
        // 列表操作
        detailCreate (n) {
            this.actionNum = n
            this.spinShow = true
            let postUrl = n === 2 ? 'api/hr/detail_create' : 'api/hr/detail_check'
            this.$post(postUrl, this.paramsSwitch(1)).then((res) => {
                this.spinShow = false
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        },
        outPort () {
            this.actionNum = 1
            this.spinShow = true
            this.$get('api/hr/detail_export', this.paramsSwitch(1)).then((res) => {
                this.spinShow = false
            })
            // this.$get('api/finance/claim_uplist_export', {
            //     begin: '2019-05-01',
            //     end: '2019-06-30',
            //     amount: '',
            //     keyword: '',
            //     status: '',
            //     type: 2
            // }).then((res) => {
            // })
        },
        saveUrl () {
            let st = this.searchBox.status === -1 ? '' : this.searchBox.status
            let dept = this.searchBox.deptId === -1 ? '' : this.searchBox.deptId
            this.url = 'api/hr/detail_export?begin=' + this.searchBox.begin +
            '&end=' + this.searchBox.end +
            '&status=' + st +
            '&keyword=' + this.searchBox.keyword +
            '&deptId=' + dept
        },
        // 搜索及重置
        getList () {
            this.loading = true
            this.$get('api/hr/detail_list', this.paramsSwitch()).then((res) => {
                this.loading = false
                this.currentTable = res.data.data.list
                this.totalCount = res.data.data.rowcount
                this.saveParams()
                this.saveUrl()
            })
        },
        saveParams () {
            // let pa = JSON.parse(JSON.stringify(this.searchBox))
            // this.$router.replace({name: 'detail-list', query: pa})
        },
        handleSearch (index) {
            this.$refs.pager.pageIndex = index
            this.searchBox.pageIndex = index
            this.getList()
        },
        resetSearch () {
            this.$refs['depart'].clearStyle()
            this.departName = ''
            this.searchBox = {
                begin: '',
                end: '',
                keyword: '',
                deptId: -1,
                departName: '',
                status: -1,
                pageIndex: 1,
                pageSize: 30
            }
            this.$refs.pager.pageIndex = 1
            this.initDate()
            this.getList()
        },
        // 编辑相关
        openModal (id, name, date) {
            this.$refs['formItem'].resetFields()
            this.editName = name
            this.editDate = date
            this.$get('api/hr/detail_edit_info', {
                id: id
            }).then((res) => {
                this.formItem = res.data.data.info
            })
            this.editModal = true
        },
        cancelEdit () {
            this.editModal = false
        },
        saveEdit () {
            this.$refs['formItem'].validate((valid) => {
                if (valid) {
                    this.postForm()
                }
            })
        },
        postForm () {
            this.$post('api/hr/detail_edit', {
                tardiness: parseInt(this.formItem.tardiness),
                overTimeSubsidy: parseInt(this.formItem.overTimeSubsidy),
                trafficSubsidy: parseFloat(this.formItem.trafficSubsidy),
                cardDeduct: parseInt(this.formItem.cardDeduct),
                mark: this.formItem.mark
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.editModal = false
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        }
    },
    mounted () {
        this.init()
    }
};
</script>
<style scoped>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
</style>
