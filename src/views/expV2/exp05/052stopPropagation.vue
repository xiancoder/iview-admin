<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">JS阻止冒泡和阻止捕获和取消默认事件(默认行为)</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <div style="width:100px;height:30px" @click="tryclick(1)">哈哈哈1</div>
                <div style="width:100px;height:30px" onclick="alert(2)">哈哈哈2</div>
                <div style="width:100px;height:30px" @click="tryclick(3)">哈哈哈3<span style="width:100px;height:30px" @click="tryclick(4)">哈哈哈4</span></div>
                <p>当我们点击.content时，事件的执行顺序是document - body - 4 - 5。所以事件冒泡的走向是由父节点向子节点去触发同名事件</p>
                <div style="width:100px;height:30px" @click.capture="tryclick2(4)">哈哈哈4<span style="width:100px;height:30px" @click="tryclick(5)">哈哈哈5</span></div>
                <p>当我们点击5时，事件的执行顺序是5t - 4 - body - document。所以事件冒泡的走向是由子节点向父节点去触发同名事件</p>
                <div style="width:100px;height:30px" @click="tryclick(4)">哈哈哈4<span style="width:100px;height:30px" @click="tryclick2(5)">哈哈哈5</span></div>
                <script type="text/html" v-pre>
                    <div @click="tryclick(1)">哈哈哈1</div>
                    <div onclick="alert(2)">哈哈哈2</div>
                    <div @click="tryclick(3)">哈哈哈3<span @click="tryclick(4)">哈哈哈4</span></div>
                    <div @click="tryclick(3)">哈哈哈3<span @click="tryclick(4)">哈哈哈4</span></div>
                    <div @click.capture="tryclick2(4)">哈哈哈4<span @click="tryclick(5)">哈哈哈5</span></div>
                    <div @click="tryclick(4)">哈哈哈4<span @click="tryclick2(5)">哈哈哈5</span></div>
                </script>
                <p>而体现在原生js上则就是绑定监听时候的第三个参数</p>
                <script type="text/js">
                    document.body.addEventListener('click', function(e) {
                        console.log('body');
                    }, true);
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
import { eventStop } from '@/utils'

export default {
    data () {
        return {}
    },
    methods: {
        tryclick (i) {
            alert('哈哈哈' + i)
        },
        tryclick2 (i) {
            eventStop()
            alert('哈哈哈' + i)
        }
    },
    mounted () {
    }
}
</script>
