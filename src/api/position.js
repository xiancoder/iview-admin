import axios from 'axios'
export const api = {
    pull ({ // 获得职位列表
        deptId // 部门id
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/getdeptpost',
                data: {
                    deptId
                }
            }).then(res => {
                const list = res.data.data.postlist
                resolve(list) // 直接返回列表
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    list ({ // 获得职位列表
        deptId // 部门id
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/hr/get_position',
                data: {
                    deptId
                }
            }).then(res => {
                const list = res.data.data.positions
                resolve(list) // 直接返回列表
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    end () {} // 错误占位符
}
