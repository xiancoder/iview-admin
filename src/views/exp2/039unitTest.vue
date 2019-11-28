<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">入门 Jest框架 x vue的绑定作用域</div>
            <div class="blogContent">
                <p>单测使用 Jest 框架， 方法库用集成jest的 Vue Test Utils <a href="https://links.jianshu.com/go?to=%255Bhttps%3A%2F%2Fjestjs.io%2Fdocs%2Fzh-Hans%2Fgetting-started%255D%28https%3A%2F%2Fjestjs.io%2Fdocs%2Fzh-Hans%2Fgetting-started%29" target="_blank">Jest</a> 是 <a href="https://links.jianshu.com/go?to=javascript" target="_blank">Facebook</a> 开发的一款 JavaScript 测试框架, 在 Facebook 内部广泛用来测试各种 JavaScript 代码。</p>
                <p>点击测试异步行为 <button @click="fetchResults" /> <span id="bbb"> {{ count }} </span><button id="aaa" @click="increment">Increment</button></p>
                <h3 id="articleHeader6">Truthiness</h3>
                <p>在测试的时候，有时候我们需要在<code>undefined</code>，<code>null</code>和<code>false</code>进行区别，但是我们又不想去了解他们的不同点，Jest也会帮助我们得到我们想要的结果。</p>
                <ul> <li><p><code>toBeNull</code>  检查是否为null</p></li> <li><p><code>toBeUndefined</code>  检查是否为undefined</p></li> <li><p><code>toBeDefined</code>  与<code>toBeUndefined</code>的相反</p></li> <li><p><code>toBeTruthy</code>  检查任何通过<code>if</code>显示转换是否为true</p></li> <li><p><code>toBeFalsy</code>  检查任何通过<code>if</code>显示转换是否为false</p></li> </ul>
                <p></p>
                <h3 id="articleHeader7">Numbers</h3>
                <p>比较数字的大多数方法都有其对应的matchers</p>
                <ul> <li><p><code>toBeGreaterThan</code>  大于</p></li> <li><p><code>toBeGreaterThanOrEqual</code>  大于等于</p></li> <li><p><code>toBeLessThan</code>  小于</p></li> <li><p><code>toBeLessThanOrEqual</code>  小于等于</p></li> </ul>
                <hr>
                <p>vue 单元测试，用的mocha ，如何模拟组件里面的mousedown事件，测试里面click()可以使用</p>
                <p>mocha是用于做单元测试的框架 你说的那个是用selenium框架去模拟用户的行为</p>
            </div>
            <div class="blogFooter">
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">大发现啊大发现啊大发现啊</div>
            <div class="blogContent">
                <p>点击测试异步行为 <button id="ggg" @click="getJobList1">getJobList1</button> / <button id="ggg2" @click="getJobList2">getJobList2</button> / jList1 = {{jList1}} / jList2 = {{jList2}}</p>
                <h2>我擦擦擦 xxx () { 是this指向有效的声明方式 () => {} 就不是了么</h2>
                <h1>大发现啊大发现啊大发现啊<font color="red"> 大发现啊 </font>大发现啊大发现啊大发现啊</h1>
                <h3><font color="red"> methods 一定是按照某个规律解析这些注册方法 </font></h3>
                <h3><font color="red"> 本来function(){}无法得到this却得到了 估计是进行了诸如bind的操作 这时候()=>{}却失效了 </font></h3>
                <h3><font color="red"> ()=>{}是es6提出的新语法 (){}这个是vue提供的方法吧??? </font></h3>
                <pre>
                    data () {
                        return {
                            zuoyongyu: '666'
                        }
                    },
                    mounted: function () {
                        const xxx1 = function () {console.log('1测试function(){}',this ? this.zuoyongyu : '获取不到this') }
                        xxx1()
                        const xxx2 = () => {console.log('2测试()=>{}',this ? this.zuoyongyu : '获取不到this') }
                        xxx2()
                        this.testZYZ1()
                        this.testZYZ2()
                        this.testZYZ3()
                        this.testB1()
                        this.testB2()
                    },
                    methods: {
                        testZYZ1: function () { console.log('3测试xx:function(){}',this ? this.zuoyongyu : '获取不到this') },
                        testZYZ2 () { console.log('4测试xx(){}',this ? this.zuoyongyu : '获取不到this') },
                        testZYZ3: () => { console.log('5测试xx:()=>{}',this ? this.zuoyongyu : '获取不到this') }
                        testB1: debounce(function () { console.log('8测试xx:function(){}', this ? this.zuoyongyu : '获取不到this') }),
                        testB2: debounce(() => { console.log('9测试xx:()=>{}', this ? this.zuoyongyu : '获取不到this') }),
                    }
                    <font color="red">// 结果
                    // 1 测试function(){} 获取不到this
                    // 2 测试()=>{} 666
                    // 3 测试xx:function(){} 666
                    // 4 测试xx(){} 666
                    // 5 测试xx:()=>{} 获取不到this
                    // 8 测试xx:function(){} 666
                    // 9 测试xx:()=>{} 获取不到this</font>
                </pre>
            </div>
            <div class="blogFooter">
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">测试风格：</div>
            <div class="blogContent">
                <p>TDD(测试驱动开发)和BDD（行为驱动开发）这两种，他们的不同是什么？</p>
                <p>TDD关注多有功能是否被正确的实现，每个功能都具备对于的测试用例；BDD关注整体行为是否符合规格预期，适合自顶向下的设计方式</p>
                <p>TDD表达方式偏向于功能说明书的风格；BDD的表达方式更接近于自己的语言习惯</p>
                <p></p>
            </div>
            <div class="blogFooter">
            </div>
        </div>
    </div>
</template>
<script>
import { JobList } from '@/api/staff'
import { debounce } from '@/utils/function'
export default {
    data () {
        return {
            value: null,
            count: 0,
            jList1: 'key',
            jList2: 'key',
            zuoyongyu: '666'
        }
    },
    mounted: function () {
        // 还得单元测试那 都住掉
        // const xxx1 = function () {console.log('1测试function(){}', this ? this.zuoyongyu : '获取不到this') }
        // xxx1()
        // const xxx2 = () => {console.log('2测试()=>{}', this ? this.zuoyongyu : '获取不到this') }
        // xxx2()
        // this.testZYZ1()
        // this.testZYZ2()
        // this.testZYZ3()
        // this.testB1()
        // this.testB2()
    },
    methods: {
        testZYZ1: function () { console.log('3测试xx:function(){}', this ? this.zuoyongyu : '获取不到this') },
        testZYZ2 () { console.log('4测试xx(){}', this ? this.zuoyongyu : '获取不到this') },
        testZYZ3: () => { console.log('5测试xx:()=>{}', this ? this.zuoyongyu : '获取不到this') },
        testB1: debounce(function () { console.log('8测试xx:function(){}', this ? this.zuoyongyu : '获取不到this') }),
        testB2: debounce(() => { console.log('9测试xx:()=>{}', this ? this.zuoyongyu : '获取不到this') }),
        axiosgetx () {
            return Promise.resolve({ data: 'value' })
        },
        getJobList1 () {
            this.axiosgetx().then(res => {
                this.jList1 = res.data
            })
        },
        getJobList2 () {
            JobList().then(res => {
                this.jList2 = res.data
            })
        },
        async fetchResults () {
            // const response = await this.axiosgetx()
            // this.value = response.data
        },
        increment () {
            this.count++
        }
    }
}
</script>
