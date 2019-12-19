import axios from 'axios' // http请求库
import { success, error } from '@/tools' // 自定义常用工具
import { obj2url } from '@/utils/string' // 自定义常用工具

export default {
    rechargeList ({ // 充值记录 / 可以导出 for 3种角色
        date, // 日期 yyyy-mm
        start2end, // 日期范围 yyyy-mm-dd
        aderId, // 广告主ID
        searchName, // 收款人付款人广告主
        state, // 状态 0失败1成功
        type, // 充值方式 1银行转账2在线充值
        pageIndex,
        pageSize
    }, role, isExport) {
        // 需要根据权限区分一下 下发参数
        let data = null
        let power = ''
        if (aderId === 'all') aderId = ''
        if (state === 'all') state = ''
        if (type === 'all') type = ''
        if (role === 1) {
            data = {
                'date': date || '' // 日期 yyyy-mm
            }
            power = 'user'
        } else if (role === 2) {
            data = {
                'start_date': start2end[0] || '', // 开始日期 yyyy-mm-dd
                'end_date': start2end[1] || '', // 结束日期 yyyy-mm-dd
                'ader_id': aderId || '0', // 广告主ID
                'state': state || '0', // 状态 1成功2失败
                'recharge_type': type || '0', // 充值方式 1银行转账2在线充值
                'page': pageIndex || '1', // 分页
                'page_count': pageSize || '30' // 分页条数
            }
            power = 'oper'
        } else if (role === 3) {
            if (searchName) searchName = searchName.replace(/^( )+|( )+$/g, '') // 所有输入框剔除前后空格
            data = {
                'start_date': start2end[0] || '', // 开始日期 yyyy-mm-dd
                'end_date': start2end[1] || '', // 结束日期 yyyy-mm-dd
                'key_name': searchName || '', // 收款人付款人广告主
                'state': state || '0', // 状态 1成功2失败
                'recharge_type': type || '0', // 充值方式 1银行转账2在线充值
                'page': pageIndex || '1', // 分页
                'page_count': pageSize || '30' // 分页条数
            }
            power = 'fina'
        }
        if (isExport) {
            return new Promise((resolve, reject) => {
                const url = '/api/finance/rechargelist_export_for_' + power + '?' + obj2url(data)
                window.open(url, '_blank')
                resolve()
            })
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/finance/rechargelist_for_' + power,
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
    costList ({ // 消耗记录 / 可以导出 for 3种角色
        date, // 日期 yyyy-mm
        start2end, // 日期范围 yyyy-mm-dd
        aderId, // 广告主ID
        businessId, // 业务ID
        state, // 状态 0失败1成功
        pageIndex,
        pageSize
    }, role, isExport) {
        // 需要根据权限区分一下 下发参数
        let data = null
        let power = ''
        if (aderId === 'all') aderId = ''
        if (businessId === 'all') businessId = ''
        if (state === 'all') state = ''
        if (role === 1) {
            data = {
                'date': date || '' // 日期 yyyy-mm
            }
            power = 'user'
        } else if (role === 2) {
            data = {
                'start_date': start2end[0] || '', // 开始日期 yyyy-mm-dd
                'end_date': start2end[1] || '', // 结束日期 yyyy-mm-dd
                'ader_id': aderId || '0', // 广告主ID
                'state': state || '0', // 状态 1成功2失败
                'page': pageIndex || '', // 分页
                'page_count': pageSize || '' // 分页条数
            }
            power = 'oper'
        } else if (role === 3) {
            data = {
                'start_date': start2end[0] || '', // 开始日期 yyyy-mm-dd
                'end_date': start2end[1] || '', // 结束日期 yyyy-mm-dd
                'ader_id': aderId || '0', // 广告主ID
                'buis_name': businessId || '0', // 业务 Name 都用字符串
                'state': state || '0', // 状态 1成功2失败
                'page': pageIndex || '', // 分页
                'page_count': pageSize || '' // 分页条数
            }
            power = 'fina'
        }
        if (isExport) {
            return new Promise((resolve, reject) => {
                const url = '/api/finance/costlist_export_for_' + power + '?' + obj2url(data)
                window.open(url, '_blank')
                resolve()
            })
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/finance/costlist_for_' + power,
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
    accountList ({ // 账户余额 / 可以导出 for 2种角色
        aderId, // 广告主ID
        companyId, // 公司ID
        pageIndex,
        pageSize
    }, role, isExport) {
        // 需要根据权限区分一下 下发参数
        let data = null
        let power = ''
        if (aderId === 'all') aderId = ''
        if (companyId === 'all') companyId = '0'
        if (role === 1) {
            power = 'user'
        } else if (role === 2) {
            data = {
                'ader_id': aderId || '0', // 广告主ID
                'page': pageIndex || 1, // 分页
                'page_count': pageSize || 30 // 分页条数
            }
            power = 'oper'
        } else if (role === 3) {
            data = {
                'ader_id': aderId || '0', // 广告主ID
                'company_id': companyId || '0', // 公司ID
                'page': pageIndex || 1, // 分页
                'page_count': pageSize || 30 // 分页条数
            }
            power = 'fina'
        }
        if (isExport) {
            return new Promise((resolve, reject) => {
                const url = '/api/finance/accountlist_export_for_' + power + '?' + obj2url(data)
                window.open(url, '_blank')
                resolve()
            })
        }
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/finance/accountlist_for_' + power,
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
    rechargelistImport ({ // 批量导入 充值记录 for 财务
        companyId, // 公司ID
        file // 改成的状态
    }) {
        let fd = new FormData()
        fd.append('company_id', companyId || 1)
        fd.append('file', file);
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/hr/changeuserStatus',
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
    rechargeTypeList (forTableShow) { // 任务级别枚举 forTableShow指表格枚举
        if (forTableShow) {
            return ['', '银行转账', '在线充值']
        }
        return Promise.resolve([
            { id: '1', name: '银行转账' },
            { id: '2', name: '在线充值' }
        ])
    },
    resultList (forTableShow) { // 处理结果枚举 forTableShow指表格枚举
        if (forTableShow) {
            return ['', '成功', '失败']
        }
        return Promise.resolve([
            { id: '1', name: '成功' },
            { id: '2', name: '失败' }
        ])
    },
    stateList (forTableShow) { // 状态枚举 forTableShow指表格枚举
        if (forTableShow) {
            return ['', '预估', '封账']
        }
        return Promise.resolve([
            { id: '1', name: '预估' },
            { id: '2', name: '封账' }
        ])
    },
    end () {} // 错误占位符
}
