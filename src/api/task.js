import axios from 'axios'
export const api = {
    pullUsers () { // 获取所有相关人员
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/users',
                data: {}
            }).then(res => {
                resolve(res.data.data.list)
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    listMine ({ // 我的任务
        taskPriority,
        taskStatus,
        restart,
        overdue,
        founder,
        personLiable,
        implement,
        taskName,
        pause,
        beginAndEnd = ['', ''],
        index,
        size
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
    listConscient () { // 我负责的任务
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/myown',
                data: {}
            }).then(res => {
                resolve(res.data.data)
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    listExecutive () { // 我执行的任务
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/myexe',
                data: {}
            }).then(res => {
                resolve(res.data.data)
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    listBesend () { // 抄送我的任务
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/task/aboutme',
                data: {}
            }).then(res => {
                resolve(res.data.data)
            }).catch(err => {
                console.error('接口回调异常')
                reject(err)
            })
        })
    },
    priority () { // 任务级别
        return [
            { id: '-1', name: '全部级别' },
            { id: '0', name: '紧急' },
            { id: '1', name: '重要' },
            { id: '2', name: '一般' }
        ]
    },
    status () { // 任务级别
        return [
            { id: '-1', name: '全部状态' },
            { id: '0', name: '待接受' },
            { id: '1', name: '执行中' },
            { id: '2', name: '待验收' },
            { id: '3', name: '已通过' },
            { id: '4', name: '已废弃' }
        ]
    },
    restart () { // 任务类型
        return [
            { id: '-1', name: '全部任务类型' },
            { id: '0', name: '普通' },
            { id: '1', name: '重启' }
        ]
    },
    overdue () { // 任务类型
        return [
            { id: '-1', name: '全部逾期情况' },
            { id: '0', name: '未逾期' },
            { id: '1', name: '已逾期' }
        ]
    },
    pause () { // 暂停状态
        return [
            { id: '-1', name: '全部暂停状态' },
            { id: '0', name: '未暂停' },
            { id: '1', name: '已暂停' }
        ]
    },
    end () {} // 错误占位符
}
