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
        messageContentStore: {},

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
        UPDATEMESSAGECONTENTSTORE (state, { msgId, content }) { state.messageContentStore[msgId] = content },
        MOVEMSG (state, { from, to, msgid }) {
            const index = state[from].findIndex(_ => _.msg_id === msgid)
            const msgItem = state[from].splice(index, 1)[0]
            msgItem.loading = false
            state[to].unshift(msgItem)
        },

        END: function () {} // 防呆设计
    },
    actions: {
        getMessageList ({ state, commit }) { // 获取消息列表，其中包含未读、已读、回收站三个列表
            return new Promise((resolve, reject) => {
                Api.message.list().then(data => {
                    const { unread, readed, trash } = data
                    commit('SETMESSAGEUNREADLIST', unread.sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    commit('SETMESSAGEREADEDLIST', readed.map(_ => { _.loading = false; return _ }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    commit('SETMESSAGETRASHLIST', trash.map(_ => { _.loading = false; return _ }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getContentByMsgId ({ state, commit }, { msgId }) { // 根据当前点击的消息的id获取内容
            return new Promise((resolve, reject) => {
                let contentItem = state.messageContentStore[msgId]
                if (contentItem) { return resolve(contentItem) }
                Api.message.listOne(msgId).then(content => {
                    commit('UPDATEMESSAGECONTENTSTORE', { msgId, content })
                    resolve(content)
                })
            })
        },
        hasRead ({ state, commit }, { msgId }) { // 把一个未读消息标记为已读
            return new Promise((resolve, reject) => {
                Api.message.hasRead(msgId).then(() => {
                    commit('MOVEMSG', { from: 'messageUnreadList', to: 'messageReadedList', msgId })
                    commit('SETMESSAGECOUNT', state.unreadCount - 1)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        removeReaded ({ commit }, { msgId }) { // 删除一个已读消息到回收站
            return new Promise((resolve, reject) => {
                Api.message.removeReaded(msgId).then(() => {
                    commit('MOVEMSG', { from: 'messageReadedList', to: 'messageTrashList', msgId })
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        restoreTrash ({ commit }, { msgId }) { // 还原一个已删除消息到已读消息
            return new Promise((resolve, reject) => {
                Api.message.restoreTrash(msgId).then(() => {
                    commit('MOVEMSG', { from: 'messageTrashList', to: 'messageReadedList', msgId })
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getNewMessageNum ({ commit }) { // 读取最新消息数量
        }
    }
}
