import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title':'人事管理-考勤明细-值班数据导入',
        'url':'/api/hr/duty_upload',
        'method': 'post',
        'params':{
            'duty_type':1,//值班类型  1.公司值班  2.c++值班
            'file':file
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1// -1:没有满足条件的数据;0:保存失败;1:保存成功;2:部分成功
                count：12 //成功条数
                errorUrl:'' // res=2时，有失败部分文件下载地址
             }
        }
    */

    /* 'title':'人事管理-考勤明细-生成考勤',
        'url':'/api/hr/detail_create',
        'method': 'post',
        'params':{
            'begin':'2019-08-03',
            'end':'2019-08-04',
            'deptId':1,//部门id，全部传null
            'status':1,//状态，全部null、未生成0、已生成1、待核对2、已核对3
            'keyword':'sdfsd'//工号或姓名
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1// 1,成功 0 失败
             }
        }
    */

    /* 'title':'人事管理-考勤明细-核对考勤',
        'url':'/api/hr/detail_check',
        'method': 'post',
        'params':{
            'begin':'2019-07-26',//核对月份开始日期
            'end':'2019-08-25',//核对月份结束日期
            'userId':[1,4,14],//核对员工id，若为空数组则核对全部员工
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1// 1,成功 0 失败
             }
        }
    */

    /* 'title':'人事管理-考勤明细-编辑',
        'url':'/api/hr/detail_edit',
        'method': 'post',
        'params':{
            'id': 24, // 明细id
            'real': 1, // 实出勤
            'notWork': 1, // 未出勤
            'absenteeism': 1, // 旷工
            'tardiness': 1, // 迟到、早退次数
            'leaveEarly': 1, // 早退时长
            'overTimeSubsidy': 25, // 加班餐补
            'trafficSubsidy': 234.35, // 行车补助
            'cardDeduct': 20, // 工牌扣除
            'mark': 'xxxxxxxxx', // 备注
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1// 1,成功 0 失败
            }
        }
    */

    /* 'title':'人事管理-考勤明细-值班列表',
        'url':'/api/hr/duty_list',
        'method': 'get',
        'params':{
            'begin':'2019-05-21',
            'end':'2019-05-22',
            'keyword':'东阿',
            'dutyType':1,//值班类型 0.全部 1.公司值班  2.c++值班
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'userName': 刘涛, //姓名
                    'department': '商务部', //部门
                    'dutyDateStr':'2019-05-21',//日期
                    'week':'星期二',//星期
                    'duty':1,//值班类型 1.公司值班  2.c++值班
                    'remark':'值班',//备注
                }],
                'rowcount':300,
             }
        }
    */

    /* 'title':'人事管理-考勤明细-加班列表',
        'url':'/api/hr/overtime_list',
        'method': 'get',
        'params':{
            'begin':'2019-05-21',
            'end':'2019-05-22',
            'keyword':'东阿',
            'deptId':1,
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'userName': '刘涛',
                    'jobNum': '234423423',
                    'department': '商务部',
                    'date':'2019-05-21',
                    'intervalTime': '9:12-13:54',
                    'time': 3,
                    'reason': 'xxxxxx',
                    'createUser': 'AAA',
                    'createdTimeStr': '2019-05-23'
                }],
                'rowcount':300,
             }
        }
    */

    /* 'title':'人事管理-考勤明细-未打卡列表',
        'url':'/api/hr/no_check_list',
        'method': 'get',
        'params':{
            'begin':'2019-05-21',
            'end':'2019-05-22',
            'keyword':'东阿',
            'deptId':1,
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'userName': '刘涛',
                    'jobNum': '234423423',
                    'department': '商务部',
                    'clockTime':'2019-05-21',
                    'reason': 'xxxxxx',
                    'createdTimeStr': '2019-05-23'
                }],
                'rowcount':300,
             }
        }
    */

    /* 'title':'人事管理-考勤明细-出差列表',
        'url':'/api/hr/bus_trip_list',
        'method': 'get',
        'params':{
            'begin':'2019-05-21',
            'end':'2019-05-22',
            'keyword':'东阿',
            'deptId':1,
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[ {
                    'userName': '刘涛',
                    'jobNum': '234423423',
                    'department': '商务部',
                    'clockTime':'2019-05-21',
                    'reason': 'xxxxxx',
                    'createdTimeStr': '2019-05-23'
                } ],
                'rowcount':300,
             }
           }
        }
    */

    /* 'title':'人事管理-考勤明细-外出列表',
        'url':'/api/hr/outwork_list',
        'method': 'get',
        'params':{
            'begin':'2019-05-21',
            'end':'2019-05-22',
            'keyword':'东阿',
            'deptId':3,//部门id
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'userName': '刘涛', //申请人
                    'jobNum': '111', //工号
                    'department': '商务部',//部门
                    'outTime': ,//外出时间
                    'back': '是',//是否返回
                    'backTime': ,//返回时间
                    'reson': ,//外出原因
                    'place': ,//外出地点
                    'createdTimeStr': ,//提交时间
                }],
                'rowcount':300,
             }
        }
    */

    /* 'title':'人事管理-考勤明细-请假列表',
        'url':'/api/hr/vacation_list',
        'method': 'get',
        'params':{
            'begin':'2019-05-21',
            'end':'2019-05-22',
            'keyword':'东阿',
            'deptId':3,//部门id
            'type': 2,//请假类型
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'begin': '2019-06-14 16:42'
                    'createdTimeStr': '2019-06-14 16:42'
                    'department': '项目组'
                    'end': '2019-07-14 17:42'
                    'img': '/file/hrworkflow/2019-06-14/file/3019_8.png'
                    'isCheck': 1 //是否计入考勤，1是0否
                    'jobNum': ''
                    'reason': null
                    'time': 1
                    'userName': '测试账号1'
                    'vacationType': '哺乳假'
                }],
                'rowcount':300,
             }
           }
        }
    */

    /* 'title':'人事管理-考勤明细-调休列表',
        'url':'/api/hr/remain_list',
        'method': 'get',
        'params':{
            'month':'2019-08',//月份
            'dept':1,//部门id
            'keyword':'sdfsd'//工号或姓名
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'id':1,
                    'userName':'duan',//姓名
                    'jobNum':'1000001',//工号
                    'dayoff':'33.5',//剩余调休时长（小时）
                    'willTurn':'33.5',//即将转换的调休时长（小时）
                    'remainTurn':'33.5',//剩余年假时长（小时）
                    'remainAnnual':'33.5',//剩余转换年假时长（小时）
                }],
                'rowcount':300,
             }
           }
        }
    */

    /* 'title':'人事管理-考勤明细-哺乳假列表',
        'url':'/api/hr/breastfeed_list',
        'method': 'get',
        'params':{
            'begin':'2019-05-21',
            'end':'2019-05-22',
            'keyword':'东阿',
            'deptId':3,//部门id
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'begin': '2019-06-14'
                    'end': '2019-07-14'
                    'beginTime': '9:00'
                    'endTime': '10:00'
                    'createdTimeStr': '2019-06-14 16:42'
                    'department': '项目组'
                    'img': '/file/hrworkflow/2019-06-14/file/3019_8.png'
                    'isCheck': 1 //是否计入考勤，1是0否
                    'jobNum': ''
                    'userName': '测试账号1'
                }],
                'rowcount':300,
             }
           }
        }
    */

    /* 'title':'人事管理-考勤明细-剩余假期列表',
        'url':'/api/hr/remain_list',
        'method': 'get',
        'params':{
            'month':'2019-08',//月份
            'dept':1,//部门id
            'keyword':'sdfsd'//工号或姓名
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'id':1,
                    'userName':'duan',//姓名
                    'jobNum':'1000001',//工号
                    'dayoff':'33.5',//剩余调休时长（小时）
                    'willTurn':'33.5',//即将转换的调休时长（小时）
                    'remainTurn':'33.5',//剩余年假时长（小时）
                    'remainAnnual':'33.5',//剩余转换年假时长（小时）
                }],
                'rowcount':300,
           }
        }
    */

    /* 'title':'人事管理-考勤明细-明细列表',
        'url':'/api/hr/detail_list',
        'method': 'get',
        'params':{
            'begin':'2019-08-03',
            'end':'2019-08-04',
            'deptId':1,//部门id
            'status':1,//状态，全部null、未生成0、已生成1、待核对2、已核对3
            'keyword':'sdfsd'//工号或姓名
            'pageIndex':1,
            'pageSize':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'userName': 'xxx', //姓名
                    'dateStr': 'xxx', //日期
                    'deptName': 'xxx', //部门
                    'workNum': 'xxx', //工号
                    'checkIn': 'xxx', //上班打卡
                    'checkOut': 'xxx', //下班打卡
                    'ought': 1, //应出勤
                    'real': 1, //实出勤
                    'not': 1, //未出勤
                    'absenteeism': 1, //旷工（天）
                    'leaveDay': 1, //请假（天）
                    'tardiness': 1, //迟到、早退（次）
                    'late': 1, //迟到（分钟）
                    'leaveEarly': 1, //早退（分钟）
                    'dayoff': 1, //调休（小时）
                    'annualTurn': 1, //转换年假（小时）
                    'annual': 1, //年假（小时）
                    'personalLeave': 1, //事假（小时）
                    'marriageLeave': 1, //婚假（天）
                    'sadLeave': 1, //丧假（天）
                    'maternityLeave': 1, //产假（天）
                    'paternityLeave': 1, //陪产假（天）
                    'noCheck': 1, //未打卡（次）
                    'goOut': 1, //外出
                    'travel': 1, //出差（天）
                    'overTime': 1, //加班（小时）
                    'duty': 1, //值班（小时）
                    'overTimeSubsidy': 1, //加班餐补
                    'trafficSubsidy': 1, //行车补助
                    'cardDeduct': 1, //工牌扣除
                    'mark': 'xxxx', //备注
                    'status': 1, //状态 0：未生成；1：已生成；2：待核对；3：已核对
                }],
                'rowcount':300,
             }
           }
        }
    */

    /* 'title':'人事管理-考勤明细-汇总列表',
        'url':'/api/hr/total_list',
        'method': 'get',
        'params':{
            'begin':'2019-07-26',
            'end':'2019-08-25', // 展示月份传日期
            'deptId':1,//部门id，全部传null
            'keyword':'sdfsd'//工号或姓名
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'userName': 'xxx', //姓名
                    'deptName': 'xxx', //部门
                    'workNum': 'xxx', //工号
                    'checkIn': 'xxx', //上班打卡
                    'checkOut': 'xxx', //下班打卡
                    'ought': 1, //应出勤
                    'real': 1, //实出勤
                    'not': 1, //未出勤
                    'absenteeism': 1, //旷工（天）
                    'leaveDay': 1, //请假（天）
                    'tardiness': 1, //迟到、早退（次）
                    'late': 1, //迟到（分钟）
                    'leaveEarly': 1, //早退（分钟）
                    'dayoff': 1, //调休（小时）
                    'annualTurn': 1, //转换年假（小时）
                    'annual': 1, //年假（小时）
                    'personalLeave': 1, //事假（小时）
                    'marriageLeave': 1, //婚假（天）
                    'sadLeave': 1, //丧假（天）
                    'maternityLeave': 1, //产假（天）
                    'paternityLeave': 1, //陪产假（天）
                    'noCheck': 1, //未打卡（次）
                    'goOut': 1, //外出
                    'travel': 1, //出差（天）
                    'overTime': 1, //加班（小时）
                    'duty': 1, //值班（小时）
                    'workFull': 1, //全勤奖
                    'birthday': 1, //生日奖
                    'overTimeSubsidy': 1, //加班餐补
                    'trafficSubsidy': 1, //行车补助
                    'total': 1, //合计
                    'cardDeduct': 1, //工牌扣除
                    'mark': 'xxxx', //备注
                }],
                'rowcount':300,
             }
           }
        }
    */

    /* 'title':'人事管理-考勤明细-最新的关于剩余假期的已核对考勤月份',
        'url':'/api/hr/remain_newMonth',
        'method': 'get',
        'params':{ },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                month:'2019-10',//最新的已核对的考勤月份
             }
         }
    */

    /* 'title':'人事管理-考勤明细-未打卡列表导出',
        'url':'/api/hr/noCheck_export',
        'method': 'get',
        'params':{
            'begin':'2019-10-09',
            'end':'2019-10-10'
            'deptId':1,//部门id
            'keyword':'sdfsd'//工号或姓名
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1
            }
        }
    */

    /* 'title':'人事管理-考勤明细-外出列表导出',
        'url':'/api/hr/outwork_export',
        'method': 'get',
        'params':{
            'begin':'2019-10-09',
            'end':'2019-10-10'
            'deptId':1,//部门id
            'keyword':'sdfsd'//工号或姓名
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1
            }
        }
    */

    /* 'title':'人事管理-考勤明细-出差列表导出',
        'url':'/api/hr/busTrip_export',
        'method': 'get',
        'params':{
            'begin':'2019-10-09',
            'end':'2019-10-10'
            'deptId':1,//部门id
            'keyword':'sdfsd'//工号或姓名
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1
            }
        }
    */

    /* 'title':'人事管理-考勤明细-值班数据导出',
        'url':'/api/hr/duty_export',
        'method': 'get',
        'params':{
            'begin':'2019-05-21',
            'end':'2019-05-22',
            'keyword':'东阿',
            'dutyType':1,//值班类型  1.公司值班  2.c++值班
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1// 1,成功 0 失败
            }
        }
    */

    /* 'title':'人事管理-考勤明细-剩余假期导出',
        'url':'/api/hr/remain_export',
        'method': 'get',
        'params':{
            'month':'2019-10',//月份
            'dept':1,//部门id
            'keyword':'sdfsd'//工号或姓名
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1
            }
        }
    */

    /* 'title':'人事管理-考勤明细-获取请假类型下拉框',
        'url':'/api/hr/getLeavetype',
        'method': 'get',
        'params':{},
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'name': '调休'
                    'value': 1
                }],
            }
        }
    */

    end: 'api' // 防呆设计
}
