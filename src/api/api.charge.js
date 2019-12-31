import axios from 'axios' // http请求库
import { success, error } from '@/tools' // 自定义常用工具

export default {
    list (pid, rid) { // 收款账户
        return new Promise((resolve, reject) => {
            let data = {}
            if (rid.toString() === '1') data = { PlatformID: pid }
            axios({
                method: 'GET',
                url: '/api/charge/showdata',
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
    modifyInfo ({ // 修改密码
        towho, // 对公对私 1对公2对私
        name, // 名字
        account, // 账号
        bank, // 银行名称
        smscode, // 短信验证码
        platformId // 平台id
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: '/api/charge/edit',
                data: {
                    'to_who': towho, // 对公对私 1对公2对私
                    name, // 名字
                    account, // 账号
                    'platform_id': platformId, // 平台Id
                    'bank_name': bank, // 银行名称
                    'code': smscode // 短信验证码
                }
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res_code) {
                    success(res.data.res || '修改账号成功') // 报错并继续reject
                    resolve()
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
