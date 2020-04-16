<template>
    <div style="padding-left: 270px">
        <div class="left_section">
            <div class="left_top tc">
                <DatePicker class="big_date" :value="currentDate" size="large"
                    :open="true" :transfer="false"
                    placement="bottom" @on-change="handleChangeDate">
                    <div></div>
                </DatePicker>
            </div>
            <div class="left_main">
                <h2 style="color: #2d8cf0" v-if="myMeeting.length > 0">日程安排：</h2>
                <div class="no_meeting tc" v-if="myMeeting.length === 0">
                    <div>本日暂无会议安排</div>
                </div>
                <div class="my_meeting" :class="{'bn':index===0}" v-for="(meeting, index) in myMeeting" :key="index">
                    <div class="left_title pr">
                        {{meeting.roomName}}<br>{{meeting.begin}} - {{meeting.end}}
                        <div class="arrow_position">
                            <span class="downArrow" v-show="!meeting.show" @click="meeting.show = !meeting.show" style="margin-top: 7px"></span>
                            <span class="upArrow" v-show="meeting.show" @click="meeting.show = !meeting.show"></span>
                        </div>
                    </div>
                    <div v-show="meeting.show">
                        <div class="left_sub">会议主题：</div>
                        <div class="left_content">{{meeting.mainContent}}</div>
                        <div class="left_sub">会议内容：</div>
                        <div class="left_content">{{meeting.content || '-'}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right_section" ref="clickBtn">
            <div class="right_title">
                预约情况
                <div class="intro_icon">
                    <span style="background-color: #e0d6f5"></span>未被预约
                </div>
                <div class="intro_icon">
                    <span style="background-color: #19be6b"></span>我的预约
                </div>
                <div class="intro_icon">
                    <span style="background-color: #FF8282"></span>已被预约
                </div>
            </div>
            <div class="right_main pr">
                <div class="room_model" :class="{bn:index===0}" v-for="(room, index) in roomList" :key="index">
                    <div class="room_title">
                        {{room.roomName}}
                        <span>最多可容纳{{room.count||'-'}}人</span>
                        <span style="margin-right: 15px">{{room.equipment||'无描述'}}</span>
                    </div>
                    <div class="room_bar pr">
                        <Button type="primary" class="reserve_button" @click="handleAppointModel(room, 0)" :disabled="editButtonDisabled"> 预约 </Button>
                        <Row :gutter="6">
                            <Col span="2" v-for="hour in hourList" :key="hour.num">
                                <Row class="rec">
                                    <Col span="2" v-for="(minute, index) in minuteList" :key="index" class="rec_sub"
                                        @click.native="handleMeetingInfoModel(room, hour, minute)"
                                        :class="randerBoxColor(hour.num, minute, room.meeting)">
                                        <Poptip v-if="randerBoxMeeting(hour.num, minute, room.meeting)"
                                            trigger="hover" :title="randerBoxTip(room, hour, minute, 2)"
                                            :content="randerBoxTip(room, hour, minute, 1)" style="height: 100%;display: block" >
                                        </Poptip>
                                    </Col>
                                    <span class="rec_mark" v-if="hour.num !== 1">{{hour.name}}</span>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Spin size="large" fix v-show="spinShow"></Spin>
            </div>
        </div>
        <Modal v-model="infoModal" title="会议室信息" :mask-closable="false">
            <div class="info_modal">
                <div><!-- <img src="../../images/time.png"> -->{{infoData.begin}} ~ {{infoData.end}}</div>
                <div v-show="infoData.status === 1"><Icon type="md-alert" size="18" style="margin: -5px 10px 0 0"/>该时间段已被{{infoData.userName}}占用</div>
                <div v-show="infoData.status === 2"><!-- <img src="../../images/title.png"> -->{{infoData.mainContent}}</div>
                <div v-show="infoData.status === 2"><Icon type="md-people" size="18" style="margin: -5px 10px 0 0"/>{{infoData.joinName.join('，')}}</div>
            </div>
            <div slot="footer">
                <div v-show="infoData.status === 2">
                    <Button type="primary" ghost @click="handleToCancel" v-show="infoData.current === 0">取消预约</Button>
                    <Button type="success" @click="handleToRelease" v-show="infoData.current === 1 && infoData.isRelease === 0">释放会议室</Button>
                    <Button type="primary" @click="handleAppointModel(infoData, 1)" v-show="infoData.current === 0">修改预约信息</Button>
                </div>
            </div>
        </Modal>
        <Modal v-model="editModal" :title="editTitle" :mask-closable="false" @on-cancel="timeModal = false">
            <Form ref="formItem" :model="formData" :rules="formRules" :label-width="80" class="form_20">
                <FormItem label="会议时间" prop="time" class="pr">
                    <TimePicker confirm :disabled-hours="disTime" :steps="[1, 5]" :value="formData.time"
                        @on-ok="handleConfirmTime" @on-change="(date)=>{formData.time=date}" :open="timeModal" :clearable="false"
                        :editable="false" format="HH:mm" type="timerange" class="no_reset" style="width: 230px">
                    </TimePicker>
                    <Card class="available_time" v-if="timeModal">
                        <p slot="title">可用时间</p>
                        <p v-for="(time, index) in availableTime" :key="index">
                            {{time.beginStr}} ~ {{time.endStr}}
                        </p>
                    </Card>
                    <div class="time_mask" @click="timeModal = true"></div>
                </FormItem>
                <FormItem label="参会人" prop="join">
                    <Select v-model="formData.join" multiple filterable placeholder="请搜索 / 选择参会人"
                        label-in-value @on-change="(date)=>{joinList=date;checkInJoin()}"
                        @on-open-change="(show)=>{!show && checkConflictAjax()}">
                        <Option v-for="row in userList" :value="row.id" :key="row.id" :label="row.name">
                            {{row.name}}<span v-show="false">{{row.emailStr}}</span>
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="冲突人员" v-if="conflictList.length > 0">
                    <div v-for="(user, index) in conflictList" :key="index" style="color: #ed4014">
                        {{user.name}}（{{user.begin}}-{{user.end}}）
                    </div>
                </FormItem>
                <FormItem label="主持人" prop="host">
                    <Select v-model="formData.host" clearable filterable placeholder="请搜索 / 选择主持人">
                        <Option v-for="row in joinList" :value="row.value" :key="row.value" :label="row.label">
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="记录人" prop="record">
                    <Select v-model="formData.record" clearable filterable placeholder="请搜索 / 选择记录人">
                        <Option v-for="row in joinList" :value="row.value" :key="row.value" :label="row.label">
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="会议主题" prop="mainContent">
                    <Input type="text" v-model="formData.mainContent" placeholder="请输入会议主题"/>
                </FormItem>
                <FormItem label="会议内容" prop="content">
                    <Input type="textarea" class="textArea" :autosize="{minRows: 3,maxRows: 5}"
                        v-model="formData.content" placeholder="请输入会议内容"/>
                </FormItem>
                <FormItem label="所需物资" prop="material">
                    <Input type="text" v-model="formData.material" placeholder="请输入所需物资"/>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary" :loading="loading" @click="handleSubmitEditModal">立即预约</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import moment from 'moment'
import '@/plugins/mock'
import { howManyToToday } from '@/utils'

// 优化建议
// good
// 1 日期差计算妙 照抄
// 2 样式写的好 照抄
// need study
// 1 时间范围控件的表单校验
// bad
// 1 公共方法抽取出来 如果应用范围大 应该抽取到utils
// 2 datapicker on-change 应该尽量简单 统一
// 3 多使用 computed 属性
// advise
// 1 建议方法命名 handle
// 2 多写注释
// 3 建议少用 517行 me = this 等结构

const getNum = (hour, minute) => { // 当前分钟块的序数
    return (hour - 1) * 12 + minute
}
const timeToNum = (t) => { // 将时间点转换为分钟块序数
    if (t.length === 4) {
        return (parseInt(t.substr(0, 1)) - 8) * 12 + (parseInt(t.substr(2, 2)) / 5)
    } else if (t.length === 5) {
        return (parseInt(t.substr(0, 2)) - 8) * 12 + (parseInt(t.substr(3, 2)) / 5)
    }
}
const meetingBox = (list, k) => { // 将会议时间转换为分钟块数组
    let box = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].status === k) {
            const begin = timeToNum(list[i].begin)
            const end = timeToNum(list[i].end)
            for (let n = begin + 1; n <= end; n++) {
                box.push(n)
            }
        }
    }
    return box
}
const minToStr = (min) => {
    if (min === 1) {
        return '00'
    } else if (min === 2) {
        return '05'
    } else {
        return ((min - 1) * 5).toString()
    }
}
const getNow = () => { // 获取当前时间属于的时间段
    const now = moment().get('hours')
    if (now < 8) {
        return ['8:00', '9:00']
    }
    const min = Math.ceil((moment().get('minutes') / 5))
    if (min === 0) {
        return [now + ':00', (now + 1) + ':00']
    } else if (min === 1) {
        return [now + ':05', (now + 1) + ':05']
    } else if (min === 12) {
        return [(now + 1) + ':00', (now + 2) + ':00']
    }
    return [now + ':' + min * 5, (now + 1) + ':' + min * 5]
}

export default {
    data () {
        return {
            datePicker: 0,
            myMeeting: [],

            currentDate: moment(new Date()).format('YYYY-MM-DD'), // 当前会议安排表日期
            roomList: [], // 会议室列表
            spinShow: false, // 等待spin

            hourList: [
                {num: 1, name: '08:00'}, {num: 2, name: '09:00'}, {num: 3, name: '10:00'}, {num: 4, name: '11:00'},
                {num: 5, name: '12:00'}, {num: 6, name: '13:00'}, {num: 7, name: '14:00'}, {num: 8, name: '15:00'},
                {num: 9, name: '16:00'}, {num: 10, name: '17:00'}, {num: 11, name: '18:00'}, {num: 12, name: '19:00'}
            ],
            minuteList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

            infoModal: false,
            infoData: {
                roomName: '',
                status: 0,
                begin: '',
                end: '',
                userName: '',
                // 以上为他人预约必要信息
                isRelease: 0, // 是否已释放，用来控制非整5分钟释放
                id: 0,
                roomId: 0,
                current: 0, // 0会议前，1会议中，2会议后
                date: '',
                time: [],
                join: [],
                joinName: [],
                host: null,
                record: null,
                mainContent: '',
                content: '',
                material: ''
            },
            loading: false,

            editModal: false,
            editTitle: '',
            disTime: [0, 1, 2, 3, 4, 5, 6, 7, 20, 21, 22, 23],
            availableTime: [],
            timeModal: false,
            userList: [],
            joinList: [],
            conflictList: [],
            formData: {
                id: 0,
                roomId: 0,
                roomName: '',
                date: '',
                time: [],
                begin: '',
                end: '',
                join: [],
                host: null,
                record: null,
                mainContent: '',
                content: '',
                material: ''
            },
            formRules: {
                time: [
                    { required: true, message: '请选择会议时间' }
                ],
                join: [
                    { required: true, message: '请选择参会人' }
                ],
                mainContent: [
                    { required: true, message: '请输入会议主题' },
                    { type: 'string', max: 50, message: '最多输入50个字符' }
                ],
                content: [
                    { type: 'string', max: 1000, message: '最多输入1000个字符' }
                ],
                material: [
                    { type: 'string', max: 100, message: '最多输入100个字符' }
                ]
            }
        }
    },
    computed: {
        editButtonDisabled () { // 判断预约按钮能否使用
            let days = howManyToToday(this.currentDate)
            if (days === 0) {
                return moment().get('hours') >= 19
            } else {
                return days > 0
            }
        }
    },
    methods: {
        init () {
            this.$get('api/meeting/user_list').then((res) => {
                this.userList = res.data.data.list
            })
            this.todayMeetingListAjax()
            this.roomListAjax()
            this.$nextTick(() => { // 解决看不见的blur层问题 临时方案
                this.$refs.clickBtn.click()
            })
        },

        /* 日期面板 */
        handleChangeDate (date) { // 点击日期面板触发修改
            this.currentDate = date
            this.todayMeetingListAjax()
            this.roomListAjax()
        },
        /* 会议安排表 */
        todayMeetingListAjax () { // 获取对应日期的会议安排表
            this.$get('api/meeting/today', {
                date: this.currentDate
            }).then((res) => {
                this.myMeeting = res.data.data.list
            })
        },
        roomListAjax () { // 获取会议室列表
            this.spinShow = true
            this.$get('api/meeting/info', {
                date: this.currentDate
            }).then((res) => {
                this.roomList = res.data.data.list
                this.spinShow = false
            })
        },
        randerBoxColor (a, b, c) { // 时间格子上色
            return ['', 'color_reserved', 'color_my', 'color_passed'][this.randerMinuteType(getNum(a, b), c)]
        },
        randerBoxMeeting (a, b, c) { // 时间格子相关会议
            let t = this.randerMinuteType(getNum(a, b), c)
            return t === 1 || t === 2
        },
        randerBoxTip (room, hour, minute, k) { // 获取悬浮框内容
            const v = getNum(hour.num, minute)
            const box = room.meeting
            for (let i = 0; i < box.length; i++) {
                const begin = timeToNum(box[i].begin)
                const end = timeToNum(box[i].end)
                let minBox = []; // 该会议分钟块集合
                for (let n = begin + 1; n <= end; n++) {
                    minBox.push(n)
                }
                if (minBox.includes(v)) {
                    if (k === 1) {
                        return '该时间段已被' + box[i].userName + '占用'
                    } else {
                        return box[i].begin + '~' + box[i].end
                    }
                }
            }
        },
        randerMinuteType (n, box) { // 获取当前分钟块的样式
            const box1 = meetingBox(box, 1)
            const box2 = meetingBox(box, 2)
            if (box1.includes(n)) {
                return 1
            } else if (box2.includes(n)) {
                return 2
            } else {
                let days = howManyToToday(this.currentDate)
                if (days > 0) {
                    return 3
                } else if (days < 0) {
                    return 0
                } else {
                    if (n <= timeToNum(getNow()[0])) {
                        return 3
                    } else {
                        return 0
                    }
                }
            }
        },

        /* 会议详情 弹窗 */
        handleMeetingInfoModel (room, hour, minute) { // 会议信息弹框
            const type = this.randerMinuteType(getNum(hour.num, minute), room.meeting)
            if (type === 1 || type === 2) {
                const time = (hour.num + 7).toString() + ':' + minToStr(minute)
                console.log(time)
                this.$get('api/meeting/reserve_detail', {
                    date: this.currentDate,
                    time: time,
                    roomId: room.roomId
                }).then((res) => {
                    this.infoData = res.data.data.info
                })
                this.infoModal = true
            }
        },
        handleToCancel () {
            this.$post('api/meeting/reserve_cancel', {
                id: this.infoData.id
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.todayMeetingListAjax()
                    this.roomListAjax()
                    this.infoModal = false
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        },
        handleToRelease () {
            this.$post('api/meeting/reserve_release', {
                id: this.infoData.id,
                date: this.currentDate,
                time: getNow()[0]
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    })
                    this.todayMeetingListAjax()
                    this.roomListAjax()
                    this.infoModal = false
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    })
                }
            })
        },

        /* 以下为预约相关 */
        handleAppointModel (room, n) {
            this.$refs['formItem'].resetFields()
            if (n === 1) {
                this.infoModal = false
                this.formData = JSON.parse(JSON.stringify(this.infoData))
            } else {
                this.formData = {
                    id: 0,
                    roomId: room.roomId,
                    roomName: room.roomName,
                    time: getNow(),
                    begin: getNow()[0],
                    end: getNow()[1],
                    join: [this.userList[0].id],
                    host: null,
                    record: null,
                    mainContent: '',
                    content: '',
                    material: ''
                }
            }
            this.$get('api/meeting/uselist', {
                date: this.currentDate,
                id: this.formData.id,
                roomId: room.roomId
            }).then((res) => {
                this.availableTime = res.data.data.list
            }); // 可用时间
            this.checkConflictAjax()
            this.editTitle = '预约' + room.roomName
            this.editModal = true
        },
        handleConfirmTime () { // 选定时间
            this.formData.begin = this.formData.time[0]
            this.formData.end = this.formData.time[1]
            this.timeModal = false
            this.checkConflictAjax()
        },
        checkConflictAjax () { // 与会人员 以我为先
            this.$post('api/meeting/conflict_user', {
                date: this.currentDate,
                begin: this.formData.begin,
                end: this.formData.end,
                join: this.formData.join,
                id: this.formData.id
            }).then((res) => {
                this.conflictList = res.data.data.list
            })
        },
        checkInJoin () { // 联动判断
            if (!this.formData.join.includes(this.formData.host)) {
                this.formData.host = null
            }
            if (!this.formData.join.includes(this.formData.record)) {
                this.formData.record = null
            }
        },
        handleSubmitEditModal () { // 提交表单
            if (this.timeModal) {
                this.handleConfirmTime()
            } // 关闭时间弹框
            this.$refs['formItem'].validate((valid) => {
                if (valid) {
                    if (this.formData.begin === this.formData.end) {
                        this.$Message.info({
                            content: '会议结束时间需大于开始时间'
                        })
                        return
                    }
                    // const self = this
                    // self.loading = true
                    // setTimeout(function () { self.loading = false; }, 2000)
                    this.loading = true
                    setTimeout(() => { this.loading = false; }, 2000)
                    this.formData.date = this.currentDate
                    this.$post('api/meeting/reserve', this.formData).then((res) => {
                        if (res.data.data && res.data.data.res === 1) {
                            this.$Message.info({
                                content: '操作成功'
                            })
                            this.todayMeetingListAjax()
                            this.roomListAjax()
                            this.editModal = false
                        } else {
                            this.$Message.info({
                                content: res.data.msg || '操作失败'
                            })
                        }
                    })
                }
            })
        }
    },
    mounted () {
        this.init()
    }
}
</script>

<style scoped lang="less">
    .no_reset{
        .ivu-picker-confirm{
            button:first-child{display: none;}
        }
    }
    .left_section{ background-color: #f9f9f9; width: 270px; overflow:auto; position: absolute; top: 75px; left: 0; bottom: 15px; height: 400px; }
    .left_top{ height: 290px; }
    .left_main{ padding: 0 15px 10px 15px; }
    .no_meeting{ color: #3A3F54; font-size: 16px; margin-top: 50px }
    .my_meeting{ padding: 10px 0; border-top: 1px dashed #74A2FF; }
    .left_title{ color: #383D52; font-size: 16px; font-weight: 600; }
    .left_sub{ color: #999999; font-size: 14px; margin-top: 10px; }
    .left_content{ color: #333333; font-size: 14px; word-break: break-all; }
    .arrow_position{ position: absolute; right: 15px; top: 0; cursor: pointer; }
    .right_section{ padding-left: 15px; }
    .right_title{ font-size: 16px; font-weight: 600; line-height: 50px; background-color: #f9f9f9; padding: 0 5px 0 20px; }
    .intro_icon{
        font-size: 14px; float: right; margin-right: 15px;
        span{
            display: inline-block; width: 15px; height: 15px; vertical-align: middle; margin-top: -4px; margin-right: 3px;
        }
    }
    .right_main{ margin-top: 15px; background-color: #f9f9f9; padding: 0 20px; }
    .room_model{ padding-bottom: 30px; border-top: 1px dashed #dddddd; }
    .room_title{
        color: #383D52; font-size: 14px; line-height: 50px; font-weight: 600;
        span{
            float: right; font-size: 12px;
        }
    }
    .room_bar{ padding-right: 80px; }
    .reserve_button{ position: absolute; right: 0; top: 0; padding: 5px 15px }
    .rec{ position: relative; background-color: #e0d6f5; height: 30px; }
    .rec_sub{ height: 100%; }
    .rec_mark{ position: relative; left: -20px; top: 5px; }
    .color_passed{ background-color: #bcbcbc!important; }
    .color_reserved{ background-color: #FF8282!important;cursor: pointer; }
    .color_my{ background-color: #19be6b!important;cursor: pointer; }
    .info_modal{
        width: 70%; margin: 0 auto; font-size: 14px; line-height: 30px;
        img{
            vertical-align: middle; margin: -4px 12px 0 0;
        }
    }
    .form_20{
        width: 90%;margin: 0 auto;
        .ivu-form-item{
            margin-bottom: 20px!important;
        }
    }
    .time_mask{ position: absolute; left: 0; top: 0; width: 230px; height: 32px; cursor: text; z-index: 99; }
    .available_time{ position: absolute; right: 0; top: 36px; z-index: 99; background-color: #e0d6f5; }
</style>
