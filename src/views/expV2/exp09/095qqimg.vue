<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">QQ头像排列样式</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>QQ头像地址 可以直接获取</p>
                <img src="http://q1.qlogo.cn/g?b=qq&nk=2546066152&s=100" style=" width:95px;border:1px solid #fff;">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=2187392909&s=100" style=" width:95px;border:1px solid #fff;">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=123131897&s=100" style=" width:95px;border:1px solid #fff;">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=2169395816&s=100" style=" width:95px;border:1px solid #fff;">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=3028577641&s=100" style=" width:95px;border:1px solid #fff;">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=3561301930&s=100" style=" width:95px;border:1px solid #fff;">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=3244838613&s=100" style=" width:95px;border:1px solid #fff;">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=2478956685&s=100" style=" width:95px;border:1px solid #fff;">
                <hr />
                <script type="text/html">
                    <img src="http://q1.qlogo.cn/g?b=qq&nk=[QQ]&s=100" style=" width:95px;border:1px solid #fff;">
                </script>
                <p>微信头像地址 无法直接获取</p>
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/E7XLbDS0gRJibYGpzxcEwXibyTwQAAHX9Koia7oln1821c8Djkibtpf6O20J3nacpnb0pg1UmtpdfDznHYBZvL78kw/132" style=" width:95px;border:1px solid #fff;">
                <img src="http://wx.qlogo.cn/mmopen/UAqwJ95HSLycmQktIqAYuexoytJ3kJzknQ4icJkNpfUvxfqoNRDY2esKQj3YvxXuQacsu9fYKDQ1VUSVBxspic4MwNDTF4Z4zu/0">
                <img src="https://wx.qlogo.cn/mmopen/vi_32/weu0icFyZWHxUJkHFBMYlib8ykKOm32oDNfwlRn87k8k1ufqNuAvF8ERPsXYjzDXVxWGlu5kKjKY8YYyjP2kzrog/132">
                <hr />
                <script type="text/html">
                    <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/E7XLbDS0gRJibYGpzxcEwXibyTwQAAHX9Koia7oln1821c8Djkibtpf6O20J3nacpnb0pg1UmtpdfDznHYBZvL78kw/132" style=" width:95px;border:1px solid #fff;">
                </script>
                <div class="avatar-group">
                    <figure class="avatar"> <img src="http://q1.qlogo.cn/g?b=qq&nk=2546066152&s=100" alt=""> </figure>
                    <figure class="avatar"> <img src="http://q1.qlogo.cn/g?b=qq&nk=2187392909&s=100" alt=""> </figure>
                    <figure class="avatar"> <img src="http://q1.qlogo.cn/g?b=qq&nk=123131897&s=100" alt=""> </figure>
                    <figure class="avatar"> <img src="http://q1.qlogo.cn/g?b=qq&nk=2169395816&s=100" alt=""> </figure>
                    <figure class="avatar"> <img src="http://q1.qlogo.cn/g?b=qq&nk=3028577641&s=100" alt=""> </figure>
                    <figure class="avatar"> <img src="http://q1.qlogo.cn/g?b=qq&nk=3561301930&s=100" alt=""> </figure>
                    <figure class="avatar"> <img src="http://q1.qlogo.cn/g?b=qq&nk=3244838613&s=100" alt=""> </figure>
                    <figure class="avatar"> <img src="http://q1.qlogo.cn/g?b=qq&nk=2478956685&s=100" alt=""> </figure>
                    <figure class="avatar-letter "> <span class="avatar-letter-a circle"></span> </figure>
                    <figure class="avatar-letter "> <span class="avatar-letter-b circle"></span> </figure>
                </div>
                <script type="text/css">
                    .avatar-group { display: inline-block; }
                    .avatar-group .avatar { -webkit-box-shadow: 0 0 0 2px #fff; box-shadow: 0 0 0 2px #fff; }
                    .avatar-group .avatar,
                    .avatar-group .avatar-letter { position: relative; margin-bottom: 0; display: inline-block; width: 40px; height: 40px; font-size: 28px; line-height: 38px; border-radius: 40px; vertical-align: middle; font-style: normal; font-weight: 400; text-align: center; text-transform: uppercase; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: #fff; color: #fff; z-index: 10; margin-left: -8px; }
                    .avatar-group .avatar-letter:hover,
                    .avatar-group .avatar:hover{ z-index: 13; }
                    figure { margin: 0 0 10px; }
                    .avatar-group .avatar-letter span,
                    .avatar-group .avatar img{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 40px; }
                    .avatar-group .avatar-letter-a { background-color: #2ecc71; }
                    .avatar-group .avatar-letter-a:before { content: "\0061"; }
                    .avatar-group .avatar-letter-b { background-color: #3498db; }
                    .avatar-group .avatar-letter-b:before { content: "\0062"; }
                </script>
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
<style>
    .avatar-group { display: inline-block; }
    .avatar-group .avatar { -webkit-box-shadow: 0 0 0 2px #fff; box-shadow: 0 0 0 2px #fff; }
    .avatar-group .avatar,
    .avatar-group .avatar-letter { position: relative; margin-bottom: 0; display: inline-block; width: 40px; height: 40px; font-size: 28px; line-height: 38px; border-radius: 40px; vertical-align: middle; font-style: normal; font-weight: 400; text-align: center; text-transform: uppercase; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: #fff; color: #fff; z-index: 10; margin-left: -8px; }
    .avatar-group .avatar-letter:hover,
    .avatar-group .avatar:hover{ z-index: 13; }
    figure { margin: 0 0 10px; }
    .avatar-group .avatar-letter span,
    .avatar-group .avatar img{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 40px; }
    .avatar-group .avatar-letter-a { background-color: #2ecc71; }
    .avatar-group .avatar-letter-a:before { content: "\0061"; }
    .avatar-group .avatar-letter-b { background-color: #3498db; }
    .avatar-group .avatar-letter-b:before { content: "\0062"; }
</style>
