import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {
    list () { // 收款账户
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/charge/showdata',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) {
                    resolve(res.data)
                } else {
                    error(res.data.res) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    end () {} // 错误占位符
}
