<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">JS之实际参数转换成数组</div>
            <div class="blogContent" v-highlight>
                <p>有时侯需要将某个函数传递给其它函数执行，并且这些函数的参数个数是不确定的，可以先将 arguments 转为数组，再 apply 一下即可：</p>
                <script type="text/js">
                    function callme(a, b, c, d) {
                        console.log(a,b,c,d)
                    }
                    function callback() {
                        callme.apply(this, Array.prototype.slice.call(arguments,0))
                    }
                    callback(1,2,3)
                    > 1 2 3 undefined
                </script>
                <hr />
                <p>实际参数在函数中我们可以使用 arguments 对象获得 （注：形参可通过 arguments.callee 获得），虽然 arguments 对象与数组形似，但仍不是真正意义上的数组。</p>
                <p>我们可以通过数组的 slice 方法将 arguments 对象转换成真正的数组。</p>
                <p>方法一：通过Array.prototype属性调用slice方法</p>
                <script type="text/js">
                    var args = Array.prototype.slice.call(arguments);
                </script>
                <p>Array 本身是没有 slice 方法，它的方法在 Array.prototype中，而我们在调用 slice 方法的时候，如果在 Array 本身没有找到 slice 方法的话，会通过它的原型链往上查找。</p>
                <p>方法二：通过调用[]的slice方法</p>
                <script type="text/js">
                    var args = [].slice.call(arguments);
                </script>
                <p>方法三：通过遍历arguments,返回数组</p>
                <script type="text/js">
                    function toArray(){
                        var args = [];
                        for (var i = 1; i < arguments.length; i++) {
                            args.push(arguments[i]);
                        }
                        return args;
                    }
                </script>
                <p>注：一般的函数的 arguments.length 都在 10 以内，方法二有优势； 方法二的代码量上也比第一种少，至少可以减小一点字节</p>
                <script type="text/js">
                    function revse(){
                        try{
                            return Array.prototype.slice.call(arguments);
                        }
                        catch(e){
                            var newarr=[];
                            for(var i=arguments.length-1;i>=0;i--){
                              //newarr.push(arguments[i]);
                              newarr[i] = arguments[i]; //这样比push快？
                            }
                            return newarr;
                        }
                    }
                    var s = revse('a','b','c');
                    console.log(s); //["a", "b", "c"]
                </script>
                <p>跟arguments问题相关题目</p>
                <p>在某些场景下，需要将函数的 arguments 参数作为一个数组调用，但是 arguments 是一个奇异对象，所以试着将 arguments 转化为一个数组，例如下面例子：</p>
                <script type="text/js">
                    function argToArr(){
                        return [].slice.call(arguments, 0);
                    }
                    console.log(argToArr(1,2,3)); //[1,2,3]

                    function argToArr(){
                        return Array.slice.call(arguments, 0);
                    }
                    console.log(argToArr(1,2,3)); //Uncaught TypeError: Cannot read property 'call' of undefined
                </script>
                <p>这是为什么呢？</p>
                <p>第二段代码报错是因为Array是构造函数，不是对象，打开控制台，输入 typeof Array，结果是 function。</p>
                <p>slice()方法在其原型对象中，而[]就是Array的原型对象，在控制台中输入 Array.prototype，结果是[],所以第一段代码可以顺利执行。</p>
                <p>第二段代码如下修改就可以了:</p>
                <script type="text/js">
                    function argToArr(){
                        return Array.prototype.slice.call(arguments, 0); // 改这一行
                    }
                    console.log(argToArr(1,2,3));
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
