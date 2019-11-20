import Mock from 'mockjs'
import orgData from './data/org-data'
import { treeData } from './data/tree-select'
const Random = Mock.Random

export const getTableData = req => {
    let tableData = []
    for (var i = 0, l = 5; i < l; i++) {
        tableData.push(Mock.mock({
            name: '@name',
            email: '@email',
            createTime: '@date'
        }))
    }
    return tableData
}

export const getDragList = req => {
    let dragList = []
    for (var i = 0, l = 5; i < l; i++) {
        dragList.push(Mock.mock({
            name: Random.csentence(10, 13),
            id: Random.increment(10)
        }))
    }
    return dragList
}

export const uploadImage = req => {
    return Promise.resolve()
}

export const getOrgData = req => {
    return orgData
}

export const getTreeSelectData = req => {
    return treeData
}

export const getMessageInit = () => {
    let unreadList = []
    for (var i = 0, l = 3; i < l; i++) {
        unreadList.push(Mock.mock({
            title: Random.cword(10, 15),
            create_time: '@date',
            msgid: Random.increment(100)
        }))
    }
    let readedList = []
    for (var i2 = 0, l2 = 4; i2 < l2; i2++) {
        readedList.push(Mock.mock({
            title: Random.cword(10, 15),
            create_time: '@date',
            msgid: Random.increment(100)
        }))
    }
    let trashList = []
    for (var i3 = 0, l3 = 2; i3 < l3; i3++) {
        trashList.push(Mock.mock({
            title: Random.cword(10, 15),
            create_time: '@date',
            msgid: Random.increment(100)
        }))
    }
    return Promise.resolve({
        data: {
            unread: unreadList,
            readed: readedList,
            trash: trashList
        }
    })
}

export const getContentByMsgId = () => {
    return Promise.resolve({
        data: `<divcourier new',="" monospace;font-weight:="" normal;font-size:="" 12px;line-height:="" 18px;white-space:="" pre;"=""><div>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: medium;">这是消息内容，这个内容是使用<span style="color: rgb(255, 255, 255); background-color: rgb(28, 72, 127);">富文本编辑器</span>编辑的，所以你可以看到一些<span style="text-decoration-line: underline; font-style: italic; color: rgb(194, 79, 74);">格式</span></span></div><ol><li>你可以查看Mock返回的数据格式，和api请求的接口，来确定你的后端接口的开发</li><li>使用你的真实接口后，前端页面基本不需要修改即可满足基本需求</li><li>快来试试吧</li></ol><p>${Random.csentence(100, 200)}</p></divcourier>`
    })
}

export const hasRead = () => {
    return Promise.resolve(true)
}

export const removeReaded = () => {
    return Promise.resolve(true)
}

export const restoreTrash = () => {
    return Promise.resolve(true)
}

export const messageCount = () => {
    return 3
}
