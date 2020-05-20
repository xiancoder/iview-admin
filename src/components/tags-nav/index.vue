<template>
    <div>
        <Tabs :value="currentRouteName" closable @on-click="goto" type="card" @on-tab-remove="handleClose">
            <TabPane label="首页" :name="homePage" :closable="false">
            </TabPane>

            <TabPane v-for="(row, index) in list" :key="index+'a'+new Date().getTime()" :label="row.title" :name="row.name">
            </TabPane>
            <!--
                我们常常会给tabpane使用index作为绑定key，删除的时候，如你删除第一项，那么key为0的项会被删除，
                但是由于数据双向绑定的原因，后面的项key值会依次改变，导致第二项的key也变为0，
                然后handleTabRemove又检测到有key为0的项，会继续删除，导致删除出错的问题。
                解决办法：给key值加上时间戳
            -->

            <div slot="extra">
                <Dropdown transfer @on-click="handleTagsOption">
                    <Button><Icon type="ios-arrow-down"/></Button>
                    <DropdownMenu slot="list">
                        <DropdownItem name="close-left"><Icon type="md-arrow-round-back"/> 关闭左边</DropdownItem>
                        <DropdownItem name="close-right"><Icon type="md-arrow-round-forward"/> 关闭右边</DropdownItem>
                        <DropdownItem name="close-all"><Icon type="md-close-circle"/> 关闭所有</DropdownItem>
                        <DropdownItem name="close-others"><Icon type="md-close"/> 关闭其他</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </Tabs>
    </div>
</template>

<script>
import { goto } from '@/tools' // 自定义常用工具
import { homePage } from '@/router/routers'

export default {
    name: 'TagsNav',
    mixins: [{methods: {goto}}],
    data () {
        return {
            homePage,
            name: 'workV2_work01_205tab',
            balance: '-'
        }
    },
    computed: { // 计算属性
        list () { return this.$store.state.route.tagNavList || [] }, // 历史记录tab
        currentRouteName () { return this.$route.name } // 当前路由
    },
    methods: {
        handleTagsOption (type) { // 关闭其他 关闭所有
            if (type === 'close-left') { // 关闭左边所有
                const ii = this.list.findIndex(item => item.name === this.currentRouteName)
                const res = this.list.filter((item, index) => index >= ii)
                return this.handleCloseTag(res, {})
            }
            if (type === 'close-right') { // 关闭右边所有
                const ii = this.list.findIndex(item => item.name === this.currentRouteName)
                const res = this.list.filter((item, index) => index <= ii)
                return this.handleCloseTag(res, {})
            }
            if (type === 'close-all') { // 关闭所有
                return this.handleCloseTag([], {name: this.currentRouteName})
            }
            if (type === 'close-others') { // 关闭除当前页和home页的其他页
                let res = this.list.filter(item => item.name === this.currentRouteName)
                return this.handleCloseTag(res, {})
            }
        },
        handleCloseTag (res, routeName) { // 关闭标签 即重置数据
            if (res.length === 0 || routeName === this.currentRouteName) {
                this.$router.push({name: homePage})
            }
            this.$store.dispatch('route/setTagNavList', res)
        },
        handleClose (routeName) { // 触发关闭单一标签 且如果关闭之前有动作就触发
            // 以前有个退出钩子在这里检测 现在取消了 2020年5月20日13:46:51 liuyp
            let res = this.list.filter(item => routeName !== item.name)
            this.handleCloseTag(res, routeName)
        }
    },
    mounted: function () {
    }
}
</script>
<style type="text/css" scoped>
    .contextmenu {
        position: absolute; margin: 0; padding: 5px 0; background: #fff; z-index: 1000;
        list-style-type: none; border-radius: 4px; box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .1);
    }
    .contextmenu li { margin: 0; padding: 5px 15px; cursor: pointer; }
    .contextmenu li:hover { background: #eee; }
</style>
