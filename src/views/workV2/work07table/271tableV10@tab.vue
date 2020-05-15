<template>
    <div>
        <div class="tableLayout">
            <div class="tableHeader">
                <h2>表格v10模版规范 <small>新的模版</small><b>新的模版</b></h2>
            </div>
            <p>原来是使用的这个tab样式</p>
            <tab2></tab2>
            <p>后台发现这个更好看 立马褫夺上位</p>
            <tab></tab>
        </div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">表格V10标准规范 Tab写法</div>
                <Divider orientation="right">可以直接投入项目使用的标准或规范</Divider>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 本模板经历实战可以使用 </p>
                    <p>为了可以统一的方便的搞页面兄弟节点的编写</p>
                    <p>此类页面必须遵守以下规定</p>
                    <p>- - 1 兄弟页面间名字必须一致 第二个以及以后的兄弟使用@符号标识自己的作用</p>
                    <p>- - - - 1 如同 workV2_work00_205tableV10 和第二个兄弟 workV2_work00_205tableV10@bro</p>
                    <p>- - 2 tab页面独立编写 位置放置在兄弟页面们同级目录</p>
                    <p>- - - - 1 如本tab放在workV2_work00_205tableV10 同级</p>
                    <p>- - 3 tab页面负责兄弟页面们的名录 以及路由显示 (所有的兄弟都应该隐藏起来 如下)</p>
                    <p>- - 4 tab页面不负责显示 一进入即跳转第一个兄弟页面</p>
                    <script type="text/js">
                        {power: 'workv2-0', path: '205tab', title: '表格v10模版规范'},
                        {power: 'workv2-0', path: '205tableV10', title: '表格v10模版规范', hideMenu: true},
                        {power: 'workv2-0', path: '205tableV10@bro', title: '表格v10兄弟页面', hideMenu: true},
                    </script>
                    <p>- - 5 tab模版代码如下</p>
                    <script type="text/html" v-pre>
                        <Tabs :value="currentName" @on-click="goto" type="card">
                            <TabPane v-for="(row, index) in tabList" :key="index" :label="row.title" :name="row.name">
                            </TabPane>
                        </Tabs>
                    </script>
                    <script type="text/js">
                        import { goto } from '@/tools' // 自定义常用工具
                        export default {
                            mixins: [{methods: {goto}}],
                            data () {
                                return {
                                    name: 'workV2_work01_205tab',
                                    currentName: '',
                                    balance: '-'
                                }
                            },
                            computed: { // 计算属性
                                tabList () {
                                    const list = [
                                        {name: 'workV2_work00_205tableV10', title: '表格v10模版规范'},
                                        {name: 'workV2_work00_205tableV10@bro', title: '表格v10兄弟页面'},
                                        {name: 'workV2_work00_205tableV11', title: '表格v11模版规范'},
                                        {name: 'workV2_work00_205tableV12', title: '表格v12模版规范'}
                                    ]
                                    return list
                                }
                            },
                            mounted: function () {
                                this.currentName = this.$route.name
                                if (this.currentName === this.name) { return goto(this.tabList[0].name, 'r') }
                            }
                        }
                    </script>
                    <p></p>
                    <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag> <Tag color="cyan">学习</Tag> <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import tab from './271tableV10'
import tab2 from './271tableV10HHH'

export default {
    name: 'workV2_work07table_271tableV10_tab', // 如果想用缓存必须声明页面name
    components: { tab, tab2 },
    data () {
        return {
            'end1': 1 // 防呆设计
        }
    },
    methods: {
    },
    mounted: function () {
    }
}
</script>
