import axios from 'axios'
import { error } from '@/tools'
export const api = {
    pullUserList () { // 管理员登录
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'get',
                url: 'api/user/pullusers',
                data: {
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res.code === 200) { // 服务器说ok
                    resolve(res && res.data && res.data.list)
                } else { // 服务器说error
                    error(res.msg || '获取数据失败')
                    reject(res && res.data)
                }
            }).catch(e => {
                error(e.message) // ajax异常后 中止操作
            })
        })
    }
}
