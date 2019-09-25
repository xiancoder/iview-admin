// *********************************************
// ajax分离结构
// 放弃三层结构 因为不实用 被打脸了
// 2019年7月17日09:44:04 liuyp
// 放弃action和ajax结合方式 不实用 不方便
// 2019年7月26日15:03:15 liuyp
// ======================================
// 第一部分 只获取需要的字段(前端想要的格式)
// 第二部分 对一些参数进行默认值处理(接口想要的格式)
// 第三部分 对一些参数转换字段名(接口想要的名字)
// 第四部分 ajax传参以及返回值处理 注意401 500错误已经被处理
// *********************************************
// 名字代表一切
// list 获取(符合条件) 理解顺序 list(获取) employee(员工) [根据条件]
// pull 拉取(下拉框特定) 理解顺序 pull(拉取) employee(员工) status(状态) [根据条件]
// edit 编辑(指定) 理解顺序 edit(编辑) employee(员工) status(状态) [根据条件]
// *********************************************
// 状态管理依旧 将ajax部分独立处理
// get 请求用的最多 复用率比较大
// post 基本上没有复用的
// 固定数据有很多 且不建议使用promise方式
// *********************************************
import axios from 'axios'
export const api = {
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
            }).then(res => {
                const info = res.data // (内有date和rowCount)
                // resolve() 只能接受并处理一个参数，多余的参数会被忽略掉。 spec上就是这样规定。
                resolve(info) // 传递res 取出data
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
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
            }).then(res => {
                resolve(res.data.data.result)
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    pullStatus () { // 获取人员状态
        return [
            { id: '-1', name: '全部状态' },
            { id: '2', name: '在职' },
            { id: '1', name: '休假' },
            { id: '0', name: '离职' }
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
            }).then(res => {
                const info = res.data
                resolve((info.data && info.data.res === 1) ? null : info.msg) // 直接换算结果
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
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
            }).then(res => {
                const info = res.data
                resolve((info.data && info.data.res === 1) ? null : info.msg) // 直接换算结果
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    end () {} // 错误占位符
}
