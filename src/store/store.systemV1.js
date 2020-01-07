// 项目::系统状态管理模块
// 负责::所有的系统状态都集中在这里
// 2019年12月30日19:44:34 更新

export default {
    namespaced: true, // 作用域,配置上以后才能够dispach system/xxx 建议必须 不同的状态里有相同字段值
    state: { // 缓存字段以及默认值
        theme: 'dark', // 主题 ----------- 未开发 计划做白色和黑色主题
        shrink: false, // 界面树形菜单折叠状态
        lang: '', // 系统表现语言 ----------- 未开发 资源国际化未配置
        locking: false, // 锁屏状态
        errorList: [], // 错误列表 收集系统所有的错误 伺机发送
        paramList: {}, // 页面请求参数记录 根据url中的时间戳对应读取 ----------- 考虑废弃

        end: 1 // 防呆设计
    },
    getters: {
        errorCount: state => state.errorList.length // 错误数量
    },
    mutations: { // 触发事件 注意 vue只有mutations才能触发任意使用状态的代码位置的监听渲染 建议大写
        THEME (state, v) { state.theme = v },
        SHRINK (state, b) { state.shrink = b },
        LANG (state, v) { state.lang = v },
        LOCKING (state, b) { state.locking = b },
        ERRORLIST (state, error) { state.errorList.push(error) },
        CLEARERRORLIST (state, error) { state.errorList = [] },
        // PARAMLIST 不需要触发渲染

        END: function () {} // 防呆设计
    },
    actions: {
        setTheme ({ commit }, v) { commit('THEME', v) }, // 修改主题
        updateTheme ({ commit }, { theme, shrink }) { // 修改主题相关
            commit('THEME', theme)
            commit('SHRINK', !!shrink)
        },
        setShrink ({ commit }, b) { commit('SHRINK', !!b) }, // 修改界面树形菜单折叠状态
        setLocking ({ commit }, b) { commit('LOCKING', !!b) }, // 锁屏状态
        // setLang 暂不实现
        pushError ({ commit }, error) { // 增加一个错误
            commit('ERRORLIST', error)
            console.log('定时下发报错信息记录')
        },
        clearError ({ commit }) { // 错误太多 看着烦
            commit('CLEARERRORLIST')
            console.log('清空报错信息记录')
        },
        // pageParamList ({ state }, { title, content }) {}, // 不需要 也不好实现
        setTabHiddenWatching () { // 切换浏览器标签触发的事件
            const hiddenProperty = ['hidden', 'webkitHidden', 'mozHidden', 'msHidden']
            const len = hiddenProperty.length
            let propertyKey = ''
            for (var i = 0; i < len; i++) {
                if (hiddenProperty[i] in document) {
                    propertyKey = hiddenProperty[i] // 获取具体的hidden属性名
                    break
                }
            }
            let eventKey = '';
            if (propertyKey && propertyKey !== '') {
                eventKey = propertyKey.replace(/hidden/i, 'visibilitychange')
            }
            // 获取具体事件名eventKey
            const tabPageVisibilityManager = function (pauseCallback, resumeCallback) {
                document.addEventListener(eventKey, function () {
                    if (!document[propertyKey]) {
                        if (resumeCallback) { resumeCallback() }
                    } else {
                        if (pauseCallback) { pauseCallback() }
                    }
                })
            }
            let oldTitle = ''
            tabPageVisibilityManager(function () { // 暂停
                oldTitle = window.document.title
                window.document.title = `已离开 | ${oldTitle}`
            }, function () { // 恢复
                window.document.title = oldTitle
            });
        }
    }
}
