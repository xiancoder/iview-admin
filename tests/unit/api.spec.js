/**
* 功能：单元测试页面
* 作者：liuyp
* 时间：2019年10月10日14:56:59
* 语句: npm run test:unit tests/unit/api.spec.js
*/
import systemApi from '@/api/system'
import axios from 'axios'
var CancelToken = axios.CancelToken

jest.mock('@/tools/index.js', () => ({
    success: (msg) => { console.log('成功', msg) },
    error: (msg) => { console.log('失败', msg) }
}))

axios.interceptors.request.use( // 开始设置请求 发起的拦截处理
    config => { // config 代表发起请求的参数的实体
        config.url = 'http://localhost:4010/' + config.url.replace('api/', 'web/')
        console.log(config.url)
        return config
    }
)

describe('api.spec.js', () => {
    test('真实测试promise 没有问题', async () => {
        const userName = 'abc'
        const password = 'abc'
        const token = await systemApi.unitTest1({ userName, password })
        expect(token).toBe('ok')
    }, 3e3)
    test('真实测试ajax 代理域名问题简单解决', async () => {
        const userName = 'abc'
        const password = 'abc'
        const token = await systemApi.login({ userName, password })
        expect(token).not.toBe(undefined)
    }, 3e3)
    test('真实测试ajax axios.get', () => {
        var source = CancelToken.source();
        return axios.get('api/system/getUserInfo', {
            cancelToken: source.token
        }).then(response => {
            const res = response.data
            const data = res.data
            expect(data).not.toBe(null)
            expect(data.id).not.toBe('')
            expect(data.email).toBe('whereispal5@163.com')
        })
    }, 3e3)
    test('真实测试ajax $api', () => {
        return systemApi.unitTest2().then(response => {
            const res = response.data
            const data = res.data
            expect(data).not.toBe(null)
            expect(data.id).not.toBe('')
            expect(data.email).toBe('whereispal5@163.com')
        })
    }, 3e3)
    test('测试ajax getNewMessageNum', () => {
        return systemApi.getNewMessageNum().then(res => {
            expect(res).toBe(12)
        })
    }, 3e3)
    test('测试ajax getPowerList', () => {
        return systemApi.getPowerList().then(list => {
            expect(list).not.toBe(null)
        })
    }, 3e3)
    test('测试ajax logout', () => {
        return systemApi.logout().then(res => {
            expect(res).toBe(1)
        })
    }, 3e3)
    test('测试ajax clearCache', () => {
        return systemApi.clearCache().then(res => {
            expect(res).toBe(1)
        })
    }, 3e3)
})
