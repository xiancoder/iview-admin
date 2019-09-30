import Mock from 'mockjs'
// import { logout } from './login'
// import { getTableData, getDragList, uploadImage, getOrgData, getTreeSelectData } from './data'
// import { getMessageInit, getContentByMsgId, hasRead, removeReaded, restoreTrash, messageCount } from './user'
import orgData from './data/org-data'
import { treeData } from './data/tree-select'
// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({ timeout: 1000 })
const Random = Mock.Random
Mock.mock(/mock\/data\/orgdata/, req => {
    return orgData
})
Mock.mock(/mock\/data\/tabledata/, req => {
    const tableData = Mock.mock({
        'list|5': [{
            name: '@name',
            email: '@email',
            createTime: '@date'
        }]
    });
    return tableData.list
})
Mock.mock(/mock\/data\/treeselectdata/, req => {
    return treeData
})
Mock.mock(/mock\/data\/draglist/, req => {
    const tableData = Mock.mock({
        'list|5': [{
            name: Random.csentence(10, 13),
            id: Random.increment(10)
        }]
    });
    return tableData.list
})
Mock.mock(/mock\/image\/upload/, req => {
    return Promise.resolve()
})
Mock.mock(/mock\/data\/error/, req => {
    return Promise.resolve()
})

export default Mock
