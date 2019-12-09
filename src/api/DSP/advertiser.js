import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {
    pull () { // 所有广告主下拉
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/advertiser/droplist',
                data: { }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.list) {
                    resolve(res.data.list)
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
