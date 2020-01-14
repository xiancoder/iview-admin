<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">正则的扩展</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>在 ES5 中，RegExp构造函数的参数有两种情况。</p>
                <script type="text/js">
                    var regex = new RegExp('xyz', 'i');
                    // 参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）。
                    // 等价于 var regex = /xyz/i;
                    var regex = new RegExp(/xyz/i);
                    // 参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。
                    // 等价于 var regex = /xyz/i;
                    var regex = new RegExp(/xyz/, 'i');
                    // 但是，ES5 不允许此时使用第二个参数添加修饰符，否则会报错。
                    // Uncaught TypeError: Cannot supply flags when constructing one RegExp from another
                </script>
                <p><b>ES6 改变了这种行为。</b>如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。</p>
                <p>而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。</p>
                <script type="text/js">
                    new RegExp(/abc/ig, 'i').flags
                    // 原有正则对象的修饰符是ig，它会被第二个参数i覆盖。
                    // "i"
                </script>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">字符串的正则方法</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <Row :gutter="20">
                    <Col span="8">
                        <p>字符串对象共有 4 个方法，可以使用正则表达式</p>
                        <p>match()、replace()、search()和split()。</p>
                        <p>ES6 将这 4 个方法，在语言内部全部调用RegExp的实例方法。</p>
                    </Col>
                    <Col span="16">
                        <script type="text/js">
                            String.prototype.match 调用 RegExp.prototype[Symbol.match]
                            String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
                            String.prototype.search 调用 RegExp.prototype[Symbol.search]
                            String.prototype.split 调用 RegExp.prototype[Symbol.split]
                        </script>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">u 修饰符</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>u 修饰符</p>
                <p>ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”</p>
                <p>用来正确处理大于\uFFFF的 Unicode 字符。</p>
                <p>也就是说，会正确处理四个字节的 UTF-16 编码。</p>
                <script type="text/js">
                    /^\uD83D/u.test('\uD83D\uDC2A') // false
                    /^\uD83D/.test('\uD83D\uDC2A') // true
                </script>
                <p>上面代码中，\uD83D\uDC2A是一个四个字节的 UTF-16 编码，代表一个字符。</p>
                <p>但是，ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符，导致第二行代码结果为true。</p>
                <p>加了u修饰符以后，ES6 就会识别其为一个字符，所以第一行代码结果为false。</p>
                <p>Unicode 字符表示法</p>
                <p>ES6 新增了使用大括号表示 Unicode 字符，这种表示法在正则表达式中必须加上u修饰符，才能识别当中的大括号，否则会被解读为量词。</p>
                <script type="text/js">
                    /\u{61}/.test('a') // false
                    /\u{61}/u.test('a') // true
                    /\u{20BB7}/u.test('𠮷') // true
                </script>
                <p>如果不加u修饰符，正则表达式无法识别\u{61}这种表示法，只会认为这匹配 61 个连续的u。</p>
                <p>预定义模式</p>
                <p>u修饰符也影响到预定义模式，能否正确识别码点大于0xFFFF的 Unicode 字符。</p>
                <script type="text/js">
                    /^\S$/.test('𠮷') // false
                    /^\S$/u.test('𠮷') // true
                </script>
                <p>\S是预定义模式，匹配所有非空白字符。只有加了u修饰符，它才能正确匹配码点大于0xFFFF的 Unicode 字符。</p>
                <p>利用这一点，可以写出一个正确返回字符串长度的函数。</p>
                <script type="text/js">
                    function codePointLength(text) {
                        var result = text.match(/[\s\S]/gu);
                        return result ? result.length : 0;
                    }
                    var s = '𠮷𠮷';
                    s.length // 4
                    codePointLength(s) // 2
                </script>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">点字符</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。</p>
                <p>对于码点大于0xFFFF的 Unicode 字符，点字符不能识别，必须加上u修饰符。</p>
                <p>var s = '𠮷';</p>
                <script type="text/js">
                    /^.$/.test(s) // false
                    /^.$/u.test(s) // true
                </script>
                <p>如果不添加u修饰符，正则表达式就会认为字符串为两个字符，从而匹配失败。</p>
                <p>量词</p>
                <p>使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符。</p>
                <script type="text/js">
                    /a{2}/.test('aa') // true
                    /a{2}/u.test('aa') // true
                    /𠮷{2}/.test('𠮷𠮷') // false
                    /𠮷{2}/u.test('𠮷𠮷') // true
                </script>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">i 修饰符</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>有些 Unicode 字符的编码不同，但是字型很相近，比如，\u004B与\u212A都是大写的K。</p>
                <script type="text/js">
                    /[a-z]/i.test('\u212A') // false
                    /[a-z]/iu.test('\u212A') // true
                </script>
                <p>上面代码中，不加u修饰符，就无法识别非规范的K字符。</p>
                <p>RegExp.prototype.unicode 属性</p>
                <p>正则实例对象新增unicode属性，表示是否设置了u修饰符。</p>
                <script type="text/js">
                    const r1 = /hello/;
                    const r2 = /hello/u;
                    r1.unicode // false
                    r2.unicode // true
                </script>
                <p>上面代码中，正则表达式是否设置了u修饰符，可以从unicode属性看出来。</p>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">y 修饰符</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>除了u修饰符，ES6 还为正则表达式添加了y修饰符，叫做“粘连”（sticky）修饰符。</p>
                <p>y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。</p>
                <script type="text/js">
                    var s = 'aaa_aa_a';
                    var r1 = /a+/g;
                    var r2 = /a+/y;
                    r1.exec(s) // ["aaa"]
                    r2.exec(s) // ["aaa"]
                    r1.exec(s) // ["aa"]
                    r2.exec(s) // null
                </script>
                <p>上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符。这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是_aa_a。由于g修饰没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配必须从头部开始，所以返回null。</p>
                <p>如果改一下正则表达式，保证每次都能头部匹配，y修饰符就会返回结果了。</p>
                <script type="text/js">
                    var s = 'aaa_aa_a';
                    var r = /a+_/y;
                    r.exec(s) // ["aaa_"]
                    r.exec(s) // ["aa_"]
                </script>
                <p>上面代码每次匹配，都是从剩余字符串的头部开始。</p>
                <p>使用lastIndex属性，可以更好地说明y修饰符。</p>
                <script type="text/js">
                    const REGEX = /a/g;
                    // 指定从2号位置（y）开始匹配
                    REGEX.lastIndex = 2;
                    // 匹配成功
                    const match = REGEX.exec('xaya');
                    // 在3号位置匹配成功
                    match.index // 3
                    // 下一次匹配从4号位开始
                    REGEX.lastIndex // 4
                    // 4号位开始匹配失败
                    REGEX.exec('xaya') // null
                </script>
                <p>上面代码中，lastIndex属性指定每次搜索的开始位置，g修饰符从这个位置开始向后搜索，直到发现匹配为止。</p>
                <p>y修饰符同样遵守lastIndex属性，但是要求必须在lastIndex指定的位置发现匹配。</p>
                <script type="text/js">
                    const REGEX = /a/y;
                    // 指定从2号位置开始匹配
                    REGEX.lastIndex = 2;
                    // 不是粘连，匹配失败
                    REGEX.exec('xaya') // null
                    // 指定从3号位置开始匹配
                    REGEX.lastIndex = 3;
                    // 3号位置是粘连，匹配成功
                    const match = REGEX.exec('xaya');
                    match.index // 3
                    REGEX.lastIndex // 4
                </script>
                <p>实际上，y修饰符号隐含了头部匹配的标志^。</p>
                <script type="text/js">
                    /b/y.exec('aba') // null
                </script>
                <p>上面代码由于不能保证头部匹配，所以返回null。y修饰符的设计本意，就是让头部匹配的标志^在全局匹配中都有效。</p>
                <p>下面是字符串对象的replace方法的例子。</p>
                <script type="text/js">
                    const REGEX = /a/gy;
                    'aaxa'.replace(REGEX, '-') // '--xa'
                </script>
                <p>上面代码中，最后一个a因为不是出现在下一次匹配的头部，所以不会被替换。</p>
                <p>单单一个y修饰符对match方法，只能返回第一个匹配，必须与g修饰符联用，才能返回所有匹配。</p>
                <script type="text/js">
                    'a1a2a3'.match(/a\d/y) // ["a1"]
                    'a1a2a3'.match(/a\d/gy) // ["a1", "a2", "a3"]
                </script>
                <p>y修饰符的一个应用，是从字符串提取 token（词元），y修饰符确保了匹配之间不会有漏掉的字符。</p>
                <script type="text/js">
                    const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
                    const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;
                    tokenize(TOKEN_Y, '3 + 4')
                    // [ '3', '+', '4' ]
                    tokenize(TOKEN_G, '3 + 4')
                    // [ '3', '+', '4' ]
                    function tokenize(TOKEN_REGEX, str) {
                        let result = [];
                        let match;
                        while (match = TOKEN_REGEX.exec(str)) {
                            result.push(match[1]);
                        }
                        return result;
                    }
                </script>
                <p>上面代码中，如果字符串里面没有非法字符，y修饰符与g修饰符的提取结果是一样的。</p>
                <p>但是，一旦出现非法字符，两者的行为就不一样了。</p>
                <script type="text/js">
                    tokenize(TOKEN_Y, '3x + 4')
                    // [ '3' ]
                    tokenize(TOKEN_G, '3x + 4')
                    // [ '3', '+', '4' ]
                </script>
                <p>上面代码中，g修饰符会忽略非法字符，而y修饰符不会，这样就很容易发现错误。</p>
                <p>RegExp.prototype.sticky 属性</p>
                <p>与y修饰符相匹配，ES6 的正则实例对象多了sticky属性，表示是否设置了y修饰符。</p>
                <script type="text/js">
                    var r = /hello\d/y;
                    r.sticky // true
                </script>
                <p>RegExp.prototype.flags 属性</p>
                <p>ES6 为正则表达式新增了flags属性，会返回正则表达式的修饰符。</p>
                <script type="text/js">
                    // ES5 的 source 属性
                    // 返回正则表达式的正文
                    /abc/ig.source
                    // "abc"
                    // ES6 的 flags 属性
                    // 返回正则表达式的修饰符
                    /abc/ig.flags
                    // 'gi'
                </script>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">s 修饰符：dotAll 模式</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是有两个例外。一个是四个字节的 UTF-16 字符，这个可以用u修饰符解决；另一个是行终止符（line terminator character）。</p>
                <p>所谓行终止符，就是该字符表示一行的终结。以下四个字符属于“行终止符”。</p>
                <p>U+000A 换行符（\n）</p>
                <p>U+000D 回车符（\r）</p>
                <p>U+2028 行分隔符（line separator）</p>
                <p>U+2029 段分隔符（paragraph separator）</p>
                <script type="text/js">
                    /foo.bar/.test('foo\nbar')
                    // false
                </script>
                <p>上面代码中，因为.不匹配\n，所以正则表达式返回false。</p>
                <p>但是，很多时候我们希望匹配的是任意单个字符，这时有一种变通的写法。</p>
                <script type="text/js">
                    /foo[^]bar/.test('foo\nbar')
                    // true
                </script>
                <p>这种解决方案毕竟不太符合直觉，ES2018 引入s修饰符，使得.可以匹配任意单个字符。</p>
                <script type="text/js">
                    /foo.bar/s.test('foo\nbar') // true
                </script>
                <p>这被称为dotAll模式，即点（dot）代表一切字符。</p>
                <p>所以，正则表达式还引入了一个dotAll属性，返回一个布尔值，表示该正则表达式是否处在dotAll模式。</p>
                <script type="text/js">
                    const re = /foo.bar/s;
                    // 另一种写法
                    // const re = new RegExp('foo.bar', 's');
                    re.test('foo\nbar') // true
                    re.dotAll // true
                    re.flags // 's'
                </script>
                <p>/s修饰符和多行修饰符/m不冲突，两者一起使用的情况下，.匹配所有字符，而^和$匹配每一行的行首和行尾。</p>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">后行断言</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>JavaScript 语言的正则表达式，只支持先行断言（lookahead）和先行否定断言（negative lookahead），</p>
                <p>不支持后行断言（lookbehind）和后行否定断言（negative lookbehind）。</p>
                <p><b>ES2018 引入后行断言</b>，V8 引擎 4.9 版（Chrome 62）已经支持。</p>
                <p>“先行断言”指的是，x只有在y前面才匹配，必须写成/x(?=y)/。</p>
                <p>比如，只匹配百分号之前的数字，要写成/\d+(?=%)/。“先行否定断言”指的是，x只有不在y前面才匹配，必须写成/x(?!y)/。</p>
                <p>比如，只匹配不在百分号之前的数字，要写成/\d+(?!%)/。</p>
                <script type="text/js">
                    /\d+(?=%)/.exec('100% of US presidents have been male')  // ["100"]
                    /\d+(?!%)/.exec('that’s all 44 of them') // ["44"]
                </script>
                <p>上面两个字符串，如果互换正则表达式，就不会得到相同结果。</p>
                <p>另外，还可以看到，“先行断言”括号之中的部分（(?=%)），是不计入返回结果的。</p>
                <p>“后行断言”正好与“先行断言”相反，x只有在y后面才匹配，必须写成/(?&lt;=y)x/。</p>
                <p>比如，只匹配美元符号之后的数字，要写成/(?&lt;=\$)\d+/。</p>
                <p>“后行否定断言”则与“先行否定断言”相反，x只有不在y后面才匹配，必须写成/(?&lt;!y)x/。</p>
                <p>比如，只匹配不在美元符号后面的数字，要写成/(?&lt;!\$)\d+/。</p>
                <script type="text/js">
                    /(?&lt;=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  // ["100"]
                    /(?&lt;!\$)\d+/.exec('it’s is worth about €90') // ["90"]
                </script>
                <p>上面的例子中，“后行断言”的括号之中的部分（(?&lt;=\$)），也是不计入返回结果。</p>
                <p>下面的例子是使用后行断言进行字符串替换。</p>
                <script type="text/js">
                    const RE_DOLLAR_PREFIX = /(?&lt;=\$)foo/g;
                    '$foo %foo foo'.replace(RE_DOLLAR_PREFIX, 'bar');
                    // '$bar %foo foo'
                </script>
                <p>上面代码中，只有在美元符号后面的foo才会被替换。</p>
                <p>“后行断言”的实现，需要先匹配/(?&lt;=y)x/的x，然后再回到左边，匹配y的部分。</p>
                <p>这种“先右后左”的执行顺序，与所有其他正则操作相反，导致了一些不符合预期的行为。</p>
                <p>首先，后行断言的组匹配，与正常情况下结果是不一样的。</p>
                <script type="text/js">
                    /(?&lt;=(\d+)(\d+))$/.exec('1053') // ["", "1", "053"]
                    /^(\d+)(\d+)$/.exec('1053') // ["1053", "105", "3"]
                </script>
                <p>上面代码中，需要捕捉两个组匹配。没有“后行断言”时，第一个括号是贪婪模式，第二个括号只能捕获一个字符，所以结果是105和3。</p>
                <p>而“后行断言”时，由于执行顺序是从右到左，第二个括号是贪婪模式，第一个括号只能捕获一个字符，所以结果是1和053。</p>
                <p>其次，“后行断言”的反斜杠引用，也与通常的顺序相反，必须放在对应的那个括号之前。</p>
                <script type="text/js">
                    /(?&lt;=(o)d\1)r/.exec('hodor')  // null
                    /(?&lt;=\1d(o))r/.exec('hodor')  // ["r", "o"]
                </script>
                <p>上面代码中，如果后行断言的反斜杠引用（\1）放在括号的后面，就不会得到匹配结果，必须放在前面才可以。</p>
                <p>因为后行断言是先从左到右扫描，发现匹配以后再回过头，从右到左完成反斜杠引用。</p>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">Unicode 属性类</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p><b>ES2018</b> 引入了一种新的类的写法\p{...}和\P{...}，允许正则表达式匹配符合 Unicode 某种属性的所有字符。</p>
                <script type="text/js">
                    const regexGreekSymbol = /\p{Script=Greek}/u;
                    regexGreekSymbol.test('π') // true
                </script>
                <p>上面代码中，\p{Script=Greek}指定匹配一个希腊文字母，所以匹配π成功。</p>
                <p>Unicode 属性类要指定属性名和属性值。</p>
                <p>\p{UnicodePropertyName=UnicodePropertyValue}</p>
                <p>对于某些属性，可以只写属性名，或者只写属性值。</p>
                <p>\p{UnicodePropertyName}</p>
                <p>\p{UnicodePropertyValue}</p>
                <p>\P{…}是\p{…}的反向匹配，即匹配不满足条件的字符。</p>
                <p>注意，这两种类只对 Unicode 有效，所以使用的时候一定要加上u修饰符。如果不加u修饰符，正则表达式使用\p和\P会报错，ECMAScript 预留了这两个类。</p>
                <p>由于 Unicode 的各种属性非常多，所以这种新的类的表达能力非常强。</p>
                <script type="text/js">
                    const regex = /^\p{Decimal_Number}+$/u;
                    regex.test('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼') // true
                </script>
                <p>上面代码中，属性类指定匹配所有十进制字符，可以看到各种字型的十进制字符都会匹配成功。</p>
                <p>\p{Number}甚至能匹配罗马数字。</p>
                <script type="text/js">
                    // 匹配所有数字
                    const regex = /^\p{Number}+$/u;
                    regex.test('²³¹¼½¾') // true
                    regex.test('㉛㉜㉝') // true
                    regex.test('ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ') // true
                </script>
                <p>下面是其他一些例子。</p>
                <script type="text/js">
                    // 匹配所有空格
                    \p{White_Space}
                    // 匹配各种文字的所有字母，等同于 Unicode 版的 \w
                    [\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]
                    // 匹配各种文字的所有非字母的字符，等同于 Unicode 版的 \W
                    [^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]
                    // 匹配 Emoji
                    /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu
                    // 匹配所有的箭头字符
                    const regexArrows = /^\p{Block=Arrows}+$/u;
                    regexArrows.test('←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩') // true
                </script>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">具名组匹配</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>简介</p>
                <p>正则表达式使用圆括号进行组匹配。</p>
                <p>const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;</p>
                <p>上面代码中，正则表达式里面有三组圆括号。使用exec方法，就可以将这三组匹配结果提取出来。</p>
                <script type="text/js">
                    const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
                    const matchObj = RE_DATE.exec('1999-12-31');
                    const year = matchObj[1]; // 1999
                    const month = matchObj[2]; // 12
                    const day = matchObj[3]; // 31
                </script>
                <p>组匹配的一个问题是，每一组的匹配含义不容易看出来，而且只能用数字序号（比如matchObj[1]）引用，要是组的顺序变了，引用的时候就必须修改序号。</p>
                <p>ES2018 引入了具名组匹配（Named Capture Groups），允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。</p>
                <script type="text/js">
                    const RE_DATE = /(?[year]\d{4})-(?[month]\d{2})-(?[day]\d{2})/;
                    const matchObj = RE_DATE.exec('1999-12-31');
                    const year = matchObj.groups.year; // 1999
                    const month = matchObj.groups.month; // 12
                    const day = matchObj.groups.day; // 31
                </script>
                [p>上面代码中，“具名组匹配”在圆括号内部，模式的头部添加“问号 + 尖括号 + 组名”（?[year]），然后就可以在exec方法返回结果的groups属性上引用该组名。同时，数字序号（matchObj[1]）依然有效。</p>
                <p>具名组匹配等于为每一组匹配加上了 ID，便于描述匹配的目的。如果组的顺序变了，也不用改变匹配后的处理代码。</p>
                <p>如果具名组没有匹配，那么对应的groups对象属性会是undefined。</p>
                <script type="text/js">
                    const RE_OPT_A = /^(?[as]a+)?$/;
                    const matchObj = RE_OPT_A.exec('');
                    matchObj.groups.as // undefined
                    'as' in matchObj.groups // true
                </script>
                <p>上面代码中，具名组as没有找到匹配，那么matchObj.groups.as属性值就是undefined，并且as这个键名在groups是始终存在的。</p>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">解构赋值和替换</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>有了具名组匹配以后，可以使用解构赋值直接从匹配结果上为变量赋值。</p>
                <script type="text/js">
                    let {groups: {one, two}} = /^(?[one].*):(?[two].*)$/u.exec('foo:bar');
                    one  // foo
                    two  // bar
                </script>
                <p>字符串替换时，使用$[组名]引用具名组。</p>
                <script type="text/js">
                    let re = /(?[year]\d{4})-(?[month]\d{2})-(?[day]\d{2})/u;
                    '2015-01-02'.replace(re, '$[day]/$[month]/$[year]')
                    // '02/01/2015'
                </script>
                <p>上面代码中，replace方法的第二个参数是一个字符串，而不是正则表达式。</p>
                <p>replace方法的第二个参数也可以是函数，该函数的参数序列如下。</p>
                <script type="text/js">
                    '2015-01-02'.replace(re, (
                        matched, // 整个匹配结果 2015-01-02
                        capture1, // 第一个组匹配 2015
                        capture2, // 第二个组匹配 01
                        capture3, // 第三个组匹配 02
                        position, // 匹配开始的位置 0
                        S, // 原字符串 2015-01-02
                        groups // 具名组构成的一个对象 {year, month, day}
                     ) => {
                         let {day, month, year} = groups;
                         return `${day}/${month}/${year}`;
                    });
                </script>
                <p>具名组匹配在原来的基础上，新增了最后一个函数参数：具名组构成的一个对象。函数内部可以直接对这个对象进行解构赋值。</p>
                <p>引用</p>
                <p>如果要在正则表达式内部引用某个“具名组匹配”，可以使用\k[组名]的写法。</p>
                <script type="text/js">
                    const RE_TWICE = /^(?[word][a-z]+)!\k[word]$/;
                    RE_TWICE.test('abc!abc') // true
                    RE_TWICE.test('abc!ab') // false
                </script>
                <p>数字引用（\1）依然有效。</p>
                <script type="text/js">
                    const RE_TWICE = /^(?[word][a-z]+)!\1$/;
                    RE_TWICE.test('abc!abc') // true
                    RE_TWICE.test('abc!ab') // false
                </script>
                <p>这两种引用语法还可以同时使用。</p>
                <script type="text/js">
                    const RE_TWICE = /^(?[word][a-z]+)!\k[word]!\1$/;
                    RE_TWICE.test('abc!abc!abc') // true
                    RE_TWICE.test('abc!abc!ab') // false
                </script>
                <p>String.prototype.matchAll</p>
                <p>如果一个正则表达式在字符串里面有多个匹配，现在一般使用g修饰符或y修饰符，在循环里面逐一取出。</p>
                <script type="text/js">
                    var regex = /t(e)(st(\d?))/g;
                    var string = 'test1test2test3';
                    var matches = [];
                    var match;
                    while (match = regex.exec(string)) {
                        matches.push(match);
                    }
                </script>
                <p>matches</p>
                <script type="text/js">
                    // [
                    //     ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"],
                    //     ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"],
                    //     ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
                    // ]
                </script>
                <p>上面代码中，while循环取出每一轮的正则匹配，一共三轮。</p>
            </div>
        </div>
        <div class="blog">
            <div class="blogTitle">目前有一个提案，增加了String.prototype.matchAll方法，可以一次性取出所有匹配。</div>
            <Divider orientation="right">ES6学习</Divider>
            <div class="blogContent" v-highlight>
                <p>不过，它返回的是一个遍历器（Iterator），而不是数组。</p>
                <script type="text/js">
                    const string = 'test1test2test3';
                </script>
                <p>// g 修饰符加不加都可以</p>
                <script type="text/js">
                    const regex = /t(e)(st(\d?))/g;
                    for (const match of string.matchAll(regex)) { console.log(match); }
                    // ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
                    // ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
                    // ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
                </script>
                <p>上面代码中，由于string.matchAll(regex)返回的是遍历器，所以可以用for...of循环取出。</p>
                <p>相对于返回数组，返回遍历器的好处在于，如果匹配结果是一个很大的数组，那么遍历器比较节省资源。</p>
                <p>遍历器转为数组是非常简单的，使用...运算符和Array.from方法就可以了。</p>
                <p>// 转为数组方法一</p>
                <p>[...string.matchAll(regex)]</p>
                <p>// 转为数组方法二</p>
                <p>Array.from(string.matchAll(regex));</p>
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
