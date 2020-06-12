// import axios from 'axios' // http请求库
// import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title': '广告维护-申请/编辑',
        'url': '/api/maintain/edit',
        'method': 'post',
        'params': {
            'type': 0, // 0添加1编辑
            'id': 34, // 即流程mId,编辑用
            'adId': 1,
            'wId': 13,
            'cusId': 34, // 客户id
            'projectType': 1, // 所属项目
            'oldUrl': 'xxx', // 原链接
            'newUrl': 'xxx', // 新链接
            'oldPrice': 'xxx', // 原单价
            'newPrice': 'xxx', // 新单价
            'oldPaymentType': 1, // 原收款方式
            'newPaymentType': 0, // 新收款方式
            'oldSettleType': 3, // 原结算周期
            'newSettleType': 7, // 新结算周期
            'oldAccount': 'xxx', // 原后台账号
            'newAccount': 'xxx', // 新后台账号
            'oldPassword': 'xxx', // 原后台密码
            'newPassword': 'xxx', // 新后台密码
            'adDesc': 'xxx', // 维护描述
            'approver': [{
                'node': 1, // 节点id
                'approverUserId': 1 // 审批人id
                'approverUserName': aaa // 审批人姓名
            }] // 审批人
            'correlation': [1,2] // 抄送人（数组）
        }
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '广告维护-通过',
        'url': '/api/maintain/pass',
        'method': 'post',
        'params': {
            'id': 1,
            'channel': '投放渠道',
            'opinion': '审核意见'
            'pwd': 'sdfsdf' // 签名密码
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '广告维护-驳回',
        'url': '/api/maintain/reject',
        'method': 'post',
        'params': {
            'id': 1,
            'opinion': '审核意见'
            'pwd': 'sdfsdf' // 签名密码
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '广告维护-转发',
        'url': '/api/maintain/replace',
        'method': 'post',
        'params': {
            'id': 1,
            'approver': 1 // 转发人id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '广告维护-详情',
        'url': '/api/maintain/detail',
        'method': 'get',
        'params': {
            'id': 1 // 流程id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'workflowNum': '流程单号',
                    'adNum': '广告编号',
                    'projectName': '所属项目',
                    'projectNumber': '立项编号',
                    'cusName': '客户名称',
                    'projectName': '所属商务',
                    'settleTypeStr': '结算周期',
                    'paymentTypeStr': '收款方式',
                    'chargingStr': '计费模式',
                    'chargingPrice': 12.00, // 计费单价
                    'adType': '广告类型',
                    'presentation': '展现形式',
                    'testDuration': 1, // 测试时长/天
                    'testMagnitude': 1, // 测试量级
                    'acccount': '后台账号',
                    'password': '后台密码',
                    'onlineDesc': '上线说明',
                    'channel': '投放渠道',
                    'adName': '广告名称',
                    'putTime': '投放时间',
                    'mark': '投放备注',
                    'endTimeStr': '下线日期',
                    'endDesc': '下线说明'
                    'oldUrl': '旧链接',
                    'newUrl': '新链接',
                    'oldPrice': 'xxx', // 原单价
                    'newPrice': 'xxx', // 新单价
                    'oldPaymentType': 1, // 原收款方式
                    'newPaymentType': 0, // 新收款方式
                    'oldSettleTypeName': '日结', // 原结算周期
                    'newSettleTypeName': '周结', // 新结算周期
                    'oldAccount': 'xxx', // 原后台账号
                    'newAccount': 'xxx', // 新后台账号
                    'oldPassword': 'xxx', // 原后台密码
                    'newPassword': 'xxx', // 新后台密码
                    'adDesc': '维护说明',
                    'maintain': '维护人',
                    'maintainTime': '维护时间',
                    'whChannel': '维护投放渠道',
                    'approver': [{
                        'node': 1, // 节点id
                        'approverUserId': 1 // 审批人id
                        'approverUserName': aaa // 审批人姓名
                        'approverInfo': aaa // 审批节点名,用来获取人员列表
                    }], // 审批人
                    'correlation': [1,2] // 抄送人（数组）
                    'adId': '广告id' // 用来编辑时获取cusId和projectType
                    'isCurrent': '是否是当前审批人'
                },
                'opretionLog': [{ // 审批记录
                    'approver': '操作员',
                    'department': '部门',
                    'opinion': '审批意见',
                    'status': '通过',
                    'createdTime': '2018-11-08 16: 52'
                    }]
                }
            }
        }
    */

    end: 'api' // 防呆设计
}
