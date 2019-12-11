<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">原生表格写法 + 遍历对比数据计算合并单元格</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 根据数据遍历匹配来确定每个单元格的合并 此方式可行</p>
                <p><Icon type="md-close" style="color:red"/> 这种写法不提倡 只是为了尝试一下合并单元格</p>
                <table border="1" class="api">
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
                            <td>{{index+1}}</td>
                            <td v-if="user.level!=0" :rowspan="user.level">{{user.name}} / {{user.level}}</td>
                            <td v-if="user.level!=0" :rowspan="user.level">{{user.age}}</td>
                            <td>{{user.school}}</td>
                            <td><button v-on:click="remove(index)">remove</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="text"  id="name" v-model="user.name"/></td>
                            <td><input type="text" id="age" v-model="user.age"/></td>
                            <td><input type="text" id="school" v-model="user.school"/></td>
                            <td><button @click="insert">insert</button></td>
                        </tr>
                    </tbody>
                </table>
                <script type="text/js">
                    computeJoinTable (arr, iseq) {
                        let session = null
                        let level = 1
                        return _ /* IM lodash */
                            .chain(arr) /* 包装为lodash对象 */
                            .reverse() /* 反序 */
                            // .map((item) => { /* map方法有守护原值的功能 比较蛋疼 */
                            .each((item) => { /* 遍历执行 替换原值 */
                                console.log(item.school)
                                item.level = 1
                                if (session && iseq(session, item)) {
                                    session.level = 0
                                    item.level = ++level
                                } else {
                                    level = 1
                                }
                                session = item
                                return item
                            })
                            .reverse() /* 反序 */
                            .value()
                    },
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
import _ from 'lodash'
export default {
    name: 'hello',
    data () {
        return {
            user: { 'name': '', 'age': '', 'school': '' },
            users: []
        }
    },
    mounted () {
        let data = [
            { 'name': '李磊', 'age': '25', 'school': '1洛阳理工本科生' },
            { 'name': '李磊', 'age': '25', 'school': '2清华英雄联盟研究生' },
            { 'name': '李磊', 'age': '25', 'school': '3洛阳理工附中毕业生' },
            { 'name': '张成', 'age': '23', 'school': '4桂林电子科技本科生' },
            { 'name': '张成', 'age': '23', 'school': '5蓝翔技校毕业生' },
            { 'name': '炼心', 'age': '22', 'school': '6江西电子科技' }
        ]
        let x = this.computeJoinTable(data, (a, b) => {
            return a.name === b.name && a.age === b.age
        })
        console.log(x)
        this.users = x
    },
    methods: {
        computeJoinTable (arr, iseq) {
            let session = null
            let level = 1
            return _ /* IM lodash */
                .chain(arr) /* 包装为lodash对象 */
                .reverse() /* 反序 */
                // .map((item) => { /* map方法有守护原值的功能 比较蛋疼 */
                .each((item) => { /* 遍历执行 替换原值 */
                    console.log(item.school)
                    item.level = 1
                    if (session && iseq(session, item)) {
                        session.level = 0
                        item.level = ++level
                    } else {
                        level = 1
                    }
                    session = item
                    return item
                })
                .reverse() /* 反序 */
                .value()
        },
        insert: function () {
            this.users.push(this.user)
        },
        remove: function (index) {
            this.users.splice(index, 1)
        }
    }
}
</script>
