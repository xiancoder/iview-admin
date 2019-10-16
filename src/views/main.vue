<template>
    <Layout style="height: 100%" class="main">
        <Sider hide-trigger collapsible :width="200" :collapsed-width="64"
            v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
            <side-menu :collapsed="collapsed">
                <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
                <div class="logo-con">
                    <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
                    <img v-show="collapsed" :src="minLogo" key="min-logo" />
                </div>
            </side-menu>
        </Sider>
        <Layout>
            <div class="main-header">
                <Row type="flex" justify="start" align="middle" class="main-header-left">
                    <a @click="handleCollapsedChange" type="text" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']">
                        <Icon type="md-menu" size="26" />
                    </a>
                    <custom-bread-crumb show-icon :list="breadCrumbList">
                    </custom-bread-crumb>
                </Row>
                <Row type="flex" justify="end" align="middle" class="main-header-right">
                    <a class="main-header-right-linkIcon" :href="`https://${row}/`" target="_blank"
                        v-for="(row, key) in weblink" :name="key" :key="`link-${key}`">
                        <img :src="`./${row}.png`">
                    </a>
                    <Badge dot :count="newMessageNum">
                        <Icon type="md-notifications-outline" size="23" style="cursor:pointer" />
                    </Badge>
                    <qr-code></qr-code>
                    <epopen></epopen>
                    <lock-screen></lock-screen>
                    <full-screen></full-screen>
                    <error-store v-if="$config.errorLogStore"></error-store>
                    <user></user>
                </Row>
            </div>
            <Content class="main-content-con">
                <Layout class="main-layout-con">
                    <div class="tag-nav-wrapper">
                        <tags-nav></tags-nav>
                    </div>
                    <Content class="content-wrapper" id="mainScrollFlag">
                        <!-- 动态换场指令 transition vuerouter 提供 -->
                        <!-- 页面缓存功能 vue提供 keep-alive -->
                        <transition :name="transitionName">
                            <keep-alive :include="cacheList">
                                <router-view></router-view>
                            </keep-alive>
                        </transition>
                        <Spin size="large" fix v-if="spinShow"></Spin>
                        <ABackTop :height="100" :bottom="80" :right="50" container=".content-wrapper"></ABackTop>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
import SideMenu from '@C/side-menu' // 组件::左侧树菜单
import TagsNav from '@C/tags-nav'
import User from '@C/user'
import LockScreen from '@C/lockscreen'
import ABackTop from '@C/a-back-top'
import FullScreen from '@C/fullscreen' // 组件::全屏按钮
import ErrorStore from '@C/error-store'
import CustomBreadCrumb from '@C/custom-bread-crumb' // 组件::面包屑
import qrCode from '@C/qrcode' // 组件::二维码
import epopen from '@C/epopen' // 组件::EP编辑
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import '@S/main.less'
export default {
    name: 'Main',
    components: { SideMenu, TagsNav, FullScreen, ErrorStore, User, ABackTop, CustomBreadCrumb, qrCode, epopen, LockScreen },
    data () {
        return {
            collapsed: false, // 折叠标记
            minLogo, // 最小图标
            maxLogo, // 最大图标
            transitionName: '', // 动画方式
            weblink: [ 'www.zdao.com', 'www.qichacha.com', 'www.tianyancha.com', 'maimai.cn' ],
            isFullscreen: false
        }
    },
    computed: {
        newMessageNum () { return this.$store.state.system.newMessageNum || 0 }, // 新消息数量 0隐藏 null表红点 数字代表数量
        breadCrumbList () { return this.$store.state.system.breadCrumbList }, // 面包屑
        spinShow () { return this.$store.state.system.spinLoading || false }, // 新消息数量 0隐藏 null表红点 数字代表数量
        local () { return this.$store.state.app.local },
        cacheList () { return this.$store.state.system.cacheList } // 被缓存的页面
    },
    methods: {
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
        handleCollapsedChange (state) {
            this.collapsed = !this.collapsed
        }
    },
    watch: {
        watch: {
            // 监听路由 根据路由深度 决定页面的出现动画方式
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    },
    mounted () {
    }
}
</script>
