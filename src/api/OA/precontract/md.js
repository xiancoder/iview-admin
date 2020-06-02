
/* 'title': '合同前置条件审核申请',
        'url': 'api/precontract/examine',
        'method': 'post',
        'params': {
            'wId': 0 // 流程ID
            'projectType': 1 // 所属项目
            'isFirst': 1, // 是否首次合作
            'cusId': 1, // 客户Id
            'companyManegerStatus': '企业经营情形', // 企业经营情形
            'industryIvaluation': '业内评价', // 业内评价
            'companyScale': '生产经营能力或营业规模', // 生产经营能力或营业规模
            'licensePic': '经营许可照', // 经营许可照
            'file': '附件', // 附件
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

/* 'title': '合同前置条件审核申请-保存草稿',
        'url': 'api/precontract/examineback',
        'method': 'post',
        'params': {
            'wId': 0 // 流程ID
            'projectType': 1 // 所属项目
            'isFirst': 1, // 是否首次合作
            'cusId': 1, // 客户Id
            'companyManegerStatus': '企业经营情形', // 企业经营情形
            'industryIvaluation': '业内评价', // 业内评价
            'companyScale': '生产经营能力或营业规模', // 生产经营能力或营业规模
            'licensePic': '经营许可照', // 经营许可照
            'file': '附件', // 附件
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

/* 'title': '合同前置条件审核申请-编辑',
        'url': 'api/precontract/examine_edit',
        'method': 'post',
        'params': {
            'wId': 0 // 流程ID
            'id': 1, //
            'projectType': 1 // 所属项目
            'isFirst': 1, // 是否首次合作
            'cusId': 1, // 客户Id
            'isBack': 1, // 保存草稿
            'companyManegerStatus': '企业经营情形', // 企业经营情形
            'industryIvaluation': '业内评价', // 业内评价
            'companyScale': '生产经营能力或营业规模', // 生产经营能力或营业规模
            'licensePic': '经营许可照', // 经营许可照
            'file': '附件', // 附件
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

/* 'title': '财务审核',
        'url': 'api/precontract/audit',
        'method': 'post',
        'params': {
            'pwd': 'sdfsdf' // 签名密码,
            'id': 1 // 1,
            'qualification': '主体资格' // 主体资格
            'businessLicense': '营业执照' // 营业执照
            'corporateQualifi': '法人资格' // 法人资格
            'administrativeSanction': '行政处罚' // 行政处罚
            'abnormal': '经营异常或违法失信' // 经营异常或违法失信
            'jurisdiction': '委托代理人资格、权限' // 委托代理人资格、权限
            'taxpayer': '纳税人资格认定' // 纳税人资格认定
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '合同前置条件详情',
        'url': 'api/precontract/getdetail',
        'method': 'get',
        'params': {
            'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'isCurrent': true; // 登录用户是否是当前审批人
                'file': [{
                    'enclosure': '/file/contractfile/2019-03-21/file/9952_2.docx',
                    'previewFile': '/file/contractfile/2019-03-21/file/9952_2.pdf'
                }]
                'info': {
                    'pcNum': '合同前置条件编号',
                    'createdTime': '2018-07' // 创建时间
                    'createUser': '申请人' // 申请人
                    'workflowNum': '流程编号' // 流程编号
                    'isFirst': '1' // 是否首次合作 0 否 1首次
                    'companyName': '企业名称' // 企业名称
                    'cusId': '1' // 客户id
                    'companyManegerStatus': '企业经营状况' //
                    'industryIvaluation': '业内评价' // 业内评价
                    'companyScale': '公司规模' // 公司规模
                    'licensePic': '经营许可证图片路径' // 经营许可证图片路径
                    'enclosure': '附件' // 附件
                    'previewFile': '合同预览附件' // 合同预览附件
                    'other': '其他情形' // 其他情形
                    'supplement': '补充' // 补充
                    'qualification': '主体资格' // 主体资格
                    'businessLicense': '营业执照' // 营业执照
                    'corporateQualifi': '法人资格' // 法人资格
                    'administrativeSanction': '行政处罚' // 行政处罚
                    'abnormal': '经营异常或违法失信' // 经营异常或违法失信
                    'jurisdiction': '委托代理人资格、权限' // 委托代理人资格、权限
                    'taxpayer': '纳税人资格认定' // 纳税人资格认定
                    'projectType': 1, // 所属项目id
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

/* 'title': '合同前置条件流程列表',
        'url': 'api/precontract/list',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'keyword': ''
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'pcNum': '合同前置条件编号',
                    'cusName': '客户名称',
                    'isFirst': '1', // 是否首次合作
                    'examineinfo': '审核结果' // 审核结果
                }],
                'rowcount': 22
            }
        }
    */

/* 'title': '预览',
        'url': 'api/precontract/getpreview',
        'method': 'get',
        'params': {
                'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'proposerSign': '申请人签字' // 申请人签字
                'financeSign': '财务签字' // 签字
            }
        }
    */

/* 'title': '上传图片',
        'url': 'api/precontract/savefile',
        'method': 'post',
        'params': {
            'type': '0' // 0 图片 1 文档
            'file': file // 0file
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'url': 'url
            }
        }
    */
