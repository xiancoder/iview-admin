import axios from 'axios'
import { error } from '@/tools'

export default {
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
    end () {} // 错误占位符
}
