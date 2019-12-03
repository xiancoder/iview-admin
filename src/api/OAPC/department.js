import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具
import cacher from '../cache'

export default {
    listCache () { // 获得部门列表树(这个不经常改 可以缓存)
        return cacher({
            method: 'GET',
            url: '/api/hr/getdepartmentCache',
            data: {}
        })
    },
    list () { // 获得部门列表树
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/getdepartment',
                data: {}
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
    create ({ // 添加部门/子部门
        fun, // c 添加 e 编辑
        id, // 操作的id
        name
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/departmentedit',
                data: {
                    id: (fun === 'c') ? 'null' : id, // 主键 添加时空 编辑时id
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
    del ({ // 删除某个部门
        id // 部门id
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/departmentdel',
                data: {
                    id
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
    editLeader ({ // 设置取消部门负责人
        users, // 员工数组
        tableSelectedDepId, // 部门id
        flag // 设置状态
    }) {
        const userIds = [];
        const depIds = [];
        (users || []).map(item => { userIds.push(item.id) })
        depIds.push(tableSelectedDepId);
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/changedeheader',
                data: {
                    id: userIds, // 对应后台字段
                    departmentid: depIds, // 对应后台字段
                    isHeader: flag // 对应后台字段
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
    end () {} // 错误占位符
}
