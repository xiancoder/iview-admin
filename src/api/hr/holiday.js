import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title':'人事管理-节假日-编辑',
        'url':'/api/hr/holiday_edit',
        'method': 'post',
        'params':{
            'id':1,//0添加
            'name':'元旦',
            'begin':'2019-01-01',
            'end':'2019-01-03',
            'attendanceDates':['2019-10-01','2019-10-03'], //计入出勤的时间
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1
             }
        }
    */
    edit ({
        id,
        name,
        begin,
        end,
        attendanceDates
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/holiday_exception_edit',
                data: {
                    id,
                    name,
                    begin,
                    end,
                    attendanceDates
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

    /* 'title':'人事管理-节假日-例外工作日编辑',
        'url':'/api/hr/holiday_exception_edit',
        'method': 'post',
        'params':{
            'id':1,//0添加
            'name':'元旦',
            'begin':'2019-01-01 12：11',
            'end':'2019-01-03  12：11'
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1
             }
        }
    */
    editException ({
        id,
        name,
        begin,
        end
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/holiday_exception_edit',
                data: {
                    id,
                    name,
                    begin,
                    end
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

    /* 'title':'人事管理-节假日-列表',
        'url':'/api/hr/holiday_list',
        'method': 'get',
        'params':{},
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'holiday':[{
                    'id':1,
                    'name':'元旦',
                    'begin':'2019-04-10',
                    'end':'2019-04-10',
                    'attendanceDates':['2019-10-01','2019-10-03'], //计入出勤的时间
                }],
                'exception':[{
                    'id':1,
                    'name':'元旦',
                    'begin':'2019-04-10',
                    'end':'2019-04-10',
                    'workhour':1
                }]
            }
        }
    */
    list () {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/holiday_list',
                data: { }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) { // 两个有效内容
                    resolve(res.data)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-节假日-删除',
        'url':'/api/hr/holiday_del',
        'method': 'get',
        'params':{
            'id':1,
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':1
             }
        }
    */
    del ({ id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: '/api/hr/holiday_del',
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

    end: 'api' // 防呆设计
}
