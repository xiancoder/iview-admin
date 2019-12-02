
    /* 'title': '消息列表',
        'url': '/api/message/list',
        'method': 'get',
        'params': {
            'begin': '2018-11-28' // 开始日期
            'end': '2018-11-28' // 开始日期
            'megTitel': '标题'
            'page_index': 1,
            'page_size': 30
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1,
                    'megTitel': 'aa',
                    'createdTime': '2018-11-28 00: 00: 00',
                    'msgContent': '1'
                    'pcJumpUrl': 'pc跳转路径'
                    'appJumpUrl': 'app跳转路径'
                    'x.isRead': true // 是否阅读
                }]
            }
        }
    */

    /* 'title': '是否有新的消息',
        'url': '/api/message/have',
        'method': 'get',
        'params': {},
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1有 0没有
            }
        }
    */

    /* 'title': '已读改状态',
        'url': '/api/message/readed',
        'method': 'get',
        'params': {
            id: 1 // 消息id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                res: 1 // 1成功 0失败
            }
        }
    */