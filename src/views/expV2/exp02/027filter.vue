<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">过滤器收集</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 过滤器 使用率不高但是不能没有</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <hr />
                <p>下面的过滤器方式更好 单元测试如下</p>
                <table class="api">
                    <thead><tr><th>说明</th> <th>写法</th> <th>原值</th> <th>过滤器处理效果</th></tr></thead>
                    <tbody>
                        <tr> <td colspan=4>测试数据 [1234.56, '12', null, undefined, 'null', NaN]</td> </tr>

                        <tr><td>数字精确两位小数</td> <td>[[test1[0]|toNum|fixed2|default]]</td> <td>{{ test1[0] }}</td> <td>{{ test1[0]|toNum|fixed2|default }}</td></tr>
                        <tr><td>数字精确两位小数</td> <td>[[test1[1]|toNum|fixed2|default]]</td> <td>{{ test1[1] }}</td> <td>{{ test1[1]|toNum|fixed2|default }}</td></tr>
                        <tr><td>数字精确两位小数</td> <td>[[test1[2]|toNum|fixed2|default]]</td> <td>{{ test1[2] }}</td> <td>{{ test1[2]|toNum|fixed2|default }}</td></tr>
                        <tr><td>数字精确两位小数</td> <td>[[test1[3]|toNum|fixed2|default]]</td> <td>{{ test1[3] }}</td> <td>{{ test1[3]|toNum|fixed2|default }}</td></tr>
                        <tr><td>数字精确两位小数</td> <td>[[test1[4]|toNum|fixed2|default]]</td> <td>{{ test1[4] }}</td> <td>{{ test1[4]|toNum|fixed2|default }}</td></tr>
                        <tr><td>数字精确两位小数</td> <td>[[test1[5]|toNum|fixed2|default]]</td> <td>{{ test1[5] }}</td> <td>{{ test1[5]|toNum|fixed2|default }}</td></tr>

                        <tr><td>数字格式化</td> <td>[[test1[0]|toNum|numberformat|default]]</td> <td>{{ test1[0] }}</td> <td>{{ test1[0]|toNum|numberformat|default }}</td></tr>
                        <tr><td>数字格式化</td> <td>[[test1[1]|toNum|numberformat|default]]</td> <td>{{ test1[1] }}</td> <td>{{ test1[1]|toNum|numberformat|default }}</td></tr>
                        <tr><td>数字格式化</td> <td>[[test1[2]|toNum|numberformat|default]]</td> <td>{{ test1[2] }}</td> <td>{{ test1[2]|toNum|numberformat|default }}</td></tr>
                        <tr><td>数字格式化</td> <td>[[test1[3]|toNum|numberformat|default]]</td> <td>{{ test1[3] }}</td> <td>{{ test1[3]|toNum|numberformat|default }}</td></tr>
                        <tr><td>数字格式化</td> <td>[[test1[4]|toNum|numberformat|default]]</td> <td>{{ test1[4] }}</td> <td>{{ test1[4]|toNum|numberformat|default }}</td></tr>
                        <tr><td>数字格式化</td> <td>[[test1[5]|toNum|numberformat|default]]</td> <td>{{ test1[5] }}</td> <td>{{ test1[5]|toNum|numberformat|default }}</td></tr>

                        <tr><td>金钱格式化</td> <td>[[test1[0]|toNum|moneyformat|default]]</td> <td>{{ test1[0] }}</td> <td>{{ test1[0]|toNum|moneyformat|default }}</td></tr>
                        <tr><td>金钱格式化</td> <td>[[test1[1]|toNum|moneyformat|default]]</td> <td>{{ test1[1] }}</td> <td>{{ test1[1]|toNum|moneyformat|default }}</td></tr>
                        <tr><td>金钱格式化</td> <td>[[test1[2]|toNum|moneyformat|default]]</td> <td>{{ test1[2] }}</td> <td>{{ test1[2]|toNum|moneyformat|default }}</td></tr>
                        <tr><td>金钱格式化</td> <td>[[test1[3]|toNum|moneyformat|default]]</td> <td>{{ test1[3] }}</td> <td>{{ test1[3]|toNum|moneyformat|default }}</td></tr>
                        <tr><td>金钱格式化</td> <td>[[test1[4]|toNum|moneyformat|default]]</td> <td>{{ test1[4] }}</td> <td>{{ test1[4]|toNum|moneyformat|default }}</td></tr>
                        <tr><td>金钱格式化</td> <td>[[test1[5]|toNum|moneyformat|default]]</td> <td>{{ test1[5] }}</td> <td>{{ test1[5]|toNum|moneyformat|default }}</td></tr>

                        <tr> <td colspan=4>测试数据 ['abc', '', null, undefined, 'null']</td> </tr>

                        <tr><td>属性空有意义</td> <td>[[test2[0]|toStr(1)|default]]</td> <td>{{ test2[0] }}</td> <td>{{ test2[0]|toStr(1)|default }}</td></tr>
                        <tr><td>属性空有意义</td> <td>[[test2[1]|toStr(1)|default]]</td> <td>{{ test2[1] }}</td> <td>{{ test2[1]|toStr(1)|default }}</td></tr>
                        <tr><td>属性空有意义</td> <td>[[test2[2]|toStr(1)|default]]</td> <td>{{ test2[2] }}</td> <td>{{ test2[2]|toStr(1)|default }}</td></tr>
                        <tr><td>属性空有意义</td> <td>[[test2[3]|toStr(1)|default]]</td> <td>{{ test2[3] }}</td> <td>{{ test2[3]|toStr(1)|default }}</td></tr>
                        <tr><td>属性空有意义</td> <td>[[test2[4]|toStr(1)|default]]</td> <td>{{ test2[4] }}</td> <td>{{ test2[4]|toStr(1)|default }}</td></tr>

                        <tr><td>首字母大写</td> <td>[[test2[0]|toStr(1)|capitalize|default]]</td> <td>{{ test2[0] }}</td> <td>{{ test2[0]|toStr(1)|capitalize|default }}</td></tr>
                        <tr><td>首字母大写</td> <td>[[test2[1]|toStr(1)|capitalize|default]]</td> <td>{{ test2[1] }}</td> <td>{{ test2[1]|toStr(1)|capitalize|default }}</td></tr>
                        <tr><td>首字母大写</td> <td>[[test2[2]|toStr(1)|capitalize|default]]</td> <td>{{ test2[2] }}</td> <td>{{ test2[2]|toStr(1)|capitalize|default }}</td></tr>
                        <tr><td>首字母大写</td> <td>[[test2[3]|toStr(1)|capitalize|default]]</td> <td>{{ test2[3] }}</td> <td>{{ test2[3]|toStr(1)|capitalize|default }}</td></tr>
                        <tr><td>首字母大写</td> <td>[[test2[4]|toStr(1)|capitalize|default]]</td> <td>{{ test2[4] }}</td> <td>{{ test2[4]|toStr(1)|capitalize|default }}</td></tr>
                    </tbody>
                </table>
                <p class="text-danger">怎样通过vue调用已经注册的过滤器逻辑 ????? </p>
                <p class="text-info">在逻辑中调用已经注册的过滤器逻辑</p>
                <script type="text/js">
                    displayValue:function (e) {
                        var value = e.target.value
                        var a = this.filters.moneyFormat(value);
                        return a;
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
            v1: new Date(),
            v2: 'abcd',
            v3: '12345678',
            v31: '12345678.912',
            v4: '&lt;',
            v5: 3,
            v6: '',

            test1: [1234.56, '654321', null, undefined, 'null', NaN],
            test2: ['abc', '', null, undefined, 'null']
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
