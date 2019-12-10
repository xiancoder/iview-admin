<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">Vue jsx全面指南</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-close" style="color:red"/> 不建议入手 如果项目没有初始化 最好混用 因为语法干扰</p>
                <hr />
                <p>通常开发vue我们使用的是模板语法，独有的SFC在我们开发组件的时候非常方便，将script，template，style三者在同一个文件里面实现，大大提升了组件的可以移植性。</p>
                <p>但是模板语法写多了也非常恶心，对于复杂动态渲染场景，模板都处理的很吃力，所以vue在2.0之后也增加了对jsx的支持，为了学习jsx，顺带可以理解下react</p>
                <p>官方文档中关于jsx的使用介绍还是太少了，一开始写起来真的很不顺手，经过一个项目的使用，我把遇到的绝大多数情况总结下，希望可以帮到大家</p>
                <p>官方例子 https://github.com/vuejs/babel-plugin-transform-vue-jsx</p>
                <script type="text/js" v-pre>
                    render (h) {
                        return (
                            <div
                                id="foo"
                                propsOnCustomEvent={this.customEventHandler}
                                domPropsInnerHTML="bar"
                                onClick={this.clickHandler}
                                nativeOnClick={this.nativeClickHandler}
                                class={{ foo: true, bar: false }}
                                style={{ color: 'red', fontSize: '14px' }}
                                key="key"
                                ref="ref"
                                refInFor
                                slot="slot">
                            </div>
                        )
                    }
                </script>
                <p>这里比较详细我就不赘述了，按照官方配置，一般场景是可以覆盖的，我下面将官方例子中未说明的情况情况罗列下。</p>
                <p></p>
                <script type="text/js" v-pre>
                    <el-input v-model="inputValue"/>
                    //
                    <el-input value={this.inputValue} on-input={val => this.inputValue = val}/>
                </script>
                <p></p>
                <script type="text/js" v-pre>
                    <el-tag v-for="(item, index) in content" :key="index" type="success" > {{item.name}} </el-tag>
                    //
                    {
                        this.content.map((item, index) => {
                            return (
                                <el-tag key={index} type="success" > {item.name} </el-tag>
                            )
                        })
                    }
                </script>
                <p></p>
                <script type="text/js" v-pre>
                    <el-input @keyup.native.enter="fetch()" class="width-20" prefix-icon="el-icon-search" placeholder="关键字搜索" />
                    //
                    <el-input class="width-20" nativeOn-keyup={arg => arg.keyCode === 13 && this.fetch()} prefix-icon="el-icon-search" placeholder="关键字搜索" />
                </script>
                <p></p>
                <script type="text/js" v-pre>
                    <el-button @click="openDialog('create')" type="primary" size="mini" >
                    //
                    <el-button on-click={this.openDialog.bind(this, 'create')} type="primary" size="mini" >
                </script>
                <p></p>
                <script type="text/js" v-pre>
                    <el-table-column>
                        <template scope-slot="props">
                            <el-button type="primary" size="mini" @click="openDialog('edit',props.row)" >编辑 </el-button>
                        </template>
                    </el-table-column>
                    //
                    <el-table-column key={index} label={item.name} width={item.width}
                        {...{
                            scopedSlots: {
                                default: props => {
                                return (
                                    <el-button type="primary" size="mini" on-click={this.openDialog.bind(this,'edit',props.row)} >编辑
                                )
                            }
                        }}}
                    />
                </script>
                <p></p>
                <script type="text/js" v-pre>
                    <slot :isAdvancedPanelShow="isAdvancedPanelShow"></slot>
                    //
                    {this.$scopedSlots.default({
                         isAdvancedPanelShow: this.isAdvancedPanelShow
                    })}
                </script>
                <p>官方文档在配上以上的总结，我已经像是在写react项目了，写起来还是蛮爽的。重点还是要对各种directives了解清楚，知道其实现原理，在转成jsx应该就没啥压力的。vue和react真是越来越像了。</p>
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
}
</script>
