<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">可编辑可折叠的表格 </div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-checkmark" style="color:green"/> 配合excel导入导出</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <script type="text/html" v-pre>
                    <Table :columns="columns" :data="data">
                        <template slot-scope="{ row, index }" slot="name">
                            <Input type="text" v-model="editName" v-if="editIndex === index" />
                            <span v-else>{{ row.name }}</span>
                        </template>
                        <template slot-scope="{ row, index }" slot="age">
                            <Input type="text" v-model="editAge" v-if="editIndex === index" />
                            <span v-else>{{ row.age }}</span>
                        </template>
                        <template slot-scope="{ row, index }" slot="birthday">
                            <Input type="text" v-model="editBirthday" v-if="editIndex === index" />
                            <span v-else>{{ getBirthday(row.birthday) }}</span>
                        </template>
                        <template slot-scope="{ row, index }" slot="address">
                            <Input type="text" v-model="editAddress" v-if="editIndex === index" />
                            <span v-else>{{ row.address }}</span>
                        </template>
                        <template slot-scope="{ row, index }" slot="action">
                            <div v-if="editIndex === index">
                                <Button @click="handleSave(index)">保存</Button>
                                <Button @click="editIndex = -1">取消</Button>
                            </div>
                            <div v-else>
                                <Button @click="handleEdit(row, index)">操作</Button>
                            </div>
                        </template>
                    </Table>
                </script>
                <script type="text/js">
                    import expandRow from './178tableExpand.vue'
                    export default {
                        components: { expandRow },
                        data () {
                            return {
                                columns: [
                                    { type: 'expand', width: 50, render: (h, params) => { return h(expandRow, { props: { row: params.row } }) } },
                                    { title: '姓名', slot: 'name' },
                                    { title: '年龄', slot: 'age' },
                                    { title: '出生日期', slot: 'birthday' },
                                    { title: '地址', slot: 'address' },
                                    { title: '操作', slot: 'action' }
                                ],
                                data: [
                                    { name: '王小明', age: 18, birthday: '919526400000', address: '北京市朝阳区芍药居' },
                                    { name: '张小刚', age: 25, birthday: '696096000000', address: '北京市海淀区西二旗' },
                                    { name: '李小红', age: 30, birthday: '563472000000', address: '上海市浦东新区世纪大道' },
                                    { name: '周小伟', age: 26, birthday: '687024000000', address: '深圳市南山区深南大道' }
                                ],
                                editIndex: -1, /* 当前聚焦的输入框的行数 */
                                editName: '', /* 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁 */
                                editAge: '', /* 第二列输入框 */
                                editBirthday: '', /* 第三列输入框 */
                                editAddress: '' /* 第四列输入框 */
                            }
                        },
                        methods: {
                            handleEdit (row, index) {
                                this.editName = row.name
                                this.editAge = row.age
                                this.editAddress = row.address
                                this.editBirthday = row.birthday
                                this.editIndex = index
                            },
                            handleSave (index) {
                                this.data[index].name = this.editName
                                this.data[index].age = this.editAge
                                this.data[index].birthday = this.editBirthday
                                this.data[index].address = this.editAddress
                                this.editIndex = -1
                            },
                            getBirthday (birthday) {
                                const date = new Date(parseInt(birthday))
                                const year = date.getFullYear()
                                const month = date.getMonth() + 1
                                const day = date.getDate()
                                return `${year}-${month}-${day}`
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
        <Table :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="name">
                <Input type="text" v-model="editName" v-if="editIndex === index" />
                <span v-else>{{ row.name }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="age">
                <Input type="text" v-model="editAge" v-if="editIndex === index" />
                <span v-else>{{ row.age }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="birthday">
                <Input type="text" v-model="editBirthday" v-if="editIndex === index" />
                <span v-else>{{ getBirthday(row.birthday) }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="address">
                <Input type="text" v-model="editAddress" v-if="editIndex === index" />
                <span v-else>{{ row.address }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <div v-if="editIndex === index">
                    <Button @click="handleSave(index)">保存</Button>
                    <Button @click="editIndex = -1">取消</Button>
                </div>
                <div v-else>
                    <Button @click="handleEdit(row, index)">操作</Button>
                </div>
            </template>
        </Table>
    </div>
</template>
<script>
import expandRow from './178tableExpand.vue'
export default {
    components: { expandRow },
    data () {
        return {
            columns: [
                { type: 'expand', width: 50, render: (h, params) => { return h(expandRow, { props: { row: params.row } }) } },
                { title: '姓名', slot: 'name' },
                { title: '年龄', slot: 'age' },
                { title: '出生日期', slot: 'birthday' },
                { title: '地址', slot: 'address' },
                { title: '操作', slot: 'action' }
            ],
            data: [
                { name: '王小明', age: 18, birthday: '919526400000', address: '北京市朝阳区芍药居' },
                { name: '张小刚', age: 25, birthday: '696096000000', address: '北京市海淀区西二旗' },
                { name: '李小红', age: 30, birthday: '563472000000', address: '上海市浦东新区世纪大道' },
                { name: '周小伟', age: 26, birthday: '687024000000', address: '深圳市南山区深南大道' }
            ],
            editIndex: -1, // 当前聚焦的输入框的行数
            editName: '', // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
            editAge: '', // 第二列输入框
            editBirthday: '', // 第三列输入框
            editAddress: '' // 第四列输入框
        }
    },
    methods: {
        handleEdit (row, index) {
            this.editName = row.name
            this.editAge = row.age
            this.editAddress = row.address
            this.editBirthday = row.birthday
            this.editIndex = index
        },
        handleSave (index) {
            this.data[index].name = this.editName
            this.data[index].age = this.editAge
            this.data[index].birthday = this.editBirthday
            this.data[index].address = this.editAddress
            this.editIndex = -1
        },
        getBirthday (birthday) {
            const date = new Date(parseInt(birthday))
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return `${year}-${month}-${day}`
        }
    }
}
</script>
