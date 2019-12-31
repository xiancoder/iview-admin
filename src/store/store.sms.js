// 项目::SMS状态管理模块
// 负责::所有的短信状态都集中在这里
// 2019年12月30日16:25:22 更新

import config from '@/config' // 自定义配置

export default {
    namespaced: true, // 作用域,配置上以后才能够dispach system/xxx 建议必须 不同的状态里有相同字段值
    state: { // 缓存字段以及默认值
        smsCode: 0, // 短信验证码等待时间
        smsCodeInterval: 0, // 短信验证码等待计时器

        end: 1 // 防呆设计
    },
    mutations: { // 触发事件 注意 vue只有mutations才能触发任意使用状态的代码位置的监听渲染 建议大写
        SMSCODE (state, v) { state.smsCode = v },
        SMSCODEINTERVAL (state, v) { state.smsCodeInterval = v },

        END: function () {} // 防呆设计
    },
    actions: {
        smsCode ({ commit }, param) { // 开启短信发送倒计时
            let time = config.smsThrottleTime
            const i = setInterval(() => {
                time--
                commit('SMSCODE', time) // 修改发送验证码等待时间
                if (time === 0) {
                    clearInterval(i)
                }
            }, 1e3)
            commit('SMSCODEINTERVAL', i)
        },
        smsCodeInterval ({ commit, state }, param) { // 开启短信发送倒计时
            const i = state.smsCodeInterval
            clearInterval(i)
            commit('SMSCODE', 0)
        }
    }
}
