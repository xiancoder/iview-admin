import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title':'人事管理-账号-添加/编辑',
        'url':'/api/hr/account_add',
        'method': 'post',
        'params':{
            'type_id':1,//账号类型
            'account_name':'sdf'//账号名
            'user_id':1
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1//1成功0失败
             }
        }
    */
    edit ({ type_id, account_name, user_id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/account_add',
                data: {
                    type_id,
                    account_name,
                    user_id
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve(res.data.res)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-账号-列表',
        'url':'/api/hr/account_list',
        'method': 'get',
        'params':{
            'userId':1
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                list:[{
                    'id':1,
                    'updatedTimeStr':'2018-12-06 12:00:00'//更新时间
                    'type':'GIT账号',//账号类型
                    'account_name':'账号名'
                    'principal':'负责人'
                }]
             }
        }
    */
    list ({ userId }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/account_list',
                data: {
                    userId
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.list) {
                    resolve(res.data.list)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-账号-轨迹日志',
        'url':'/api/hr/account_log',
        'method': 'get',
        'params':{
            'userId':1
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                list:[{
                    'id':1,
                    'createdTimeStr':'2018-12-06 12:00:00'//更新时间
                    'content':'添加账号'
                }]
             }
        }
    */
    listLog ({ userId }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/account_log',
                data: {
                    userId
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.list) {
                    resolve(res.data.list)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-账号-删除',
        'url':'/api/hr/account_del',
        'method': 'get',
        'params':{
            'id':1
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1//1成功0失败
             }
        }
    */
    del ({ id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: '/api/hr/account_del',
                data: { id }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve(res.data.res)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-账号-类型下拉框',
        'url':'/api/hr/account_type',
        'method': 'get',
        'params':{},
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                list:[{
                    'type_id':1,
                    'type_name':'ss'
                }]
             }
        }
    */
    pulltype () {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: '/api/hr/account_type',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.list) {
                    resolve(res.data.list)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    end: 'api' // 防呆设计
}
