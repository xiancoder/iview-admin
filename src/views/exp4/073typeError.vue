<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">弱类型的坑</div>
            <div class="blogContent" v-highlight>
                <h3 class="text-danger">注意这里是个坑 后台传递的数据格式是字符串 select2需要的也是字符串</h3>
                <h3 class="text-danger">字符串内容是数字的 也可以比较 平时使用时候很少用到比较结果的 导致一经历计算 就会出现错误</h3>
                <h3 class="text-danger">TMD '21' 小于 '9' 你说这咋搞...</h3>
                <p>以下是网摘的资料</p>
                <script type="text/js">
                    function test(){
                        // 1)纯数字之间比较
                        console.log(1<3); // true
                        // 2)数字字符串比较，会将其先转成数字
                        console.log("1"<"3"); // true
                        console.log("123"<"123"); // false
                        // 3)纯字符串比较,先转成ascii码
                        console.log("21"<"9"); // true
                        console.log("a"<"b"); // true
                        console.log("abc"<"aad"); // false,多纯字母比较，会依次比较ascii码
                        // 4)汉字比较
                        console.log("我".charCodeAt()); // 25105
                        console.log("的".charCodeAt()); // 30340
                        console.log("我"<"的"); // true,汉字比较,转成ascii码
                        // 5)当数字和字符串比较，且字符串为数字。则将数字字符串转为数字
                        console.log(123<"124"); // true,下面一句代码得出124的ascii码为49，所以并不是转成ascii比较
                        console.log("124".charCodeAt()); // 49
                        // 6)当数字和字符串比较,且字符串为非纯数字时,则将非数字字符串转成数字的时候会转换为NaN,当NaN和数字比较时不论大小都返回false.
                        console.log(13>"abc"); // false
                    }
                </script>
                <p>之前群里有人问如何比较两个时间大小，他的时间格式是 2014-08-08 而不是 2014-8-8。给的方法是 直接比较</p>
                <script type="text/js">
                    var a = "2014-08-08";
                    var b = "2014-09-09";
                    console.log(a>b, a<b); // false true
                </script>
                <p>大于(&gt;), 小于(&lt;)运算符</p>
                <p>javascript字符串在进行大于(小于)比较时，会根据第一个不同的字符的ascii值码进行比较，当数字(number)与字符串(string)进行比较大小时，</p>
                <p>会强制的将数字(number)转换成字符串(string)然后再进行比较</p>
                <script type="text/js">
                    (function(){
                        console.log('13'>'3'); // 输出：false
                        console.log(5>'6');  // 输出： false
                        console.log('d'>'ABDC') // 输出： true
                        console.log(19>'ssf') // 输出 false
                        console.log('A'>'abcdef') // 输出 false
                    })()
                </script>
                <p>二. 相等(==),严格相等(===)运算符</p>
                <p>在进行相等(==)运算比较时，如果一边是字符，一边是数字，会先将字符串转换成数字再进行比较；</p>
                <p>严格相等(===)则不会进行类型转换，会比较类型是否相等。注NaN与任何值比较时都是false</p>
                <script type="text/js">
                    (function(){
                       console.log('6'==6) // true
                       console.log('6'===6) // false
                       console.log(6===6) // true
                       console.log('abc'==2) // false
                       console.log('abc'=='abc') // true
                       console.log('abc'==='abc') // true
                    })()
                </script>
                <p>三. 一些特殊值的相等与严格相等比较</p>
                <script type="text/js">
                    (function(){
                        console.log(null==undefined) // 输出：true
                        console.log(null===undefined) // 输出：false
                        console.log(null===null) // 输出：true
                        console.log(undefined===undefined) // 输出：true
                        console.log(NaN==undefined) // 输出：false
                        console.log(NaN==null)  // 输出：false
                        console.log(NaN==NaN)  // 输出：false
                        console.log(NaN===NaN)  // 输出：false
                    })()
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
