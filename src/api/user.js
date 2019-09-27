import axios from 'axios'
import { error } from '@/tools'
export const api = {
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
                    error(res.msg || '获取数据失败')
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 中止操作
            })
        })
    }
}
