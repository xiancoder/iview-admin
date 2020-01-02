<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Radio单选</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <div>
                    <Radio v-model="a1">Radio</Radio>
                </div>
                <script type="text/html">
                    <Radio v-model="a1">Radio</Radio>
                </script>
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
                <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Radio_props">Radio props</h3> <!----> <!----> <!---->  <a href="#Radio_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>只在单独使用时有效。可以使用 <code>v-model</code> 双向绑定数据</td> <td>Boolean</td> <td>false</td></tr> <tr><td>label </td> <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td> <td>String | Number</td> <td>-</td></tr> <tr><td>disabled</td> <td>是否禁用当前项</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size</td> <td>单选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>true-value</td> <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>true</td></tr> <tr><td>false-value</td> <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Radio_events">Radio events</h3> <!----> <!----> <!---->  <a href="#Radio_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td> <td>...</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="RadioGroup_props">RadioGroup props</h3> <!----> <!----> <!---->  <a href="#RadioGroup_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>指定当前选中的项目数据。可以使用 <code>v-model</code> 双向绑定数据</td> <td>String | Number</td> <td>-</td></tr> <tr><td>type</td> <td>可选值为 button 或不填，为 button 时使用按钮样式</td> <td>String</td> <td>-</td></tr> <tr><td>size</td> <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>vertical</td> <td>是否垂直排列，按钮样式下无效</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="RadioGroup_events">RadioGroup events</h3> <!----> <!----> <!---->  <a href="#RadioGroup_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发</td> <td>...</td></tr></tbody></table></div>
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
