<style scoped>
    .rowcolbox div{ color: #fff; margin-top: 10px; text-align: center; background: rgba(0,153,229,.9); }
    .rowcolbox:nth-child(odd) div{ background: rgba(0,153,229,.7); }
    .ivu-card-bordered{margin-bottom:10px;}
    .ivu-menu-item-selected { border-right: none; color: #2d8cf0!important; background: #fff!important; }
</style>
<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview 布局</div>
            <div class="blogContent" v-highlight>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
            </div>
        </div>
        <div style="margin:0 auto;width:920px">
            <p> xs ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象  Number | Object  -</p>
            <p> sm ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象   Number | Object  -</p>
            <p> md ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象   Number | Object  -</p>
            <p> lg ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象   Number | Object  -</p>
            <p> xl ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象  Number | Object  -</p>
            <p> xxl ≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象   Number | Object  -</p>
            <Row :gutter="16">
                <Col :md="12" :lg="12" :xl="12" :xxl="12">
                    <Alert show-icon closable> Grid 栅格 可以代替fixed布局 </Alert>
                    <Card>
                        <p slot="title">简单布局 + 间隔</p>
                        <p>
                            <Row :gutter="16">
                                <Col span="8" class="rowcolbox"><div>col-8</div></Col>
                                <Col span="8" class="rowcolbox"><div>col-8</div></Col>
                                <Col span="8" class="rowcolbox"><div>col-8</div></Col>
                            </Row>
                        </p>
                        <script v-pre type="text/js">
                            <Row>
                                <Col span="12"></Col>
                                <Col span="12"></Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="8" class="rowcolbox"><div>col-8</div></Col>
                                <Col span="8" class="rowcolbox"><div>col-8</div></Col>
                                <Col span="8" class="rowcolbox"><div>col-8</div></Col>
                            </Row>
                        </script>
                    </Card>
                    <Alert show-icon closable> Grid 栅格 可以代替罗列元素 替换掉float/inlineB </Alert>
                    <Card>
                        <p slot="title">子元素向左右排列 + 间隔 + 上下居中 - 可惜没有上边距</p>
                        <p>
                            <Row type="flex" justify="start" :gutter="5" align="middle">
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4<br>我换行</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4<br>我换行<br>我换行</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                            </Row>
                            <Divider />
                            <Row type="flex" justify="end" :gutter="5" align="middle">
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4<br>我换行<br>我换行</div></Col>
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                            </Row>
                        </p>
                        <script v-pre type="text/js">
                            <Row type="flex" justify="start" :gutter="5" align="middle">
                                <Col span="4" class="rowcolbox"><div>col-4</div></Col>
                                ...
                            </Row>
                        </script>
                    </Card>
                    <Alert show-icon closable> Spin 想让谁等待就让谁等待</Alert>
                    <Card>
                        <p slot="title">简单布局 + 间隔</p>
                        <p>
                            <Spin size="small"></Spin>
                            <Spin></Spin>
                            <Spin size="large"></Spin>
                            <h3>登金陵凤凰台</h3>
                            <address>李白</address>
                            <article>
                                <p>凤凰台上凤凰游，凤去台空江自流。</p>
                                <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                                <p>三山半落青天外，二水中分白鹭洲。</p>
                                <p>总为浮云能蔽日，长安不见使人愁。</p>
                            </article>
                            <Spin size="large" fix v-if="spinShow"></Spin>
                            切换显示状态：<i-switch @on-change="spinShow = !spinShow"></i-switch>
                            <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
                            <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
                        </p>
                        <script v-pre type="text/js">
                            <Spin></Spin>
                        </script>
                    </Card>
                    <Alert show-icon closable> TabPane 标签面板 尽量写同一页的内容</Alert>
                    <Card>
                        <p slot="title">TabPane简单布局 + 结合 @on-tab-remove事件</p>
                        <p>
                            <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                                <TabPane label="标签1">标签1的内容</TabPane>
                                <TabPane label="标签2">标签2的内容</TabPane>
                                <TabPane label="标签3">标签3的内容</TabPane>
                                <TabPane label="标签4">标签4的内容</TabPane>
                                <TabPane label="标签5">标签5的内容</TabPane>
                                <TabPane label="标签6">标签6的内容</TabPane>
                            </Tabs>
                        </p>
                        <script v-pre type="text/js">
                            <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                                <TabPane label="标签1">标签1的内容</TabPane>
                                ...
                            </Tabs>
                        </script>
                        <p>
                            <Tabs @on-click="handleMenuSelected">
                                <TabPane label="内容管理">标签的内容</TabPane>
                                <TabPane label="用户管理" icon="ios-people">标签的内容</TabPane>
                                <TabPane label="标签" disabled>标签的内容</TabPane>
                                <TabPane :label="label" name="name1">标签的内容</TabPane>
                            </Tabs>
                        </p>
                        <script v-pre type="text/js">
                            <Tabs @on-click="handleMenuSelected">
                                <TabPane label="标签">标签的内容</TabPane>
                                <TabPane label="macOS" icon="logo-apple">标签的内容</TabPane>
                                <TabPane label="标签" disabled>标签的内容</TabPane>
                                <TabPane :label="label" name="name1">标签的内容</TabPane>
                            </Tabs>
                        </script>
                        <p>
                            <Tabs value="name1">
                                <TabPane label="标签一" name="name1">标签一的内容</TabPane>
                                <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                                <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                            </Tabs>
                        </p>
                        <script v-pre type="text/js">
                            <Tabs value="name1">
                                <TabPane label="标签一" name="name1">标签一的内容</TabPane>
                                <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                                <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                            </Tabs>
                        </script>
                    </Card>
                    <Alert show-icon closable> Menu 目录列表 写不同页的内容</Alert>
                    <Card>
                        <p slot="title">Menu横向布局 用这个来作为页面间兄弟节点的切换标题</p>
                        <p>
                            <Menu mode="horizontal" active-name="3-2" :theme="menuTheme1" @on-select="handleMenuSelected">
                                <MenuItem name="1"> 内容管理 </MenuItem>
                                <MenuItem name="2"> <Icon type="ios-people" /> 用户管理 </MenuItem>
                                <Submenu name="3">
                                    <template slot="title"> <Icon type="ios-stats" /> 统计分析 </template>
                                    <MenuGroup title="使用">
                                        <MenuItem name="3-1">新增和启动</MenuItem>
                                        <MenuItem name="3-2">活跃分析</MenuItem>
                                        <MenuItem name="3-3">时段分析</MenuItem>
                                    </MenuGroup>
                                    <MenuGroup title="留存">
                                        <MenuItem name="3-4">用户留存</MenuItem>
                                        <MenuItem name="3-5">流失用户</MenuItem>
                                    </MenuGroup>
                                </Submenu>
                                <MenuItem name="4"> <Icon type="ios-construct" /> 综合设置 </MenuItem>
                            </Menu>
                        </p>
                        <p>
                            请注意 默认有三种主题
                            <RadioGroup v-model="menuTheme1">
                                <Radio label="light"></Radio>
                                <Radio label="dark"></Radio>
                                <Radio label="primary"></Radio>
                            </RadioGroup>
                        </p>
                        <script v-pre type="text/js">
                            <Menu mode="horizontal" :theme="menuTheme1" @on-select="handleMenuSelected">
                                <MenuItem name="1"> <Icon type="ios-paper" /> 内容管理 </MenuItem>
                                ...
                            </Menu>
                        </script>
                    </Card>
                    <Alert show-icon closable> Input 输入框 用的最多的控件</Alert>
                    <Card>
                        <p slot="title">Input 输入框 + 前后Icon + 可清空</p>
                        <p>
                            <Input v-model="inputvalue1" placeholder="Enter something..." prefix="ios-contact" suffix="ios-search"
                                clearable style="width: 300px" />
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">Input 搜索框 + 后Icon + 可清空</p>
                        <p>
                            <Input search v-model="inputvalue1" placeholder="Enter something..."
                                clearable style="width: 300px" on-search="inputvalue1+='xxx'"/>
                            <Input search v-model="inputvalue1" enter-button placeholder="Enter something..."
                                clearable style="width: 300px" on-search="inputvalue1+='xxx'"/>
                            <Input search v-model="inputvalue1" enter-button="Search" placeholder="Enter something..."
                                clearable style="width: 300px" on-search="inputvalue1+='xxx'"/>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">Input 文本域 + 适应文本高度 + 可清空</p>
                        <p>
                            <Input v-model="inputvalue1" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                                placeholder="Enter something..." style="width: 300px" />
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">Input 复合型输入框 + 下拉框</p>
                        <p>
                            <Input v-model="inputvalue1" style="width: 300px">
                                <span slot="prepend">http://</span>
                                <span slot="append">.com</span>
                            </Input>
                            <br>
                            <Input v-model="inputvalue1" style="width: 300px">
                                <Select v-model="inputvalue2" slot="prepend" style="width: 80px">
                                    <Option value="http">http://</Option>
                                    <Option value="https">https://</Option>
                                </Select>
                                <Button slot="append" icon="ios-search"></Button>
                            </Input>
                        </p>
                    </Card>
                    <Alert show-icon closable> Select 下拉框 用的最多的控件</Alert>
                    <Card>
                        <p slot="title">Select 下拉框 + 可清空 + 动态数据 + icon + 可搜索</p>
                        <p>
                            <Select v-model="selectmodel" clearable prefix="ios-home" style="width:300px" filterable>
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">Select 下拉框 + 动态数据 + 多选</p>
                        <p>
                            <Select v-model="selectmodel2" multiple :max-tag-count="3" :max-tag-placeholder="num=>'更多+'+num" style="width:300px">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">Select 下拉框 + 可清空 + 动态数据 + 自定义格式</p>
                        <p>
                            <Select v-model="selectmodel" clearable style="width:300px">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">
                                    <span>{{ item.label }}</span>
                                    <span style="float:right;color:#ccc">{{ item.label }}</span>
                                </Option>
                            </Select>
                        </p>
                    </Card>
                    <Alert show-icon closable> Avatar 头像</Alert>
                    <Card>
                        <p slot="title">Avatar 头像 文字版和图片版和符号版</p>
                        <p>
                            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                            <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
                            <Avatar style="background-color: #87d068" icon="ios-person" />
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">Avatar 头像 自动调整文字大小</p>
                        <p>
                            <Avatar style="color: #f56a00;background-color: #fde3cf">流</Avatar>
                            <Avatar style="color: #f56a00;background-color: #fde3cf">流川</Avatar>
                            <Avatar style="color: #f56a00;background-color: #fde3cf">流川枫</Avatar>
                            <Avatar style="color: #f56a00;background-color: #fde3cf">樱木花道</Avatar>
                        </p>
                    </Card>
                    <Alert show-icon closable> Badge 徽章</Alert>
                    <Card>
                        <p slot="title">Badge 徽章 可用点可用数字或汉字</p>
                        <p>
                            <Badge :count="5" dot> <Icon type="ios-notifications-outline" size="26"></Icon> </Badge>
                            <Badge :count="5" type="primary"> <Icon type="ios-notifications-outline" size="26"></Icon> </Badge>
                            <Badge :count="5" type="success"> <Icon type="ios-notifications-outline" size="26"></Icon> </Badge>
                            <Badge :count="5" type="normal"> <Icon type="ios-notifications-outline" size="26"></Icon> </Badge>
                            <Badge :count="5" type="info"> <Icon type="ios-notifications-outline" size="26"></Icon> </Badge>
                            <Badge :count="5" type="error"> <Icon type="ios-notifications-outline" size="26"></Icon> </Badge>
                            <Badge :count="5" type="warning"> <Icon type="ios-notifications-outline" size="26"></Icon> </Badge>
                            <Badge text="hot"> <Icon type="ios-notifications-outline" size="26"></Icon> </Badge>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">Badge 徽章 ul li</p>
                        <p>
                            <Badge status="success" text="Success" />
                            <Badge status="error" text="Error" />
                            <Badge status="default" text="Default" />
                            <Badge status="processing" text="Processing" />
                            <Badge status="warning" text="Warning" />
                        </p>
                    </Card>
                    <Alert show-icon closable> i-switch 开关</Alert>
                    <Card>
                        <p slot="title">Switch 开关</p>
                        <p>
                            <i-switch :value="true"/>
                            <i-switch :value="true"> <span slot="open">开</span> <span slot="close">关</span> </i-switch>
                            <i-switch :value="true"> <Icon type="md-checkmark" slot="open"></Icon> <Icon type="md-close" slot="close"></Icon> </i-switch>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">i-switch 开关 等待中</p>
                        <p>
                            <i-switch loading :value="true" />
                        </p>
                    </Card>
                    <Alert show-icon closable> Breadcrumb 面包屑</Alert>
                    <Card>
                        <p slot="title">Breadcrumb 面包屑 自带跳转</p>
                        <p>
                            <Breadcrumb>
                                <BreadcrumbItem to="/">
                                    <Icon type="ios-home-outline"></Icon> Home
                                </BreadcrumbItem>
                                <BreadcrumbItem to="/components/breadcrumb">
                                    <Icon type="logo-buffer"></Icon> Components
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Icon type="ios-cafe"></Icon> Breadcrumb
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </p>
                    </Card>
                    <Alert show-icon closable> Page 分页 表格必有</Alert>
                    <Card>
                        <p slot="title">Page 分页布局 + 电梯 + 总数 + 每页数量</p>
                        <p>
                            <Page :total="100" show-sizer show-elevator show-total prev-text="上一页" next-text="下一页"/>
                        </p>
                        <script type="text/js">
                            <Page :total="100" show-sizer show-elevator show-total
                                prev-text="上一页" next-text="下一页"
                                on-change="没写" on-page-size-change="没写"/>
                        </script>
                    </Card>
                </Col>
                <Col :md="12" :lg="12" :xl="12" :xxl="12">
                    <Alert show-icon closable> icon 可以的话说服 产品/UI/管事的人 尽量多用框架提供的icon </Alert>
                    <Card>
                        <p slot="title">可能用到的icon</p>
                        <p>
                            <Icon type="logo-angular" />Angular
                            <Icon type="logo-android" />Android
                            <Icon type="logo-apple" /> Ios
                            <Icon type="logo-html5" /> H5
                            <Icon type="logo-javascript" /> JS
                            <Icon type="md-arrow-dropdown" /> 下拉箭头
                            <Icon type="md-arrow-dropup" /> 上拉箭头
                            <Icon type="ios-at-outline" /> @我
                            <Icon type="md-bluetooth" /> 蓝牙
                            <Icon type="md-build" /> <Icon type="md-construct" /> <Icon type="md-hammer" /> 修理
                            <Icon type="ios-bug" /> debug
                            <Icon type="ios-call" /> 联系电话
                            <Icon type="ios-card" /> 账号
                            <Icon type="md-cart" /> 购物
                            <Icon type="ios-chatbubbles" /> 微信
                            <Icon type="md-checkbox-outline" /> 确认
                            <Icon type="md-contract" /> 收起
                            <Icon type="md-download" /> 下载
                            <Icon type="md-eye-off" /> 不可见
                            <Icon type="md-eye" /> 可见
                            <Icon type="md-git-network" /> 分支
                            <Icon type="md-heart" /> 收藏/重要
                            <Icon type="md-list" /> 条目
                            <Icon type="md-mail" /> 邮件
                            <Icon type="md-menu" /> 目录
                            <Icon type="md-megaphone" /> 广播
                            <Icon type="md-notifications-outline" /> <Icon type="md-volume-up" /> 消息
                            <Icon type="md-options" /> 配置
                            <Icon type="ios-people" /> 人员
                            <Icon type="md-person-add" /> 增加人员
                            <Icon type="md-pin" /> 定位
                            <Icon type="md-podium" /> <Icon type="md-stats" /> 图表
                            <Icon type="md-pricetags" /> 标签
                            <Icon type="md-pulse" /> 走势图
                            <Icon type="md-refresh" /> 刷新
                            <Icon type="logo-rss" /> 订阅
                            <Icon type="md-share" /> 分享
                            <Icon type="md-speedometer" /> 实时数据
                            <Icon type="md-thumbs-up" /> 点赞
                            <Icon type="ios-trash" /> 删除
                            <Icon type="md-unlock" /> 解锁
                            <Icon type="logo-yen" /> 款项
                        </p>
                        <script v-pre type="text/js">
                            <Icon type="logo-angular" />
                        </script>
                    </Card>
                    <Alert show-icon closable> Button 样式简单点</Alert>
                    <Card>
                        <p slot="title">Button 普通的 圆形的 loading的 禁用的</p>
                        <p style="line-height:36px;">
                            <Button>添加</Button> <Button type="primary">添加</Button> <Button type="dashed">添加</Button> <Button type="text">添加</Button>
                            <Button type="info">添加</Button> <Button type="success">添加</Button> <Button type="warning">添加</Button> <Button type="error">添加</Button>
                            <Button shape="circle" icon="ios-search"></Button><Button icon="ios-search">搜索</Button>
                            <Button disabled>添加</Button> <Button type="primary" disabled>添加</Button> <Button type="dashed" disabled>添加</Button>
                            <Button type="primary" loading>添加中...</Button>
                            <Button type="primary" :loading="loading" @click="loading=!loading">{{ !loading?'添加':'添加中...' }}</Button>
                        </p>
                        <script v-pre type="text/js">
                            <Button type="primary" :loading="loading" @click="loading=!loading">{{ !loading?'添加':'添加中...' }}</Button>
                        </script>
                    </Card>
                    <Card>
                        <p slot="title">横向和属性的按钮组</p>
                        <p>
                            <ButtonGroup>
                                <Button disabled>Yesterday</Button>
                                <Button disabled>Today</Button>
                                <Button disabled>Tomorrow</Button>
                            </ButtonGroup>
                            <ButtonGroup vertical>
                                <Button icon="logo-facebook"></Button>
                                <Button icon="logo-twitter"></Button>
                                <Button icon="logo-googleplus"></Button>
                                <Button icon="logo-tumblr"></Button>
                            </ButtonGroup>
                        </p>
                    </Card>
                    <Alert show-icon closable> Button 尽量指定触发方法而不是直接写上跳转路径</Alert>
                    <Card>
                        <p slot="title">Button可以写跳转 但没必要</p>
                        <p> 不建议使用 不利于自动化代码 建议'统一放置跳转方法'</p>
                        <script v-pre type="text/js">
                            通过设置 to 可以实现点击按钮直接跳转，支持传入 vue-router 对象。
                            <Button to="/components/icon-en">Normal</Button>
                            设置 replace 则不会保存历史记录。
                            <Button to="/components/icon-en" replace>No history</Button>
                            设置 target，会跟 a 标签一样的行为。
                            <Button to="//iviewui.com" target="_blank">New window</Button>
                        </script>
                    </Card>
                    <Alert show-icon closable> Dropdown 下拉菜单 可以提供可触发的下拉选择</Alert>
                    <Card>
                        <p slot="title">Dropdown 下拉菜单</p>
                        <p>
                            <Dropdown>
                                <a href="javascript:void(0)"> 下拉菜单 <Icon type="ios-arrow-down"></Icon> </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>驴打滚</DropdownItem>
                                    <DropdownItem disabled>豆汁儿</DropdownItem>
                                    <DropdownItem>冰糖葫芦</DropdownItem>
                                    <DropdownItem divided>北京烤鸭</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Divider type="vertical" />
                            <Dropdown trigger="click">
                                <a href="javascript:void(0)"> click 触发 <Icon type="ios-arrow-down"></Icon> </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>驴打滚</DropdownItem>
                                    <DropdownItem>炸酱面</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Divider type="vertical" />
                            <Dropdown trigger="contextMenu">
                                <a href="javascript:void(0)"> 右键触发 <Icon type="ios-arrow-down"></Icon> </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>返回</DropdownItem>
                                    <DropdownItem style="color: #ed4014">删除</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </p>
                        <script v-pre type="text/js">
                            <Dropdown trigger="contextMenu">
                                <a href="javascript:void(0)"> 右键触发 <Icon type="ios-arrow-down"></Icon> </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>返回</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </script>
                    </Card>
                    <Alert show-icon closable> 计时器 可以用来指导操作条目的时间</Alert>
                    <Card>
                        <p slot="title">简单布局 + 间隔</p>
                        <p>
                            <p>刚刚撞车了 <Divider type="vertical" /> 发生在 <Time :time="time1" /></p>
                            <Divider />
                            <p>刚刚撞车了 <Divider type="vertical" /> 发生在 <Time :time="time2" /></p>
                            <Divider orientation="left">Left Text</Divider>
                            <Divider>With Text</Divider>
                            <Divider orientation="right">Right Text</Divider>
                            <p>刚刚撞车了 <Divider type="vertical" /> 发生在 <Time :time="time3" :interval="10" /> 设置自动更新间隔，默认为 60 秒。</p>
                            <Divider dashed />
                        </p>
                        <script v-pre type="text/js">
                            <Time :time="time1" />
                            <Divider />
                            <Divider orientation="left">Left Text</Divider>
                            <Divider>With Text</Divider>
                            <Divider orientation="right">Right Text</Divider>
                            <Divider dashed />
                            <Divider type="vertical" />
                        </script>
                    </Card>
                    <Alert show-icon closable> 标签 各种花色的框框</Alert>
                    <Card>
                        <p slot="title"> 标签 项目中常常用到的</p>
                        <p>
                            <Tag>标签一</Tag>
                            <Tag>标签二</Tag>
                            <Tag closable>标签三</Tag>
                            <Tag type="border">标签三</Tag>
                            <Tag type="border" closable>标签四</Tag>
                            <Tag type="dot">标签一</Tag>
                            <Tag type="dot" closable>标签二</Tag>
                            <Tag color="default">default</Tag>
                            <Tag color="primary">primary</Tag>
                            <Tag color="success">success</Tag>
                            <Tag color="error">error</Tag>
                            <Tag color="warning">warning</Tag>
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="red">red</Tag>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="orange">orange</Tag>
                            <Tag color="gold">gold</Tag>
                            <Tag color="yellow">yellow</Tag>
                            <Tag color="lime">lime</Tag>
                            <Tag color="green">green</Tag>
                            <Tag color="cyan">cyan</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="geekblue">geekblue</Tag>
                            <Tag color="purple">purple</Tag>
                            <Tag color="#FFA2D3">Custom Color</Tag>
                            <Tag type="border" closable color="primary">标签一</Tag>
                            <Tag type="border" closable color="success">标签二</Tag>
                            <Tag type="border" closable color="error">标签三</Tag>
                            <Tag type="border" closable color="warning">标签四</Tag>
                            <Tag type="dot" closable color="primary">标签一</Tag>
                            <Tag type="dot" closable color="success">标签二</Tag>
                            <Tag type="dot" closable color="error">标签三</Tag>
                            <Tag type="dot" closable color="warning">标签四</Tag>
                        </p>
                        <script v-pre type="text/js">
                            <Tag type="border" closable color="primary">标签一</Tag>
                        </script>
                    </Card>
                    <Alert show-icon closable> Checkbox 复选框 用的最多的控件</Alert>
                    <Card>
                        <p slot="title"> Checkbox 复选框 领导全选的实现</p>
                        <p>
                            <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                                <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
                            </div>
                            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                <Checkbox v-for="item in shuiguoList" :label="item.label" :key="item.label">{{item.label}}</Checkbox>
                            </CheckboxGroup>
                        </p>
                        <script v-pre type="text/js">
                            <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                                <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
                            </div>
                            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                <Checkbox v-for="item in shuiguoList" :label="item.label" :key="item.label">{{item.label}}</Checkbox>
                            </CheckboxGroup>
                        </script>
                    </Card>
                    <Alert show-icon closable> DatePicker 日期选择框 用的最多的控件</Alert>
                    <Card>
                        <p slot="title">DatePicker 日期选择框</p>
                        <p>
                            <DatePicker type="date" placeholder="Select date" style="width: 300px"></DatePicker>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">DatePicker 日期选择框 + 快捷方式</p>
                        <p>
                            <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 300px"></DatePicker>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">DatePicker 日期选择框 + 日期格式(应该用不到)</p>
                        <p>
                            <DatePicker format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 300px"></DatePicker>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">DatePicker 日期选择框 + 选时间</p>
                        <p>
                            <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></DatePicker>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">DatePicker 日期选择框 + 选年/选月</p>
                        <p>
                            <DatePicker type="year" placeholder="Select year" style="width: 300px"></DatePicker>
                            <DatePicker type="month" placeholder="Select month" style="width: 300px"></DatePicker>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">DatePicker 日期选择框 + 不可选日期</p>
                        <p>
                            <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 300px"></DatePicker>
                            <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 300px"></DatePicker>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">DatePicker 日期范围框 + 快捷方式 + 两边不联动</p>
                        <p>
                            <DatePicker :value="startEndTime" @on-change="selectTime" @on-clear="clearTime"
                            type="daterange" split-panels :options="options2" placeholder="Select date" style="width: 300px"></DatePicker>
                        </p>
                    </Card>
                    <Alert show-icon closable> InputNumber 数字输入框 应用挺广泛的 我研究了好几个版本都不完美</Alert>
                    <Card>
                        <p slot="title">InputNumber 数字输入框 + 只能输入数字 + 1-100 + 整数</p>
                        <p>
                            <InputNumber :max="100" :min="1" :value="12" style="width: 300px"
                                :precision="0"></InputNumber>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">InputNumber 数字输入框 + 只能输入数字 + 可以输入小数2位(精度不好控制 不建议使用)</p>
                        <p>
                            <InputNumber :max="100" :min="1" :value="12" style="width: 300px"
                                :precision="2"></InputNumber>
                        </p>
                    </Card>
                    <Card>
                        <p slot="title">InputNumber 数字输入框 + 只能输入数字 + 手机号</p>
                        <p>
                            <InputNumber style="width: 300px" :value="13831111444" :precision="0"></InputNumber>
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            loading: true,
            label: '娃哈哈',
            menuTheme1: 'light',
            spinShow: false,
            checkedTag: false,
            time1: (new Date()).getTime() - 60 * 3 * 1000,
            time2: (new Date()).getTime() - 86400 * 3 * 1000,
            time3: new Date(),
            inputvalue1: '',
            inputvalue2: '',
            cityList: [ { value: 'New York', label: 'New York' }, { value: 'London', label: 'London' }, { value: 'Sydney', label: 'Sydney' }, { value: 'Ottawa', label: 'Ottawa' }, { value: 'Paris', label: 'Paris' }, { value: 'Canberra', label: 'Canberra' } ],
            selectmodel: '',
            selectmodel2: '',
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉'],
            shuiguoList: [{ value: '1', label: '香蕉' }, { value: '2', label: '苹果' }, { value: '3', label: '西瓜' }],
            options1: {
                shortcuts: [
                    { text: '今天', value () { return new Date(); }, onClick: (picker) => { this.$Message.info('Click today'); } },
                    { text: '昨天', value () { const date = new Date(); date.setTime(date.getTime() - 3600 * 1000 * 24); return date; }, onClick: (picker) => { this.$Message.info('Click yesterday'); } },
                    { text: '一周前', value () { const date = new Date(); date.setTime(date.getTime() - 3600 * 1000 * 24 * 7); return date; }, onClick: (picker) => { this.$Message.info('Click a week ago'); } }
                ]
            },
            options2: {
                shortcuts: [
                    { text: '一周至今', value () { const end = new Date(); const start = new Date(); start.setTime(start.getTime() - 3600 * 1000 * 24 * 7); return [start, end]; } },
                    { text: '一月至今', value () { const end = new Date(); const start = new Date(); start.setTime(start.getTime() - 3600 * 1000 * 24 * 30); return [start, end]; } },
                    { text: '三月至今', value () { const end = new Date(); const start = new Date(); start.setTime(start.getTime() - 3600 * 1000 * 24 * 90); return [start, end]; } }
                ]
            },
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
            },
            startEndTime: []
        }
    },
    methods: {
        handleSpinShow () {
            this.$Spin.show()
            setTimeout(() => { this.$Spin.hide() }, 3000)
        },
        handleSpinCustom () {
            this.$Spin.show({
                render: (h) => {
                    return h('div', [
                        h('Icon', { 'class': 'demo-spin-icon-load', props: { type: 'ios-loading', size: 18 } }),
                        h('div', 'Loading')
                    ])
                }
            })
            setTimeout(() => { this.$Spin.hide() }, 3000)
        },
        handleTabRemove (name) {
            this.$Message.info('关闭标签：' + name)
        },
        handleMenuSelected (name) {
            this.$Message.info('选中页面：' + name)
            // this.$router.push({ path: name=""})
        },
        handleCheckAll () {
            if (this.indeterminate) {
                this.checkAll = false
            } else {
                this.checkAll = !this.checkAll
            }
            this.indeterminate = false
            if (this.checkAll) {
                this.checkAllGroup = this.shuiguoList
            } else {
                this.checkAllGroup = []
            }
        },
        checkAllGroupChange (data) {
            if (data.length === this.shuiguoList.length) {
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
        clearTime () {
            this.startEndTime = []
        },
        selectTime (event) {
            this.startEndTime = event
        }
    }
}
</script>
