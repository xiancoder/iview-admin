<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">异步方法的一步一步走向美好</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>回调地狱（callback Hell），也称为“末日金字塔（Pyramid of Doom）”，这种异步编程方式并不明智。</p>
                <p>由于回调函数的嵌套，回调地狱 会使你的代码向右排布而不是垂直向下排版。</p>
                <script type="text/js">
                    doajax(function(){
                        doajax(function(){
                            doajax(function(){
                                doajax(function(){
                                    doajax(function(){
                                        doajax(function(){
                                            doajax(function(){
                                                doajax(function(){
                                                    doajax(function(){
                                                        doajax(function(){
                                                            doajax(function(){
                                                                doajax(function(){
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                </script>
                <p>Promise 是 ES2015（即俗称的 ES6）引入的一个语言特性，用来更好的处理异步操作，避免回调地狱的出现。</p>
                <script type="text/js">
                    submit ({file, content}) {
                        return new Promise((resolve, reject) => {
                            axios({ }).then(resolve).catch(reject)
                        })
                    },
                    // ...
                    submit.then(response => { })
                </script>
                <p>Promise 的处理方式更加干净和可读。</p>
                <p>async/await 是一种特殊的语法，可以用更简洁的方式处理 Promise。</p>
                <p>在 funtion 前加 async 关键字就能将函数转换成 Promise。</p>
                <p class="text-danger">所有的 async 函数的返回值都是 Promise。</p>
                <script type="text/js">
                    // Arithmetic addition function
                    async function add(a, b) {
                        return a + b;
                    }
                    // Usage:
                    add(1, 3).then(result => console.log(result));
                    // Prints: 4
                </script>
                <hr />
                <p>等等！有个问题</p>
                <p>如果有一个 Promise reject 了，就会抛出 Unhandled promise rejection 异常。</p>
                <p>在此之前写的代码都没有考虑 Promise reject 的情况。未处理的 reject Promise 过去会以静默的方式失败，这可能会使调试成为噩梦。</p>
                <p>不过现在，Promise reject 时会抛出一个错误了。</p>
                <p class="text-danger">Google Chrome 抛出的错误：VM664:1 Uncaught (in promise) Error</p>
                <p class="text-danger">Node 抛出的错误则类似这样：(node:4796) UnhandledPromiseRejectionWarning: Unhandled promise rejection (r ejection id: 1): Error: spawn cmd ENOENT</p>
                <p>可以再优雅点吗？</p>
                <script type="text/js">
                    const handle = (promise) => {
                        return promise
                            .then(data => ([data, undefined]))
                            .catch(error => Promise.resolve([undefined, error]))
                    }
                    async function userProfile() {
                        let [user, userErr] = await handle(getUser())
                        if(userErr) throw new Error(‘Could not fetch user details’)
                        let [friendsOfUser, friendErr] = await handle(
                            getFriendsOfUser(userId)
                        );
                        if(friendErr) throw new Error(‘Could not fetch user’s friends’)
                        let [posts, postErr] = await handle(getUsersPosts(userId))
                        if(postErr) throw new Error(‘Could not fetch user’s posts’)
                        showUserProfilePage(user, friendsOfUser, posts)
                    }
                </script>
                <p>解释</p>
                <p>handle 函数接受一个 Promise 对象作为参数，并总是 resolve 它，以 [data|undefined, Error|undefined] 的形式返回结果。</p>
                <p class="text-danger">如果 Promise resolve 了，handle 函数返回 [data, undefined]；</p>
                <p class="text-danger">如果 Promise reject 了，handle 函数返回 [undefined, Error]。</p>
                <p class="text-info">妙极</p>
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
