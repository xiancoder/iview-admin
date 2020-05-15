<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">stacking context（有人翻译为层叠上下文）概念</div>
            <div class="blogContent" v-highlight>
                <Row :gutter="16">
                    <Col span="12">
                    </Col>
                    <Col span="12">
                    </Col>
                </Row>
                <p>这里涉及到一个<b class="text-danger">stacking context</b>（有人翻译为<b class="text-danger">层叠上下文</b>）的概念。</p>
                <p><strong>给元素设置<b class="text-danger">transform</b>属性会创建一个新的<b class="text-danger">stacking context</b>。</strong></p>
                <p>请看下面的具体讲解：</p>
                <p>注：以下两个例子最好先想象一下预览效果，再查看结果预览页面。</p>
                <p>先上一个小例子：</p>
                <div style="height:100px;border:1px solid red;">
                    <div style=" height: 50px; background: red; width: 400px; color: #fff;">test-1</div>
                    <div style=" height: 50px; background: green; width: 300px; color: #fff; margin-top: -10px;">test-2 ( margin-top: -10px;)</div>
                </div>
                <p>上面这个例子中，两个div都没有设置任何<b class="text-danger">position</b>，</p>
                <p>如果没有给<b class="text-danger">test-1</b>添加<b class="text-danger">transform</b>属性的话，第二个div将会覆盖第一个div。</p>
                <p>但是如果设置了<b class="text-danger">transform</b>的话呢？由于<b class="text-danger">transform</b>会创建一个新的<b class="text-danger">stacking context</b>。在层级关系上就要比<b class="text-danger">test-2</b>高一级，因此，显示在上面。</p>
                <div style="height:100px;border:1px solid red;">
                    <div style=" height: 50px; background: red; width: 300px; color: #fff;transform: translateY(1px);">test-1 (transform: translateY(1px);)</div>
                    <div style=" height: 50px; background: green; width: 400px; color: #fff; margin-top: -10px;"><br />test-2 ( margin-top: -10px;)</div>
                </div>
                <p>再来一个例子，这个例子了是对上面那个例子作了个简单的修改。</p>
                <p>我们给<b class="text-danger">test-1</b>添加了一个<b class="text-danger">position: relative</b>，<b class="text-danger">test-2</b>没有任何<b class="text-danger">position</b>属性，只是添加了一个<b class="text-danger">transform</b>的属性。</p>
                <p>如果不看预览页面的话，可能会以为<b class="text-danger">test-1</b>会显示在<b class="text-danger">test-2</b>上方，其实不然。</p>
                <div style="height:100px;border:1px solid red;">
                    <div style=" height: 50px; background: red; width: 400px; color: #fff;position: relative;transform: translateY(1px);">test-1 (transform: translateY(1px);position: relative;)</div>
                    <div style=" height: 50px; background: green; width: 300px; color: #fff; transform: translateY(-10px);">test-2 (transform: translateY(-10px);)</div>
                </div>
                <p>由于<b class="text-danger">transform</b>会创建新的<b class="text-danger">stacking context</b>，同时<b class="text-danger">test-2</b>在文档中又处于<b class="text-danger">test-1</b>的后面，所以最终的效果是<b class="text-danger">test-2</b>显示在<b class="text-danger">test-1</b>的上方。</p>
                <p><strong>那么问题来了，哪些情况下会创建新的<b class="text-danger">stacking context</b>呢？</strong></p>
                <p>MDN上有相关的介绍：</p>
                <blockquote>
                    <ul>
                        <li>the root element (HTML),</li>
                        <li><strong>positioned (absolutely or relatively) with a z-index value other than "auto",</strong></li>
                        <li><strong>a flex item with a z-index value other than "auto",</strong></li>
                        <li><strong>elements with an opacity value less than 1,</strong></li>
                        <li><strong>elements with a transform value other than "none",</strong></li>
                        <li>elements with a mix-blend-mode value other than "normal",</li>
                        <li>elements with isolation set to "isolate", on mobile WebKit and Chrome 22+, position: fixed always creates a new stacking context, even when z-index is "auto",</li>
                        <li>specifing any attribute above in will-change even you don't write themselves directly</li>
                    </ul>
                </blockquote>
                <p>其中，第二条是我们平时最常见的，另外几条加粗的会随着CSS3的普及越来越常见。令我感到惊奇是，<b class="text-danger">opacity</b>竟然也会创建新的<b class="text-danger">stacking context</b>，你可以试着将上面两个例子中的<b class="text-danger">transform</b>换成<b class="text-danger">opacity</b>，会得到同样的效果。</p>
                <p>值得注意的是，介绍<b class="text-danger">stacking context</b>的文章显然不像介绍CSS中另外一个“上下文”——<b class="text-danger">Block formatting context</b>（块级格式上下文）的文章多，原因可能是，我们在平常很少遇到<b class="text-danger">stacking context</b>相关的问题，但是随着CSS3的普及，这方面的问题可能会多起来的。</p>
                <p>这也算是CSS中一个比较有趣而且有用的知识点，之前在工作中遇到过一次，正好此处有人问到，特整理了一下，供参考。</p>
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
