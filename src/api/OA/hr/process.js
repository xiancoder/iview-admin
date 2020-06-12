// import axios from 'axios' // http请求库
// import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title':'人事管理-审批流程-添加/编辑',
        'url':'/api/hr/process_add',
        'method': 'post',
        'params':{
            'id':'1', // 审批 id  0 为添加
            'wId':1, // 流程类型 类型id 7 请假 8 加班 9 未打卡 10 值班 11 外出 12 出差
            'process':'oa请假流程', // 流程名称/描述
            'deptId':11, // 部门ID
            'postId':[01,02], // 用于职位
            'positionList':[ // 依次审批职位
                {
                    'day':11, // 天数类型 id
                    'ApprovalPostId':[[5,6],[9]] // 审批职位id数组
                }
            ],
            'copytoId':55 // 抄送配置 id
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1,//1 成功, 0 失败
             }
        }
    */

    /* 'title':'人事管理-审批流程-流程配置列表（审批人配置列表）',
        'url':'/api/hr/process_list',
        'method': 'get',
        'params':{
            'processName':'流程名称',
            'type':1, // 流程总类型 请假类型通过接口获取
            'dept':01, // 选择部门 部门ID
            'position':'02', // 选择职位 职位ID
            'page_index':1,
            'page_size':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                list:[{
                    'describe':'oa请假流程', // 流程名称/描述
                    'id':'02', // 流程id
                    'deptName':'oa技术部', // 用于部门
                    'type':'请假', // 流程类型
                    'postName':'oa后端', // 用于职位
                    'state':'1' // 状态信息  1 正常 0 异常
                }]
                'rowcount':0
             }
        }
    */

    /* 'title':'人事管理-审批流程-审批流程详情',
        'url':'/api/hr/process_details',
        'method': 'get',
        'params':{
            'wId':'01' // 流程配置ID
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'process':'oa请假流程', // 流程名称/描述
                'deptId':11, // 部门ID
                'deptName':'oa技术部', // 部门 name
                'postId':[01,02], // 用于职位
                'approvalList':[{
                    'dayId':'1', // 天数 id
                    'day':'1天以内', // 天数 title
                    'nodes':[{
                        name:'技术部CTO,经理', // 审批职位名，字符串拼接
                        id:[5,6,9], // 职位id数组
                        state:1 // 是否为空职位 0 职位空缺 大于0 职位有人。 （实际上是职位人数）
                    }]
                }]
                'copytoId':55 // 抄送配置 id
             }
        }
    */

    /* 'title':'人事管理-审批流程-审批人条数返回',
        'url':'/api/hr/approval_list',
        'method': 'get',
        'params':{ },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'day':'1天以内', // 天数
                    'id':'1' // 对应天数的ID 添加编辑需要传
                }]
            }
        }
    */

    /* 'title':'人事管理-审批流程-删除审批人配置',
        'url':'/api/hr/process_delete',
        'method': 'post',
        'params':{
            'wId':01  // 流程配置ID
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1,//1 成功, 0 失败
             }
        }
    */

    /* 'title':'人事管理-审批流程-获取审批流程类型下拉框',
        'url':'/api/hr/process_type',
        'method': 'get',
        'params':{ },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                list:[{
                    'typeName':'请假', // 类型名称
                    'typeId':'7' // 类型id 7 请假 8 加班 9 未打卡 10 值班 11 外出 12 出差
                }]
             }
        }
    */

    end: 'api' // 防呆设计
}
