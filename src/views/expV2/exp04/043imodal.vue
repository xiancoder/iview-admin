<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview 中的 Modal</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Button type="primary" @click="modal6 = true">Display dialog box</Button>
                <Modal v-model="modal6" title="Title" :loading="loading" @on-ok="asyncOK">
                    <p>After you click ok, the dialog box will close in 2 seconds.</p>
                </Modal>
                <p>给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。</p>
                <code class="html">
                    &lt;Modal
                        v-model=&quot;modal6&quot;
                        title=&quot;Title&quot;
                        :loading=&quot;loading&quot;
                        @on - ok=&quot;asyncOK&quot;&gt;
                        &lt;p&gt;After you click ok, the dialog box will close in 2 seconds.&lt;/p&gt;
                    &lt;/Modal&gt;
                </code>
                <hr />
                <div class="api"> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>对话框是否显示，可使用 v-model 双向绑定数据。</td> <td>Boolean</td> <td>false</td></tr> <tr><td>title</td> <td>对话框标题，如果使用 slot 自定义了页头，则 title 无效</td> <td>String</td> <td>-</td></tr> <tr><td>closable</td> <td>是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭</td> <td>Boolean</td> <td>true</td></tr> <tr><td>mask-closable</td> <td>是否允许点击遮罩层关闭</td> <td>Boolean</td> <td>true</td></tr> <tr><td>loading</td> <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置<code>value</code>来关闭对话框</td> <td>Boolean</td> <td>false</td></tr> <tr><td>scrollable</td> <td>页面是否可以滚动</td> <td>Boolean</td> <td>false</td></tr> <tr><td>fullscreen</td> <td>是否全屏显示</td> <td>Boolean</td> <td>false</td></tr> <tr><td>draggable</td> <td>是否可以拖拽移动</td> <td>Boolean</td> <td>false</td></tr> <tr><td>mask</td> <td>是否显示遮罩层，开启 draggable 时，强制不显示</td> <td>Boolean</td> <td>true</td></tr> <tr><td>ok-text</td> <td>确定按钮文字</td> <td>String</td> <td>确定</td></tr> <tr><td>cancel-text</td> <td>取消按钮文字</td> <td>String</td> <td>取消</td></tr> <tr><td>width</td> <td>对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。当其值不大于 100 时以百分比显示，大于 100 时为像素</td> <td>Number | String</td> <td>520</td></tr> <tr><td>footer-hide</td> <td>不显示底部</td> <td>Boolean</td> <td>false</td></tr> <tr><td>styles</td> <td>设置浮层样式，调整浮层位置等，该属性设置的是<code>.ivu-modal</code>的样式</td> <td>Object</td> <td>-</td></tr> <tr><td>class-name</td> <td>设置对话框容器<code>.ivu-modal-wrap</code>的类名，可辅助实现垂直居中等自定义效果</td> <td>String</td> <td>-</td></tr> <tr><td>z-index</td> <td>层级</td> <td>Number</td> <td>1000</td></tr> <tr><td>transition-names</td> <td>自定义显示动画，第一项是模态框，第二项是背景</td> <td>Array</td> <td>['ease', 'fade']</td></tr> <tr><td>transfer</td> <td>是否将弹层放置于 body 内</td> <td>Boolean</td> <td>true</td></tr></tbody></table> <div class="anchor"><h3 id="Modal_events">Modal events</h3>  <a href="#Modal_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-ok</td> <td>点击确定的回调</td> <td>无</td></tr> <tr><td>on-cancel</td> <td>点击取消的回调</td> <td>无</td></tr> <tr><td>on-visible-change</td> <td>显示状态发生变化时触发</td> <td>true / false</td></tr></tbody></table> <div class="anchor"><h3 id="Modal_slot">Modal slot</h3>  <a href="#Modal_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>header</td> <td>自定义页头</td></tr> <tr><td>footer</td> <td>自定义页脚内容</td></tr> <tr><td>close</td> <td>自定义右上角关闭内容</td></tr> <tr><td>无</td> <td>对话框主体内容</td></tr></tbody></table> <div class="anchor"><h3 id="Modal_instance">Modal instance</h3>  <a href="#Modal_instance">#</a></div> <p>通过直接调用以下方法来使用：</p> <p><code>this.$Modal.info(config)</code></p> <p><code>this.$Modal.success(config)</code></p> <p><code>this.$Modal.warning(config)</code></p> <p><code>this.$Modal.error(config)</code></p> <p><code>this.$Modal.confirm(config)</code></p><p>以上方法隐式地创建及维护Vue组件。参数 config 为对象，具体说明如下：</p> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>title</td> <td>标题</td> <td>String | Element String</td> <td>-</td></tr> <tr><td>content</td> <td>内容</td> <td>String | Element String</td> <td>-</td></tr> <tr><td>render</td> <td>自定义内容，使用后不再限制类型， content 也无效。<span><a href="https://segmentfault.com/l/1500000008892728" target="_blank"><i class="ivu-icon ivu-icon-social-youtube-outline"></i> <span> 学习 Render 函数的内容</span></a> <!----></span></td> <td>Function</td> <td>-</td></tr> <tr><td>width</td> <td>宽度，单位 px</td> <td>Number | String</td> <td>416</td></tr> <tr><td>okText</td> <td>确定按钮的文字</td> <td>String</td> <td>确定</td></tr> <tr><td>cancelText</td> <td>取消按钮的文字，只在<code>Modal.confirm()</code>下有效</td> <td>String</td> <td>取消</td></tr> <tr><td>loading</td> <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用<code>Modal.remove()</code>来关闭对话框</td> <td>Boolean</td> <td>false</td></tr> <tr><td>scrollable</td> <td>页面是否可以滚动</td> <td>Boolean</td> <td>false</td></tr> <tr><td>closable</td> <td>是否可以按 Esc 键关闭</td> <td>Boolean</td> <td>false</td></tr> <tr><td>onOk</td> <td>点击确定的回调</td> <td>Function</td> <td>-</td></tr> <tr><td>onCancel</td> <td>点击取消的回调，只在<code>Modal.confirm()</code>下有效</td> <td>Function</td> <td>-</td></tr></tbody></table> <p>另外提供了全局关闭对话框的方法：</p> <p><code>this.$Modal.remove()</code></p></div>
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
            modal6: false,
            loading: true
        }
    },
    props: {},
    computed: {},
    methods: {
        asyncOK () {
            setTimeout(() => {
                this.modal6 = false
            }, 2000)
        }
    }
}
</script>
