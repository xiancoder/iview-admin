<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview 中的 Alert</div>
            <div class="blogContent" v-highlight>
                <div>
                    <Alert>An info prompt</Alert>
                    <Alert type="success">A success prompt</Alert>
                    <Alert type="warning">A warning prompt</Alert>
                    <Alert type="error">An error prompt</Alert>
                </div>
                <code class="html">
                    &lt;Alert&gt;An info prompt&lt;/Alert&gt;
                    &lt;Alert type=&quot;success&quot;&gt;A success prompt&lt;/Alert&gt;
                    &lt;Alert type=&quot;warning&quot;&gt;A warning prompt&lt;/Alert&gt;
                    &lt;Alert type=&quot;error&quot;&gt;An error prompt&lt;/Alert&gt;
                </code>
                <div>
                    <Alert type="warning">
                        A warning prompt
                        <template slot="desc">
                            Content of prompt. Content of prompt. Content of prompt.
                        </template>
                    </Alert>
                    <Alert type="error">
                        An error prompt
                        <span slot="desc">
                            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
                        </span>
                    </Alert>
                </div>
                <code class="html">
                    &lt;Alert type=&quot;warning&quot;&gt;
                        A warning prompt
                        &lt;template slot=&quot;desc&quot;&gt;
                            Content of prompt. Content of prompt. Content of prompt.
                        &lt;/template&gt;
                    &lt;/Alert&gt;
                </code>
                <div>
                    <Alert show-icon>An info prompt</Alert>
                    <Alert type="success" show-icon>A success prompt</Alert>
                    <Alert type="warning" show-icon>A warning prompt</Alert>
                    <Alert type="error" show-icon>An error prompt</Alert>
                </div>
                <code class="html">
                    &lt;Alert show-icon&gt;An info prompt&lt;/Alert&gt;
                    &lt;Alert type=&quot;success&quot; show-icon&gt;A success prompt&lt;/Alert&gt;
                    &lt;Alert type=&quot;warning&quot; show-icon&gt;A warning prompt&lt;/Alert&gt;
                    &lt;Alert type=&quot;error&quot; show-icon&gt;An error prompt&lt;/Alert&gt;
                </code>
                <div>
                    <Alert show-icon>
                        An info prompt
                        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
                    </Alert>
                    <Alert type="success" show-icon>
                        A success prompt
                        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
                    </Alert>
                    <Alert type="warning" show-icon>
                        A warning prompt
                        <template slot="desc">
                        Content of prompt. Content of prompt. Content of prompt.
                    </template>
                    </Alert>
                    <Alert type="error" show-icon>
                        An error prompt
                        <span slot="desc">
                            Custom error description copywriting.
                        </span>
                    </Alert>
                    <Alert show-icon>
                        Custom icon
                        <Icon type="ios-bulb-outline" slot="icon"></Icon>
                        <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>
                    </Alert>
                </div>
                <code class="html">
                    &lt;Alert show-icon&gt;
                        An info prompt
                        &lt;template slot=&quot;desc&quot;&gt;Content of prompt. Content of prompt. Content of prompt. Content of prompt. &lt;/template&gt;
                    &lt;/Alert&gt;
                    &lt;Alert type=&quot;success&quot; show-icon&gt;
                        A success prompt
                        &lt;span slot=&quot;desc&quot;&gt;Content of prompt. Content of prompt. Content of prompt. Content of prompt. &lt;/span&gt;
                    &lt;/Alert&gt;
                    &lt;Alert type=&quot;warning&quot; show-icon&gt;
                        A warning prompt
                        &lt;template slot=&quot;desc&quot;&gt;
                        Content of prompt. Content of prompt. Content of prompt.
                    &lt;/template&gt;
                    &lt;/Alert&gt;
                    &lt;Alert type=&quot;error&quot; show-icon&gt;
                        An error prompt
                        &lt;span slot=&quot;desc&quot;&gt;
                            Custom error description copywriting.
                        &lt;/span&gt;
                    &lt;/Alert&gt;
                    &lt;Alert show-icon&gt;
                        Custom icon
                        &lt;Icon type=&quot;ios-bulb-outline&quot; slot=&quot;icon&quot;&gt;&lt;/Icon&gt;
                        &lt;template slot=&quot;desc&quot;&gt;Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. &lt;/template&gt;
                    &lt;/Alert&gt;
                </code>
                <div>
                    <Alert closable>An info prompt</Alert>
                    <Alert type="success" show-icon closable>
                        A success prompt
                        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
                    </Alert>
                    <Alert type="warning" closable>
                        Custom closing content
                        <span slot="close">No longer prompt</span>
                    </Alert>
                </div>
                <code class="html">
                    &lt;Alert closable&gt;An info prompt&lt;/Alert&gt;
                </code>
                <div>
                    <Alert banner type="warning">Notice: notification contents...</Alert>
                    <Alert banner closable type="warning">Notice: notification contents...</Alert>
                </div>
                <code class="html">
                    &lt;Alert banner type=&quot;warning&quot;&gt;Notice: notification contents...&lt;/Alert&gt;
                    &lt;Alert banner closable type=&quot;warning&quot;&gt;Notice: notification contents...&lt;/Alert&gt;
                </code>
                <hr />
                <div class="api"> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>警告提示样式，可选值为<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code></td> <td>String</td> <td>info</td></tr> <tr><td>closable</td> <td>是否可关闭</td> <td>Boolean</td> <td>false</td></tr> <tr><td>show-icon</td> <td>是否显示图标</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><h3 id="Alert_events">Alert events</h3>  <a href="#Alert_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-close</td> <td>关闭时触发</td> <td>event</td></tr></tbody></table> <div class="anchor"><h3 id="Alert_slot">Alert slot</h3>  <a href="#Alert_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>无</td> <td>警告提示内容</td></tr> <tr><td>desc</td> <td>警告提示辅助性文字介绍</td></tr> <tr><td>icon</td> <td>自定义图标内容</td></tr> <tr><td>close</td> <td>自定义关闭内容</td></tr></tbody></table></div>
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
    methods: {},
    mounted () {
    }
}
</script>
