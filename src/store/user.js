export const store = {
    namespaced: true, // 作用域
    state: {
        unreadCount: 0,
        messageUnreadList: [],
        messageReadedList: [],
        messageTrashList: []
    },
    mutations: {
        setMessageCount (state, count) { state.unreadCount = count },
        setMessageUnreadList (state, list) { state.messageUnreadList = list },
        setMessageReadedList (state, list) { state.messageReadedList = list },
        setMessageTrashList (state, list) { state.messageTrashList = list }
    },
    getters: {
        messageUnreadCount: state => state.messageUnreadList.length,
        messageReadedCount: state => state.messageReadedList.length,
        messageTrashCount: state => state.messageTrashList.length
    },
    actions: {
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
