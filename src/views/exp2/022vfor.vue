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
                <p>一个title 处 可能有 一个或多个按钮， 按钮对应不同的响应事件</p>
                <p>按钮个数 根据传入的数据length 来循环渲染， 每条数据对应的事件名称 通过动态绑定</p>
                <!-- 多个button组件-->
                <p>1 结构部分</p>
                <p>[titleAddBtn : addBtnList="addBtnList" @ clkCallBk="listenCall" /]</p>
                <p>2 使用组件</p>
                <p>import titleAddBtn from '@/components/titleAddBtn'</p>
                <p>3 注册组件</p>
                <p>components: { titleAddBtn },</p>
                <p>4 准备数据</p>
                <p> addBtnList:</p>
                <p> { title: '添加1', icon: 'primary', methods: 'addItem' },</p>
                <p> { title: '添加2', icon: 'dashed', methods: 'addItem2' },</p>
                <p> { title: '添加3', icon: 'Success', methods: 'addItem3' }</p>
                <p>5 监听方法 (this[methodsWords]() 调用 不能够写成 this.methodsWords())</p>
                <p>listenCall(methodsWords) { this[methodsWords]() },</p>
                <p>6 调用方法</p>
                <p>addItem1() { alert(1) }, ... </p>
                <p>7 封装的组件 自己看</p>
                <p v-pre>Button : type="item.icon" v-for="item in addBtnList" @ click="clkCall(item.methods)" { {item.title} }</p>
                <p>注意 触发外界的方法 this.$emit('clkCallBk', methodsWords)</p>
                <p></p>
                <hr />
                <p>效果</p>
                <titleAddBtn :addBtnList="addBtnList" @clkCallBk="listenCall"></titleAddBtn>
                <hr />
                <p>把if,show,for等语句抽取出来放在template上面，把绑定的事件放在temlpate里面的元，可以使html结构更加清晰，还可以改善一个标签过长的情况。</p>
                <script type="text/html" v-pre>
                    <template v-for="(item, index) in listDemo" :key="index">
                        <Button>测试 {{item.name}}</Button>
                        <Divider type="vertical" />
                    </template>
                </script>
                <p>Custom elements in iteration require 'v-bind:key' directives</p>
                <p>写个 :key="" 这个就行了???</p>
                <template v-for="item in listDemo">
                    <Button>测试 {{item.name}}</Button>
                    <Divider type="vertical" />
                </template>
                <br />
                <p> <span v-for="(item, index) in listDemo" :key="index" >{{item.name}}</span> </p>
                <p>template用key不能提升性能，是为了防止Vue默认的元素复用导致某些情况下出现数据绑定渲染问题</p>
                <p>而template是虚拟节点，不存在复用</p>
                <p>如果你想要绑定的话，给下面的p和span标签绑定就好，一般只需要给和数据绑定有关的元素绑定key值</p>
                <p>Elements in iteration expect to have 'v-bind:key' directives 迭代中的元素需要有“v-bind:key”指令</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
import titleAddBtn from './022vford.vue'
export default {
    components: { titleAddBtn },
    data () {
        return {
            listDemo: [ { id: 1, name: 'test1' }, { id: 2, name: 'test2' }, { id: 3, name: 'test3' } ],
            addBtnList: [
                { title: '添加1', type: 'primary', methods: 'addItem' },
                { title: '添加2', type: 'dashed', methods: 'addItem2' },
                { title: '添加3', type: 'Success', methods: 'addItem3' }
            ]
        }
    },
    methods: {
        listenCall (methodsWords) { this[methodsWords]() },
        addItem () { alert(1) },
        addItem2 () { alert(2) },
        addItem3 () { alert(3) }
    }
}
</script>
