<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">尝试触发未知DIV上绑定的事件</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> -------------------------------------</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <hr />
                <select id="aabb" @change="xxx">
                    <option value="1">111</option>
                    <option value="2">222</option>
                    <option value="3">333</option>
                    <option value="4">444</option>
                </select>
                <hr />
                <Button type="info" @click="yyy">Info</Button>
                <hr />
                <p><a href="https://www.hxkj.vip/demo/calendar/"></a></p>
                <p><a href="https://www.cnblogs.com/jeromeblog/p/11404325.html"></a></p>
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
        xxx () { console.log(123) },
        yyy () {
            var t = document.getElementById('aabb')
            if( document.all ) {
                t.fireEvent( "change" )
            } else {
                var evt = document.createEvent('HTMLEvents')
                evt.initEvent('change',true,true)
                t.dispatchEvent( evt )
            }
        }
    },
    mounted () {
    }
}
</script>
