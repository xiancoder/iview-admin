
/* 'title': '登陆 ',
        'url': '/api/system/login',
        'method': 'post',
        'params': {
            'userName': 'sss',
            'pwd': 'sss'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0 // 1成功 0失败
                }
            }
        }
    */

/* 'title': '登录用户信息 ',
        'url': '/api/system/login_user',
        'method': 'post',
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'userId': 1,
                'userName': 'ss' // 用户名称
                'userPhoto': '' // 头像
                'accountManager': 1 // 是否账号管理员
                }
            }
        }
    */

/* 'title': '退出',
        'url': '/api/system/loginout',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0 // 1成功 0失败
                }
            }
        }
    */

/* 'title': '移除全部缓存',
        'url': '/api/system/remove_all_cache',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0 // 1成功 0失败
                }
            }
        }
    */

/* 'title': '获取菜单',
        'url': '/api/system/menulist',
        'method': 'get',
        'params': {
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
            listMenu: // 左侧菜单权限
            [{
                'auth_id': 11, // 权限id
                'auth_name': '终端报表', // 权限名称
                'children': [
                    {auth_id: 1,name: '客户管理设置'},
                    {auth_id: 2,name: '角色设置',},
                    {auth_id: 1,name: '权限设置',}
                ] // 子菜单数组,无子菜单则返回空数组
            }],
            listPage: // 页面权限
            [{
                'auth_id': 11, // 权限id
                'auth_name': '终端报表', // 权限名称
            }]
            }
        }
    */

/* 'title': '操作日志-操作类型下拉框',
        'url': '/api/system/operate_type',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'typeId': 1,
                    'typeName': 'nsms'
                }],
                'rowcount': 22
            }
        }
    */

/* 'title': '操作日志',
        'url': '/api/system/operate',
        'method': 'get',
        'params': {
            'begin': '2018-09-12',
            'end': '2018-09-12',
            'user_id': 1, // null全部用户
            'page_index': 1,
            'page_size': 30,
            'opType': 1010 // null不限制
            'siteType': 1 // null 不限制,网站类型（0：pc;1: wap 移动）
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'email': '1234567@11.com',
                    'userName': 'U1',
                    'id': 1,
                    'opType': '系统设置-角色设置',
                    'siteType': 'pc'
                    'opContents': '{\'Id\': 0,\'roleName\': \'duantest\',\'roleSet\': [{\'sysId\': 0,\'rightIds\': [5,6,7,8,9]}]}',
                    'opAt': '2018-09-18T17: 18: 08.113',
                    'opBy': 0
                }],
                'rowcount': 22
            }
        }
    */

/* 'title': '获取所有用户下拉框 操作日志',
        'url': '/api/system/getalluser',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'userName': 'duan'
                }],
                'rowcount': 22
            }
        }
    */

/* 'title': '系统设置-客户管理设置-获取',
        'url': '/api/system/getcustomer',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'result': [{
                'prjectId': 1, // 项目Id,0：项目组,1：云袭广告,2：加客
                'prjectName': '加客'
                'noRecordDays': 1, // 无跟进记录天数
                'noDealDays': 1, // 未完成合作天数
                'maxNoDealCust': 1, // 最多未成交客户
                'maxPublicCustPerDay': 1 // 一天最多领取公海客户个数
            }]}
        }
    */

/* 'title': '系统设置-客户管理设置-保存',
        'url': '/api/system/setcustomer',
        'method': 'post',
        'params': {
            'prjectId': 1, // 项目Id,0：项目组,1：云袭广告,2：加客
            'noRecordDays': 1, // 无跟进记录天数
            'noDealDays': 1, // 未完成合作天数
            'maxNoDealCust': 1, // 最多未成交客户
            'maxPublicCustPerDay': 1 // 一天最多领取公海客户个数
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
            }
        }
    */

/* 'title': '款项认领设置',
        'url': '/api/system/operate_set',
        'method': 'post',
        'params': {
            'userId': [2,6], // 员工id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '款项认领设置详情',
        'url': '/api/system/operate_get',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'userId': [54,76]
            }
        }
    */

/* 'title': '系统设置-角色设置-搜索',
        'url': '/api/system/rolelist',
        'method': 'get',
        'params': {
            'roleName': 'ss', // 角色名称,null全部
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': [{
                'id': 1,
                'roleName': 'ss' // 角色名称
                }
            ]
        }
    */

/* 'title': '系统设置-角色设置-添加or编辑',
        'url': '/api/system/roleedit',
        'method': 'post',
        'params': {
            'Id': 1, // null为添加
            'roleName': 'ss', // 角色名称
            'roleSet'[{
                'sysId': 0, // pc端
                'rightIds': [123,111,222]
            },{
                'sysId': 1, // 移动端
                'rightIds': [123,111,222]
                }
            ]
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
            }
        }
    */

/* 'title': '系统设置-角色设置-详情',
        'url': '/api/system/roledetail',
        'method': 'get',
        'params': {
            'Id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'Id': 1, // null为添加
                'roleName': 'ss', // 角色名称
                'roleSet'[{
                    'sysId': 0, // pc端
                    'rights': [{'id': 123,'rightName': '权限'}],
                    'norights': [{'id': 123,'rightName': '权限'}]
                },{
                    'sysId': 1, // 移动端
                    'rights': [{'id': 123,'rightName': '权限'}],
                    'norights': [{'id': 123,'rightName': '权限'}]
                }]
            }
        }
    */

/* 'title': '权限设置-搜索角色设置没有的权限 ',
        'url': '/api/system/rightlistno',
        'method': 'get',
        'params': {
            'roleId': 1 // null添加,其他修改
            'sysId': 1, // 系统Id,0: PC端, 1: 移动端,null为不限制
            'rightType': 0, // 权限类型,0: 菜单权限, 1: 独立权限,2: 页面权限,null为不限制
            'rightName': 'sdfs', // 权限名称
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                list: [{
                    'id': 1
                    'rightName': 'sdf',
                    'sysId': 1,
                    'rightType': 1,
                }],
                'rowcount': 20
            }
        }
    */

/* 'title': '权限设置-搜索 ',
        'url': '/api/system/rightlist',
        'method': 'get',
        'params': {
            'sysId': 1, // 系统Id,0: PC端, 1: 移动端,null为不限制
            'rightType': 0, // 权限类型,0: 菜单权限, 1: 独立权限,null为不限制
            'rightName': 'sdfs', // 权限名称
            'page_index': 1, // -1为全部
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                list: [{
                    'id': 1
                    'rightName': 'sdf',
                    'sysId': 1,
                    'rightType': 1,
                    'action': 'sdf'
                    }
                ],
                'rowcount': 20
            }
        }
    */

/* 'title': '权限设置-添加or编辑 ',
        'url': '/api/system/rightedit',
        'method': 'post',
        'params': {
            'id': 1 // 0为添加
            'rightName': 'sdf', // 权限名称
            'sysId': 1, // 系统Id,0: PC端, 1: 移动端
            'rightType': 1, // 权限类型,0: 菜单权限, 1: 独立权限,2: 页面权限
            'action': 'sdf' // 操作action
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
                }
            }
        }
    */

/* 'title': '权限设置-详情 ',
        'url': '/api/system/rightdetail',
        'method': 'get',
        'params': {
            'id': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'id': 1
                'rightName': 'sdf', // 权限名称
                'sysId': 1, // 系统Id,0: PC端, 1: 移动端
                'rightType': 1, // 权限类型,0: 菜单权限, 1: 独立权限,2: 页面权限
                'action': 'sdf' // 操作action
                }
            }
        }
    */

/* 'title': '修改密码 ',
        'url': '/api/system/pwd_modify',
        'method': 'post',
        'params': {
            'oldPwd': '13013265487' // 旧密码
            'newPwd': '5487' // 新密码
            'affirmPwd': '5487' // 确认密码
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
            }
        }
    */

/* 'title': '修改密码 ',
        'url': '/api/system/suggest
        'method': 'post',
        'params': {
                'type': 1 // 1功能建议,2用户体验,3页面设计,4其他
                'content': '5487' // 建议
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
            }
        }
    */
