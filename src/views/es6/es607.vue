<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">类 讲解</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <Row :gutter="20">
                    <Col span="12">
                        <p>JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。</p>
                        <script type="text/js">
                            function Point(x, y) {
                                this.x = x;
                                this.y = y;
                            }
                            Point.prototype.toString = function () {
                                return '(' + this.x + ', ' + this.y + ')';
                            };
                            var p = new Point(1, 2);
                        </script>
                        <p>上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。</p>
                        <p>ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。</p>
                        <p>通过class关键字，可以定义类。</p>
                        <p class="text-danger">基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。</p>
                        <p>上面的代码用 ES6 的class改写，就是下面这样。</p>
                        <script type="text/js">
                            class Point {
                                constructor(x, y) {
                                    this.x = x;
                                    this.y = y;
                                }
                                toString() {
                                    return '(' + this.x + ', ' + this.y + ')';
                                }
                            }
                        </script>
                        <p>上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。</p>
                        <p>也就是说，ES5 的构造函数Point，对应 ES6 的Point类的构造方法。</p>
                        <p>Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。</p>
                        <p class="text-danger">另外，方法之间不需要逗号分隔，加了会报错。</p>
                    </Col>
                    <Col span="12">
                        <p>ES6 的类，完全可以看作构造函数的另一种写法。</p>
                        <p>上面代码表明，类的数据类型就是函数，类本身就指向构造函数。</p>
                        <script type="text/js">
                            class Point {
                                // ...
                            }
                            typeof Point // "function"
                            Point === Point.prototype.constructor // true
                        </script>
                        <p>使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。</p>
                        <script type="text/js">
                            class Bar {
                                doStuff() {
                                    console.log('stuff');
                                }
                            }
                            var b = new Bar();
                            b.doStuff() // "stuff"
                        </script>
                        <p>构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。</p>
                        <script type="text/js">
                            class Point {
                                constructor() {}
                                toString() {}
                                toValue() {}
                            }
                            // 等同于
                            Point.prototype = {
                                constructor() {},
                                toString() {},
                                toValue() {},
                            };
                        </script>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <p>在类的实例上面调用方法，其实就是调用原型上的方法。</p>
                        <script type="text/js">
                            class B {}
                            let b = new B();
                            b.constructor === B.prototype.constructor // true
                        </script>
                        <p>上面代码中，b是B类的实例，它的constructor方法就是B类原型的constructor方法。</p>
                        <p>由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。</p>
                        <p>Object.assign方法可以很方便地一次向类添加多个方法。</p>
                        <script type="text/js">
                            class Point {
                                constructor(){ }
                            }
                            Object.assign(Point.prototype, {
                                toString(){},
                                toValue(){}
                            });
                        </script>
                        <p>prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。</p>
                        <p>Point.prototype.constructor === Point // true</p>
                    </Col>
                    <Col span="12">
                        <p>另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）。</p>
                        <script type="text/js">
                            class Point {
                                constructor(x, y) {
                                    // ...
                                }
                                toString() {
                                    // ...
                                }
                            }
                            Object.keys(Point.prototype)
                            // []
                            Object.getOwnPropertyNames(Point.prototype)
                            // ["constructor","toString"]
                        </script>
                        <p>上面代码中，toString方法是Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。</p>
                        <script type="text/js">
                            var Point = function (x, y) {
                                // ...
                            };
                            Point.prototype.toString = function() {
                                // ...
                            };
                            Object.keys(Point.prototype)
                            // ["toString"]
                            Object.getOwnPropertyNames(Point.prototype)
                            // ["constructor","toString"]
                        </script>
                        <p>上面代码采用 ES5 的写法，toString方法就是可枚举的。</p>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/js">
                        </script>
                    </Col>
                </Row>

                <p>constructor 方法</p>
                <p>constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。</p>
                <p>class Point {</p>
                <p>}</p>
                <p>// 等同于</p>
                <p>class Point {</p>
                <p>    constructor() {}</p>
                <p>}</p>
                <p>上面代码中，定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor方法。</p>
                <p>constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。</p>
                <p>class Foo {</p>
                <p>    constructor() {</p>
                <p>        return Object.create(null);</p>
                <p>    }</p>
                <p>}</p>
                <p>new Foo() instanceof Foo</p>
                <p>// false</p>
                <p>上面代码中，constructor函数返回一个全新的对象，结果导致实例对象不是Foo类的实例。</p>
                <p>类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。</p>
                <p>class Foo {</p>
                <p>    constructor() {</p>
                <p>        return Object.create(null);</p>
                <p>    }</p>
                <p>}</p>
                <p>Foo()</p>
                <p>// TypeError: Class constructor Foo cannot be invoked without 'new'</p>
                <p>类的实例</p>
                <p>生成类的实例的写法，与 ES5 完全一样，也是使用new命令。前面说过，如果忘记加上new，像函数那样调用Class，将会报错。</p>
                <p>class Point {</p>
                <p>    // ...</p>
                <p>}</p>
                <p>// 报错</p>
                <p>var point = Point(2, 3);</p>
                <p>// 正确</p>
                <p>var point = new Point(2, 3);</p>
                <p>与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。</p>
                <p>//定义类</p>
                <p>class Point {</p>
                <p>    constructor(x, y) {</p>
                <p>        this.x = x;</p>
                <p>        this.y = y;</p>
                <p>    }</p>
                <p>    toString() {</p>
                <p>        return '(' + this.x + ', ' + this.y + ')';</p>
                <p>    }</p>
                <p>}</p>
                <p>var point = new Point(2, 3);</p>
                <p>point.toString() // (2, 3)</p>
                <p>point.hasOwnProperty('x') // true</p>
                <p>point.hasOwnProperty('y') // true</p>
                <p>point.hasOwnProperty('toString') // false</p>
                <p>point.__proto__.hasOwnProperty('toString') // true</p>
                <p>上面代码中，x和y都是实例对象point自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty方法返回false。这些都与 ES5 的行为保持一致。</p>
                <p>与 ES5 一样，类的所有实例共享一个原型对象。</p>
                <p>var p1 = new Point(2,3);</p>
                <p>var p2 = new Point(3,2);</p>
                <p>p1.__proto__ === p2.__proto__</p>
                <p>//true</p>
                <p>上面代码中，p1和p2都是Point的实例，它们的原型都是Point.prototype，所以__proto__属性是相等的。</p>
                <p>这也意味着，可以通过实例的__proto__属性为“类”添加方法。</p>
                <p>__proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。</p>
                <p>var p1 = new Point(2,3);</p>
                <p>var p2 = new Point(3,2);</p>
                <p>p1.__proto__.printName = function () { return 'Oops' };</p>
                <p>p1.printName() // "Oops"</p>
                <p>p2.printName() // "Oops"</p>
                <p>var p3 = new Point(4,2);</p>
                <p>p3.printName() // "Oops"</p>
                <p>上面代码在p1的原型上添加了一个printName方法，由于p1的原型就是p2的原型，因此p2也可以调用这个方法。而且，此后新建的实例p3也可以调用这个方法。这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。</p>
                <p>取值函数（getter）和存值函数（setter）</p>
                <p>与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。</p>
                <p>class MyClass {</p>
                <p>    constructor() {</p>
                <p>        // ...</p>
                <p>    }</p>
                <p>    get prop() {</p>
                <p>        return 'getter';</p>
                <p>    }</p>
                <p>    set prop(value) {</p>
                <p>        console.log('setter: '+value);</p>
                <p>    }</p>
                <p>}</p>
                <p>let inst = new MyClass();</p>
                <p>inst.prop = 123;</p>
                <p>// setter: 123</p>
                <p>inst.prop</p>
                <p>// 'getter'</p>
                <p>上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。</p>
                <p>存值函数和取值函数是设置在属性的 Descriptor 对象上的。</p>
                <p>class CustomHTMLElement {</p>
                <p>    constructor(element) {</p>
                <p>        this.element = element;</p>
                <p>    }</p>
                <p>    get html() {</p>
                <p>        return this.element.innerHTML;</p>
                <p>    }</p>
                <p>    set html(value) {</p>
                <p>        this.element.innerHTML = value;</p>
                <p>    }</p>
                <p>}</p>
                <p>var descriptor = Object.getOwnPropertyDescriptor(</p>
                <p>    CustomHTMLElement.prototype, "html"</p>
                <p>);</p>
                <p>"get" in descriptor    // true</p>
                <p>"set" in descriptor    // true</p>
                <p>上面代码中，存值函数和取值函数是定义在html属性的描述对象上面，这与 ES5 完全一致。</p>
                <p>属性表达式</p>
                <p>类的属性名，可以采用表达式。</p>
                <p>let methodName = 'getArea';</p>
                <p>class Square {</p>
                <p>    constructor(length) {</p>
                <p>        // ...</p>
                <p>    }</p>
                <p>    [methodName]() {</p>
                <p>        // ...</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，Square类的方法名getArea，是从表达式得到的。</p>

                <p>Class 表达式</p>
                <p>与函数一样，类也可以使用表达式的形式定义。</p>
                <p>const MyClass = class Me {</p>
                <p>    getClassName() {</p>
                <p>        return Me.name;</p>
                <p>    }</p>
                <p>};</p>
                <p>上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用MyClass引用。</p>
                <p>let inst = new MyClass();</p>
                <p>inst.getClassName() // Me</p>
                <p>Me.name // ReferenceError: Me is not defined</p>
                <p>上面代码表示，Me只在 Class 内部有定义。</p>
                <p>如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。</p>
                <p>const MyClass = class { /* ... */ };</p>
                <p>采用 Class 表达式，可以写出立即执行的 Class。</p>
                <p>let person = new class {</p>
                <p>    constructor(name) {</p>
                <p>        this.name = name;</p>
                <p>    }</p>
                <p>    sayName() {</p>
                <p>        console.log(this.name);</p>
                <p>    }</p>
                <p>}('张三');</p>
                <p>person.sayName(); // "张三"</p>
                <p>上面代码中，person是一个立即执行的类的实例。</p>
                <p>注意点</p>
                <p>（1）严格模式</p>
                <p>类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。</p>
                <p>（2）不存在提升</p>
                <p>类不存在变量提升（hoist），这一点与 ES5 完全不同。</p>
                <p>new Foo(); // ReferenceError</p>
                <p>class Foo {}</p>
                <p>上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。</p>
                <p>{</p>
                <p>    let Foo = class {};</p>
                <p>    class Bar extends Foo {</p>
                <p>    }</p>
                <p>}</p>
                <p>上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，而let命令是不提升的，所以导致Bar继承Foo的时候，Foo还没有定义。</p>
                <p>（3）name 属性</p>
                <p>由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。</p>
                <p>class Point {}</p>
                <p>Point.name // "Point"</p>
                <p>name属性总是返回紧跟在class关键字后面的类名。</p>
                <p>（4）Generator 方法</p>
                <p>如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。</p>
                <p>class Foo {</p>
                <p>    constructor(...args) {</p>
                <p>        this.args = args;</p>
                <p>    }</p>
                <p>    * [Symbol.iterator]() {</p>
                <p>        for (let arg of this.args) {</p>
                <p>            yield arg;</p>
                <p>        }</p>
                <p>    }</p>
                <p>}</p>
                <p>for (let x of new Foo('hello', 'world')) {</p>
                <p>    console.log(x);</p>
                <p>}</p>
                <p>// hello</p>
                <p>// world</p>
                <p>上面代码中，Foo类的Symbol.iterator方法前有一个星号，表示该方法是一个 Generator 函数。Symbol.iterator方法返回一个Foo类的默认遍历器，for...of循环会自动调用这个遍历器。</p>
                <p>（5）this 的指向</p>
                <p>类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。</p>
                <p>class Logger {</p>
                <p>    printName(name = 'there') {</p>
                <p>        this.print(`Hello ${name}`);</p>
                <p>    }</p>
                <p>    print(text) {</p>
                <p>        console.log(text);</p>
                <p>    }</p>
                <p>}</p>
                <p>const logger = new Logger();</p>
                <p>const { printName } = logger;</p>
                <p>printName(); // TypeError: Cannot read property 'print' of undefined</p>
                <p>上面代码中，printName方法中的this，默认指向Logger类的实例。但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined），从而导致找不到print方法而报错。</p>
                <p>一个比较简单的解决方法是，在构造方法中绑定this，这样就不会找不到print方法了。</p>
                <p>class Logger {</p>
                <p>    constructor() {</p>
                <p>        this.printName = this.printName.bind(this);</p>
                <p>    }</p>
                <p>    // ...</p>
                <p>}</p>
                <p>另一种解决方法是使用箭头函数。</p>
                <p>class Logger {</p>
                <p>    constructor() {</p>
                <p>        this.printName = (name = 'there') => {</p>
                <p>            this.print(`Hello ${name}`);</p>
                <p>        };</p>
                <p>    }</p>
                <p>    // ...</p>
                <p>}</p>
                <p>还有一种解决方法是使用Proxy，获取方法的时候，自动绑定this。</p>
                <p>function selfish (target) {</p>
                <p>    const cache = new WeakMap();</p>
                <p>    const handler = {</p>
                <p>        get (target, key) {</p>
                <p>            const value = Reflect.get(target, key);</p>
                <p>            if (typeof value !== 'function') {</p>
                <p>                return value;</p>
                <p>            }</p>
                <p>            if (!cache.has(value)) {</p>
                <p>                cache.set(value, value.bind(target));</p>
                <p>            }</p>
                <p>            return cache.get(value);</p>
                <p>        }</p>
                <p>    };</p>
                <p>    const proxy = new Proxy(target, handler);</p>
                <p>    return proxy;</p>
                <p>}</p>
                <p>const logger = selfish(new Logger());</p>
                <p>静态方法</p>
                <p>类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。</p>
                <p>class Foo {</p>
                <p>    static classMethod() {</p>
                <p>        return 'hello';</p>
                <p>    }</p>
                <p>}</p>
                <p>Foo.classMethod() // 'hello'</p>
                <p>var foo = new Foo();</p>
                <p>foo.classMethod()</p>
                <p>// TypeError: foo.classMethod is not a function</p>
                <p>上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。</p>
                <p>注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。</p>
                <p>class Foo {</p>
                <p>    static bar() {</p>
                <p>        this.baz();</p>
                <p>    }</p>
                <p>    static baz() {</p>
                <p>        console.log('hello');</p>
                <p>    }</p>
                <p>    baz() {</p>
                <p>        console.log('world');</p>
                <p>    }</p>
                <p>}</p>
                <p>Foo.bar() // hello</p>
                <p>上面代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。</p>
                <p>父类的静态方法，可以被子类继承。</p>
                <p>class Foo {</p>
                <p>    static classMethod() {</p>
                <p>        return 'hello';</p>
                <p>    }</p>
                <p>}</p>
                <p>class Bar extends Foo {</p>
                <p>}</p>
                <p>Bar.classMethod() // 'hello'</p>
                <p>上面代码中，父类Foo有一个静态方法，子类Bar可以调用这个方法。</p>
                <p>静态方法也是可以从super对象上调用的。</p>
                <p>class Foo {</p>
                <p>    static classMethod() {</p>
                <p>        return 'hello';</p>
                <p>    }</p>
                <p>}</p>
                <p>class Bar extends Foo {</p>
                <p>    static classMethod() {</p>
                <p>        return super.classMethod() + ', too';</p>
                <p>    }</p>
                <p>}</p>
                <p>Bar.classMethod() // "hello, too"</p>
                <p>实例属性的新写法</p>
                <p>实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。</p>
                <p>class IncreasingCounter {</p>
                <p>    constructor() {</p>
                <p>        this._count = 0;</p>
                <p>    }</p>
                <p>    get value() {</p>
                <p>        console.log('Getting the current value!');</p>
                <p>        return this._count;</p>
                <p>    }</p>
                <p>    increment() {</p>
                <p>        this._count++;</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，实例属性this._count定义在constructor()方法里面。另一种写法是，这个属性也可以定义在类的最顶层，其他都不变。</p>
                <p>class IncreasingCounter {</p>
                <p>    _count = 0;</p>
                <p>    get value() {</p>
                <p>        console.log('Getting the current value!');</p>
                <p>        return this._count;</p>
                <p>    }</p>
                <p>    increment() {</p>
                <p>        this._count++;</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，实例属性_count与取值函数value()和increment()方法，处于同一个层级。这时，不需要在实例属性前面加上this。</p>
                <p>这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。</p>
                <p>class foo {</p>
                <p>    bar = 'hello';</p>
                <p>    baz = 'world';</p>
                <p>    constructor() {</p>
                <p>        // ...</p>
                <p>    }</p>
                <p>}</p>
                <p>上面的代码，一眼就能看出，foo类有两个实例属性，一目了然。另外，写起来也比较简洁。</p>
                <p>静态属性</p>
                <p>静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。</p>
                <p>class Foo {</p>
                <p>}</p>
                <p>Foo.prop = 1;</p>
                <p>Foo.prop // 1</p>
                <p>上面的写法为Foo类定义了一个静态属性prop。</p>
                <p>目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。现在有一个提案提供了类的静态属性，写法是在实例属性法的前面，加上static关键字。</p>
                <p>class MyClass {</p>
                <p>    static myStaticProp = 42;</p>
                <p>    constructor() {</p>
                <p>        console.log(MyClass.myStaticProp); // 42</p>
                <p>    }</p>
                <p>}</p>
                <p>这个新写法大大方便了静态属性的表达。</p>
                <p>// 老写法</p>
                <p>class Foo {</p>
                <p>    // ...</p>
                <p>}</p>
                <p>Foo.prop = 1;</p>
                <p>// 新写法</p>
                <p>class Foo {</p>
                <p>    static prop = 1;</p>
                <p>}</p>
                <p>上面代码中，老写法的静态属性定义在类的外部。整个类生成以后，再生成静态属性。这样让人很容易忽略这个静态属性，也不符合相关代码应该放在一起的代码组织原则。另外，新写法是显式声明（declarative），而不是赋值处理，语义更好。</p>
                <p>私有方法和私有属性</p>
                <p>现有的解决方案</p>
                <p>私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。</p>
                <p>一种做法是在命名上加以区别。</p>
                <p>class Widget {</p>
                <p>    // 公有方法</p>
                <p>    foo (baz) {</p>
                <p>        this._bar(baz);</p>
                <p>    }</p>
                <p>    // 私有方法</p>
                <p>    _bar(baz) {</p>
                <p>        return this.snaf = baz;</p>
                <p>    }</p>
                <p>    // ...</p>
                <p>}</p>
                <p>上面代码中，_bar方法前面的下划线，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。</p>
                <p>另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。</p>
                <p>class Widget {</p>
                <p>    foo (baz) {</p>
                <p>        bar.call(this, baz);</p>
                <p>    }</p>
                <p>    // ...</p>
                <p>}</p>
                <p>function bar(baz) {</p>
                <p>    return this.snaf = baz;</p>
                <p>}</p>
                <p>上面代码中，foo是公开方法，内部调用了bar.call(this, baz)。这使得bar实际上成为了当前模块的私有方法。</p>
                <p>还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。</p>
                <p>const bar = Symbol('bar');</p>
                <p>const snaf = Symbol('snaf');</p>
                <p>export default class myClass{</p>
                <p>    // 公有方法</p>
                <p>    foo(baz) {</p>
                <p>        this[bar](baz);</p>
                <p>    }</p>
                <p>    // 私有方法</p>
                <p>    [bar](baz) {</p>
                <p>        return this[snaf] = baz;</p>
                <p>    }</p>
                <p>    // ...</p>
                <p>};</p>
                <p>上面代码中，bar和snaf都是Symbol值，一般情况下无法获取到它们，因此达到了私有方法和私有属性的效果。但是也不是绝对不行，Reflect.ownKeys()依然可以拿到它们。</p>
                <p>const inst = new myClass();</p>
                <p>Reflect.ownKeys(myClass.prototype)</p>
                <p>// [ 'constructor', 'foo', Symbol(bar) ]</p>
                <p>上面代码中，Symbol 值的属性名依然可以从类的外部拿到。</p>
                <p>私有属性的提案</p>
                <p>目前，有一个提案，为class加了私有属性。方法是在属性名之前，使用#表示。</p>
                <p>class IncreasingCounter {</p>
                <p>    #count = 0;</p>
                <p>    get value() {</p>
                <p>        console.log('Getting the current value!');</p>
                <p>        return this.#count;</p>
                <p>    }</p>
                <p>    increment() {</p>
                <p>        this.#count++;</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，#count就是私有属性，只能在类的内部使用（this.#count）。如果在类的外部使用，就会报错。</p>
                <p>const counter = new IncreasingCounter();</p>
                <p>counter.#count // 报错</p>
                <p>counter.#count = 42 // 报错</p>
                <p>上面代码在类的外部，读取私有属性，就会报错。</p>
                <p>下面是另一个例子。</p>
                <p>class Point {</p>
                <p>    #x;</p>
                <p>    constructor(x = 0) {</p>
                <p>        this.#x = +x;</p>
                <p>    }</p>
                <p>    get x() {</p>
                <p>        return this.#x;</p>
                <p>    }</p>
                <p>    set x(value) {</p>
                <p>        this.#x = +value;</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，#x就是私有属性，在Point类之外是读取不到这个属性的。由于井号#是属性名的一部分，使用时必须带有#一起使用，所以#x和x是两个不同的属性。</p>
                <p>之所以要引入一个新的前缀#表示私有属性，而没有采用private关键字，是因为 JavaScript 是一门动态语言，没有类型声明，使用独立的符号似乎是唯一的比较方便可靠的方法，能够准确地区分一种属性是否为私有属性。另外，Ruby 语言使用@表示私有属性，ES6 没有用这个符号而使用#，是因为@已经被留给了 Decorator。</p>
                <p>这种写法不仅可以写私有属性，还可以用来写私有方法。</p>
                <p>class Foo {</p>
                <p>    #a;</p>
                <p>    #b;</p>
                <p>    constructor(a, b) {</p>
                <p>        this.#a = a;</p>
                <p>        this.#b = b;</p>
                <p>    }</p>
                <p>    #sum() {</p>
                <p>        return #a + #b;</p>
                <p>    }</p>
                <p>    printSum() {</p>
                <p>        console.log(this.#sum());</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，#sum()就是一个私有方法。</p>
                <p>另外，私有属性也可以设置 getter 和 setter 方法。</p>
                <p>class Counter {</p>
                <p>    #xValue = 0;</p>
                <p>    constructor() {</p>
                <p>        super();</p>
                <p>        // ...</p>
                <p>    }</p>
                <p>    get #x() { return #xValue; }</p>
                <p>    set #x(value) {</p>
                <p>        this.#xValue = value;</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，#x是一个私有属性，它的读写都通过get #x()和set #x()来完成。</p>
                <p>私有属性不限于从this引用，只要是在类的内部，实例也可以引用私有属性。</p>
                <p>class Foo {</p>
                <p>    #privateValue = 42;</p>
                <p>    static getPrivateValue(foo) {</p>
                <p>        return foo.#privateValue;</p>
                <p>    }</p>
                <p>}</p>
                <p>Foo.getPrivateValue(new Foo()); // 42</p>
                <p>上面代码允许从实例foo上面引用私有属性。</p>
                <p>私有属性和私有方法前面，也可以加上static关键字，表示这是一个静态的私有属性或私有方法。</p>
                <p>class FakeMath {</p>
                <p>    static PI = 22 / 7;</p>
                <p>    static #totallyRandomNumber = 4;</p>
                <p>    static #computeRandomNumber() {</p>
                <p>        return FakeMath.#totallyRandomNumber;</p>
                <p>    }</p>
                <p>    static random() {</p>
                <p>        console.log('I heard you like random numbers…')</p>
                <p>        return FakeMath.#computeRandomNumber();</p>
                <p>    }</p>
                <p>}</p>
                <p>FakeMath.PI // 3.142857142857143</p>
                <p>FakeMath.random()</p>
                <p>// I heard you like random numbers…</p>
                <p>// 4</p>
                <p>FakeMath.#totallyRandomNumber // 报错</p>
                <p>FakeMath.#computeRandomNumber() // 报错</p>
                <p>上面代码中，#totallyRandomNumber是私有属性，#computeRandomNumber()是私有方法，只能在FakeMath这个类的内部调用，外部调用就会报错。</p>
                <p>new.target 属性</p>
                <p>new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。</p>
                <p>function Person(name) {</p>
                <p>    if (new.target !== undefined) {</p>
                <p>        this.name = name;</p>
                <p>    } else {</p>
                <p>        throw new Error('必须使用 new 命令生成实例');</p>
                <p>    }</p>
                <p>}</p>
                <p>// 另一种写法</p>
                <p>function Person(name) {</p>
                <p>    if (new.target === Person) {</p>
                <p>        this.name = name;</p>
                <p>    } else {</p>
                <p>        throw new Error('必须使用 new 命令生成实例');</p>
                <p>    }</p>
                <p>}</p>
                <p>var person = new Person('张三'); // 正确</p>
                <p>var notAPerson = Person.call(person, '张三');    // 报错</p>
                <p>上面代码确保构造函数只能通过new命令调用。</p>
                <p>Class 内部调用new.target，返回当前 Class。</p>
                <p>class Rectangle {</p>
                <p>    constructor(length, width) {</p>
                <p>        console.log(new.target === Rectangle);</p>
                <p>        this.length = length;</p>
                <p>        this.width = width;</p>
                <p>    }</p>
                <p>}</p>
                <p>var obj = new Rectangle(3, 4); // 输出 true</p>
                <p>需要注意的是，子类继承父类时，new.target会返回子类。</p>
                <p>class Rectangle {</p>
                <p>    constructor(length, width) {</p>
                <p>        console.log(new.target === Rectangle);</p>
                <p>        // ...</p>
                <p>    }</p>
                <p>}</p>
                <p>class Square extends Rectangle {</p>
                <p>    constructor(length) {</p>
                <p>        super(length, width);</p>
                <p>    }</p>
                <p>}</p>
                <p>var obj = new Square(3); // 输出 false</p>
                <p>上面代码中，new.target会返回子类。</p>
                <p>利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。</p>
                <p>class Shape {</p>
                <p>    constructor() {</p>
                <p>        if (new.target === Shape) {</p>
                <p>            throw new Error('本类不能实例化');</p>
                <p>        }</p>
                <p>    }</p>
                <p>}</p>
                <p>class Rectangle extends Shape {</p>
                <p>    constructor(length, width) {</p>
                <p>        super();</p>
                <p>        // ...</p>
                <p>    }</p>
                <p>}</p>
                <p>var x = new Shape();    // 报错</p>
                <p>var y = new Rectangle(3, 4);    // 正确</p>
                <p>上面代码中，Shape类不能被实例化，只能用于继承。</p>
                <p>注意，在函数外部，使用new.target会报错。</p>
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
