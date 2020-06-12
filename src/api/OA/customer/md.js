// import axios from 'axios' // http请求库
// import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title': '导入客户',
        'url': '/api/customer/upload',
        'method': 'post',
        'params': {
            'projectType': 1 所属项目（1：网维；2：云袭广告；3：加客）
            'file': file
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // -1: 没有满足条件的数据;0: 保存失败;1: 保存成功;2: 部分成功
                count：12 // 成功条数
                errorUrl: '' // res=2时,有失败部分文件下载地址
            }
        }
    */

    /* 'title': '添加/取消关联客户',
        'url': '/api/customer/relationaddorcancel',
        'method': 'post',
        'params': {
            'cusId': 1 // 基准客户id
            'releId': 1 // 关联客户id
            'status': -1 // -1 取消关联,2添加关联
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1成功,0失败
            }
        }
    */

    /* 'title': '搜索关联客户',
        'url': '/api/customer/searchrelevance',
        'method': 'post',
        'params': {
            'cusId': 1 // 基准客户id
            'releId': 1 // 关联客户id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1成功,0失败
            }
        }
    */

    /* 'title': '客户-公海客户列表',
        'url': '/api/customer/getlistpublic',
        'method': 'get',
        'params': {
            'projectType': 1, // 项目,null 不限制1：网维；2：云袭广告；3：加客
            'cusType': 1, // 客户类型,null 不限制
            'cusLevel'1, // 客户级别,null 不限制
            'teamWorkStatus': 1, // 合作状态,null不限制
            'keyword': 1, // 关键字,null不限制
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'busName': 'sss', // 企业客户名称
                    'cusType': '渠道' // 企业客户类型
                    'cusLevel': 'A' // 企业客户级别
                    'teamWorkStatus': '合作中', // 合作状态
                    'tel': '12345678911' // 联系电话
                    'followUpLog': 'sss' // 最新跟进记录
                    'contacters': [{'id': 1,'name': 'duan','post': 'ddd','tel': '122344'}]
                }]
                'rowcount': 20
            }
        }
    */

    /* 'title': '客户-私海客户列表 此接不用了 拆分成三个接口,我负责的客户,我联合跟进的客户,下属客户',
        'url': '/api/customer/getlistprivate',
        'method': 'get',
        'params': {
            'projectType': 1, // 项目,null 不限制1：网维；2：云袭广告；3：加客
            'leader': 2, // 负责人,null 不限制
            'cusType': 1, // 客户类型,null 不限制
            'cusLevel'1, // 客户级别,null 不限制
            'teamWorkStatus': 1, // 合作状态,null不限制
            'keyword': 1, // 关键字,null不限制
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [
                    {
                        'id': 1, // id
                        'busName': 'sss', // 企业客户名称
                        'leader': 'duan', // 负责人
                        'cusType': '渠道' // 企业客户类型
                        'cusLevel': 'A' // 企业客户级别
                        'teamWorkStatus': '合作中', // 合作状态
                        'tel': '12345678911', // 联系电话
                        'followUpLog': 'sss', // 最新跟进记录
                        'contacters': [{'id': 1,'name': 'wang','post': '经理','tel': '17788212797'}]
                    }
                ]
                'rowcount': 22
            }
        }
    */

    /* 'title': '客户-我负责的私海客户列表',
        'url': '/api/customer/getlistleade',
        'method': 'get',
        'params': {
            'projectType': 1, // 项目
            'cusType': 1, // 客户类型,null 不限制
            'cusLevel'1, // 客户级别,null 不限制
            'teamWorkStatus': 1, // 合作状态,null不限制
            'keyword': 1, // 关键字,null不限制
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'busName': 'sss', // 企业客户名称
                    'leader': 'duan', // 负责人
                    'cusType': '渠道' // 企业客户类型
                    'cusLevel': 'A' // 企业客户级别
                    'teamWorkStatus': '合作中', // 合作状态
                    'tel': '12345678911', // 联系电话
                    'followUpLog': 'sss', // 最新跟进记录
                    'contacters': [{'id': 1,'name': 'wang','post': '经理','tel': '17788212797'}]
                }]
                'rowcount': 22
            }
        }
    */

    /* 'title': '客户-我联合跟进的私海客户列表',
        'url': '/api/customer/getlistunion',
        'method': 'get',
        'params': {
            'projectType': 1, // 项目
            'leader': 2, // 负责人,null 不限制
            'cusType': 1, // 客户类型,null 不限制
            'cusLevel'1, // 客户级别,null 不限制
            'teamWorkStatus': 1, // 合作状态,null不限制
            'keyword': 1, // 关键字,null不限制
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'busName': 'sss', // 企业客户名称
                    'leader': 'duan', // 负责人
                    'cusType': '渠道' // 企业客户类型
                    'cusLevel': 'A' // 企业客户级别
                    'teamWorkStatus': '合作中', // 合作状态
                    'tel': '12345678911', // 联系电话
                    'followUpLog': 'sss', // 最新跟进记录
                    'contacters': [{'id': 1,'name': 'wang','post': '经理','tel': '17788212797'}]
                }]
                'rowcount': 22
            }
        }
    */

    /* 'title': '客户-下属的私海客户列表',
        'url': '/api/customer/getlistdept',
        'method': 'get',
        'params': {
            'projectType': 1, // 项目
            'leader': 2, // 负责人,null 不限制
            'cusType': 1, // 客户类型,null 不限制
            'cusLevel'1, // 客户级别,null 不限制
            'teamWorkStatus': 1, // 合作状态,null不限制
            'keyword': 1, // 关键字,null不限制
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'busName': 'sss', // 企业客户名称
                    'leader': 'duan', // 负责人
                    'cusType': '渠道' // 企业客户类型
                    'cusLevel': 'A' // 企业客户级别
                    'teamWorkStatus': '合作中', // 合作状态
                    'tel': '12345678911', // 联系电话
                    'followUpLog': 'sss', // 最新跟进记录
                    'contacters': [{'id': 1,'name': 'wang','post': '经理','tel': '17788212797'}]
                }]
                'rowcount': 22
            }
        }
    */

    /* 'title': '客户-可能有关联的客户列表',
        'url': '/api/customer/relationmaybe',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'busName': 'sss', // 企业客户名称
                    'leader': 'duan', // 负责人
                    'common': '老板' // 类似内容
                }]
            }
        }
    */

    /* 'title': '客户-有关联的客户列表',
        'url': '/api/customer/relationalready',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'busName': 'sss', // 企业客户名称
                    'leader': 'duan' // 负责人
                }]
            }
        }
    */

    /* 'title': '客户-客户企业详情',
        'url': '/api/customer/detail',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'result': {
                    'id': 1, // id
                    'busName': 'sss', // 企业客户名称
                    'cusType': 1, // 企业客户类型
                    'cusTypeName': '渠道/wap网站主', // 企业客户类型,若为'渠道'或'广告主',则用'/'连接一块返回
                    'cusLevel'1, // 企业客户级别
                    'cusLevelName': 'A', // 企业客户级别
                    'teamWorkStatus': 1, // 合作状态
                    'teamWorkStatusName': '合作中', // 合作状态
                    'tel': '13213213213', // 联系电话
                    'industry': 'sss', // 所属行业
                    'corp': '段', // 企业法人
                    'address': 'ddd', // 企业地址
                    'keyword': 'dddf', // 关键词
                    'mark': 'sdf', // 备注
                    'leader': 'duan', // 负责人
                    'oldleader': 'duan', // 前负责人
                    'createBy': 'sdf', // 创建人
                    'createAts': '2019-08-05', // 创建时间
                    'followUpBys': '2019-08-05', // 开始跟进日期/最新转入日期
                    'projectType': 1, // 所属项目1：网维；2：云袭广告；3：加客
                    'foundDate': '2019-02-25', // 成立时间
                    'scale': '规模',
                    'website': 'www.baidu.com' // 公司网址
                    'channelType': 1 // 渠道类型（wap网站主、yys、app）1-3
                    'adType': 1 // 广告主属性（企业、个人）1-2
                }
            }
        }
    */

    /* 'title': '添加关联客户-搜索客户',
        'url': '/api/customer/all',
        'method': 'get',
        'params': {
            'keyword': 'ddd'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'customer': {
                    'id': 1, // 企业id
                    'busName': 'sss', // 企业客户名称
                }
            }
        }
    */

    /* 'title': '企业联系人-列表',
        'url': '/api/customer/contact',
        'method': 'get',
        'params': {
            'id': 1, // 企业id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'name' // 姓名
                    'post' // 职位
                    'tel' // 电话
                    'qq' // QQ
                    'wechat' // 微信
                    'email' // 邮箱
                    'remark' // 备注
                    'busName' // 企业客户名称
                }]
            }
        }
    */

    /* 'title': '企业联系人-详情',
        'url': '/api/customer/contactdetail',
        'method': 'get',
        'params': {
            'id': 1 // 联系人id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'result': {
                    'id': 1,
                    'name' // 姓名
                    'post' // 职位
                    'tel' // 电话
                    'qq' // QQ
                    'wechat' // 微信
                    'email' // 邮箱
                    'remark' // 备注
                    'cusId': 1 // 企业id
                    'busName' // 企业客户名称
                }
            }
        }
    */

    /* 'title': '负责人联合负责人右侧栏',
        'url': '/api/customer/leader',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'result': {
                    'id': 1, // id
                    'leader': {id: 1,'userName': 'sdf','userPhoto': 'xxx.jpg'}
                    'unionUser': [{id: 1,'userName': 'sdf','userPhoto': 'xxx.jpg'}], // 联合负责人数组对象
                    'isUnion': true // 是否有新的关联推送
                    'isUnioner': true // 是否联合跟进人
                    'teamWorkStatus': 1 // 企业客户合作状态
                }
            }
        }
    */

    /* 'title': '企业编辑',
        'url': '/api/customer/edit',
        'method': 'post',
        'params': {
            'id': 1
            'busName': 'sss', // 企业客户名称
            'cusType': 1, // 企业客户类型
            'cusLevel'1, // 企业客户级别
            'teamWorkStatus': 1, // 合作状态
            'tel': '13213213213', // 联系电话
            'industry': 'sss', // 所属行业
            'corp': 1, // 企业法人
            'address': 'ddd', // 企业地址
            'keyword': 'dddf', // 关键词
            'mark': 'sdf' // 备注
            'channelType': 1 // 渠道类型（wap网站主、yys、app）1-3
            'adType': 1 // 广告主属性（企业、个人）1-2
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1成功,0失败
            }
        }
    */

    /* 'title': '添加/编辑企业联系人',
        'url': '/api/customer/addcontact',
        'method': 'post',
        'params': {
            'id' // 0添加 其他编辑
            'name' // 姓名
            'post' // 职位
            'tel' // 电话
            'qq' // QQ
            'wechat' // 微信
            'email' // 邮箱
            'remark' // 备注
            'cusId' // 客户id
            'busName' // 企业客户名称接口不做从处理
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1,1成功,0失败
            }
        }
    */

    /* 'title': '获取跟进记录',
        'url': '/api/customer/followuplog',
        'method': 'get',
        'params': {
            'projectType': 12, // 项目 null不限制
            'leader': 1, // 负责人 null不限制
            'begin': '2018-9-22'
            'end': '2018-9-22'
            'keyword': '' // null不限制
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'operateBy': 'ss', // 记录人
                    'content': 'neirong', // 内容
                    'busName': '云袭', // 企业名称
                    'createAt': '2018-09-02 10: 10' // 记录时间
                    'way': '1', // 联系方式：电话；微信；qq;邮件；面谈
                    'contact': 'duan' // 联系人
                    'file': ['xxx'], // 文件
                    'img': ['xxx'], // 图片
                }]
                'rowcount': 20
            }
        }
    */

    /* 'title': '企业客户内部查看跟进记录列表',
        'url': '/api/customer/followuplogcus',
        'method': 'get',
        'params': {
            'cusId': 12, // 企业客户id null不限制
            'contactId': 1, // 联系人 id null不限制 （cusId,contactId 必填一项）
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'operateBy': 'ss', // 记录人
                    'content': 'neirong', // 内容
                    'busName': '云袭', // 企业名称
                    'createAt': '2018-09-02 10: 10' // 记录时间
                    'way': '1', // 联系方式：电话；微信；qq;邮件；面谈
                    'contact': 'duan' // 联系人
                    'file': ['xxx'], // 文件
                    'img': ['xxx'], // 图片
                }]
                'rowcount': 20
            }
        }
    */

    /* 'title': '添加跟进记录',
        'url': '/api/customer/followupadd',
        'method': 'post', // 使用 form-data 方式
        'params': {
            'cusId': 12 // 企业客户id
            'content': 'neirong', // 内容
            'way': '1', // 跟进方式
            'contact': 12, // 联系人id
            'teamWorkStatus': 1, // 合作状态0: 未合作；1：合作中；2：跟进中；3：已终止
            'file': 文件, // 文件1
            'file': 文件, // 文件2
            'img': 图片, // 图片1
            'img': 图片, // 图片2
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 0 // 1成功,0失败
            }
        }
    */

    /* 'title': '上传文件 --- 不用',
        'url': '/api/customer/uploadfile',
        'method': 'post',
        'params': {
            'type': 1, // 1图片,2其他
            'file': file
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'path': 'xxxxx.jpg'
            }
        }
    */

    /* 'title': '变更负责人',
        'url': '/api/customer/changeleader',
        'method': 'post',
        'params': {
            'id': [1,2],
            'userId': 2, // 负责人id
            'projectType': 1 // 项目id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 0失败1成功
            }
        }
    */

    /* 'title': '变更负责人从公海',
        'url': '/api/customer/changeleader_public',
        'method': 'post',
        'params': {
            'id': [1,2],
            'userId': 2, // 负责人id
            'projectType': 1 // 项目id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 0失败1成功
            }
        }
    */

    /* 'title': '添加联合跟进人',
        'url': '/api/customer/addunion',
        'method': 'post',
        'params': {
            'id': 1,
            'userId': 1 // 负责人id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 0失败1成功
            }
        }
    */

    /* 'title': '删除联合跟进人',
        'url': '/api/customer/delunion',
        'method': 'post',
        'params': {
            'id': 1,
            'userId': 2
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 0失败1成功
            }
        }
    */

    /* 'title': '迁移到公海',
        'url': '/api/customer/changepublic',
        'method': 'post',
        'params': {
            'id': [1,2]
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 0失败1成功
            }
        }
    */

    /* 'title': '变更负责人联合跟进人私海列表负责人下拉框',
        'url': '/api/customer/getdrop',
        'method': 'get',
        'params': {
            'cusId': 1 // 私海列表传null,联合跟进人用传客户id,变更负责人传-1所有商务
            // 下属传null,联合跟进人传id,变更负责人传-1所有商务
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'userName': 'duan'
                }]
            }
        }
    */

    /* 'title': '联合跟进人列表负责人下拉框',
        'url': '/api/customer/getdrop_union_leader',
        'method': 'get',
        'params': {
            'projectType': 0 // 0不限制项目
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'userName': 'duan'
                }]
            }
        }
    */

    /* 'title': '下属客户 跟进记录 负责人下拉框',
        'url': '/api/customer/getdrop_under',
        'method': 'get',
        'params': {
            'type': 1, // 1,下属客户。 0,跟进记录
            'projectType': 0 // 0不限制项目
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'userName': 'duan'
                }]
            }
        }
    */

    /* 'title': '变更负责人联合跟进人下拉框专用',
        'url': '/api/customer/getdropz',
        'method': 'get',
        'params': {
            'cusId': 1 // 客户id
            'type': 1 // 1,变更负责人,2联合跟进人
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'userName': 'duan'
                }]
            }
        }
    */

    /* 'title': '项目下拉框',
        'url': 'api/customer/project_list',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'name': '项目组'
                }]
            }
        }
    */

    /* 'title': '客户列表-添加客户',
        'url': '/api/customer/add_private',
        'method': 'post',
        'params': {
            'projectType': '1', // 项目id
            'cusType': 1, // 企业客户类型
            'cusLevel'1, // 企业客户级别
            'teamWorkStatus': 1, // 合作状态
            'busName': 'sss', // 企业客户名称
            'industry': 'sss', // 所属行业
            'corp': 1, // 企业法人
            'tel': '13213213213', // 联系电话
            'address': 'ddd', // 企业地址
            'keyword': 'dddf', // 关键词
            'mark': 'sdf' // 备注
            'foundDate': '2019-02-25', // 成立时间
            'scale': '规模',
            'website': 'www.baidu.com' // 公司网址
            'channelType': 1 // 渠道类型（wap网站主、yys、app）1-3
            'adType': 1 // 广告主属性（企业、个人）1-2
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1成功,0失败
            }
        }
    */

    /* 'title': '客户列表-添加发票信息',
        'title': '添加发票信息',
        'url': '/api/customer/add_invoice',
        'method': 'post',
        'params': {
            'type': '1', // 0 添加 1编辑
            'cusId': '1', // 客户id
            'invoiceType': 1, // 发票类型 发票类型（1：普通发票；2：专用发票）
            'settleType'1, // 结算类型（1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结）
            'repaymentDate': 1, // 账期
            'taxpayer': 'sss', // 纳税人识别号
            'busAddress': 'sss', // 企业地址
            'busTel': '18610491861', // 联系电话
            'openBank': '民国', // 开户行
            'bankCard': 'ddd', // 银行卡号
            'mailAddress': '邮寄地址', // 邮寄地址
            'consignee': 'sdf' // 收货人
            'consigneeTel': '18614149' // 收货电话
            'postalcode': '18614149' // 邮政编码
            'invoiceRemark': '备注' // 备注
            'busName': 'sss', // 企业名称
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1成功,0失败
            }
        }
    */

    /* 'title': '客户列表-发票信息详情',
        'title': '添加发票信息',
        'url': '/api/customer/invoice_info',
        'method': 'get',
        'params': {
            'cusId': '1', // 客户id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'invoiceType': 1, // 发票类型 发票类型（1：普通发票；2：专用发票）
                    'invoiceName': 普通发,
                    'settleType'1, // 结算类型（1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结）
                    'settleName'日结, // 结算
                    'repaymentDate': 1, // 账期
                    'taxpayer': 'sss', // 纳税人识别号
                    'busAddress': 'sss', // 企业地址
                    'busName': 'sss', // 企业名称
                    'busTel': '18610491861', // 联系电话
                    'openBank': '民国', // 开户行
                    'bankCard': 'ddd', // 银行卡号
                    'mailAddress': '邮寄地址', // 邮寄地址
                    'consignee': 'sdf' // 收货人
                    'consigneeTel': '18614149' // 收货电话
                    'postalcode': '18614149' // 邮政编码
                    'invoiceRemark': '备注' // 备注
                }
                'exist': false 没数据, true 有数据
            }
        }
    */

    /* 'title': '各项目同步客户接口 获取私海合作中客户',
        'url': '/api/customer/projectget',
        'method': 'get',
        'params': {
            'projectType': 1 // 1：网维；2：云袭广告；3：加客
            'cusType': 1, // 企业客户类型（1：渠道；2：广告主;3城市合伙人;4: 直接客户 ;-1: 未知）
            'cusLevel': 1, // 级别(1: A;2;B;3: C;4: D)
            'teamWorkStatus': 1, // 合作状态（0: 未合作；1：合作中；2：跟进中(去掉)；3：已终止）
            'settleType': 1, // 结算类型（1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结）
            'invoiceType': 1 // 发票类型（1：普通发票；2：专用发票）
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'busName': 'kegugu2 刘一', // 客户名称
                    'cusType': 1, // 企业客户类型（1：渠道；2：广告主;3城市合伙人;4: 直接客户 ;-1: 未知）
                    'cusLevel': 2, // 级别(1: A;2;B;3: C;4: D)
                    'teamWorkStatus': 1, // 合作状态（0: 未合作；1：合作中；2：跟进中(去掉)；3：已终止）
                    'tel': '17788212160', // 联系电话
                    'corp': '企业法人',
                    'userId': 107, // 所属商务id
                    'userName': '张少锋', // 所属商务
                    'foundDate': '0001-01-01T00: 00: 00', // 成立时间
                    'address': '企业地址',
                    'website': '网址',
                    'scale': '企业规模',
                    'mark': '备注',
                    'settleType': 1, // 结算类型（1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结）
                    'invoiceType': 1, // 发票类型（1：普通发票；2：专用发票）
                    'repaymentDate': 1, // 账期
                    'taxpayer': '111', // 纳税人识别号
                    'busAddress': '企业地址',
                    'openBank': '开卡银行',
                    'bankCard': '银行账号',
                    'mailAddress': '邮寄地址',
                    'consignee': '收货人',
                    'consigneeTel': '收货电话',
                    'postalcode': '邮政编码',
                    'invoiceRemark': '发票备注'
                }]
                'rowcount': 22
            }
        }
    */

    end: 'api' // 防呆设计
}
