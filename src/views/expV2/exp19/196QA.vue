<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">VUE 知识点（面试题）为你保驾护航</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p class="text-danger">你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解</p>
                <p class="text-info"></p>
                <p></p>
                <p class="text-danger">从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织</p>
                <p class="text-info">前端的项目目前来看主要分为小程序开发，H5页面开发、PC官网、后台管理系统开发、Native开发。不同的项目所涉及的知识点和环境不太一样，但是很多方面是相通的。</p>
                <p class="text-info">小程序 由于框架限定在Vue，所以这里指的是使用mpvue、WePY来开发小程序项目。</p>
                <p class="text-info">H5页面 这里主要是指微信页面、Webview中的H5页面开发</p>
                <p class="text-info">PC官网 为什么单独划出来是因为官方的开发主要是用来展示企业信息、产品，对交互、体验有一定的要求，会有一些炫酷的动画效果。还有就是官网有可能需要采用SSR（比如Vue的Nuxt.js）来做，来确定良好的SEO。</p>
                <p class="text-info">后台管理系统 后台管理系统主要功能在于数据的配置、权限的控制、数据报表的展示、日志功能等。通常又叫CMS，OA。</p>
                <p class="text-info">Native开发 这个通常就是指用前端技术去开PC应用、APP应用，比如Weex, Electron。</p>
                <p class="text-info">通吃型 比如uni-app， 可以一套代码编译成不同的平台源码。</p>
                <p></p>
                <p class="text-danger">你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解</p>
                <p class="text-info">期初vue用的jade模板，后来是 mustache，模板引擎的初衷是解决早期的字符模板拼接的问题，也是因这些方面的慢慢的发展壮大。</p>
                <p class="text-info">Vue使用了Mustache语法，代表就是双大括号的语法。</p>
                <p></p>
                <p class="text-danger">在使用计算属性的时，函数名和data数据源中的数据可以同名吗？</p>
                <p class="text-danger">vue中data的属性可以和methods中的方法同名吗？为什么？</p>
                <p class="text-info">不可以，同名会报错：The computed property "xxxx" is already defined in data</p>
                <p class="text-info">不能同名 因为不管是计算属性还是data还是props 都会被挂载在vm实例上，因此 这三个都不能同名</p>
                <p></p>
                <p class="text-danger">怎么给vue定义全局的方法？</p>
                <p class="text-info">第一种：挂载到Vue的prototype上。把全局方法写到一个文件里面，然后for循环挂载到Vue的prototype上，缺点是调用这个方法的时候没有提示</p>
                <p class="text-info">第二种：利用全局混入mixin，因为mixin里面的methods会和创建的每个单文件组件合并。这样做的优点是调用这个方法的时候有提示</p>
                <p></p>
                <p class="text-danger">使用vue后怎么针对搜索引擎做SEO优化？</p>
                <p class="text-info">1.SSR服务器渲染； vue官方推荐nuxt.js</p>
                <p class="text-info">2.静态化；</p>
                <p class="text-info">3.预渲染prerender-spa-plugin；</p>
                <p class="text-info">4.使用Phantomjs针对爬虫做处理。</p>
                <p></p>
                <p class="text-danger">你有看过vue推荐的风格指南吗？列举出你知道的几条</p>
                <p>优先级A的规则：必要的 （规避错误）</p>
                <p> - 组件名为多个单词</p>
                <p> - 组件数据：组件的 data 必须是一个函数。</p>
                <p> - 细致的 Prop 定义 组件的prop尽可能描述的越详细越好</p>
                <p> - 总是用 :key 配合 v-for</p>
                <p> - 避免 v-if 和 v-for 用在一起</p>
                <p> - 为组件样式设置作用域scoped</p>
                <p> - 私有属性名：自定义私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。</p>
                <p>优先级B的规则：强烈推荐 （增强可读性）</p>
                <p> - 组件文件：只要有能够拼接文件的构建系统，就把每个组件单独分成文件。</p>
                <p> - 单文件组件文件的大小写：要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。</p>
                <p> - 基础组件名：应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。 </p>
                <p> - 单例组件名：只拥有单个活跃实例（每个页面只使用一次）的组件应该以 The 前缀命名，以示其唯一性。 </p>
                <p> - 紧密耦合的组件名：和父组件紧密耦合的子组件应该以父组件名作为前缀命名。 </p>
                <p> - 组件名中的单词顺序：组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。 </p>
                <p> - 自闭合组件：在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。 </p>
                <p> - 模版中的组件名大小写：在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。 </p>
                <p> - JS / JSX 中的组件名大小写：JS/JSX 中的组件名应该始终是 PascalCase 的，在较为简单的应用中只使用 Vue.component 进行全局组件注册时，可以使用 kebab-case 字符串。 </p>
                <p> - 完整单词的组件名 </p>
                <p> - Prop 名大小写：在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。 </p>                 <p> - 多个特性的元素：多个特性的元素应该分多行撰写，每个特性一行。 </p>
                <p> - 模板中简单的表达式：组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。 </p>
                <p> - 简单的计算属性 </p>
                <p> - 带引号的特性值：非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。 </p>
                <p> - 指令缩写：指令缩写 (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:) 应该要么都用要么都不用。 </p>
                <p>优先级C的规则：推荐 （将选择和认知成本最小化） </p>
                <p> - 组件 / 实例的选项的顺序 </p>
                <p> - 元素特性的顺序 </p>
                <p> - 组件 / 实例选项中的空行：在多个属性之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。 </p>
                <p> - 单文件组件的顶级元素的顺序：总是让script、template 和 style 标签的顺序保持一致。且 style 要放在最后，因为另外两个标签至少要有一个。 </p>
                <p>优先级D的规则：谨慎使用 （有潜在危险的模式） </p>
                <p> - 没有在 v-if / v-else-if / v-else 中使用 key </p>
                <p> - 元素选择器应该避免在 scoped 中出现。 </p>
                <p> - 隐性的父子组件通信：应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。</p>
                <p> - 非 Flux 的全局状态管理：应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。</p>
                <p></p>
                <p class="text-danger">你知道vue中key的原理吗？说说你对它的理解</p>
                <p class="text-info">作用的话，便于diff算法的更新，key的唯一性，能让算法更快的找到需要更新的dom，需要注意的是，key要唯一，不然会出现很隐蔽性的更新问题。</p>
                <p></p>
                <p class="text-danger">vue中怎么重置data</p>
                <p class="text-info">使用Object.assign()，vm.$data可以获取当前状态下的data，vm.$options.data可以获取到组件初始化状态下的data，具体可以看vm.$options。</p>
                <p class="text-info">比如，有一个表单，表单提交成功后，希望组件恢复到初始状态，重置data数据。</p>
                <p></p>
                <p class="text-danger">vue渲染模板时怎么保留模板中的HTML注释呢</p>
                <p class="text-info">template comments 或者  import... export default{ comments: true, ... }</p>
                <p></p>
                <p class="text-danger">watch的属性用箭头函数定义结果会怎么样</p>
                <p class="text-danger">在vue项目中如果methods的方法用箭头函数定义结果会怎么样</p>
                <p class="text-info">this是undefined，要更改的属性会报TypeError错误, Cannot read property 'xxx' of undefined</p>
                <p class="text-info">因为箭头函数默绑定父级作用域的上下文，所以不会绑定vue实例，所以 this 是undefind</p>
                <p></p>
                <p class="text-danger">你知道style加scoped属性的用途和原理吗</p>
                <p class="text-info">在标签上绑定了自定义属性，防止css全局污染</p>
                <p class="text-info">但是很多时候使用ui框架如果加scope就不能覆盖，这个时候一般写sass 会在最外层包裹该组件名的id 就可以不使用scoped 了</p>
                <p></p>
                <p class="text-danger">如何在子组件中访问父组件的实例</p>
                <p class="text-info">1：直接在子组件中通过this.$parent.event来调用父组件的方法</p>
                <p class="text-info">2：在子组件里用$emit向父组件触发一个事件，父组件监听这个事件</p>
                <p class="text-info">3：父组件把方法传入子组件中，在子组件里直接调用这个方法</p>
                <p></p>
                <p class="text-danger">vue怎么实现强制刷新组件</p>
                <p class="text-info">强制重新渲染</p>
                <p>this.$forceUpdate()</p>
                <p class="text-info">强制重新刷新某组件</p>
                <p>//模版上绑定key</p>
                <p>SomeComponent :key="theKey"/></p>
                <p>//选项里绑定data</p>
                <p>data(){ return{ theKey:0 } }</p>
                <p>//刷新key达到刷新组件的目的</p>
                <p>theKey++;</p>
                <p></p>
                <p class="text-danger">说说你对vue的表单修饰符.lazy的理解</p>
                <p class="text-info">input标签v-model用lazy修饰之后，vue并不会立即监听input Value的改变，会在input失去焦点之后，才会触发input Value的改变</p>
                <p></p>
                <p class="text-danger">vue组件里的定时器要怎么销毁</p>
                <p>肯定要销毁，一方面是绑定多次，另一方面是函数没释放会内存溢出</p>
                <p class="text-info">const timer = setInterval(() =>{ /* 某些定时器操作*/ }, 500);</p>
                <p class="text-info">通过$once来监听定时器，在beforeDestroy钩子可以被清除。</p>
                <p class="text-info">this.$once('hook:beforeDestroy', () => { clearInterval(timer); })</p>
                <p></p>
                <p class="text-danger">vue的is这个特性你有用过吗？主要用在哪些方面？</p>
                <p class="text-info">vue中is的属性引入是为了解决dom结构中对放入html的元素有限制的问题</p>
                <p class="text-info">[ul][li is='my-component'][/li][/ul]</p>
                <p></p>
                <p class="text-danger">说说你对provide和inject的理解</p>
                <p class="text-info">通过在父组件中inject一些数据然后再所有子组件中都可以通过provide获取使用该参数,</p>
                <p>主要是为了解决一些循环组件比如tree, menu, list等, 传参困难, 并且难以管理的问题, 主要用于组件封装, 常见于一些ui组件库</p>
                <p></p>
                <p class="text-danger"></p>
                <p class="text-info"></p>
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
