<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">节流&防抖整理</div>
            <div class="blogContent">
                <h4>防抖逻辑处理::杜绝<code>频繁</code>的请求同一事物</h4>
                <h4>节流逻辑处理::杜绝<code>重复</code>的请求同一事物</h4>
                <p>两者不容在于防抖是允许触发但拒绝提交 节流是杜绝第二次触发</p>
                <p>防抖例子::结巴聊天 表达不清意思 (解决方法 等他说完)</p>
                <p>-- 两秒(单位时间)内 请求第1次 请求第2次 请求第3次 请求第4次 请求第5次 (你当我是恶作剧或者手抖) </p>
                <p>-- 不防抖的话 就会发送5次请求 造成资源浪费</p>
                <p>-- 加防抖的话 就会在一直等待直到第五次之后再等待1秒(指定时间) 如果没有第6次点击 下发请求</p>
                <p>节流例子::杯子倒水 多次倒水水会溢出 (解决方法 倒完即等 喝完再倒)</p>
                <p>-- 两秒(单位时间)内 请求第1次 请求第2次 请求第3次 请求第4次 请求第5次 (你当我是恶作剧或者手抖) </p>
                <p>-- 不节流的话 假设请求消耗巨大 时间很长 四次空运转 这代价...</p>
                <p>-- 加节流的话 第一次请求就会下发 忽略单位时间内后面的4次</p>
                <hr />
                <p>其实都是某个行为持续地触发，不同之处只要判断是要优化到减少它的执行次数还是只执行一次就行。</p>
                <p>举个例子，像dom的拖拽，如果用消抖的话，就会出现卡顿的感觉，因为只在停止的时候执行了一次，这个时候就应该用节流，在一定时间内多次执行，会流畅很多。</p>
                <p>但是，如果是输入联想这种，我要输入“谁是世界上最帅的人？”，多次执行的话，可能当我输到最的时候，就去搜索，结果搜出来一堆“谁是世界上最笨”，“谁是世界上最胖”之类的不必要搜索，只需要在输入完成后进行搜索，消抖当时最合适啦。</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">utils的节流&防抖逻辑</div>
            <div class="blogContent" v-highlight>
                <Button @click="fun21">防抖|debounce|{{obj1}}</Button>
                <Button @click="fun22">节流|throttle|{{obj2}}</Button>
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
import { throttle, debounce } from '@/utils/function'
export default {
    data () {
        return {
            obj1: '啦啦|',
            obj2: '啦啦|'
        }
    },
    methods: {
        fun21: debounce(function () { this.obj1 += '啦啦|' }, 2e3),
        fun22: throttle(function () { this.obj2 += '啦啦|' }, 2e3)
    }
}
</script>
