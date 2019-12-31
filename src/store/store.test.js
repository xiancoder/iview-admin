export default {
    namespaced: true, // 作用域
    state: {
        testState: 0
    },
    actions: {
        handleTestState ({ state }, testState) {
            state.testState = testState
        }
    }
}
