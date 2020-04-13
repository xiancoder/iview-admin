import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具

export default {
    list () { // 列表或导出
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/message/list'
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data) {
                    resolve(res.data)
                } else {
                    error(res.data.res || '读取列表失败') // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    listOne (id) { // 查单一
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/message/query',
                data: {
                    id
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.info) {
                    resolve(res.data.info)
                } else {
                    error(res.data.res || '读取详情失败') // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    hasRead () {
        return Promise.resolve(true)
    },
    removeReaded () {
        return Promise.resolve(true)
    },
    restoreTrash () {
        return Promise.resolve(true)
    },

    end () {} // 错误占位符
}
