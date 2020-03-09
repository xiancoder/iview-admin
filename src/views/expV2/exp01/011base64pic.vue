<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">css3 base64pic</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <div style="position:relative;">
                    <div class="showyouBlackDot"></div>
                    <div class="showyouWhiteDot"></div>
                    <div class="showyouTouming"></div>
                </div>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <p>1234567890123456789012345678901234567890123456789012345678901234567890</p>
                <script type="text/css">
                    /*半黑色的遮罩*/
                    .showyouBlackDot{
                        position: absolute; top: 50px;left:50px; width: 100px; height: 100px;border:1px solid red;
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlOArV5bRgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=);
                    }
                    /*半白色的遮罩*/
                    .showyouWhiteDot{
                        position: absolute; top: 50px;left:150px; width: 100px; height: 100px;border:1px solid red;
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlOzEo46UAAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=);
                    }
                    /*透明的遮罩*/
                    .showyouTouming{
                        position: absolute; top: 50px;left:250px; width: 100px; height: 100px;border:1px solid red;
                        background-image: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==);
                    }
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
<style scoped>
    /*半黑色的遮罩*/
    .showyouBlackDot{
        position: absolute; top: 50px;left:50px; width: 100px; height: 100px;border:1px solid red;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlOArV5bRgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=);
    }
    /*半白色的遮罩*/
    .showyouWhiteDot{
        position: absolute; top: 50px;left:150px; width: 100px; height: 100px;border:1px solid red;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlOzEo46UAAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=);
    }
    /*透明的遮罩*/
    .showyouTouming{
        position: absolute; top: 50px;left:250px; width: 100px; height: 100px;border:1px solid red;
        background-image: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==);
    }
</style>
