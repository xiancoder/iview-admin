<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue必须掌握之组件通信（7种方法）</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>方法一：$emit / props</p>
                <p>父组件通过props的方式向子组件传递,子组件通过$emit触发父组件中v-on绑定的自定义事件</p>
                <script type="text/html" v-pre>
                    <!--父组件-->
                    <template>
                        <div>
                            <Child :message="message" @customEvent="customEvent"/>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    export default {
                        components:{ Child },
                        data(){
                            return {
                                message:'来自父组件的问候'
                            }
                        },
                        methods:{
                            customEvent(value){
                                //执行子组件触发的事件
                                console.log(value)
                            }
                        }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!--子组件-->
                    <template>
                        <div>
                            <p>{{message}}</p>
                            <button @click="handleClick">点击向父组件传值</button>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    export default {
                        props:['message'],//得到父组件传递过来的数据
                        methods:{
                            handleClick(){
                                //触发父组件中的事件
                                this.$emit('customEvent','来自子组件的问候');
                            }
                        }
                    }
                </script>
                <p>方法二、$parent / $children 与 ref</p>
                <p>ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例</p>
                <p>$parent / $children：访问父 / 所有子实例</p>
                <script type="text/html" v-pre>
                    <!--父组件-->
                    <template>
                        <div>
                            <Child ref='children'/>
                            <button @click="handleClick">访问子组件</button>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    import Child from './child'
                    export default {
                        components:{ Child },
                        data(){
                            return {
                                message:'我是父组件的数据'
                            }
                        },
                        methods:{
                            handleClick(){
                                console.log(this.$refs.children.message)
                                console.log(this.$children[0].message)
                                //需要注意的是使用$children返回的是一个数组
                            }
                        }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!--子组件-->
                    <template>
                        <div>
                            <p>{{message}}</p>
                            <button @click="handleClick">访问父组件</button>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    export default {
                        data(){
                            return {
                                message:'我是子组件的数据'
                            }
                        },
                        methods:{
                            handleClick(){
                                console.log(this.$parent.message)
                            }
                        }
                    }
                </script>
                <p>方法三、中央事件总线bus</p>
                <p>新建一个Vue事件bus对象，然后通过 bus.$emit 触发事件， bus.$on 监听触发的事件。</p>
                <p>在需要用到的两个不同组件分别引入即可</p>
                <p>需要注意的是接受数据的组件要清除事件总线eventBus</p>
                <script type="text/js">
                    // eventBus.js
                    import Vue from 'vue';
                    export default new Vue();
                </script>
                <script type="text/html" v-pre>
                    <!--A组件-->
                    <template>
                        <div>
                            <p>A组件</p>
                            <button @click="handleClick">向B组件传值</button>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    import eventBus from 'eventBus.js的路径'
                    export default {
                        data(){
                            return {
                                data:'我是A组件的数据'
                            }
                        },
                        methods:{
                            handleClick(){
                                eventBus.$emit('change',this.data);
                            }
                        }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!--B组件-->
                    <template>
                        <div>
                            <p>B组件</p>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    import eventBus from 'eventBus.js的路径';
                    export default {
                        //触发事件一般用mounted 或 created 钩子来监听
                        mounted(){
                            //触发和监听的事件名称要一致
                            eventBus.$on('change',(value)=>{
                                console.log(value)
                            })
                        },
                        destroyed(){
                            eventBus.$off('change');
                        }
                    }
                </script>
                <p>方法四、依赖注入 provide和inject</p>
                <p>适用场景：高阶插件/组件库</p>
                <p>类型：</p>
                <p>provide：Object | () => Object</p>
                <p>inject：Array [string] | { [key: string]: string | Symbol | Object }</p>
                <p>父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。</p>
                <p>不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。</p>
                <script type="text/html" v-pre>
                    <!--父组件-->
                    <template>
                        <div>
                            <h1>父组件</h1>
                            <Son/>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    import Son from './son'
                    export default {
                        components:{ Son },
                        data(){
                            return {
                                message:'我是父组件的数据'
                            }
                        },
                        provide(){
                            return {
                                message:this.message
                            }
                        }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!--子组件-->
                    <template>
                        <div>
                            <h1>子组件</h1>
                            <GrandSon />
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    import GrandSon from './grandSon';
                    export default {
                        components:{
                            GrandSon
                        }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!--孙子组件-->
                    <template>
                        <div>
                            <h1>孙子组件</h1>
                            <p>{{message}}</p>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    export default {
                        inject:['message']
                    }
                </script>
                <p>方法五、$attrs 和 $listeners 适用场景：多层、递归组件</p>
                <p>$attrs 是包含了所以父组件在子组件上设置的属性（除了prop传递的属性、class 和 style ）</p>
                <p>$listeners 是组件的内置属性，它的值是父组件(不含.native修饰器的) v-on事件监听器</p>
                <p>如果子组件已经绑定$listener中同名的监听器，则两个监听器函数会以冒泡的方式先后执行</p>
                <script type="text/html" v-pre>
                    <!--父组件-->
                    <template>
                        <div>
                            <h1>父组件</h1>
                            <Son :message1="message1" :message2="message2" name='attr' v-on="{onChange1,onChange2}"/>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    import Son from './son'
                    export default {
                        components:{ Son },
                        data(){
                            return {
                                message1:'我是父组件的数据1',
                                message2:'我是父组件的数据2'
                            }
                        },
                        methods:{
                            onChange1(val){
                                console.log("父组件：" + val)
                            },
                            onChange2(val){
                                console.log(val)
                            }
                        }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!--子组件-->
                    <template>
                        <div>
                            <h1>子组件</h1>
                            <!--关键点-->
                            <GrandSon v-bind="$attrs" v-on="$listeners" @onChange1="onChange1"/>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    import GrandSon from './grandSon';
                    export default {
                        inheritAttrs:false,
                        /*
                            1、当设置inheritAttrs为true（默认）时，子组件的顶层标签元素中会渲染出父组件传递过来
                            (前提：子组件的props中未注册父组件传递过来的属性)的属性。
                            2、当设置inheritAttrs为false时，子组件的顶层标签元素中不会渲染出父组件传递过来
                            (前提：子组件的props中未注册父组件传递过来的属性)的属性。
                            3、不管inheritAttrs为true或者false，子组件中都能通过$attrs属性获取到父组件中传递过来的属性。
                        */
                        components:{ GrandSon },
                        methods:{
                            //与父组件监听的事件同名了
                            onChange1(val){
                                console.log('子组件：'+val)
                            }
                        }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!--孙子组件-->
                    <template>
                        <div>
                            <h1>孙子组件</h1>
                            <p>{{message2}}</p>
                            <button @click="handleClick">点击触发父组件的方法</button>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    export default {
                        props:['message2'], //message2被声明
                        created(){
                            console.log(this.$attrs) //{message1: "我是父组件的数据1", name: "attr"}
                            console.log(this.$listeners) //{onChange1: ƒ, onChange2: ƒ}
                        },
                        methods:{
                            handleClick(){
                                this.$emit('onChange1','来自孙子的问候')
                            }
                        }
                    }
                </script>
                <p>方法六、v-model</p>
                <p>父组件通过v-model传递值给子组件时，会自动传递一个value的prop属性，</p>
                <p>在子组件中通过this.$emit('input',val)自动修改v-model绑定的值</p>
                <p>prop属性和触发事件可以通过model修改</p>
                <script type="text/html" v-pre>
                    <!--父组件-->
                    <template>
                        <div>
                            <h1>父组件</h1>
                            <p>{{inputValue}}</p>
                            <Son v-model="inputValue"/>
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    import Son from './son'
                    export default {
                        components:{ Son },
                        data(){
                            return {
                                inputValue:'父组件的默认消息'
                            }
                        }
                    }
                </script>
                <script type="text/html" v-pre>
                    <!--子组件-->
                    <template>
                        <div>
                            <h1>子组件</h1>
                            <p>父组件传过来的值：{{value}}</p>
                            <input @input="handleChange" />
                        </div>
                    </template>
                </script>
                <script type="text/js">
                    export default {
                        model:{
                            prop:'value', //默认（value）可以修改任意值
                            event:'input' //默认（input）事件名也可以修改
                        },
                        props:{
                            value:String
                        },
                        methods:{
                            handleChange(e){
                                this.$emit('input',e.target.value)
                            }
                        }
                    }
                </script>
                <p>方法七、VueX ...</p>
                <p></p>
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
    },
    mounted () {
    }
}
</script>
