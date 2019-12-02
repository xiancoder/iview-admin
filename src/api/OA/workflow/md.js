
    /* 'title': '全部流程列表（商务）',
        'url': 'api/workflow/businesslist',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'wfType': 1, // 流程类型
            'status': 1, // 流程状态 0：审批中 1：驳回 2：通过 3: 已审阅
            'begin': '2019-02-28',
            'end': '2019-02-28',
            'keyword': 'LC20190604062', // 流程单号
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 流程id
                    'workflowNum': 'LC20190604062', // 流程单号
                    'procedureName': '发票申请', // 流程名称
                    'createdTime': '2018-12-20 12: 30: 10', // 申请时间
                    'approver': '黄工', // 当前审批人
                    'status': 1 // 流程状态, 0：审批中 1：驳回 2：通过 3: 已审阅
                    'updatedByName': '黄工', // 最后操作人
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '获取所有流程',
        'url': 'api/workflow/getall',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'procedureTypeId': 1,
                    'procedureType': '其他流程'
                    'procedures': [{
                        'procedureID': 1,
                        'procedureName': '广告上线流程'
                    }]
                }]
            }
        }
    */

    /* 'title': '广告上线申请',
        'url': 'api/workflow/apply_ad',
        'method': 'post',
        'params': {
            'wId': 0 // 流程ID
            'id': 1, // 添加0
            'projectType': 1 // 所属项目
            'cpId': 1, // 立项id
            'settleType': 1-9 // 账期
            'paymentType': 1, // 收款方式 0对公 1对私
            'charging': '计费模式',
            'chargingPrice': 12.0 // 计费单价
            'adType': '广告类型',
            'presentation': '展现形式',
            'testDuration': 1, // 测试时长
            'testMagnitude': 2 // 测试量级
            'account': '后台账号',
            'password': '后台密码',
            'onlineDesc': '上线说明',
            'approver': [{
                'node': 1, // 节点id
                'approverUserId': 1 // 审批人id
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

    /* 'title': '广告上线申请保存为草稿',
        'url': 'api/workflow/apply_ad_draft',
        'method': 'post',
        'params': {
            'projectType': 1 // 所属项目
            'cpId': 1, // 立项id
            'paymentType': 1, // 收款方式 0对公 1对私
            'charging': '计费模式',
            'chargingPrice': 12.0 // 计费单价
            'adType': '广告类型',
            'presentation': '展现形式',
            'testDuration': 1, // 测试时长
            'testMagnitude': 2 // 测试量级
            'acccount': '后台账号',
            'password': '后台密码',
            'onlineDesc': '上线说明',
            'approver': 1, // 审批人
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

    /* 'title': '立项编号搜索下拉框接口',
        'url': 'api/workflow/confirmproject',
        'method': 'get',
        'params': {
            'projectType': 1 // 项目id
            'busiId': 1, // 客户id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'cpId': 1,
                    'projectNumber': '立项编号-客户名称',
                }]
            }
        }
    */

    /* 'title': '获取审批人接口',
        'url': 'api/workflow/getusers',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': {
                    'busiId': 1,
                    'busiName': '段兵宇-开发-项目组'
                }
            }
        }
    */

    /* 'title': '获取立项信息接口',
        'url': 'api/workflow/confirmproject_info',
        'method': 'get',
        'params': {
            'cpId': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'busName': '客户名称',
                    'userName': '所属商务'
                }
            }
        }
    */

    /* 'title': '获取流程节点接口',
        'url': 'api/workflow/getnodes',
        'method': 'get',
        'params': {
            'procedureId': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'node': [{
                    'id': 1,
                    'approverInfo': '审核信息'
                }]
            }
        }
    */

    /* 'title': '我的流程列表（待我审批的,我已审批的,抄送我的）',
        'url': 'api/workflow/list',
        'method': 'get',
        'params': {
            'type': 1, // 列表类别（1带我审批的,2我已审批的,3抄送我的）
            'projectType': 1, // 所属项目
            'wfId' // 流程名称
            'wfType' // 流程类型
            'status': 1 // 流程状态 0：审批中 1：驳回 2：通过
            'begin': '2019-02-28',
            'end': '2019-02-28',
            'keyword': '流程单号',
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id'
                    'workflowNum': '流程单号',
                    'wId': 1, // 流程名称id
                    'procedureName': '流程名称',
                    'procedureType': 1, // 流程类型id,
                    'procedureTypeName': '流程类型',
                    'createdTime': '2018-12-20 12: 30: 10', // 申请时间
                    'createBy': 155, // 申请人id
                    'createByName': 'duan', // 申请人名称
                    'status': 1 // 流程状态
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '我的流程列表（我申请的）',
        'url': 'api/workflow/list_myown',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'wfId' // 流程名称
            'wfType' // 流程类型
            'status': 1 // 流程状态 0：审批中 1：驳回 2：通过
            'begin': '2019-02-28',
            'end': '2019-02-28',
            'workflowNum': '流程单号'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id'
                    'approver': '当前审批人'
                    'workflowNum': '流程单号',
                    'wId': 1, // 流程名称id
                    'procedureName': '流程名称',
                    'procedureType': 1, // 流程类型id,
                    'procedureTypeName': '流程类型',
                    'createdTime': '2018-12-20 12: 30: 10', // 申请时间
                    'createBy': 155, // 申请人id
                    'createByName': 'duan', // 申请人名称
                    'status': 1 // 流程状态
                    'updatedByName': '最后操作人'
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '获取流程类型',
        'url': 'api/workflow/gettype',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'procedureType': '其他流程'
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '获取流程名称 联动',
        'url': 'api/workflow/getname',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'procedureName': '流程名称'
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '我的流程列表（草稿箱）',
        'url': 'api/workflow/draft',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'wfType': 1 // 流程类型
            'keyword': '',
            'begin': '2019-02-28',
            'end': '2019-02-28',
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id'
                    'procedureName': '流程名称',
                    'procedureTypeName': '流程类型',
                    'updatedTime': '2018-12-20 12: 30: 10' // 最后编辑
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '我的流程列表（草稿箱）删除',
        'url': 'api/workflow/delete',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 1成功 0失败
            }
        }
    */

    /* 'title': '广告上线申请 编辑',
        'url': 'api/workflow/apply_edit',
        'method': 'post',
        'params': {
            'id': 1, // 添加0
            'isBack': 1, // 1草稿0非草稿
            'projectType': 1 // 所属项目
            'cpId': 1, // 立项id
            'settleType': 1-9 // 账期
            'paymentType': 1, // 收款方式 0对公 1对私
            'charging': '计费模式',
            'chargingPrice': 12.0 // 计费单价
            'adType': '广告类型',
            'presentation': '展现形式',
            'testDuration': 1, // 测试时长
            'testMagnitude': 2 // 测试量级
            'account': '后台账号',
            'password': '后台密码',
            'onlineDesc': '上线说明',
            'approver': [{
                'node': 1, // 节点id
                'approverUserId': 1 // 审批人id
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

    /* 'title': '广告上线详情',
        'url': 'api/workflow/detail_ad_edit',
        'method': 'get',
        'params': {
            'id'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'workflowNum': '流程单号',
                    'projectType': 1, // 所属项目id
                    'projectNumber': '所属立项编号',
                    'settleType': 1, // 结算周期1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
                    'paymentType': 0, // 收款方式 0对公 1对私
                    'adType': '广告类型',
                    'charging': '计费模式',
                    'chargingPrice': 12.00, // 计费单价
                    'presentation': '展现形式',
                    'testDuration': 1, // 测试时长/天
                    'testMagnitude': 1, // 测试量级
                    'acccount': '后台账号',
                    'password': '后台密码',
                    'onlineDesc': '上线说明',
                    'approver': [{
                        'node': 1, // 节点id
                        'approverUserId': 1 // 审批人id
                        'approverUserName': aaa // 审批人姓名
                        'approverInfo': aaa // 审批节点名,用来获取人员列表
                    }] // 审批人
                    'correlation': [1,2] // 抄送人（数组）
                },
            }
        }
    */

    /* 'title': '',
        'url': 'api/workflow/detail_ad_view',
        'method': 'get',
        'params': {
            // id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'workflowNum': '流程单号',
                    'projectType': '加客', // 所属项目
                    'projectNumber': '所属立项编号',
                    'busName': '客户名称',
                    'userName': '所属销售/媒介',
                    'settleType': '日结', // 结算周期1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
                    'paymentType': '对公', // 收款方式 0对公 1对私
                    'adType': '广告类型',
                    'charging': '计费模式',
                    'chargingPrice': 12.00, // 计费单价
                    'presentation': '展现形式',
                    'testDuration': 1, // 测试时长/天
                    'testMagnitude': 1, // 测试量级
                    'acccount': 后台账号',
                    'password': '后台密码',
                    'putTime': '2018-01-01', // 投放时间
                    'channel': '投放渠道',
                    'onlineDesc': '上线说明',
                    'isCurrent': true, 登录用户是否是当前审批人
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
    */

    /* 'title': '审批 通过',
        'url': 'api/workflow/pass_ad',
        'method': 'post',
        'params': {
            'id': 1,
            'adName': '防守打法', // 广告名称
            'putTime': '2019-02-28',
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

    /* 'title': '审批 驳回',
        'url': 'api/workflow/reject_ad',
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

    /* 'title': '审批 转发',
        'url': 'api/workflow/change_ad',
        'method': 'post',
        'params': {
            'id': 1,
            'approver': 1, // 审批人
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '获取是否有签名',
        'url': 'api/workflow/getisexis',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'isExis': 1 // 1有
            }
        }
    */

    /* 'title': '获取签名',
        'url': 'api/workflow/getSign',
        'method': 'post',
        'params': {
            pwd'123'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'contenrt': '123'
            }
        }
    */

    /* 'title': '获取上次审批人及抄送人',
        'url': 'api/workflow/get_last',
        'method': 'get',
        'params': {
            'id': 3 // 流程类型id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'approverUserId': 3, // 审批人id,若无传空字符串
                    'approverUserName': 'xxx', // 审批人姓名,若无传空字符串
                    'approverInfo': '法务', // 审批部门,用来获取人员列表
                    'node': 7
                }],
                'correlation': [26,43] // 抄送人id,若无传空数组
                }
            }
        }
    */

    /* 'title': '获取审批人员列表',
        'url': 'api/workflow/get_approver_list',
        'method': 'get',
        'params': {
            'name': '法务' // 节点名称
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'busiId': 3, // id
                    'busiName': 'xxx', // 姓名
                }]
            }
        }
    */