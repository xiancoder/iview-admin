// 没想好怎么用
import axios from 'axios' // http请求库
import config from '@/config' // 自定义配置
// 数据存储
export const cache = {
    data: {},
    time: {},
    set (key, data) {
        const now = +(new Date())
        this.data[key] = data
        this.time[key] = now
    },
    get (key) {
        const now = +(new Date())
        if (this.time[key] && now - this.time[key] < config.cacheTime) {
            return this.data[key]
        }
        delete this.time[key]
        delete this.data[key]
        return null
    },
    clear (key) {
        delete this.data[key]
        delete this.time[key]
    }
}
// 建立唯一的key值
function buildUrl (url, params = {}) {
    const sortedParams = Object.keys(params).sort().reduce((result, key) => {
        result[key] = params[key]
        return result
    }, {})
    url += `?${JSON.stringify(sortedParams)}`
    return url
}
// 缓存,建议只给get加缓存
export default (config) => {
    const { url, method, params, data } = config
    let index // 建立索引
    if (method === 'get') { index = buildUrl(url, params) } else { index = buildUrl(url, data) }
    let responsePromise = cache.get(index)
    if (responsePromise) {
        return Promise.resolve(JSON.parse(JSON.stringify(responsePromise))) // 对象是引用，为了防止污染数据源
    } else {
        responsePromise = (async () => {
            try {
                const response = await axios.defaults.adapter(config)
                cache.set(index, response)
                return Promise.resolve(JSON.parse(JSON.stringify(response))) // 同时发送多次一样的请求，没办法防止污染数据源，只有业务中去实现
            } catch (reason) {
                cache.clear(index)
                return Promise.reject(reason)
            }
        })()
        cache.set(index, responsePromise) // put the promise for the non-transformed response into cache as a placeholder
    }
    return responsePromise
}
