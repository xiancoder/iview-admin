<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">子标签的互相切换 tabs</div>
            <div class="blogContent" v-highlight>
                <p></p>
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
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
