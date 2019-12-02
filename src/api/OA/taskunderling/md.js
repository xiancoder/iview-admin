

    /* 'title': '下属任务-列表,
        'url': '/api/taskunderling/all',
        'method': 'get',
        'params': {
            'taskPriority': 1, // 级别 0: 一般 1：重要 2：紧急 null: 全部
            'taskStatus': 1, // 状态 任务状态, 0: 待接受；1: 执行中；2: 待验收;3.验收通过；4.已废弃；5.已暂停 null: 全部
            'restart': 1, // 任务类型0普通 1返工 null: 全部
            'overdue': 1, // 逾期情况 1逾期 0未逾期 null: 全部
            'founder': 1, // 发布人 null: 全部
            'personLiable': 12, // 负责人 null: 全部
            'implement': 1, // 执行人 null: 全部
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
                    'restart': 1, // 反工次数
                    'overdue': 1 // 逾期天数
                    'pause': true // 是否暂停
                }]
            }
        }
    */