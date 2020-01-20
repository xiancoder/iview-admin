<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">使用日期框直白显示导致其他功能第一次点击无法生效的问题解析</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> ------------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> 无效...无效...无效... </p>
                <p></p>
                <script type="text/html" v-pre>
                    <DatePicker class="big_date" :value="currentDate" :open="true" size="large" placement="bottom"
                        @on-change="dateGet" @on-clickoutside="xxxxxx">
                        <div>ABC</div>
                    </DatePicker>
                </script>
                <p>@on-clickoutside 这个事件附近的逻辑 就是罪魁祸首</p>
                <p>问题描述 平白使用日期框 用on-change 来实时触发一些操作</p>
                <p>功能挺好 但是有一个奇妙的bug</p>
                <p class="text-danger">初始化完成后任何第一次点击均无效 (整个页面范围内)</p>
                <p>百思不得其解</p>
                <p class="text-info">分析官网API 发现一个 "on-clickoutside 3.4.0 点击外部关闭下拉菜单时触发" <b>很可疑</b></p>
                <p class="text-danger">加上测试 @on-clickoutside="xxxxxx" 问题解决</p>
                <p class="text-info">尝试解读源码</p>
                <p>在对应文件 node_modules\view-design\src\components\date-picker\picker.vue 中</p>
                <p>根据事件 clickoutside 找到了类似浮层关闭的管理方法 </p>
                <script type="text/js">
                    handleClose (e) {
                        if (this.disableCloseUnderTransfer) {
                            this.disableCloseUnderTransfer = false;
                            return false;
                        }

                        if (e && e.type === 'mousedown' && this.visible) {
                            e.preventDefault();
                            e.stopPropagation();
                            return;
                        }

                        if (this.visible) {
                            const pickerPanel = this.$refs.pickerPanel && this.$refs.pickerPanel.$el;
                            if (e && pickerPanel && pickerPanel.contains(e.target)) return; // its a click inside own component, lets ignore it.

                            this.visible = false;
                            e && e.preventDefault();
                            e && e.stopPropagation();
                            this.$emit('on-clickoutside', e);
                            return;
                        }

                        this.isFocused = false;
                        this.disableClickOutSide = false;
                    },
                </script>
                <p>根据方法 handleClose 找到了类似管理开关的控制逻辑</p>
                <script type="text/js">
                    // handle "tab" key
                    if (keyCode === 9){
                        if (this.visible){
                            e.stopPropagation();
                            e.preventDefault();

                            if (this.isConfirm){
                                const selector = `.${pickerPrefixCls}-confirm > *`;
                                const tabbable = this.$refs.drop.$el.querySelectorAll(selector);
                                this.internalFocus = true;
                                const element = [...tabbable][e.shiftKey ? 'pop' : 'shift']();
                                element.focus();
                            } else {
                                this.handleClose();
                            }
                        } else {
                            this.focused = false;
                        }
                    }
                </script>
                <p>根据属性 isConfirm 找到了配置参数关联</p>
                <script type="text/js">
                    isConfirm(){
                        return this.confirm || this.type === 'datetime' || this.type === 'datetimerange' || this.multiple;
                    },
                </script>
                <p class="text-success">搞半天 是 confirm 控制参数的锅</p>
                <div style="width:500px;height:400px;">
                    <DatePicker class="big_date" :value="currentDate" size="large" placement="bottom"
                        :open="true" :confirm="true" :transfer="true"
                        @on-change="dateGet" @on-clickoutside="xxxxxx">
                        <div>ABC</div>
                    </DatePicker>
                </div>
                <Button @click="test">点我测试 {{tv}}</Button>
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
        return {
            currentDate: '2020-01-20',
            tv: 1
        }
    },
    methods: {
        dateGet (n) {
            console.log(n)
        },
        xxxxxx () {
            console.log('哈哈我就是罪魁祸首')
        },
        test () {
            this.tv += 1
        }
    },
    mounted () {
    }
}
</script>
