/*
 * @Author: zhaoyaoyao
 * @Date: 2019-06-10 15:31:05
 * @Last Modified by: EvelynYin
 * @Last Modified time: 2019-09-11 09:33:19
 * 员工接口相关  员工管理，角色管理
 */
import axios from 'axios'
const service = axios.request
// 员工管理 获取职位列表
export function JobList () {
    return Promise.resolve({ data: 'value2' })
}
// 获取上级领导下拉列表
export function LeaderList (data) {
    return service({
        url: '/api/Staff/Leaders',
        method: 'get',
        params: data
    })
}
// 获取员工类型的数据
export function getStaffType () {
    return service({
        url: '/api/Dict/StaffType',
        method: 'get'
    })
}
// 获取员工详情的数据
export function detail (data) {
    return service({
        url: '/api/Staff/Detail',
        method: 'get',
        params: data
    })
}
// 获取员工列表的数据
export function getStaffList (data) {
    return service({
        url: '/api/Staff/List',
        method: 'get',
        params: data
    })
}
// 员工数据保存
export function submit (data) {
    return service({
        url: '/api/Staff/Edit',
        method: 'post',
        data,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}
// 员工重置密码
export function resetPwd (data) {
    return service({
        url: '/api/Staff/Reset',
        method: 'get',
        params: data
    })
}
// 员工离职状态
export function leaveChange (data) {
    return service({
        url: '/api/Staff/Leave',
        method: 'get',
        params: data
    })
}
// 角色管理--获取职位列表
export function getJobList (data) {
    return service({
        url: '/api/Job/List',
        method: 'get',
        params: data
    })
}
// 角色管理--获取角色下拉列表
export function getRoleSelect () {
    return service({
        url: '/api/Job/dropdownlist',
        method: 'get'
    })
}
// 角色管理--获取角色详情
export function getRoleDetail (data = {}) {
    return service({
        url: '/api/Job/Detail',
        method: 'get',
        params: data
    })
}
// 角色管理--删除角色
export function deleteRole (data = {}) {
    return service({
        url: '/api/Job/Delete',
        method: 'get',
        params: data
    })
}
// 角色管理--编辑角色
export function editRole (data = {}) {
    return service({
        url: '/api/Job/Edit',
        method: 'post',
        data
    })
}
/** 学员列表 */
export function studentList (data = {}) { // 搜索学员
    return service({
        url: '/api/Stuff/StudentList',
        method: 'post',
        data
    })
}
// 休息记录
export function restList (data = {}) {
    return service({
        url: '/api/Staff/RestList',
        method: 'get',
        params: data
    })
}
