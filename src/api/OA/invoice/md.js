
/* 'title': '财务领回对账单',
        'url': '/api/invoice/receive',
        'method': 'post',
        'params': {
            id: 2, // 发票id
            receiveTime: '2019-10-10', // 领回日期
            receiveMark: '福建省咖啡机', // 备注
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '对账单详情',
        'url': '/api/invoice/receive_info',
        'method': 'post',
        'params': {
                id: 2, // 发票id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                info: {
                    receiveTime: '2019-10-10T00: 00: 00',
                    receiveTimeStr: '2019-10-10', // 领回日期
                    receiveMark: '福建省咖啡机', // 备注
                }
            }
        }
    */

/* 'title': '发票申请申请/编辑',
        'url': '/api/invoice/save',
        'method': 'get',
        'params': {
            'id': 1 // 0添加
            'isBack': 1, // 1草稿
            'wId': 1, // 流程id
            'projectType': 1,
            'companyId': 1, // 开票公司
            'cusId': 1, // 客户id
            'contractId': 1, // 合同id
            'invoiceType': 1, // 发票类型(1：普通发票；2：专用发票)
            'money': 10.00, // 开票金额
            'capMoney': '拾圆', // 开票金额大写
            'voucher': ['sssss'], // 对账凭证
            'invoiceBegin': '2019-04-10', // 款项结算周期起始
            'invoiceEnd': '2019-04-10', // 款项结算周期结束
            'enclosure': ['附件路径'],
            'desc': '开票说明'
            'approver': [{
                'node': 1, // 节点id
                'approverUserId': 1 // 审批人id
                'approverUserName': aaa // 审批人姓名
            }] // 审批人
            'correlation': [1,2] // 抄送人（数组）
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '发票详情',
        'url': '/api/invoice/detail',
        'method': 'get',
        'params': {
            'id': 1 // 流程id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id': 1 // 发票id
                    'projectType': 1,
                    'projectTypeName': '项目组',
                    'isCurrent': true, // 登录用户是否当前审批人
                    'isCreate': true, // 登录用户是否开票人
                    'companyId: 1, // 开票公司id
                    'invoiceCompanyName: '开票公司名称', // 开票公司
                    'cusId': 1, // 客户id
                    'customerName': '客户名称', // 客户id
                    'customerType': '广告主', // 客户类型
                    'contractId': 1, // 合同
                    'contractName': '合同名称'
                    'invoiceType': 1, // 发票类型(1：普通发票；2：专用发票)
                    'money': 10.00, // 开票金额
                    'capMoney': '拾圆',
                    'voucher': ['sssss'], // 对账凭证
                    'invoiceBegin': '2019-04-10', // 款项结算周期起始
                    'invoiceEnd': '2019-04-10', // 款项结算周期结束
                    'enclosure': ['附件路径'],
                    'desc': '开票说明',
                    'approver': [{
                        'node': 1, // 节点id
                        'approverUserId': 1 // 审批人id
                        'approverUserName': aaa // 审批人姓名
                        'approverInfo': aaa // 审批节点名,用来获取人员列表
                    }], // 审批人
                    'correlation': [1,2] // 抄送人（数组）
                    'createdTime': '2018-12-20 12: 30: 10', // 申请时间
                    'customerType': '广告主', // 客户类型
                    'contractNum': 'ht20190410', // 所属合同编号
                    'createUser': '申请人',
                    'department': [ // 申请部门
                        '项目组-技术部-平台事业部-OA组',
                        '项目组-市场部-营销策划-新媒体运营组'
                    ],
                    'post': '前端开发', // 申请人职位
                    'lastMonth': 100.00, // 上月留底
                    'thisMonth': 100.00, // 本月预计认证可抵扣
                    'taxes': 100.00, // 税金
                    'opretionLog': [{ // 审批记录
                        'approver': '操作员',
                        'department': '部门',
                        'opinion': '审批意见',
                        'status': '通过',
                        'image': [
                            'file': '/file/contractfile/2019-03-21/file/9952_2.docx'
                        ],
                        'createdTime': '2018-11-08 16: 52'
                    }]
                }
            }
        }
    */

/* 'title': '根据客户id获取反显字段接口',
        'url': '/api/invoice/cusinfo',
        'method': 'get',
        'params': {
            'id': 1 // 客户id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'customerType': '广告主' // 客户类型
                    'invoiceType': 1, // 发票类型(1：普通发票；2：专用发票)
                }
            }
        }
    */

/* 'title': '根据客户获取合同搜索下拉框',
        'url': '/api/invoice/contractlist',
        'method': 'get',
        'params': {
            'id': 1 // 客户id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 合同id
                    'name': '合同编号'
                }]
            }
        }
    */

/* 'title': '发票列表财务',
        'url': '/api/invoice/financelist',
        'method': 'get',
        'params': {
            'begin': '2019-04-10',
            'end': '2019-04-10',
            'projectType': 1,
            'status': 1, // 开票状态 0未开 1开
            'invoiceType': 1, // 发票类型(1：普通发票；2：专用发票)
            'keyword'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'createdTime': '2019-04-10', // 申请日期
                    'name': '宁静致远', // 开票公司
                    'busName': '客户名称',
                    'money': 10.00, // 开票金额
                    'userName': '申请人',
                    'status': 1, // 开票状态
                    'desc': '开票说明'
                }],
                'rowcount': 22
            }
        }
    */

/* 'title': '发票列表商务/运营',
        'url': '/api/invoice/financelist',
        'method': 'get',
        'params': {
            'begin': '2019-04-10',
            'end': '2019-04-10',
            'status': 1, // 开票状态 0未开 1开
            'invoiceType': 1, // 发票类型(1：普通发票；2：专用发票)
            'keyword'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'createdTime': '2019-04-10', // 申请日期
                    'name': '宁静致远', // 开票主体
                    'busName': '客户名称',
                    'money': 10.00, // 开票金额
                    'userName': '申请人',
                    'status': 1, // 开票状态
                    'desc': '开票说明'
                }],
                'rowcount': 22
            }
        }
    */

/* 'title': '开票',
        'url': '/api/invoice/set',
        'method': 'post',
        'params': {
            'id': 1
            'invoiceNum': '321321321', // 发票号码
            'money': 12.00, // 开票金额
            'capMoney': 12.00, // 大写金额
            'invoiceDate': '2019-04-10', // 开票日期
            'mark': '备注'
        }
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '发票申请单',
        'url': '/api/invoice/get',
        'method': 'get',
        'params': {
            'id': 1
        }
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'invoiceCompany': '宁静致远', // 开票主体
                    'flowNum': 'LC20190410', // 流程单号
                    'createUser': '申请人',
                    'invoiceType': 1, // 发票类型(1：普通发票；2：专用发票)
                    'contractNum': 'ht20190410' // 依据合同
                    'money': 10.00, // 申请金额
                    'capMoney': '拾圆',
                    'customer': '公司全称',
                    'taxpayer': '纳税人识别号',
                    'busAddress': '地址',
                    'busTel': '123465789', // 电话
                    'openBank': '开户行',
                    'bankCard': '123456789', // 银行卡号
                    'leadersign' // 分管领导确认（签名）
                    'operate' // 运营确认（签名）
                    'lastMonth': 100.00, // 上月留底
                    'lastMonth': 100.00, // 本月预计认证可抵扣
                    'taxes': 100.00, // 税金
                    'count': 1, // 发票张数
                    'financesign': 'sdf', // 开票人确认（签名）
                    'opinion' // 审核意见
                    'mastersign' // 公司领导（签名）
                }
            }
        }
    */

/* 'title': '发票通过申请',
        'url': '/api/invoice/pass_invoice',
        'method': 'post',
        'params': {
            'id': 1,
            'type': 1, // 0普通通过 1 开票人通过
            'opinion': '审核意见'
            'file': file
            'pwd': 'sdfsdf' // 签名密码
            'lastMonth': 12 // 上月留底
            'thisMonth': 12 // 本月预计认证可抵扣
            'taxes': 12 // 税金
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '发票审批驳回',
        'url': '/api/invoice/reject_invoice',
        'method': 'post',
        'params': {
            'id': 1,
            'opinion': '审核意见'
            'file': file
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

/* 'title': '发票审批转发',
        'url': '/api/invoice/replace_invoice',
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
