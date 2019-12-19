<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview page</div>
            <div class="blogContent" v-highlight>
                <p></p>
                <Row>
                    <Col span="12">
                        <Card>
                            <p>基本的分页，页数过多时会自动折叠。</p>
                            <Page :total="100"></Page>
                            <p>可以切换每页显示的数量。</p>
                            <Page :total="100" show-sizer></Page>
                            <p>###电梯### 快速跳转到某一页。</p>
                            <Page :total="100" show-elevator></Page>
                            <p>显示总共多少条数据，接受 slot 来自定义内容，默认显示共[[ total ]]条</p>
                            <Page :total="100" show-total></Page>
                            <p>设置size为small使用迷你型，迷你型拥有普通的所有功能。</p>
                            <Page :total="40" size="small"></Page>
                            <Page :total="40" size="small" show-elevator show-sizer></Page>
                            <Page :total="40" size="small" show-total></Page>
                            <p>我们的用法</p>
                            <p>我们的用法</p>
                            <p>我们的用法 --重要事情说三遍</p>
                            <Page :total="40" size="small" show-elevator show-total></Page>
                            <p></p>
                            <p></p>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card>
                            <script type="text/html">
                                <p>基本的分页，页数过多时会自动折叠。</p>
                                <Page :total="100"></Page>
                                <p>可以切换每页显示的数量。</p>
                                <Page :total="100" show-sizer></Page>
                                <p>###电梯### 快速跳转到某一页。</p>
                                <Page :total="100" show-elevator></Page>
                                <p>显示总共多少条数据，接受 slot 来自定义内容，默认显示共[[ total ]]条</p>
                                <Page :total="100" show-total></Page>
                                <p>设置size为small使用迷你型，迷你型拥有普通的所有功能。</p>
                                <Page :total="40" size="small"></Page>
                                <Page :total="40" size="small" show-elevator show-sizer></Page>
                                <Page :total="40" size="small" show-total></Page>
                                <p>我们的用法</p>
                                <p>我们的用法</p>
                                <p>我们的用法 --重要事情说三遍</p>
                                <Page :total="40" size="small" show-elevator show-total></Page>
                            </script>
                        </Card>
                    </Col>
                </Row>
                <p></p>
                <p>Page props </p>
                <table class="api"><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>current</td> <td>当前页码，支持 .sync 修饰符</td> <td>Number</td> <td>1</td></tr> <tr><td>total</td> <td>数据总数</td> <td>Number</td> <td>0</td></tr> <tr><td>page-size</td> <td>每页条数</td> <td>Number</td> <td>10</td></tr> <tr><td>page-size-opts</td> <td>每页条数切换的配置</td> <td>Array</td> <td>[10, 20, 30, 40]</td></tr> <tr><td>placement</td> <td>条数切换弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code></td> <td>String</td> <td>bottom</td></tr> <tr><td>size</td> <td>可选值为<code>small</code>（迷你版）或不填（默认）</td> <td>String</td> <td>-</td></tr> <tr><td>simple</td> <td>简洁版</td> <td>Boolean</td> <td>false</td></tr> <tr><td>show-total</td> <td>显示总数</td> <td>Boolean</td> <td>false</td></tr> <tr><td>show-elevator</td> <td>显示电梯，可以快速切换到某一页</td> <td>Boolean</td> <td>false</td></tr> <tr><td>show-sizer</td> <td>显示分页，用来改变<code>page-size</code></td> <td>Boolean</td> <td>false</td></tr> <tr><td>class0-name</td> <td>自定义 class0 名称</td> <td>String</td> <td>-</td></tr> <tr><td>styles</td> <td>自定义 style 样式</td> <td>Object</td> <td>-</td></tr> <tr><td>transfer</td> <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td> <td>Boolean</td> <td>false</td></tr></tbody></table>
                <p>Page events </p>
                <table class="api"><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>页码改变的回调，返回改变后的页码</td> <td>页码</td></tr> <tr><td>on-page-size-change</td> <td>切换每页条数时的回调，返回切换后的每页条数</td> <td>page-size</td></tr></tbody></table>
                <p>Page slot </p>
                <table class="api"><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>无</td> <td>自定义显示总数的内容</td></tr></tbody></table>
                <p></p>
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
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
