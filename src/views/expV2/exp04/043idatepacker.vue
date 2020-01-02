<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">[Iview] DatePicker日期选择器 TimePicker时间选择器</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。</p>
                <p>设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p>
                <div>
                    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </div>
                <div>
                    <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                </div>
                <script type="text/html">
                    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                    <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                </script>
                <p>设置属性 options 对象中的 shortcuts 可以设置快捷选项，详见示例代码。</p>
                <p>其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。</p>
                <p>value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。</p>
                <div>
                    <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                </div>
                <div>
                    <DatePicker type="date" multiple placeholder="Select date" style="width: 300px"></DatePicker>
                </div>
                <p>设置属性 format 可以改变日期的显示格式，详见  Date。</p>
                <p>注意，format 只是改变显示的格式，并非改变 value 值。</p>
                <div>
                    <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                    <span>value1 = {{value1}}</span>
                </div>
                <div>
                    <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 300px"></DatePicker>
                    <span>value2 = {{value2}}</span>
                </div>
                <p>let v1= moment(this.value2[0]).format('YYYY-MM-DD');</p>
                <p>let v2= moment(this.value2[1]).format('YYYY-MM-DD');</p>
                <div>
                    <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
                </div>
                <div>
                    <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
                </div>
                <div>
                    <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
                </div>
                <div>
                    <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
                </div>
                <hr />
                <div class="api"> <table><colgroup><col> <col> <col> <col width="200"></colgroup> <thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>显示类型，可选值为 <b>date</b>、<b>daterange</b>、<b>datetime</b>、<b>datetimerange</b>、<b>year</b>、<b>month</b></td> <td>String</td> <td>date</td></tr> <tr><td>value</td> <td>日期，可以是 JavaScript 的 Date，例如 <strong>new Date()</strong>，也可以是标准的日期格式，点击右边查看<br> 注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用 </td> <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td> <td>-</td></tr> <tr><td>format</td> <td>展示的日期格式</td> <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td> <td><ul><li><strong>date | daterange</strong>：<br>yyyy-MM-dd</li> <li><strong>datetime | datetimerange</strong>：<br>yyyy-MM-dd HH:mm:ss</li> <li><strong>year</strong>：yyyy</li> <li><strong>month</strong>：yyyy-MM</li></ul></td></tr> <tr><td>placement</td> <td>日期选择器出现的位置，可选值为<b>top</b><b>top-start</b><b>top-end</b><b>bottom</b><b>bottom-start</b><b>bottom-end</b><b>left</b><b>left-start</b><b>left-end</b><b>right</b><b>right-start</b><b>right-end</b>，2.12.0 版本开始支持自动识别</td> <td>String</td> <td>bottom-start</td></tr> <tr><td>placeholder</td> <td>占位文本</td> <td>String</td> <td>空</td></tr> <tr><td>options</td> <td>选择器额外配置，比如不可选日期与快捷选项，具体项详见下表</td> <td>Object</td> <td>-</td></tr> <tr><td>split-panels</td> <td>开启后，左右面板不联动，仅在 <b>daterange</b> 和 <b>datetimerange</b> 下可用。</td> <td>Boolean</td> <td>false</td></tr> <tr><td>multiple</td> <td>开启后，可以选择多个日期，仅在 <b>date</b> 下可用。</td> <td>Boolean</td> <td>false</td></tr> <tr><td>show-week-numbers</td> <td>开启后，可以显示星期数。</td> <td>Boolean</td> <td>false</td></tr> <tr><td>start-date</td> <td>设置默认显示的起始日期。</td> <td>Date</td> <td>-</td></tr> <tr><td>confirm</td> <td>是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭</td> <td>Boolean</td> <td>false</td></tr> <tr><td>open</td> <td>手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td> <td>Boolean</td> <td>null</td></tr> <tr><td>size</td> <td>尺寸，可选值为<b>large</b>、<b>small</b>、<b>default</b>或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>disabled</td> <td>是否禁用选择器</td> <td>Boolean</td> <td>false</td></tr> <tr><td>clearable</td> <td>是否显示清除按钮</td> <td>Boolean</td> <td>true</td></tr> <tr><td>readonly</td> <td>完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效</td> <td>Boolean</td> <td>false</td></tr> <tr><td>editable</td> <td>文本框是否可以输入，只在没有使用 slot 时有效</td> <td>Boolean</td> <td>true</td></tr> <tr><td>transfer</td> <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td> <td>Boolean</td> <td>false</td></tr> <tr><td>element-id</td> <td>给表单元素设置 <b>id</b>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr> <tr><td>time-picker-options</td> <td>可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：<b>:time-picker-options="{steps: [1, 10, 10]}"</b></td> <td>Object</td> <td>{}</td></tr> <tr><td>separator <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td> <td>两个日期间的分隔符</td> <td>String</td> <td> - </td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="options">options</h3> <!----> <!----> <!---->  <a href="#options">#</a></div> <p>选择器额外配置</p> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>shortcuts</td> <td>设置快捷选项，每项内容：<ul><li><strong>text | String</strong>：显示的文案</li> <li><strong>value | Function</strong>：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调</li> <li><strong>onClick | Function</strong>：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用</li></ul></td> <td>Array</td> <td>-</td></tr> <tr><td>disabledDate</td> <td>设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天</td> <td>Function</td> <td>-</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="DatePicker_events">DatePicker events</h3> <!----> <!----> <!---->  <a href="#DatePicker_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-change</td> <td>日期发生变化时触发</td> <td>返回两个值，已经格式化后的日期，比如 2016-01-01，和当前的日期类型，比如 date</td></tr> <tr><td>on-open-change</td> <td>弹出日历和关闭日历时触发</td> <td>true | false</td></tr> <tr><td>on-ok</td> <td>在 confirm 模式下有效，点击确定按钮时触发</td> <td>-</td></tr> <tr><td>on-clear</td> <td>在 confirm 模式或 clearable = true 时有效，在清空日期时触发</td> <td>-</td></tr> <tr><td>on-clickoutside <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>点击外部关闭下拉菜单时触发</td> <td>event</td></tr></tbody></table> <div class="anchor"><!----> <!----> <h3 id="DatePicker_slot">DatePicker slot</h3> <!----> <!----> <!---->  <a href="#DatePicker_slot">#</a></div> <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>无</td> <td>自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例</td></tr></tbody></table></div>
                <p>设置属性 type 为 time 或 timerange 分别显示选择单个时间和选择范围时间类型。</p>
                <p>设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p>
                <p></p>
                <Row>
                    <Col span="12">
                        <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
                    </Col>
                    <Col span="12">
                        <TimePicker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
                    </Col>
                </Row>
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
            value1: '2016-01-01',
            value2: ['2016-01-01', '2016-02-15'],
            options3: {
                disabledDate (date) {
                    return date && date.valueOf() < Date.now() - 86400000
                }
            },
            options4: {
                disabledDate (date) {
                    const disabledDay = date.getDate()
                    return disabledDay === 15
                }
            }
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
