<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">同一项目不同浏览器tab之间的ls/tab事件通知</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>我们在开发应用时候，常常会遇到多个多TabTab状态不同步的问题。</p>
                <p class="text-info">2019年11月25日15:16:19 举例你打开两个淘宝 在第一个选中了一双鞋 然后直接切换到第二个网页去看购物车</p>
                <p class="text-info">2019年11月25日15:16:19 如果此刻你看不到那双鞋 那么你就会怀疑人生 然后刷新网页 ...</p>
                <p class="text-danger">2019年11月25日15:16:19 这是淘宝 顶多收获一点失望 如果是我们网站 嘿嘿...</p>
                <p>项目在a标签页打开了 觉得资料有用 再在b标签页打开 在b进行了全局操作 例如加入购物车/修改主题等</p>
                <p>此时 a,b标签都需要更新</p>
                <p>StorageEvent是什么呢？</p>
                <ul>
                    <li>是一种Event，可以通过标准的Event监听器操作。</li>
                    <li>当storage变化时候，事件会被派发到所有同域下的其他页面。</li>
                    <li>触发变化的当前页面，没有事件派发。</li>
                </ul>
                <p>更新 2020年1月3日17:06:37 事件的跨tab传递跟ls有直接关系</p>
                <script type="text/js">
                    // 通过操作 向其他tab发送事件推送
                    var newStorageEvent = document.createEvent('StorageEvent');
                    newStorageEvent.initStorageEvent('hibeauty', false, false, null, null, null, null, null);
                    window.dispatchEvent(newStorageEvent)
                    // -------------------
                    // 使用时候的调用 建议放全局store
                    window.addEventListener('hibeauty', ()=> {
                        console.error('三体入侵了')
                    });
                </script>
                <Button type="primary" icon="ios-power" @click="earth2three">
                    <span>点我提交</span>
                </Button>
                <hr />
                <p>以下代码取自oa-wap 测试有效 但是没有啥意义</p>
                <script type="text/js">
                    // 通过操作ls 向其他tab发送事件推送
                    // 注意本推送不包括向自己tab发射
                    Vue.prototype.resetSetItem = function (key, newVal) {
                        if (key === 'watchStorage') {
                            var newStorageEvent = document.createEvent('StorageEvent');
                            const storage = {
                                setItem: function (k, val) {
                                    sessionStorage.setItem(k, val);
                                    newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
                                    window.dispatchEvent(newStorageEvent)
                                }
                            }
                            return storage.setItem(key, newVal);
                        }
                    }
                    // -------------------
                    // 使用时候的调用 建议放全局store
                    window.addEventListener('setItem', ()=> {
                        this.loadingShow = sessionStorage.getItem('watchStorage');
                    });
                </script>
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
        return {}
    },
    methods: {
        earth2three () {
            /* var newStorageEvent = document.createEvent('StorageEvent');
            newStorageEvent.initStorageEvent('hibeauty', false, false, 'testStorageEvent', 11, 22, null, null);
            window.dispatchEvent(newStorageEvent) */
            localStorage.setItem('testStorageEvent', new Date().getTime());
        }
    },
    mounted () {
        window.addEventListener('storage', (e) => {
            console.error('三体入侵了', e.key, e.oldValue, e.newValue)
        });
    }
}
</script>
