// import axios from 'axios' // http请求库
// import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title':'人事管理-抄送人配置-添加',
        'url':'/api/hr/cc_setting_edit',
        'method': 'post',
        'params':{
                'id':0,//主键id，0为添加，其他为编辑
                'name': 'xxx',//抄送人配置名称
                'userId': [1,2,3]//抄送人id
            },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1,//1 成功, 0 失败
             }
        }
    */

    /* 'title':'人事管理-抄送人配置-列表',
        'url':'/api/hr/cc_setting_list',
        'method': 'get',
        'params':{ },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'id': 4 //抄送人配置id
                    'name':'xxx',//抄送人配置名称
                    'userName':['aaa','bbb','ccc'],//抄送人姓名
                }],
            }
        }
    */

    /* 'title':'人事管理-抄送人配置-详情',
        'url':'/api/hr/cc_setting_info',
        'method': 'get',
        'params':{
            'id': 4 //抄送人配置id
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'info':{
                    'id': 4 //抄送人配置id
                    'name':'xxx',//抄送人配置名称
                    'userId':[1,2,3],//抄送人id数组
                },
             }
        }
    */

    /* 'title':'人事管理-抄送人配置-删除',
        'url':'/api/hr/cc_setting_delete',
        'method': 'post',
        'params':{
            'id':0,//抄送人配置id
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1,//1 成功, 0 失败
             }
        }
    */

    end: 'api' // 防呆设计
}
