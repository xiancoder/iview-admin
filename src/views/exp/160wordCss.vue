<template>
    <div class="document">
        <div class="page" contenteditable="true">
            <h1>First <code>.page</code> element</h1>
            <p style="color:#ff0000;">注意，页面中的文字是可以进行修改的。</p>
            <p class="right">XXXXXXXXXXXX 公司DSP平台：www.xxxxx.com.cn</p>
            <p class="right">合作协议 编号：（XXX）第（XXX）号</p>
            <p>甲方：</p>
            <p>有效证件号码：</p>
            <p>联系人：</p>
            <p>联系方式：</p>
            <p></p>
            <p>乙方：</p>
            <p>地址：</p>
            <p>指定收款账号：</p>
            <p>开户银行：</p>
            <p>联系人：</p>
            <p>联系方式：</p>
            <p>注：甲方在乙方DSP平台注册的账号信息为：</p>
            <div class="page-break"></div>
            <p>鉴于：</p>
            <p>甲、乙双方为了充分利用各自在业务领域的优势，提高在各自领域的服务水平，本着平等、自愿、互利原则，经友好协商，达成如下协议，以资共同遵守：</p>
            <p>一、定义与解释</p>
            <p>本协议及其附件中，使用的下列词语的含义如下表所示：</p>
            <p>1.中国法律：任何中国现行颁布有效的法律、法规。</p>
            <p>2.推广内容：指甲方产品或甲方经授权推广的他方产品。</p>
            <p>3.乙方媒体渠道：指乙方拥有所有权或者合法代理权的媒体渠道（包括但不限于：www/wap网站、移动端、PC端等）。</p>
            <p>4.甲方平台数据：指通过乙方渠道提供推广服务而产生的相关数据，包括但不限于访问、注册、登录、充值等操作行为形成的数据及各类交易数据。</p>
            <p>@import '~@/style/word.css';</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>
<style>
    @import '~@/style/word.css';
    .page {
        width: 28cm; min-height: 29.7cm; padding-left: 2cm; padding-top: 2cm; padding-right: 2cm; padding-bottom: 2cm;
        margin: 1cm auto; background: #fff; box-shadow: 0 4px 5px rgba(75, 75, 75, 0.2); outline: 0;
    }
</style>
