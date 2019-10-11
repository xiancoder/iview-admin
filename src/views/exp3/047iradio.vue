<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Radio单选</div>
            <div class="blogContent">
                <Collapse simple>
                    <Panel name="1">
                        Radio单选 布尔控制
                        <div slot="content" v-highlight>
                            <div>
                                <Radio v-model="a1">Radio</Radio>
                            </div>
                           <script type="text/html">
                                <Radio v-model="a1">Radio</Radio>
                           </script>
                        </div>
                    </Panel>
                    <Panel name="2">
                        Radio单选 字符串控制 带图标
                        <div slot="content" v-highlight>
                            <div>
                                <RadioGroup v-model="a2">
                                    <Radio label="apple">
                                        <Icon type="logo-apple"></Icon>
                                        <span>Apple</span>
                                    </Radio>
                                    <Radio label="android">
                                        <Icon type="logo-android"></Icon>
                                        <span>Android</span>
                                    </Radio>
                                    <Radio label="windows">
                                        <Icon type="logo-windows"></Icon>
                                        <span>Windows</span>
                                    </Radio>
                                </RadioGroup>
                            </div>
                           <script type="text/html">
                                <RadioGroup v-model="a2">
                                    <Radio label="apple">
                                        <Icon type="logo-apple"></Icon>
                                        <span>Apple</span>
                                    </Radio>
                                    ...
                                </RadioGroup>
                           </script>
                        </div>
                    </Panel>
                    <Panel name="3">
                        Radio单选 禁止选择
                        <div slot="content" v-highlight>
                            <div>
                                <Radio disabled v-model="a1">Radio</Radio><Divider type="vertical" />
                                <RadioGroup v-model="a2">
                                    <Radio label="apple" disabled>
                                        <Icon type="logo-apple"></Icon>
                                        <span>Apple</span>
                                    </Radio>
                                    <Radio label="android">
                                        <Icon type="logo-android"></Icon>
                                        <span>Android</span>
                                    </Radio>
                                    <Radio label="windows">
                                        <Icon type="logo-windows"></Icon>
                                        <span>Windows</span>
                                    </Radio>
                                </RadioGroup>
                            </div>
                           <script type="text/html">
                                <Radio disabled v-model="a1">Radio</Radio>
                                <RadioGroup v-model="a2">
                                    <Radio label="apple" disabled>
                                        <Icon type="logo-apple"></Icon>
                                        <span>Apple</span>
                                    </Radio>
                                    ...
                                </RadioGroup>
                           </script>
                        </div>
                    </Panel>
                    <Panel name="4">
                        Radio单选 竖向选择
                        <div slot="content" v-highlight>
                            <div>
                                <RadioGroup v-model="a2" vertical>
                                    <Radio label="apple">
                                        <Icon type="logo-apple"></Icon>
                                        <span>Apple</span>
                                    </Radio>
                                    <Radio label="android">
                                        <Icon type="logo-android"></Icon>
                                        <span>Android</span>
                                    </Radio>
                                    <Radio label="windows">
                                        <Icon type="logo-windows"></Icon>
                                        <span>Windows</span>
                                    </Radio>
                                </RadioGroup>
                            </div>
                           <script type="text/html">
                                <RadioGroup v-model="a2" vertical>
                           </script>
                        </div>
                    </Panel>
                    <Panel name="5">
                        Radio单选 按钮形式
                        <div slot="content" v-highlight>
                            <div>
                                <RadioGroup v-model="a2" type="button">
                                    <Radio label="apple" disabled>
                                        <Icon type="logo-apple"></Icon>
                                        <span>Apple</span>
                                    </Radio>
                                    <Radio label="android">
                                        <Icon type="logo-android"></Icon>
                                        <span>Android</span>
                                    </Radio>
                                    <Radio label="windows">
                                        <Icon type="logo-windows"></Icon>
                                        <span>Windows</span>
                                    </Radio>
                                </RadioGroup>
                            </div>
                           <script type="text/html">
                                <RadioGroup v-model="a2" type="button">
                           </script>
                        </div>
                    </Panel>
                    <Panel name="6">
                        Radio单选 设置尺寸
                        <div slot="content">
                            <RadioGroup v-model="a3" type="button" size="large">
                                <Radio label="北京"></Radio>
                                <Radio label="上海"></Radio>
                                <Radio label="深圳"></Radio>
                                <Radio label="杭州"></Radio>
                            </RadioGroup>
                            <br/>
                            <RadioGroup v-model="a3" type="button">
                                <Radio label="北京"></Radio>
                                <Radio label="上海"></Radio>
                                <Radio label="深圳"></Radio>
                                <Radio label="杭州"></Radio>
                            </RadioGroup>
                            <br/>
                            <RadioGroup v-model="a3" type="button" size="small">
                                <Radio label="北京"></Radio>
                                <Radio label="上海"></Radio>
                                <Radio label="深圳"></Radio>
                                <Radio label="杭州"></Radio>
                            </RadioGroup>
                        </div>
                    </Panel>
                    <Panel name="65">
                        Radio单选 API
                        <div slot="content">
                            <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Radio_props">Radio props</h3> <!----> <!----> <!---->  <a href="#Radio_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>只在单独使用时有效。可以使用 <code>v-model</code> 双向绑定数据</td> <td>Boolean</td> <td>false</td></tr> <tr><td>label </td> <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td> <td>String | Number</td> <td>-</td></tr> <tr><td>disabled</td> <td>是否禁用当前项</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size</td> <td>单选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>true-value</td> <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>true</td></tr> <tr><td>false-value</td> <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Radio_events">Radio events</h3> <!----> <!----> <!---->  <a href="#Radio_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td> <td>...</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="RadioGroup_props">RadioGroup props</h3> <!----> <!----> <!---->  <a href="#RadioGroup_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>指定当前选中的项目数据。可以使用 <code>v-model</code> 双向绑定数据</td> <td>String | Number</td> <td>-</td></tr> <tr><td>type</td> <td>可选值为 button 或不填，为 button 时使用按钮样式</td> <td>String</td> <td>-</td></tr> <tr><td>size</td> <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>vertical</td> <td>是否垂直排列，按钮样式下无效</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="RadioGroup_events">RadioGroup events</h3> <!----> <!----> <!---->  <a href="#RadioGroup_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发</td> <td>...</td></tr></tbody></table></div>
                        </div>
                    </Panel>
                    <Panel name="7" v-highlight>
                        Checkbox多选框
                        <div slot="content">
                            <div>
                                <Checkbox v-model="b1">Checkbox</Checkbox>
                                <Checkbox v-model="b1" disabled>Checkbox</Checkbox>
                            </div>
                           <script type="text/html">
                                <Checkbox v-model="b1">Checkbox</Checkbox>
                                <Checkbox v-model="b1" disabled>Checkbox</Checkbox>
                           </script>
                        </div>
                    </Panel>
                    <Panel name="8">
                        Checkbox多选框 组合使用/禁用
                        <div slot="content">
                            <CheckboxGroup v-model="b2">
                                <Checkbox label="twitter">
                                    <Icon type="logo-twitter"></Icon>
                                    <span>Twitter</span>
                                </Checkbox>
                                <Checkbox label="facebook" disabled>
                                    <Icon type="logo-facebook"></Icon>
                                    <span>Facebook</span>
                                </Checkbox>
                                <Checkbox label="github">
                                    <Icon type="logo-github"></Icon>
                                    <span>Github</span>
                                </Checkbox>
                                <Checkbox label="snapchat">
                                    <Icon type="logo-snapchat"></Icon>
                                    <span>Snapchat</span>
                                </Checkbox>
                            </CheckboxGroup>
                        </div>
                    </Panel>
                    <Panel name="9">
                        Checkbox多选框 与其它组件通信
                        <div slot="content">
                            <Checkbox v-model="checked" :disabled="disabled">
                                <span v-if="checked">Checked</span>
                                <span v-else>Unchecked</span>
                                -
                                <span v-if="!disabled">Usable</span>
                                <span v-else>Disabled</span>
                            </Checkbox>
                            <Divider type="vertical" />
                            <Button type="primary" @click="checked = !checked" label="small">
                                <span v-if="!checked">Checked</span>
                                <span v-else>Unchecked</span>
                            </Button>
                            <Divider type="vertical" />
                            <Button type="primary" @click="disabled = !disabled" label="small">
                                <span v-if="disabled">Usable</span>
                                <span v-else>Disabled</span>
                            </Button>
                        </div>
                    </Panel>
                    <Panel name="10">
                        Checkbox多选框 全选和全部取消
                        <div slot="content">
                            <Checkbox
                                :indeterminate="indeterminate"
                                :value="checkAll"
                                @click.prevent.native="handleCheckAll">全选</Checkbox>
                            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                <Checkbox label="香蕉"></Checkbox>
                                <Checkbox label="苹果"></Checkbox>
                                <Checkbox label="西瓜"></Checkbox>
                            </CheckboxGroup>
                        </div>
                    </Panel>
                    <Panel name="105">
                        Checkbox多选框 API
                        <div slot="content">
                            <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Checkbox_props">Checkbox props</h3> <!----> <!----> <!---->  <a href="#Checkbox_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td> <td>Boolean</td> <td>false</td></tr> <tr><td>label</td> <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中</td> <td>String | Number | Boolean</td> <td>-</td></tr> <tr><td>disabled</td> <td>是否禁用当前项</td> <td>Boolean</td> <td>false</td></tr> <tr><td>indeterminate</td> <td>设置 indeterminate 状态，只负责样式控制</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size</td> <td>多选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>true-value</td> <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>true</td></tr> <tr><td>false-value</td> <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Checkbox_events">Checkbox events</h3> <!----> <!----> <!---->  <a href="#Checkbox_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</td> <td>true | false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="CheckboxGroup_props">CheckboxGroup props</h3> <!----> <!----> <!---->  <a href="#CheckboxGroup_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>指定选中项目的集合，可以使用 v-model 双向绑定数据</td> <td>Array</td> <td>[]</td></tr> <tr><td>size</td> <td>多选框组的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td> <td>String</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="CheckboxGroup_events">CheckboxGroup events</h3> <!----> <!----> <!---->  <a href="#CheckboxGroup_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发</td> <td>[...]</td></tr></tbody></table></div>
                        </div>
                    </Panel>
                    <Panel name="11">
                        Switch开关 基本/尺寸/
                        <div slot="content" v-highlight>
                            <Alert type="warning" show-icon>注意：没有使用 iview-loader 时，必须使用 i-switch 标签。</Alert>
                            <div>
                                <i-switch v-model="switch1" @on-change="change" /><Divider type="vertical" />
                                <i-switch size="large" /><Divider type="vertical" />
                                <i-switch /><Divider type="vertical" />
                                <i-switch size="small" /><Divider type="vertical" />
                                <i-switch>
                                    <span slot="open">开</span>
                                    <span slot="close">关</span>
                                </i-switch><Divider type="vertical" />
                                <i-switch>
                                    <Icon type="md-checkmark" slot="open"></Icon>
                                    <Icon type="md-close" slot="close"></Icon>
                                </i-switch>
                                <br><br>
                                <i-switch size="large">
                                    <span slot="open">开启</span>
                                    <span slot="close">关闭</span>
                                </i-switch><Divider type="vertical" />
                                <i-switch size="large">
                                    <span slot="open">ON</span>
                                    <span slot="close">OFF</span>
                                </i-switch><Divider type="vertical" />
                                <i-switch :disabled="disabled" /><Divider type="vertical" />
                                <i-switch :loading="loading" /><Divider type="vertical" />
                                <i-switch loading :value="false" size="small" />
                            </div>
                        </div>
                    </Panel>
                    <Panel name="12">
                        i-switch开关 API
                        <div slot="content">
                           <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="i-switch_props">i-switch props</h3> <!----> <!----> <!---->  <a href="#i-switch_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size</td> <td>开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用 large。</td> <td>String</td> <td>-</td></tr> <tr><td>disabled</td> <td>禁用开关</td> <td>Boolean</td> <td>false</td></tr> <tr><td>true-value</td> <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>true</td></tr> <tr><td>false-value</td> <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>false</td></tr> <tr><td>loading</td> <td>加载中的开关</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="i-switch_events">i-switch events</h3> <!----> <!----> <!---->  <a href="#i-switch_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>开关变化时触发，返回当前的状态</td> <td>true | false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="i-switch_slot">i-switch slot</h3> <!----> <!----> <!---->  <a href="#i-switch_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>open</td> <td>自定义显示打开时的内容</td></tr> <tr><td>close</td> <td>自定义显示关闭时的内容</td></tr></tbody></table></div>
                        </div>
                    </Panel>
                </Collapse>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            a1: false,
            a2: 'apple',
            a3: '北京',
            b1: false,
            b2: ['facebook', 'github'],
            disabled: true,
            checked: true,
            checkAll: false,
            indeterminate: true,
            checkAllGroup: ['香蕉', '西瓜'],
            loading: true,
            switch1: false
        }
    },
    props: {},
    computed: {},
    methods: {
        handleCheckAll () {
            if (this.indeterminate) {
                this.checkAll = false
            } else {
                this.checkAll = !this.checkAll
            }
            this.indeterminate = false
            if (this.checkAll) {
                this.checkAllGroup = ['香蕉', '苹果', '西瓜']
            } else {
                this.checkAllGroup = []
            }
        },
        checkAllGroupChange (data) {
            if (data.length === 3) {
                this.indeterminate = false
                this.checkAll = true
            } else if (data.length > 0) {
                this.indeterminate = true
                this.checkAll = false
            } else {
                this.indeterminate = false
                this.checkAll = false
            }
        },
        change (status) {
            this.$Message.info('开关状态：' + status)
        }
    }
}
</script>
