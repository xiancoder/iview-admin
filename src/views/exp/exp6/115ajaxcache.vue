<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">多次请求同一接口的缓存方法</div>
            <div class="blogContent" v-highlight>
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
