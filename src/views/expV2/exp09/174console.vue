<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">console对象</div>
            <div class="blogContent" v-highlight>
                <p> 根据信息的不同性质，console对象还有4种显示信息的方法，分别是一般信息console.info()、除错信息console.debug()、警告提示console.warn()、错误提示console.error()。</p>
                <p></p>
                <script type="text/js">
                    console.info("这是info");
                    console.debug("这是debug");
                    console.warn("这是warn");
                    console.error("这是error");
                </script>
                <p>console对象的上面5种方法，都可以使用printf风格的占位符。不过，占位符的种类比较少，只支持字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）四种。</p>
                <script type="text/js">
                    console.log("%d年%d月%d日",2011,3,26);
                    console.log("圆周率是%f",3.1415926);
                </script>
                <p>如果信息太多，可以分组显示，用到的方法是console.group()和console.groupEnd()。</p>
                <script type="text/js">
                    console.group("第一组信息");
                    console.log("第一组第一条");
                    console.log("第一组第二条");
                    console.groupEnd();
                    console.group("第二组信息");
                    console.log("第二组第一条");
                    console.log("第二组第二条");
                    console.groupEnd();
                </script>
                <p>console.dir()可以显示一个对象所有的属性和方法。</p>
                <script type="text/js">
                    var dog = {} ;
                    dog.name = "大毛" ;
                    dog.color = "黄色";
                    dog.bark = function(){alert("汪汪汪");};
                    console.dir(dog);
                </script>
                <p>console.assert()用来判断一个表达式或变量是否为真。如果结果为否，则在控制台输出一条相应信息，并且抛出一个异常。</p>
                <script type="text/js">
                    var result = 0;
                    console.assert( result );
                    var year = 2000;
                    console.assert( year == 2011 );
                </script>
                <p>console.trace()用来追踪函数的调用轨迹。</p>
                <p>我想知道这个函数是如何被调用的，在其中加入console.trace()方法就可以了。</p>
                <script type="text/js">
                    var x = add3(1,1);// 运行后，会显示add()的调用轨迹，从上到下依次为add()、add1()、add2()、add3()。
                    function add3(a,b){return add2(a,b);}
                    function add2(a,b){return add1(a,b);}
                    function add1(a,b){return add(a,b);}
                    function add(a,b){ console.trace(); return a+b; }
                </script>
                <p>console.time()和console.timeEnd()，用来显示代码的运行时间。</p>
                <script type="text/js">
                    console.time("计时器一");
                    for(var i=0;i<1000;i++){ for(var j=0;j<1000;j++){} }
                    console.timeEnd("计时器一");
                </script>
                <p>性能分析（Profiler）就是分析程序各个部分的运行时间，找出瓶颈所在，使用的方法是console.profile()。</p>
                <p>假定有一个函数Foo()，里面调用了另外两个函数funcA()和funcB()，其中funcA()调用10次，funcB()调用1次。</p>
                <script type="text/js">
                    function Foo(){ for(var i=0;i<10;i++){funcA(1000);} funcB(10000); }
                    function funcA(count){ for(var i=0;i<count;i++){} }
                    function funcB(count){ for(var i=0;i<count;i++){} }
                    // 然后，就可以分析Foo()的运行性能了。
                    console.profile('性能分析器一');
                    Foo();
                    console.profileEnd();
                    // 控制台会显示一张性能分析表
                </script>
                <p>屏蔽禁用console.log输出</p>
                <p>在前端dev的环境下，经常需要console出一些debug信息，以方便开发。</p>
                <p>而在产品release的版本中，又不合适在浏览器的console中输出那么多的调试信息。因此，就需要屏蔽禁用console输出。</p>
                <p>用以下简单的小的复写，即可实现屏蔽禁用console.log输出：</p>
                <script type="text/js">
                    if(!global.consoleSwitch){
                        console.log = ()=>{}
                    }
                </script>
                <p>在调试js代码的时候，为调试的日志添加样式可以使信息更醒目。</p>
                <script type="text/js">
                    console.log('%c this is a message','color:#0f0;')
                    console.log('%c this %c is a %c message','color:#f00;','font-size:20px;','color:blue;background:yellow;')
                </script>
                <p>第一个参数就是要输出的字符串，通过%c分割的区间与之后的参数一一对应，参数就是标准的css</p>
                <p>如果对应的参数不足，无法匹配%c会以字符串的形式输出，参数过多就会直接以字符串形式输出多余的样式。</p>
                <p>然而在shell中以上的方法就不行了，在node服务中我们可以使用colors模块来控制样式</p>
                <script type="text/js">
                    npm install colors
                </script>
                <p>使用方法非常简便，模块通过扩展 String.prototype 添加样式，而且支持链式调用。</p>
                <script type="text/js">
                    var colors = require('colors');
                    console.log('hello'.green); // outputs green text
                    console.log('i like cake and pies'.underline.red) // outputs red underlined text
                    console.log('inverse the color'.inverse); // inverses the color
                    console.log('OMG Rainbows!'.rainbow); // rainbow
                    console.log('Run the trap'.trap); // Drops the bass
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
