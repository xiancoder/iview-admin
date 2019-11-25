<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">未知html代码加入项目 + 动态添加事件</div>
            <div class="blogContent" v-highlight>
                <p>我们最常用的是vfor结构动态加入html内容同时绑定事件</p>
                <p>
                    <span v-for="(i,n) in lists" :key="n" @click="change(i.url)">{{i.url}}-</span>
                </p>
                <p>如果html结构是后台传递来的 例如博客系统</p>
                <script type="text/html">
                    <a href="javascript:void(0)" @click="jump(111)">哈哈哈</a>
                </script>
                <p>采用-vhtml结构并不行 <span v-html="hh"></span></p>
                <hr>
                <p>当当当当~ 将html结构转义为vue对象</p>
                <script type="text/js">
                    var MyComponent = Vue.extend({
                        template: '<a href="javascript:void(0)" @click="jump(222)">哈哈哈</a>',
                        methods: {
                            // jump (n) { alert(this.hh) } // 拿不到 因为有隐藏bind 得 self = this 配合
                            jump: (n) => { alert(this.hh) } // 可以
                        }
                    })
                    var component = new MyComponent().$mount()
                    document.getElementById('edituser').appendChild(component.$el)
                </script>
                <p>再来一次实时 <span id="edituser"></span></p>
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
import Vue from 'vue' // 核心

export default {
    data () {
        return {
            lists: [
                {url: 'www.google.com'},
                {url: 'www.tengxun.com'},
                {url: 'www.baidu.com'}
            ],
            hh: '<a href="javascript:void(0)" @click="jump(111)">哈哈哈</a>'
        }
    },
    methods: {
        change (url) { alert(url) },
        jump (n) { alert(n) }
    },
    mounted () {
        var MyComponent = Vue.extend({
            template: '<a href="javascript:void(0)" @click="jump(222)">哈哈哈</a>',
            methods: {
                // jump (n) { alert(this.hh) } // 拿不到 因为有隐藏bind 得 self = this 配合
                jump: (n) => { alert(this.hh) } // 可以
            }
        })
        var component = new MyComponent().$mount()
        document.getElementById('edituser').appendChild(component.$el)
    }
}
</script>
