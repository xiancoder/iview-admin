import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getTableData, getDragList, uploadImage, getOrgData, getTreeSelectData } from './data'
import { getMessageInit, getContentByMsgId, hasRead, removeReaded, restoreTrash, messageCount } from './user'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({ timeout: 1000 })

// 登录相关和获取用户信息
const USERINFO = {
    token: '111111',
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
}
Mock.mock('api/user/login', req => {
    const json = JSON.parse(req.body)
    const data = { token: USERINFO.token }
    return {'code': 200, 'data': data, 'msg': ''}
})
Mock.mock('api/user/info', req => {
    // const token = req.header.token // 无法获取header
    const data = USERINFO
    return {'code': 200, 'data': data, 'msg': ''}
})

Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
Mock.mock(/\/get_drag_list/, getDragList)
Mock.mock(/\/save_error_logger/, 'success')
Mock.mock(/\/image\/upload/, uploadImage)
Mock.mock(/\/message\/init/, getMessageInit)
Mock.mock(/\/message\/content/, getContentByMsgId)
Mock.mock(/\/message\/has_read/, hasRead)
Mock.mock(/\/message\/remove_readed/, removeReaded)
Mock.mock(/\/message\/restore/, restoreTrash)
Mock.mock(/\/message\/count/, messageCount)
Mock.mock(/\/get_org_data/, getOrgData)
Mock.mock(/\/get_tree_select_data/, getTreeSelectData)

export default Mock
