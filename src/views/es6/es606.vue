<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">函数</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>与解构赋值默认值结合使用</p>
                <p>参数默认值可以与解构赋值的默认值，结合起来使用。</p>
                <p>function foo({x, y = 5}) {</p>
                <p>    console.log(x, y);</p>
                <p>}</p>
                <p>foo({}) // undefined 5</p>
                <p>foo({x: 1}) // 1 5</p>
                <p>foo({x: 1, y: 2}) // 1 2</p>
                <p>foo() // TypeError: Cannot read property 'x' of undefined</p>
                <p>上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值生成。如果函数foo调用时没提供参数，变量x和y就不会生成，从而报错。通过提供函数参数的默认值，就可以避免这种情况。</p>
                <p>function foo({x, y = 5} = {}) {</p>
                <p>    console.log(x, y);</p>
                <p>}</p>
                <p>foo() // undefined 5</p>
                <p>上面代码指定，如果没有提供参数，函数foo的参数默认为一个空对象。</p>
                <p>下面是另一个解构赋值默认值的例子。</p>
                <p>function fetch(url, { body = '', method = 'GET', headers = {} }) {</p>
                <p>    console.log(method);</p>
                <p>}</p>
                <p>fetch('http://example.com', {})</p>
                <p>// "GET"</p>
                <p>fetch('http://example.com')</p>
                <p>// 报错</p>
                <p>上面代码中，如果函数fetch的第二个参数是一个对象，就可以为它的三个属性设置默认值。这种写法不能省略第二个参数，如果结合函数参数的默认值，就可以省略第二个参数。这时，就出现了双重默认值。</p>
                <p>function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {</p>
                <p>    console.log(method);</p>
                <p>}</p>
                <p>fetch('http://example.com')</p>
                <p>// "GET"</p>
                <p>上面代码中，函数fetch没有第二个参数时，函数参数的默认值就会生效，然后才是解构赋值的默认值生效，变量method才会取到默认值GET。</p>
                <p>作为练习，请问下面两种写法有什么差别？</p>
                <p>// 写法一</p>
                <p>function m1({x = 0, y = 0} = {}) {</p>
                <p>    return [x, y];</p>
                <p>}</p>
                <p>// 写法二</p>
                <p>function m2({x, y} = { x: 0, y: 0 }) {</p>
                <p>    return [x, y];</p>
                <p>}</p>
                <p>上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。</p>
                <p>// 函数没有参数的情况</p>
                <p>m1() // [0, 0]</p>
                <p>m2() // [0, 0]</p>
                <p>// x 和 y 都有值的情况</p>
                <p>m1({x: 3, y: 8}) // [3, 8]</p>
                <p>m2({x: 3, y: 8}) // [3, 8]</p>
                <p>// x 有值，y 无值的情况</p>
                <p>m1({x: 3}) // [3, 0]</p>
                <p>m2({x: 3}) // [3, undefined]</p>
                <p>// x 和 y 都无值的情况</p>
                <p>m1({}) // [0, 0];</p>
                <p>m2({}) // [undefined, undefined]</p>
                <p>m1({z: 3}) // [0, 0]</p>
                <p>m2({z: 3}) // [undefined, undefined]</p>
                <p>参数默认值的位置</p>
                <p>通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。</p>
                <p>// 例一</p>
                <p>function f(x = 1, y) {</p>
                <p>    return [x, y];</p>
                <p>}</p>
                <p>f() // [1, undefined]</p>
                <p>f(2) // [2, undefined])</p>
                <p>f(, 1) // 报错</p>
                <p>f(undefined, 1) // [1, 1]</p>
                <p>// 例二</p>
                <p>function f(x, y = 5, z) {</p>
                <p>    return [x, y, z];</p>
                <p>}</p>
                <p>f() // [undefined, 5, undefined]</p>
                <p>f(1) // [1, 5, undefined]</p>
                <p>f(1, ,2) // 报错</p>
                <p>f(1, undefined, 2) // [1, 5, 2]</p>
                <p>上面代码中，有默认值的参数都不是尾参数。这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined。</p>
                <p>如果传入undefined，将触发该参数等于默认值，null则没有这个效果。</p>
                <p>function foo(x = 5, y = 6) {</p>
                <p>    console.log(x, y);</p>
                <p>}</p>
                <p>foo(undefined, null)</p>
                <p>// 5 null</p>
                <p>上面代码中，x参数对应undefined，结果触发了默认值，y参数等于null，就没有触发默认值。</p>
                <p>函数的 length 属性</p>
                <p>指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。</p>
                <p>(function (a) {}).length // 1</p>
                <p>(function (a = 5) {}).length // 0</p>
                <p>(function (a, b, c = 5) {}).length // 2</p>
                <p>上面代码中，length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。比如，上面最后一个函数，定义了 3 个参数，其中有一个参数c指定了默认值，因此length属性等于3减去1，最后得到2。</p>
                <p>这是因为length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。同理，后文的 rest 参数也不会计入length属性。</p>
                <p>(function(...args) {}).length // 0</p>
                <p>如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。</p>
                <p>(function (a = 0, b, c) {}).length // 0</p>
                <p>(function (a, b = 1, c) {}).length // 1</p>
                <p>作用域</p>
                <p>一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。</p>
                <p>var x = 1;</p>
                <p>function f(x, y = x) {</p>
                <p>    console.log(y);</p>
                <p>}</p>
                <p>f(2) // 2</p>
                <p>上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。</p>
                <p>再看下面的例子。</p>
                <p>let x = 1;</p>
                <p>function f(y = x) {</p>
                <p>    let x = 2;</p>
                <p>    console.log(y);</p>
                <p>}</p>
                <p>f() // 1</p>
                <p>上面代码中，函数f调用时，参数y = x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。函数调用时，函数体内部的局部变量x影响不到默认值变量x。</p>
                <p>如果此时，全局变量x不存在，就会报错。</p>
                <p>function f(y = x) {</p>
                <p>    let x = 2;</p>
                <p>    console.log(y);</p>
                <p>}</p>
                <p>f() // ReferenceError: x is not defined</p>
                <p>下面这样写，也会报错。</p>
                <p>var x = 1;</p>
                <p>function foo(x = x) {</p>
                <p>    // ...</p>
                <p>}</p>
                <p>foo() // ReferenceError: x is not defined</p>
                <p>上面代码中，参数x = x形成一个单独作用域。实际执行的是let x = x，由于暂时性死区的原因，这行代码会报错”x 未定义“。</p>
                <p>如果参数的默认值是一个函数，该函数的作用域也遵守这个规则。请看下面的例子。</p>
                <p>let foo = 'outer';</p>
                <p>function bar(func = () => foo) {</p>
                <p>    let foo = 'inner';</p>
                <p>    console.log(func());</p>
                <p>}</p>
                <p>bar(); // outer</p>
                <p>上面代码中，函数bar的参数func的默认值是一个匿名函数，返回值为变量foo。函数参数形成的单独作用域里面，并没有定义变量foo，所以foo指向外层的全局变量foo，因此输出outer。</p>
                <p>如果写成下面这样，就会报错。</p>
                <p>function bar(func = () => foo) {</p>
                <p>    let foo = 'inner';</p>
                <p>    console.log(func());</p>
                <p>}</p>
                <p>bar() // ReferenceError: foo is not defined</p>
                <p>上面代码中，匿名函数里面的foo指向函数外层，但是函数外层并没有声明变量foo，所以就报错了。</p>
                <p>下面是一个更复杂的例子。</p>
                <p>var x = 1;</p>
                <p>function foo(x, y = function() { x = 2; }) {</p>
                <p>    var x = 3;</p>
                <p>    y();</p>
                <p>    console.log(x);</p>
                <p>}</p>
                <p>foo() // 3</p>
                <p>x // 1</p>
                <p>上面代码中，函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。</p>
                <p>如果将var x = 3的var去除，函数foo的内部变量x就指向第一个参数x，与匿名函数内部的x是一致的，所以最后输出的就是2，而外层的全局变量x依然不受影响。</p>
                <p>var x = 1;</p>
                <p>function foo(x, y = function() { x = 2; }) {</p>
                <p>    x = 3;</p>
                <p>    y();</p>
                <p>    console.log(x);</p>
                <p>}</p>
                <p>foo() // 2</p>
                <p>x // 1</p>
                <p>应用</p>
                <p>利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。</p>
                <p>function throwIfMissing() {</p>
                <p>    throw new Error('Missing parameter');</p>
                <p>}</p>
                <p>function foo(mustBeProvided = throwIfMissing()) {</p>
                <p>    return mustBeProvided;</p>
                <p>}</p>
                <p>foo()</p>
                <p>// Error: Missing parameter</p>
                <p>上面代码的foo函数，如果调用的时候没有参数，就会调用默认值throwIfMissing函数，从而抛出一个错误。</p>
                <p>从上面代码还可以看到，参数mustBeProvided的默认值等于throwIfMissing函数的运行结果（注意函数名throwIfMissing之后有一对圆括号），这表明参数的默认值不是在定义时执行，而是在运行时执行。如果参数已经赋值，默认值中的函数就不会运行。</p>
                <p>另外，可以将参数默认值设为undefined，表明这个参数是可以省略的。</p>
                <p>function foo(optional = undefined) { ··· }</p>
                <p>rest 参数</p>
                <p>ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。</p>
                <p>function add(...values) {</p>
                <p>    let sum = 0;</p>
                <p>    for (var val of values) {</p>
                <p>        sum += val;</p>
                <p>    }</p>
                <p>    return sum;</p>
                <p>}</p>
                <p>add(2, 5, 3) // 10</p>
                <p>上面代码的add函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。</p>
                <p>下面是一个 rest 参数代替arguments变量的例子。</p>
                <p>// arguments变量的写法</p>
                <p>function sortNumbers() {</p>
                <p>    return Array.prototype.slice.call(arguments).sort();</p>
                <p>}</p>
                <p>// rest参数的写法</p>
                <p>const sortNumbers = (...numbers) => numbers.sort();</p>
                <p>上面代码的两种写法，比较后可以发现，rest 参数的写法更自然也更简洁。</p>
                <p>arguments对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用Array.prototype.slice.call先将其转为数组。rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。下面是一个利用 rest 参数改写数组push方法的例子。</p>
                <p>function push(array, ...items) {</p>
                <p>    items.forEach(function(item) {</p>
                <p>        array.push(item);</p>
                <p>        console.log(item);</p>
                <p>    });</p>
                <p>}</p>
                <p>var a = [];</p>
                <p>push(a, 1, 2, 3)</p>
                <p>注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。</p>
                <p>// 报错</p>
                <p>function f(a, ...b, c) {</p>
                <p>    // ...</p>
                <p>}</p>
                <p>函数的length属性，不包括 rest 参数。</p>
                <p>(function(a) {}).length    // 1</p>
                <p>(function(...a) {}).length    // 0</p>
                <p>(function(a, ...b) {}).length    // 1</p>
                <p>严格模式</p>
                <p>从 ES5 开始，函数内部可以设定为严格模式。</p>
                <p>function doSomething(a, b) {</p>
                <p>    'use strict';</p>
                <p>    // code</p>
                <p>}</p>
                <p>ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。</p>
                <p>// 报错</p>
                <p>function doSomething(a, b = a) {</p>
                <p>    'use strict';</p>
                <p>    // code</p>
                <p>}</p>
                <p>// 报错</p>
                <p>const doSomething = function ({a, b}) {</p>
                <p>    'use strict';</p>
                <p>    // code</p>
                <p>};</p>
                <p>// 报错</p>
                <p>const doSomething = (...a) => {</p>
                <p>    'use strict';</p>
                <p>    // code</p>
                <p>};</p>
                <p>const obj = {</p>
                <p>    // 报错</p>
                <p>    doSomething({a, b}) {</p>
                <p>        'use strict';</p>
                <p>        // code</p>
                <p>    }</p>
                <p>};</p>
                <p>这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。但是，函数执行的时候，先执行函数参数，然后再执行函数体。这样就有一个不合理的地方，只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。</p>
                <p>// 报错</p>
                <p>function doSomething(value = 070) {</p>
                <p>    'use strict';</p>
                <p>    return value;</p>
                <p>}</p>
                <p>上面代码中，参数value的默认值是八进制数070，但是严格模式下不能用前缀0表示八进制，所以应该报错。但是实际上，JavaScript 引擎会先成功执行value = 070，然后进入函数体内部，发现需要用严格模式执行，这时才会报错。</p>
                <p>虽然可以先解析函数体代码，再执行参数代码，但是这样无疑就增加了复杂性。因此，标准索性禁止了这种用法，只要参数使用了默认值、解构赋值、或者扩展运算符，就不能显式指定严格模式。</p>
                <p>两种方法可以规避这种限制。第一种是设定全局性的严格模式，这是合法的。</p>
                <p>'use strict';</p>
                <p>function doSomething(a, b = a) {</p>
                <p>    // code</p>
                <p>}</p>
                <p>第二种是把函数包在一个无参数的立即执行函数里面。</p>
                <p>const doSomething = (function () {</p>
                <p>    'use strict';</p>
                <p>    return function(value = 42) {</p>
                <p>        return value;</p>
                <p>    };</p>
                <p>}());</p>
                <p>name 属性</p>
                <p>函数的name属性，返回该函数的函数名。</p>
                <p>function foo() {}</p>
                <p>foo.name // "foo"</p>
                <p>这个属性早就被浏览器广泛支持，但是直到 ES6，才将其写入了标准。</p>
                <p>需要注意的是，ES6 对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。</p>
                <p>var f = function () {};</p>
                <p>// ES5</p>
                <p>f.name // ""</p>
                <p>// ES6</p>
                <p>f.name // "f"</p>
                <p>上面代码中，变量f等于一个匿名函数，ES5 和 ES6 的name属性返回的值不一样。</p>
                <p>如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。</p>
                <p>const bar = function baz() {};</p>
                <p>// ES5</p>
                <p>bar.name // "baz"</p>
                <p>// ES6</p>
                <p>bar.name // "baz"</p>
                <p>Function构造函数返回的函数实例，name属性的值为anonymous。</p>
                <p>(new Function).name // "anonymous"</p>
                <p>bind返回的函数，name属性值会加上bound前缀。</p>
                <p>function foo() {};</p>
                <p>foo.bind({}).name // "bound foo"</p>
                <p>(function(){}).bind({}).name // "bound "</p>
                <p>箭头函数</p>
                <p>基本用法</p>
                <p>ES6 允许使用“箭头”（=>）定义函数。</p>
                <p>var f = v => v;</p>
                <p>// 等同于</p>
                <p>var f = function (v) {</p>
                <p>    return v;</p>
                <p>};</p>
                <p>如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。</p>
                <p>var f = () => 5;</p>
                <p>// 等同于</p>
                <p>var f = function () { return 5 };</p>
                <p>var sum = (num1, num2) => num1 + num2;</p>
                <p>// 等同于</p>
                <p>var sum = function(num1, num2) {</p>
                <p>    return num1 + num2;</p>
                <p>};</p>
                <p>如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。</p>
                <p>var sum = (num1, num2) => { return num1 + num2; }</p>
                <p>由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。</p>
                <p>// 报错</p>
                <p>let getTempItem = id => { id: id, name: "Temp" };</p>
                <p>// 不报错</p>
                <p>let getTempItem = id => ({ id: id, name: "Temp" });</p>
                <p>下面是一种特殊情况，虽然可以运行，但会得到错误的结果。</p>
                <p>let foo = () => { a: 1 };</p>
                <p>foo() // undefined</p>
                <p>上面代码中，原始意图是返回一个对象{ a: 1 }，但是由于引擎认为大括号是代码块，所以执行了一行语句a: 1。这时，a可以被解释为语句的标签，因此实际执行的语句是1;，然后函数就结束了，没有返回值。</p>
                <p>如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。</p>
                <p>let fn = () => void doesNotReturn();</p>
                <p>箭头函数可以与变量解构结合使用。</p>
                <p>const full = ({ first, last }) => first + ' ' + last;</p>
                <p>// 等同于</p>
                <p>function full(person) {</p>
                <p>    return person.first + ' ' + person.last;</p>
                <p>}</p>
                <p>箭头函数使得表达更加简洁。</p>
                <p>const isEven = n => n % 2 === 0;</p>
                <p>const square = n => n * n;</p>
                <p>上面代码只用了两行，就定义了两个简单的工具函数。如果不用箭头函数，可能就要占用多行，而且还不如现在这样写醒目。</p>
                <p>箭头函数的一个用处是简化回调函数。</p>
                <p>// 正常函数写法</p>
                <p>[1,2,3].map(function (x) {</p>
                <p>    return x * x;</p>
                <p>});</p>
                <p>// 箭头函数写法</p>
                <p>[1,2,3].map(x => x * x);</p>
                <p>另一个例子是</p>
                <p>// 正常函数写法</p>
                <p>var result = values.sort(function (a, b) {</p>
                <p>    return a - b;</p>
                <p>});</p>
                <p>// 箭头函数写法</p>
                <p>var result = values.sort((a, b) => a - b);</p>
                <p>下面是 rest 参数与箭头函数结合的例子。</p>
                <p>const numbers = (...nums) => nums;</p>
                <p>numbers(1, 2, 3, 4, 5)</p>
                <p>// [1,2,3,4,5]</p>
                <p>const headAndTail = (head, ...tail) => [head, tail];</p>
                <p>headAndTail(1, 2, 3, 4, 5)</p>
                <p>// [1,[2,3,4,5]]</p>
                <p>使用注意点</p>
                <p>箭头函数有几个使用注意点。</p>
                <p>（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。</p>
                <p>（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。</p>
                <p>（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。</p>
                <p>（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。</p>
                <p>上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。</p>
                <p>function foo() {</p>
                <p>    setTimeout(() => {</p>
                <p>        console.log('id:', this.id);</p>
                <p>    }, 100);</p>
                <p>}</p>
                <p>var id = 21;</p>
                <p>foo.call({ id: 42 });</p>
                <p>// id: 42</p>
                <p>上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。</p>
                <p>箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域。下面是另一个例子。</p>
                <p>function Timer() {</p>
                <p>    this.s1 = 0;</p>
                <p>    this.s2 = 0;</p>
                <p>    // 箭头函数</p>
                <p>    setInterval(() => this.s1++, 1000);</p>
                <p>    // 普通函数</p>
                <p>    setInterval(function () {</p>
                <p>        this.s2++;</p>
                <p>    }, 1000);</p>
                <p>}</p>
                <p>var timer = new Timer();</p>
                <p>setTimeout(() => console.log('s1: ', timer.s1), 3100);</p>
                <p>setTimeout(() => console.log('s2: ', timer.s2), 3100);</p>
                <p>// s1: 3</p>
                <p>// s2: 0</p>
                <p>上面代码中，Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的this绑定定义时所在的作用域（即Timer函数），后者的this指向运行时所在的作用域（即全局对象）。所以，3100 毫秒之后，timer.s1被更新了 3 次，而timer.s2一次都没更新。</p>
                <p>箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。下面是一个例子，DOM 事件的回调函数封装在一个对象里面。</p>
                <p>var handler = {</p>
                <p>    id: '123456',</p>
                <p>    init: function() {</p>
                <p>        document.addEventListener('click',</p>
                <p>            event => this.doSomething(event.type), false);</p>
                <p>    },</p>
                <p>    doSomething: function(type) {</p>
                <p>        console.log('Handling ' + type    + ' for ' + this.id);</p>
                <p>    }</p>
                <p>};</p>
                <p>上面代码的init方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象。否则，回调函数运行时，this.doSomething这一行会报错，因为此时this指向document对象。</p>
                <p>this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。</p>
                <p>所以，箭头函数转成 ES5 的代码如下。</p>
                <p>// ES6</p>
                <p>function foo() {</p>
                <p>    setTimeout(() => {</p>
                <p>        console.log('id:', this.id);</p>
                <p>    }, 100);</p>
                <p>}</p>
                <p>// ES5</p>
                <p>function foo() {</p>
                <p>    var _this = this;</p>
                <p>    setTimeout(function () {</p>
                <p>        console.log('id:', _this.id);</p>
                <p>    }, 100);</p>
                <p>}</p>
                <p>上面代码中，转换后的 ES5 版本清楚地说明了，箭头函数里面根本没有自己的this，而是引用外层的this。</p>
                <p>请问下面的代码之中有几个this？</p>
                <p>function foo() {</p>
                <p>    return () => {</p>
                <p>        return () => {</p>
                <p>            return () => {</p>
                <p>                console.log('id:', this.id);</p>
                <p>            };</p>
                <p>        };</p>
                <p>    };</p>
                <p>}</p>
                <p>var f = foo.call({id: 1});</p>
                <p>var t1 = f.call({id: 2})()(); // id: 1</p>
                <p>var t2 = f().call({id: 3})(); // id: 1</p>
                <p>var t3 = f()().call({id: 4}); // id: 1</p>
                <p>上面代码之中，只有一个this，就是函数foo的this，所以t1、t2、t3都输出同样的结果。因为所有的内层函数都是箭头函数，都没有自己的this，它们的this其实都是最外层foo函数的this。</p>
                <p>除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。</p>
                <p>function foo() {</p>
                <p>    setTimeout(() => {</p>
                <p>        console.log('args:', arguments);</p>
                <p>    }, 100);</p>
                <p>}</p>
                <p>foo(2, 4, 6, 8)</p>
                <p>// args: [2, 4, 6, 8]</p>
                <p>上面代码中，箭头函数内部的变量arguments，其实是函数foo的arguments变量。</p>
                <p>另外，由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。</p>
                <p>(function() {</p>
                <p>    return [</p>
                <p>        (() => this.x).bind({ x: 'inner' })()</p>
                <p>    ];</p>
                <p>}).call({ x: 'outer' });</p>
                <p>// ['outer']</p>
                <p>上面代码中，箭头函数没有自己的this，所以bind方法无效，内部的this指向外部的this。</p>
                <p>长期以来，JavaScript 语言的this对象一直是一个令人头痛的问题，在对象方法中使用this，必须非常小心。箭头函数”绑定”this，很大程度上解决了这个困扰。</p>
                <p>不适用场合</p>
                <p>由于箭头函数使得this从“动态”变成“静态”，下面两个场合不应该使用箭头函数。</p>
                <p>第一个场合是定义函数的方法，且该方法内部包括this。</p>
                <p>const cat = {</p>
                <p>    lives: 9,</p>
                <p>    jumps: () => {</p>
                <p>        this.lives--;</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，cat.jumps()方法是一个箭头函数，这是错误的。调用cat.jumps()时，如果是普通函数，该方法内部的this指向cat；如果写成上面那样的箭头函数，使得this指向全局对象，因此不会得到预期结果。</p>
                <p>第二个场合是需要动态this的时候，也不应使用箭头函数。</p>
                <p>var button = document.getElementById('press');</p>
                <p>button.addEventListener('click', () => {</p>
                <p>    this.classList.toggle('on');</p>
                <p>});</p>
                <p>上面代码运行时，点击按钮会报错，因为button的监听函数是一个箭头函数，导致里面的this就是全局对象。如果改成普通函数，this就会动态指向被点击的按钮对象。</p>
                <p>另外，如果函数体很复杂，有许多行，或者函数内部有大量的读写操作，不单纯是为了计算值，这时也不应该使用箭头函数，而是要使用普通函数，这样可以提高代码可读性。</p>
                <p>嵌套的箭头函数</p>
                <p>箭头函数内部，还可以再使用箭头函数。下面是一个 ES5 语法的多重嵌套函数。</p>
                <p>function insert(value) {</p>
                <p>    return {into: function (array) {</p>
                <p>        return {after: function (afterValue) {</p>
                <p>            array.splice(array.indexOf(afterValue) + 1, 0, value);</p>
                <p>            return array;</p>
                <p>        }};</p>
                <p>    }};</p>
                <p>}</p>
                <p>insert(2).into([1, 3]).after(1); //[1, 2, 3]</p>
                <p>上面这个函数，可以使用箭头函数改写。</p>
                <p>let insert = (value) => ({into: (array) => ({after: (afterValue) => {</p>
                <p>    array.splice(array.indexOf(afterValue) + 1, 0, value);</p>
                <p>    return array;</p>
                <p>}})});</p>
                <p>insert(2).into([1, 3]).after(1); //[1, 2, 3]</p>
                <p>下面是一个部署管道机制（pipeline）的例子，即前一个函数的输出是后一个函数的输入。</p>
                <p>const pipeline = (...funcs) =></p>
                <p>    val => funcs.reduce((a, b) => b(a), val);</p>
                <p>const plus1 = a => a + 1;</p>
                <p>const mult2 = a => a * 2;</p>
                <p>const addThenMult = pipeline(plus1, mult2);</p>
                <p>addThenMult(5)</p>
                <p>// 12</p>
                <p>如果觉得上面的写法可读性比较差，也可以采用下面的写法。</p>
                <p>const plus1 = a => a + 1;</p>
                <p>const mult2 = a => a * 2;</p>
                <p>mult2(plus1(5))</p>
                <p>// 12</p>
                <p>箭头函数还有一个功能，就是可以很方便地改写 λ 演算。</p>
                <p>// λ演算的写法</p>
                <p>fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))</p>
                <p>// ES6的写法</p>
                <p>var fix = f => (x => f(v => x(x)(v)))</p>
                <p>                             (x => f(v => x(x)(v)));</p>
                <p>上面两种写法，几乎是一一对应的。由于 λ 演算对于计算机科学非常重要，这使得我们可以用 ES6 作为替代工具，探索计算机科学。</p>
                <p>双冒号运算符</p>
                <p>箭头函数可以绑定this对象，大大减少了显式绑定this对象的写法（call、apply、bind）。但是，箭头函数并不适用于所有场合，所以现在有一个提案，提出了“函数绑定”（function bind）运算符，用来取代call、apply、bind调用。</p>
                <p>函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。</p>
                <p>foo::bar;</p>
                <p>// 等同于</p>
                <p>bar.bind(foo);</p>
                <p>foo::bar(...arguments);</p>
                <p>// 等同于</p>
                <p>bar.apply(foo, arguments);</p>
                <p>const hasOwnProperty = Object.prototype.hasOwnProperty;</p>
                <p>function hasOwn(obj, key) {</p>
                <p>    return obj::hasOwnProperty(key);</p>
                <p>}</p>
                <p>如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。</p>
                <p>var method = obj::obj.foo;</p>
                <p>// 等同于</p>
                <p>var method = ::obj.foo;</p>
                <p>let log = ::console.log;</p>
                <p>// 等同于</p>
                <p>var log = console.log.bind(console);</p>
                <p>如果双冒号运算符的运算结果，还是一个对象，就可以采用链式写法。</p>
                <p>import { map, takeWhile, forEach } from "iterlib";</p>
                <p>getPlayers()</p>
                <p>::map(x => x.character())</p>
                <p>::takeWhile(x => x.strength > 100)</p>
                <p>::forEach(x => console.log(x));</p>
                <p>尾调用优化</p>
                <p>什么是尾调用？</p>
                <p>尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。</p>
                <p>function f(x){</p>
                <p>    return g(x);</p>
                <p>}</p>
                <p>上面代码中，函数f的最后一步是调用函数g，这就叫尾调用。</p>
                <p>以下三种情况，都不属于尾调用。</p>
                <p>// 情况一</p>
                <p>function f(x){</p>
                <p>    let y = g(x);</p>
                <p>    return y;</p>
                <p>}</p>
                <p>// 情况二</p>
                <p>function f(x){</p>
                <p>    return g(x) + 1;</p>
                <p>}</p>
                <p>// 情况三</p>
                <p>function f(x){</p>
                <p>    g(x);</p>
                <p>}</p>
                <p>上面代码中，情况一是调用函数g之后，还有赋值操作，所以不属于尾调用，即使语义完全一样。情况二也属于调用后还有操作，即使写在一行内。情况三等同于下面的代码。</p>
                <p>function f(x){</p>
                <p>    g(x);</p>
                <p>    return undefined;</p>
                <p>}</p>
                <p>尾调用不一定出现在函数尾部，只要是最后一步操作即可。</p>
                <p>function f(x) {</p>
                <p>    if (x > 0) {</p>
                <p>        return m(x)</p>
                <p>    }</p>
                <p>    return n(x);</p>
                <p>}</p>
                <p>上面代码中，函数m和n都属于尾调用，因为它们都是函数f的最后一步操作。</p>
                <p>尾调用优化</p>
                <p>尾调用之所以与其他调用不同，就在于它的特殊的调用位置。</p>
                <p>我们知道，函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。</p>
                <p>尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。</p>
                <p>function f() {</p>
                <p>    let m = 1;</p>
                <p>    let n = 2;</p>
                <p>    return g(m + n);</p>
                <p>}</p>
                <p>f();</p>
                <p>// 等同于</p>
                <p>function f() {</p>
                <p>    return g(3);</p>
                <p>}</p>
                <p>f();</p>
                <p>// 等同于</p>
                <p>g(3);</p>
                <p>上面代码中，如果函数g不是尾调用，函数f就需要保存内部变量m和n的值、g的调用位置等信息。但由于调用g之后，函数f就结束了，所以执行到最后一步，完全可以删除f(x)的调用帧，只保留g(3)的调用帧。</p>
                <p>这就叫做“尾调用优化”（Tail call optimization），即只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。</p>
                <p>注意，只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。</p>
                <p>function addOne(a){</p>
                <p>    var one = 1;</p>
                <p>    function inner(b){</p>
                <p>        return b + one;</p>
                <p>    }</p>
                <p>    return inner(a);</p>
                <p>}</p>
                <p>上面的函数不会进行尾调用优化，因为内层函数inner用到了外层函数addOne的内部变量one。</p>
                <p>尾递归</p>
                <p>函数调用自身，称为递归。如果尾调用自身，就称为尾递归。</p>
                <p>递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。</p>
                <p>function factorial(n) {</p>
                <p>    if (n === 1) return 1;</p>
                <p>    return n * factorial(n - 1);</p>
                <p>}</p>
                <p>factorial(5) // 120</p>
                <p>上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。</p>
                <p>如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。</p>
                <p>function factorial(n, total) {</p>
                <p>    if (n === 1) return total;</p>
                <p>    return factorial(n - 1, n * total);</p>
                <p>}</p>
                <p>factorial(5, 1) // 120</p>
                <p>还有一个比较著名的例子，就是计算 Fibonacci 数列，也能充分说明尾递归优化的重要性。</p>
                <p>非尾递归的 Fibonacci 数列实现如下。</p>
                <p>function Fibonacci (n) {</p>
                <p>    if ( n <= 1 ) {return 1};</p>
                <p>    return Fibonacci(n - 1) + Fibonacci(n - 2);</p>
                <p>}</p>
                <p>Fibonacci(10) // 89</p>
                <p>Fibonacci(100) // 堆栈溢出</p>
                <p>Fibonacci(500) // 堆栈溢出</p>
                <p>尾递归优化过的 Fibonacci 数列实现如下。</p>
                <p>function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {</p>
                <p>    if( n <= 1 ) {return ac2};</p>
                <p>    return Fibonacci2 (n - 1, ac2, ac1 + ac2);</p>
                <p>}</p>
                <p>Fibonacci2(100) // 573147844013817200000</p>
                <p>Fibonacci2(1000) // 7.0330367711422765e+208</p>
                <p>Fibonacci2(10000) // Infinity</p>
                <p>由此可见，“尾调用优化”对递归操作意义重大，所以一些函数式编程语言将其写入了语言规格。ES6 亦是如此，第一次明确规定，所有 ECMAScript 的实现，都必须部署“尾调用优化”。这就是说，ES6 中只要使用尾递归，就不会发生栈溢出，相对节省内存。</p>
                <p>递归函数的改写</p>
                <p>尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。比如上面的例子，阶乘函数 factorial 需要用到一个中间变量total，那就把这个中间变量改写成函数的参数。这样做的缺点就是不太直观，第一眼很难看出来，为什么计算5的阶乘，需要传入两个参数5和1？</p>
                <p>两个方法可以解决这个问题。方法一是在尾递归函数之外，再提供一个正常形式的函数。</p>
                <p>function tailFactorial(n, total) {</p>
                <p>    if (n === 1) return total;</p>
                <p>    return tailFactorial(n - 1, n * total);</p>
                <p>}</p>
                <p>function factorial(n) {</p>
                <p>    return tailFactorial(n, 1);</p>
                <p>}</p>
                <p>factorial(5) // 120</p>
                <p>上面代码通过一个正常形式的阶乘函数factorial，调用尾递归函数tailFactorial，看起来就正常多了。</p>
                <p>函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化。</p>
                <p>function currying(fn, n) {</p>
                <p>    return function (m) {</p>
                <p>        return fn.call(this, m, n);</p>
                <p>    };</p>
                <p>}</p>
                <p>function tailFactorial(n, total) {</p>
                <p>    if (n === 1) return total;</p>
                <p>    return tailFactorial(n - 1, n * total);</p>
                <p>}</p>
                <p>const factorial = currying(tailFactorial, 1);</p>
                <p>factorial(5) // 120</p>
                <p>上面代码通过柯里化，将尾递归函数tailFactorial变为只接受一个参数的factorial。</p>
                <p>第二种方法就简单多了，就是采用 ES6 的函数默认值。</p>
                <p>function factorial(n, total = 1) {</p>
                <p>    if (n === 1) return total;</p>
                <p>    return factorial(n - 1, n * total);</p>
                <p>}</p>
                <p>factorial(5) // 120</p>
                <p>上面代码中，参数total有默认值1，所以调用时不用提供这个值。</p>
                <p>总结一下，递归本质上是一种循环操作。纯粹的函数式编程语言没有循环操作命令，所有的循环都用递归实现，这就是为什么尾递归对这些语言极其重要。对于其他支持“尾调用优化”的语言（比如 Lua，ES6），只需要知道循环可以用递归代替，而一旦使用递归，就最好使用尾递归。</p>
                <p>严格模式</p>
                <p>ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。</p>
                <p>这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。</p>
                <p>func.arguments：返回调用时函数的参数。</p>
                <p>func.caller：返回调用当前函数的那个函数。</p>
                <p>尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。</p>
                <p>function restricted() {</p>
                <p>    'use strict';</p>
                <p>    restricted.caller;        // 报错</p>
                <p>    restricted.arguments; // 报错</p>
                <p>}</p>
                <p>restricted();</p>
                <p>尾递归优化的实现</p>
                <p>尾递归优化只在严格模式下生效，那么正常模式下，或者那些不支持该功能的环境中，有没有办法也使用尾递归优化呢？回答是可以的，就是自己实现尾递归优化。</p>
                <p>它的原理非常简单。尾递归之所以需要优化，原因是调用栈太多，造成溢出，那么只要减少调用栈，就不会溢出。怎么做可以减少调用栈呢？就是采用“循环”换掉“递归”。</p>
                <p>下面是一个正常的递归函数。</p>
                <p>function sum(x, y) {</p>
                <p>    if (y > 0) {</p>
                <p>        return sum(x + 1, y - 1);</p>
                <p>    } else {</p>
                <p>        return x;</p>
                <p>    }</p>
                <p>}</p>
                <p>sum(1, 100000)</p>
                <p>// Uncaught RangeError: Maximum call stack size exceeded(…)</p>
                <p>上面代码中，sum是一个递归函数，参数x是需要累加的值，参数y控制递归次数。一旦指定sum递归 100000 次，就会报错，提示超出调用栈的最大次数。</p>
                <p>蹦床函数（trampoline）可以将递归执行转为循环执行。</p>
                <p>function trampoline(f) {</p>
                <p>    while (f && f instanceof Function) {</p>
                <p>        f = f();</p>
                <p>    }</p>
                <p>    return f;</p>
                <p>}</p>
                <p>上面就是蹦床函数的一个实现，它接受一个函数f作为参数。只要f执行后返回一个函数，就继续执行。注意，这里是返回一个函数，然后执行该函数，而不是函数里面调用函数，这样就避免了递归执行，从而就消除了调用栈过大的问题。</p>
                <p>然后，要做的就是将原来的递归函数，改写为每一步返回另一个函数。</p>
                <p>function sum(x, y) {</p>
                <p>    if (y > 0) {</p>
                <p>        return sum.bind(null, x + 1, y - 1);</p>
                <p>    } else {</p>
                <p>        return x;</p>
                <p>    }</p>
                <p>}</p>
                <p>上面代码中，sum函数的每次执行，都会返回自身的另一个版本。</p>
                <p>现在，使用蹦床函数执行sum，就不会发生调用栈溢出。</p>
                <p>trampoline(sum(1, 100000))</p>
                <p>// 100001</p>
                <p>蹦床函数并不是真正的尾递归优化，下面的实现才是。</p>
                <p>function tco(f) {</p>
                <p>    var value;</p>
                <p>    var active = false;</p>
                <p>    var accumulated = [];</p>
                <p>    return function accumulator() {</p>
                <p>        accumulated.push(arguments);</p>
                <p>        if (!active) {</p>
                <p>            active = true;</p>
                <p>            while (accumulated.length) {</p>
                <p>                value = f.apply(this, accumulated.shift());</p>
                <p>            }</p>
                <p>            active = false;</p>
                <p>            return value;</p>
                <p>        }</p>
                <p>    };</p>
                <p>}</p>
                <p>var sum = tco(function(x, y) {</p>
                <p>    if (y > 0) {</p>
                <p>        return sum(x + 1, y - 1)</p>
                <p>    }</p>
                <p>    else {</p>
                <p>        return x</p>
                <p>    }</p>
                <p>});</p>
                <p>sum(1, 100000)</p>
                <p>// 100001</p>
                <p>上面代码中，tco函数是尾递归优化的实现，它的奥妙就在于状态变量active。默认情况下，这个变量是不激活的。一旦进入尾递归优化的过程，这个变量就激活了。然后，每一轮递归sum返回的都是undefined，所以就避免了递归执行；而accumulated数组存放每一轮sum执行的参数，总是有值的，这就保证了accumulator函数内部的while循环总是会执行。这样就很巧妙地将“递归”改成了“循环”，而后一轮的参数会取代前一轮的参数，保证了调用栈只有一层。</p>
                <p>函数参数的尾逗号</p>
                <p>ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。</p>
                <p>此前，函数定义和调用时，都不允许最后一个参数后面出现逗号。</p>
                <p>function clownsEverywhere(</p>
                <p>    param1,</p>
                <p>    param2</p>
                <p>) { /* ... */ }</p>
                <p>clownsEverywhere(</p>
                <p>    'foo',</p>
                <p>    'bar'</p>
                <p>);</p>
                <p>上面代码中，如果在param2或bar后面加一个逗号，就会报错。</p>
                <p>如果像上面这样，将参数写成多行（即每个参数占据一行），以后修改代码的时候，想为函数clownsEverywhere添加第三个参数，或者调整参数的次序，就势必要在原来最后一个参数后面添加一个逗号。这对于版本管理系统来说，就会显示添加逗号的那一行也发生了变动。这看上去有点冗余，因此新的语法允许定义和调用时，尾部直接有一个逗号。</p>
                <p>function clownsEverywhere(</p>
                <p>    param1,</p>
                <p>    param2,</p>
                <p>) { /* ... */ }</p>
                <p>clownsEverywhere(</p>
                <p>    'foo',</p>
                <p>    'bar',</p>
                <p>);
                <p>这样的规定也使得，函数参数与数组和对象的尾逗号规则，保持一致了。</p>
                <p>ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。</p>
                <script type="text/js">
                    function log(x, y) {
                        y = y || 'World';
                        console.log(x, y);
                    }
                    log('Hello') // Hello World
                    log('Hello', 'China') // Hello China
                    log('Hello', '') // Hello World
                    if (typeof y === 'undefined') { y = 'World'; }
                </script>
                <p>上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。</p>
                <p>这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。</p>
                <p>就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。</p>
                <p>为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。</p>
                <p>ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。</p>
                <script type="text/js">
                    function log(x, y = 'World') { console.log(x, y); }
                    log('Hello') // Hello World
                    log('Hello', 'China') // Hello China
                    log('Hello', '') // Hello
                    // 可以看到，ES6 的写法比 ES5 简洁许多，而且非常自然。
                    function Point(x = 0, y = 0) {
                        this.x = x;
                        this.y = y;
                    }
                    const p = new Point();
                    p // { x: 0, y: 0 }
                </script>
                <p>除了简洁，ES6 的写法还有两个好处：</p>
                <p>首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；</p>
                <p>其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。</p>
                <p>参数变量是默认声明的，所以不能用let或const再次声明。</p>
                <script type="text/js">
                    function foo(x = 5) {
                        let x = 1; // error
                        const x = 2; // error
                    }
                    // 参数变量x是默认声明的，在函数体中，不能用let或const再次声明，否则会报错。
                </script>
                <p>使用参数默认值时，函数不能有同名参数。</p>
                <script type="text/js">
                    // 不报错
                    function foo(x, x, y) {
                        // ...
                    }
                    // 报错
                    function foo(x, x, y = 1) {
                        // ...
                    }
                    // SyntaxError: Duplicate parameter name not allowed in this context
                </script>
                <p>另外，一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。</p>
                <p>也就是说，参数默认值是惰性求值的。</p>
                <script type="text/js">
                    let x = 99;
                    function foo(p = x + 1) { console.log(p); }
                    foo() // 100
                    x = 100;
                    foo() // 101
                    // 参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">函数参数基本用法</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">扩展运算符</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p>
                <script type="text/js">
                    console.log(...[1, 2, 3])
                    // 1 2 3
                    console.log(1, ...[2, 3, 4], 5)
                    // 1 2 3 4 5
                    [...document.querySelectorAll('div')]
                    // [<div>, <div>, <div>]
                    function push(array, ...items) { array.push(...items); }
                    function add(x, y) { return x + y; }
                    const numbers = [4, 38];
                    add(...numbers) // 42
                    // 该运算符将一个数组，变为参数序列。
                </script>
                <p>扩展运算符与正常的函数参数可以结合使用，非常灵活。</p>
                <script type="text/js">
                    function f(v, w, x, y, z) { }
                    const args = [0, 1];
                    f(-1, ...args, 2, ...[3]);
                </script>
                <p>扩展运算符后面还可以放置表达式。</p>
                <script type="text/js">
                    const arr = [ ...(x > 0 ? ['a'] : []), 'b', ];
                    // 如果扩展运算符后面是一个空数组，则不产生任何效果。
                    [...[], 1]
                    // [1]
                </script>
                <p>注意，扩展运算符如果放在括号中，JavaScript 引擎就会认为这是函数调用。如果这时不是函数调用，就会报错。</p>
                <script type="text/js">
                    (...[1, 2]) // Uncaught SyntaxError: Unexpected number
                    console.log((...[1, 2])) // Uncaught SyntaxError: Unexpected number
                    console.log(...[1, 2]) // 1 2
                </script>
                <p>上面前两种情况都会报错，因为扩展运算符所在的括号不是函数调用。</p>
                <p>替代函数的 apply 方法</p>
                <p>由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            // ES5 的写法
                            function f(x, y, z) { }
                            var args = [0, 1, 2];
                            f.apply(null, args);
                            // ES5 的写法
                            Math.max.apply(null, [14, 3, 77])
                            // 由于 JavaScript 不提供求数组最大元素的函数，所以只能套用Math.max函数
                            // 将数组转为一个参数序列，然后求最大值。
                            // ES5的 写法
                            var arr1 = [0, 1, 2];
                            var arr2 = [3, 4, 5];
                            Array.prototype.push.apply(arr1, arr2);
                            // ES5
                            new (Date.bind.apply(Date, [null, 2015, 1, 1]))
                        </script>
                    </Col>
                    <Col span="12">
                        <script type="text/js">
                            // ES6的写法
                            function f(x, y, z) { }
                            let args = [0, 1, 2];
                            f(...args);
                            // ES6 的写法
                            Math.max(...[14, 3, 77])
                            // 等同于
                            Math.max(14, 3, 77);
                            // ES6 的写法
                            let arr1 = [0, 1, 2];
                            let arr2 = [3, 4, 5];
                            arr1.push(...arr2);
                            // ES6
                            new Date(...[2015, 1, 1]);
                        </script>
                    </Col>
                </Row>
                <p>扩展运算符的应用</p>
                <ul>
                    <li>（1）复制数组
                        <p>数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的<span class="text-info">引用位置</span>，而不是克隆一个全新的数组。</p>
                        <pre>const a1 = [1, 2]; const a2 = a1; a2[0] = 2; a1 // [2, 2]</pre>
                        <p>a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。</p>
                        <pre>const a1 = [1, 2]; const a2 = a1.concat(); a2[0] = 2; a1 // [1, 2]</pre>
                        <p>a1会返回原数组的克隆，再修改a2就不会对a1产生影响。</p>
                        <pre>const a1 = [1, 2]; const a2 = [...a1]; const [...a3] = a1;</pre>
                        <p>扩展运算符提供了复制数组的简便写法。a2a3都是a1的克隆。</p>
                        <li>（2）合并数组
                        <pre>const arr1 = ['a', 'b']; const arr2 = ['c']; const arr3 = ['d', 'e'];</pre>
                        <p>扩展运算符提供了数组合并的新写法。</p>
                        <pre>arr1.concat(arr2, arr3); // ES5 的合并数组 // [ 'a', 'b', 'c', 'd', 'e' ]</pre>
                        <pre>[...arr1, ...arr2, ...arr3] // ES6 的合并数组 // [ 'a', 'b', 'c', 'd', 'e' ]</pre>
                        <p>不过，这两种方法都是浅拷贝，使用的时候需要注意。</p>
                        <p>如果修改了原数组的成员，会同步反映到新数组。</p>
                    </li>
                    <li>（3）与解构赋值结合
                        <p>扩展运算符可以与解构赋值结合起来，用于生成数组。</p>
                        <pre>a = list[0], rest = list.slice(1) // ES5</pre>
                        <pre>[a, ...rest] = list // ES6</pre>
                        <script type="text/js">
                            const [first, ...rest] = [1, 2, 3, 4, 5];
                            first // 1
                            rest // [2, 3, 4, 5]
                            const [first, ...rest] = [];
                            first // undefined
                            rest // []
                            const [first, ...rest] = ["foo"];
                            first // "foo"
                            rest // []
                            const [...butLast, last] = [1, 2, 3, 4, 5];
                            // 报错 // 只能放在参数的最后一位，否则会报错。
                            const [first, ...middle, last] = [1, 2, 3, 4, 5];
                            // 报错
                        </script>
                    </li>
                    <li>（4）字符串
                        <p>扩展运算符还可以将字符串转为真正的数组。</p>
                        <pre>[...'hello'] // [ "h", "e", "l", "l", "o" ]</pre>
                        <p>上面的写法，有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符。</p>
                        <pre>'x\uD83D\uDE80y'.length + [...'x\uD83D\uDE80y'].length // 4 + 3</pre>
                        <p>JavaScript 会将四个字节的 Unicode 字符，识别为 2 个字符，采用扩展运算符就没有这个问题。</p>
                        <pre>function (str) { return [...str].length; }('x\uD83D\uDE80y') // 3</pre>
                        <p>凡是涉及到操作四个字节的 Unicode 字符的函数，都有这个问题。</p>
                        <pre>let str = 'x\uD83D\uDE80y'; str.split('').reverse().join('') // 'y\uDE80\uD83Dx'</pre>
                        <pre>[...str].reverse().join('') // 'y\uD83D\uDE80x' 如果不用扩展运算符，字符串的reverse操作就不正确。</pre>
                    </li>
                    <li>（5）实现了 Iterator 接口的对象
                        <p>任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组。</p>
                        <pre>let nodeList = document.querySelectorAll('div'); let array = [...nodeList];</pre>
                        <p>querySelectorAll方法返回的是一个NodeList对象。它不是数组，而是一个类似数组的对象。</p>
                        <p>这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了 Iterator 。</p>
                        <script type="text/js">
                            // 定义了Number对象的遍历器接口
                            Number.prototype[Symbol.iterator] = function*() {
                                let i = 0;
                                let num = this.valueOf();
                                while (i < num) { yield i++; }
                            }
                            console.log([...5]) // [0, 1, 2, 3, 4]
                        </script>
                        <p>对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。</p>
                        <script type="text/js">
                            let arrayLike = { '0': 'a', '1': 'b', '2': 'c', length: 3 };
                            // TypeError: Cannot spread non-iterable object.
                            let arr = [...arrayLike];
                        </script>
                        <p>没有部署 Iterator 接口，扩展运算符就会报错。</p>
                        <p>但是这时，可以改为使用Array.from方法将arrayLike转为真正的数组。</p>
                    </li>
                    <li>（6）Map 和 Set 结构，Generator 函数
                        <p>只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。</p>
                        <script type="text/js">
                            let map = new Map([ [1, 'one'], [2, 'two'], [3, 'three'], ]);
                            let arr = [...map.keys()]; // [1, 2, 3]
                        </script>
                        <p>Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。</p>
                        <script type="text/js">
                            const go = function*(){ yield 1; yield 2; yield 3; };
                            [...go()] // [1, 2, 3]
                        </script>
                        <p>如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错。</p>
                        <script type="text/js">
                            const obj = {a: 1, b: 2};
                            let arr = [...obj]; // TypeError: Cannot spread non-iterable object
                        </script>
                    </li>
                </ul>
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
