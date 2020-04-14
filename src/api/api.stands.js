import axios from 'axios' // http请求库
import { success, error } from '@/tools' // 自定义常用工具
import { obj2url } from '@/utils' // 自定义常用工具

export default {
    list ({ // 列表或导出
        date, // 日期 yyyy-mm
        start2end = ['', ''], // 日期范围 yyyy-mm-dd
        xxId, // 下拉框选项
        xxName, // 输入框选项
        state, // 枚举 0全部1...2...
        pageIndex, // 分页
        pageSize // 每页条数
    }, isExport) {
        // 下拉框全选处理 统统处理为空值
        if (xxId === 'all') xxId = ''
        if (state === 'all') state = ''

        // 转换接口字段
        let data = {
            'start_date': start2end[0] || '', // 开始日期 yyyy-mm-dd
            'end_date': start2end[1] || '', // 结束日期 yyyy-mm-dd
            'xx_id': xxId || '0', // 下拉框ID
            'xx_name': xxName || '', // 输入框内容
            'state': state || '0', // 枚举 0全部1...2...
            'page': pageIndex || '1', // 分页
            'page_count': pageSize || '30' // 分页条数
        }
        if (isExport) {
            return new Promise((resolve, reject) => {
                const url = '/api/stands/export?' + obj2url(data)
                window.open(url, '_blank')
                resolve()
            })
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/stands/list',
                data
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

    edit ({ // 修改
        start2end = ['', ''], // 日期范围 yyyy-mm-dd
        xxId, // 下拉框选项
        xxName // 输入框选项
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: 'api/stands/edit',
                data: {
                    'start_date': start2end[0] || '', // 开始日期 yyyy-mm-dd
                    'end_date': start2end[1] || '', // 结束日期 yyyy-mm-dd
                    'xx_id': xxId || '0', // 下拉框选项
                    'xx_name': xxName || '' // 输入框选项
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '提交成功')
                    resolve()
                } else {
                    error(res.data.res) // 报错并继续reject
                    reject(res.data.res)
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },

    pull () { // 下拉
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/stands/droplist',
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
