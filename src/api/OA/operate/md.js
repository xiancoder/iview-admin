
/* 'title': '获取运营人员'',
        'url': '/api/operate/operate_users',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 2, // 用户id
                    'name': 'xxx', // 用户名称
                }],
            }
        }
    */

/* 'title': '运营管理列表',
        'url': '/api/operate/operate_list',
        'method': 'get',
        'params': {
            'type': 0, // 0 预付 1.结算 2.保证金 3. 押金
            'begin': 2019-10-10,
            'end': 2019-10-10,
            'keyword': 'xxx'
            'pageIndex': 1,
            'pageSize': 15,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 2, // 款项编号
                    'logId': 43 // 认领编号
                    'claimDate': '2019-10-31', // 认领时间
                    'claim': '52', // 认领金额
                    'adTypeName': 'xxx', // 广告类型名称
                    'adName': 'xxx', // 产品名称
                    'cusName': 'xxx', // 客户名称
                    'begin': '2019-10-10', // 开始日期
                    'end': '2019-10-11', // 结束日期
                    'billBegin': '2019-10-10', // 账单周期开始,类型为结算时有值
                    'billEnd': '2019-10-11', // 账单周期结束,类型为结算时有值
                    'typeName': 'xxx', // 类型名称
                    'userName': 'xxx', // 所属销售
                }],
                'rowcount': 92, // 总条数
            }
        }
    */

/* 'title': '设置预算',
        'title': '设置预算',
        'url': '/api/operate/budget_set',
        'method': 'post',
        'params': {
            'logId': 345, // 认领id
            'claimTotal': 345, // 设置认领金额
            'expend': 30, // 已消耗金额
            'dayExpendmin': 30, // 日均消耗min
            'dayExpendmax': 50, // 日均消耗max
            'dayExpendavg': 40 // 日均消耗avg
            'days': 9 // 预估天数
            'end': '2019-11-23' // 预估最后续费日
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '获取设置预算',
        'url': '/api/operate/budget_get',
        'method': 'get',
        'params': {
            'logId': 2, // 认领id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'logId': 345, // 认领id
                    'claimTotal': '345', // 设置认领金额
                    'expend': '305', // 已消耗金额
                    'dayExpendmin': '30', // 日均消耗min
                    'dayExpendmax': '50', // 日均消耗max
                    'dayExpendavg': '40' // 日均消耗avg
                    'days': '9' // 预估天数
                    'end': '2019-11-23' // 预估最后续费日
                }
            }
        }
    */
