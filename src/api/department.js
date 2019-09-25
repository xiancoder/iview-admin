import axios from 'axios'
export const api = {
    list () { // 获得部门列表树
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/getdepartment',
                data: {}
            }).then(res => {
                const list = res.data.data.departments // res 是信息头的那一层 包含特多
                resolve(list) // 直接返回列表
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
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
            }).then(res => {
                const info = res.data // res 是信息头的那一层 包含特多
                resolve((info.data && info.data.res === 1) ? null : info.msg) // 直接换算结果
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
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
            }).then(res => {
                const info = res.data // res 是信息头的那一层 包含特多
                resolve((info.data && info.data.res === 1) ? null : info.msg) // 直接换算结果
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
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
            }).then(res => {
                const info = res.data // res 是信息头的那一层 包含特多
                resolve((info.data && info.data.res === 1) ? null : info.msg) // 直接换算结果
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    end () {} // 错误占位符
}
