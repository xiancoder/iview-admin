import { getMessageInit, getContentByMsgId, hasRead, removeReaded, restoreTrash } from '@/mock/data'

export default {
    state: {
        messageUnreadList: [],
        messageReadedList: [],
        messageTrashList: [],
        messageContentStore: {}
    },
    mutations: {
        setMessageUnreadList (state, list) {
            state.messageUnreadList = list
        },
        setMessageReadedList (state, list) {
            state.messageReadedList = list
        },
        setMessageTrashList (state, list) {
            state.messageTrashList = list
        },
        updateMessageContentStore (state, { msgId, content }) {
            state.messageContentStore[msgId] = content
        },
        moveMsg (state, { from, to, msgid }) {
            const index = state[from].findIndex(_ => _.msg_id === msgid)
            const msgItem = state[from].splice(index, 1)[0]
            msgItem.loading = false
            state[to].unshift(msgItem)
        },
        setMessageCount (state, count) {
            state.unreadCount = count
        }
    },
    getters: {
        messageUnreadCount: state => state.messageUnreadList.length,
        messageReadedCount: state => state.messageReadedList.length,
        messageTrashCount: state => state.messageTrashList.length
    },
    actions: {
        // 获取消息列表，其中包含未读、已读、回收站三个列表
        getMessageList ({ state, commit }) {
            return new Promise((resolve, reject) => {
                getMessageInit().then(res => {
                    const { unread, readed, trash } = res.data
                    commit('setMessageUnreadList', unread.sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    commit('setMessageReadedList', readed.map(_ => {
                        _.loading = false
                        return _
                    }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    commit('setMessageTrashList', trash.map(_ => {
                        _.loading = false
                        return _
                    }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 根据当前点击的消息的id获取内容
        getContentByMsgId ({ state, commit }, { msgId }) {
            return new Promise((resolve, reject) => {
                let contentItem = state.messageContentStore[msgId]
                if (contentItem) {
                    resolve(contentItem)
                } else {
                    getContentByMsgId(msgId).then(res => {
                        const content = res.data
                        commit('updateMessageContentStore', { msgId, content })
                        resolve(content)
                    })
                }
            })
        },
        // 把一个未读消息标记为已读
        hasRead ({ state, commit }, { msgId }) {
            return new Promise((resolve, reject) => {
                hasRead(msgId).then(() => {
                    commit('moveMsg', {
                        from: 'messageUnreadList',
                        to: 'messageReadedList',
                        msgId
                    })
                    commit('setMessageCount', state.unreadCount - 1)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 删除一个已读消息到回收站
        removeReaded ({ commit }, { msgId }) {
            return new Promise((resolve, reject) => {
                removeReaded(msgId).then(() => {
                    commit('moveMsg', {
                        from: 'messageReadedList',
                        to: 'messageTrashList',
                        msgId
                    })
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 还原一个已删除消息到已读消息
        restoreTrash ({ commit }, { msgId }) {
            return new Promise((resolve, reject) => {
                restoreTrash(msgId).then(() => {
                    commit('moveMsg', {
                        from: 'messageTrashList',
                        to: 'messageReadedList',
                        msgId
                    })
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}
