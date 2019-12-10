<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Tooltip文字提示/气泡提示</div>
            <div class="blogContent" v-highlight>
                <Tooltip content="Here is the prompt text">
                    A balloon appears when the mouse passes over this text
                </Tooltip>
                <p>https://www.iviewui.com/components/tooltip</p>
                <Poptip trigger="hover" title="Title" content="content">
                    <Button>Hover</Button>
                </Poptip>
                <Poptip title="Title" content="content">
                    <Button>Click</Button>
                </Poptip>
                <Poptip trigger="focus" title="Title" content="content">
                    <Button>Focus</Button>
                </Poptip>
                <Poptip trigger="focus" title="Title" content="content">
                    <Input placeholder="Input focus" />
                </Poptip>
                <p>https://www.iviewui.com/components/poptip</p>
                <div class="api"><div class="anchor"><h2 id="API">API</h2>  <a href="#API">#</a></div> <div class="anchor"><h3 id="Poptip_props">Poptip props</h3>  <a href="#Poptip_props">#</a></div> <table ><thead ><tr ><th >属性</th> <th >说明</th> <th >类型</th> <th >默认值</th></tr></thead> <tbody ><tr ><td >trigger</td> <td >触发方式，可选值为<code >hover</code>（悬停）<code >click</code>（点击）<code >focus</code>（聚焦）,在 confirm 模式下，只有 click 有效</td> <td >String</td> <td >click</td></tr> <tr ><td >title</td> <td >显示的标题</td> <td >String | Number</td> <td >-</td></tr> <tr ><td >content</td> <td >显示的正文内容，只在非 confirm 模式下有效</td> <td >String | Number</td> <td >空</td></tr> <tr ><td >placement</td> <td >提示框出现的位置，可选值为<code >top</code><code >top-start</code><code >top-end</code><code >bottom</code><code >bottom-start</code><code >bottom-end</code><code >left</code><code >left-start</code><code >left-end</code><code >right</code><code >right-start</code><code >right-end</code>，2.12.0 版本开始支持自动识别</td> <td >String</td> <td >top</td></tr> <tr ><td >width</td> <td >宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px</td> <td >String | Number</td> <td >-</td></tr> <tr ><td >confirm</td> <td >是否开启对话框模式</td> <td >Boolean</td> <td >false</td></tr> <tr ><td >ok-text</td> <td >确定按钮的文字，只在 confirm 模式下有效</td> <td >String</td> <td >确定</td></tr> <tr ><td >cancel-text</td> <td >取消按钮的文字，只在 confirm 模式下有效</td> <td >String</td> <td >取消</td></tr> <tr ><td >transfer</td> <td >是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td> <td >Boolean</td> <td >false</td></tr> <tr ><td >popper-class</td> <td >给 Poptip 设置 class-name，在使用 transfer 时会很有用</td> <td >String</td> <td >-</td></tr> <tr ><td >word-wrap</td> <td >开启后，超出指定宽度文本将自动换行，并两端对齐</td> <td >Boolean</td> <td >false</td></tr> <tr ><td >padding</td> <td >自定义间距值</td> <td >String</td> <td >8px 16px</td></tr> <tr ><td >offset</td> <td >出现位置的偏移量</td> <td >Number</td> <td >0</td></tr> <tr ><td >options</td> <td >自定义 popper.js 的配置项，具体配置见 <a href="https://popper.js.org/popper-documentation.html" target="_blank">popper.js 文档</a></td> <td >Object</td> <td ><div ><p>{ modifiers: { computeStyle:{ gpuAcceleration: <span class="hljs-literal">false</span>, }, preventOverflow :{ boundariesElement: <span class="hljs-string">'window'</span> } } }</p><span class="scale"><div class="ivu-tooltip"><div class="ivu-tooltip-rel"><i class="ivu-icon ivu-icon-md-qr-scanner" style="font-size: 18px;"></i></div> <!----></div></span> <span class="copy"><div class="ivu-tooltip"><div class="ivu-tooltip-rel"><i class="ivu-icon ivu-icon-md-copy" style="font-size: 18px;"></i> <i class="ivu-icon ivu-icon-md-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div> <!----></div></span> <!----></div></td></tr></tbody></table> <div class="anchor"><h3 id="Poptip_events">Poptip events</h3>  <a href="#Poptip_events">#</a></div> <table ><thead ><tr ><th >事件名</th> <th >说明</th> <th >返回值</th></tr></thead> <tbody ><tr ><td >on-popper-show</td> <td >在提示框显示时触发</td> <td >无</td></tr> <tr ><td >on-popper-hide</td> <td >在提示框消失时触发</td> <td >无</td></tr> <tr ><td >on-ok</td> <td >点击确定的回调，只在 confirm 模式下有效</td> <td >无</td></tr> <tr ><td >on-cancel</td> <td >点击取消的回调，只在 confirm 模式下有效</td> <td >无</td></tr></tbody></table> <div class="anchor"><h3 id="Poptip_slot">Poptip slot</h3>  <a href="#Poptip_slot">#</a></div> <table ><thead ><tr ><th >名称</th> <th >说明</th></tr></thead> <tbody ><tr ><td >无</td> <td >主体内容</td></tr> <tr ><td >title</td> <td >提示框标题，定义此 slot 时，会覆盖 props <code >title</code></td></tr> <tr ><td >content</td> <td >提示框内容，定义此 slot 时，会覆盖 props <code >content</code>，只在非 confirm 模式下有效</td></tr></tbody></table></div>
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
