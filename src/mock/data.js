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
