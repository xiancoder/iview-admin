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
                        <common-icon :type="item.children[0].icon||'ios-document'"/>
                        <span>{{ item.children[0].title}}</span>
                    </menu-item>
                </template>
                <template v-else>
                    <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item">
                    </side-menu-item>
                    <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
                        <common-icon :type="item.icon||'ios-document'"/>
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
                        <common-icon :size="rootIconSize" :color="textColor"
                            :type="item.icon||(item.children && item.children[0].icon)||'ios-document' "
                        />
                    </a>
                </Tooltip>
            </template>
        </div>
    </div>
</template>
<script>
import SideMenuItem from './side-menu-item.vue'
import CollapsedMenu from './collapsed-menu.vue'
import { getUnion } from '@/utils/array'
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
            iconSize: 16,
            rootIconSize: 20,
            accordion: true
        }
    },
    props: {
        collapsed: { type: Boolean }
    },
    computed: {
        menuList () { return this.$store.state.system.menuList }, // 左边树 数据源
        theme () { return this.$store.state.system.theme }, // 主题
        activeName () { return (this.$route.name || '').replace(/\@.+/g, '') }, // 左边树 选中
        openNames () { return computeOpenName(this.$route.name) }, // 左边树的展开状态
        textColor () { return this.theme === 'dark' ? '#fff' : '#495060' } // 主题颜色
    },
    methods: {
        handleSelect (select) { // 直接跳转
            console.info('%c仙 二级菜单 直接跳转', 'color:#05ff0f;background:#000;padding:0 5px;', select)
            const name = select
            goto({ name })
        },
        handleSelectBox (selectArr) { // 一级页面跳第一个子页面
            const select = selectArr[0]
            if (!select) return false
            console.info('%c仙 一级页面 不跳觉得烦了', 'color:#05ff0f;background:#000;padding:0 5px;')
            return false // 觉得烦了 先不跳
            const path = this.$store.state.system.routeList[select].path
            console.info('%c仙 一级页面 跳第一个子页面', 'color:#05ff0f;background:#000;padding:0 5px;', path)
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
            else this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
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
        this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
    }
}
</script>
<style lang="less">
    @import './side-menu.less';
</style>
