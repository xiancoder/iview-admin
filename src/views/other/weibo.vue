<template>
    <div>
        <div style="width:400px">
            <div class="user">
                <div class="user__head">
                    <div class="user__img"> <img src="/static/img.head/zhishui.jpg" alt=""></div>
                </div>
                <div class="user__title">
                    <h2> <font>约翰·杜</font> </h2>
                    <p> <font>前端开发人员</font> </p>
                </div>
                <div class="user__btns">
                    <a href="add-project.html" class="user__btn user__btn--blue">
                        <span> <font>发布项目</font> </span>
                    </a>
                    <a href="add-job.html" class="user__btn user__btn--orange">
                        <span> <font>发布工作</font> </span>
                    </a>
                </div>
                <ul class="user__stats">
                    <li>
                        <p> <font>以下</font> </p>
                        <span> <font>26</font> </span>
                    </li>
                    <li>
                        <p> <font>追随者</font> </p>
                        <span> <font>88</font> </span>
                    </li>
                </ul>
                <a href="profile.html" class="sidebox__more"> <font>查看资料</font> </a>
            </div>
            <div class="sidebox">
                <h4 class="sidebox__title"> <font>意见建议</font> </h4>
                <div class="sidebox__content">
                    <div class="sidebox__user">
                        <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                        <div class="sidebox__user-title">
                            <h5> <a href="#"> <font>安迪·拉莫斯（Andy Ramos）</font> </a> </h5>
                            <p> <font>秘书</font> </p>
                        </div>
                        <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                    </div>
                    <div class="sidebox__user">
                        <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                        <div class="sidebox__user-title">
                            <h5> <a href="#"> <font>托尼·杨</font> </a> </h5>
                            <p> <font>中医师</font> </p>
                        </div>
                        <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                    </div>
                    <div class="sidebox__user">
                        <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                        <div class="sidebox__user-title">
                            <h5> <a href="#"> <font>圣地亚哥·罗宾逊</font> </a> </h5>
                            <p> <font>时装设计师</font> </p>
                        </div>
                        <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                    </div>
                    <div class="sidebox__user">
                        <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                        <div class="sidebox__user-title">
                            <h5> <a href="#"> <font>索菲亚·门多萨（Sophia Mendoza）</font> </a> </h5>
                            <p> <font>教学助手</font> </p>
                        </div>
                        <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                    </div>
                    <div class="sidebox__user">
                        <a href="#" class="sidebox__user-img"> <img src="/static/img.head/zhishui.jpg" alt=""></a>
                        <div class="sidebox__user-title">
                            <h5> <a href="#"> <font>玛莎·鲍德温（Marsha Baldwin）</font> </a> </h5>
                            <p> <font>园丁</font> </p>
                        </div>
                        <button class="sidebox__user-btn" type="button"> <i class="ivu-icon ivu-icon-md-thumbs-up"></i> </button>
                    </div>
                </div>
                <a href="#" class="sidebox__more"> <font>查看更多</font> </a>
            </div>
            <div class="sidebox sidebox--desk">
                <h4 class="sidebox__title"><font>热门职位</font></h4>
                <div class="sidebox__content">
                    <div class="sidebox__job">
                        <div class="sidebox__job-title">
                            <a href="#"><font>前端开发人员</font></a>
                            <span><font>$ 25 /小时</font></span>
                        </div>
                        <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                    </div>
                    <div class="sidebox__job">
                        <div class="sidebox__job-title">
                            <a href="#"><font>UI / UX Designer </font></a>
                            <span><font>$ 20 /小时</font></span>
                        </div>
                        <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                    </div>
                    <div class="sidebox__job">
                        <div class="sidebox__job-title">
                            <a href="#"><font>后端开发人员</font></a>
                            <span><font>$ 27 /小时</font></span>
                        </div>
                        <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                    </div>
                    <div class="sidebox__job">
                        <div class="sidebox__job-title">
                            <a href="#"><font>领队</font></a>
                            <span><font>$ 38 /小时</font></span>
                        </div>
                        <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                    </div>
                    <div class="sidebox__job">
                        <div class="sidebox__job-title">
                            <a href="#"><font>高级Java开发人员</font></a>
                            <span><font>$ 35 /小时</font></span>
                        </div>
                        <p class="sidebox__job-description"><font>因此，生成的Lorem Ipsum始终没有重复。</font></p>
                    </div>
                </div>
                <a href="#" class="sidebox__more"><font>查看更多</font></a>
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
<style type="text/css">
    /*============================== User ==============================*/
    .user { position: relative; margin-bottom: 20px; background-color: #fff; -webkit-border-radius: 4px; border-radius: 4px; overflow: hidden; -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); }
    .user .user__head { background-color: #3796f6; position: relative; height: 120px; width: 100%; }
    .user .user__img { position: absolute; display: block; width: 130px; height: 130px; background-color: #fff; -webkit-border-radius: 50%; border-radius: 50%; border: 5px solid #fff; bottom: -65px; left: 50%; margin-left: -65px; overflow: hidden; }
    .user .user__img img { width: 100%; height: auto; }
    .user .user__title { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -moz-box-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 75px 20px 20px; border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); }
    .user .user__title h2 { font-size: 18px; color: #364e65; font-weight: 600; margin-bottom: 10px; line-height: 100%; }
    .user .user__title p { margin-bottom: 0; line-height: 100%; font-size: 14px; color: #8599ab; font-weight: 400; }
    .user .user__btns { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 20px; border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); border-top: 1px solid rgba(133,153,171,0.2); }
    .user .user__btn { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 40px; width: calc(50% - 10px); -webkit-border-radius: 4px; border-radius: 4px; font-size: 14px; position: relative; overflow: hidden; color: #fff; font-weight: 600; }
    .user .user__btn:before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; opacity: 1; }
    .user .user__btn span { position: relative; z-index: 2; }
    .user .user__btn--blue { background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%); }
    .user .user__btn--blue:before { background-color: #3796f6; }
    .user .user__btn--blue:hover { color: #3796f6; }
    .user .user__btn--blue:hover:before { opacity: 0; }
    .user .user__btn--orange { background: linear-gradient(45deg, rgba(250,114,104,0.5) 0%, rgba(250,114,104,0.05) 100%); }
    .user .user__btn--orange:before { background-color: #fa7268; }
    .user .user__btn--orange:hover { color: #fa7268; }
    .user .user__btn--orange:hover:before { opacity: 0; }
    .user .user__stats { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; padding: 20px; border: 1px solid rgba(133,153,171,0.2); }
    .user .user__stats li { width: 50%; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -moz-box-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }
    .user .user__stats li p { margin-bottom: 5px; line-height: 100%; font-size: 14px; color: #8599ab; }
    .user .user__stats li span { font-size: 24px; line-height: 100%; display: block; color: #364e65; }
    .user .user__stats:last-child { -webkit-border-radius: 0 0 4px 4px; border-radius: 0 0 4px 4px; }
    .user .user__list { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -moz-box-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; border-top: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); padding: 15px 20px; }
    .user .user__list li { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; }
    .user .user__list li span { font-size: 14px; line-height: 28px; color: #8599ab; }
    .user .user__list li span:first-child { color: #364e65; }
    /*============================== more ==============================*/
    .sidebox__more { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); height: 40px; width: 100%; color: #3796f6; font-size: 14px; font-weight: 600; background-color: #fafafa; -webkit-border-radius: 0 0 4px 4px; border-radius: 0 0 4px 4px; }
    .sidebox__more:hover { color: #fa7268; }
    /*============================== Sidebox ==============================*/
    .sidebox { position: relative; margin-bottom: 20px; -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1); }
    .sidebox .sidebox__title { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 60px; width: 100%; padding: 0 20px; background-color: #fff; color: #364e65; font-size: 16px; font-weight: 600; border: 1px solid rgba(133,153,171,0.2); margin-bottom: 0; -webkit-border-radius: 4px 4px 0 0; border-radius: 4px 4px 0 0; }
    .sidebox .sidebox__title button { font-size: 12px; font-weight: 400; color: #8599ab; }
    .sidebox .sidebox__title button:hover { color: #3796f6; }
    .sidebox .sidebox__content { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -moz-box-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; padding: 20px; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); background-color: #fff; }
    .sidebox .sidebox__more { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); height: 40px; width: 100%; color: #3796f6; font-size: 14px; font-weight: 600; background-color: #fafafa; -webkit-border-radius: 0 0 4px 4px; border-radius: 0 0 4px 4px; }
    .sidebox .sidebox__more:hover { color: #fa7268; }
    .sidebox .sidebox__user { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-bottom: 15px; width: 100%; }
    .sidebox .sidebox__user:last-child { margin-bottom: 0; }
    .sidebox .sidebox__user-img { display: block; width: 40px; height: 40px; -webkit-border-radius: 50%; border-radius: 50%; margin-right: 12px; overflow: hidden; }
    .sidebox .sidebox__user-img img { width: 100%; }
    .sidebox .sidebox__user-title h5 { font-size: 14px; color: #364e65; font-weight: 600; margin-bottom: 5px; line-height: 100%; }
    .sidebox .sidebox__user-title h5 a { color: #364e65; }
    .sidebox .sidebox__user-title h5 a:hover { color: #fa7268; }
    .sidebox .sidebox__user-title p { font-size: 13px; color: #8599ab; margin-bottom: 0; line-height: 100%; }
    .sidebox .sidebox__user-btn { display: block; margin-left: auto; color: #8599ab; font-size: 30px; height: 40px; width: auto; line-height: 38px; position: relative;border: 0;background: #fff; }
    .sidebox .sidebox__user-btn:before { content: ''; position: absolute; top: 0; bottom: 0; left: -20px; width: 1px; background-color: rgba(133,153,171,0.2); pointer-events: none; }
    .sidebox .sidebox__user-btn:hover { color: #3796f6; }
    .sidebox .sidebox__job { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -moz-box-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; margin-bottom: 15px; width: 100%; }
    .sidebox .sidebox__job:last-child { margin-bottom: 0; }
    .sidebox .sidebox__job-title { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-bottom: 8px; width: 100%; }
    .sidebox .sidebox__job-title a,.sidebox .sidebox__job-title span { font-size: 14px; color: #364e65; font-weight: 600; line-height: 100%; }
    .sidebox .sidebox__job-title a:hover { color: #fa7268; }
    .sidebox .sidebox__job-description { margin-bottom: 0; font-size: 13px; line-height: 19px; color: #8599ab; }
    .sidebox .sidebox__share { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border: 1px solid rgba(133,153,171,0.2); background-color: #fff; -webkit-border-radius: 4px; border-radius: 4px; padding: 10px 20px; height: 60px; }
    .sidebox .sidebox__share span { font-size: 14px; font-weight: 400; color: #364e65; }
    .sidebox .sidebox__share ul { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -moz-box-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }
    .sidebox .sidebox__share ul li { margin-right: 15px; }
    .sidebox .sidebox__share ul li:last-child { margin-right: 0; }
    .sidebox .sidebox__share ul li.facebook a { color: #3b5999; }
    .sidebox .sidebox__share ul li.instagram a { color: $clr2; }
    .sidebox .sidebox__share ul li.instagram a i:before { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: $yellow; }
    .sidebox .sidebox__share ul li.twitter a { color: #1da1f2; }
    .sidebox .sidebox__share ul li.vk a { color: #45668e; }
    .sidebox .sidebox__share ul a { font-size: 24px; color: #3796f6; letter-spacing: 0.4px; }
    .sidebox .sidebox__share ul a:hover { color: #fa7268; }
    .sidebox .sidebox__apply { border: 1px solid rgba(133,153,171,0.2); background-color: #fff; -webkit-border-radius: 4px; border-radius: 4px; padding: 20px; }
    .sidebox .sidebox__faq { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -moz-box-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; margin-bottom: 15px; width: 100%; }
    .sidebox .sidebox__faq:last-child { margin-bottom: 0; }
    .sidebox .sidebox__faq h5 { font-size: 15px; color: #364e65; font-weight: 600; line-height: 23px; margin-bottom: 7px; }
    .sidebox .sidebox__faq p { margin-bottom: 0; font-size: 13px; line-height: 21px; color: #8599ab; }
    .sidebox .sidebox__nav { display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -moz-box-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; padding: 20px; border-bottom: 1px solid rgba(133,153,171,0.2); border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); background-color: #fff; -webkit-border-radius: 0 0 4px 4px; border-radius: 0 0 4px 4px; }
    .sidebox .sidebox__nav a { font-size: 14px; color: #364e65; position: relative; }
    .sidebox .sidebox__nav a:before { content: ''; position: absolute; display: block; width: 6px; height: 6px; -webkit-border-radius: 50%; border-radius: 50%; background-color: #3796f6; pointer-events: none; left: 0; top: 50%; margin-top: -3px; opacity: 0; -webkit-transition: 0.4s; -moz-transition: 0.4s; transition: 0.4s; -webkit-box-shadow: 0 0 10px 0 rgba(55,150,246,0.3); box-shadow: 0 0 10px 0 rgba(55,150,246,0.3); }
    .sidebox .sidebox__nav a:hover,.sidebox .sidebox__nav a.active { color: #3796f6; }
    .sidebox .sidebox__nav a.active { padding-left: 15px; }
    .sidebox .sidebox__nav a.active:before { opacity: 1; }
    .sidebox .sidebox__nav li { margin-bottom: 10px; }
    .sidebox .sidebox__nav li:last-child { margin-bottom: 0; }
    .sidebox .sidebox__nav .filter__label { line-height: 100%; }
    .sidebox .sidebox__search { background-color: #fff; padding: 20px; border-left: 1px solid rgba(133,153,171,0.2); border-right: 1px solid rgba(133,153,171,0.2); border-bottom: 1px solid rgba(133,153,171,0.2); position: relative; }
    .sidebox .sidebox__search button { position: absolute; height: 40px; color: #8599ab; font-size: 22px; top: 50%; margin-top: -20px; right: 35px; line-height: 42px; }
    .sidebox .sidebox__search button:hover { color: #3796f6; }
</style>
