<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"></div>
            <div class="blogContent">
                <p>单测使用 Jest 框架， 方法库用集成jest的 Vue Test Utils</p>
                <p><a href="https://links.jianshu.com/go?to=%255Bhttps%3A%2F%2Fjestjs.io%2Fdocs%2Fzh-Hans%2Fgetting-started%255D%28https%3A%2F%2Fjestjs.io%2Fdocs%2Fzh-Hans%2Fgetting-started%29" target="_blank">Jest</a> 是 <a href="https://links.jianshu.com/go?to=javascript" target="_blank">Facebook</a> 开发的一款 JavaScript 测试框架, 在 Facebook 内部广泛用来测试各种 JavaScript 代码。</p>
                <p>点击测试异步行为 <button @click="fetchResults" /></p>
                <p><div id="bbb"> {{ count }} </div><button id="aaa" @click="increment">Increment</button></p>
                <p></p>
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
                <p></p>
                <p>点击测试异步行为 <button id="ggg" @click="getJobList" /> <button id="ggg2" @click="getJobList2" /></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div class="blogFooter">
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
import { JobList } from '@/api/staff'
export default {
    data () {
        return {
            value: null,
            count: 0,
            jList: []
        }
    },
    methods: {
        axiosget: () => {
            return Promise.resolve({ data: 'value' })
        },
        getJobList: () => {
            JobList().then(res => {
                this.jList = res.data
            })
        },
        async getJobList2 () {
            const res = await this.axiosget()
            this.jList = res.data
        },
        async fetchResults () {
            const response = await this.axiosget()
            this.value = response.data
        },
        increment () {
            this.count++
        }
    }
}
</script>
