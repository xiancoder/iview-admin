<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">JSX写法 实现 可编辑表格</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>如果我要在表格的最后放两个按钮 得用scope方式来</p>
                <p>从 3.2.0 版本开始支持 slot-scope 写法。</p>
                <p>在 columns 的某列声明 slot 后，就可以在 Table 的 slot 中使用 slot-scope。</p>
                <p>slot-scope 的参数有 3 个：当前行数据 row，当前列数据 column，当前行序号 index。</p>
                <script type="text/html" v-pre>
                    <Table border :columns="columns12" :data="data6">
                        <template slot-scope="{ row, index }" slot="slot1">
                            <h3>{{row.Name}}</h3>
                        </template>
                    </Table>
                </script>
                <script type="text/js">
                    columns12: [
                        { title: 'Name', key: 'name', render: (h, params) => {
                            return <strong>{ params.row.name }</strong>
                        } },
                        { title: '姓名', slot: 'slot1', width: 200 },
                        { title: 'Age', key: 'age' },
                        { title: 'Address', key: 'address' },
                    ],
                </script>
                <p><Icon type="md-checkmark" style="color:green"/> 此方案可行 如果使用jsx看起来像是更直接的方式</p>
                <script type="text/js">
                    columns12: [
                        { title: 'Action', key: 'address', width: 150, align: 'center', render: (h, params) => {
                            return <div>
                                <i-button type="primary" size="small" style="margin-right: 5px" on-click={this.show.bind(this, params.index)}>View</i-button>
                                <i-button type="error" size="small" on-click={this.remove.bind(this, params.index)}>Delete</i-button>
                            </div>
                        } }
                    ],
                </script>
                <p class="text-info">这种用法说不好使吧 也好使 vue没有提供模版解析方法</p>
                <p class="text-info">这种用法说好使吧 也并不好使 他的语法规则跟vue的不大一样</p>
                <p><Icon type="md-close" style="color:red"/> 2019年11月27日17:27:03 更新 此方案丢西瓜捡芝麻 为了省1元需要花10元...</p>
                <p><Icon type="md-close" style="color:red"/> 2019年12月16日15:09:52 更新 render方式/slot方式/jsx方式 请随意选择使用</p>
                <Table border :columns="columns12" :data="data6">
                    <template slot-scope="{ row, index }" slot="slot1">
                        <h3>{{row.Name}}</h3>
                    </template>
                </Table>
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
            columns12: [
                { title: 'Name', key: 'name', render: (h, params) => {
                    return <strong>{ params.row.name }</strong>
                } },
                { title: '姓名', slot: 'slot1', width: 200 },
                { title: 'Age', key: 'age' },
                { title: 'Address', key: 'address' },
                { title: 'Action', key: 'address', width: 150, align: 'center', render: (h, params) => {
                    return <div>
                        <i-button type="primary" size="small" style="margin-right: 5px" on-click={this.show.bind(this, params.index)}>View</i-button>
                        <i-button type="error" size="small" on-click={this.remove.bind(this, params.index)}>Delete</i-button>
                    </div>
                } }
            ],
            data6: [
                { name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park' },
                { name: 'Jim Green', age: 24, address: 'London No. 1 Lake Park' },
                { name: 'Joe Black', age: 30, address: 'Sydney No. 1 Lake Park' },
                { name: 'Jon Snow', age: 26, address: 'Ottawa No. 2 Lake Park' }
            ]
        }
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `
                    Name：${this.data6[index].name}<br>
                    Age：${this.data6[index].age}<br>
                    Address：${this.data6[index].address}
                `
            })
        },
        remove (index) {
            this.data6.splice(index, 1)
        }
    }
}
</script>
