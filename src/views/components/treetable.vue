<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">树状表格组件tree-table-vue</div>
            <div class="blogContent" v-highlight>
                <p>基于<a href="https://github.com/MisterTaki/vue-table-with-tree-grid">vue-table-with-tree-grid</a>进行开发</p>
                <p>修复了一些bug，添加了一些新属性</p>
                <p><b>支持使用slot-scope进行自定义列渲染内容</b></p>
                <p>文档请看<a href="https://github.com/lison16/tree-table-vue">https://github.com/lison16/tree-table-vue</a></p>
                <tree-table expand-key="sex" :expand-type="false" :selectable="false" :columns="columns" :data="data" >
                    <template slot="likes" slot-scope="scope">
                        <Button @click="handle(scope)">123</Button>
                    </template>
                </tree-table>
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
import '@/plugins/treetable'
export default {
    name: 'tree_table_page',
    data () {
        return {
            columns: [
                { title: 'name', key: 'name', width: '400px' },
                { title: 'sex', key: 'sex', minWidth: '50px' },
                { title: 'score', key: 'score' },
                { title: 'likes', key: 'likes', minWidth: '200px', type: 'template', template: 'likes' }
            ],
            data: [
                { name: 'Jack', sex: 'male', likes: ['football', 'basketball'], score: 10,
                    children: [
                        { name: 'Ashley', sex: 'female', likes: ['football', 'basketball'], score: 20,
                            children: [
                                { name: 'Ashley', sex: 'female', likes: ['football', 'basketball'], score: 20 },
                                { name: 'Taki', sex: 'male', likes: ['football', 'basketball'], score: 10,
                                    children: [
                                        { name: 'Ashley', sex: 'female', likes: ['football', 'basketball'], score: 20 },
                                        { name: 'Taki', sex: 'male', likes: ['football', 'basketball'], score: 10,
                                            children: [
                                                { name: 'Ashley', sex: 'female', likes: ['football', 'basketball'], score: 20 },
                                                { name: 'Taki', sex: 'male', likes: ['football', 'basketball'], score: 10 }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        { name: 'Taki', sex: 'male', likes: ['football', 'basketball'], score: 10 }
                    ]
                },
                { name: 'Tom', sex: 'male', likes: ['football', 'basketball'], score: 20,
                    children: [
                        { name: 'Ashley', sex: 'female', likes: ['football', 'basketball'], score: 20,
                            children: [
                                { name: 'Ashley', sex: 'female', likes: ['football', 'basketball'], score: 20 },
                                { name: 'Taki', sex: 'male', likes: ['football', 'basketball'], score: 10 }
                            ]
                        },
                        { name: 'Taki', sex: 'male', likes: ['football', 'basketball'], score: 10,
                            children: [
                                { name: 'Ashley', sex: 'female', likes: ['football', 'basketball'], score: 20 },
                                { name: 'Taki', sex: 'male', likes: ['football', 'basketball'], score: 10 }
                            ]
                        }
                    ]
                },
                { name: 'Tom', sex: 'male', likes: ['football', 'basketball'], score: 20 },
                { name: 'Tom', sex: 'male', likes: ['football', 'basketball'], score: 20,
                    children: [
                        { name: 'Ashley', sex: 'female', likes: ['football', 'basketball'], score: 20 },
                        { name: 'Taki', sex: 'male', likes: ['football', 'basketball'], score: 10 }
                    ]
                }
            ]
        }
    },
    methods: {
        handle (scope) {
            console.info(scope)
        }
    }
}
</script>
