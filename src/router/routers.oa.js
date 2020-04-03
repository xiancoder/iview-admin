// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'oa', title: 'OA开发', icon: 'md-menu',
    children: [
        {
            path: 'employee', title: '人事管理', icon: 'md-contacts',
            children: [
                { power: 'oa-renshi', path: 'branchStaff', title: '部门与人员' },
                { power: 'oa-renshi', path: 'branchStaff@positions', title: '职位管理', hideMenu: true },
                { power: 'oa-renshi', path: 'branchStaff@employeeInfo', title: '员工信息', hideMenu: true },
                { power: 'oa-renshi', path: 'branchStaff@employeeEdit', title: '编辑员工信息', hideMenu: true },
                { power: 'oa-renshi', path: 'workCalendar', title: '工作日历' },
                { power: 'oa-renshi', path: 'approvalConfig', title: '审批配置' },
                { power: 'oa-renshi', path: 'approvalConfig@processAdd', title: '添加流程', hideMenu: true },
                { power: 'oa-renshi', path: 'approvalConfig@overtimeAdd', title: '添加流程', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance', title: '考勤管理' },
                { power: 'oa-renshi', path: 'attendance@detail', title: '明细表', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance@processAdd', title: '添加流程', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance@remain', title: '剩余假期', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance@vacation', title: '请假', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance@duty', title: '值班', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance@overtime', title: '加班', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance@noCheck', title: '未打卡', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance@outwork', title: '外出', hideMenu: true },
                { power: 'oa-renshi', path: 'attendance@busTrip', title: '出差', hideMenu: true },
                { power: '9999', path: 'nopower', title: '无权限测试' },
                { power: 'oa-renshi', path: 'cc@edit', title: '抄送人添加/编辑', hideMenu: true },
                { power: 'oa-renshi', path: 'cc@list', title: '抄送人配置', hideMenu: true }
            ]
        }, {
            path: 'meeting', title: '会议管理', icon: 'md-mail',
            children: [
                { power: 'oa-gong', path: 'reserveRoom', title: '预约会议' }
            ]
        }
    ]
})
