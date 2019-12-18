import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {
    info () { // 当前广告主注册信息
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/advertiser/info',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) {
                    resolve(res.data)
                } else {
                    error('读取内容失败') // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    }
}
