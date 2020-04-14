'use strict';
import moment from 'moment' // 不要直接使用moment 墙裂建议在这里套一层

// =====================
// 日期格式化
// @param O {date} 日期
// @param T {string} 格式字符串
// =====================
export const dateFormat = (dataStr, pattern) => { // moment 写法
    pattern = pattern || 'YYYY-MM-DD' // 专门为项目服务的'YYYY-MM-DD'格式
    return moment(dataStr).format(pattern);
}

// =====================
// 某天到今天相差多少(天)
// =====================
// liuyp 2020年1月15日17:06:51
export const howManyToToday = (dateStr, toTodayDateStr) => {
    const t = moment(toTodayDateStr).format('YYYY-MM-DD')
    return moment(t).diff(moment(dateStr), 'days')
}

// =====================
// 计算其归属的计薪周期区间
// @param date {date} 根据日期
// @desc 获取今天归属哪个计薪周期 上个月26到这个月25 x 为今天月份 --- 八月
// @desc 如果今天日期大于等于26 x加一月 --- 不大于
// @desc x --- 八月计薪周期
// @desc [ x的上一月26, x月25 ]  --- 七月26到八月25
// =====================
// liuyp 2019年9月20日11:25:25
export const computeRange = (date) => { // 解释一下 moment对象和普通date对象不同
    date = moment(date || new Date()) // 所以参数不管是何种对象 都转为moment对象来处理
    let startDate = moment(date)
    let endDate = moment(date)
    if (date.date() >= 26) { endDate.add(1, 'months') } else { startDate.subtract(1, 'months') }
    return [
        moment(startDate).format('YYYY-MM-26'),
        moment(endDate).format('YYYY-MM-25')
    ]
}

// =====================
// 计算其归属的计薪周期区间
// @param yearNum {int} 根据年份月份
// @param mouthNum {int} 根据年份月份
// =====================
// liuyp 2019年9月20日11:25:25
export const computeRangeByMouth = (yearNum, mouthNum) => {
    const date = new Date(yearNum, mouthNum - 1, 1)
    return computeRange(date)
}
