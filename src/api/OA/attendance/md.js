import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title': '我的考勤-考勤列表',
        'url': '/api/attendance/attendance_list',
        'method': 'get',
        'params': {
            'begin': '2019-10-10',
            'end: '2019-10-11',
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'userName': 'xxx', // 姓名
                    'dateStr': 'xxx', // 日期
                    'deptName': 'xxx', // 部门
                    'workNum': 'xxx', // 工号
                    'checkIn': 'xxx', // 上班打卡
                    'checkOut': 'xxx', // 下班打卡
                    'ought': 1, // 应出勤
                    'real': 1, // 实出勤
                    'not': 1, // 未出勤
                    'absenteeism': 1, // 旷工（天）
                    'leaveDay': 1, // 请假（天）
                    'tardiness': 1, // 迟到、早退（次）
                    'late': 1, // 迟到（分钟）
                    'leaveEarly': 1, // 早退（分钟）
                    'dayoff': 1, // 调休（小时）
                    'annualTurn': 1, // 转换年假（小时）
                    'annual': 1, // 年假（小时）
                    'personalLeave': 1, // 事假（小时）
                    'marriageLeave': 1, // 婚假（天）
                    'sadLeave': 1, // 丧假（天）
                    'maternityLeave': 1, // 产假（天）
                    'paternityLeave': 1, // 陪产假（天）
                    'noCheck': 1, // 未打卡（次）
                    'goOut': 1, // 外出
                    'travel': 1, // 出差（天）
                    'overTime': 1, // 加班（小时）
                    'duty': 1, // 值班（小时）
                    'overTimeSubsidy': 1, // 加班餐补
                    'trafficSubsidy': 1, // 行车补助
                    'cardDeduct': 1, // 工牌扣除
                    'mark': 'xxxx', // 备注
                    'status': 1, // 状态 0：未生成；1：已生成；2：待核对；3：已核对
                }]
            }
        }
    */

    /* 'title': '我的考勤-确认考勤',
        'url': '/api/attendance/confirm',
        'method': 'post',
        'params': {
            'begin': '2018-10-26',
            'end': : '2018-11-25'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
            }
        }
    */
    confirm ({ date }) {
        return new Promise((resolve, reject) => {
            // 请注意 必填校验放外面
            const begin = date[0]
            const end = date[1]
            axios({
                method: 'POST',
                url: '/api/attendance/confirm',
                data: {
                    begin,
                    end
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve(res.data.res)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title': '能否查看值班表',
        'url': '/api/attendance/myduty_role',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': true/false
        }
    */

    /* 'title': '值班列表',
        'url': '/api/attendance/duty_list',
        'method': 'get',
        'params': {
            'begin': '2019-05-21',
            'end': '2019-05-22',
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [
                    {
                        'userName': 刘涛, // 姓名
                        'department': '商务部', // 部门
                        'dutyDateStr': '2019-05-21', // 日期
                        'week': '星期二', // 星期
                        'duty': 1, // 值班类型 1.公司值班 2.c++值班
                        'remark': '值班', // 备注
                    }
                ]
            }
        }
    */

    end: 'api' // 防呆设计
}
