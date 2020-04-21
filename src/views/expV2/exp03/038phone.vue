<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">3d Smartphone</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <div style="position:relative;height:600px;width:300px">
                    <div class="mobile-wrapper">
                        <div class="mobile">
                            <div class="photo"></div>
                            <div class="screen"></div>
                        </div>
                    </div>
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
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style type="text/css">
    .mobile-wrapper { width: 300px; position: absolute; top: 0; left: 50%; transform: translateX(-50%); }
    .mobile-wrapper:after { content: ''; width: 19%; height: 100%; position: absolute; right: 0; top: 0; border-radius: 25px; display: block; background: linear-gradient(90deg, #000000, 75%, #4c4c4c); z-index: -1; transform: perspective(1000px) rotateY(14deg) scale(0.85) translate3d(-35px, 0px, 0); }
    .mobile-wrapper:before { width: 100%; height: 5%; background: black; position: absolute; bottom: 7%; left: 4%; content: ''; border-radius: 50%; filter: blur(9px); opacity: .2; transform: perspective(100px) rotate3d(1, 0, 0.5, 25deg) scale3d(0.8, 0.8, 0.8); }
    .mobile-wrapper .mobile { width: 100%; padding-bottom: 216%; background: black; border-radius: 25px; transform: perspective(1000px) rotateY(-40deg) scale3d(0.8, 0.8, 0.8); }
    .mobile-wrapper .mobile .photo { border-radius: 0 0 15px 15px; background: black; width: 50%; padding-bottom: 13%; position: absolute; left: 50%; top: 0%; transform: translateX(-50%); z-index: 1; }
    .mobile-wrapper .mobile .photo:after { content: ''; width: 40%; padding-bottom: 5%; border-radius: 20px; background: #191919; border: 2px solid #191919; position: absolute; right: 30%; top: 50%; transform: translateY(-50%); }
    .mobile-wrapper .mobile .photo:before { content: ''; width: 8%; padding-bottom: 8%; border-radius: 50%; background: rgba(255, 255, 255, 0.3); border: 2px solid #212121; position: absolute; right: 10%; top: 50%; transform: translateY(-50%); }
    .mobile-wrapper .mobile .screen { border-radius: 20px; width: 95%; height: 98%; background: url('/static/bg.phone.jpg') no-repeat center; background-size: cover; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
</style>
