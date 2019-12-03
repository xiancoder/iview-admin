import axios from 'axios' // http请求库
import { success, error } from '@/tools' // 自定义常用工具
// 员工管理 获取职位列表
export function JobList () {
    return Promise.resolve({ data: 'value2' })
}
export default {
    getDetail ({ id }) { // 拉取一些假数据
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'get',
                url: 'api/unit/getDetail',
                data: { id }
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
    submit (obj) { // 提交表单测试
        obj.enen = 123
        return new Promise((resolve, reject) => {
            axios.request({
                method: 'post',
                url: 'api/unit/submit',
                data: obj
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res) {
                    success(res.msg || '测试成功') // 提示并继续resolve
                    resolve()
                } else {
                    error(res.msg) // 报错并继续reject
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 报错并中止操作
            })
        })
    },
    formData ({id, name, files}) { // 测试formdata表单格式
        return new Promise((resolve, reject) => {
            let fd = new FormData()
            fd.append('id', id || null)
            fd.append('name', name || '')

            if (files && files[0]) fd.append('file1', files[0])
            if (files && files[1]) fd.append('file2', files[1])
            if (files && files[2]) fd.append('file3', files[2])

            axios.request({
                method: 'post',
                url: 'api/task/found',
                data: fd,
                headers: { 'Content-Type': 'multipart/form-data' },
                timeout: 300000
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data && res.data.res === 1) {
                    success(res.msg)
                    resolve()
                } else {
                    error(res.msg)
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 中止操作
            })
        })
    },
    end () {} // 错误占位符
}
