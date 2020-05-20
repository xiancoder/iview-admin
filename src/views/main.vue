<template>
    <Layout :class="[
            'main',
            themeMiddle?'mianMiddle':'',
            themeLogoFlex?'logoconflex':''
        ]">
        <!-- Layout：布局容器，其下可嵌套 HeaderSiderContentFooter或 Layout 本身，可以放在任何父容器中。 -->
        <!-- Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。 -->
        <!-- Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。 -->
        <!-- Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。 -->
        <!-- Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。 -->
        <Layout>
            <Sider hide-trigger collapsible class="left-sider"
                :width="200" :collapsed-width="64" v-model="collapsed">
                <div class="logocon" :style="{'background': themeLogoBgColor}">
                    <img :src="logoPath"/>
                </div>
                <side-menu :collapsed="collapsed"/>
            </Sider>
            <Layout class="right-sider" :class="{'right-sider-collapsed':collapsed}">
                <Header class="main-header":style="{'background': themeFgColor}" :class="{'main-header-collapsed':collapsed}">
                    <Row type="flex" justify="start" class="main-header-left">
                        <a @click="$store.dispatch('system/setShrink', !collapsed)" type="text" class="sidertrigger" :class="{'collapsed':collapsed}">
                            <Icon type="md-menu" size="26" />
                        </a>
                        <custom-bread-crumb show-icon :list="breadCrumbList"/>
                    </Row>
                    <Row type="flex" justify="end" class="main-header-right">
                        <a class="main-header-right-linkIcon"
                            :href="row.link" target="_blank"
                            v-for="(row, key) in weblink" :name="key" :key="`link-${key}`">
                            <img :src="`/static/img.site/${row.img}`" :title="row.title">
                        </a>
                        <div>
                            <Button type="text" style="padding:0;vertical-align: middle;">
                                <Badge dot :count="newMessageNum">
                                    <Icon type="md-notifications" size="23"/>
                                </Badge>
                            </Button>
                        </div>
                        <div><qr-code/></div>
                        <div><epopen/></div>
                        <div><epopen-route/></div>
                        <div><lock-screen/></div>
                        <div><full-screen/></div>
                        <div><page-unit-test/></div>
                        <div><error-store v-if="$config.errorLogStore"/></div>
                        <div>
                            <Dropdown @on-click="handleMenuClick">
                                <Badge :dot="!!unreadCount">
                                    <Avatar style="color: #f56a00;background-color: #fde3cf;border: 1px solid #92caf6;" :src="userAvatar"
                                        @on-error="userAvatar=''"
                                        :icon="userName?'':'ios-person'">{{userName[0]}}</Avatar>
                                </Badge>
                                {{ userName }}
                                <Icon :size="18" type="md-arrow-dropdown"></Icon>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="accountInfo">
                                        账户信息  <Badge style="margin-left: 10px" text="建设中"></Badge>
                                    </DropdownItem>
                                    <DropdownItem name="message">
                                        消息中心 <Badge style="margin-left: 10px" :count="unreadCount"></Badge>
                                    </DropdownItem>
                                    <DropdownItem name="modifyPwd">
                                        修改密码  <Badge style="margin-left: 10px" text="建设中"></Badge>
                                    </DropdownItem>
                                    <DropdownItem name="clear">
                                        清理缓存  <Badge style="margin-left: 10px" text="建设中"></Badge>
                                    </DropdownItem>
                                    <DropdownItem name="themeDrawer">
                                        主题修改
                                    </DropdownItem>
                                    <DropdownItem name="logout">
                                        退出登录
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Modal v-model="model.modifyPwd" title="修改密码" :closable="false" :mask-closable="false" footer-hide>
                                <modify-pwd @on-submit="modifyPwdSubmit"/>
                            </Modal>
                        </div>
                    </Row>
                </Header>
                <Content class="main-content-con">
                    <Spin size="large" fix v-if="spinShow"></Spin>
                    <Row>
                        <div class="main-layout-con">
                            <div class="tag-nav-wrapper">
                                <tags-nav></tags-nav>
                            </div>
                            <Row :gutter="16">
                                <Col :xl="{ span: 24 }" :xxl="{ span: themeMiddle?24:20 }">
                                    <div class="content-wrapper">
                                        <!-- 页面缓存功能 vue提供 keep-alive -->
                                        <transition :name="'fade'" mode="out-in">
                                            <keep-alive :include="cacheList">
                                                <router-view></router-view>
                                            </keep-alive>
                                        </transition>
                                    </div>
                                </Col>
                                <Col :xl="{ span: 0 }" :xxl="{ span: 4 }" style=" padding: 47px 10px; " v-if="!themeMiddle">
                                    <Card :bordered="false">
                                        <p slot="title">No border title</p>
                                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                                    </Card>
                                </Col>
                            </Row>
                            <div class="main-xiangzhaosha">
                                <input class="xiangzhaosha-input" type="text" v-model="xiangzhaosha" placeholder="大声地说出我的名砸..你要找啥">
                                <div class="xiangzhaosha-content">
                                    <div>
                                        <span><b>快速目录 : </b> &nbsp;|&nbsp</span>
                                        <span v-for="item in routeList.filter(row=>{
                                            var v = xiangzhaosha.toLowerCase()
                                            return row.title.toLowerCase().includes(v) || row.path.toLowerCase().includes(v)
                                        })">
                                            <a :href="'#'+item.path" :title="item.path">{{item.title}}</a> &nbsp;|&nbsp
                                        </span>
                                    </div>
                                    <!-- template 里面放Button会导致页面滚动时候卡顿 -->
                                </div>
                                <div class="xiangzhaosha-content">
                                    <div>
                                        <span> <b>页面缓存 : </b> &nbsp;|&nbsp </span>
                                        <span v-for="item in cacheList">
                                            <b>{{item}}</b> &nbsp;|&nbsp
                                        </span>
                                    </div>
                                </div>
                                <div class="xiangzhaosha-content">
                                    <div>
                                        <span> <b>历史记录 : </b> &nbsp;|&nbsp </span>
                                        <span v-for="item in tagNavList">
                                            <b>{{item.name}}</b> &nbsp;|&nbsp
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Content>
            </Layout>
        </Layout>
        <ABackTop :height="100" :bottom="10" :right="42"></ABackTop>
        <img v-if="logoRandom<=8" :src="'/static/img.xian/logo.xian.png'" class="xianjscode">
        <img v-if="logoRandom>8" :src="'/static/img.xian/logo.byj.png'" class="xianjscode">
        <Footer class="main-footer"> &copy;东胜神州傲来国无限技术公司 2010 - 2020 如来佛祖备案 </Footer>
        <Drawer title="系统界面控制" :closable="false" v-model="theme.Drawer">
            <Card title="主题变动" icon="ios-options" :padding="0" shadow style="width: 100%;">
                <CellGroup>
                    <Cell title="页面主体局中">
                        <i-switch :value="themeMiddle" @on-change="$store.dispatch('system/setThemeMiddle',!themeMiddle)" slot="extra" />
                    </Cell>
                    <Cell title="页面Logo固定">
                        <i-switch v-model="themeLogoFlex" slot="extra" />
                    </Cell>
                    <Cell title="页面Logo背景色" extra="白色" :selected="themeLogoBgColor=='#fff'">
                    </Cell>
                    <Cell title="页面Logo背景色" extra="灰色" :selected="themeLogoBgColor=='#515a6e'">
                    </Cell>
                </CellGroup>
            </Card>
        </Drawer>
    </Layout>
</template>
<script>
import SideMenu from '@C/side-menu' // 组件::左侧树菜单
import TagsNav from '@C/tags-nav'
import LockScreen from '@C/lockscreen'
import ABackTop from '@C/a-back-top'
import FullScreen from '@C/fullscreen' // 组件::全屏按钮
import PageUnitTest from '@C/page-unit-test' // 组件::单元测试
import ErrorStore from '@C/error-store'
import CustomBreadCrumb from '@C/custom-bread-crumb' // 组件::面包屑
import qrCode from '@C/qrcode' // 组件::二维码
import epopen from '@C/epopen' // 组件::EP编辑
import epopenRoute from '@C/epopen/route' // 组件::EP编辑
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.gif'
import '@S/main.less'
import '@S/util.less'

import modifyPwd from '@V/workV2/work01/211goodModalFrom' // 修改密码框

export default {
    name: 'Main', // 注册为组件时候name可以用来递归自己
    components: {
        SideMenu, TagsNav, FullScreen, ErrorStore, ABackTop,
        CustomBreadCrumb, qrCode, epopen, epopenRoute, LockScreen, modifyPwd,
        PageUnitTest
    },
    data () {
        return {
            themeLogoFlex: false, // 主题::logo固定
            themeLogoBgColor: '#92caf6', // 主题::logo背景颜色
            themeBgColor: '#515a6e', // 主题::主体背景颜色
            themeFgColor: '#fff', // 主题::主体前景颜色

            logoRandom: Math.random() * 10,

            model: {
                modifyPwd: false // 修改密码的弹窗
            },
            theme: {
                Drawer: false
            },
            xiangzhaosha: '', // 想找啥
            transitionName: '', // 动画方式
            weblink: [ // 外链链接
                { img: 'momo.png', title: '脉脉', link: 'http://maimai.cn' },
                { img: 'qichacha.png', title: '企查查', link: 'http://www.qichacha.com' },
                { img: 'tianyancha.png', title: '天天眼查', link: 'http://www.tianyancha.com' },
                { img: 'zhaodao.png', title: '找到', link: 'http://www.zdao.com' },
                { img: 'vant.png', title: 'vue推荐移动端UI', link: 'https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/intro' },
                { img: 'iview3.png', title: '项目在用的iview3', link: 'http://v3.iviewui.com' },
                { img: 'vue.png', title: 'vue官方API', link: 'https://cn.vuejs.org' },
                { img: 'iview4.png', title: '资料库使用的iview4', link: 'https://www.iviewui.com' }
            ]
        }
    },
    computed: {
        logoPath () { return this.collapsed ? minLogo : maxLogo }, // 根据折叠状态切换图片
        newMessageNum () { return this.$store.state.message.newMessageNum || 0 }, // 新消息数量 0隐藏 null表红点 数字代表数量
        breadCrumbList () { return this.$store.state.route.breadCrumbList }, // 面包屑
        spinShow () { return this.$store.state.route.spinLoading || false }, // 路由切换等待效果
        menuList () { return this.$store.state.route.menuList || [] }, // 左边树 数据源
        tagNavList () { return this.$store.state.route.tagNavList || [] }, // 历史记录tab
        routeList () {
            const obj = this.$store.state.route.routeList
            const arr = []
            for (var k in obj) {arr.push(obj[k])}
            return arr
        }, // 路由 一维化数组
        collapsed () { return this.$store.state.system.shrink }, // 折叠状态
        themeMiddle () { return this.$store.state.system.themeMiddle }, // 主题::主体居中
        cacheList () { return this.$store.state.route.cacheList }, // 被缓存的页面
        userAvatar () { return this.$store.state.admin.userAvatorPath }, // 用户头像
        userName () { return this.$store.state.admin.userName }, // 用户名
        unreadCount () { return this.$store.state.message.newMessageNum } // 未读消息
    },
    methods: {
        handleMenuClick (name) {
            switch (name) {
                case 'accountInfo':
                    break
                case 'message':
                    this.$router.push({name: 'home_message'})
                    break
                case 'modifyPwd': this.model.modifyPwd = !this.model.modifyPwd
                    break
                case 'clear':
                    break
                case 'themeDrawer':
                    this.theme.Drawer = !this.theme.Drawer
                    break
                case 'logout':
                    this.$store.dispatch('admin/logout')
                    break
            }
        },
        turnToPage (route) {
            let { name, params, query } = {}
            if (typeof route === 'string') name = route
            else {
                name = route.name
                params = route.params
                query = route.query
            }
            this.$router.push({ name, params, query })
        },
        /* handleCollapsedChange () { // 触发状态可以写入html中
            this.$store.dispatch('system/setShrink', !this.collapsed)
        }, */
        modifyPwdSubmit () {
            this.model.modifyPwd = false
        }
    },
    watch: {
        /*
            // 监听路由 根据路由深度 决定页面的出现动画方式
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        */
    },
    mounted () {
    }
}
</script>
