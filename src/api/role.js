import axios from 'axios'
export const api = {
    list () { // 获取所有角色
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/system/rolelist',
                data: {
                    roleName: null
                }
            }).then(res => {
                const info = res.data.data || []
                resolve(info)
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    end () {} // 错误占位符
}
