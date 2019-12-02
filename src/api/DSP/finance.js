import axios from 'axios' // http请求库
import { error } from '@/tools' // 自定义常用工具
import { obj2url } from '@/utils/string' // 自定义常用工具

export default {
    rechargelist ({ // 充值记录 / 可以导出 for 三种角色
        date, // 日期 yyyy-mm
        start2end, // 日期范围 yyyy-mm-dd
        userId, // 广告主ID
        searchName, // 收款人付款人广告主
        state, // 状态 0失败1成功
        type, // 充值方式 1银行转账2在线充值
        pageIndex,
        pageSize
    }, role, isExport) {
        // 需要根据权限区分一下 下发参数
        let data = null
        let power = ''
        if (role === 1) {
            data = {
                date // 日期 yyyy-mm
            }
            power = 'user'
        } else if (role === 2) {
            data = {
                'start_date': start2end[0], // 开始日期 yyyy-mm-dd
                'end_date': start2end[1], // 结束日期 yyyy-mm-dd
                'user_id': userId, // 广告主ID
                state, // 状态 0失败1成功
                'recharge_type': type, // 充值方式 1银行转账2在线充值
                'page': pageIndex, // 分页
                'page_count': pageSize // 分页条数
            }
            power = 'oper'
        } else if (role === 3) {
            data = {
                'start_date': start2end[0], // 开始日期 yyyy-mm-dd
                'end_date': start2end[1], // 结束日期 yyyy-mm-dd
                'key_name': searchName, // 收款人付款人广告主
                state, // 状态 0失败1成功
                'recharge_type': type, // 充值方式 1银行转账2在线充值
                'page': pageIndex, // 分页
                'page_count': pageSize // 分页条数
            }
            power = 'fina'
        }
        if (isExport) {
            return new Promise((resolve, reject) => {
                const url = '/api/finance/rechargelist_export_for_user' + power + '?' + obj2url(data)
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
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    state () { // 任务级别
        return Promise.resolve([
            { id: '1', name: '银行转账' },
            { id: '2', name: '在线充值' }
        ])
    },
    type () { // 任务级别
        return Promise.resolve([
            { id: '0', name: '失败' },
            { id: '1', name: '成功' }
        ])
    },
    end () {} // 错误占位符
}
