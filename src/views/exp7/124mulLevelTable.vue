<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">多层表格尝试</div>
            <div class="blogContent" v-highlight>
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
                                <td >{{user.school}}</td>
                                <td ><button v-on:click="remove(index)">remove</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
    name: 'hello',
    data () {
        return {
            user: { 'name': '', 'age': '', 'school': '' },
            users: [
                { 'name': '李磊', 'age': '25', 'school': '1洛阳理工本科生' },
                { 'name': '李磊', 'age': '25', 'school': '2清华英雄联盟研究生' },
                { 'name': '李磊', 'age': '25', 'school': '3洛阳理工附中毕业生' },
                { 'name': '张成', 'age': '23', 'school': '4桂林电子科技本科生' },
                { 'name': '张成', 'age': '23', 'school': '5蓝翔技校毕业生' },
                { 'name': '炼心', 'age': '22', 'school': '6江西电子科技' }
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
