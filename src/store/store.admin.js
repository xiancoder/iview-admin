// 项目::管理员/登录用户/操作人状态管理模块
// 负责::所有的管理员状态都集中在这里
// 2019年12月30日18:32:05 更新

import { Api } from '@/api'
import { router } from '@/router' // 自定义路由定义

export default {
    namespaced: true, // 作用域,配置上以后才能够dispach system/xxx 建议必须 不同的状态里有相同字段值
    state: { // 缓存字段以及默认值
        userAvatorPath: '', // 管理员头像
        userName: 'User', // 管理员名
        userId: '999', // 管理员ID
        userEmail: 'admin@163.com', // 管理员EMAIL
        userDeptId: 0, // 管理员部门ID 1 总公司 2 子公司A 3 子公司B
        userPostId: 0, // 管理员职位ID 1 员工 2 经理 3 总监 4 老总
        userRoleId: 0, // 管理员角色ID 1 广告主 2 运营 3 财务 4 技术
        userRoleName: '无', // 管理员角色NAME
        userCertificatId: 0, // 账户类型 1 个人 2 公司

        token: '', // 服务器token 用于存在header中与服务器交换数据使用

        platformId: 0, // 平台ID 1 A平台 2 B平台 3 C平台 4 D平台
        firstAuthNotise: false, // 是否第一次提示请认证通知
        isAuth: false, // 是否认证

        end: 1 // 防呆设计
    },
    getters: {
        access: state => !!state.token // 登录标识 根据token来判断
    },
    mutations: { // 触发事件 注意 vue只有mutations才能触发任意使用状态的代码位置的监听渲染 建议大写
        USERAVATORPATH (state, v) { state.userAvatorPath = v },
        USERNAME (state, v) { state.userName = v },
        USERID (state, v) { state.userId = v },
        USEREMAIL (state, v) { state.userEmail = v },
        USERDEPTID (state, v) { state.userDeptId = parseInt(v) },
        USERPOSTID (state, v) { state.userPostId = parseInt(v) },
        USERROLEID (state, v) { state.userRoleId = parseInt(v) },
        USERROLENAME (state, v) { state.userRoleName = v },
        USERCERTIFICATID (state, v) { state.usercertificatId = parseInt(v) },

        TOKEN (state, token) { window.localStorage.clear(); state.token = token },

        PLATFORMID (state, v) { state.platformId = v },
        FIRSTAUTH (state, v) { state.firstAuth = parseInt(v) === 1 },
        ISAUTH (state, v) { state.isAuth = parseInt(v) === 1 },

        END: function () {} // 防呆设计
    },
    actions: {
        getUserInfo ({ state, commit }) { // 获取管理员相关信息
            return new Promise((resolve, reject) => {
                Api.system.getUserInfo(state.token).then(data => {
                    commit('USERAVATORPATH', data.userPhoto) // 设置管理员头像
                    commit('USERNAME', data.userName) // 设置管理员名
                    commit('USERID', data.id) // 设置管理员ID
                    commit('USEREMAIL', data.email) // 设置管理员EMAIL
                    commit('USERDEPTID', data.deptId) // 设置管理员部门ID
                    commit('USERPOSTID', data.postId) // 设置管理员职位ID
                    commit('USERROLEID', 3) // 设置管理员角色ID
                    commit('USERROLENAME', data.roleName) // 设置管理员角色NAME
                    commit('USERCERTIFICATID', data.usercertificatId) // 设置管理员账户类型

                    const bool = data.isAuth
                    if (bool) {
                        commit('ISAUTH', true) // 设置已经认证
                        commit('FIRSTAUTH', false) // 设置第一次已经提示请认证通知
                    }
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        setRole ({ commit }, role) { // 设置管理员角色
            return new Promise((resolve, reject) => {
                commit('USERROLEID', role)
                resolve()
            })
        },
        getPlatformId ({ commit }) { // 获取平台ID
            let host = window.location.host
            const company = Api.system.companyList('host')
            for (var i = 0, vlen = company.length; i < vlen; i++) {
                if (company[i].name === host) {
                    commit('PLATFORMID', company[i].id)
                    return i
                }
            }
        },
        certification ({ commit }, param) { // 认证
            return new Promise((resolve, reject) => {
                Api.system.certification(param).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        login ({ commit }, param) { // 广告主登陆
            return new Promise((resolve, reject) => {
                Api.system.login(param).then(res => {
                    commit('TOKEN', 'YX')
                    commit('USERROLEID', 1)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        staffLogin ({ commit }, param) { // 员工登录
            return new Promise((resolve, reject) => {
                Api.system.staffLogin(param).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        logout ({ state, commit }) { // 登出
            return new Promise((resolve, reject) => {
                if (state.token) {
                    state.token = ''
                    commit('TOKEN', '')
                    console.info('%c仙 登出清场', 'color:#05ff0f;background:#000;padding:0 5px;')
                } else {
                    return false
                }
                // 现在login 负责用户登录和员工登录
                // if (state.userRoleId === 1) { router.push({name: 'login'}) }
                // else { router.push({name: 'slogin'}) }
                router.push({name: 'login'})
                Api.system.logout().then(() => {
                    console.info('%c仙 登出成功', 'color:#05ff0f;background:#000;padding:0 5px;')
                    resolve()
                }, errorMsg => {
                    console.info('%c仙 登出失败', 'color:#05ff0f;background:#000;padding:0 5px;')
                    resolve()
                })
            })
        }
    }
}
