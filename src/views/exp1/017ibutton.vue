<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview 中的 button</div>
            <div class="blogContent" v-highlight>
                <div>
                    <Button>Default</Button><Divider type="vertical" />
                    <Button type="primary">Primary</Button><Divider type="vertical" />
                    <Button type="dashed">Dashed</Button><Divider type="vertical" />
                    <Button type="text">Text</Button><Divider type="vertical" />
                    <Button type="info">Info</Button><Divider type="vertical" />
                    <Button type="success">Success</Button><Divider type="vertical" />
                    <Button type="warning">Warning</Button><Divider type="vertical" />
                    <Button type="error">Error</Button>
                </div>
                <script type="text/html">
                    <Button>Default</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="text">Text</Button>
                    <Button type="info">Info</Button>
                    <Button type="success">Success</Button>
                    <Button type="warning">Warning</Button>
                    <Button type="error">Error</Button>
                </script>
                <hr />
                <div style=" background: #333; ">
                    <Button type="default" ghost>Default</Button><Divider type="vertical" />
                    <Button type="primary" ghost>Primary</Button><Divider type="vertical" />
                    <Button type="dashed" ghost>Dashed</Button><Divider type="vertical" />
                    <Button type="text" ghost>Text</Button><Divider type="vertical" />
                    <Button type="info" ghost>Info</Button><Divider type="vertical" />
                    <Button type="success" ghost>Success</Button><Divider type="vertical" />
                    <Button type="warning" ghost>Warning</Button><Divider type="vertical" />
                    <Button type="error" ghost>Error</Button>
                </div>
                <script type="text/html">
                    <Button type="default" ghost>Default</Button>
                </script>
                <hr />
                <div>
                    <Button type="primary" shape="circle" icon="ios-search"></Button><Divider type="vertical" />
                    <Button type="primary" icon="ios-search">Search</Button><Divider type="vertical" />
                    <Button type="primary" shape="circle" icon="ios-search">Search</Button><Divider type="vertical" />
                    <Button type="primary" shape="circle">Circle</Button><Divider type="vertical" />
                    <Button shape="circle" icon="ios-search"></Button><Divider type="vertical" />
                    <Button icon="ios-search">Search</Button><Divider type="vertical" />
                    <Button shape="circle" icon="ios-search">Search</Button><Divider type="vertical" />
                    <Button shape="circle">Circle</Button>
                </div>
                <script type="text/html">
                    <Button type="primary" shape="circle" icon="ios-search"></Button>
                    <Button type="primary" icon="ios-search">Search</Button>
                    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
                    <Button type="primary" shape="circle">Circle</Button>
                    <Button shape="circle" icon="ios-search"></Button>
                    <Button icon="ios-search">Search</Button>
                    <Button shape="circle" icon="ios-search">Search</Button>
                    <Button shape="circle">Circle</Button>
                </script>
                <div>
                    <RadioGroup v-model="size" type="button">
                        <Radio label="large">Large</Radio>
                        <Radio label="default">Default</Radio>
                        <Radio label="small">small</Radio>
                    </RadioGroup>
                    <br />
                    <br />
                    <Button :size="size" type="primary">Primary</Button><Divider type="vertical" />
                    <Button :size="size" type="default">Default</Button><Divider type="vertical" />
                    <Button :size="size" type="dashed">Dashed</Button><Divider type="vertical" />
                    <Button :size="size" type="text">Text</Button>
                </div>
                <script type="text/html">
                    <RadioGroup v-model="buttonSize" type="button">
                        <Radio label="large">Large</Radio>
                        <Radio label="default">Default</Radio>
                        <Radio label="small">small</Radio>
                    </RadioGroup>
                    <Button :size="buttonSize" type="primary">Primary</Button>
                </script>
                <hr />
                <div>
                    <RadioGroup v-model="buttonSize" type="button">
                        <Radio label="1">正常</Radio>
                        <Radio label="2">禁用</Radio>
                        <Radio label="3">等待</Radio>
                    </RadioGroup>
                    <br />
                    <br />
                    <Button :disabled="buttonSize==2">Default</Button><Divider type="vertical" />
                    <Button :disabled="buttonSize==2" type="primary">Primary</Button><Divider type="vertical" />
                    <Button :disabled="buttonSize==2" type="dashed">Dashed</Button><Divider type="vertical" />
                    <Button :disabled="buttonSize==2" type="text">Text</Button><Divider type="vertical" />
                    <Button type="primary" :disabled="buttonSize==2" :loading="buttonSize==3" @click="toLoading">点我提交</Button><Divider type="vertical" />
                    <Button type="primary" :loading="buttonSize==3" icon="ios-power" @click="toLoading">
                        <span v-if="buttonSize==3">Loading...</span>
                        <span v-else>点我提交</span>
                    </Button>
                </div>
                <script type="text/html">
                    <Button :disabled="buttonSize==2" type="text">Text</Button>
                    <Button type="primary" :disabled="buttonSize==2" :loading="buttonSize==3" @click="toLoading">点我提交</Button>
                    <Button type="primary" :loading="buttonSize==3" icon="ios-power" @click="toLoading">
                        <span v-if="buttonSize==3">Loading...</span>
                        <span v-else>点我提交</span>
                    </Button>
                </script>
                <hr />
                <div>
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button type="primary">Confirm</Button>
                    </ButtonGroup><Divider type="vertical" />
                    <ButtonGroup>
                        <Button disabled>Yesterday</Button>
                        <Button disabled>Today</Button>
                        <Button disabled>Tomorrow</Button>
                    </ButtonGroup><Divider type="vertical" />
                    <ButtonGroup>
                        <Button type="primary">L</Button>
                        <Button>M</Button>
                        <Button>M</Button>
                        <Button type="dashed">R</Button>
                    </ButtonGroup><Divider type="vertical" />
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="ios-arrow-back"></Icon>
                            Backward
                        </Button>
                        <Button type="primary">
                            Forward
                            <Icon type="ios-arrow-forward"></Icon>
                        </Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup>
                        <Button type="primary" icon="ios-skip-backward"></Button>
                        <Button type="primary" icon="ios-skip-forward"></Button>
                    </ButtonGroup><Divider type="vertical" />
                    <ButtonGroup>
                        <Button icon="ios-color-wand-outline"></Button>
                        <Button icon="ios-sunny-outline"></Button>
                        <Button icon="ios-crop"></Button>
                        <Button icon="ios-color-filter-outline"></Button>
                    </ButtonGroup><Divider type="vertical" />
                    <ButtonGroup shape="circle">
                        <Button type="primary">
                            <Icon type="ios-arrow-back"></Icon>
                            Backward
                        </Button>
                        <Button type="primary">
                            Forward
                            <Icon type="ios-arrow-forward"></Icon>
                        </Button>
                    </ButtonGroup><Divider type="vertical" />
                    <ButtonGroup shape="circle">
                        <Button type="primary" icon="ios-skip-backward"></Button>
                        <Button type="primary" icon="ios-skip-forward"></Button>
                    </ButtonGroup><Divider type="vertical" />
                    <ButtonGroup shape="circle">
                        <Button icon="ios-color-wand-outline"></Button>
                        <Button icon="ios-sunny-outline"></Button>
                        <Button icon="ios-crop"></Button>
                        <Button icon="ios-color-filter-outline"></Button>
                    </ButtonGroup>
                </div>
                <hr />
                <script type="text/html">
                    <ButtonGroup>
                        <Button type="primary">L</Button>
                        <Button>M</Button>
                        <Button>M</Button>
                        <Button type="dashed">R</Button>
                    </ButtonGroup>
                    <ButtonGroup shape="circle">
                        <Button icon="ios-color-wand-outline"></Button>
                        <Button icon="ios-sunny-outline"></Button>
                        <Button icon="ios-crop"></Button>
                        <Button icon="ios-color-filter-outline"></Button>
                    </ButtonGroup>
                </script>
                <hr />
                <script type="text/html">
                    <Button to="/components/icon-en">Normal</Button>
                    <Button to="/components/icon-en" replace>No history</Button>
                    <Button to="//iviewui.com" target="_blank">New window</Button>
                </script>
                <hr />
                <Collapse simple>
                    <Panel name="1">
                        按钮的基本API
                        <div slot="content">
                            <div class="api"><table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<br /><code>success</code>、<code>warning</code>、<code>error</code>或者不设置</td> <td>String</td> <td>default</td></tr> <tr><td>ghost</td> <td>幽灵属性，使按钮背景透明</td> <td>Boolean</td> <td>false</td></tr> <tr><td>size</td> <td>按钮大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td> <td>String</td> <td>default</td></tr> <tr><td>shape</td> <td>按钮形状，可选值为<code>circle</code>或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>long</td> <td>开启后，按钮的长度为 100%</td> <td>Boolean</td> <td>false</td></tr> <tr><td>html-type</td> <td>设置<code>button</code>原生的<code>type</code>，可选值为<code>button</code>、<code>submit</code>、<code>reset</code></td> <td>String</td> <td>button</td></tr> <tr><td>disabled</td> <td>设置按钮为禁用状态</td> <td>Boolean</td> <td>false</td></tr> <tr><td>loading</td> <td>设置按钮为加载中状态</td> <td>Boolean</td> <td>false</td></tr> <tr><td>icon</td> <td>设置按钮的图标类型</td> <td>String</td> <td>-</td></tr> <tr><td>custom-icon</td> <td>设置按钮的自定义图标</td> <td>String</td> <td>-</td></tr> <tr><td>to</td> <td>跳转的链接，支持 vue-router 对象</td> <td>String | Object</td> <td>-</td></tr> <tr><td>replace</td> <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td> <td>Boolean</td> <td>false</td></tr> <tr><td>target</td> <td>相当于 a 链接的 target 属性</td> <td>String</td> <td>_self</td></tr></tbody></table><table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>size</td> <td>按钮组合大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td> <td>String</td> <td>default</td></tr> <tr><td>shape</td> <td>按钮组合形状，可选值为<code>circle</code>或者不设置</td> <td>String</td> <td>-</td></tr> <tr><td>vertical</td> <td>是否纵向排列按钮组</td> <td>Boolean</td> <td>false</td></tr></tbody></table></div>
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
            buttonSize: 1,
            size: 'default'
        }
    },
    props: {},
    computed: {},
    methods: {
        toLoading () {
            this.buttonSize = 3
        }
    }
}
</script>
