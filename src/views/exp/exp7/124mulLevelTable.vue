<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">多层表格尝试</div>
            <div class="blogContent" v-highlight>
                <p>尝试一下如果将多对多关系用复杂的多层表格来展示</p>
                <p>即 A多对多B 定义一个A维度表格 点击某个A就能搜到关联的B 再点B就能搜到关联的A ...</p>
                <p><Icon type="md-close" style="color:red"/> 通过简单的演示 感觉更复杂了</p>
                <div id="aptable">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>用户名</th>
                                <th>年龄</th>
                                <th>毕业学校</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for ="(user,index) in users" v-bind:key="index">
                                <td >{{index+1}}</td>
                                <td >{{user.name}}</td>
                                <td >{{user.age}}</td>
                                <td >
                                    {{user.school}}
                                    <table border="1" v-if="user.friend.length">
                                        <thead>
                                            <tr>
                                                <th>校友</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for ="(friend,index) in user.friend" v-bind:key="index">
                                                <td >{{friend.name}}</td>
                                                <td ><center><button>remove</button></center></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td ><center><button v-on:click="remove(index)">remove</button></center></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
    name: 'hello',
    data () {
        return {
            user: { 'name': '', 'age': '', 'school': '' },
            users: [
                { 'name': '李磊', 'age': '6', 'school': '无锡阳光幼儿园', 'friend': [{'name': '张成'}, {'name': '炼心'}] },
                { 'name': '李磊', 'age': '15', 'school': '洛阳理工附中', 'friend': [{'name': '张成'}] },
                { 'name': '李磊', 'age': '24', 'school': '桂林电子科技本科', 'friend': [] },
                { 'name': '李磊', 'age': '32', 'school': '清华英雄联盟研究生', 'friend': [] },
                { 'name': '张成', 'age': '7', 'school': '无锡阳光幼儿园', 'friend': [{'name': '李磊'}, {'name': '炼心'}] },
                { 'name': '张成', 'age': '17', 'school': '洛阳理工附中', 'friend': [{'name': '李磊'}] },
                { 'name': '炼心', 'age': '6', 'school': '无锡阳光幼儿园', 'friend': [{'name': '李磊'}, {'name': '张成'}] },
                { 'name': '炼心', 'age': '15', 'school': '洛阳理工附中', 'friend': [] },
                { 'name': '炼心', 'age': '24', 'school': '蓝翔技校毕业生', 'friend': [] },
                { 'name': '炼心', 'age': '32', 'school': '江西电子科技研究生', 'friend': [] }
            ]
        }
    },
    mounted () {
    },
    methods: {
        remove: function (index) {
            this.users.splice(index, 1)
        }
    }
}
</script>
<style scoped>
    #aptable {
        padding:20px;
    }
    #aptable table{
        width: 100%;
        max-width: 100%;
        border-bottom: 1px solid #ddd;
        position: relative;
        margin-bottom: 0;
    }
</style>
