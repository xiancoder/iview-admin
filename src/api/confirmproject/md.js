

    /* 'title': '立项管理 列表',
        'url': 'api/confirmproject/list',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'busiId': 1, // 所属商务
            'projectNumber': '123', // 客户名称/立项编号
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'type': 1,
                    'id': 1,
                    'projectNumber': 'sadfxxx123', // 立项编号
                    'cusName': '百度', // 客户名称
                    'businessType': '运营商', // 客户详细类型
                    'busiName': '段', // 所属商务
                    'projectType': '加客', // 所属项目
                    'createdTime': '2018-12-01' // 立项日期
                    'createdBy': '发动机', // 立项人
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '商务列表',
        'url': 'api/confirmproject/buslist',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'busiId': 1, // 所属商务
                    'busiName': '百度', // 商务名称
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '添加/编辑 DSP、ADN、网吧',
        'url': 'api/confirmproject/add_dsp',
        'method': 'post',
        'params': {
            'id': 1, // 0添加 非0编辑
            'projectType': 1, // 所属项目
            'cusId': 1, // 客户id
            'busiId': 1, // 所属商务
            'contacts': '段兵宇', // 联系人
            'tel': '17788212797', // 电话
            'wx': 'ss', // 微信
            'qq': '123456', // QQ
            'email': '123@qq.com', // 邮箱
            'occupation': '开发', // 联系人职位
            'foundDate': '2019-02-02', // 公司成立时间
            'scale': '100人', // 公司规模
            'website': 'www.baidu.com', // 公司网址
            'platformType': '流量平台', // 平台类型
            'adType': '浮窗', // 广告形式
            'charging': '千次展示', // 计费模式
            'payType': 1, // 付款方式 1.预付 2.结算
            'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
            'flowType': '类型' // 采购流量类型
            'abutmentType': 'SDK', // 技术方式: 'API' 'SDK' 'JS' '直链' '图片'
            'quantity': '需求量级',
            'monthAverage': 12.0, // 月均预算
            'qps': 12, // QPS
            'maxLoad': 10, // 最大承载量
            'intentionMedie': '意向媒体举例',
            'cooperation': '合作伙伴举例',
            'demandDesc': '流量需求说明'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 1成功0失败
            }
        }
    */

    /* 'title': '添加/编辑 直接广告',
        'url': 'api/confirmproject/add_ad',
        'method': 'post',
        'params': {
            'id': 1, // 0添加 非0编辑
            'projectType': 1, // 所属项目
            'cusId': 1, // 客户id
            'busiId': 1, // 所属商务
            'contacts': '段兵宇', // 联系人
            'tel': '17788212797', // 电话
            'wx': 'ss', // 微信
            'qq': '123456', // QQ
            'email': '123@qq.com', // 邮箱
            'occupation': '开发', // 联系人职位
            'foundDate': '2019-02-02', // 公司成立时间
            'scale': '100人', // 公司规模
            'website': 'www.baidu.com', // 公司网址
            'adType': '广告类型说明',
            'productName': '产品名称',
            'productUrl': '产品链接',
            'charging': '计费模式',
            'price': 12.00,
            'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
            'flowType': '采购流量类型',
            'putAdType': '投放广告形式',
            'quantity': '需求量级',
            'monthAverage': 12, // 月均预算
            'intentionMedie': '意向媒体举例',
            'cooperation': '合作伙伴举例',
            'flowDemandDesc': '流量需求说明',
            'functionDemandDesc': '功能需求说明'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 1成功0失败
            }
            }
    */

    /* 'title': '添加/编辑 SSP',
        'url': 'api/confirmproject/add_ssp',
        'method': 'post',
        'params': {
            'id': 1, // 0添加 非0编辑
            'projectType': 1, // 所属项目
            'cusId': 1, // 客户id
            'busiId': 1, // 所属商务
            'contacts': '段兵宇', // 联系人
            'tel': '17788212797', // 电话
            'wx': 'ss', // 微信
            'qq': '123456', // QQ
            'email': '123@qq.com', // 邮箱
            'occupation': '开发', // 联系人职位
            'foundDate': '2019-02-02', // 公司成立时间
            'scale': '100人', // 公司规模
            'website': 'www.baidu.com', // 公司网址
            'flowType': '流量类型',
            'flowScale': '流量规模',
            'charging': '计费模式',
            'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
            'expectPrice': 12, // 期望价格
            'adModality': '广告形式',
            'adType': '广告类型',
            'cooperationType': '合作方式',
            'adBlacklist': '广告黑名单',
            'intentionMedie': '媒体举例',
            'cooperation': '合作伙伴举例',
            'DemandDesc': '其他需求说明'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 1成功0失败
            }
        }
    */

    /* 'title': '添加/编辑 运营商',
        'url': 'api/confirmproject/add_operator',
        'method': 'post',
        'params': {
            'id': 1, // 0添加 非0编辑
            'projectType': 1, // 所属项目
            'cusId': 1, // 客户id
            'busiId': 1, // 所属商务
            'contacts': '段兵宇', // 联系人
            'tel': '17788212797', // 电话
            'wx': 'ss', // 微信
            'qq': '123456', // QQ
            'email': '123@qq.com', // 邮箱
            'occupation': '开发', // 联系人职位
            'foundDate': '2019-02-02', // 公司成立时间
            'scale': '100人', // 公司规模
            'website': 'www.baidu.com', // 公司网址
            'PcName': '机房名称',
            'province': 100000, // 省
            'city': 10000, // 市
            'address': '槐安路'
            'userSum': 10, // 总用户数
            'availableUser': 100, // 可供我方的用户数
            'operatorName': '运营商',
            'computerLevel': '机房级别',
            'magnitude': '量级',
            'computerCompetition': '机房竞品',
            'shieldApp': '是否需要屏蔽APP',
            'monthAverage': 12.0, // 期望月收益
            'notBusiness': '不可做业务',
            'DemandDesc': '其他需求说明'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 1成功0失败
            }
        }
    */

    /* 'title': '添加立项 反显客户信息接口',
        'url': 'api/confirmproject/customer_info',
        'method': 'get',
        'params': {
            'projectId': 2,
            'cusId': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'busiName': '段', // 所属商务
                'busiId': '段', // 所属商务id
                'foundDate': '2019-03-01' // 公司成立时间
                'scale': '100人', // 公司规模
                'website': 'www.baidu.com', // 公司网址
            }
        }
    */

    /* 'title': '添加立项 获取联系人信息',
        'url': 'api/confirmproject/customer_contact',
        'method': 'get',
        'params': {
            'cusId': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'name': '段', // 姓名
                    'tel': '17788215456', // 电话
                    'wechat': 'sss', // 微信
                    'qq': '321654987', // qq
                    'email': '123@qq.com', // 邮箱
                    'post': '经理' // 职位
                    }] // 联系人
            }
        }
    */

    /* 'title': '详情 DSP/ADN/网吧',
        'url': 'api/confirmproject/dsp_detail',
        'method': 'get',
        'params': {
            id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id': 1, // 0添加 非0编辑
                    'projectType': 1, // 所属项目
                    'cusName': 1, // 客户名称
                    'cusId': 1, // 客户id
                    'busiName': 1, // 所属商务
                    'contacts': '段兵宇', // 联系人
                    'tel': '17788212797', // 电话
                    'wx': 'ss', // 微信
                    'qq': '123456', // QQ
                    'email': '123@qq.com', // 邮箱
                    'occupation': '开发', // 联系人职位
                    'foundDate': '2019-02-02', // 公司成立时间
                    'scale': '100人', // 公司规模
                    'website': 'www.baidu.com', // 公司网址
                    'platformType': '流量平台', // 平台类型
                    'adType': '浮窗', // 广告形式
                    'charging': '千次展示', // 计费模式
                    'payType': 1, // 付款方式 1.预付 2.结算
                    'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
                    'flowType': '类型' // 采购流量类型
                    'abutmentType': '对接方式',
                    'quantity': '需求量级',
                    'monthAverage': 12.0, // 月均预算
                    'qps': 12, // QPS
                    'maxLoad': 10, // 最大承载量
                    'intentionMedie': '意向媒体举例',
                    'cooperation': '合作伙伴举例',
                    'demandDesc': '流量需求说明'
                    'busName' 商户名称
                    'contactName' 联系人名称
                    'cusName' 客户名称
                    'createdBy': '发动机', // 立项人
                }
            }
        }
    */

    /* 'title': '详情 直接广告'
        'url': 'api/confirmproject/ad_detail',
        'method': 'get',
        'params': {
            id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id': 1, // 0添加 非0编辑
                    'projectType': 1, // 所属项目
                    'cusName': 1, // 客户名称
                    'cusId': 1, // 客户id
                    'busiName': 1, // 所属商务
                    'contacts': '段兵宇', // 联系人
                    'tel': '17788212797', // 电话
                    'wx': 'ss', // 微信
                    'qq': '123456', // QQ
                    'email': '123@qq.com', // 邮箱
                    'occupation': '开发', // 联系人职位
                    'foundDate': '2019-02-02', // 公司成立时间
                    'scale': '100人', // 公司规模
                    'website': 'www.baidu.com', // 公司网址
                    'adType': '广告类型说明',
                    'productName': '产品名称',
                    'productUrl': '产品链接',
                    'charging': '计费模式',
                    'price': 12.00,
                    'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
                    'flowType': '采购流量类型',
                    'putAdType': '投放广告形式',
                    'quantity': '需求量级',
                    'monthAverage': 12, // 月均预算
                    'intentionMedie': '意向媒体举例',
                    'cooperation': '合作伙伴举例',
                    'flowDemandDesc': '流量需求说明',
                    'functionDemandDesc': '功能需求说明'
                    'busName' 商户名称
                    'contactName' 联系人名称
                    'cusName' 客户名称
                    'createdBy': '发动机', // 立项人
                }
            }
        }
    */

    /* 'title': '详情 SSP',
        'url': 'api/confirmproject/ssp_detail',
        'method': 'get',
        'params': {
            id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id': 1, // 0添加 非0编辑
                    'projectType': 1, // 所属项目
                    'cusName': 1, // 客户名称
                    'cusId': 1, // 客户id
                    'busiName': 1, // 所属商务
                    'contacts': '段兵宇', // 联系人
                    'tel': '17788212797', // 电话
                    'wx': 'ss', // 微信
                    'qq': '123456', // QQ
                    'email': '123@qq.com', // 邮箱
                    'occupation': '开发', // 联系人职位
                    'foundDate': '2019-02-02', // 公司成立时间
                    'scale': '100人', // 公司规模
                    'website': 'www.baidu.com', // 公司网址
                    'flowType': '流量类型',
                    'flowScale': '流量规模',
                    'charging': '计费模式',
                    'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
                    'expectPrice': 12, // 期望价格
                    'adModality': '广告形式',
                    'adType': '广告类型',
                    'cooperationType': '合作方式',
                    'adBlacklist': '广告黑名单',
                    'intentionMedie': '媒体举例',
                    'cooperation': '合作伙伴举例',
                    'DemandDesc': '其他需求说明'
                    'busName' 商户名称
                    'contactName' 联系人名称
                    'cusName' 客户名称
                    'createdBy': '发动机', // 立项人
                }
            }
        }
    */

    /* 'title': '详情 运营商',
        'url': 'api/confirmproject/operator_detail',
        'method': 'get',
        'params': {
            id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id': 1, // 0添加 非0编辑
                    'projectType': 1, // 所属项目
                    'cusName': 1, // 客户名称
                    'cusId': 1, // 客户id
                    'busiName': 1, // 所属商务
                    'contacts': '段兵宇', // 联系人
                    'tel': '17788212797', // 电话
                    'wx': 'ss', // 微信
                    'qq': '123456', // QQ
                    'email': '123@qq.com', // 邮箱
                    'occupation': '开发', // 联系人职位
                    'foundDate': '2019-02-02', // 公司成立时间
                    'scale': '100人', // 公司规模
                    'website': 'www.baidu.com', // 公司网址
                    'pcName': '机房名称',
                    'province': 100000, // 省
                    'city': 10000, // 市
                        'areaId': 10000, // 区
                    'address': '槐安路'
                    'userSum': 10, // 总用户数
                    'availableUser': 100, // 可供我方的用户数
                    'operatorName': '运营商',
                    'computerLevel': '机房级别',
                    'magnitude': '量级',
                    'computerCompetition': '机房竞品',
                    'shieldApp': '是否需要屏蔽APP',
                    'monthAverage': 12.0, // 期望月收益
                    'notBusiness': '不可做业务',
                    'DemandDesc': '其他需求说明'
                    'createdBy': '发动机', // 立项人
                }
            }
        }
    */

    /* 'title': '上线广告管理',
        'url': 'api/confirmproject/online_ad',
        'method': 'get',
        'params': {
            'begin': '2019-02-28',
            'end': '2019-02-28',
            'keyword': 'xx' // 投放渠道/广告类型/展现形式
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    id
                    'adNum': 'xxxxxx', // 广告编号
                    'adType': '广告类型',
                    'presentation': '展现形式',
                    'channel': '投放渠道',
                    'charging': '计费模式',
                    'chargingPrice': 12.00 // 计费单价
                    'putTime': '2018-01-01', // 投放时间
                    'endTime': '2019-01-03' // 结束时间
                }]
                'rowcount': 22
            }
        }
    */

    /* 'title': '下线获取审批人及抄送人',
        'url': 'api/confirmproject/get_user',
        'method': 'get',
        'params': {
            'id': '34' // 广告id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'users': [2,3,4]
            }
        }
    */

    /* 'title': '详情',
        'url': 'api/confirmproject/online_ad_detail',
        'method': 'get',
        'params': {
            'id': 1,
            'type': 1,若有此字段则id为流程id,若无则为广告id,维护流程驳回编辑时使用
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id': 1,
                    'adNum': 'xxxxxx', // 广告编号
                    'projectType': '项目组', // 所属项目
                    'cpNum': 'xxxx' // 所属立项编号
                    'cusName': '客户名称',
                    'busiName': '所属销售/媒介',
                    'settleType': 1, // 结算周期1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
                    'paymentType': 1, // 收款方式 0对公 1对私
                    'adType': '广告类型',
                    'charging': '计费模式',
                    'chargingPrice': 12.00, // 计费单价
                    'presentation': '展现形式',
                    'testDuration': 1, // 测试时长/天
                    'testMagnitude': 1, // 测试量级
                    'acccount'后台账号',
                    'password': '后台密码',
                    'putTime': '2018-01-01', // 投放时间
                    'channel': '投放渠道',
                    'endTime': '2018-01-01', // 结束时间
                    'onlineDesc': '上线说明',
                    'endDesc': '结束说明'
                }
            }
        }
    */

    /* 'title': '维护记录',
        'url': 'api/confirmproject/online_ad_log',
        'method': 'get',
        'params': {
            'id': 1,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'type': 3, // 1上线2下线3维护,
                    'updatedTime': '2019-10-22', // 维护时间
                    'userName': 'xxx', // 维护人
                    'adDesc': 'xxx', // 维护说明
                    'whChannel': 'xxx', // 维护投放渠道
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
                }]
            }
        }
    */

    /* 'title': '上线',
        'url': 'api/confirmproject/online_ad_begin',
        'method': 'post',
        'params': {
            'id': 1
            'adName': 'xxx',
            'putTime': '2019-03-01'
            'mark': '备注'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '下线',
        'url': 'api/confirmproject/online_ad_stop',
        'method': 'post',
        'params': {
            'id': 1
            'endTime': '2019-03-01'
            'endDesc': '结束说明'
            'users': [1,2,3]
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

    /* 'title': '销售人员下拉框',
        'url': 'api/confirmproject/business_staff',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 销售人员id
                    'userName': '百度', // 销售人员名称
                }]
            }
        }
    */

    /* 'title': '添加dsp立项',
        'url': 'api/confirmproject/medium_addDsp',
        'method': 'post',
        'params': {
            'id': 1, // 0添加 非0编辑
            'projectType': 1, // 所属项目
            'cusId': 1, // 客户id
            'busiId': 1, // 所属媒介
            'contacts': '段兵宇', // 联系人
            'tel': '17788212797', // 电话
            'wx': 'ss', // 微信
            'qq': '123456', // QQ
            'email': '123@qq.com', // 邮箱
            'occupation': '开发', // 联系人职位
            'foundDate': '2019-02-02', // 公司成立时间
            'scale': '100人', // 公司规模
            'flowType': 1, // 流量类型 1.pc端 2.移动端
            'channelProduct': 'FD', // 渠道产品
            'charging': '千次展示', // 计费模式
            'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
            'abutmentType': 'SDK', // 技术方式: 'API' 'SDK' 'JS' '直链' '图片'
            'quantity': '232', // 量级
            'forecastIncome': '232', // 预期收益
            'intentionAd': '发送到', // 意向广告需求
            'demandDesc': '发顺丰', // 广告需求说明
            'cooperation': '合作伙伴举例',
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 1成功0失败
            }
        }
    */

    /* 'title': '添加ssp立项
        'url': 'api/confirmproject/medium_addSsp',
        'method': 'post',
        'params': {
            'id': 1, // 0添加 非0编辑
            'projectType': 1, // 所属项目
            'cusId': 1, // 客户id
            'busiId': 1, // 所属媒介
            'contacts': '段兵宇', // 联系人
            'tel': '17788212797', // 电话
            'wx': 'ss', // 微信
            'qq': '123456', // QQ
            'email': '123@qq.com', // 邮箱
            'occupation': '开发', // 联系人职位
            'foundDate': '2019-02-02', // 公司成立时间
            'scale': '100人', // 公司规模
            'flowType': 1, // 流量类型 1.pc端 2.移动端
            'channelProduct': 'FD', // 渠道产品
            'charging': '千次展示', // 计费模式
            'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
            'abutmentType': 'SDK', // 技术方式: 'API' 'SDK' 'JS' '直链' '图片'
            'quantity': '232', // 量级
            'forecastIncome': '232', // 预期收益
            'intentionAd': '发送到', // 意向广告需求
            'demandDesc': '发顺丰', // 广告需求说明
            'cooperation': '合作伙伴举例',
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 1成功0失败
            }
        }
    */

    /* 'title': '添加op立项
        'url': 'api/confirmproject/medium_addOp',
        'method': 'post',
        'params': {
            'id': 1, // 0添加 非0编辑
            'projectType': 1, // 所属项目
            'cusId': 1, // 客户id
            'busiId': 1, // 所属媒介
            'contacts': '段兵宇', // 联系人
            'tel': '17788212797', // 电话
            'wx': 'ss', // 微信
            'qq': '123456', // QQ
            'email': '123@qq.com', // 邮箱
            'occupation': '开发', // 联系人职位
            'foundDate': '2019-02-02', // 公司成立时间
            'scale': '100人', // 公司规模
            'flowType': 1, // 流量类型 1.pc端 2.移动端
            'channelProduct': 'FD', // 渠道产品
            'charging': '千次展示', // 计费模式
            'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
            'abutmentType': 'SDK', // 技术方式: 'API' 'SDK' 'JS' '直链' '图片'
            'quantity': '232', // 量级
            'forecastIncome': '232', // 预期收益
            'intentionAd': '发送到', // 意向广告需求
            'demandDesc': '发顺丰', // 广告需求说明
            'cooperation': '合作伙伴举例',
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1 // 1成功0失败
            }
        }
    */

    /* 'title': '立项详情',
        'url': 'api/confirmproject/medium_detail',
        'method': 'get',
        'params': {
            id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'projectNumber': 'RLY-201910220001', // 立项编号
                    'projectType': 1, // 所属项目id
                    'projectName': '项目组', // 项目名称
                    'cusId': 1, // 客户id
                    'cusName': 1, // 客户名称
                    'mediumId': 1, // 所属媒介id
                    'mediumName': 1, // 所属媒介
                    'mediumType': 1, // 立项类型(广告需求类型) 1.DSP、ADN、网吧 3.SSP 4.OP
                    'contactName': '齐平', // 立项人
                    'contacts': '段兵宇', // 联系人
                    'tel': '17788212797', // 电话
                    'wx': 'ss', // 微信
                    'qq': '123456', // QQ
                    'email': '123@qq.com', // 邮箱
                    'occupation': '开发', // 联系人职位
                    'foundDate': '2019-02-02', // 公司成立时间
                    'scale': '100人', // 公司规模
                    'flowType': 1, // 流量类型 1.pc端 2.移动端
                    'channelProduct': 'FD', // 渠道产品
                    'charging': '千次展示', // 计费模式
                    'settleType': 1, // 结算周期 1：日结；2：周结；3：旬节；4：半月结；5：月结；6：两月结；7：三月结；8：半年结；9：年结
                    'abutmentType': 'SDK', // 技术方式: 'API' 'SDK' 'JS' '直链' '图片'
                    'quantity': '232', // 量级
                    'forecastIncome': '232', // 预期收益
                    'intentionAd': '发送到', // 意向广告需求
                    'cooperation': '合作伙伴举例',
                    'demandDesc': '发顺丰', // 广告需求说明
                }
            }
        }
    */

    /* 'title': '添加立项客户搜索下拉框',
        'url': 'api/confirmproject/customer',
        'method': 'get',
        'params': {
            'projectId': 1, // 所属项目id
            'name': '王朗', // 搜索人员名称
            'type': 1, // 客户类型： 1.渠道类型 2.广告主类型
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'cusName': '王宗金', // 客户名称
                    'cusId': 120, // 客户id
                }]
            }
        }
    */

    /* 'title': '媒介立项管理列表',
        'url': 'api/confirmproject/medium_list',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
            'mediumId': 1, // 所属媒介
            'projectNumber': '123', // 客户名称/立项编号
            'pageIndex': 1,
            'pageSize': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'projectNumber': 'sadfxxx123', // 立项编号
                    'cusName': '百度', // 客户名称
                    'businessType': '运营商', // 客户详细类型
                    'busiName': '段', // 所属媒介
                    'projectType': '加客', // 所属项目
                    'createdTime': '2018-12-01' // 立项日期
                    'createdBy': '发动机', // 立项人
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '媒介人员下拉框',
        'url': 'api/confirmproject/medium_staff',
        'method': 'get',
        'params': {
            'projectType': 1, // 所属项目
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 所属商务
                    'userName': '百度', // 商务名称
                }]
            }
        }
    */
