<template>
    <div class="blogCss">
        <div style="padding-left: 270px">
            <div class="left_section">
                <div class="left_top tc" style="position:relative;height: 300px;">
                    <DatePicker class="big_date" :value="currentDate" :open="true" size="large" placement="bottom" @on-change="dateGet"><div>ABC</div></DatePicker>
                </div>
                <div class="left_main">
                    <h2 style="color: #2d8cf0" v-if="myMeeting.length > 0">日程安排：</h2>
                    <div class="no_meeting tc" v-if="myMeeting.length === 0">
                        <div>本日暂无会议安排</div>
                    </div>
                    <div class="my_meeting" :class="index === 0 ? 'bn' : ''" v-for="(meeting, index) in myMeeting" :key="index">
                        <div class="left_title">
                            {{meeting.roomName}}（{{meeting.begin}} - {{meeting.end}}）
                            <span class="arrow_position downArrow" v-show="!meeting.show" @click="meeting.show = !meeting.show" style="margin-top: 7px"></span>
                            <span class="arrow_position upArrow" v-show="meeting.show" @click="meeting.show = !meeting.show"></span>
                        </div>
                        <div v-show="meeting.show">
                            <div class="left_sub">会议主题：</div>
                            <div class="left_content">{{meeting.mainContent}}</div>
                            <div class="left_sub">会议内容：</div>
                            <div class="left_content">{{meeting.content}}</div>
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
                    <div class="room_model" v-for="(room, index) in roomList" :key="index">
                        <div class="room_title">
                            {{room.roomName}}
                            <span>{{room.equipment}}，最多可容纳{{room.count}}人</span>
                        </div>
                        <div class="room_bar pr">
                            <Button type="primary" class="reserve_button" @click="toEdit(room, 0)" :disabled="editDisabled">预约</Button>
                            <Row :gutter="6">
                                <Col span="2" v-for="hour in hourList" :key="hour.num">
                                    <Row class="rec">
                                        <Col v-for="(minute, index) in minuteList" :key="index" @click.native="meetingInfo(room, hour, minute)"
                                             class="rec_sub" :class="colorBox[minuteType(getNum(hour.num, minute), room.meeting)]"
                                             style="background:red;height:10px;" span="2">
                                        </Col>
                                        <span class="rec_mark" v-if="hour.num !== 1">{{hour.name}}</span>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Spin size="large" fix v-if="spinShow"></Spin>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reserve-room',
    data () {
        return {
            datePicker: 0,
            today: '2020-01-05',
            currentDate: '',
            myMeeting: [],
            spinShow: false,
            roomList: [{roomName: '月野兔', equipment: '娜娜', count: 123, meeting: []}],
            hourList: [
                {num: 1, name: '08:00'},
                {num: 2, name: '09:00'},
                {num: 3, name: '10:00'},
                {num: 4, name: '11:00'},
                {num: 5, name: '12:00'},
                {num: 6, name: '13:00'},
                {num: 7, name: '14:00'},
                {num: 8, name: '15:00'},
                {num: 9, name: '16:00'},
                {num: 10, name: '17:00'},
                {num: 11, name: '18:00'},
                {num: 12, name: '19:00'}
            ],
            minuteList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            colorBox: ['', 'color_reserved', 'color_my'],
            infoModal: false,
            infoData: {
                roomName: '',
                status: 0,
                begin: '14:15',
                end: '15:25',
                userName: '佐仓绫音',
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
            editDisabled: false,
            editModal: false,
            editTitle: '',
            disTime: [0, 1, 2, 3, 4, 5, 6, 7, 20, 21, 22, 23],
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
        };
    },
    methods: {
        init () {
            this.currentDate = '2020-01-01'
            this.editDisabled = false
            this.getTodayMeeting();
            this.getRoomList();
            this.$nextTick(() => {
                this.$refs.clickBtn.click();
            });
        },
        dateGet (date) {
        },
        getTodayMeeting () {
        },
        getRoomList () {
        },
        minuteType (n, box) {
            const box1 = this.meetingBox(box, 1);
            const box2 = this.meetingBox(box, 2);
            if (box1.includes(n)) {
                return 1;
            } else if (box2.includes(n)) {
                return 2;
            } else {
                return 0;
            }
        }, // 获取当前分钟块的样式
        getNum (hour, minute) {
            return (hour - 1) * 12 + minute;
        }, // 当前分钟块的序数
        timeToNum (t) {
            return (parseInt(t.substr(0, 2)) - 8) * 12 + (parseInt(t.substr(3, 2)) / 5);
        }, // 将时间点转换为分钟块序数
        meetingBox (list, k) {
            let box = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].status === k) {
                    const begin = this.timeToNum(list[i].begin);
                    const end = this.timeToNum(list[i].end);
                    for (let n = begin + 1; n <= end; n++) {
                        box.push(n);
                    }
                }
            }
            return box;
        }, // 将会议时间转换为分钟块数组
        minToStr (min) {
            if (min === 1) {
                return '00';
            } else if (min === 2) {
                return '05';
            } else {
                return ((min - 1) * 5).toString();
            }
        },
        meetingInfo (room, hour, minute) {
            console.log(room, hour, minute)
            if (this.minuteType(this.getNum(hour.num, minute), room.meeting) !== 0) {
                const time = (hour.num + 7).toString() + ':' + this.minToStr(minute);
                console.log(time);
                this.$get('api/meeting/reserve_detail', {
                    date: this.currentDate,
                    time: time,
                    roomId: room.roomId
                }).then((res) => {
                    this.infoData = res.data.data.info;
                });
                this.infoModal = true;
            }
        }, // 会议信息弹框
        toCancel () {
            this.$post('api/meeting/reserve_cancel', {
                id: this.infoData.id
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    });
                    this.getTodayMeeting();
                    this.getRoomList();
                    this.infoModal = false;
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    });
                }
            });
        },
        toRelease () {
            this.$post('api/meeting/reserve_release', {
                id: this.infoData.id,
                date: this.currentDate,
                time: this.getNow()[0]
            }).then((res) => {
                if (res.data.data && res.data.data.res === 1) {
                    this.$Message.info({
                        content: '操作成功'
                    });
                    this.getTodayMeeting();
                    this.getRoomList();
                    this.infoModal = false;
                } else {
                    this.$Message.info({
                        content: res.data.msg || '操作失败'
                    });
                }
            });
        },
        toEdit (room, n) {
            this.$refs['formItem'].resetFields();
            if (n === 1) {
                this.infoModal = false;
                this.formData = JSON.parse(JSON.stringify(this.infoData));
            } else {
                this.formData = {
                    id: 0,
                    roomId: room.roomId,
                    roomName: room.roomName,
                    time: this.getNow(),
                    begin: this.getNow()[0],
                    end: this.getNow()[1],
                    join: [this.userList[0].id],
                    host: null,
                    record: null,
                    mainContent: '',
                    content: '',
                    material: ''
                };
            }
            this.checkConflict();
            this.editTitle = '预约' + room.roomName;
            this.editModal = true;
        },
        getNow () {
            const now = 10;
            let begin = '';
            let end = '';
            if (now < 8) {
                begin = '8:00';
                end = '9:00';
            } else {
                const min = 23;
                if (min === 0) {
                    begin = now + ':00';
                    end = (now + 1) + ':00';
                } else if (min === 1) {
                    begin = now + ':05';
                    end = (now + 1) + ':05';
                } else if (min === 12) {
                    begin = (now + 1) + ':00';
                    end = (now + 2) + ':00';
                } else {
                    begin = now + ':' + min * 5;
                    end = (now + 1) + ':' + min * 5;
                }
            }
            return [begin, end];
        },
        getTime (t) {
            this.formData.time = t;
        },
        confirmTime () {
            this.formData.begin = this.formData.time[0];
            this.formData.end = this.formData.time[1];
            this.timeModal = false;
            this.checkConflict();
        },
        checkConflict () {
        },
        getJoin (v) {
            this.joinList = v;
            this.checkInJoin();
        },
        checkJoin (show) {
            if (!show) {
                this.checkConflict();
            }
        },
        checkInJoin () {
            if (!this.formData.join.includes(this.formData.host)) {
                this.formData.host = null;
            }
            if (!this.formData.join.includes(this.formData.record)) {
                this.formData.record = null;
            }
        }, // 联动判断
        saveEdit () {
        }
    },
    mounted () {
        this.init();
    }
};
</script>
<style scoped lang="less">
    .left_section{
        background-color: #f9f9f9;
        width: 270px;
        overflow:auto;
        position: fixed;
        top: 75px;
        left: 215px;
        bottom: 15px;
    }
    .left_top{
        height: 290px;
    }
    .left_main{
        padding: 0 15px 10px 15px;
    }
    .no_meeting{
        color: #3A3F54;
        font-size: 16px;
        margin-top: 50px
    }
    .my_meeting{
        padding: 10px 0;
        border-top: 1px dashed #74A2FF;
    }
    .left_title{
        color: #383D52;
        font-size: 16px;
        font-weight: 600;
    }
    .left_sub{
        color: #999999;
        font-size: 14px;
        margin-top: 10px;
    }
    .left_content{
        color: #333333;
        font-size: 14px;
    }
    .arrow_position{
        right: 35px;
        cursor: pointer;
    }
    .right_section{
        padding-left: 15px;
    }
    .right_title{
        font-size: 16px;
        font-weight: 600;
        line-height: 50px;
        background-color: #f9f9f9;
        padding: 0 5px 0 20px;
    }
    .intro_icon{
        font-size: 14px;
        float: right;
        margin-right: 15px;
        span{
            display: inline-block;
            width: 15px;
            height: 15px;
            vertical-align: middle;
            margin-top: -4px;
            margin-right: 3px;
        }
    }
    .right_main{
        margin-top: 15px;
        background-color: #f9f9f9;
        padding: 0 20px;
    }
    .room_model{
        padding-bottom: 30px;
    }
    .room_title{
        color: #383D52;
        font-size: 14px;
        line-height: 50px;
        font-weight: 600;
        span{
            float: right;
            font-size: 12px;
        }
    }
    .room_bar{
        padding-right: 80px;
    }
    .reserve_button{
        position: absolute;
        right: 0;
        top: 0;
        padding: 5px 15px
    }
    .rec{
        position: relative;
        background-color: #e0d6f5;
        height: 30px;
    }
    .rec_sub{
        height: 100%;
        /*border-right: 1px solid #999*/
    }
    .rec_mark{
        position: relative;
        left: -20px;
        top: 5px;
    }
    .color_passed{
        background-color: #eeeeee!important;
    }
    .color_reserved{
        background-color: #FF8282!important;
        cursor: pointer;
    }
    .color_my{
        background-color: #19be6b!important;
        cursor: pointer;
    }
    .info_modal{
        width: 70%;
        margin: 0 auto;
        font-size: 14px;
        line-height: 30px;
        img{
            vertical-align: middle;
            margin: -4px 12px 0 0;
        }
    }
    .form_20{
        width: 90%;
        margin: 0 auto;
        .ivu-form-item{
            margin-bottom: 20px!important;
        }
    }
    .time_mask{
        position: absolute;
        left: 0;
        top: 0;
        width: 230px;
        height: 32px;
        cursor: text
    }
</style>
