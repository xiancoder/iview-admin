

    /* 'title': '所有任务-列表',
        'url': '/api/task/myfound',
        'method': 'get',
        'params': {
            'taskPriority': 1, // 级别 0: 一般 1：重要 2：紧急
            'taskStatus': 1, // 状态 任务状态, 0: 待接受；1: 执行中；2: 待验收;3.验收通过；4.已废弃；5.已暂停
            'restart': 1, // 任务类型0普通 1返工
            'overdue': 1, // 逾期情况 1逾期 0未逾期
            'personLiable': 12, // 负责人
            'implement': 1, // 执行人
            'begin': '2018-11-23', // 开始时间
            'end': '2018-11-23', // 结束时间
            'taskName': 'sdf', // 任务名称
            'pause': 1, // 是否暂停 null: 全部 0: 正常；1: 暂停
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 任务id
                    'taskNumber', // 任务编号
                    'taskName', // 任务名称
                    'founder': 'ddd', // 发布人
                    'foundTime', // 发布日期
                    'taskContent', // 负责人
                    'completeTime': '2018-11-26', // 计划完成日期
                    'taskPriority': '紧急', // 优先级
                    'taskStatus': '执行中', // 状态
                    'restart': 1, // 反工次数
                    'overdue': 1 // 逾期天数
                    'pause': true // 是否暂停
                }]
            }
        }
    */

    /* 'title': '任务重启详情',
        'url': '/api/task/restartdetail',
        'method': 'get',
        'params': {
            'taskId': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: {
                    'taskName': '任务名称',
                    'taskFounder': '发布人',
                    'taskPriority': 1, // 级别 0: 一般 1：重要 2：紧急
                    'taskContent': '任务内容',
                    'personLiable': {'userId': 1,'userName': 'xxx'}, // 负责人
                    'correlation': [{'userId': 1,'userName': 'xxx'}] // 抄送人
                    'completeTime': '2018-11-27' // 完成时间
                }
            }
        }
    */

    /* 'title': '发布任务',
        'url': '/api/task/found',
        'method': 'post',
        'params': {
            'id': 1 // null为发布
            'taskName': '任务名称',
            'taskPriority': 1, // 级别 0: 一般 1：重要 2：紧急
            'taskContent': '任务内容',
            file: file, // 文件
            file: file, // 文件
            'personLiable': 1, // 负责人
            'correlation': '1,2,3' // 抄送人
            'completeTime': '2018-11-27' // 完成时间
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '重启任务',
        'url': '/api/task/restartSpecial',
        'method': 'post',
        'params': {
            'id': 1 // null为发布
            'taskPriority': 1, // 级别 0: 一般 1：重要 2：紧急
            'personLiable': 1, // 负责人
            'correlation': [1,2,3] // 抄送人
            'completeTime': '2018-11-27' // 完成时间
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '普通重启',
        'url': '/api/task/restart',
        'method': 'get',
        'params': {
            'id': 1 // 任务id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '富文本编辑框上传图片-暂时不用',
        'url': '/api/task/uploadimg',
        'method': 'get',
        'params': {
            'file': file
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                path: 'xxxxx.jpg'
            }
        }
    */

    /* 'title': '发布人编辑',
        'url': '/api/task/founderedit',
        'method': 'post',
        'params': {
            'taskId': 1, // 任务id
            'correlation': [{ 'value': id, 'label': 'name' }], // 抄送人id
            'entime': '2018-11-26'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '追加需求',
        'url': '/api/task/addneed',
        'method': 'post',
        'params': {
            'id': 1, // 任务id
            file: file, // 文件
            'taskAddContent': '追加任务内容'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '废弃任务',
        'url': '/api/task/giveup',
        'method': 'HttpPost',
        'params': {
            'taskId': 1 // 任务id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '删除',
        'url': '/api/task/delete',
        'method': 'HttpPost',
        'params': {
            'taskId': 1 // 任务id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '暂停/恢复',
        'url': '/api/task/setpause',
        'method': 'post',
        'params': {
            'taskId': 1 // 任务id
            'isSuspend': 1 // 0回复 1暂停
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1成功,0失败,-1非法操作
            }
        }
    */

    /* 'title': '恢复',
        'url': '/api/task/recover',
        'method': 'post',
        'params': {
            'taskId': 1 // 任务id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1成功,0失败,-1非法操作
            }
        }
    */

    /* 'title': '验收通过',
        'url': '/api/task/checkpass',
        'method': 'HttpPost',
        'params': {
            'taskId': 1 // 任务id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '我负责的任务-列表',
        'url': '/api/task/myown',
        'method': 'get',
        'params': {
            'taskPriority': 1, // 级别 0: 一般 1：重要 2：紧急
            'taskStatus': 1, // 状态 任务状态, 0: 待接受；1: 执行中；2: 待验收;3.验收通过；4.已废弃；5.已暂停
            'restart': 1, // 任务类型0普通 1返工
            'overdue': 1, // 逾期情况 1逾期 0未逾期
            'founder': 1, // 发布人
            'implement': 1, // 执行人
            'begin': '2018-11-23', // 开始时间
            'end': '2018-11-23', // 结束时间
            'taskName': 'sdf', // 任务名称
            'pause': 1, // 是否暂停 null: 全部 0: 正常；1: 暂停
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 任务id
                    'taskNumber' // 任务编号
                    'taskName' // 任务名称
                    'founder': 'ddd' // 发布人
                    'foundTime' // 发布日期
                    'personLiable' // 负责人
                    'completeTime': '2018-11-26', // 计划完成日期
                    'taskPriority': '紧急' // 优先级
                    'taskStatus': '执行中' // 状态
                    'restart': 1 // 反工次数
                    'overdue': 1 // 逾期天数
                    'pause': true // 是否暂停
                }]
            }
        }
    */

    /* 'title': '任务变更负责人',
        'url': '/api/task/changeleader',
        'method': 'post',
        'params': {
            'taskId': 1 // 任务id
            'userId': 1
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '负责人接受任务',
        'url': '/api/task/accept',
        'method': 'post',
        'params': {
            'taskId': 1 // 任务id
            'entime': '2108-11-23' // 完成日期
            'implement': [{ 'value': id, 'label': 'name' }], // 执行人id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '任务执行中编辑',
        'url': '/api/task/change',
        'method': 'post',
        'params': {
            'taskId': 1 // 任务id
            'personLiable': 1, // 负责人id
            'implement': [{ 'value': id, 'label': 'name' }], // 执行人id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '负责人提交验收',
        'url': '/api/task/commit',
        'method': 'get',
        'params': {
            'taskId': 1 // 任务id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '我执行的任务-列表',
        'url': '/api/task/myexe',
        'method': 'get',
        'params': {
            'taskPriority': 1, // 级别 0: 一般 1：重要 2：紧急
            'taskStatus': 1, // 状态 任务状态, 0: 待接受；1: 执行中；2: 待验收;3.验收通过；4.已废弃；5.已暂停
            'restart': 1, // 任务类型0普通 1返工
            'overdue': 1, // 逾期情况 1逾期 0未逾期
            'founder': 1, // 发布人
            'personLiable': 12, // 负责人
            'begin': '2018-11-23', // 开始时间
            'end': '2018-11-23', // 结束时间
            'taskName': 'sdf', // 任务名称
            'pause': 1, // 是否暂停 null: 全部 0: 正常；1: 暂停
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 任务id
                    'taskNumber' // 任务编号
                    'taskName' // 任务名称
                    'founder': 'ddd' // 发布人
                    'foundTime' // 发布日期
                    'personLiable' // 负责人
                    'completeTime': '2018-11-26', // 计划完成日期
                    'taskPriority': '紧急' // 优先级
                    'taskStatus': '执行中' // 状态
                    'restart': 1 // 反工次数
                    'overdue': 1 // 逾期天数
                    'pause': true // 是否暂停
                }]
            }
        }
    */

    /* 'title': '抄送我的任务-列表',
        'url': '/api/task/aboutme',
        'method': 'get',
        'params': {
            'taskPriority': 1, // 级别 0: 一般 1：重要 2：紧急
            'taskStatus': 1, // 状态 任务状态, 0: 待接受；1: 执行中；2: 待验收;3.验收通过；4.已废弃；5.已暂停
            'restart': 1, // 任务类型0普通 1返工
            'overdue': 1, // 逾期情况 1逾期 0未逾期
            'founder': 1, // 发布人
            'personLiable': 12, // 负责人
            'implement': 1, // 执行人
            'begin': '2018-11-23', // 开始时间
            'end': '2018-11-23', // 结束时间
            'taskName': 'sdf', // 任务名称
            'pause': 1, // 是否暂停 null: 全部 0: 正常；1: 暂停
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // 任务id
                    'taskNumber' // 任务编号
                    'taskName' // 任务名称
                    'founder': 'ddd' // 发布人
                    'foundTime' // 发布日期
                    'personLiable' // 负责人
                    'completeTime': '2018-11-26', // 计划完成日期
                    'taskPriority': '紧急' // 优先级
                    'taskStatus': '执行中' // 状态
                    'restart': 1 // 反工次数
                    'overdue': 1 // 逾期天数
                    'pause': true // 是否暂停
                }]
            }
        }
    */

    /* 'title': '添加评论',
        'url': '/api/task/discussadd',
        'method': 'post',
        'params': {
            'taskId': 1 // 任务id
            'content': '评论内容'
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1
            }
        }
    */

    /* 'title': '任务详情',
        'url': '/api/task/detail',
        'method': 'get',
        'params': {
            'taskId': 1 // 任务id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: {
                    'id': 1, // 任务id
                    'taskNumber' // 任务编号
                    'taskName' // 任务名称
                    'founder': 'ddd' // 发布人
                    'foundTime' // 发布日期
                    'personLiable' // 负责人
                    'correlation': [{'userId': 1,'userName': 'duan'}], // 抄送人
                    'implement': [{{'userId': 1,'userName': 'duan'}}], // 执行人
                    'completeTime': '2018-11-26', // 计划完成日期
                    'taskPriority': '紧急', // 优先级
                    'taskStatus': '执行中', // 状态
                    'task_content': [{
                        'id': 1,
                        'taskContent': '任务内容',
                        'taskEnclosure': [
                            'path': '附件路径'
                            ]
                        }],
                    'pause': 1 // 是否暂停 1暂停 0正常
                    'role': [1,2,3] // 角色 1 发布人 2负责人 3执行人
                }
            }
        }
    */

    /* 'title': '任务轨迹',
        'url': '/api/task/tasklog',
        'method': 'get',
        'params': {
            'taskId': 1 // 任务id
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'type': 1, // 0: 记录 1：评论
                    'userName': '记录人',
                    'createdTime': '2018-11-26 HH: mm',
                    'content': '记录内容'
                }],
                'rowcount': 22
            }
        }
    */

    /* 'title': '用户下拉框',
        'url': '/api/task/users',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [
                    'userId': 1,
                    'userName': '姓名'
                }]
            }
        }
    */
