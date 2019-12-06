<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">联系人卡片 css contactCard</div>
            <div class="blogContent" v-highlight>
                <div class="contactCard">
                    <main>
                        <section>
                            <div class="content">
                                <img src="http://q1.qlogo.cn/g?b=qq&nk=123131897&s=100" alt="Profile Image">
                                <aside>
                                    <h1>Riccardo Cavallo</h1>
                                    <p>Hi, I'm Riccardo Cavallo and I'm a Graphic and Visual Designer.</p>
                                </aside>
                                <button :class="{active:open}" @click="open=!open">
                                    <span>contactCard Me</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                                </button>
                            </div>
                            <div :class="{title:true,active:open}"><p>contactCard Me</p></div>
                        </section>
                    </main>
                    <nav :class="{active:open}">
                        <a href="#" class="gmail">
                            <div class="icon">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg>
                            </div>
                            <div class="content">
                                <h1>Email</h1>
                                <span>Riccavallo@gmail.com</span>
                            </div>
                            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                        </a>
                        <a href="#" class="facebook">
                            <div class="icon">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
                            </div>
                            <div class="content">
                                <h1>Facebook</h1>
                                <span>Riccardo Cavallo</span>
                            </div>
                            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                        </a>
                        <a href="#" class="twitter">
                            <div class="icon">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg>
                            </div>
                            <div class="content">
                                <h1>Twitter</h1>
                                <span>@RichoxDesign</span>
                            </div>
                            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                        </a>
                    </nav>
                </div>
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
        return {
            open: false
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style scoped>
    .contactCard { position: relative; max-width: 420px; padding: 40px 20px; overflow: hidden;}
    .contactCard main { float: left; width: 100%; position: relative; }
    .contactCard main section { border-radius: 5px; float: left; width: 100%; background-color: #eb524a; }
    .contactCard main section .content { float: left; width: 100%; padding: 20px 30px 50px 30px; position: relative; text-align: center; }
    .contactCard main section .content img { display: inline-block; width: 80px; border-radius: 50%; }
    .contactCard main section .content aside { float: left; width: 100%; color: #ffffff; margin-top: 10px; }
    .contactCard main section .content aside h1 { font-weight: 100; font-size: 22px; margin-bottom: 10px; }
    .contactCard main section .content aside p { font-size: 14px; letter-spacing: .5px; line-height: 160%; }
    .contactCard main .title { float: left; width: 100%; background-color: #c63535; /*max-height: 0px;*/ border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; overflow: hidden; -webkit-transition: all 0.55s; -moz-transition: all 0.55s; -o-transition: all 0.55s; transition: all 0.55s; }
    .contactCard main .title.active { max-height: 100px; -webkit-transition: all 1.3s; -moz-transition: all 1.3s; -o-transition: all 1.3s; transition: all 1.3s; }
    .contactCard main .title.active p { -webkit-transform: scale(1); -moz-transform: scale(1); -ms-transform: scale(1); -o-transform: scale(1); transform: scale(1); transition-delay: .2s; }
    .contactCard main .title p { padding: 15px 30px; color: #ffffff; font-size: 16px; display: inline-block; font-weight: 500; text-transform: uppercase; letter-spacing: .5px; -webkit-transition: all 0.3s; -moz-transition: all 0.3s; -o-transition: all 0.3s; transition: all 0.3s; -webkit-transform: scale(0); -moz-transform: scale(0); -ms-transform: scale(0); -o-transform: scale(0); transform: scale(0); }
    .contactCard main button { position: absolute; bottom: 0; right: 50%; background-color: #ffbe44; color: #c63535; border: 0; width: 200px; height: 48px; text-align: center; border-radius: 30px; font-size: 16px; letter-spacing: .5px; text-transform: uppercase; margin-bottom: -24px; margin-right: -100px; -webkit-transition: all 0.4s; -moz-transition: all 0.4s; -o-transition: all 0.4s; transition: all 0.4s; transition-delay: .1s; outline: none; overflow: hidden; z-index: 10; font-family: inherit; }
    .contactCard main button span { opacity: 1; -webkit-transition: opacity 0.2s; -moz-transition: opacity 0.2s; -o-transition: opacity 0.2s; transition: opacity 0.2s; transition-delay: .4s; display: block; width: 200px; float: left; padding: 15px 0px; }
    .contactCard main button svg { position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); opacity: 0; -webkit-transition: all 0.4s; -moz-transition: all 0.4s; -o-transition: all 0.4s; transition: all 0.4s; }
    .contactCard main button svg path { fill: #c63535; }
    .contactCard main button.active { margin-right: 0; right: 20px; width: 65px; height: 65px; margin-bottom: -32.5px; text-indent: 100%; white-space: nowrap; overflow: hidden; border-radius: 65px; box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2); }
    .contactCard main button.active span { opacity: 0; transition-delay: 0s; width: 200px; }
    .contactCard main button.active svg { opacity: 1; transition-delay: .5s; }
    .contactCard nav { float: left; width: 100%; overflow: hidden; max-height: 0px; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s; }
    .contactCard nav.active { max-height: 600px; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s; }
    .contactCard nav.active a { opacity: 1; -webkit-transform: translateY(0px); -moz-transform: translateY(0px); -ms-transform: translateY(0px); -o-transform: translateY(0px); transform: translateY(0px); -webkit-transition: all 0.7s; -moz-transition: all 0.7s; -o-transition: all 0.7s; transition: all 0.7s; }
    .contactCard nav.active a:nth-of-type(1) { transition-delay: .5s; }
    .contactCard nav.active a:nth-of-type(2) { transition-delay: .7s; }
    .contactCard nav.active a:nth-of-type(3) { transition-delay: .9s; }
    .contactCard nav a { float: left; width: 100%; margin-top: 18px; background-color: #f5f7f9; border: 1px solid #eb524a; padding: 18px 20px; border-radius: 5px; text-decoration: none; -webkit-transition: all 0.3s; -moz-transition: all 0.3s; -o-transition: all 0.3s; transition: all 0.3s; opacity: 0; -webkit-transform: translateY(-10px); -moz-transform: translateY(-10px); -ms-transform: translateY(-10px); -o-transform: translateY(-10px); transform: translateY(-10px); position: relative; }
    .contactCard nav a .arrow { position: absolute; right: 15px; top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -o-transform: translateY(-50%); transform: translateY(-50%); }
    .contactCard nav a .arrow path { fill: #e6e6e6; }
    .contactCard nav a.gmail .icon svg { background-color: #d14836; }
    .contactCard nav a.gmail .content h1 { color: #d14836; }
    .contactCard nav a.facebook .icon svg { background-color: #3b5998; }
    .contactCard nav a.facebook .content h1 { color: #3b5998; }
    .contactCard nav a.twitter .icon svg { background-color: #1da1f2; }
    .contactCard nav a.twitter .content h1 { color: #1da1f2; }
    .contactCard nav a .icon { float: left; width: 50px; height: 50px; border-radius: 50%; overflow: hidden; margin-right: 20px; }
    .contactCard nav a .icon svg { width: 100%; height: 100%; padding: 14px; }
    .contactCard nav a .icon svg path { fill: #ffffff; }
    .contactCard nav a .content h1 { font-size: 20px; font-weight: 400; line-height: 160%; letter-spacing: .4px; }
    .contactCard nav a .content span { font-size: 14px; color: #b3b3b3; display: block; letter-spacing: .4px; }
</style>
