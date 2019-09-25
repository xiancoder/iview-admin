import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getTableData, getDragList, uploadImage, getOrgData, getTreeSelectData } from './data'
import { getMessageInit, getContentByMsgId, hasRead, removeReaded, restoreTrash, messageCount } from './user'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({ timeout: 1000 })

// 登录相关和获取用户信息
const USERINFO = {
    'userName': '小神仙',
    'sex': 1,
    'id': 13,
    'deptId': 0,
    'userRoleId': 1,
    'roleName': '超级管理员',
    'userPhoto': 'http://www.placehold.it/350x150/&text=神',
    'email': 'whereispal5@163.com',
    'accountManager':0,
    'topDepartmentList': [{'id':1,'name':'任礼游'}, {'id':2,'name':'云袭广告'}, {'id':3,'name':'加客'}],
    'postId': 3,
    'token': '111111'
}
Mock.mock('api/user/login', req => {
    const json = JSON.parse(req.body)
    const data = { token: USERINFO.token }
    return {'code': 200, 'data': data, 'msg': ''}
})
Mock.mock('api/user/getUserInfo', req => {
    // const token = req.header.token // 无法获取header
    const data = USERINFO
    return {'code': 200, 'data': data, 'msg': ''}
})
Mock.mock('api/message/have', req => {
    const data = {'res': 12}
    return {'code': 200, 'data': data, 'msg': ''}
})
Mock.mock('api/system/menulist', req => {
    const data = {'list': ['0000', '0001', '0002', '0003', '0101', '0102', '0103', '0104', '0105', '0106', '0107', '0108', '0109', '0110', '0200', '0301', '0302', '0303', '0304', '0305', '0306', '0307', '0308', '0309', '0310', '0311', '0312', '0313', '0314', '0315', '0316', '0317', '0318', '0319', '0320', '0401', '0402', '0403', '0404', '0405', '0406', '0407', '0408', '0501', '0502', '0503', '0504', '0505', '0506', '0507', '0508', '0509', '0510', '0511', '0512', '0601', '0602', '0603', '0604', '0605', '0606', '0607', '0608', '0609', '0610', '0611', '0612', '0613', '0614', '0615', '0616', '0617', '0618', '0619', '0610', '0621', '0622', '0623', '0624', '0625', '0626', '0627', '0628', '0629', '0630', '0701', '0702', '0703', '0704', '0705', '0706', '0707', '0708', '0709', '0801', '0802', '0803', '0804', '0805', '0806', '0807', '0808', '0809', '0810', '0811', '0812', '0813', '0814', '0815', '0816', '0817', '0818', '0819', '0820', '0821', '0901', '1001', '1002', '1003', '1004', '1101']}
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
