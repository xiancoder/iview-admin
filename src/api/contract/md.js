
    /* 'title': '合同申请（保存草稿）',
        'url': 'api/contract/application_contract',
        'method': 'post',
        'params': {
            'projectType': 1 // 所属项目
            'cpId': 1, // 立项id
            'wId': 1, // 流程id
            'wpcId': 1, // 合同前置条件id
            'contractName': '合同名称',
            'contractType': 1, // 合同类型 1.其他 2.媒体合同 3.广告主合同
            'cusId': 1, // 客户ID
            'contractPrice': 16.5, // 合同金额
            'contractBegin': '2018-0407', // 合同开始时间
            'isContinue': true, // 合同到期是否延续
            'continueDate': '2018-10-10', // 延续至xxxx
            'contractEnd': '2018-0407', // 合同结束时间
            'contractSeveral': 1, // 合同份数 1.一式四份
            'sealType': 1, // 1.对方盖章 2.我方盖章
            'contractDesc': '合同概要',
            'file': '合同附件',
            'mark': '备注',
            'isBack': 1 // 1备份,
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

    /* 'title': '合同详情',
        'url': 'api/contract/application_contractdetail',
        'method': 'get',
        'params': {
            'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'isCurrent': true; // 登录用户是否是当前审批人
                'file': [
                    'enclosure': '/file/contractfile/2019-03-21/file/9952_2.docx'
                ]
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
                'info': {
                    'pcNum': '合同前置条件编号',
                    'wpcId': 1, // 合同前置条件id
                    'workflowNum': '流程编号' // 流程编号
                    'projectNumber': '所属立项编号',
                    'cpId': 1, // 立项id
                    'businessType': 1, // 业务类型
                    'createdTime': '2018-07' // 创建时间
                    'createUser': '申请人' // 申请人
                    'companyName': '企业名称' // 企业名称
                    'contractNum': '合同编号' // 合同编号
                    'cusId': '1' // 客户id
                    'contractName': '合同名称' // 
                    'contractType': '1' // 合同类型
                    'contractTypeName': '广告主合同' // 合同类型名称
                    'contractPrice': 12, // 金额
                    'contractBeginStr': '2018-10-04', // 开始时间
                    'contractEndStr': '2018-10-04', // 结束时间
                    'isContinue': true, // 合同到期是否延续
                    'continueDate': '2018-10-10', // 延续至xxxx
                    'sealType': '1' // 盖章方式
                    'contractSeveral': 1, // 合同份数 1.一式四份
                    'projectType': 1, // 所属项目id
                    'projectTypeName': '项目组', // 所属项目
                    'contractDesc': '合同概要',
                    'name': '主题名称', // 主题名称
                    'companyId': 1, // 主题1
                    'mark': '备注',
                    'approver': [{
                        'node': 1, // 节点id
                        'approverUserId': 1 // 审批人id
                        'approverUserName': aaa // 审批人姓名
                        'approverInfo': aaa // 审批节点名,用来获取人员列表
                        }] // 审批人
                    'correlation': [1,2] // 抄送人（数组）
                    'post': '前端开发',
                    'department': [
                        '项目组-技术部-平台事业部-OA组',
                        '项目组-市场部-营销策划-新媒体运营组'
                    ]
                }
            }
        }
    */

    /* 'title': '合同-编辑',
        'url': 'api/contract/contract_edit',
        'method': 'post',
        'params': {
            'id': 1, // 流程id
            'projectType': 1 // 所属项目
            'cpId': 1, // 立项id
            'wId': 1, // 流程id
            'wpcId': 1, // 合同前置条件id
            'companyId': 1, // 流程id
            'contractName': '合同名称',
            'contractType': 1, // 合同类型 1.其他 2.媒体合同 3.广告主合同
            'cusId': 1, // 客户ID
            'contractPrice': 16.5, // 合同金额
            'contractBegin': '2018-0407', // 合同开始时间
            'contractEnd': '2018-0407', // 合同结束时间
            'isContinue': true, // 合同到期是否延续
            'continueDate': '2018-10-10', // 延续至xxxx
            'contractSeveral': 1, // 合同份数 1.一式四份
            'sealType': 1, // 1.对方盖章 2.我方盖章
            'contractDesc': '合同概要',
            'file': '合同附件',
            'mark': '备注',
            'isBack': 1 // 1备份,
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

    /* 'title': '通过申请',
        'url': 'api/contract/pass_contract',
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

    /* 'title': '审批 驳回',
        'url': 'api/contract/reject_contract',
        'method': 'post',
        'params': {
            'id': 1,
            'opinion': '审核意见'
            'file': file
            'fileUrl': 'asdasd/asdasd/附件.doc' // 驳回附件
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
        'url': 'api/contract/replace_contract',
        'method': 'post',
        'params': {
            'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '框架协议申请（保存草稿）',
        'url': 'api/contract/application_agreement',
        'method': 'post',
        'params': {
            'projectType': 1 // 所属项目
            'contractName': '合同名称',
            'contractType': 1, // 合同类型 1.其他 2.媒体合同 3.广告主合同
            'cusId': 1, // 客户ID
            'wId': 1, // 流程id
            'contractDesc': '合同概要',
            'file': '合同附件',
            'mark': '备注',
            'isBack': 1 // 1备份,
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

    /* 'title': '合同-编辑',
        'url': 'api/contract/agreement_edit',
        'method': 'post',
        'params': {
            'id': 1, // 流程id
            'projectType': 1 // 所属项目
            'contractName': '合同名称',
            'contractType': 1, // 合同类型 1.其他 2.媒体合同 3.广告主合同
            'cusId': 1, // 客户ID
            'wId': 1, // 流程id
            'contractDesc': '合同概要',
            'file': '合同附件',
            'mark': '备注',
            'isBack': 1 // 1备份,
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

    /* 'title': '框架协议详情',
        'url': 'api/contract/application_agreementdetail',
        'method': 'get',
        'params': {
                'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'isCurrent': true; // 登录用户是否是当前审批人
                'file': ['enclosure': '/file/contractfile/2019-03-21/file/9952_2.docx']
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
                'info': {
                    'workflowNum': '流程编号' // 流程编号
                    'createdTime': '2018-07' // 创建时间
                    'createUser': '申请人' // 申请人
                    'companyName': '企业名称' // 企业名称
                    'cusId': '1' // 客户id
                    'contractName': '合同名称' // 
                    'contractBeginStr': '2018-10-04', // 开始时间
                    'contractEndStr': '2018-10-04', // 结束时间
                    'isContinue': true, // 合同到期是否延续
                    'continueDate': '2018-10-10', // 延续至xxxx
                    'contractType': '1' // 合同类型
                    'contractTypeName': '广告主合同' // 合同类型名称
                    'projectType': 1, // 所属项目id
                    'projectTypeName': '项目组', // 所属项目
                    'name': '主题名称', // 主题名称
                    'companyId': 1, // 主题1
                    'approver': [{
                        'node': 1, // 节点id
                        'approverUserId': 1 // 审批人id
                        'approverUserName': aaa // 审批人姓名
                        'approverInfo': aaa // 审批节点名,用来获取人员列表
                        }] // 审批人
                    'correlation': [1,2] // 抄送人（数组）
                    'post': '前端开发',
                    'department': [
                        '项目组-技术部-平台事业部-OA组',
                        '项目组-市场部-营销策划-新媒体运营组'
                    ]
                }
            }
        }
    */

    /* 'title': '通过申请',
        'url': 'api/contract/pass_agreement',
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

    /* 'title': '审批 驳回',
        'url': 'api/contract/reject_agreement',
        'method': 'post',
        'params': {
            'id': 1,
            'opinion': '审核意见'
            'file': file
            'fileUrl': 'asdasd/asdasd/附件.doc' // 驳回附件
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

    /* 'title': '框架协议 转发',
        'url': 'api/contract/replace_agreement',
        'method': 'post',
        'params': {
            'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '合同编号下拉框',
        'url': 'api/contract/contractselectlist',
        'method': 'get',
        'params': {
            'keyword': ''
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'acNum': '合同前置条件编号',
                    'id': '1'
                }],
            }
        }
    */

    /* 'title': '反显合同名称',
        'url': 'api/contract/contractselectname',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'contractName': '主合同名称',
                    'projectType': '所属项目',
                    'busName': '客户名称'
                }
            }
        }
    */

    /* 'title': '变更/补充合同申请',
        'url': 'api/contract/application_changecontract',
        'method': 'post',
        'params': {
            'id': 1, // 0添加 变更/补充合同id
            'cId': 1, // 合同id 主表id
            'type': 1, // 1.变更 2.补充
            'changecontractName': '合同名称', // 附加合同名称
            'contractType': 1, // 合同类型 1.其他 2.媒体合同 3.广告主合同
            'contractPrice': 16.5, // 合同金额
            'contractBegin': '2018-0407', // 合同开始时间
            'contractEnd': '2018-0407', // 合同结束时间
            'sealType': 1, // 1.对方盖章 2.我方盖章
            'contractDesc': '合同概要', // 变更或者补充信息
            'file': '合同附件',
            'mark': '备注',
            'isBack': 1 // 1备份,
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

    /* 'title': '变更详情',
        'url': 'api/contract/change_contractdetail',
        'method': 'get',
        'params': {
            'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
            'isCurrent': true; // 登录用户是否是当前审批人
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
            'info': {
                'workflowNum': '流程编号' // 流程编号
                'sourceNum': '原合同编号' // 原合同编号
                'createdTime': '2018-07' // 创建时间
                'createUser': '申请人' // 申请人
                'contractName': '合同名称' // 
                'changecontractName': '合同名称' // 
                'contractType': '1' // 合同类型
                'contractTypeName': '广告主合同' // 合同类型名称
                'contractPrice': 12, // 金额
                'contractBegin': '2018-10-04', // 开始时间
                'contractEnd': '2018-10-04', // 结束时间
                'sealType': '1' // 盖章方式
                'contractEnclosure': 'dfsd.docx',
                'contractEnclosureList': ['sdfsd.docx'], // 变更附件
                'oldcontractEnclosure': 'asdf.docx',
                'oldcontractEnclosureList': ['asdf.docx'], // 原合同附件
                'contractDesc': '概要',
                'approver': [{
                    'node': 1, // 节点id
                    'approverUserId': 1 // 审批人id
                    'approverUserName': aaa // 审批人姓名
                    'approverInfo': aaa // 审批节点名,用来获取人员列表
                    }] // 审批人
                'correlation': [1,2] // 抄送人（数组）
                'post': '前端开发',
                'department': [
                    '项目组-技术部-平台事业部-OA组',
                    '项目组-市场部-营销策划-新媒体运营组'
                ],
                'portion': '一式四份' // 合同份数
                'mark': '备注'
            }
        }
    */

    /* 'title': '通过申请',
        'url': 'api/contract/pass_change',
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

    /* 'title': '审批 驳回',
        'url': 'api/contract/reject_change',
        'method': 'post',
        'params': {
            'id': 1,
            'opinion': '审核意见'
            'file': file
            'fileUrl': 'asdasd/asdasd/附件.doc' // 驳回附件
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

    /* 'title': '审批 转发
        'url': 'api/contract/replace_change',
        'method': 'post',
        'params': {
            'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '合同管理',
        'url': 'api/contract/contractmanager',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'companyId': 1, // 合同主体
            'contractType': 1, // 合同类型
            'type': 1, // 合同种类0.普通 1.框架
            'begin': '2018-07-15', // 开始时间
            'end': '2018-07-15', // 结束时间
            'keyword': '',
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1
                    'contractNum': '合同编号',
                    'contractName': '合同名称',
                    'type': 1, // 合同种类0.普通 1.框架
                    'busName': 'kehu', // 客户名称
                    'contractType': 1 // 合同类型1.其他 2.媒体合同 3.广告主合同
                    'updatedTime': '2018-04-41'
                    'contractPrice': 12.5 // 合同金额
                    'isChange': 1 // 1.变更 0.没变更
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '变更合同列表',
        'url': 'api/contract/contractchangelist',
        'method': 'get',
        'params': {
            'id': 1, // 合同id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'file': ['enclosure': '/file/contractfile/2019-03-21/file/9952_2.docx']
                    'changefile': ['enclosure': '/file/contractfile/2019-03-21/file/9952_2.docx']
                    'info': {
                        'sourceNum': '原合同编号' // 原合同编号
                        'createUser': '申请人' // 申请人
                        'companyName': '企业名称' // 企业名
                        'cusId': '1' // 客户id
                        'contractName': '合同名称' // 
                        'changecontractName': '合同名称' // 
                        'contractType': '1' // 合同类型
                        'contractTypeName': '广告主合同' // 合同类型名称
                        'companyName': '企业名称' // 企业名称
                        'contractPrice': 12, // 金额
                        'contractBegin': '2018-10-04', // 开始时间
                        'contractEnd': '2018-10-04', // 结束时间
                        'sealType': '1' // 盖章方式
                        'projectType': 1, // 所属项目id
                        'projectTypeName': '项目组', // 所属项目
                        'approver': [{
                            'node': 1, // 节点id
                            'approverUserId': 1 // 审批人id
                            'approverUserName': aaa // 审批人姓名
                            }] // 审批人
                        'correlation': [1,2] // 抄送人（数组）
                        'post': '前端开发',
                        'department': [
                            '项目组-技术部-平台事业部-OA组',
                            '项目组-市场部-营销策划-新媒体运营组'
                        ]
                    }
                }],
            }
        }
    */

    /* 'title': '主体下拉列表',
        'url': 'api/contract/companyselectlist',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'name': '宁静致远',
                    'id': '1'
                }],
            }
        }
    */

    /* 'title': '合同前置条件编号下拉框',
        'url': 'api/contract/wpc',
        'method': 'get',
        'params': {
            'projectType': 1 // 项目id
            'busId': 1, // 客户id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                list: [{
                    'wpcId': '前置条件id',
                    'wpc': '前置条件编号',
                }]
            }
        }
    */

    /* 'title': '合同管理（全部合同管理）',
        'url': 'api/contract/allcontract',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'companyId': 1, // 合同主体
            'contractType': 1, // 合同类型
            'type': 1, // 合同种类0.普通 1.框架
            'begin': '2018-07-15', // 开始时间
            'end': '2018-07-15', // 结束时间
            'keyword': '',
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1
                    'contractNum': '合同编号',
                    'contractName': '合同名称',
                    'type': 1, // 合同种类0.普通 1.框架
                    'busName': 'kehu', // 客户名称
                    'contractType': 1 // 合同类型1.其他 2.媒体合同 3.广告主合同
                    'updatedTime': '2018-04-41'
                    'contractPrice': 12.5 // 合同金额
                    'isChange': 1 // 1.变更 0.没变更
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '合同管理（我的合同管理）',
        'url': 'api/contract/mycontract',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'companyId': 1, // 合同主体
            'contractType': 1, // 合同类型
            'type': 1, // 合同种类0.普通 1.框架
            'begin': '2018-07-15', // 开始时间
            'end': '2018-07-15', // 结束时间
            'keyword': '',
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1
                    'contractNum': '合同编号',
                    'contractName': '合同名称',
                    'type': 1, // 合同种类0.普通 1.框架
                    'busName': 'kehu', // 客户名称
                    'contractType': 1 // 合同类型1.其他 2.媒体合同 3.广告主合同
                    'updatedTime': '2018-04-41'
                    'contractPrice': 12.5 // 合同金额
                    'isChange': 1 // 1.变更 0.没变更
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '合同管理（下属合同管理）',
        'url': 'api/contract/subordinatecontract',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'companyId': 1, // 合同主体
            'contractType': 1, // 合同类型
            'type': 1, // 合同种类0.普通 1.框架
            'begin': '2018-07-15', // 开始时间
            'end': '2018-07-15', // 结束时间
            'keyword': '',
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1
                    'contractNum': '合同编号',
                    'contractName': '合同名称',
                    'type': 1, // 合同种类0.普通 1.框架
                    'busName': 'kehu', // 客户名称
                    'contractType': 1 // 合同类型1.其他 2.媒体合同 3.广告主合同
                    'updatedTime': '2018-04-41'
                    'contractPrice': 12.5 // 合同金额
                    'isChange': 1 // 1.变更 0.没变更
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '合同管理 - 值班数据导出',
        'url': '/api/contract/contractmanager_export',
        'method': 'get',
        'params': {
            'projectType': 2,
            'begin': '2019-05-21',
            'end': '2019-05-22',
            'contractType': 2,
            'type': 2,
            'companyId': 2,
            'keyword': '东阿',
            'pageIndex': 1,
            'pageSize': 30,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1,成功 0 失败
            }
        }
    */