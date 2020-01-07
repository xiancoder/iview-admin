<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">主要是为了测试一下数据传参</div>
            <div class="blogContent" v-highlight style="font-family: georgia;">
                <p><Icon type="md-checkmark" style="color:green"/> 原来基本有效 现在完整有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>在http协议中，其实并没有对url长度作出限制，往往url的最大长度和用户浏览器和Web服务器有关，不一样的浏览器，能接受的最大长度往往是不一样的</p>
                <p>当然，不一样的Web服务器能够处理的最大长度的URL的能力也是不一样的。</p>
                <p>IE浏览器对URL的最大限制为<b>2083</b>个字符，</p>
                <p>Firefox浏览器URL的长度限制为<b>65,536</b>个字符，</p>
                <p>Safari (Browser)URL最大长度限制为 <b>80,000</b>个字符。</p>
                <p>Opera (Browser)URL最大长度限制为<b>190,000</b>个字符。</p>
                <p>Google (chrome)url最大长度限制为<b>8182</b>个字符。长度限制超过时返回如下错误。</p>
                <p class="text-danger">============ 414 Request-URI Too Large ============</p>
                <p>Apache (Server)能接受最大url长度为<b>8,192</b>个字符。</p>
                <p>Microsoft Internet Information Server(IIS)能接受最大url的长度为<b>16,384</b>个字符。</p>
                <p>Perl HTTP::Daemon 至少可以接受url长度限制为8000字符。</p>
                <p>ngnix 可以通过修改配置来改变url请求串的url长度限制。默认值： 1k</p>
                <p><Icon type="md-checkmark" style="color:green"/> 多少有点差距 但是基本没错</p>
                <p><Icon type="md-close" style="color:red"/> 请注意 除了IE 大部分主流浏览器都支持成千上万 但对于大对象来说依然有点小</p>
                <hr />
                <p class="text-danger">escape() 不能直接用于URL编码，它的真正作用是返回一个字符的Unicode编码值。</p>
                <p class="text-danger">escape 不编码字符有69个：*，+，-，.，/，@，_，0-9，a-z，A-Z。</p>
                <p class="text-danger">不常用。 escape('张') 结果："%u5F20" 1个汉字转成了6个字符</p>
                <hr />
                <p class="text-danger">encodeURI 和 decodeURI把URI字符串采用UTF-8编码格式转化成escape各式的字符串。</p>
                <p class="text-danger">encodeURI不编码字符有82个：!，#，$，&，'，(，)，*，+，,，-，.，/，:，;，=，?，@，_，~，0-9，a-z，A-Z</p>
                <p class="text-danger">encodeURI()用于整个url编码 1个汉字转成了9个字符</p>
                <p>转码前 http://www.oschina.net/search?scope=bbs&q=C语言</p>
                <p>转码后 http://www.oschina.net/search?scope=bbs&q=C%E8%AF%AD%E8%A8%80</p>
                <hr />
                <p class="text-danger">encodeURIComponent 和 decodeURIComponent与encodeURI()的区别是，它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码。</p>
                <p class="text-danger">因此，"; / ? : @ & = + $ , #"，这些在encodeURI()中不被编码的符号，在encodeURIComponent()中统统会被编码。</p>
                <p class="text-danger">至于具体的编码方法，两者是一样。把URI字符串采用UTF-8编码格式转化成escape格式的字符串。</p>
                <p>编码：encodeURIComponent('http://www.baidu.com?name=zhang@xiao@jie&order=1')</p>
                <p>结果："http%3A%2F%2Fwww.baidu.com%3Fname%3Dzhang%40xiao%40jie%26order%3D1"</p>
                <hr />
                <Form ref="form5596" :model="frm" :label-width="150">
                    <FormItem label="输入框" prop="input1">
                        <Input type="text" v-model="frm.input1" placeholder="输入数字" style="width: 450px"/>
                    </FormItem>
                    <FormItem label="输入框" prop="input2">
                        <Input type="text" v-model="frm.input2" placeholder="输入文本" style="width: 450px"/>
                    </FormItem>
                    <FormItem>
                        <Button type="default" @click="test01">this.$router.push({name: this.myRoute, query: this.frm})</Button>
                        <Divider type="vertical" />
                        <Button type="default" @click="test02">this.$router.push({name: this.myRoute, params: this.frm}).then(() => {})</Button>
                        <Divider type="vertical" />
                        <Button type="default" @click="test03">this.$router.replace({name: this.myRoute, query: this.frm})</Button>
                        <Divider type="vertical" />
                        <Button type="default" @click="test04">this.$router.replace({name: this.myRoute, params: this.frm}).then(() => {})</Button>
                    </FormItem>
                    <FormItem>
                        <script type="text/js">
                            /* 本页面跳转 push 携带参数 */
                            test01 () { this.$router.push({name: this.myRoute, query: this.frm}) },
                            /* 刷新参数丢失 */
                            test02 () { this.$router.push({name: this.myRoute, params: this.frm}).then(() => {}) },
                            /* 本页面跳转 replace 携带参数 */
                            test03 () { this.$router.replace({name: this.myRoute, query: this.frm}) },
                            /* 刷新参数丢失 */
                            test04 () { this.$router.replace({name: this.myRoute, params: this.frm}).then(() => {}) }
                            /* 这4个玩意不能在同页面reload触发mounted监听 */
                        </script>
                    </FormItem>
                </Form>
                <hr />
                <p>
                    <Button type="default" @click="test05">将参数存入状态ls并且在url存一个下标</Button>
                    <Divider type="vertical" />
                    <Button type="default" @click="test05e">读取参数并console</Button>
                </p>
                <p>
                    <Button type="default" @click="test06">直接存</Button>
                    <Divider type="vertical" />
                    <Button type="default" @click="test06e">读取参数并console</Button>
                </p>
                <p>
                    <Button type="default" @click="test07">对象整成json存</Button>
                    <Divider type="vertical" />
                    <Button type="default" @click="test07e">读取参数并console</Button>
                </p>
                <p>
                    <Button type="default" @click="test08">对象整成json并bs64转码</Button>
                    <Divider type="vertical" />
                    <Button type="default" @click="test08e">读取参数并console</Button>
                </p>

                <hr />
                <p>尝试使用bs64来加密存储内容</p>
                <p>encodeURIComponent 仅针对汉字/符号转码</p>
                <p>bs64 对所有内容进行转码...</p>
                <p class="text-danger">不好决定 先这样尝试着</p>
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
import { extendF } from '@/utils/object'
import { encodeBase64, decodeBase64 } from '@/utils/string'

export default {
    data () {
        return {
            frm: {
                input1: '123',
                input2: '哈哈哈哈哈哈'
            },
            searchParam1234: {}
        }
    },
    computed: { // 计算属性
        myRoute () { return this.$route.name }
    },
    methods: {
        test01 () { this.$router.push({name: this.myRoute, query: this.frm}) },
        test02 () { this.$router.push({name: this.myRoute, params: this.frm}).then(() => {}) },
        test03 () { this.$router.replace({name: this.myRoute, query: this.frm}) },
        test04 () { this.$router.replace({name: this.myRoute, params: this.frm}).then(() => {}) },

        test05 () { this.saveParamState1(this.frm) },
        test05e () { console.log(this.getParamState1()) },
        test06 () { this.saveParamState2(this.frm) },
        test06e () { console.log(this.getParamState2()) },
        test07 () { this.saveParamState3(this.frm) },
        test07e () { console.log(this.getParamState3()) },
        test08 () { this.saveParamState4(this.frm) },
        test08e () { console.log(this.getParamState4()) },

        saveParamState1 (obj) { // 保存当前参数 状态ls
            const time = new Date().getTime()
            const name = this.$router.history.current.name
            const paramList = this.$store.state.system.paramList
            paramList[name + time] = obj
            const query = { 'search': time }
            this.$router.replace({ name, query })
        },
        getParamState1 () { // 获取当前参数 状态ls
            const time = this.$router.history.current.query.search
            if (time) {
                const name = this.$router.history.current.name
                const paramList = this.$store.state.system.paramList
                const obj = paramList[name + time]
                return obj
            }
            return {}
        },
        saveParamState2 (obj) { // 保存当前参数 直接存
            this.$router.replace({ name, query: obj })
        },
        getParamState2 () { // 获取当前参数 直接存
            return this.$route.query
        },
        saveParamState3 (obj) { // 保存当前参数 对象整成json存
            const json = JSON.stringify(obj)
            this.$router.replace({ name, query: {json} })
        },
        getParamState3 () { // 获取当前参数 对象整成json存
            const json = this.$route.query.json
            if (json) { return JSON.parse(json) }
            return {}
        },
        saveParamState4 (obj) { // 保存当前参数 对象整成json并bs64转码
            const json = encodeBase64(JSON.stringify(obj))
            this.$router.replace({ name, query: {json} })
        },
        getParamState4 () { // 获取当前参数 对象整成json并bs64转码
            const json = this.$route.query.json
            if (json) { return JSON.parse(decodeBase64(json)) }
            return {}
        }
    },
    mounted () {
        this.searchParam1234 = this.$route.query
        extendF(this.frm, this.searchParam1234) // 将搜索对象的值转移给组件 防止误解
    }
}
</script>
