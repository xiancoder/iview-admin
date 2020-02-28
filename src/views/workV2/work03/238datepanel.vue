<template>
    <div style="padding:30px">
        <Row>
            <Col span="12">
                <div class="canlendarPanel">
                    <div class="canlendar-header">
                        <p class="pre">
                            <span @click="changeDate('preYear')" class="prew-icon-double">
                                <icon class="icon" type="ios-arrow-back" />
                            </span>
                            <span @click="changeDate('preMonth')">
                                <icon class="icon" type="ios-arrow-back" />
                            </span>
                        </p>
                        <p class="currenDate">{{ `${year}年${month}月` }}</p>
                        <p class="next">
                            <span @click="changeDate('nextMonth')">
                                <icon class="icon" type="ios-arrow-forward" />
                            </span>
                            <span @click="changeDate('nextYear')" class="next-icon-double">
                                <icon class="icon" type="ios-arrow-forward" />
                            </span>
                        </p>
                    </div>
                    <div class="canlendar-main">
                        <ul class="canlendar-main-header">
                            <li v-for="(item, index) in week" :key="'foritem'+index">
                                {{ item }}
                            </li>
                        </ul>
                        <ul class="canlendar-main-main">
                            <li v-for="inx in weekDay" class="disabled">
                                {{ preMonthSize - weekDay + inx }}
                            </li>
                            <li
                                v-for="index in monthList[month - 1]"
                                @click="selectDate(year,month,index)"
                            >
                                <span
                                    :class="{
                                        currentDay: todayYear==year&&todayMonth==month&&todayDay==index,
                                        selectdDay: selectdYear==year&&selectdMonth==month&&selectdDay==index,
                                    }"
                                >
                                    {{ index }}</span
                                >
                            </li>
                            <li v-for="index in lastWeekDay" class="disabled">{{ index }}</li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Col span="12">
                <div style="width:500px;height:400px;" ref="clickBtn">
                    <DatePicker class="big_date" :value="currentDate" size="large" placement="bottom"
                        :open="true" :confirm="true">
                        <div>ABC</div>
                    </DatePicker>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            currentDate: '2020-01-20',
            year: 0,
            month: 0,
            todayYear: 0,
            todayMonth: 0,
            todayDay: 0,
            selectdYear: 0,
            selectdMonth: 0,
            selectdDay: 0,
            week: ['日', '一', '二', '三', '四', '五', '六'],
            monthList: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            weekDay: 1,
            lastWeekDay: 1
        }
    },
    computed: { // 计算属性
        preMonthSize () { // 上一个月有多少天
            return this.month - 1 === 0 ? 31 : this.monthList[this.month - 2]
        }
    },
    methods: {
        getCurrentDate () { // 获得今天的日期
            const date = new Date()
            this.year = date.getFullYear()
            this.month = date.getMonth() + 1
            this.todayYear = date.getFullYear()
            this.todayMonth = date.getMonth() + 1
            this.todayDay = date.getDate()
            this.selectdYear = date.getFullYear()
            this.selectdMonth = date.getMonth() + 1
            this.selectdDay = date.getDate()
        },
        getWeekDay (year, month, day) { // 根据年月日获得为星期几
            return new Date(`${year}/${month}/${day}`).getDay()
        },
        initDate () {
            if (
                (this.year % 4 === 0 && this.year % 100 !== 0) ||
                this.year % 400 === 0
            ) {
                this.monthList[1] = 29
            } else {
                this.monthList[1] = 28
            }
            // 获得指定年月的1号是星期几
            const firstDay = this.getWeekDay(this.year, this.month, 1)
            // 在1号前面填充多少个上个月的日期
            this.weekDay = firstDay === 7 ? 0 : firstDay
            // 获得最后一天是星期几，往后填充多少个
            const remineDay = this.getWeekDay(
                this.year,
                this.month,
                this.monthList[this.month - 1]
            )
            this.lastWeekDay = remineDay === 7 ? 6 : 6 - remineDay
        },
        changeDate (type) {
            switch (type) {
                case 'preYear':
                    this.year -= 1
                    break
                case 'preMonth':
                    // 当前月份为1月， 上一个月分为12月，年份减1
                    if (this.month === 1) {
                        this.month = 12
                        this.year -= 1
                    } else {
                        this.month -= 1
                    }
                    break
                case 'nextYear':
                    this.year += 1
                    break
                case 'nextMonth':
                    // 当前月份为12月， 下个月分为1月，年份加1
                    if (this.month === 12) {
                        this.month = 1
                        this.year += 1
                    } else {
                        this.month += 1
                    }
                    break
                default:
                    break
            }
            this.initDate()
        },
        selectDate (y, m, d) {
            this.selectdYear = y
            this.selectdMonth = m
            this.selectdDay = d
        }
    },
    mounted () {
    },
    created () {
        this.getCurrentDate()
        this.initDate()
    }
}
</script>
<style lang="less" scoped>
.canlendarPanel {
    height: 260px;
    width:260px;
    display: flex;
    flex-direction: column;
    .canlendar-header {
        line-height: 30px;
        background: #fff;
        border: 1px solid #e8eaec;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .currenDate {
            margin: 0 34px;
            font-size: 13px;
            line-height: 34px;
            height: 30px;
        }
        span {
            width: 20px;
            height: 30px;
            display: inline-block;
            cursor: pointer;
            color: #ccc;
            .icon {
                width: 12px;
                height: 12px;
            }
            &.prew-icon-double .icon:after {
                content: "\F115";
                margin-left: -8px;
            }
            &.next-icon-double .icon:after {
                content: "\F11F";
                margin-left: -8px;
            }
        }
    }
    .canlendar-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #fff;
        border: 1px solid #e8eaec;
        border-top: 0;
        .canlendar-main-header {
            display: flex;
            line-height: 30px;
            color: #333;
            margin: 8px 8px 0;
            li {
                flex: 1;
                list-style-type: none;
                text-align: center;
            }
        }
        ul.canlendar-main-main {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-bottom: 10px;
            font-size: 14px;
            margin: 0 8px 8px;
            li {
                position: relative;
                width: 14.28%;
                line-height: 25px;
                cursor: pointer;
                list-style-type: none;
                text-align: center;
            }
            .disabled {
                color: #ddd;
                cursor: default;
            }
            .currentDay:before {
                content: '';
                display: block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #2d8cf0;
                position: absolute;
                top: 1px;
                right: 1px;
            }
            .selectdDay {
                background: #2d8cf0;
                color: #fff;
                display: block;
                border-radius: 3px;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }
        }
    }
}
</style>
