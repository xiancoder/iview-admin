<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">vue中 this.$set的用法</div>
            <div class="blogContent" v-highlight>
                <blockquote>我们发现Vue.set()和this.$set()这两个api的实现原理基本一模一样，区别在于Vue.set()是将set函数绑定在Vue构造函数上，this.$set()是将set函数绑定在Vue原型上。</blockquote>
                <p>当vue的data里边声明或者已经赋值过的对象或者数组（数组里边的值是对象）时，向对象中添加新的属性，如果更新此属性的值，是不会更新视图的。</p>
                <p>vm.$set实例方法，这也是全局 Vue.set方法的别名</p>
                <div id="app2">
                    <p v-for="item in items" :key="item.id">{{item.message}}</p>
                    <p>{{ xx }}</p>
                    <Button @click="handClick1()">点我是不会更新视图的</Button>
                    <Button @click="handClick2b()">得其他更新视图操作带它一下</Button>
                    <Button @click="handClick2()">但是点我可以</Button>
                </div>
                <script type="text/js">
                    var vm = new Vue({
                        data: {
                            items: ['a', 'b', 'c']
                        }
                    })
                    vm.items[1] = 'x' // 不是响应性的
                    vm.items.length = 2 // 不是响应性的
                </script>
                <script type="text/js">
                    mounted(){
                        this.items[0] = {message: '测试', id: '4'} // 此时对象的值更改了，但是视图没有更新
                        this.$set(this.items, 0, {message: '测试', id: '4'}) // $set可以触发更新视图
                        Vue.set(this.items, 0, {message: '测试', id: '4'}) // $set可以触发更新视图
                        console.log(this.items)
                    },
                </script>
                <p>受现代 JavaScript 的限制，Vue不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性遍历执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。</p>
                <p>由于 JavaScript 的限制，Vue 不能检测以下变动的数组： </p>
                <p>当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue </p>
                <p>解决：用$set方法 </p>
                <p>当你修改数组的长度时，例如：vm.items.length = newLength </p>
                <p>解决：vm.items.splice(newLength)</p>
                <p>对于对象也有相同的问题 例如，对于：</p>
                <script type="text/js">
                    var vm = new Vue({
                        data: {
                            userProfile: {
                                name: 'Anika'
                            }
                        }
                    })
                </script>
                <p>你可以添加一个新的 age 属性到嵌套的 userProfile 对象：</p>
                <script type="text/js">
                    Vue.set(vm.userProfile, 'age', 27)
                </script>
                <p>你还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名：</p>
                <script type="text/js">
                    vm.$set(vm.userProfile, 'age', 27)
                </script>
                <p>有时你可能需要为已有对象赋予多个新属性，比如使用 Object.assign() 或 _.extend()。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，不要像这样</p>
                <script type="text/js">
                    Object.assign(vm.userProfile, {
                        age: 27,
                        favoriteColor: 'Vue Green'
                    })
                </script>
                <p>你应该这样做：</p>
                <script type="text/js">
                    vm.userProfile = Object.assign({}, vm.userProfile, {
                        age: 27,
                        favoriteColor: 'Vue Green'
                    })
                </script>
                <p></p>
                <h3 class="text-danger">同理使用 $delete 方法</h3>
                <p></p>
                <p></p>
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
        return {
            items: [
                { message: 'one', id: '1' },
                { message: 'two', id: '2' },
                { message: 'three', id: '3' }
            ],
            xx: 1
        }
    },
    mounted () {
        this.items[0] = {message: '测试', id: '4'} // 此时对象的值更改了，但是视图没有更新
        this.$set(this.items, 0, {message: '测试', id: '4'}) // $set可以触发更新视图
        this.$set(this.items, 0, {message: '测试', id: '4'}) // $set可以触发更新视图
    },
    methods: {
        // 调用方法：Vue.set( target, key, value )
        // target：要更改的数据源(可以是对象或者数组)
        // key：要更改的具体数据
        // value ：重新赋的值
        handClick2 () {
            this.$set(this.items, 0, { message: '更改one的值111', id: '01' })
        },
        handClick2b () {
            // this.xx = this.xx + 1
            this.$forceUpdate() // 更好的方式
        },
        handClick1 () {
            this.items[0] = {message: '更改one的值222', id: '02'}
        }
    }
}
</script>
