<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">评审了一下公司项目代码 列举一下看不下去的写法</div>
            <div class="blogContent" v-highlight>
                <p>vue入门的门槛很低 即使你只会使用直拳冲拳季节闯荡江湖 但是但是但是</p>
                <p>查看一下一些同学的练武之路 你就会发现 直拳直拳直拳直拳直拳直拳直拳...</p>
                <p>虽然可以通关 但留下了冗长冗长冗长的代码壮举</p>
                <p class="textdanger">因此我建议 适当升级你的武功秘籍 省下大片的代码空间来写注释(本来就应该写)</p>
                <hr>
                <p>每个页面的开始都写一个引入样式 或者说 /main/xxx 一级路由闲的发慌 二级路由大事小事全干 </p>
                <p class="textdanger">从名字就能看出来 一级路由洒洒水的活 被众多二级路由小弟吭哧吭哧的干</p>
                <script type="text/html" v-pre>
                    <style lang='less'>
                        @import '../main.less';
                    </style>
                </script>
                <p>在页面上尽量不要写枚举判断 ifelse全都放在js中 </p>
                <p class="textinfo">不要在页面上走类似ifelseswitch的逻辑 最好是放在js代码中</p>
                <script type="text/html" v-pre>
                    <img src='../../img/1.png' v-show="projectType === '事业1部'"/>
                    <img src='../../img/2.png' v-show="projectType === '事业2部'"/>
                    <img src='../../img/3.png' v-show="projectType === '事业3部'"/>
                </script>
                <script type="text/html">
                    <img :src='imgPath'/>
                </script>
                <script type="text/js">
                    computed: {
                        imgPath () {
                            const a = ['', '../../img/1.png', '../../img/1.png', '../../img/1.png']
                            const b = ['事业1部', '事业2部', '事业3部']
                            return a[b.indexOf(this.projectType) + 1]
                        }
                    }
                </script>
                <p>每个页面都注册引用了页头组件 似乎即使是login也要使用这个组件 全局组件沦落到单页组件分别声明调用</p>
                <p class="textdanger">用户进入系统第一层能看到的页面都应整理注册为全局组件</p>
                <script type="text/js">
                    import { XHeader } from 'vux'
                    export default {
                        components: { // 组件声明
                            XHeader
                        }
                    }
                </script>
                <p>method 结构是vue提供的监听方法集合 跟平时普通的方法还是有点区别的</p>
                <p class="textdanger">如下的 arraySwitch 写在vue实例以外 做临时函数来调用 减少污染和误解</p>
                <script type="text/js">
                    init () { this.info.approverList = list.map(this.arraySwitch) },
                    arraySwitch (value) { let arr = []; arr.push(value); return arr; }
                },
                </script>
                <p>易读性 易读性 一眼就能看到我想要的内容叫易读性 这样简单的代码我翻都要翻很久 不爽</p>
                <script type="text/js">
                    {
                        title: '日期',
                        key: 'dateStr',
                        fixed: 'left',
                        width: 110,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'userName',
                        width: 80,
                        align: 'center'
                    },
                    {
                        title: '部门',
                        key: 'deptName',
                        width: 110,
                        align: 'center'
                    },
                    {
                        title: '工号',
                        key: 'workNum',
                        width: 114,
                        align: 'center'
                    },
                </script>
                <p>这样不好么</p>
                <script type="text/js">
                    { title: '日期', key: 'dateStr', fixed: 'left', width: 110, align: 'center' },
                    { title: '姓名', key: 'userName', width: 80, align: 'center' },
                    { title: '部门', key: 'deptName', width: 110, align: 'center' },
                    { title: '工号', key: 'workNum', width: 114, align: 'center' },
                </script>
                <p>请注意 不要再使用self=this 或者 me=this 并不是不能用 而是水平低</p>
                <script type="text/js">
                    let self = this;
                    setTimeout(function () { self.loading = false; }, 2000);
                </script>
                <p>这样不好么</p>
                <script type="text/js">
                    setTimeout(() => { this.loading = false; }, 2000);
                </script>
                <p>第一种写法渲染有三次判断 即三次停顿 而第二种好一些</p>
                <script type="text/html" v-pre>
                    <span v-if="item.status==1">已结束</span>
                    <span v-if="item.status==3">已约</span>
                    <span v-if="item.status==4">休息</span>
                    // 嗯嗯
                    <span>{{ ['','已结束','','已约','休息'][item.status] }}</span>
                </script>
                <p>同样的逻辑禁止走两遍 工作量多小都不行</p>
                <script type="text/js">
                    if (Cookies.get('userName')) {
                        this.userName = Cookies.get('userName')
                        this.storeName = true
                    }
                    // 低级问题 同样的逻辑走两遍
                    const x = Cookies.get('userName')
                    if (x) {
                        this.userName = x
                        this.storeName = true
                    }
                </script>
                <p>ajax返回内容data.data长长的没完没了</p>
                <script type="text/js">
                    this.$get('api/system/menulist', {
                    }).then((res) => {
                        let menuList = res.data.data.list.listMenu
                    })
                    //
                    this.$get('api/system/menulist', {
                    }).then((response) => { // 著名response是完整返回对象
                        const res = response.data // 业务逻辑
                        let menuList = res.data.list.listMenu
                    })
                </script>
                <p></p>
                <script type="text/html">
                </script>
                <p></p>
                <script type="text/html">
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
    },
    mounted () {
    }
}
</script>
