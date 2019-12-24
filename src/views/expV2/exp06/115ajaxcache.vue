<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">多次请求同一接口的缓存方法</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>找资料解决一下 人事管理中部门下拉框 内容多 快速切换页面造成多次读取的现象</p>
                <p>ajax搞一个30秒缓存 相同的请求(url+参数) 第二次不再请求接口</p>
                <p>使用axios的前后守卫 失败了 不知道怎么拦截已经返回参数</p>
                <p>过滤器 这个好 去掉了原本插件的localhost刚刚好</p>
                <p>引用部分在考虑一下</p>
                <p>
                    <Button type="primary" @click="ajax1()">ajax1</Button>
                    <Divider type="vertical" />
                    <Button type="primary" @click="ajax2()">ajax2</Button>
                    <Divider type="vertical" />
                    <Button type="primary" @click="ajax3()">ajax3</Button>
                    <Divider type="vertical" />
                    <span>{{ callback1 }}</span>
                </p>
                <hr />
                <script type="text/js">
                    listCache () { // 获得部门列表树(这个不经常改 可以缓存)
                        return cacher({
                            method: 'GET',
                            url: '/api/hr/getdepartmentCache',
                            data: {}
                        })
                    },
                </script>
                <script type="text/js">
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
                </script>
                <p>axios 配置 拦截器 后为什么会多一次返回 204 的请求</p>
                <p>跟 axios 没关系，那个返回 204 的是 options 请求，跟 CORS 的跨域支持请求有关。</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            callback1: '返回信息',
            callback2: '返回信息'
        }
    },
    methods: {
        ajax1 () {
            this.$api.department.listCache().then(response => { // 请注意这个返回值是整个结果对象
                this.callback1 += ' | ' + response.data
            })
        },
        ajax2 () {
            this.ajax1()
            this.ajax1()
        },
        ajax3 () {
            this.ajax1()
            this.ajax1()
            this.ajax1()
        }
    }
}
</script>
