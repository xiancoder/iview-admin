import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {

    /* 'title':'人事管理-部门职位-添加编辑',
        'url':'/api/hr/add_position',
        'method': 'post',
        'params':{
            'id':0,//0添加,职位id
            'parentId':0//父级id，0为在根目录下添加子级
            'positionName':'总经理',//职位名称
            'deptId':1,//部门id
            'desc':'管理公司所有部门',//职位描述
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                res:1,//1 成功, 0 失败
             }
        }
    */
    edit ({
        id,
        parentId,
        positionName,
        deptId,
        desc
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/add_position',
                data: {
                    id,
                    parentId,
                    positionName,
                    deptId,
                    desc
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

    /* 'title':'人事管理-部门职位-开启禁用',
        'url':'/api/hr/position_open',
        'method': 'post',
        'params':{
            'id':1,//职位id
            'state':true,//true 开启 false 关闭
        },
        'response':{
            'code': '200',
            'msg': '该职位下绑定了在职人员或业务流程',
            'data':{
                res:1,//1 成功, 0 失败
             }
        }
    */
    editOpen ({
        id,
        state
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/position_open',
                data: {
                    id,
                    state
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

    /* 'title':'人事管理-部门职位-获取',
        'url':'/api/hr/position_list',
        'method': 'get',
        'params':{
            'keyword':'总经理',//职位名称
            'deptId':1,//部门id,0 全部
            'postId':1,//职位id,0 全部
            'state': true, //true 可以使用 ，false 禁用
            'page_index':1,
            'page_size':30
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                'list':[{
                    'id': 3,//职位id
                    'postName':'总经理',//职位名称
                    'postPersons':'成龙，李成',//职位人员
                    'deptName':'项目组',//所属部门名称
                    'desc':'管理公司所有部门',//职位描述
                    'state': true, //true 可以使用 ，false 禁用
                }],
                'rowCount':100,//总条数
             }
        }
    */
    list ({
        keyword,
        deptId,
        postId,
        state,
        page_index,
        page_size
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/position_list',
                data: {
                    keyword,
                    deptId,
                    postId,
                    state,
                    pageIndex: page_index,
                    pageSize: page_size
                }
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

    /* 'title':'人事管理-部门职位-获取(树格式)',
        'url':'/api/hr/get_position',
        'method': 'get',
        'params':{ },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                positions:[{
                    'id':1,
                    'title':'项目组',
                    'expand': true, // 默认展示
                    'state': true, // 默认可以使用,true 可以使用 ，false 禁用
                    'children':[{
                        'id':2,
                        'title':'ss'，
                        'expand': true,
                        'state': true, // 默认可以使用,true 可以使用 ，false 禁用
                        'children':null
                     }]
                }]
            }
        }
    */
    listTree () {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/get_position',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.positions) {
                    resolve(res.data.positions)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title':'人事管理-部门职位-通过部门获取（只拿该部门下一层的职位）',
        'url':'/api/hr/process_post',
        'method': 'get',
        'params':{
            'deptId':01  // 部门ID  传0 全部部门
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                list:[{
                    'name':'技术部主管', // 职位名称
                    'id':'03' // 职位id
                }]
            }
        }
    */
    listByDep4OneLevel ({ deptId }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/process_post',
                data: {
                    deptId
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

    /* 'title':'人事管理-部门职位-通过部门获取（该部门所有的职位，包括子部门下的职位）',
        'url':'/api/hr/getdeptpost',
        'method': 'get',
        'params':{
            'deptId':01 // 部门ID  传0 全部部门
        },
        'response':{
            'code': '200',
            'msg': '',
            'data':{
                departments:[{
                    'name':'技术部主管', // 职位名称
                    'id':'03' // 职位id
                }]
            }
        }
    */
    listByDep ({ deptId }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/getdeptpost',
                data: {
                    deptId
                }
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

    /* 'title':'人事管理-部门-职位-删除',
        'url':'/api/hr/del_position',
        'method': 'get',
        'params':{
            'id':3,//职位id
        },
        'response':{
            'code': '200',
            'msg': '该职位下有下属职位或处于启用状态，不能删除',
            'data':{
                res:1,//1 成功, 0 失败
             }
        }
    */
    del ({ id }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: '/api/hr/del_position',
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
