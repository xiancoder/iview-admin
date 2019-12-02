import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title':'人事管理-部门-添加or编辑',
        'url':'/api/hr/departmentedit',
        'method': 'post',
        'params':{
            'id':1, // 0添加
            'parentId':2, // 0为根 编辑时为null
            'name':'某某某'
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':0, // 1成功 0失败
            }
        }
    */
    edit ({
        fun, // c 添加 e 编辑
        id, // 添加时为父id,编辑时为子id
        name
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/departmentedit',
                data: {
                    id: (fun === 'c') ? '0' : id, // 主键 添加时空 编辑时id
                    parentId: (fun === 'c') ? id : 'null', // 辅助 添加时为id 编辑时为空
                    name
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

    /* 'title':'人事管理-部门-设置负责人',
        'url':'/api/hr/changedeheader',
        'method': 'post',
        'params':{
            'id':[1,2]//员工id
            'departmentid':[1,2]//部门id
            'isHeader':true
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'res':0, //1成功 0失败
             }
        }
    */
    editLeader ({ users, tableSelectedDepId, flag }) {
        const id = [];
        const departmentid = [];
        users = users || []
        users.map(item => { id.push(item.id) })
        departmentid.push(tableSelectedDepId)
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/changedeheader',
                data: {
                    id,
                    departmentid,
                    isHeader: flag
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

    /* 'title':'人事管理-部门-获取',
        'url':'/api/hr/getdepartment',
        'method': 'get',
        'params':{ },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                departments:[{
                    'id':1,
                    'title':'项目名字', // 项目名字
                    'expand': true, // 默认展示
                    'children':[{
                        'id':2,
                        'title':'ss'，
                        'expand': true,
                        'children':null
                     }]
                }]
            }
        }
    */
    list () {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/getdepartment',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.departments) {
                    resolve(res.data.departments)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-部门-通过职位获取部门',
        'url':'/api/hr/post_depart',
        'method': 'get',
        'params':{
            'postId': '1,2,3' //职位id，可多选
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'depart':[{
                    'id': 11, // 部门id
                    'name': 'xxxx' // 部门名称
                    'desc':'管理公司所有部门',//职位描述
                }]
            }
        }
    */
    listByPost ({ postId }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/post_depart',
                data: {
                    postId //职位id，可多选
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.depart) {
                    resolve(res.data.depart)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-部门-删除',
        'url':'/api/hr/departmentdel',
        'method': 'post',
        'params':{ 'id':1 },
        'response':{
            'code': '200',
            'msg': '该部门下存在子部门，无法删除',
            'data':{
                'res':0 // 1成功 0失败
            }
        }
    */
    del ({ id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/departmentdel',
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
