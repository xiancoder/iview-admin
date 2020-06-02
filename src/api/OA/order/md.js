
/* 'title': '人员和组列表',
        'url': '/api/order/user_list',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'onlyId': 1, // 数据标识
                    'id': 2, // 员工或组id
                    'name': '项目组项目组', // 员工或组名
                    'type': 0 // 0员工1组
                }]
            }
        }
    */

/* 'title': '获取附件路径',
        'url': '/api/order/file_url',
        'method': 'post',
        'params': {
            'file': file
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'url': 'xxxx.doc'
            }
        }
    */

/* 'title': '发布工单',
        'url': '/api/order/edit',
        'method': 'post',
        'params': {
            'id': 1, // 0为新工单
            'isBack': 0, // 0发布1草稿
            'receiver': [{'id': 1, 'type': 0, 'name': 'xxx'},{'id': 2, 'type': 1, 'name': 'xxx'}], // 接收人 type: 0员工1组 下同
            'correlation': [{'id': 1, 'type': 0, 'name': 'xxx'},{'id': 2, 'type': 1, 'name': 'xxx'}], // 抄送人
            'workName': '工单名称',
            'workType': 1, // 类型 1: 工作 2：周报日报 3：通知公告 4：温馨提示
            'workContent': '任务内容', // base64
            'workEnclosure': ['xxxx.doc','xxxx.exe'] // 附件
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '工单详情-编辑',
        'url': '/api/order/info_edit',
        'method': 'get',
        'params': {
            'id': 13
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'receiver': [{'id': 98, 'type': 0, 'name': '李小坡'}], // type: 0员工1组 下同
                    'correlation': [{'id': 22, 'type': 1, 'name': '项目组'}]
                    'workName': '工单名称',
                    'workType': 1, // 类型 1: 工作 2：周报日报 3：通知公告 4：温馨提示
                    'workContent': '任务内容', // base64
                    'workEnclosure': ['xxxx.doc','xxxx.exe'] // 附件
                }
            }
        }
    */

/* 'title': '回复工单',
        'url': '/api/order/reply',
        'method': 'post',
        'params': {
            'id': 11, // 工单id
            'content': '回复内容',
            'enclosure': ['xxxx.doc','xxxx.exe'] // 附件
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id': 3, // 回复id
                    'name: '黄工', // 回复人
                    'date': '2019-10-08 10: 20', // 回复时间
                },
                'res': 1
            }
        }
    */

/* 'title': '工单列表 已发工单列表',
        'url': '/api/order/order_list',
        'method': 'get',
        'params': {
            'type': 1, // 1 已发工单 2.已收工单 3.草稿箱 4. 已结单
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
                list: [{
                    'id': 2, // 工单id
                    'sendName': '张大', // 发送人
                    'listName': [黄工、李茂], // 接收人
                    'workType': 1, // 工单类型 1 工作 2 日报周报 3 通知公告 4：温馨提示
                    'workName': '福建省', // 工单名称
                    'workContent': '富士康减肥', // 工单内容
                    'createdTimeStr': '2019-10-10', // 发布时间
                    'repleName': '黄工', // 最新回复人员名称
                    'updatedTimeStr': '2019-10-10', // 回复时间
                }],
                rowcount: 92, // 总条数
            }
        }
    */

/* 'title': '工单详情',
        'url': '/api/order/order_info',
        'method': 'get',
        'params': {
            'id': 2,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                info: {
                    'workName': '福建省', // 工单名称
                    'workType': 1, // 类型 1: 工作 2：周报日报 3：通知公告 4：温馨提示
                    'founderName': '黄工', // 发布人
                    'date': '2019-10-09 12: 10', // 发布时间
                    'receiver': [黄工、李茂], // 接收人
                    'correlation': [附件、发送], // 抄送人用、隔开
                    'workContent': '尖峰时刻打两份', // 工单内容(富文本框)
                    'workEnclosure': ['/file/task/3128/file/6679_oa建议和学习.xlsx','/file/task/3128/file/6679_oa建议和学习.xlsx'], // 附件
                    'workStatus': 0, // 是否已结单 0 1
                },
                'reply': [{
                    'id': 3, // 回复id
                    'isBack': 1, // 是否已撤回 1 0
                    'canBack': 1,是否能撤回 1 0
                    'name: '黄工', // 回复人
                    'date': '2019-10-08 10: 20', // 回复时间
                    'workContent': '肩关节交摊位图', // 回复内容（普遍文本框）
                    'workEnclosure': ['/file/task/3128/file/6679_oa建议和学习.xlsx','/file/task/3128/file/6679_oa建议和学习.xlsx'], // 附件
                }]
            }
        }
    */

/* 'title': '工单阅读状态',
        'url': '/api/order/read_list',
        'method': 'get',
        'params': {
            'id': 'xxx', // 工单id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                list: [{
                    'name': 2, // 阅读人
                    'date': '09-10 10: 30', // 阅读时间
                    'isRead': 1, // 1 已读 0 未读
                }]
            }
        }
    */

/* 'title': '结单',
        'url': '/api/order/closure',
        'method': 'post',
        'params': {
            'id': 2, // 工单id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
            }
        }
    */

/* 'title': '草稿箱删除 回复撤回',
        'url': '/api/order/order_delete',
        'method': 'post',
        'params': {
            'id': 2,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
            }
        }
    */

/* 'title': '下属工单列表',
        'url': '/api/order/order_sub_list',
        'method': 'get',
        'params': {
            'begin': 2019-10-10,
            'end': 2019-10-10,
            'keyWord': 'xxx',
            'workStatus': 1, // -1 全部 0 未完结 1 已完结
            'pageIndex': 1,
            'pageSize': 15,
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                list: [{
                    'id': 2, // 工单id
                    'sendName': '黄工', // 发布人
                    'listName': [黄工、李茂], // 接收人
                    'workType': 1, // 工单类型 1 工作 2 日报周报 3 通知公告
                    'workName': '福建省', // 工单名称
                    'workContent': '富士康减肥', // 工单内容
                    'createdTimeStr': '2019-10-10', // 发布时间
                    'updatedTimeStr': '2019-10-10', // 回复时间
                    'repleName': '黄工', // 最新回复人员名称
                }],
                rowcount: 92, // 总条数
            }
        }
    */

/* 'title': '回复撤回',
        'url': '/api/order/recall',
        'method': 'post',
        'params': {
            'id': 2, // 回复id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 0, // 1成功 0失败
            }
        }
    */

/* 'title': '组查看列表',
        'url': '/api/order/group_list',
        'method': 'get',
        'params': {
            'keyword': 'xxxx' // 组名称、组成员
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 35, // 组id
                    'groupName': '组名称',
                    'userName': '李小坡,李漫漫', // 组员姓名
                    'isPublic': 1 // 1公共组0非公共组
                }]
            }
        }
    */

/* 'title': '组管理列表',
        'url': '/api/order/group_list_manager',
        'method': 'get',
        'params': {
            'keyword': 'xxxx' // 组名称、组成员
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 35, // 组id
                    'groupName': '组名称',
                    'userName': '李小坡,李漫漫', // 组员姓名
                    'isPublic': 1 // 1公共组0非公共组
                }]
            }
        }
    */

/* 'title': '获取当前用户角色',
        'url': '/api/order/role',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'isPersonnel ': true // 登录用户是人事角色
            }
        }
    */

/* 'title': '组添加编辑',
        'url': '/api/order/group_edit',
        'method': 'post',
        'params': {
            'id': 0, // 0添加
            'groupName': '组名称',
            'userId': [1,2,3], // 组员id
            'isPublic': 1,
            'whoCanUse': 1, // 1全部2组内3额外
            'otherUser': [3,4,5] // 额外人员
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */

/* 'title': '获取当前组树',
        'url': '/api/order/group_tree',
        'method': 'get',
        'params': {
            'groupId': 24 // 组id,0为添加
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'departments ': [{
                    'title': 'xxx', // 节点名
                    'id': 45, // 部门id
                    'userId': 76, // 人员id
                    'type': 1, // 1部门2人员
                    'expand': true, // 是否展开
                    'checked': true // 是否选中
                    'children': [{}] // 子节点
                }]
            }
        }
    */

/* 'title': '组编辑详情',
        'url': '/api/order/group_info',
        'method': 'get',
        'params': {
            'id': 24
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': {
                    'id': 24,
                    'groupName': '组名称',
                    'isPublic': 1 // 1公共组0非公共组
                    'whoCanUse': 1, // 1全部2组内3额外
                    'otherUser': [3,4,5] // 额外人员
                }
            }
        }
    */

/* 'title': '组删除',
        'url': '/api/order/group_delete',
        'method': 'post',
        'params': {
            'id': 24,
            'isPublic': 1 // 1公共组0非公共组
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res': 1
            }
        }
    */
