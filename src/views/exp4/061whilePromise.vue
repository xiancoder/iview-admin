<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">尝试一下Promise的挂起状态</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 在一个请求的promise执行过程中 因一点卡住 使用定时器原地等待 </p>
                <p><Icon type="md-checkmark" style="color:red"/> 以上理论上没问题行得通 但是有了更好的方式 </p>
                <p><Icon type="md-checkmark" style="color:green"/> 在一个请求的promise执行过程中 因一点卡住 等待1秒后重新执行promise来替换当前promise </p>
                <h3>使用场景</h3>
                <p>当系统超时 用户超时时候 用户发出的请求都应该401未授权</p>
                <p>当收到第一个401时候 停止ajax工具的可用性并重新请求token (小程序/非后台)</p>
                <p>待新token来临之前所有请求均挂起 待新token来临后回复执行</p>
                <script type="text/js">
                    function aaa(){
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(111)
                            },10e3)
                        });
                    }
                    console.log('测试a执行')
                    aaa().then(function(v){
                        console.log('测试a', '成功返回', v)
                    }, function(v){
                        console.log('测试a', '失败返回', v)
                    })
                    ////////////////////////////////////////
                    async function bbb(){
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(222)
                            },4e3)
                        });
                    }
                    console.log('测试b执行')
                    var b = await bbb();
                    console.log('测试b', b)
                    ////////////////////////////////////////
                    var pending = false;
                    function ccc(){
                        return new Promise((resolve, reject) => {
                            pending = true;
                            setTimeout(() => {
                                resolve(333)
                                pending = false;
                            },4e3)
                        });
                    }
                    console.log('测试c执行')
                    ccc().then(function(v){
                        console.log('测试c', '成功返回', v)
                    }, function(v){
                        console.log('测试c', '失败返回', v)
                    })
                    ////////////////////////////////////////
                    async function ddd(){
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                function check(){
                                    console.log('测试d.pending', pending)
                                    if( pending ){
                                        setTimeout(check,500);
                                        return;
                                    }
                                    resolve(444)
                                }
                                check()
                            },1e3)
                        });
                    }
                    console.log('测试d执行')
                    var d = await ddd();
                    console.log('测试c', d)
                    ////////////////////////////////////////
                    function eee(){
                        return new Promise((resolve, reject) => {
                            Promise.resolve( new Promise((resolve, reject) => {
                                setTimeout(() => { resolve(555) },2e3)
                            }))
                        });
                    }
                    console.log('测试e执行')
                    eee().then(function(v){
                        console.log('测试e', '成功返回', v)
                    }, function(v){
                        console.log('测试e', '失败返回', v)
                    })
                    ////////////////////////////////////////
                    function fff(){
                        return new Promise((resolve, reject) => {
                            new Promise((resolve, reject) => {
                                setTimeout(() => { resolve(666) },2e3)
                            }).then(resolve, reject)
                        });
                    }
                    console.log('测试f执行')
                    fff().then(function(v){
                        console.log('测试f', '成功返回', v)
                    }, function(v){
                        console.log('测试f', '失败返回', v)
                    })
                </script>
                <pre>测试a执行</pre>
                <pre>测试b执行 (阻塞)</pre>
                <pre>测试b 222 (4s以后b返回)</pre>
                <pre>测试c执行</pre>
                <pre>测试d执行 (阻塞)</pre>
                <pre>测试d.pending true (x6)</pre>
                <pre>测试c 成功返回 333</pre>
                <pre>测试d.pending false</pre>
                <pre>测试c 444</pre>
                <pre>测试e执行</pre>
                <pre>测试f执行</pre>
                <pre>测试a 成功返回 111 (10s以后a返回)</pre>
                <pre>(2s以后e没有返回)</pre>
                <pre>测试f 成功返回 666 (2s以后a返回)</pre>
                <hr />
                <p> 1 请求1 - padding判断 - 发送 - 401状态 - 触发重登陆(节流) - padding=true(挂起) - 每500ms询问(最大次数20) - 重新请求 - 覆盖resolve/reject</p>
                <p> 1 请求2 - padding判断 - 发送 - 401状态 - - padding=true(挂起) - 每500ms询问(最大次数20) - 重新请求 - 覆盖resolve/reject</p>
                <p> 1 请求3 - padding判断 - 发送 - 401状态 - - padding=true(挂起) - 每500ms询问(最大次数20) - 重新请求 - 覆盖resolve/reject</p>
                <p> 2 请求4 - padding判断 - 挂起 - 每500ms询问(最大次数20) - 重新请求 - 覆盖resolve/reject</p>
                <p> 2 请求5 - padding判断 - 挂起 - 每500ms询问(最大次数20) - 重新请求 - 覆盖resolve/reject</p>
                <p class="text-danger">axios 的拦截器似乎在初步覆盖不到resolve</p>
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
        async function test () {
            function aaa () {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(111)
                    }, 10e3)
                });
            }
            console.log('测试a执行')
            aaa().then(function (v) {
                console.log('测试a', '成功返回', v)
            }, function (v) {
                console.log('测试a', '失败返回', v)
            })
            async function bbb () {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(222)
                    }, 4e3)
                });
            }
            console.log('测试b执行')
            var b = await bbb();
            console.log('测试b', b)
            var pending = false;
            function ccc () {
                return new Promise((resolve, reject) => {
                    pending = true;
                    setTimeout(() => {
                        resolve(333)
                        pending = false;
                    }, 4e3)
                });
            }
            console.log('测试c执行')
            ccc().then(function (v) {
                console.log('测试c', '成功返回', v)
            }, function (v) {
                console.log('测试c', '失败返回', v)
            })
            async function ddd () {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        function check () {
                            console.log('测试d.pending', pending)
                            if (pending) {
                                setTimeout(check, 500)
                                return
                            }
                            resolve(444)
                        }
                        check()
                    }, 1e3)
                });
            }
            console.log('测试d执行')
            var d = await ddd();
            console.log('测试c', d)
            function eee () {
                return new Promise((resolve, reject) => {
                    Promise.resolve(new Promise((resolve, reject) => {
                        setTimeout(() => { resolve(555) }, 2e3)
                    }))
                });
            }
            console.log('测试e执行')
            eee().then(function (v) {
                console.log('测试e', '成功返回', v)
            }, function (v) {
                console.log('测试e', '失败返回', v)
            })
            function fff () {
                return new Promise((resolve, reject) => {
                    new Promise((resolve, reject) => {
                        setTimeout(() => { resolve(666) }, 2e3)
                    }).then(resolve, reject)
                });
            }
            console.log('测试f执行')
            fff().then(function (v) {
                console.log('测试f', '成功返回', v)
            }, function (v) {
                console.log('测试f', '失败返回', v)
            })
        }
        test()
    }
}
</script>
