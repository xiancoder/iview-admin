// 项目::路由页面
// 2019年12月31日15:15:49 更新

import { makeMultiLevelRoute } from './util'

export default makeMultiLevelRoute({
    path: 'oa', title: 'OA开发', icon: 'md-menu',
    children: [
        {
            path: 'employee', title: '人事管理', icon: 'md-contacts',
            children: [
                { power: '0000', path: 'branchStaff', title: '部门与人员' },
                { power: '0000', path: 'branchStaff@positions', title: '职位管理', hideMenu: true },
                { power: '0000', path: 'branchStaff@employeeInfo', title: '员工信息', hideMenu: true },
                { power: '0000', path: 'branchStaff@employeeEdit', title: '编辑员工信息', hideMenu: true },
                { power: '0000', path: 'workCalendar', title: '工作日历' },
                { power: '0000', path: 'approvalConfig', title: '审批配置' },
                { power: '0000', path: 'approvalConfig@processAdd', title: '添加流程', hideMenu: true },
                { power: '0000', path: 'approvalConfig@overtimeAdd', title: '添加流程', hideMenu: true },
                { power: '0000', path: 'attendance', title: '考勤管理' },
                { power: '0000', path: 'attendance@detail', title: '明细表', hideMenu: true },
                { power: '0000', path: 'attendance@processAdd', title: '添加流程', hideMenu: true },
                { power: '0000', path: 'attendance@remain', title: '剩余假期', hideMenu: true },
                { power: '0000', path: 'attendance@vacation', title: '请假', hideMenu: true },
                { power: '0000', path: 'attendance@duty', title: '值班', hideMenu: true },
                { power: '0000', path: 'attendance@overtime', title: '加班', hideMenu: true },
                { power: '0000', path: 'attendance@noCheck', title: '未打卡', hideMenu: true },
                { power: '0000', path: 'attendance@outwork', title: '外出', hideMenu: true },
                { power: '0000', path: 'attendance@busTrip', title: '出差', hideMenu: true },
                { power: '9999', path: 'nopower', title: '无权限测试' },
                { power: '0000', path: 'cc@edit', title: '抄送人添加/编辑', hideMenu: true },
                { power: '0000', path: 'cc@list', title: '抄送人配置', hideMenu: true }
            ]
        }, {
            path: 'task', title: '任务管理', icon: 'logo-buffer',
            children: [
                { power: '0401', path: 'mine', title: '我的任务' },
                { power: '0402', path: 'mine@publish', title: '我发布的任务', hideMenu: true },
                { power: '0402', path: 'mine@conscient', title: '我负责的任务', hideMenu: true },
                { power: '0403', path: 'mine@executive', title: '我执行的任务', hideMenu: true },
                { power: '0404', path: 'mine@besend', title: '抄送我的任务', hideMenu: true },
                { power: '0406', path: 'mine@@info', title: '任务详情', hideMenu: true },
                { power: '0405', path: 'mine@@release', title: '发布任务', hideMenu: true },
                { power: '0407', path: 'mine@@restart', title: '重启任务', hideMenu: true },
                { power: '0401', path: 'subordinate', title: '下属任务' }
            ]
        }, {
            path: 'order', title: '工单管理', icon: 'md-mail',
            children: [
                { power: '0401', path: 'mine', title: '我的工单' },
                { power: '0402', path: 'mine@sendList', title: '已发工单', hideMenu: true },
                { power: '0402', path: 'mine@receiveList', title: '已收工单', hideMenu: true },
                { power: '0402', path: 'mine@draftsList', title: '草稿箱', hideMenu: true },
                { power: '0402', path: 'mine@endList', title: '已结工单', hideMenu: true },
                { power: '0402', path: 'mine@@info', title: '工单详情', hideMenu: true },
                { power: '0402', path: 'mine@@release', title: '工单发布', hideMenu: true },
                { power: '0401', path: 'subordinate', title: '下属工单' },
                { power: '0402', path: 'subordinate@@info', title: '工单详情', hideMenu: true },
                { power: '0401', path: 'group', title: '组管理' },
                { power: '0402', path: 'group@edit', title: '组添加/编辑', hideMenu: true }
            ]
        }
    ]
})
