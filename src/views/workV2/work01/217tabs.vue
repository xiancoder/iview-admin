<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">子标签的互相切换 tabs</div>
            <div class="blogContent" v-highlight>
                <p>公司项目对这个没有明确统一使用那个好</p>
                <p><Icon type="md-checkmark" style="color:green"/> 经过我的简单对比 决定使用Tabs 统一项目</p>
                <p><Icon type="md-checkmark" style="color:green"/> 使用方式 A节点下有 ABC兄弟页面 给A.vue写Tabs组件 A'BC三个页面为子页面 同时考虑继承</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <hr />
                <ButtonGroup style="margin-bottom: 10px" >
                    <Button v-for="(row, index) in tabList" :key="index"
                        :type="currentTab==index?'primary':'default'">
                        {{ row.title }}
                    </Button>
                </ButtonGroup>
                <script type="text/html" v-pre>
                    <ButtonGroup style="margin-bottom: 10px" >
                        <Button v-for="(row, index) in tabList" :key="index" @click="goto(tabList[index].name)"
                            :type="currentTab==index?'primary':'default'">
                            {{ row.title }}
                        </Button>
                    </ButtonGroup>
                </script>
                <hr>
                <Tabs value="approval" style="margin-top: 20px">
                    <TabPane label="审批人配置" name="approval"></TabPane>
                    <TabPane label="抄送人配置" name="cc"></TabPane>
                </Tabs>
                <script type="text/html" v-pre>
                    <Tabs value="approval" style="margin-top: 20px" @on-click="changeTab">
                        <TabPane label="审批人配置" name="approval"></TabPane>
                        <TabPane label="抄送人配置" name="cc"></TabPane>
                    </Tabs>
                </script>
                <hr>
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                    <MenuItem name="1"> 内容管理 </MenuItem>
                    <MenuItem name="2"> 用户管理 </MenuItem>
                </Menu>
                <script type="text/html" v-pre>
                    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="changeTab">
                        <MenuItem name="1"> 内容管理 </MenuItem>
                        <MenuItem name="2"> 用户管理 </MenuItem>
                    </Menu>
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">一套兄弟页面的写法</div>
            <div class="blogContent" v-highlight>
                <p>1 抽取一个空页面只写tab 作为兄弟页面名单</p>
                <script type="text/html" v-pre>
                    <ButtonGroup style="margin-bottom: 10px" >
                        <Button v-for="(row, index) in tabList" :key="index" @click="goto(tabList[index].name)"
                            :type="currentTab==index?'primary':'default'">
                            {{ row.title }}
                        </Button>
                    </ButtonGroup>
                </script>
                <script type="text/js">
                    import { goto } from '@/tools' // 自定义常用工具
                    export default {
                        mixins: [{methods: {goto}}],
                        data () {
                            return {
                                name: 'task_mine',
                                tabList: [
                                    { name: 'task_mine@publish', title: '我发布的任务' },
                                    { name: 'task_mine@conscient', title: '我负责的任务' },
                                    { name: 'task_mine@executive', title: '我执行的任务' },
                                    { name: 'task_mine@besend', title: '抄送我的任务' }
                                ],
                                currentTab: 999
                            };
                        },
                        mounted: function () {
                            const currentName = this.$route.name
                            if (currentName === this.name) { return goto(this.tabList[0].name) }
                            this.currentTab = this.tabList.findIndex((row) => { return row.name === currentName })
                        }
                    };
                </script>
                <p>2 老大页面正常编写</p>
                <p>3 老二页面只要相仿均如下编写</p>
                <script type="text/js">
                    // 整个页面等级的复用
                    import page from './mine@publish'
                    export default {
                        extends: page, // 继承页面
                        data () {
                            return {
                                listAjaxName: 'listExecutive',
                                optionSearch: 3
                            }
                        }
                    }
                </script>
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
            currentTab: 1,
            tabList: [
                { name: 'task_mine@publish', title: '我发布的任务' },
                { name: 'task_mine@conscient', title: '我负责的任务' },
                { name: 'task_mine@executive', title: '我执行的任务' },
                { name: 'task_mine@besend', title: '抄送我的任务' }
            ],
            theme1: 'light'
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
