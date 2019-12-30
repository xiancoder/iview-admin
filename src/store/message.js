// 项目::通知状态管理模块
// 负责::所有的通知状态都集中在这里
// 2019年12月30日16:25:22 更新

import { Api } from '@/api'

export default {
    namespaced: true, // 作用域,配置上以后才能够dispach system/xxx 建议必须 不同的状态里有相同字段值
    state: { // 缓存字段以及默认值
        newMessageNum: 0, // 新消息数量
        unreadCount: 0,
        messageUnreadList: [],
        messageReadedList: [],
        messageTrashList: [],

        end: 1 // 防呆设计
    },
    getters: {
        messageUnreadCount: state => state.messageUnreadList.length,
        messageReadedCount: state => state.messageReadedList.length,
        messageTrashCount: state => state.messageTrashList.length
    },
    mutations: { // 触发事件 注意 vue只有mutations才能触发任意使用状态的代码位置的监听渲染 建议大写
        NEWMESSAGENUM (state, num) { state.newMessageNum = num },
        SETMESSAGECOUNT (state, count) { state.unreadCount = count },
        SETMESSAGEUNREADLIST (state, list) { state.messageUnreadList = list },
        SETMESSAGEREADEDLIST (state, list) { state.messageReadedList = list },
        SETMESSAGETRASHLIST (state, list) { state.messageTrashList = list },

        END: function () {} // 防呆设计
    },
    actions: {
        getNewMessageNum ({ commit }) { // 读取最新消息数量
            return new Promise((resolve, reject) => {
                Api.system.getNewMessageNum().then(num => {
                    commit('NEWMESSAGENUM', num)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        getMessageList ({ state, commit }) { // 获取消息列表，其中包含未读、已读、回收站三个列表
        },
        getContentByMsgId ({ state, commit }, { msgid }) { // 根据当前点击的消息的id获取内容
        },
        hasRead ({ state, commit }, { msgid }) { // 把一个未读消息标记为已读
        },
        removeReaded ({ commit }, { msgid }) { // 删除一个已读消息到回收站
        },
        restoreTrash ({ commit }, { msgid }) { // 还原一个已删除消息到已读消息
        }
    }
}
