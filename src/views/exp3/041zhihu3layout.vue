<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"></div>
            <div class="blogContent" v-highlight>
                <p>我生活、工作中有很多的问题需要我去解决，使用能用 React 解决的问题，用 Vue 成本并不会变低。<b>他们都是同一时代的产品不同的解决方案而已</b>。当别人提起是 亚马逊 的商业模式正确还是 阿里巴巴 商业模式正确的时候，马云说：我希望两种模式都正确，如果世界只有一种模式，那就太无聊了。</p>
                <p>现在的程序员经常被产品经理牵着鼻子走，明明是掌握更多信息的人，反而被一些外行瞎扯淡带跑。所以，程序员想提升自己的核心竞争力，就要有产品思维。<b>简单来说就是程序员真的是要比产品经理更懂市场，更懂产品，更会好好说话，才能提升自己的核心竞争力</b>。你们膜拜的 evan you 就是这样的人。</p>
                <p>无论是 React 或者 Vue 都会像 bootstrap 或者 jq 一样，被时代抛弃。选择当下对你、对团队成本最低的一个框架或者语言，是最实际最可靠的。</p>
                <p>Vue： 我反感它无时无刻被人不严谨地放纵，不规范地 this 使用，讨厌无时无刻地翻API，以及又臭又长的Template，让人动不动就穿越到了写React</p>
                <p> React：我反感它让人有选择困难症，让人困扰地Form交互，无比繁琐地redux以及它的后辈们</p>
                <p>别总扯些具体的点，因为技术问题从来不是首要问题，<br> <b>在中国，只要最快地时间落地业务需求</b>，<b>你就是王</b></p>
                <p>React 的生态圈带给了我们 Redux（immutable 的思想，带来 hot-reloading 的用法）、react-motion（真正的 spring 动画）、react-router（经历过 Angular 1 的我：路由还可以这样写？路由还可以到处扔？）、CSS-in-JS 等等漂亮的想法，以及 Hooks、Suspense、Portal、SSR、React Native、Async Rendering，甚至 <a href="https://link.zhihu.com/?target=https%3A//github.com/DenisKolodin/yew" class=" wrap external" target="_blank" >Yew</a> 这种 “JSX in Rust”。</p>
                <p>至于你提到的无限级菜单(递归菜单)，我一直推荐使用JSX来实现，当然，你也可以不用JSX，如<a href="https://link.zhihu.com/?target=https%3A//codesandbox.io/s/jv9w650x63" class=" external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043"><span class="invisible">https://</span><span class="visible">codesandbox.io/s/jv9w65</span><span class="invisible">0x63</span><span class="ellipsis"></span></a>。</p>
                <p>PS：使用.vue单文件template写个递归组件，还要分两个文件，有什么优势？ </p>
                <p>然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，这时你可以用 **render 函数**，它比 template 更接近编译器。</p>
                <p>所以你宁愿在 **render 函数** 中使用 `createElement`，也不愿使用JSX，怪我咯！</p>
                <p>有些复杂的功能仅仅依靠template，实现起来并不是那么容易，所以有些高级功能需要使用 render/JSX。</p>
                <p><b>最后说一句，所谓的Vue简单，只是你只用到了简单的东西，或者说你只会简单的。</b></p>
                <p>作为一个资浅前端，我最开始用的是Angular4（因为和wpf很像），强大但是繁琐死板。后来去了某外国电商，开始用vuejs，hot reload简直龟速，而且难道把修改的代码自动编译一遍然后自动刷一下浏览器就叫hot reload？这是要恶心flutter吗？还是和老牌angular比创新呢。后来公司招了一个说是比较熟vue的同事，结果听她吹完vue有多好，文档有多么重要之后，第一个pr里给一个组件在props添加了一个属性，但却只修改了两处重用这个组件的一处，还好及时发现，完了甩我一个理由说是不熟悉业务。</p>
                <p>使用angular半年后，我发现了一个叫Fable的东西，天生imutable，函数式编程，elm模式，简单的类cqrs，甚至在前端都可以搞点领悟驱动设计，hot reload只需要一两秒，而且还是差异化更新，而且前后端dto模型还可以共享，类型安全...我能够意淫到的大部分前端开发的特性都有。而且我基本不需要学习什么新鲜破玩意（五花八门的模板语法，混乱的this指针，变魔术一般的约定俗成，什么slot，template…年纪大了记性不好咯），我只需要知道基本的语法，和常用的控件就可以了。</p>
                <p>我现在的状态，无论用哪个框架，开发效率都是一样的，不存在一个比另一个高效的情况</p>
                <p>但是我比较追新，我觉得 react 和 vue 都只是这个时间点的框架而已，迟早会被淘汰</p>
                <p><b>迟早会有个 ssr 友好的框架出现</b></p>
                <p>vue 是上手容易，进阶简单，精通难。react 是上手中等，进阶中等，精通难。</p>
                <p>最后，我觉得vue 可用，但至少团队里有一个人，在把 vue 全家桶源码大致了解的情况下，作为大家的后盾，并明确约定好各项规则。这个时候用没有问题。</p>
                <p>作为一个没有什么技术追求的全栈工程师，我不想别人告诉我说哪个框架多牛逼，我只想用更快更可靠的技术来完成公司老板的要求，然后早点回家</p>
                <p>由于 react 得让大家换一套思维，不像 vue 那样大家一看就明白，加之 react 对 ts 友好。所以我选择 react，就为了避免半罐水们准备不充分就开干，换人维护时各种骂。</p>
                <p>React 感觉相对硬核一点，Vue 感觉相对友好一点。Angula 相对全一点，并且集成了很多最佳实践。</p>
                <p>一个this.ajax或者this,http或者 this.message 或者this.whatever 随时都能调用一下、连导入都不需要，就很舒爽，对吧？</p>
                <p>但是this指针真的是做个用的吗？其他人读你的代码的时候能猜得出来这些东西是哪儿来的吗？IDE能猜得出来那都是些什么吗？</p>
                <p>vue 那翔一般的 ts 支持，谁敢拿来用（</p>
                <p>Vuetify：我目前商业项目中使用的主力框架，比antd要华丽，组件数量相似，易用性非常棒，整体一致性极好。文档很棒，而且有中文版文档。源码我仔细看过很多，水平很高，做得也用心。不过作者不是中国人（Vue在中国的使用率是远高于其它地区）</p><p class="ztext-empty-paragraph"><br></p>
<p>Quasar：组件极为丰富的框架，而且挺新潮Web Mobile、Mobile App、PWA都无缝支持。看知乎的时候一个知乎er推荐的，我研究了一下，真的非常赞</p><p class="ztext-empty-paragraph"><br></p>
                <p>Vux： 国内S级移动组件库，这是一款非常伟大的移动端组件库，优化深度充分，能在微信内良好兼容。作者乃真正的“无产阶级战士”！其github首页写道：“VUX 并不是大团队维护的项目，没有捐赠，纯靠热情”。而且作者也是知乎er</p><p class="ztext-empty-paragraph"><br></p>
<p>再说antd，原来在商业项目中使用过几回，也是优秀的React组件库，中国人（阿里系，严格来说是蚂蚁金服）开发，从组件交互非常贴合中国人的使用习惯。而且还在快速发展中。其实阿里系有个图表的项目，忘了叫什么了，其实也是非常NB，很推荐。在知乎很少听大家提，可能有点太专了。不过他并不是只支持react，而是无差别支持R和V（A我就没印象了）</p><p class="ztext-empty-paragraph"><br></p>
                <p>vue的生态全不全，请移步我的一个Vue资源站，全部有Demo，可以自己了解（咱不空口白牙说虚的）（这个站是我本人做的，没有广告，只为自己和朋友看着方便）</p>
                <p><a target="_blank" href="https://link.zhihu.com/?target=http%3A//vue.awesometiny.com">vue资源精选-前端组件库资源-前端选型</a></p>

                <p>知乎上很多人说React生态要强多少倍，写东西多灵活，还有什么React能实现，其它框架”力有不逮“之类的——说实话，你们真的对Vue有比较深的研究么。我自己并不敢说是专家，可是我知道Vue的API文档中的80%是大家做一般应用恐怕都还没有使用到的。所以麻烦哪位说Vue有什么需要的功能根本没办法开发，那就请举一些典型的例子吧</p>
                <p>然后再”破除一下迷信“。我在自己的商业项目中偏向使用Vue，还真是因为它使用起来简单简单。但使用简单，不代表LOW。就好象大家都知道搜索引擎使用简单，只有一个关键词搜索框，但它的背后并不简单，还很高深。</p>
                <p>有的回答说”经统计“用Vue的人一般没有后端经验，在我身上全部不中！早年我是某桶油项目后端开发，在小型机上做C开发；后来使用过VC++；后来PHP用得多（也是因为用起来简单）；python、golang都了解过一些，不能说熟悉。后端对关系数据库非常熟悉，有不错的优化能力。象WSS和Redis都有商业项目经验</p>
                <p>有些人可能会问，你是不是就是后端玩票帮点小忙的那种。呵呵，其实一个项目我做全部前后端开发的也并不少。然后呢，在我”失业前“（已经做了几年自由职业了）我其实是产品经理，说好听点是新产品负责人，在公司里会扛一个独立的新产品。是不是按某些答主的逻辑应该这么说：我认为使用Vue做主力开发的人，不但技术强，往往还懂产品——呵呵，玩笑话别当真</p>
                <p>没看问题详情前，我还以为这个问题是讨论框架本身的一些优劣势，结果只是吐槽vue的ui库。。</p>
                <p><b>桌面后台开发</b></p>
                <p>目前国内主流是element ui和Antd，说实话，这俩上限都挺低的，但容易上手，api设计也更符合国内的理解，ui设计属于没什么亮点，但大部分人也不会有意见的类型，所以流行起来也是理所当然。</p>
                <p>主流的ui库中，目前 <a href="https://link.zhihu.com/?target=https%3A//vuetifyjs.com/zh-Hans/" class=" wrap external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">vuetify.js</a> 是最好的，我曾经非常看好<a href="https://link.zhihu.com/?target=https%3A//vuematerial.io/" class=" wrap external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">vue material</a>这个库，但目前长期处于停止维护的状态，就全盘更换为vuetify.js了。</p>
                <p>这两个库均是基于material design设计的，我个人非常喜欢这个设计，这里推荐一个主题，<a href="https://link.zhihu.com/?target=http%3A//iarouse.com/dist-material-design-admin/v1.3/index.html%23%21/dashboard" class=" wrap external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">material theme</a> ，我们的所有后台系统也都是仿照这个主题设计开发的，因为这个主题是用angular开发的，所以并没有必要去购买源码。</p><p class="ztext-empty-paragraph"><br></p>
                <p><b>移动端开发</b></p>
                <p>主流应该是<a href="https://link.zhihu.com/?target=https%3A//doc.vux.li/zh-CN/" class=" wrap external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">vux</a>与<a href="https://link.zhihu.com/?target=https%3A//github.com/quasarframework/quasar" class=" wrap external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">quasar</a> ，vux的设计风格更接近微信公众号，易使用，组件比较丰富，问题还是上限太低，简陋了些。quasar可以用一套代码，同时实现material和ios两种风格，说实话，我从未见过国内的移动端设计可以适用这种情况。。</p>
                <p>我们目前移动端使用的ui库是内部开发的，能够完全匹配自身需求，维护起来也更容易，我认为有一定开发能力的团队都应该选择这种方式。</p><p class="ztext-empty-paragraph"><br></p>
                <p><b>React的生态目前确实优于Vue</b></p>
                <p>个人认为，使用react的上层开发者要更多一些，上层开发者与一般开发者的区别是有很强的产出能力，对于开发生态的好处显而易见。</p>
                <p>但是我们依然会选择vue，很多人会说其实react上手并不比vue难，但现实是vue的初学者比react投入生产确实要早很多，在开发过程中遇到的问题也会少很多。</p>
                <p>所有标准制定都是和需求对应的，对于中小型应用，要求使用TypeScript，编写单元测试等等，跟在家切个黄瓜，还一定要用双立人并没有很大区别，而市面的应用中，中小型应用占了90%以上是没有问题的。</p>
                <p>我们并非以提高前端开发者水平为义务，因为那只能是自己对自己的要求。</p>
                <p>如何让vue更加匹配上层开发者的需求是vue作者需要考虑的问题。</p>
                <p>对于题主来说，因为某个库而更换开发框架并非很罕见的事，也没必要归罪到vue的生态不行，因为对于更上层的开发者来说，根本没有可用的轮子，经常要自己开发才是常态。</p><p class="ztext-empty-paragraph"><br></p>
                <p>PS：我真的希望slatejs可以支持vue</p>
                <p>PSS: <a href="https://link.zhihu.com/?target=https%3A//github.com/heyscrumpy/tiptap" class=" wrap external" target="_blank" rel="nofollow noreferrer">tiptap</a> 看起来很好，上面那个短期不用指望了</p>
                <p></p>
                <p></p>
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
