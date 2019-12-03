import Vue from 'vue' // 核心
import './axios' // axios配置
import system from './system'
import unit from './unit'
import blog from './blog'

import oaApi from './OAPC'
import dspApi from './DSP'

export const Api = {
    system,
    unit,
    blog,
    ...oaApi,
    ...dspApi
} // 接口列表

Vue.prototype.$api = Api // 挂载api
