<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">\r，\n，\r\n的区别</div>
            <div class="blogContent" v-highlight>
                <p>他们间的区别其实是个回车换行的问题</p>
                <p>先来段历史</p>
                <p>回车”（Carriage Return）和“换行”（Line Feed）这两个概念的来历和区别。</p>
                <p>符号\nASCII码10意义换行</p>
                <p>符号\rASCII码13意义回车CR</p>
                <p>在计算机还没有出现之前，有一种叫做电传打字机（Teletype Model 33，Linux/Unix下的tty概念也来自于此）的玩意，每秒钟可以打10个字符。</p>
                <p>但是它有一个问题，就是打完一行换行的时候，要用去0.2秒，正好可以打两个字符。</p>
                <p>要是在这0.2秒里面，又有新的字符传过来，那么这个字符将丢失。</p>
                <p>于是，研制人员想了个办法解决这个问题，就是在每行后面加两个表示结束的字符。</p>
                <p>一个叫做“回车”，告诉打字机把打印头定位在左边界；另一个叫做“换行”，告诉打字机把纸向下移一行。</p>
                <p>这就是“换行”和“回车”的来历，从它们的英语名字上也可以看出一二。</p>
                <p>后来，计算机发明了，这两个概念也就被般到了计算机上。那时，存储器很贵，一些科学家认为在每行结尾加两个字符太浪费了，加一个就可以。于是，就出现了分歧。</p>
                <p>在Windows中：</p>
                <p>'\r' 回车，回到当前行的行首，而不会换到下一行，如果接着输出的话，本行以前的内容会被逐一覆盖；</p>
                <p>'\n' 换行，换到当前位置的下一行，而不会回到行首；</p>
                <p>Unix系统里，每行结尾只有“换行”，即"\n"；</p>
                <p>Windows系统里面，每行结尾是“回车换行”，即“\r\n”；</p>
                <p>Mac系统里，每行结尾是“回车”，即"\r"；。</p>
                <p>一个直接后果是，Unix/Mac系统下的文件在Windows里打开的话，所有文字会变成一行；</p>
                <p>而Windows里的文件在Unix/Mac下打开的话，在每行的结尾可能会多出一个^M符号。</p>
                <p class="text-danger">所以正则匹配的时候一定要区分这三种情况 /\r|\n|\r\n/</p>
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
