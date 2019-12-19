<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Checkbox 复选框</div>
            <div class="blogContent" v-highlight>
                <div>
                    <Checkbox v-model="b1">Checkbox</Checkbox>
                    <Checkbox v-model="b1" disabled>Checkbox</Checkbox>
                </div>
                <script type="text/html">
                    <Checkbox v-model="b1">Checkbox</Checkbox>
                    <Checkbox v-model="b1" disabled>Checkbox</Checkbox>
                </script>
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
                <p> 简单实现的全选反选功能 </p>
                <Checkbox
                    :indeterminate="indeterminate"
                    :value="checkAll"
                    @click.prevent.native="handleCheckAll">全选</Checkbox>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="香蕉"></Checkbox>
                    <Checkbox label="苹果"></Checkbox>
                    <Checkbox label="西瓜"></Checkbox>
                </CheckboxGroup>
                <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="Checkbox_props">Checkbox props</h3> <!----> <!----> <!---->  <a href="#Checkbox_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td> <td>Boolean</td> <td>false</td></tr> <tr><td>label</td> <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中</td> <td>String | Number | Boolean</td> <td>-</td></tr> <tr><td>disabled</td> <td>是否禁用当前项</td> <td>Boolean</td> <td>false</td></tr> <tr><td>indeterminate</td> <td>设置 indeterminate 状态，只负责样式控制</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size</td> <td>多选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>true-value</td> <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>true</td></tr> <tr><td>false-value</td> <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Checkbox_events">Checkbox events</h3> <!----> <!----> <!---->  <a href="#Checkbox_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</td> <td>true | false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="CheckboxGroup_props">CheckboxGroup props</h3> <!----> <!----> <!---->  <a href="#CheckboxGroup_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>指定选中项目的集合，可以使用 v-model 双向绑定数据</td> <td>Array</td> <td>[]</td></tr> <tr><td>size</td> <td>多选框组的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td> <td>String</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="CheckboxGroup_events">CheckboxGroup events</h3> <!----> <!----> <!---->  <a href="#CheckboxGroup_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发</td> <td>[...]</td></tr></tbody></table></div>
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
            list: ['香蕉', '西瓜'],
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
