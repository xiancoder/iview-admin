<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">关于Vue中的组件name问题</div>
            <div class="blogContent" v-highlight>
                <p>这里的name非必选项，看起来好像没啥用处，但是实际上这里用处还挺多的</p>
                <p>1.当项目使用keep-alive时，可搭配组件name进行缓存过滤</p>
                <p></p>
                <p></p>
                <p>我们有个组件命名为detail,其中dom加载完毕后我们在钩子函数mounted中进行数据加载</p>
                <script type="text/js" v-pre>
                    export default {
                        name:'Detail'
                        mounted(){
                            this.getInfo();
                        }，
                        methods:{
                            getInfo(){
                                axios.get('/xx/detail.json',{ params:{ id:this.$route.params.id } }).then(this.getInfoSucc)
                            }
                        }
                    }
                </script>
                <p>因为我们在App.vue中使用了keep-alive导致我们第二次进入的时候页面不会重新请求，即触发mounted函数。</p>
                <p>有两个解决方案,一个增加activated()函数,每次进入新页面的时候再获取一次数据。</p>
                <p>还有个方案就是在keep-alive中增加一个过滤，如下图所示：</p>
                <script type="text/js" v-pre>
                    <div id="app">
                        <keep-alive exclude="Detail">
                        <router-view/>
                        </keep-alive>
                    </div>
                </script>
                <p>2.DOM做递归组件时</p>
                <p>比如说detail.vue组件里有个list.vue子组件，递归迭代时需要调用自身name</p>
                <script type="text/js" v-pre>
                    <div>
                        <div v-for="(item,index) of list" :key="index">
                            <div>
                                <span class="item-title-icon"></span>
                                {{item.title}}
                            </div>
                            <div v-if="item.children" >
                                <detail-list :list="item.children"></detail-list>
                            </div>
                        </div>
                    </div>
                </script>
                <script type="text/js" v-pre>
                    export default {
                        name:'DetailList',//递归组件是指组件自身调用自身
                        props:{
                            list:Array
                        }
                    }
                </script>
                <p>const list = [{ "title": "A", "children": [{ "title": "A-A", "children": [{ "title": "A-A-A" }] },{ "title": "A-B" }] }, { "title": "B" }, { "title": "C" }, { "title": "D" }]</p>
                <p>3.当你用vue-tools时</p>
                <p>vue-devtools调试工具里显示的组见名称是由vue中组件name决定的</p>
                <p></p>
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
export default {
}
</script>
