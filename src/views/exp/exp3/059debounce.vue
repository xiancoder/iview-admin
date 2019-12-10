<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">节流&防抖整理</div>
            <div class="blogContent">
                <h4>防抖逻辑处理::杜绝<code>频繁</code>的请求同一事物</h4>
                <h4>节流逻辑处理::杜绝<code>重复</code>的请求同一事物</h4>
                <p>两者不容在于防抖是允许触发但拒绝提交 节流是杜绝第二次触发</p>
                <p>防抖例子::防止结巴</p>
                <p>-- 两秒(单位时间)内 请求第1次 请求第2次 请求第3次 请求第4次 请求第5次 (你当我是恶作剧或者手抖) </p>
                <p>-- 不防抖的话 就会发送5次请求 造成资源浪费</p>
                <p>-- 加防抖的话 就会在第五次之后在等待1秒(指定时间) 如果没有第6次点击 再去下发请求</p>
                <p>节流例子::卡住水流</p>
                <p>-- 两秒(单位时间)内 请求第1次 请求第2次 请求第3次 请求第4次 请求第5次 (你当我是恶作剧或者手抖) </p>
                <p>-- 不节流的话 假设请求消耗巨大 时间很长 四次空运转 这代价...</p>
                <p>-- 加节流的话 第一次请求就会下发 忽略单位时间内后面的4次</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">高手提供的节流&防抖逻辑</div>
            <div class="blogContent" v-highlight>
                <Button>{{ obj20 }}</Button>
                <Button @click="fun21">防抖</Button>
                <Button @click="fun22">节流</Button>
                <p>防抖 多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行</p>
                <p>场景 输入某个字符 要求实时匹配数据库 但是用户不定时会继续输入</p>
                <script type="text/js">
                    // 防抖 多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行
                    // 场景 输入某个字符 要求实时匹配数据库 但是用户不定时会继续输入
                    const debounce = function (method, delay) {
                        let timer = null
                        return function () {
                            let self = this
                            let args = arguments
                            timer && clearTimeout(timer)
                            timer = setTimeout(function () { method.apply(self, args) }, delay);
                        }
                    }
                </script>
                <p>节流 触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后 过了规定的时间间隔，才能进行下一次的函数调用</p>
                <p></p>
                <script type="text/js">
                    // 节流 触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后
                    // 过了规定的时间间隔，才能进行下一次的函数调用
                    const throttle = function (method, mustRunDelay) {
                        let args = arguments
                        let start
                        return function loop () {
                            let self = this
                            let now = Date.now()
                            if (!start) { start = now } else if (now - start < mustRunDelay) { return }
                            method.apply(self, args)
                            start = now;
                        }
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">lodash的节流&防抖逻辑</div>
            <div class="blogContent" v-highlight>
                <Button>{{ obj30 }}</Button>
                <Button @click="fun31">防抖</Button>
                <Button @click="fun32">节流</Button>
                <p>防抖 多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行</p>
                <script type="text/js">
                    _.debounce(()=>{ this.obj30 += "啦啦|" }, 2e3)
                </script>
                <p>节流 触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后 过了规定的时间间隔，才能进行下一次的函数调用</p>
                <script type="text/js">
                    _.throttle(()=>{ this.obj30 += "啦啦|" }, 2e3, {'trailing':false})
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
import _ from 'lodash'

// 防抖 多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行
// 场景 输入某个字符 要求实时匹配数据库 但是用户不定时会继续输入
const debounce = function (method, delay) {
    let timer = null
    return function () {
        let self = this
        let args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(function () { method.apply(self, args) }, delay);
    }
}
// 节流 触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后
// 过了规定的时间间隔，才能进行下一次的函数调用
const throttle = function (method, mustRunDelay) {
    let args = arguments
    let start
    return function loop () {
        let self = this
        let now = Date.now()
        if (!start) { start = now } else if (now - start < mustRunDelay) { return }
        method.apply(self, args)
        start = now;
    }
}

export default {
    data () {
        return {
            obj20: '啦啦|',
            obj30: '啦啦|'
        }
    },
    methods: {
        fun21: debounce(function () { this.obj20 += '啦啦|' }, 2e3),
        fun22: throttle(function () { this.obj20 += '啦啦|' }, 2e3),
        fun31: _.debounce(function () { this.obj30 += '啦啦|' }, 2e3),
        fun32: _.throttle(function () { this.obj30 += '啦啦|' }, 2e3, {'trailing': false})
    }
}
</script>
