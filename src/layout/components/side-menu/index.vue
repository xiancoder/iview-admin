<template>
    <div class="side-menu-wrapper">
        <!-- 插槽 需要放在菜单上面的内容，如Logo -->
        <slot></slot>
        <Menu ref="menu" v-show="!collapsed"
            :active-name="activeName" :open-names="openedNames"
            :accordion="accordion" :theme="theme" width="auto"
            @on-open-change="handleSelectBox" @on-select="handleSelect">
            <template v-for="item in menuList">
                <template v-if="item.children && item.children.length === 1">
                    <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item">
                    </side-menu-item>
                    <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
                        <Icon :type="item.children[0].icon||'ios-document'":size="iconSize" :color="textColor" />
                        <span>{{ item.children[0].title}}</span>
                    </menu-item>
                </template>
                <template v-else>
                    <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item">
                    </side-menu-item>
                    <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
                        <Icon :type="item.icon||'ios-document'":size="iconSize" :color="textColor" />
                        <span>{{ item.title }}</span>
                    </menu-item>
                </template>
            </template>
        </Menu>
        <div class="menu-collapsed" v-show="collapsed" :list="menuList">
            <template v-for="item in menuList">
                <collapsed-menu v-if="item.children && item.children.length > 1"
                    @on-click="handleSelect" hide-title
                    :root-icon-size="rootIconSize" :icon-size="iconSize" :theme="theme"
                    :parent-item="item" :key="`drop-menu-${item.name}`">
                </collapsed-menu>
                <Tooltip transfer v-else
                    :content="item.children && item.children[0] ? item.children[0].title : item.title"
                    placement="right" :key="`drop-menu-${item.name}`">
                    <a @click="handleSelect(getNameOrHref(item, true))" class="drop-menu-a" :style="{textAlign: 'center'}">
                        <Icon :type="item.icon||(item.children && item.children[0].icon)||'ios-document'":size="iconSize" :color="textColor" />
                    </a>
                </Tooltip>
            </template>
        </div>
    </div>
</template>
<script>
import SideMenuItem from './side-menu-item.vue'
import CollapsedMenu from './collapsed-menu.vue'
import { arrayUnion } from '@/utils'
import { goto } from '@/tools' // 自定义常用工具
import mixin from './mixin'
import { homePage } from '@/router/routers'

const computeOpenName = (name) => {
    if (name) return ''
    const arr = name.split('_')
    if (arr && arr.length <= 1) return name
    const result = []
    for (let i = 0, l = arr.length - 1; i < l; i++) {
        if (i === 0) {
            result.push(arr[i])
        } else {
            result.push(arr[i - 1] + '_' + arr[i])
        }
    }
    return result
}

export default {
    name: 'SideMenu',
    mixins: [ mixin ],
    components: { SideMenuItem, CollapsedMenu },
    data () {
        return {
            openedNames: [], // 左边树的展开状态数组
            rootIconSize: 20,
            accordion: true
        }
    },
    props: {
        collapsed: { type: Boolean }
    },
    computed: {
        menuList () { return this.$store.state.route.menuList }, // 左边树 数据源
        activeName () {
            // 如果路由名字有$ 表示这是个子类页面
            // 如果路由名字有@ 表示这是个兄弟页面
            const routeName = this.$route.name || ''
            return routeName.replace(/[\@\$].*/g, '')
        }, // 左边树 选中
        openNames () { return computeOpenName(this.$route.name) } // 左边树的展开状态
    },
    methods: {
        handleSelect (select) { // 直接跳转
            console.info(
                '%c 资料库 %c 二级菜单 直接跳转 ',
                'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                'background:green; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
                select
            )
            const name = select
            goto({ name })
        },
        handleSelectBox (selectArr) { // 一级页面跳第一个子页面
            const select = selectArr[0]
            if (!select) return false
            console.info(
                '%c 资料库 %c 一级页面 不再跳转 (觉得烦了) ',
                'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                'background:green; padding: 1px; border-radius: 0 3px 3px 0;color: #fff;',
                '-'
            )
            return false // 觉得烦了 先不跳
            const path = this.$store.state.route.routeList[select].path
            console.info(
                '%c 资料库 %c 一级页面 跳第一个子页面 ',
                'background:#35495E;padding:1px;border-radius:3px 0 0 3px;color:#fff;',
                'background:green; padding: 1px;border-radius: 0 3px 3px 0;color: #fff;',
                path
            )
            goto({ path })
        },
        getOpenedNamesByActiveName (name) {
            return this.$route.matched.map(item => item.name).filter(item => item !== name)
        },
        updateOpenName (name) {
            if (name === homePage) this.openedNames = []
            else this.openedNames = this.getOpenedNamesByActiveName(name)
        }
    },
    watch: {
        activeName (name) {
            if (this.accordion) this.openedNames = this.getOpenedNamesByActiveName(name)
            else this.openedNames = arrayUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
        },
        openNames (newNames) {
            this.openedNames = newNames
        },
        openedNames () {
            this.$nextTick(() => {
                this.$refs.menu.updateOpened()
            })
        }
    },
    mounted () {
        this.openedNames = arrayUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
    }
}
</script>
