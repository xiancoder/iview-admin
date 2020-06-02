
/* 'title': '财务管理-款项认领-我的',
        'url': '/api/finance/claim_list',
        'method': 'get',
        'params': {
            'type': 1, // 日期搜索类型 1 上传时间 2 认领时间 3 到账时间
            'begin': '2018-11-28' // 开始日期
            'end': '2018-11-28' // 开始日期
            'status': 1 // 认领状态 0未认领,1部分认领,2已认领
            'keyword' // 付款人关键字
            'amount': 12, // 收款金额
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'projectId': 1 // 所属项目id
                    'arrivalDate': '2019-02-20' // 到账日期
                    'paymentUser': '张三' // 付款人
                    'amount': 12.00, // 收款金额
                    'remittanceAccount': '12121212121212', // 付款账户
                    'receivablesAccount': '12121212121212', // 收款款账户
                    'uploadDate': '2019-02-20', // 上传日期
                    'status': 1, // 认领状态
                    'pendingPaymentMoney': 12.0, // 待领款金额
                    'buttonclaim': 1 // 认领按钮 1正常 0置灰
                }]
            }
        }
    */

/* 'title': '财务管理-款项认领-下属',
        'url': '/api/finance/claim_sub_list',
        'method': 'get',
        'params': {
            'type': 1, // 日期搜索类型 1 上传时间 2 认领时间 3 到账时间
            'begin': '2018-11-28' // 开始日期
            'end': '2018-11-28' // 开始日期
            'status': 1 // 认领状态 0未认领,1部分认领,2已认领
            'keyword' // 付款人关键字
            'amount': 12, // 收款金额
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'projectId': 1 // 所属项目id
                    'arrivalDate': '2019-02-20' // 到账日期
                    'paymentUser': '张三' // 付款人
                    'amount': 12.00, // 收款金额
                    'remittanceAccount': '12121212121212', // 付款账户
                    'receivablesAccount': '12121212121212', // 收款款账户
                    'uploadDate': '2019-02-20', // 上传日期
                    'status': 1, // 认领状态
                    'pendingPaymentMoney': 12.0, // 待领款金额
                    'buttonclaim': 1 // 认领按钮 1正常 0置灰
                }]
            }
        }
    */

/* 'title': '财务管理-财务-列表',
        'url': '/api/finance/claim_uplist',
        'method': 'get',
        'params': {
            'type': 1, // 日期搜索类型 1 上传时间 2 认领时间 3 到账时间
            'begin': '2018-11-28' // 开始日期
            'end': '2018-11-28' // 开始日期
            'status': 1 // 认领状态
            'keyword' // 付款人关键字
            'amount': 12, // 收款金额
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'arrivalDate': '2019-02-20' // 到账日期
                    'paymentUser': '张三' // 付款人
                    'amount': 12.00, // 收款金额
                    'remittanceAccount': '12121212121212', // 付款账户
                    'receivablesAccount': '12121212121212', // 收款款账户
                    'uploadDate': '2019-02-20', // 上传日期
                    'status': 1, // 认领状态
                    'pendingPaymentMoney': 12.0, // 待领款金额
                    'buttondelete': 1 // 删除按钮 1正常 0置灰
                }]
            }
        }
    */

/* 'title': '财务管理-财务-认领小列表',
        'url': '/api/finance/claim_info_list',
        'method': 'get',
        'params': {
            'id': 1,
            'type': 1, // 日期搜索类型 1 上传时间 2 认领时间 3 到账时间
            'begin': '2018-11-28' // 开始日期
            'end': '2018-11-28' // 开始日期
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id' // 认领id
                    'buttongoback': 1 // 撤回按钮 1正常 0置灰
                    'claimUserName': '张三', // 认领人
                    'claimMoney': 12.00, // 认领金额
                    'claimDate': '2019-02-20 12: 00', // 认领时间
                }]
            }
        }
    */

/* 'title': '财务管理-财务-详情',
        'url': '/api/finance/claim_detail',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id', // id
                    'project': '项目组', // 所属项目
                    'arrivalDate': '2019-02-20', // 到账日期
                    'uploadDate': '2019-02-20', // 上传日期
                    'amount': 12.0, // 收款金额
                    'paymentUser': '付款人',
                    'remittanceAccount': '付款账户',
                    'receivablesUser': '收款人',
                    'receivablesAccount': '收款账户',
                    'remark': '摘要或用途',
                    'status': 1, // 认领状态
                    'claimInfo': [{
                        'isRegression': 1 // 是否回退 1回退
                        'project': '项目组', // 所属项目
                        'claimUser': '张三', // 认领人
                        'customer': '客户名称'
                        'claimDate': '2019-02-20 12: 00', // 认领时间
                        'projectUser': '所属人员',
                        'business': '所属业务',
                        'type': 1, // 类型 0预付,1结算,2保证金,3押金
                        'billBegin': '2019.3.4'
                        'billEnd': '2019.3.6' // 账单周期起止时间
                        'claimMoney': 12.00, // 认领金额
                        'operateName': 'xxx,xxx' // 通知运营人员
                        }] // 认领信息
                }
            }
        }
    */

/* 'title': '财务管理-财务-认领',
        'url': '/api/finance/claim',
        'method': 'post',
        'params': {
            'id': 1,
            'projectId': 1, // 所属项目
            'customer': 1, // 客户id
            'adName': 1, // 产品名称
            'adType': 1, // 广告类型
            'business': '**业务', // 所属业务
            'busId': 1, // 所属人员
            'type': 1, // 类型 0预付,1结算,2保证金,3押金
            'billBegin': '2019-02-20',
            'billEnd': '2019-02-20',
            'claimMoney': 12.00, // 认领金额
            'mark': '备注',
            'operate': [2,4] // 运营人员
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '财务管理-财务-上传',
        'url': '/api/finance/claim_upload',
        'method': 'post',
        'params': {
            'projectId': 1, // 所属项目
            'file'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '财务管理-款项认领-导出我的认领',
        'url': '/api/finance/claim_list_export',
        'method': 'get',
        'params': {
            'type': 1, // 日期搜索类型 1 上传时间 2 认领时间 3 到账时间
            'begin': '2018-11-28' // 开始日期
            'end': '2018-11-28' // 开始日期
            'status': 1 // 认领状态
            'keyword' // 付款人关键字
            'amount': 12, // 收款金额
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '财务管理-款项认领-导出下属认领',
        'url': '/api/finance/sub_list_export',
        'method': 'get',
        'params': {
            'type': 1, // 日期搜索类型 1 上传时间 2 认领时间 3 到账时间
            'begin': '2018-11-28' // 开始日期
            'end': '2018-11-28' // 开始日期
            'status': 1 // 认领状态
            'keyword' // 付款人关键字
            'amount': 12, // 收款金额
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '财务管理-款项认领-上传数据-导出',
        'url': '/api/finance/claim_uplist_export',
        'method': 'get',
        'params': {
            'type': 1, // 日期搜索类型 1 上传时间 2 认领时间 3 到账时间
            'begin': '2018-11-28' // 开始日期
            'end': '2018-11-28' // 开始日期
            'status': 1 // 认领状态
            'keyword' // 付款人关键字
            'amount': 12, // 收款金额
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '财务管理-款项认领-撤回',
        'url': '/api/finance/claim_goback',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '财务管理-款项认领-删除',
        'url': '/api/finance/claim_delete',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '客户搜索下拉框',
        'url': '/api/finance/customer',
        'method': 'get',
        'params': {
            'projectId': 1,
            'busName': '客户名称'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'cusId': 1, // 客户id
                    'busName': '企业客户名称',
                    'leader': 11, // 负责人id
                    'leaderName' // 负责人姓名
                }]
            }
        }
    */

/* 'title': '所属人员下拉框',
        'url': '/api/finance/users',
        'method': 'get',
        'params': {
            'projectId': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 商务id
                    'Name': '商务姓名'
                }]
            }
        }
    */

/* 'title': '获取客户的所属商务',
        'url': '/api/finance/customer_leader',
        'method': 'get',
        'params': {
            'projectId': 1,
            'busId': '客户id'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'leader': 11, // 负责人id
                    'leaderName' // 负责人姓名
                }
            }
        }
    */

/* 'title': '获取产品名称下拉框',
        'url': '/api/finance/adName',
        'method': 'get',
        'params': {
            'cusId': 2, // 客户名称
            'adType': '加发,发送到', // 广告类型
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 广告名称id
                    'Name': '大圣', // 广告名称
                }]
            }
        }
    */
