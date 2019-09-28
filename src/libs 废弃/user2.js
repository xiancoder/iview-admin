export default {
    state: {
        userName: '',
        userId: '',
        avatorImgPath: '',
        token: '',
        access: '',
        hasGetInfo: false,
        unreadCount: 0,
        messageUnreadList: [],
        messageReadedList: [],
        messageTrashList: [],
        messageContentStore: {}
    },
    mutations: {
        setAvator (state, avatorPath) {
            state.avatorImgPath = avatorPath
        },
        setUserId (state, id) {
            state.userId = id
        },
        setUserName (state, name) {
            state.userName = name
        },
        setAccess (state, access) {
            state.access = access
        },
        setToken (state, token) {
            state.token = token
        },
        setHasGetInfo (state, status) {
            state.hasGetInfo = status
        },
        setMessageCount (state, count) {
            state.unreadCount = count
        },
        setMessageUnreadList (state, list) {
            state.messageUnreadList = list
        },
        setMessageReadedList (state, list) {
            state.messageReadedList = list
        },
        setMessageTrashList (state, list) {
            state.messageTrashList = list
        },
        updateMessageContentStore (state, { msgid, content }) {
            state.messageContentStore[msgid] = content
        },
        moveMsg (state, { from, to, msgid }) {
            const index = state[from].findIndex(_ => _.msgid === msgid)
            const msgItem = state[from].splice(index, 1)[0]
            msgItem.loading = false
            state[to].unshift(msgItem)
        }
    },
    getters: {
        messageUnreadCount: state => state.messageUnreadList.length,
        messageReadedCount: state => state.messageReadedList.length,
        messageTrashCount: state => state.messageTrashList.length
    },
    actions: {
        // 登录
        handleLogin ({ commit }, {userName, password}) {
            userName = userName.trim()
            return new Promise((resolve, reject) => {
            })
        },
        // 退出登录
        handleLogOut ({ state, commit }) {
            return new Promise((resolve, reject) => {
                // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
                // commit('setToken', '')
                // commit('setAccess', [])
                // resolve()
            })
        },
        // 获取用户相关信息
        getUserInfo ({ state, commit }) {
            return new Promise((resolve, reject) => {
            })
        },
        // 此方法用来获取未读消息条数，接口只返回数值，不返回消息列表
        getUnreadMessageCount ({ state, commit }) {
        },
        // 获取消息列表，其中包含未读、已读、回收站三个列表
        getMessageList ({ state, commit }) {
        },
        // 根据当前点击的消息的id获取内容
        getContentByMsgId ({ state, commit }, { msgid }) {
        },
        // 把一个未读消息标记为已读
        hasRead ({ state, commit }, { msgid }) {
        },
        // 删除一个已读消息到回收站
        removeReaded ({ commit }, { msgid }) {
        },
        // 还原一个已删除消息到已读消息
        restoreTrash ({ commit }, { msgid }) {
        }
    }
}
