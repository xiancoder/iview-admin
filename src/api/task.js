import axios from 'axios'
import { success, error } from '@/tools'
export default {
    found ({id, taskName, taskPriority, completeTime, taskContent, personLiable, fileList, correlation}) { // 发布任务
        // 如果参数传递有形参要求 但不传对象来 会卡住 且不报错
        return new Promise((resolve, reject) => {
            if (taskPriority !== 2) { completeTime = '' }
            let fd = new FormData();
            fd.append('id', id || null)
            fd.append('taskName', taskName);
            fd.append('taskPriority', taskPriority);
            fd.append('completeTime', completeTime || null);
            fd.append('taskContent', taskContent);
            fd.append('personLiable', personLiable);
            fd.append('correlation', correlation.length === 0 ? null : correlation);
            for (let file in fileList) {
                fd.append('file', fileList[file]);
            }
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
    listMine ({ // 我的任务
        taskPriority, taskStatus, restart, overdue, founder, personLiable, implement,
        taskName, pause, beginAndEnd = ['', ''], index, size
    }) {
        let v1 = beginAndEnd[0]
        let v2 = beginAndEnd[1]
        if (v1 === 'Invalid date') { v1 = '' }
        if (v2 === 'Invalid date') { v2 = '' }
        const switchValue = (val) => { return (val === -1) ? null : parseInt(val) }
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/myfound',
                data: {
                    'taskPriority': switchValue(taskPriority), // 级别
                    'taskStatus': switchValue(taskStatus), // 状态 任务状态
                    'restart': switchValue(restart), // 任务类型
                    'overdue': switchValue(overdue), // 逾期情况
                    'founder': switchValue(founder), // 发布人
                    'personLiable': switchValue(personLiable), // 负责人
                    'implement': switchValue(implement), // 执行人
                    'begin': v1, // 开始时间
                    'end': v2, // 结束时间
                    'taskName': taskName, // 任务名称
                    'pause': switchValue(pause), // 是否暂停
                    'page_index': index,
                    'page_size': size
                }
            }).then(res => {
                resolve(res.data.data)
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    getDetail ({ id }) { // 任务详情
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/detail',
                data: {
                    taskId: id
                }
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
    listConscient () { // 我负责的任务
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/myown',
                data: {}
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
    listExecutive () { // 我执行的任务
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/myexe',
                data: {}
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
    listBesend () { // 抄送我的任务
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/aboutme',
                data: {}
            }).then(response => { // 请注意这个返回值是整个结果对象
                const res = response.data
                if (res && res.data) {
                    resolve(res.data)
                } else {
                    error(res.msg || '获取数据失败')
                    reject()
                }
            }).catch(e => {
                error(e.message) // ajax异常后 中止操作
            })
        })
    },
    priority () { // 任务级别
        return new Promise((resolve, reject) => {
            resolve([
                { id: '-1', name: '全部级别' },
                { id: '0', name: '紧急' },
                { id: '1', name: '重要' },
                { id: '2', name: '一般' }
            ])
        })
    },
    status () { // 任务级别
        return new Promise((resolve, reject) => {
            resolve([
                { id: '-1', name: '全部状态' },
                { id: '0', name: '待接受' },
                { id: '1', name: '执行中' },
                { id: '2', name: '待验收' },
                { id: '3', name: '已通过' },
                { id: '4', name: '已废弃' }
            ])
        })
    },
    restart () { // 任务类型
        return new Promise((resolve, reject) => {
            resolve([
                { id: '-1', name: '全部任务类型' },
                { id: '0', name: '普通' },
                { id: '1', name: '重启' }
            ])
        })
    },
    overdue () { // 任务类型
        return new Promise((resolve, reject) => {
            resolve([
                { id: '-1', name: '全部逾期情况' },
                { id: '0', name: '未逾期' },
                { id: '1', name: '已逾期' }
            ])
        })
    },
    pause () { // 暂停状态
        return new Promise((resolve, reject) => {
            resolve([
                { id: '-1', name: '全部暂停状态' },
                { id: '0', name: '未暂停' },
                { id: '1', name: '已暂停' }
            ])
        })
    },
    end () {} // 错误占位符
}
