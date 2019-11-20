<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">发布任务表单</div>
            <div class="blogContent" v-highlight>
                <script type="text/html">
                    &lt;div v-for=&quot;alias in expression&quot;&gt; { { alias } }&lt;/div&gt;
                    &lt;div v-for=&quot;item in items&quot;&gt;{ { item } }&lt;/div&gt;
                    &lt;div v-for=&quot;(item, index) in items&quot;&gt;{ { item } } { { index } }&lt;/div&gt;
                    &lt;div v-for=&quot;val in object&quot;&gt;&lt;/div&gt;
                    &lt;div v-for=&quot;(val, key) in object&quot;&gt;&lt;/div&gt;
                    &lt;div v-for=&quot;(val, key, index) in object&quot;&gt;&lt;/div&gt;
                    &lt;div v-for=&quot;itme in items&quot; :key=&quot;item.id&quot;&gt; { { item.text } }&lt;/div&gt;
                </script>
                <hr />
                <p>封装的组件 应对大量按钮和对应方法表</p>
                <titleAddBtn :addBtnList="addBtnList" @clkCallBk="listenCall"></titleAddBtn>
                <script type="text/html">
                    <titleAddBtn :addBtnList="addBtnList" @clkCallBk="listenCall"></titleAddBtn>
                </script>
                <hr />
                <p>把if,show,for等语句抽取出来放在template上面，把绑定的事件放在temlpate里面的元，可以使html结构更加清晰，还可以改善一个标签过长的情况。</p>
                <script type="text/html" v-pre>
                    <template v-for="(item, index) in listDemo">
                        <Button>测试 {{item.name}}</Button>
                        <Divider type="vertical" />
                    </template>
                </script>
                <hr />
                <template v-for="item in listDemo">
                    <Button>测试 {{item.name}}</Button>
                    <Divider type="vertical" />
                </template>
                <p class="text-danger">Custom elements in iteration require 'v-bind:key' directives 迭代中的元素需要有“v-bind:key”指令</p>
                <p>写个 :key="" 这个就行了???</p>
                <p> <span v-for="(item, index) in listDemo" :key="index" >{{item.name}}</span> </p>
                <p>template用key不能提升性能，是为了防止Vue默认的元素复用导致某些情况下出现数据绑定渲染问题</p>
                <p>而template是虚拟节点，不存在复用</p>
                <p>如果你想要绑定的话，给下面的p和span标签绑定就好，一般只需要给和数据绑定有关的元素绑定key值</p>
                <hr />
                <script type="text/html" v-pre>
                    <xxx v-for="item in list1.filter(row=>{return row.includes(search)})">
                </script>
                <p>
                    <span>根据过滤条件过滤数据 1 单一搜索模糊匹配 2 多重搜索精准匹配 3 禁止使用逗号</span>
                    <Input type="text" v-model="search" placeholder="请输入过滤条件 数字" style="width: 200px"/>
                </p>
                <template v-for="item in list1.filter(filterFun)">
                    <Button>循环 {{item}}</Button>
                    <Divider type="vertical" />
                </template>
                <script type="text/js">
                    filterFun (row) { // 过滤方法
                        // return row > this.search // 根据大小判断
                        if ( this.search.includes(',') ) { // 多重搜索精准匹配 禁止使用逗号因为要靠它来分割
                            const searchArr = this.search.split(',')
                            return searchArr.includes(row)
                        } else { // 单一搜索模糊匹配
                            return row.includes(this.search)
                        }
                    }
                </script>
                <template v-for="item in list2filter">
                    <Button>循环 {{item}}</Button>
                    <Divider type="vertical" />
                </template>
                <script type="text/js">
                    computed: {
                        list2filter () {
                            return this.list2.filter(row => {
                                if ( this.search.includes(',') ) { // 多重搜索精准匹配 禁止使用逗号因为要靠它来分割
                                    const searchArr = this.search.split(',')
                                    return searchArr.includes(row)
                                } else { // 单一搜索模糊匹配
                                    return row.includes(this.search)
                                }
                            })
                        }
                    },
                </script>
                <p class="text-danger">待分析那种方法好</p>
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
import titleAddBtn from './089vford.vue'
export default {
    components: { titleAddBtn },
    data () {
        return {
            search: '', // 搜索过滤项
            list1: ['1', '12', '23', '34', '45', '56', '67', '78', '89'],
            list2: ['1', '12', '23', '34', '45', '56', '67', '78', '89'],
            listDemo: [ { id: 1, name: 'test1' }, { id: 2, name: 'test2' }, { id: 3, name: 'test3' } ],
            addBtnList: [
                { title: '添加1', type: 'primary', methods: 'addItem1' },
                { title: '添加2', type: 'dashed', methods: 'addItem2' },
                { title: '添加3', type: 'Success', methods: 'addItem3' }
            ]
        }
    },
    computed: {
        list2filter () {
            return this.list2.filter(row => {
                if (this.search.includes(',')) { // 多重搜索精准匹配 禁止使用逗号因为要靠它来分割
                    const searchArr = this.search.split(',')
                    return searchArr.includes(row)
                } else { // 单一搜索模糊匹配
                    return row.includes(this.search)
                }
            })
        }
    },
    methods: {
        listenCall (methodsWords) { this[methodsWords]() },
        addItem1 () { alert(1) },
        addItem2 () { alert(2) },
        addItem3 () { alert(3) },
        filterFun (row) { // 过滤方法
            // return row > this.search // 根据大小判断
            if (this.search.includes(',')) { // 多重搜索精准匹配 禁止使用逗号因为要靠它来分割
                const searchArr = this.search.split(',')
                return searchArr.includes(row)
            } else { // 单一搜索模糊匹配
                return row.includes(this.search)
            }
        }
    }
}
</script>
