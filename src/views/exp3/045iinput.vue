<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview input 应用场景总结</div>
            <div class="blogContent">
                <Collapse simple>
                    <Panel name="1">
                        基础用法
                        <div slot="content" v-highlight>
                            <div>
                                <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
                            </div>
                           <script type="text/html">
                                <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
                           </script>
                        </div>
                    </Panel>
                    <Panel name="2">
                        尺寸
                        <div slot="content">
                            <div>
                                <Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px" />
                                <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
                                <Input size="large" v-model="value" placeholder="Enter something..." style="width: 200px" />
                            </div>
                        </div>
                    </Panel>
                    <Panel name="3">
                        带着Icon的输入框
                        <div slot="content">
                            <div>
                                点击icon可触发on-click事件 icon 在前
                                <Input prefix="ios-clock-outline" v-model="value" placeholder="Enter something..." style="width: 200px" />
                                点击icon可触发on-click事件 icon 在后
                                <Input suffix="ios-clock-outline" v-model="value" placeholder="Enter something..." style="width: 200px" />
                            </div>
                        </div>
                    </Panel>
                    <Panel name="4">
                        可清空/可搜索/可禁止
                        <div slot="content">
                            <div>
                                可清空属性
                                <Input clearable v-model="value" placeholder="Enter something..." style="width: 200px" />
                            </div>
                            <div>
                                搜索型输入框 search
                                <Input search placeholder="Enter something..." style="width: 200px" />
                                普通输入框最后渲染的是 行内元素DIV 但是携带先后装饰的没有此类效果
                                <Input search enter-button placeholder="Enter something..." style="width: 200px" />
                                <Input search enter-button="Search" placeholder="Enter something..." style="width: 200px" />
                            </div>
                            <div>
                                输入框禁止输入 disabled
                                <Input v-model="value5" disabledplaceholder="Enter something..." style="width: 200px" />
                            </div>
                        </div>
                    </Panel>
                    <Panel name="5">
                        文本域
                        <div slot="content">
                            <div>
                                <Input v-model="value5" type="textarea" placeholder="Enter something..." style="width: 200px" />
                            </div>
                            <div>
                                <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." style="width: 200px" />
                            </div>
                            <div>
                                <p>适应文本高度的文本域 autosize</p>
                                <Input v-model="value5" :autosize="true" placeholder="Enter something..." style="width: 200px" />
                            </div>
                        </div>
                    </Panel>
                    <Panel name="6">
                        复合型输入框slot
                        <div slot="content">
                            <div>
                                <Input v-model="value6" style="width: 200px">
                                    <span slot="prepend">http://</span>
                                    <span slot="append">.com</span>
                                </Input>
                            </div>
                        </div>
                    </Panel>
                    <Panel name="7">
                        配合Poptip 使用
                        <div slot="content">
                            <div>
                                <Poptip trigger="focus">
                                    <Input v-model="value15" prefix="logo-usd" placeholder="Enter number" style="width: 120px" />
                                    <div slot="content">{{ formatNumber }}</div>
                                </Poptip>
                            </div>
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
            value: '',
            value5: '',
            value6: '',
            value15: ''
        }
    },
    props: {},
    computed: {
        formatNumber () {
            if (this.value15 === '') return 'Enter number'
            function parseNumber (str) {
                const re = /(?=(123)(d{3})+$)/g
                return str.replace(re, ',')
            }
            return parseNumber(this.value15)
        }
    },
    methods: {
        epopen () {
            alert('未知位置')
        }
    }
}
</script>
