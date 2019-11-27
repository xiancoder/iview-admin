<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">过滤器收集</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 过滤器 使用率不高但是不能没有</p>
                <div class="api">
                    <table>
                        <thead><tr><th>写法</th> <th>原值</th> <th>过滤</th> <th>说明</th></tr></thead>
                        <tbody>
                            <tr><td>[[v1|dateformat]]</td> <td>{{ v1 }}</td> <td>{{ v1|dateformat }}</td> <td>日期格式化</td></tr>
                            <tr><td>[[v2|capitalize]]</td> <td>{{ v2 }}</td> <td>{{ v2|capitalize }}</td> <td>头字母大写</td></tr>
                            <tr><td>[[v3|toThousand]]</td> <td>{{ v3 }}</td> <td>{{ v3|toThousand }}</td> <td>数字千分</td></tr>
                            <tr><td>[[v4|decode]]</td> <td>&amp;lt;</td> <td>{{ v4|decode }}</td> <td>转码</td></tr>
                            <tr><td>[[v5|zeroPrice]]</td> <td>{{ v5 }}</td> <td>{{ v5|zeroPrice }}</td> <td>补零</td></tr>
                            <tr><td>[[v6|Complement]]</td> <td>{{ v6 }}</td> <td>{{ v6|Complement }}</td> <td>默认'-'</td></tr>
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
    data () {
        return {
            v1: new Date(),
            v2: 'abcd',
            v3: '12345678',
            v4: '&lt;',
            v5: 3,
            v6: ''
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
