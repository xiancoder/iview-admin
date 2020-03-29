import axios from 'axios' // http请求库
import { success, error } from '@/tools' // 自定义常用工具

// 接口模块 - 学生

export default {

    createTable () { // 创建表格
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'GET',
                url: 'api/student/createTable',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '操作成功')
                    resolve()
                } else {
                    error(res.data.res || '操作失败') // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
                reject()
            })
        })
    },
    dropTable () { // 删除表格
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'GET',
                url: 'api/student/dropTable',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '操作成功')
                    resolve()
                } else {
                    error(res.data.res || '操作失败') // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
                reject()
            })
        })
    },
    errorTry () { // 错误演示
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'GET',
                url: 'xxx/xxx/xxx',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
                reject()
            })
        })
    },
    mockAddOne () { // 导入一份假数据
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'GET',
                url: 'api/student/mockAddOne',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '操作成功')
                    resolve()
                } else {
                    error(res.data.res || '操作失败') // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
                reject()
            })
        })
    },

    /* 'title': '学生 - 添加/修改',
        'url': '/api/student/edit',
        'method': 'post',
        'params': {
            'id': 1, // id
            'name': 'pite', // 名称
            'sex': 1, // 性别 1男2女
            'comeAge': 12, // 入校年龄
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res_code': 1, // 结果 0失败1成功
                'res': '' // 结果信息
            }
        }
    */

    edit ({ // 添加/修改
        id = 0,
        name,
        sex = 1,
        comeAge
    }) {
        name = name.trim() // 参数格式处理
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/student/edit',
                data: {
                    id,
                    name,
                    sex,
                    comeAge
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    resolve()
                } else {
                    error(res.data.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title': '学生 - 导入excel',
        'url': '/api/student/import',
        'method': 'post',
        'params': {
            'file': {}, // 大文件
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res_code': 1, // 结果 0失败1成功
                'res': '' // 结果信息
                'fail_result': '' // 失败结果
            }
        }
    */

    importExcel ({ // 导入
        file
    }) {
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/student/edit',
                headers: {'Content-Type': 'multipart/form-data'},
                data: {
                    file
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    resolve()
                } else {
                    error(res.data.res) // 报错并继续reject
                    reject(res.data.fail_result)
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title': '学生 - 删除',
        'url': '/api/student/delete',
        'method': 'post',
        'params': {
            'id': 1, // id
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'res_code': 1, // 结果 0失败1成功
                'res': '' // 结果信息
            }
        }
    */

    del ({ // 删除
        id
    }) {
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'POST',
                url: 'api/student/edit',
                data: {
                    id
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    resolve(1)
                } else {
                    error(res.data.res) // 报错并继续reject
                    resolve(0)
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title': '学生 - 获取列表',
        'url': '/api/student/list',
        'method': 'get',
        'params': {
            'name': 'pite', // 名称
            'comeAge': 12, // 入校年龄
            'state': 1, // 在校状态 1在校2记过3劝退4开除
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'name': 'pite', // 名称
                    'sex': 1, // 性别 1男2女
                    'comeAge': 12, // 入校年龄
                    'state': 1, // 在校状态 1在校2记过3劝退4开除
                }]
                'rowcount': 20
            }
        }
    */

    listAll ({ // 查所有
        name,
        comeAge,
        state,
        page,
        pageSize
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/student/list',
                data: {
                    name,
                    comeAge,
                    state,
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

    /* 'title': '学生 - 某一详情',
        'url': '/api/student/detail',
        'method': 'get',
        'params': {
            'id': 12
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'info': [{
                    'id': 1, // id
                    'name': 'pite', // 名称
                    'comeAge': 12, // 入校年龄
                    'state': 1, // 是否还在 1是2否
                }]
            }
        }
    */

    liseOne ({ // 查单一
        id
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/student/detail',
                data: {
                    id
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.info) {
                    resolve(res.data.info)
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    /* 'title': '学生 - 获取下拉',
        'url': '/api/student/pull',
        'method': 'get',
        'params': {
            'state': 1, // 在校状态 1在校2记过3劝退4开除
        },
        'response': {
            'code': '200',
            'msg': '',
            'data': {
                'list': [{
                    'id': 1, // id
                    'name': 'pite', // 名称
                }]
            }
        }
    */

    pull ({ // 枚举所有
        state
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/student/pull',
                data: {
                    state
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

    /* 'title': '学生 - 性别',
        1男2女
        注意0是全部
    */

    pullSex (forTableShow) { // 枚举
        if (forTableShow) { // 处理结果枚举 forTableShow指表格枚举
            return ['', '男', '女']
        }
        return Promise.resolve([
            {id: '1', name: '男'},
            {id: '2', name: '女'}
        ])
    },

    /* 'title': '学生 - 在校状态',
        1在校2记过3劝退4开除
        注意0是全部
    */

    pullStatus (forTableShow) { // 枚举
        if (forTableShow) { // 处理结果枚举 forTableShow指表格枚举
            return ['', '在校', '记过', '劝退', '开除']
        }
        return Promise.resolve([
            {id: '1', name: '在校'},
            {id: '2', name: '记过'},
            {id: '3', name: '劝退'},
            {id: '4', name: '开除'}
        ])
    },

    end () {} // 错误占位符
}
