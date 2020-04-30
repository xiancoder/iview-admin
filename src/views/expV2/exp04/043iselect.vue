<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">使用select选择器来进行表单填写</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>基本用法。可以使用 v-model 双向绑定数据。</p>
                <p>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据Option的value来返回选中的数据。</p>
                <p>可以给Select添加 style 样式，比如宽度。</p>
                <p>在展开选择器后，可以使用键盘的up和down快速上下选择，按下Enter选择，按下Esc收起选择器。</p>
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <p>通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                <p>小尺寸 size="small"
                    <Select size="small" v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>默认中等尺寸
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>大尺寸选择器 size="large"
                    <Select size="large" v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>通过给Select设置属性disabled禁用整个选择器。</p>
                <p>通过给Option设置属性disabled可以禁用当前项。</p>
                <p></p>
                <p>选择器禁选 disabled
                    <Select disabled v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>通过设置属性clearable可以清空已选项，仅适用于单选模式。</p>
                <p>点击右边清空 clearable
                    <Select clearable v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>分组显示 OptionGroup
                    <Select v-model="model2" style="width:200px">
                        <OptionGroup label="Hot Cities">
                            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </OptionGroup>
                        <OptionGroup label="Other Cities">
                            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </OptionGroup>
                    </Select>
                </p>
                <p>多选模式 multiple
                    <Select multiple v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>可搜索模式 filterable {{model1}}
                    <!-- <Select filterable ref="dataSet" v-model="model1" style="width:200px" @on-open-change="xxx"> -->
                    <!-- xxx方法不行 -->
                    <Select filterable ref="dataSet" v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>初始空值 先数据源 后数据
                    <Select filterable v-model="test1" style="width:200px">
                        <Option v-for="item in testList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>初始空值 先数据 后数据源
                    <Select filterable v-model="test2" style="width:200px">
                        <Option v-for="item in testList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>初始数据源 后数据
                    <Select filterable v-model="test3" style="width:200px">
                        <Option v-for="item in testList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>初始数据 后数据源
                    <Select filterable v-model="test4" style="width:200px">
                        <Option v-for="item in testList4" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>设置 prefix 属性或 slot 可以在 Select 内显示前缀图标。
                    <Select v-model="model1" prefix="ios-home" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>自定义图标
                    <Select v-model="model1" style="width:200px">
                        <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" />
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>对选项内容可以进行自定义。
                    <Select v-model="model1" style="width:200px">
                        <Option value="New York" label="New York">
                            <span>New York</span>
                            <span style="float:right;color:#ccc">America</span>
                        </Option>
                        <Option value="London" label="London">
                            <span>London</span>
                            <span style="float:right;color:#ccc">U.K.</span>
                        </Option>
                        <Option value="Sydney" label="Sydney">
                            <span>Sydney</span>
                            <span style="float:right;color:#ccc">Australian</span>
                        </Option>
                    </Select>
                </p>
                <p>label-in-value 获取键值 -- {{test5}} : {{test5value}}
                    <Select v-model="test5" :label-in-value="true" @on-change="(row)=>{test5value=row.label}" style="width:200px">
                        <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>label-in-value 获取键值 多选模式 -- {{test6}} : {{test6value}}
                    <Select multiple v-model="test6" :label-in-value="true" @on-change="(arr)=>{test6value = (arr||[]).map(row => {return row.label})}" style="width:200px">
                        <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <hr />
                <div class="api"> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array</td> <td>String | Number | Array</td> <td>空</td></tr> <tr><td>multiple</td> <td>是否支持多选</td> <td>Boolean</td> <td>false</td></tr> <tr><td>disabled</td> <td>是否禁用</td> <td>Boolean</td> <td>false</td></tr> <tr><td>clearable</td> <td>是否可以清空选项，只在单选时有效</td> <td>Boolean</td> <td>false</td></tr> <tr><td>filterable</td> <td>是否支持搜索</td> <td>Boolean</td> <td>false</td></tr> <tr><td>remote</td> <td>是否使用远程搜索</td> <td>Boolean</td> <td>false</td></tr> <tr><td>remote-method</td> <td>远程搜索的方法</td> <td>Function</td> <td>-</td></tr> <tr><td>loading</td> <td>当前是否正在远程搜索</td> <td>Boolean</td> <td>false</td></tr> <tr><td>loading-text</td> <td>远程搜索中的文字提示</td> <td>String</td> <td>加载中</td></tr> <tr><td>label</td> <td>仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。</td> <td>String | Number | Array</td> <td>空</td></tr> <tr><td>size</td> <td>选择框大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填</td> <td>String</td> <td>-</td></tr> <tr><td>placeholder</td> <td>选择框默认文字</td> <td>String</td> <td>请选择</td></tr> <tr><td>not-found-text</td> <td>当下拉列表为空时显示的内容</td> <td>String</td> <td>无匹配数据</td></tr> <tr><td>label-in-value</td> <td>在返回选项时，是否将 label 和 value 一并返回，默认只返回 value</td> <td>Boolean</td> <td>false</td></tr> <tr><td>placement</td> <td>弹窗的展开方向，可选值为 <code>top</code>、<code>bottom</code>、<code>top-start</code>、<code>bottom-start</code>、<code>top-end</code>、<code>bottom-end</code></td> <td>String</td> <td>bottom-start</td></tr> <tr><td>transfer</td> <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td> <td>Boolean</td> <td>false</td></tr> <tr><td>element-id</td> <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr> <tr><td>transfer-class-name <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td> <td>开启 transfer 时，给浮层添加额外的 class 名称</td> <td>String</td> <td>-</td></tr> <tr><td>prefix <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>在 Select 内显示图标</td> <td>String</td> <td>-</td></tr> <tr><td>max-tag-count <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>多选时最多显示多少个 tag</td> <td>Number</td> <td>-</td></tr> <tr><td>max-tag-placeholder <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>隐藏 tag 时显示的内容，参数是剩余项数量</td> <td>Function</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Select_events">Select events</h3> <!----> <!----> <!---->  <a href="#Select_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>选中的<code>Option</code>变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性</td> <td>当前选中项</td></tr> <tr><td>on-query-change</td> <td>搜索词改变时触发</td> <td>query</td></tr> <tr><td>on-clear</td> <td>点击清空按钮时触发</td> <td>无</td></tr> <tr><td>on-open-change</td> <td>下拉框展开或收起时触发</td> <td>true / false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Select_methods">Select methods</h3> <!----> <!----> <!---->  <a href="#Select_methods">#</a></div> <table><thead><tr><th>方法名</th> <th>说明</th> <th>参数</th></tr></thead> <tbody><tr><td>setQuery</td> <td>设置搜索词，为空时清空，仅在 <code>filterable="true"</code> 时有效</td> <td>query</td></tr> <tr> <td>clearSingleSelect</td> <td>清空单选项，仅在 <code>clearable="true"</code> 时有效</td> <td>无</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Select_slot">Select slot</h3> <!----> <!----> <!---->  <a href="#Select_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>prefix <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>自定义 Select 内头部图标</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="Option_props">Option props</h3> <!----> <!----> <!---->  <a href="#Option_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>选项值，默认根据此属性值进行筛选，必填</td> <td>String | Number</td> <td>无</td></tr> <tr><td>label</td> <td>选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。</td> <td>String</td> <td>-</td></tr> <tr><td>disabled</td> <td>是否禁用当前项</td> <td>Boolean</td> <td>false</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="OptionGroup_props">OptionGroup props</h3> <!----> <!----> <!---->  <a href="#OptionGroup_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>label</td> <td>分组的组名</td> <td>String</td> <td>空</td></tr></tbody></table></div>
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
            model1: '',
            model2: '',
            cityList: [ { value: 'New York', label: 'New York' }, { value: 'London', label: 'London' }, { value: 'Sydney', label: 'Sydney' } ],
            cityList1: [ { value: 'New York', label: 'New York' }, { value: 'London', label: 'London' }, { value: 'Sydney', label: 'Sydney' } ],
            cityList2: [ { value: 'Ottawa', label: 'Ottawa' }, { value: 'Paris', label: 'Paris' }, { value: 'Canberra', label: 'Canberra' } ],
            test1: '',
            testList1: [],
            test2: '',
            testList2: [],
            test3: '',
            testList3: [],
            test4: '',
            testList4: [],
            cityList3: [ { value: '1', label: 'Ottawa' }, { value: '2', label: 'Paris' }, { value: '3', label: 'Canberra' } ],
            test5: '',
            test5value: '',
            test6: [],
            test6value: ''
        }
    },
    methods: {
        xxx (a, b, c) {
            console.log(a, b, c)
            if (a) { this.$refs.dataSet.setQuery(null) }
        }
    },
    mounted () {
        this.test4 = 'New York'
        this.testList3 = [ { value: 'New York', label: 'New York' }, { value: 'London', label: 'London' }, { value: 'Sydney', label: 'Sydney' } ]
        setTimeout(() => {
            this.test1 = 'New York'
            this.testList2 = [ { value: 'New York', label: 'New York' }, { value: 'London', label: 'London' }, { value: 'Sydney', label: 'Sydney' } ]
        }, 1e3)
        setTimeout(() => {
            this.test3 = 'New York'
            this.testList4 = [ { value: 'New York', label: 'New York' }, { value: 'London', label: 'London' }, { value: 'Sydney', label: 'Sydney' } ]
            this.test2 = 'New York'
            this.testList1 = [ { value: 'New York', label: 'New York' }, { value: 'London', label: 'London' }, { value: 'Sydney', label: 'Sydney' } ]
        }, 2e3)
    }
}
</script>
