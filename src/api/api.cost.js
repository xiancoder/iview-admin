import axios from 'axios' // http请求库
import { success, error } from '@/tools' // 自定义常用工具
import { obj2url } from '@/utils/string' // 自定义常用工具

export default {
    costList ({ // 消耗记录 / 可以导出
        date, // 日期 yyyy-mm
        start2end, // 日期范围 yyyy-mm-dd
        aderId, // 广告主ID
        businessName, // 业务名称
        state, // 状态 0全部1成功2失败
        pageIndex,
        pageSize
    }, isExport) {
        if (aderId === 'all') aderId = ''
        if (state === 'all') state = ''
        let data = {
            'start_date': start2end[0] || '', // 开始日期 yyyy-mm-dd
            'end_date': start2end[1] || '', // 结束日期 yyyy-mm-dd
            'ader_id': aderId || '0', // 广告主ID
            'buis_name': businessName || '', // 业务名称
            'state': state || '0', // 状态 0全部1成功2失败
            'page': pageIndex || '1', // 分页
            'page_count': pageSize || '30' // 分页条数
        }
        if (isExport) {
            return new Promise((resolve, reject) => {
                const url = '/api/cost/export?' + obj2url(data)
                window.open(url, '_blank')
                resolve()
            })
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/cost/list',
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
    realPreImport ({ // 导入 上传预估消耗
        companyId, // 公司ID
        file // 改成的状态
    }) {
        let fd = new FormData()
        fd.append('company_id', companyId || 1)
        fd.append('file', file);
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/cost/upload_real_pre',
                data: fd,
                headers: { 'Content-Type': 'multipart/form-data' },
                timeout: 300000
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '导入成功') // 报错并继续reject
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
    realCostImport ({ // 导入 上传封账数据
        companyId, // 公司ID
        file // 改成的状态
    }) {
        let fd = new FormData()
        fd.append('company_id', companyId || 1)
        fd.append('file', file);
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/cost/upload_real_cost',
                data: fd,
                headers: { 'Content-Type': 'multipart/form-data' },
                timeout: 300000
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '导入成功') // 报错并继续reject
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
    sealAccount ( // 封账
        ids // 列表ID
    ) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: 'api/cost/close',
                data: {
                    ids
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '封账成功')
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
    sealAccountBatch ({ // 批量封账
        start2end, // 日期范围 yyyy-mm-dd
        businessId, // 业务 ID或者Name
        aderId // 广告主ID
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: 'api/cost/close_batch',
                data: {
                    'start_date': start2end[0] || '', // 开始日期 yyyy-mm-dd
                    'end_date': start2end[1] || '', // 结束日期 yyyy-mm-dd
                    'ader_id': aderId || '0', // 广告主ID
                    'buis_name': businessId || '' // 业务名称
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '封账成功')
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
    end () {} // 错误占位符
}
