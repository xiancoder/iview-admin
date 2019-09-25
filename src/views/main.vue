<template>
    <Layout style="height: 100%" class="main">
        <Sider hide-trigger collapsible :width="256" :collapsed-width="64"
            v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
            <side-menu accordion :collapsed="collapsed" @on-select="turnToPage"
                 :menu-list="menuList" ref="sideMenu" :active-name="$route.name">
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
                    <Content class="content-wrapper">
                        <keep-alive :include="cacheList">
                            <router-view/>
                        </keep-alive>
                        <ABackTop :height="100" :bottom="80" :right="50" container=".content-wrapper"></ABackTop>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
import SideMenu from '@C/side-menu'
import TagsNav from '@C/tags-nav'
import User from '@C/user'
import ABackTop from '@C/a-back-top'
import FullScreen from '@C/fullscreen'
import ErrorStore from '@C/error-store'
import CustomBreadCrumb from '@C/custom-bread-crumb'
import { mapMutations, mapActions } from 'vuex'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import '@S/main.less'
export default {
    name: 'Main',
    components: { SideMenu, TagsNav, FullScreen, ErrorStore, User, ABackTop, CustomBreadCrumb },
    data () {
        return {
            collapsed: false, // 折叠标记
            minLogo, // 最小图标
            maxLogo, // 最大图标
            weblink: [
                'www.zdao.com',
                'www.qichacha.com',
                'www.tianyancha.com',
                'maimai.cn'
            ],
            isFullscreen: false
        }
    },
    computed: {
        menuList () { return this.$store.state.system.menuList }, // 左边树 数据源
        newMessageNum () { return this.$store.state.system.newMessageNum || 0 }, // 新消息数量 0隐藏 null表红点 数字代表数量
        breadCrumbList () { return this.$store.state.system.breadCrumbList }, // 面包屑

        cacheList () {
            // const list = [ 'ParentView', ...this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : [] ]
            // return list
            return []
        },
        local () { return this.$store.state.app.local }
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
        /* '$route' (newRoute) {
            const { name, query, params, meta } = newRoute
            this.addTag({
                route: { name, query, params, meta },
                type: 'push'
            })
            this.setBreadCrumb(newRoute)
            this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
            this.$refs.sideMenu.updateOpenName(newRoute.name)
        } */
    },
    mounted () {
        /**
         * @description 初始化设置面包屑导航和标签导航
        this.setTagNavList()
        this.setHomeRoute(routers)
        const { name, params, query, meta } = this.$route
        this.addTag({
            route: { name, params, query, meta }
        })
        this.setBreadCrumb(this.$route)
        // 设置初始语言
        this.setLocal(this.$i18n.locale)
        // 如果当前打开页面不在标签栏中，跳到homeName页
        if (!this.tagNavList.find(item => item.name === this.$route.name)) {
            this.$router.push({
                name: this.$config.homeName
            })
        }
        // 获取未读消息条数
        this.getUnreadMessageCount()
         */
    }
}
</script>
