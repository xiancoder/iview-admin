import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

// 接口模块 - 班级

export default {

    /* 'title': '班级 - 获取列表',
        'url': '/api/group/list',
        'method': 'get',
        'params': {
            'student': '' // 学生
            'teacher': '' // 老师
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'name': 'sss', // 名称
                }]
                'rowcount': 20
            }
        }
    */

    list ({ // 获取所有人员
        depId, // null为所有
        status, // 用户状态, 0:离职，1:在职
        keyword, // 工号或姓名
        postIds, // 职位 多选数组
        page, // 分页
        pageSize // 单页数量
    }) {
        if (status === -1) { status = null }
        if (postIds instanceof Array) { postIds = postIds.join(',') }
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/employer',
                data: {
                    departmentid: depId, // 对应后台字段
                    userStatus: status, // 对应后台字段
                    keyword,
                    postIds,
                    pageIndex: page, // 对应后台字段
                    pageSize
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) {
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
    detail ({ // 获取某个人员
        userId
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/employerdetail',
                data: {
                    userId
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.result) {
                    resolve(res.data.result)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    pullStatus () { // 获取人员状态
        return [
            {id: '-1', name: '全部状态'},
            {id: '2', name: '在职'},
            {id: '1', name: '休假'},
            {id: '0', name: '离职'}
        ]
    },
    editPostStatus ({ // 改变人员职位状态
        users, // 人员们
        userStatus // 改成的状态
    }) {
        const usersIds = []
        if (Array.isArray(users)) {
            users.map(item => { usersIds.push(item.id) })
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/changeuserStatus',
                data: {
                    id: usersIds,
                    userStatus: parseInt(userStatus || 0)
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve()
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    editDept ({ // 改变人员部门
        users, // 人员们
        departmentids // 部门id
    }) {
        const usersIds = []
        if (Array.isArray(users)) {
            users.map(item => { usersIds.push(item.id) })
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/changedepartment',
                data: {
                    id: usersIds,
                    departmentid: departmentids
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    resolve()
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    end () {} // 错误占位符
}