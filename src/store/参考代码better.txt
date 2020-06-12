const state = {
    count: 0
}
// mutations/actions/getters 前面的export是为了配合测试
export const mutations = {
    increment: state => state.count++,
    decrement: state => state.count--
}
export const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement')
}
export const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
export default {
    state,
    mutations,
    actions,
    getters
}
