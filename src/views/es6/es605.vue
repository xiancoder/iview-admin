<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">二进制和八进制表示法</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。</p>
                <Row :gutter="20">
                    <Col span="12">
                        <script type="text/js">
                            0b111110111 === 503 // true
                            0o767 === 503 // true
                            // 从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示
                            // ES6 进一步明确，要使用前缀0o表示。
                            // 非严格模式
                            (function(){
                                console.log(0o11 === 011); // true
                            })()
                            // 严格模式
                            (function(){
                                'use strict';
                                console.log(0o11 === 011); // Uncaught SyntaxError: Octal literals are not allowed in strict mode.
                            })()
                        </script>
                    </Col>
                    <Col span="12">
                        <p>如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。</p>
                        <script type="text/js">
                            Number('0b111') // 7
                            Number('0o10') // 8
                        </script>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <p>ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。</p>
                        <p>Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。</p>
                        <p>注意，如果参数类型不是数值，Number.isFinite一律返回false。</p>
                        <script type="text/js">
                            Number.isFinite(15); // true
                            Number.isFinite(0.8); // true
                            Number.isFinite(NaN); // false
                            Number.isFinite(Infinity); // false
                            Number.isFinite(-Infinity); // false
                            Number.isFinite('foo'); // false
                            Number.isFinite('15'); // false
                            Number.isFinite(true); // false
                        </script>
                        <p>Number.isNaN()用来检查一个值是否为NaN。</p>
                        <p>如果参数类型不是NaN，Number.isNaN一律返回false。</p>
                        <script type="text/js">
                            Number.isNaN(NaN) // true
                            Number.isNaN(15) // false
                            Number.isNaN('15') // false
                            Number.isNaN(true) // false
                            Number.isNaN(9/NaN) // true
                            Number.isNaN('true' / 0) // true
                            Number.isNaN('true' / 'true') // true
                        </script>
                    </Col>
                    <Col span="12">
                        <p>它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。</p>
                        <script type="text/js">
                            isFinite(25) // true
                            isFinite("25") // true
                            Number.isFinite(25) // true
                            Number.isFinite("25") // false
                            isNaN(NaN) // true
                            isNaN("NaN") // true
                            Number.isNaN(NaN) // true
                            Number.isNaN("NaN") // false
                            Number.isNaN(1) // false
                            Number.parseInt(), Number.parseFloat()
                        </script>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <p>ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。</p>
                        <script type="text/js">
                            // ES5的写法
                            parseInt('12.34') // 12
                            parseFloat('123.45#') // 123.45
                            // ES6的写法
                            Number.parseInt('12.34') // 12
                            Number.parseFloat('123.45#') // 123.45
                        </script>
                    </Col>
                    <Col span="12">
                        <p>这样做的目的，<b class="bg-danger">是逐步减少全局性方法</b class="bg-danger">，使得语言逐步模块化。</p>
                        <script type="text/js">
                            Number.parseInt === parseInt // true
                            Number.parseFloat === parseFloat // true
                        </script>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <p>Number.isInteger() // 用来判断一个数值是否为整数。</p>
                        <script type="text/js">
                            Number.isInteger(25) // true
                            Number.isInteger(25.1) // false
                            // JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
                            Number.isInteger(25) // true
                            Number.isInteger(25.0) // true
                            // 如果参数不是数值，Number.isInteger返回false。
                            Number.isInteger() // false
                            Number.isInteger(null) // false
                            Number.isInteger('15') // false
                            Number.isInteger(true) // false
                        </script>
                        <p>注意，由于 JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。</p>
                        <p>如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判。</p>
                        <script type="text/js">
                            Number.isInteger(3.0000000000000002) // true
                        </script>
                        <p>上面代码中，Number.isInteger的参数明明不是整数，但是会返回true。</p>
                        <p>原因就是这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。</p>
                        <p>类似的情况还有，如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0。</p>
                        <p>这时，Number.isInteger也会误判。</p>
                        <script type="text/js">
                            Number.isInteger(5E-324) // false
                            Number.isInteger(5E-325) // true
                        </script>
                        <p>上面代码中，5E-325由于值太小，会被自动转为0，因此返回true。</p>
                        <p>总之，如果对数据精度的要求较高，不建议使用Number.isInteger()判断一个数值是否为整数。</p>
                    </Col>
                    <Col span="12">
                        <p>Number.EPSILON</p>
                        <p>ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。</p>
                        <p>对于 64 位浮点数来说，大于 1 的最小浮点数相当于二进制的1.00..001，小数点后面有连续 51 个零。这个值减去 1 之后，就等于 2 的 -52 次方。</p>
                        <script type="text/js">
                            Number.EPSILON === Math.pow(2, -52) // true
                            Number.EPSILON // 2.220446049250313e-16
                            Number.EPSILON.toFixed(20) // "0.00000000000000022204"
                        </script>
                        <p>Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。</p>
                        <p>引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。</p>
                        <script type="text/js">
                            0.1 + 0.2 // 0.30000000000000004
                            0.1 + 0.2 - 0.3 // 5.551115123125783e-17
                            5.551115123125783e-17.toFixed(20) // '0.00000000000000005551'
                        </script>
                        <p>上面代码解释了，为什么比较0.1 + 0.2与0.3得到的结果是false。</p>
                        <script type="text/js">
                            0.1 + 0.2 === 0.3 // false
                        </script>
                        <p>Number.EPSILON可以用来设置“能够接受的误差范围”。</p>
                        <p>比如，误差范围设为 2 的-50 次方（即Number.EPSILON * Math.pow(2, 2)），即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。</p>
                        <script type="text/js">
                            5.551115123125783e-17 < Number.EPSILON * Math.pow(2, 2) // true
                        </script>
                        <p>因此，Number.EPSILON的实质是一个可以接受的最小误差范围。</p>
                        <script type="text/js">
                            function withinErrorMargin (left, right) {
                                return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
                            }
                            0.1 + 0.2 === 0.3 // false
                            withinErrorMargin(0.1 + 0.2, 0.3) // true
                            1.1 + 1.3 === 2.4 // false
                            withinErrorMargin(1.1 + 1.3, 2.4) // true
                        </script>
                        <p>上面的代码为浮点数运算，部署了一个误差检查函数。</p>
                        <script type="text/js">
                        </script>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <p>安全整数和 Number.isSafeInteger()</p>
                        <p>JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。</p>
                        <script type="text/js">
                            Math.pow(2, 53) // 9007199254740992
                            9007199254740992 // 9007199254740992
                            9007199254740993 // 9007199254740992
                            Math.pow(2, 53) === Math.pow(2, 53) + 1 // true
                        </script>
                        <p>上面代码中，超出 2 的 53 次方之后，一个数就不精确了。</p>
                        <p>ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。</p>
                        <script type="text/js">
                            Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1 // true
                            Number.MAX_SAFE_INTEGER === 9007199254740991 // true
                            Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER // true
                            Number.MIN_SAFE_INTEGER === -9007199254740991 // true
                        </script>
                        <p>上面代码中，可以看到 JavaScript 能够精确表示的极限。</p>
                        <p>Number.isSafeInteger() 则是用来判断一个整数是否落在这个范围之内。</p>
                        <script type="text/js">
                            Number.isSafeInteger('a') // false
                            Number.isSafeInteger(null) // false
                            Number.isSafeInteger(NaN) // false
                            Number.isSafeInteger(Infinity) // false
                            Number.isSafeInteger(-Infinity) // false
                            Number.isSafeInteger(3) // true
                            Number.isSafeInteger(1.2) // false
                            Number.isSafeInteger(9007199254740990) // true
                            Number.isSafeInteger(9007199254740992) // false
                            Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
                            Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
                            Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
                            Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false
                        </script>
                        <p>这个函数的实现很简单，就是跟安全整数的两个边界值比较一下。</p>
                        <script type="text/js">
                            Number.isSafeInteger = function (n) {
                                return (typeof n === 'number' &&
                                    Math.round(n) === n &&
                                    Number.MIN_SAFE_INTEGER <= n &&
                                    n <= Number.MAX_SAFE_INTEGER);
                            }
                        </script>
                    </Col>
                    <Col span="12">
                        <p>实际使用这个函数时，需要注意。验证运算结果是否落在安全整数的范围内，不要只验证运算结果，而要同时验证参与运算的每个值。</p>
                        <script type="text/js">
                            Number.isSafeInteger(9007199254740993) // false
                            Number.isSafeInteger(990) // true
                            Number.isSafeInteger(9007199254740993 - 990) // true
                            9007199254740993 - 990 // 返回结果 9007199254740002
                            // 正确答案应该是 9007199254740003
                        </script>
                        <p>上面代码中，9007199254740993不是一个安全整数，但是Number.isSafeInteger会返回结果，显示计算结果是安全的。</p>
                        <p>这是因为，这个数超出了精度范围，导致在计算机内部，以9007199254740992的形式储存。</p>
                        <script type="text/js">
                            9007199254740993 === 9007199254740992 // true
                        </script>
                        <p>所以，如果只验证运算结果是否为安全整数，很可能得到错误结果。下面的函数可以同时验证两个运算数和运算结果。</p>
                        <script type="text/js">
                            function trusty (left, right, result) {
                                if (
                                    Number.isSafeInteger(left) &&
                                    Number.isSafeInteger(right) &&
                                    Number.isSafeInteger(result)
                                ) {
                                    return result;
                                }
                                throw new RangeError('Operation cannot be trusted!');
                            }
                            trusty(9007199254740993, 990, 9007199254740993 - 990) // RangeError: Operation cannot be trusted!
                            trusty(1, 2, 3) // 3
                        </script>
                    </Col>
                </Row>
                <Row :gutter="20">
                    <Col span="12">
                        <p>Math 对象的扩展</p>
                        <p>ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用。</p>
                    </Col>
                    <Col span="12">
                        <p>Math.trunc 方法用于去除一个数的小数部分，返回整数部分。</p>
                        <script type="text/js">
                            Math.trunc(4.1) // 4
                            Math.trunc(4.9) // 4
                            Math.trunc(-4.1) // -4
                            Math.trunc(-4.9) // -4
                            Math.trunc(-0.1234) // -0
                        </script>
                        <p>对于非数值，Math.trunc内部使用Number方法将其先转为数值。</p>
                        <script type="text/js">
                            Math.trunc('123.456') // 123
                            Math.trunc(true) //1
                            Math.trunc(false) // 0
                            Math.trunc(null) // 0
                        </script>
                        <p>对于空值和无法截取整数的值，返回NaN。</p>
                        <script type="text/js">
                            Math.trunc(NaN); // NaN
                            Math.trunc('foo'); // NaN
                            Math.trunc(); // NaN
                            Math.trunc(undefined) // NaN
                        </script>
                        <p>对于没有部署这个方法的环境，可以用下面的代码模拟。</p>
                        <script type="text/js">
                            Math.trunc = Math.trunc || function(x) {
                                return x < 0 ? Math.ceil(x) : Math.floor(x);
                            };
                        </script>
                    </Col>
                    <Col span="12">
                        <p>Math.sign 方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。</p>
                        <p>它会返回五种值。参数为正数，返回+1； 参数为负数，返回-1； 参数为 0，返回0； 参数为-0，返回-0; 其他值，返回NaN。</p>
                        <script type="text/js">
                            Math.sign(-5) // -1
                            Math.sign(5) // +1
                            Math.sign(0) // +0
                            Math.sign(-0) // -0
                            Math.sign(NaN) // NaN
                        </script>
                        <p>如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。</p>
                        <script type="text/js">
                            Math.sign('') // 0
                            Math.sign(true) // +1
                            Math.sign(false) // 0
                            Math.sign(null) // 0
                            Math.sign('9') // +1
                            Math.sign('foo') // NaN
                            Math.sign() // NaN
                            Math.sign(undefined) // NaN
                        </script>
                        <p>对于没有部署这个方法的环境，可以用下面的代码模拟。</p>
                        <script type="text/js">
                            Math.sign = Math.sign || function(x) {
                                x = +x; // convert to a number
                                if (x === 0 || isNaN(x)) { return x; }
                                return x > 0 ? 1 : -1;
                            };
                        </script>
                    </Col>
                    <Col span="12">
                        <p>Math.cbrt 方法用于计算一个数的立方根。</p>
                        <script type="text/js">
                            Math.cbrt(-1) // -1
                            Math.cbrt(0) // 0
                            Math.cbrt(1) // 1
                            Math.cbrt(2) // 1.2599210498948734
                        </script>
                        <p>对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。</p>
                        <script type="text/js">
                            Math.cbrt('8') // 2
                            Math.cbrt('hello') // NaN
                        </script>
                        <p>对于没有部署这个方法的环境，可以用下面的代码模拟。</p>
                        <script type="text/js">
                            Math.cbrt = Math.cbrt || function(x) {
                                var y = Math.pow(Math.abs(x), 1/3);
                                return x < 0 ? -y : y;
                            };
                        </script>
                    </Col>
                    <Col span="12">
                        <p>Math.clz32() 方法将参数转为 32 位无符号整数的形式，然后这个 32 位值里面有多少个前导 0。</p>
                        <script type="text/js">
                            Math.clz32(0) // 32
                            Math.clz32(1) // 31
                            Math.clz32(1000) // 22
                            Math.clz32(0b01000000000000000000000000000000) // 1
                            Math.clz32(0b00100000000000000000000000000000) // 2
                        </script>
                        <p>上面代码中，0 的二进制形式全为 0，所以有 32 个前导 0；1 的二进制形式是0b1，只占 1 位，所以 32 位之中有 31 个前导 0；1000 的二进制形式是0b1111101000，一共有 10 位，所以 32 位之中有 22 个前导 0。</p>
                        <p>clz32这个函数名就来自”count leading zero bits in 32-bit binary representation of a number“（计算一个数的 32 位二进制形式的前导 0 的个数）的缩写。</p>
                        <p>左移运算符（&lt;&lt;）与Math.clz32方法直接相关。</p>
                        <script type="text/js">
                            Math.clz32(0) // 32
                            Math.clz32(1) // 31
                            Math.clz32(1 << 1) // 30
                            Math.clz32(1 << 2) // 29
                            Math.clz32(1 << 29) // 2
                        </script>
                        <p>对于小数，Math.clz32方法只考虑整数部分。</p>
                        <script type="text/js">
                            Math.clz32(3.2) // 30
                            Math.clz32(3.9) // 30
                        </script>
                        <p>对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算。</p>
                        <script type="text/js">
                            Math.clz32() // 32
                            Math.clz32(NaN) // 32
                            Math.clz32(Infinity) // 32
                            Math.clz32(null) // 32
                            Math.clz32('foo') // 32
                            Math.clz32([]) // 32
                            Math.clz32({}) // 32
                            Math.clz32(true) // 31
                        </script>
                    </Col>
                    <Col span="12">
                        <p>Math.imul 方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。</p>
                        <script type="text/js">
                            Math.imul(2, 4) // 8
                            Math.imul(-1, 8) // -8
                            Math.imul(-2, -2) // 4
                        </script>
                        <p>如果只考虑最后 32 位，大多数情况下，Math.imul(a, b)与a * b的结果是相同的，即该方法等同于(a * b)|0的效果（超过 32 位的部分溢出）。之所以需要部署这个方法，是因为 JavaScript 有精度限制，超过 2 的 53 次方的值无法精确表示。这就是说，对于那些很大的数的乘法，低位数值往往都是不精确的，Math.imul方法可以返回正确的低位数值。</p>
                        <script type="text/js">
                            (0x7fffffff * 0x7fffffff)|0 // 0
                        </script>
                        <p>上面这个乘法算式，返回结果为 0。但是由于这两个二进制数的最低位都是 1，所以这个结果肯定是不正确的，因为根据二进制乘法，计算结果的二进制最低位应该也是 1。这个错误就是因为它们的乘积超过了 2 的 53 次方，JavaScript 无法保存额外的精度，就把低位的值都变成了 0。Math.imul方法可以返回正确的值 1。</p>
                        <script type="text/js">
                            Math.imul(0x7fffffff, 0x7fffffff) // 1
                        </script>
                    </Col>
                    <Col span="12">
                        <p>Math.fround 方法返回一个数的32位单精度浮点数形式。</p>
                        <p>对于32位单精度格式来说，数值精度是24个二进制位（1 位隐藏位与 23 位有效位），所以对于 -224 至 224 之间的整数（不含两个端点），返回结果与参数本身一致。</p>
                        <script type="text/js">
                            Math.fround(0) // 0
                            Math.fround(1) // 1
                            Math.fround(2 ** 24 - 1) // 16777215
                        </script>
                        <p>如果参数的绝对值大于 224，返回的结果便开始丢失精度。</p>
                        <script type="text/js">
                            Math.fround(2 ** 24)             // 16777216
                            Math.fround(2 ** 24 + 1)     // 16777216
                        </script>
                        <p>Math.fround方法的主要作用，是将64位双精度浮点数转为32位单精度浮点数。</p>
                        <p>如果小数的精度超过24个二进制位，返回值就会不同于原值，否则返回值不变（即与64位双精度值一致）。</p>
                        <script type="text/js">
                            // 未丢失有效精度
                            Math.fround(1.125) // 1.125
                            Math.fround(7.25) // 7.25
                            // 丢失精度
                            Math.fround(0.3) // 0.30000001192092896
                            Math.fround(0.7) // 0.699999988079071
                            Math.fround(1.0000000123) // 1
                        </script>
                        <p>对于 NaN 和 Infinity，此方法返回原值。对于其它类型的非数值，Math.fround 方法会先将其转为数值，再返回单精度浮点数。</p>
                        <script type="text/js">
                            Math.fround(NaN) // NaN
                            Math.fround(Infinity) // Infinity
                            Math.fround('5') // 5
                            Math.fround(true) // 1
                            Math.fround(null) // 0
                            Math.fround([]) // 0
                            Math.fround({}) // NaN
                        </script>
                        <p>对于没有部署这个方法的环境，可以用下面的代码模拟。</p>
                        <script type="text/js">
                            Math.fround = Math.fround || function (x) {
                                return new Float32Array([x])[0];
                            };
                        </script>
                    </Col>
                    <Col span="12">
                        <p>Math.hypot 方法返回所有参数的平方和的平方根。</p>
                        <script type="text/js">
                            Math.hypot(3, 4); // 5
                            Math.hypot(3, 4, 5); // 7.0710678118654755
                            Math.hypot(); // 0
                            Math.hypot(NaN); // NaN
                            Math.hypot(3, 4, 'foo'); // NaN
                            Math.hypot(3, 4, '5'); // 7.0710678118654755
                            Math.hypot(-3); // 3
                        </script>
                        <p>上面代码中，3 的平方加上 4 的平方，等于 5 的平方。</p>
                        <p>如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。</p>
                    </Col>
                    <Col span="12">
                        <p>对数相关方法。</p>
                        <p>（1） Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。</p>
                        <script type="text/js">
                            Math.expm1(-1) // -0.6321205588285577
                            Math.expm1(0) // 0
                            Math.expm1(1) // 1.718281828459045
                        </script>
                        <p>对于没有部署这个方法的环境，可以用下面的代码模拟。</p>
                        <script type="text/js">
                            Math.expm1 = Math.expm1 || function(x) {
                                return Math.exp(x) - 1;
                            };
                        </script>
                    </Col>
                    <Col span="12">
                        <p>对数相关方法。</p>
                        <p>（2）Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。</p>
                        <script type="text/js">
                            Math.log1p(1) // 0.6931471805599453
                            Math.log1p(0) // 0
                            Math.log1p(-1) // -Infinity
                            Math.log1p(-2) // NaN
                        </script>
                        <p>对于没有部署这个方法的环境，可以用下面的代码模拟。</p>
                        <script type="text/js">
                            Math.log1p = Math.log1p || function(x) {
                                return Math.log(1 + x);
                            };
                        </script>
                    </Col>
                    <Col span="12">
                        <p>对数相关方法。</p>
                        <p>（3）Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。</p>
                        <script type="text/js">
                            Math.log10(2) // 0.3010299956639812
                            Math.log10(1) // 0
                            Math.log10(0) // -Infinity
                            Math.log10(-2) // NaN
                            Math.log10(100000) // 5
                        </script>
                        <p>对于没有部署这个方法的环境，可以用下面的代码模拟。</p>
                        <script type="text/js">
                            Math.log10 = Math.log10 || function(x) {
                                return Math.log(x) / Math.LN10;
                            };
                        </script>
                    </Col>
                    <Col span="12">
                        <p>对数相关方法。</p>
                        <p>（4）Math.log2(x) 返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。</p>
                        <script type="text/js">
                            Math.log2(3) // 1.584962500721156
                            Math.log2(2) // 1
                            Math.log2(1) // 0
                            Math.log2(0) // -Infinity
                            Math.log2(-2) // NaN
                            Math.log2(1024) // 10
                            Math.log2(1 << 29) // 29
                        </script>
                        <p>对于没有部署这个方法的环境，可以用下面的代码模拟。</p>
                        <script type="text/js">
                            Math.log2 = Math.log2 || function(x) {
                                return Math.log(x) / Math.LN2;
                            };
                        </script>
                    </Col>
                    <Col span="12">
                        <p>双曲函数方法</p>
                        <p>ES6 新增了 6 个双曲函数方法。</p>
                        <p>Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）</p>
                        <p>Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）</p>
                        <p>Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）</p>
                        <p>Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）</p>
                        <p>Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）</p>
                        <p>Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）</p>
                    </Col>
                    <Col span="12">
                        <p>指数运算符</p>
                        <p>ES2016 新增了一个指数运算符（**）。</p>
                        <script type="text/js">
                            2 ** 2 // 4
                            2 ** 3 // 8
                            这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。
                            // 相当于 2 ** (3 ** 2)
                            2 ** 3 ** 2
                            // 512
                            上面代码中，首先计算的是第二个指数运算符，而不是第一个。
                            指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。
                            let a = 1.5;
                            a **= 2;
                            // 等同于 a = a * a;
                            let b = 4;
                            b **= 3;
                            // 等同于 b = b * b * b;
                            注意，V8 引擎的指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。
                            Math.pow(99, 99)
                            // 3.697296376497263e+197
                            99 ** 99
                            // 3.697296376497268e+197
                            上面代码中，两个运算结果的最后一位有效数字是有差异的。
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
