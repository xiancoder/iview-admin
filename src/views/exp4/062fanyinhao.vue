<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">反引号的推荐使用</div>
            <div class="blogContent" v-highlight>
                <script type="text/xianjs">
                    var a1 = `string text`; // "string text"
                    var a2 = `string text line 1
                               string text line 2`;// "string text line 1 换行 string text line 2"
                    var a3 = `string text ${a1} string text`; // "string text string text string text"
                    var a4 = function( x ){ return x+"?" };
                    var a5 = a4`string text ${a1} string text`; // "string text , string text?"
                    //多行操作
                    var a6 = `\`` === "`"; // true
                    console.log("string text line 1\n\
                    string text line 2");
                    // "string text line 1
                    // string text line 2"
                    console.log(`string text line 1
                    string text line 2`);
                    // "string text line 1
                    // string text line 2"
                    //表达式
                    var b1 = 5, b2 = 10;
                    var a7 = `Fifteen is ${b1 + b2} and\nnot ${2 * b1 + b2}.`; // "Fifteen is 15 and 换行 not 20."
                    function tag(strings, ...values) {
                        console.log(strings.raw[0]); // "Hello ${ b1 + b2 } world ${ b1 * b2 }"
                        console.log(strings[0]); // "Hello "
                        console.log(strings[1]); // " world "
                        console.log(strings[2]); // ""
                        console.log(values[0]);  // 15
                        console.log(values[1]);  // 20
                        return "Bazinga!";
                    }
                    tag`Hello ${ b1 + b2 } world ${ b1 * b2 }`; // "Bazinga!"
                    //方式1：将条件表达式改造成三元运算方式
                    function fn1() {
                        var cc='11';
                        return `${cc} ${true?"22":""}`;
                    }
                    console.log(fn1());  //11 22
                    //方式2：函数命令方式
                    function fn2() {
                        var cc='11';
                        function tmp() {
                            if(true){
                                return "22";
                            }
                        }
                        return `${cc} ${tmp()}`;
                    }
                    console.log(fn2()); //11 22
                    function template(strings, ...keys) {
                        return (function(...values) {
                            var dict = values[values.length - 1] || {};
                            var result = [strings[0]];
                            keys.forEach(function(key, i) {
                                var value = Number.isInteger(key) ? values[key] : dict[key];
                                result.push(value, strings[i + 1]);
                            });
                            return result.join('');
                        });
                    }
                    var t1Closure = template`${0}${1}${0}!`;
                    t1Closure('Y', 'A');  // "YAY!"
                    var t2Closure = template`${0} ${'foo'}!`;
                    t2Closure('Hello', {foo: 'World'});  // "Hello World!"
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
