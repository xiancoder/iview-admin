<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Radio单选</div>
            <div class="blogContent" v-highlight>
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
                <div class="api"><div class="anchor"><!----> <h2 id="API">API</h2> <!----> <!----> <!----> <!---->  <a href="#API">#</a></div> <div class="anchor"><!----> <!----> <h3 id="i-switch_props">i-switch props</h3> <!----> <!----> <!---->  <a href="#i-switch_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size</td> <td>开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用 large。</td> <td>String</td> <td>-</td></tr> <tr><td>disabled</td> <td>禁用开关</td> <td>Boolean</td> <td>false</td></tr> <tr><td>true-value</td> <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>true</td></tr> <tr><td>false-value</td> <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td> <td>String, Number, Boolean</td> <td>false</td></tr> <tr><td>loading</td> <td>加载中的开关</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="i-switch_events">i-switch events</h3> <!----> <!----> <!---->  <a href="#i-switch_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>开关变化时触发，返回当前的状态</td> <td>true | false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="i-switch_slot">i-switch slot</h3> <!----> <!----> <!---->  <a href="#i-switch_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>open</td> <td>自定义显示打开时的内容</td></tr> <tr><td>close</td> <td>自定义显示关闭时的内容</td></tr></tbody></table></div>
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
