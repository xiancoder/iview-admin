import Vue from 'vue' // 核心
import system from './system'
import user from './user'
import task from './task'
import unit from './unit'
import department from './department'
import employee from './employee'
import position from './position'
import role from './role'

export const Api = {
    system, user, task, unit,
    department, employee, position, role
} // 接口列表

Vue.prototype.$api = Api // 挂载api
