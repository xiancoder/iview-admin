import axios from 'axios'
import { error } from '@/tools'
export default {
    pullUserList () { // 拉取所有用户列表
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'get',
                url: 'api/user/pullusers',
                data: {}
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
    end () {} // 错误占位符
}
