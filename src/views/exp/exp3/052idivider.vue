<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">分割线 或者叫 隔断 或者叫占位符 随便吧</div>
            <div class="blogContent" v-highlight>
                <Row>
                    <Col span="12">
                        <p>默认为水平分割线，可在中间加入文字。</p>
                        <Divider />
                        <Divider>With Text</Divider>
                        <Divider dashed />
                        <Divider orientation="left">Left Text</Divider>
                        <Divider orientation="right">Right Text</Divider>
                        <p> 竖向分割线 <Divider type="vertical" /> 竖向分割线 <Divider type="vertical" /> 竖向分割线</p>
                    </Col>
                    <Col span="12">
                        <script type="text/html">
                            <Divider />
                            <Divider>With Text</Divider>
                            <Divider dashed />
                            <Divider orientation="left">Left Text</Divider>
                            <Divider orientation="right">Right Text</Divider>
                            <Divider type="vertical" />
                        </script>
                    </Col>
                </Row>
                <hr />
                <div class="api"><table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>水平还是垂直类型，可选值为 horizontal 或 vertical</td> <td>String</td> <td>horizontal</td></tr> <tr><td>orientation</td> <td>分割线标题的位置，可选值为 left、right 或 center</td> <td>Number</td> <td>center</td></tr> <tr><td>dashed</td> <td>是否虚线</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td> <td>尺寸，可选值为 small 或 default</td> <td>String</td> <td>default</td></tr></tbody></table></div>
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
}
</script>
