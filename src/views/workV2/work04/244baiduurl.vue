<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"> 补点击 脚本 尝试</div>
            <div class="blogContent" v-highlight>
                <p>参考内容 <a href="https://www.cnblogs.com/happyday56/p/8952359.html"></a></p>
                <p>http://www.baidu.com/s?wd=关键字 ---------------- wd(Keyword)：查询的关键词；</p>
                <p>http://www.baidu.com/s?wd=关键字&cl=3 ---------------- cl(Class)：搜索类型，cl=3为网页搜索，cl=2为图片搜索；</p>
                <p>http://video.baidu.com/v?rn=20&pn=0 ---------------- pn(Page Number)：显示结果的页数；</p>
                <p>http://www.baidu.com/s?ie=gb2312 ---------------- ie(Input Encoding)：查询关键词的编码，缺省设置为简体中文，即ie=gb2312；</p>
                <p>http://image.baidu.com/i?ct=503316480&si=zbjingshui.com ---------------- ct--此值一般是一串数字，可能是搜索请求的验证码；</p>
                <p>http://image.baidu.com/i?ct=503316480&si=zbjingshui.com ---------------- si--在限定的域名中搜索,比如想在本站内搜索可使用参数si=shangzhiwang.com,要使这个参数有效必须结合ct参数一起使用；</p>
                <p>http://video.baidu.com/v?rn=20&pn=0 ---------------- rn(Record Number)：搜索结果显示条数，缺省设置rn=10，取值范围:10-100；</p>
                <p>http://www.baidu.com/s?bs=商智网络 ---------------- bs(Before Search)：上一次搜索的关键词；</p>
                <p class="text-danger">tn：提交搜索请求的来源站点，这是百度与免费软件合作时的利益来源，举例来说我们使用的一些免费浏览器中所提供的百度搜索时，URL地址中都带有tn=内容，tn=后面的内容就是百度联盟的账号。如：Firefox的tn=suvion_dg(tn=suvion_4_dg),傲游的tn=myie2dg，The World的tn=suvion_4_pg，只要你使用了这些带有tn=的搜索，只要点击了其中的广告，提供该软件的浏览器就会从中赚取利益。搜索结果有个例外，当tn=baidulocal时，你可以得到一个无竞价无广告的百度搜索结果.</p>
                <p>http://www.baidu.com/s?lm=0(搜 索结果时间限制) &si=&rn=10(每页显示的数目) &ie=gb2312&（语言） ct=0 &wd=%CA%6%BB%FA& （关键词） pn=10 （在第pn比上10后加上1页） &ver=0 &cl=3 &uim=6 &usm=0</p>
                <p>tn 搜索框所属网站。比如 tn=sitehao123,就是 http://www.hao123.com/ 左上那个搜索框</p>
                <p></p>
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
