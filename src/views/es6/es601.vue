<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">let命令基本用法</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，<b class="bg-danger">只在let命令所在的代码块内有效</b class="bg-danger">。</p>
                <Row :gutter="20">
                    <Col span="8">
                        <script type="text/js">
                            {
                                let a = 10;
                                var b = 1;
                            }
                            a // ReferenceError: a is not defined.
                            b // 1
                        </script>
                    </Col>
                    <Col span="16">
                        <p>分别用let和var声明了两个变量。然后在代码块之外调用这两个变量</p>
                        <p>结果let声明的变量<b class="bg-danger">报错</b class="bg-danger">，var声明的变量返回了<b class="bg-danger">正确</b class="bg-danger">的值。</p>
                        <p>这表明 <span class="text-info">var的作用范围一直是个bug 但也衍生出了众多经典的写法</span></p>
                        <p><span class="bg-danger">let声明的变量只在它所在的代码块有效</span></p>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="10">
                        <script type="text/js">
                            for (let i = 0; i < 10; i++) {  }
                            console.log(i); // ReferenceError: i is not defined
                        </script>
                    </Col>
                    <Col span="14">
                        <p>举例，计数器i只在for循环体内有效，在循环体外引用就会报错。</p>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="10">
                        <script type="text/js">
                            var a = [];
                            for (var i = 0; i < 10; i++) {
                                a[i] = function () { console.log(i); };
                            }
                            a[6](); // 10
                        </script>
                        <script type="text/js">
                            var a = [];
                            for (let i = 0; i < 10; i++) {
                                a[i] = function () { console.log(i); };
                            }
                            a[6](); // 6
                        </script>
                    </Col>
                    <Col span="14">
                        <p>变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。 每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。 也就是说，所有数组a的成员里面的i，<b class="bg-danger">指向的都是同一个i</b class="bg-danger">，导致运行时输出的是最后一轮的i的值，也就是 10。</p>
                        <p>变量i是let声明的，当前的i只在本轮循环有效，所以<b class="bg-danger">每一次循环的i其实都是一个新的变量</b class="bg-danger">，所以最后输出的是6。 你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？ 这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。最后输出的是 6。</p>
                    </Col>
                </Row>
                <p>另外，for循环还有一个特别之处</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            for (let i = 0; i < 3; i++) { let i = 'abc'; console.log(i); }
                            // 输出了 3 次abc。
                            // 这表明函数内部的变量i与循环变量i不在同一个作用域
                            // 有各自单独的作用域。
                        </script>
                    </Col>
                    <Col span="12">
                        <p>设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。</p>
                        <p class="text-info">批注: 很妙的设计 但是开发时候应当杜绝这种习惯 不知最好</p>
                    </Col>
                </Row>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">不存在变量提升 不允许变量提升</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。</p>
                <p>这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。</p>
                <p>为了纠正这种现象，let命令改变了语法行为，它<b class="bg-danger">所声明的变量一定要在声明后使用，否则报错</b class="bg-danger">。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            console.log(foo); // 输出undefined
                            console.log(bar); // 报错ReferenceError
                            var foo = 2;
                            let bar = 2;
                        </script>
                    </Col>
                    <Col span="12">
                        <p>变量foo用var命令声明，<b class="bg-danger">会发生变量提升</b class="bg-danger">，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。</p>
                        <p>变量bar用let命令声明，<b class="bg-danger">不会发生变量提升</b class="bg-danger">。 这表示在声明它之前，变量bar是不存在的，这时如果用到它，就会抛出一个错误。</p>
                    </Col>
                </Row>
                <h3>暂时性死区</h3>
                <p>只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。</p>
                <p class="text-info">批注: 划重点 关键构想</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            var tmp = 123;
                            if (true) {
                                // TDZ开始
                                tmp = 'abc'; // ReferenceError
                                console.log(tmp); // ReferenceError
                                let tmp; // TDZ结束
                                console.log(tmp); // undefined
                                tmp = 123;
                                console.log(tmp); // 123
                            }
                        </script>
                    </Col>
                    <Col span="12">
                        <p>存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。</p>
                        <p class="text-danger">ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。</p>
                        <p>凡是在声明之前就使用这些变量，<b class="bg-danger">就会报错</b class="bg-danger">。</p>
                    </Col>
                </Row>
                <p>总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。<b class="bg-danger">这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）</b class="bg-danger">。</p>
                <p>“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。<span class="text-info">这里得考虑加trycatch了</span></p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            typeof x; // ReferenceError
                            let x;
                            // 作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。
                            typeof undeclared_variable // "undefined"
                        </script>
                        <script type="text/js">
                            function bar(x = y, y = 2) { //有些“死区”比较隐蔽，不太容易发现。
                                return [x, y];
                            }
                            bar(); // 报错
                            function bar(x = 2, y = x) {
                              return [x, y];
                            }
                            bar(); // [2, 2]
                            var x = x; // 不报错
                            let x = x; // ReferenceError: x is not defined
                        </script>
                    </Col>
                    <Col span="12">
                        <p>举例，变量x使用let命令声明，所以在声明之前，都属于x的“死区”，只要用到该变量就会报错。</p>
                        <p>这样的设计是为了让大家养成良好的编程习惯，变量一定要在声明之后使用，否则就报错。</p>
                        <p class="text-danger">ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。</p>
                        <p>这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。</p>
                    </Col>
                </Row>
                <p>总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，</p>
                <p>但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。</p>
                <p class="text-info">批注: 只要有代码清洁的编程习惯 就可以避免这类问题</p>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">不允许重复声明</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>let不允许在相同作用域内，重复声明同一个变量。因此，不能在函数内部重新声明参数。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            function func() {
                                let a = 10;
                                var a = 1; // 报错
                            }
                            function func() {
                                let a = 10;
                                let a = 1; // 报错
                            }
                            ////////////////////////
                            function func(arg) {
                                let arg;
                            }
                            func() // 报错
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/js">
                            function func(arg) {
                                {
                                    let arg;
                                }
                            }
                            func() // 不报错
                        </script>
                        <p class="text-info">批注: 经常发生的bug为为两个逻辑手误起了一样的变量名</p>
                    </Col>
                </Row>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle"></div>
            <Divider orientation="right">块级作用域</Divider>
            <div class="blogContent" v-highlight>
                <h4>为什么需要块级作用域？ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。</h4>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            var tmp = new Date();
                            function f() { console.log(tmp); if (false) { var tmp = 'hello world'; } }
                            f(); // undefined
                        </script>
                    </Col>
                    <Col span="12">
                        <p>第一种场景，<b class="bg-danger">内层变量可能会覆盖外层变量</b class="bg-danger">。</p>
                        <p>if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。但是，函数f执行后，输出结果为undefined，原因在于<b class="bg-danger">变量提升</b class="bg-danger">，导致内层的tmp变量覆盖了外层的tmp变量。</p>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            var s = 'hello';
                            for (var i = 0; i < s.length; i++) { console.log(s[i]); }
                            console.log(i); // 5
                        </script>
                    </Col>
                    <Col span="12">
                        <p>第二种场景，<b class="bg-danger">用来计数的循环变量泄露为全局变量</b class="bg-danger">。</p>
                        <p>变量i只用来控制循环，但是循环结束后，<b class="bg-danger">它并没有消失，泄露成了全局变量</b class="bg-danger">。</p>
                    </Col>
                </Row>
                <h4>ES6 的块级作用域 let实际上为 JavaScript 新增了块级作用域。</h4>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            function f1() {
                                let n = 5;
                                if (true) { let n = 10; }
                                console.log(n); // 5
                            }
                        </script>
                    </Col>
                    <Col span="12">
                        <p>两个代码块，都声明了变量n，运行后输出 5。这表示<b class="bg-danger">外层代码块不受内层代码块的影响</b class="bg-danger">。</p>
                        <p>如果两次都使用var定义变量n，最后输出的值才是 10。</p>
                    </Col>
                </Row>
                <p>ES6 允许块级作用域的任意嵌套。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/html" v-pre>
                            // 使用了一个五层的块级作用域。外层作用域无法读取内层作用域的变量
                            {{{{{let insane = 'Hello World'}}}}};
                            // 内层作用域可以定义外层作用域的同名变量。
                            {{{{
                                {let insane = 'Hello World'}
                                console.log(insane); // 报错
                            }}}};
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/html" v-pre>
                            // 块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。
                            {{{{
                                let insane = 'Hello World';
                                {let insane = 'Hello World'}
                            }}}};
                            // IIFE 写法
                            (function () { var tmp = ...; }());
                            // 块级作用域写法
                            { let tmp = ...; }
                        </script>
                    </Col>
                </Row>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">块级作用域与函数声明</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>函数能不能在块级作用域之中声明？这是一个相当令人混淆的问题。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            // 情况一
                            if (true) { function f() {} }
                            // 情况二
                            try { function f() {} } catch(e) { }
                        </script>
                    </Col>
                    <Col span="12">
                        <p class="text-danger">ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。</p>
                        <p>两种函数声明，根据 ES5 的规定都是<b class="bg-danger">非法</b class="bg-danger">的。</p>
                        <p><b class="bg-danger">但是，浏览器没有遵守这个规定</b class="bg-danger">，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数</p>
                        <p>因此上面两种情况实际都能运行，<b class="bg-danger">不会报错</b class="bg-danger">。</p>
                    </Col>
                </Row>
                <p>ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。</p>
                <p class="text-danger">ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。<span class="text-info">的确合理多了。</span></p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            // ES5 环境
                            function f() { console.log('I am outside!'); }
                            (function () {
                                function f() { console.log('I am inside!'); }
                                f(); // 会得到“I am inside!”
                            }());
                            // ES6 环境
                            function f() { console.log('I am outside!'); }
                            (function () {
                                // 重复声明一次函数f
                                function f() { console.log('I am inside!'); }
                                f(); // Uncaught TypeError: f is not a function
                            }());
                            // ES5ES6 函数声明语句
                            {
                                let a = 'secret';
                                function f() { return a; }
                            }
                        </script>
                    </Col>
                    <Col span="12">
                        <p>原来，如果改变了块级作用域内声明的函数的处理规则，显然会对老代码产生很大影响。</p>
                        <p class="text-danger">为了减轻因此产生的不兼容问题，ES6 在附录B里面规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式。</p>
                        <p>考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。</p>
                        <script type="text/js">
                            // 函数表达式
                            {
                                let a = 'secret';
                                let f = function () { return a; };
                            }
                        </script>
                    </Col>
                </Row>
                <p class="text-danger">ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。</p>
                <script type="text/js">
                    'use strict';
                    if (true) { function f() {} } // 不报错
                    if (true) function f() {} // 报错
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">const 命令基本用法</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>const声明一个只读的常量。<b class="bg-danger">一旦声明，常量的值就不能改变。改变常量的值会报错</b class="bg-danger">。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            const PI = 3.1415;
                            PI // 3.1415
                            PI = 3; // TypeError: Assignment to constant variable.
                        </script>
                    </Col>
                    <Col span="12">
                        <p>const声明的变量不得改变值，这意味着，<b class="bg-danger">const一旦声明变量，就必须立即初始化，不能留到以后赋值</b class="bg-danger">。</p>
                        <p>只声明不赋值，就会报错。</p>
                        <script type="text/js">
                            const foo; // SyntaxError: Missing initializer in const declaration
                        </script>
                    </Col>
                </Row>
                <p>const的作用域与let命令相同：<b class="bg-danger">只在声明所在的块级作用域内有效</b class="bg-danger">。</p>
                <script type="text/js">
                    if (true) {
                        const MAX = 5;
                    }
                    MAX // Uncaught ReferenceError: MAX is not defined
                </script>
                <p>const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。</p>
                <p>const声明的常量，也与let一样不可重复声明。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            const foo = {};
                            // 为 foo 添加一个属性，可以成功
                            foo.prop = 123;
                            foo.prop // 123
                            // 将 foo 指向另一个对象，就会报错
                            foo = {}; // TypeError: "foo" is read-only
                            const a = [];
                            a.push('Hello'); // 可执行
                            a.length = 0;    // 可执行
                            a = ['Dave'];    // 报错
                            // 常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。
                        </script>
                    </Col>
                    <Col span="12">
                        <p>const本质实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。</p>
                        <p>对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。</p>
                        <p>但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。</p>
                        <p class="text-danger">因此，将一个对象声明为常量必须非常小心。</p>
                    </Col>
                </Row>
                <p>如果真的想将对象<b class="bg-danger">冻结</b class="bg-danger">，应该使用<b class="bg-danger">Object.freeze</b class="bg-danger">方法。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            const foo = Object.freeze({});
                            // 常规模式时，下面一行不起作用；
                            // 严格模式时，该行会报错 提示属性不可改
                            foo.prop = 123;
                        </script>
                    </Col>
                    <Col span="12">
                        <p>常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。</p>
                        <p>除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。</p>
                        <script type="text/js">
                            var constantize = (obj) => {
                                Object.freeze(obj);
                                Object.keys(obj).forEach( (key, i) => {
                                    if ( typeof obj[key] === 'object' ) {
                                        constantize( obj[key] );
                                    }
                                });
                            };
                        </script>
                    </Col>
                </Row>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">ES6声明变量的六种方法</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>ES5 只有两种声明变量的方法：var命令和function命令。</p>
                <p>ES6 除了添加let和const命令，import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            window.a = 1;
                            a // 1
                            a = 2;
                            window.a // 2
                            // 举例，顶层对象的属性赋值与全局变量的赋值，是同一件事。
                        </script>
                    </Col>
                    <Col span="12">
                        <p>顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。</p>
                        <p>ES5 之中，顶层对象的属性与全局变量是等价的。</p>
                        <p><u>顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。</u></p>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            var a = 1;
                            // 如果在 Node 的 REPL 环境，可以写成 global.a
                            // 或者采用通用方法，写成 this.a
                            window.a // 1
                            let b = 1;
                            window.b // undefined
                            // 全局变量a由var命令声明，所以它是顶层对象的属性；
                            // 全局变量b由let命令声明，所以它不是顶层对象的属性，返回undefined。
                        </script>
                    </Col>
                    <Col span="12">
                        <p>ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。<b class="bg-danger">也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。</b class="bg-danger"></p>
                    </Col>
                </Row>
                <h3>global 对象</h3>
                <p>ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。</p>
                <p>浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。 Node 里面，顶层对象是global，但其他环境都不支持。 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。</p>
                <p>现在有一个提案，在语言标准的层面，引入global作为顶层对象。也就是说，在所有环境下，global都是存在的，都可以从它拿到顶层对象。</p>
                <p>垫片库system.global模拟了这个提案，可以在所有环境拿到global。</p>
                <script type="text/js">
                    // CommonJS 的写法
                    require('system.global/shim')();
                    // ES6 模块的写法
                    import shim from 'system.global/shim'; shim();
                    上面代码可以保证各种环境里面，global对象都是存在的。
                    // CommonJS 的写法
                    var global = require('system.global')();
                    // ES6 模块的写法
                    import getGlobal from 'system.global';
                    const global = getGlobal();
                    // 上面代码将顶层对象放入变量global。
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
