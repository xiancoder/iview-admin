// 项目::聊天模块
// 负责::所有的聊天状态都集中在这里
// 2020年2月6日 10:23:39 更新

export default {
    namespaced: true, // 作用域,配置上以后才能够dispach system/xxx 建议必须 不同的状态里有相同字段值
    state: { // 缓存字段以及默认值
        user: { name: 'coffce', img: 'http://q1.qlogo.cn/g?b=qq&nk=3561301930&s=100' }, // 当前用户
        sessions: [ // 会话列表
            {
                id: 1,
                user: { name: '示例介绍', img: 'http://q1.qlogo.cn/g?b=qq&nk=2169395816&s=100' },
                messages: [
                    {
                        content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                        date: '2020年2月6日 14:16:24'
                    }, {
                        content: '项目地址: https://github.com/coffcer/vue-chat',
                        date: '2020年2月6日 14:16:24'
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'webpack',
                    img: 'http://q1.qlogo.cn/g?b=qq&nk=2187392909&s=100'
                },
                messages: []
            }
        ],
        currentId: 1, // 当前选中的会话
        filterKey: '', // 过滤出只包含这个key的会话

        end: 1 // 防呆设计
    },
    getters: {
        user: (state) => { return state.user },
        sessions: (state) => { return state.sessions },
        currentSessions: ({ sessions, currentId }) => sessions.find(session => session.id === currentId),
        filterKey: (state) => { return state.filterKey },
        currentId: (state) => { return state.currentId }
    },
    mutations: { // 触发事件 注意 vue只有mutations才能触发任意使用状态的代码位置的监听渲染 建议大写
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session')
            if (data) { state.sessions = JSON.parse(data); }
        },
        // 发送消息
        SEND_MESSAGE ({ sessions, currentId }, content) {
            let session = sessions.find(item => item.id === currentId)
            session.messages.push({ content: content, date: new Date(), self: true })
        },
        // 选择会话
        SELECT_SESSION (state, id) { state.currentId = id; },
        // 搜索
        SET_FILTER_KEY (state, value) { state.filterKey = value; },

        END: function () {} // 防呆设计
    },
    actions: {
        initData: ({ commit }) => commit('INIT_DATA'),
        sendMessage: ({ commit }, content) => commit('SEND_MESSAGE', content),
        selectSession: ({ commit }, id) => commit('SELECT_SESSION', id),
        search: ({ commit }, value) => commit('SET_FILTER_KEY', value)
    }
}
