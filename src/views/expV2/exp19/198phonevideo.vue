<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">移动端 video 坑集锦</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>1、x5同层播放器</p>
                <p>移动端浏览器中的video元素是比较特别的，位于页面的最顶层，无法被遮盖。</p>
                <p>后来这个问题在iOS下得到了解决，但是Android的浏览器则问题依旧。</p>
                <p>X5是腾讯基于Webkit开发的渲染引擎，它提供了一种名叫「同层播放器」的特殊video元素以解决遮盖问题。</p>
                <p>只要给普通的video元素加上X5的自定义属性 x5-video-player-type，就可以调用同层播放器。</p>
                <script type="text/html">
                    <video id="video" class="video" controls="controls" playsinline x5-video-player-type="h5">
                        <source src="video.mp4" />
                    </video>
                </script>
                <p>2、autoplay自动播放</p>
                <p>video标签可以设置自动播放，只需在标签设置autoplay即可。但是，设置自动播放是会有兼容性问题的，并不是所有机型都可以。</p>
                <p>1.设置了autoply ios基本可以实现自动播放，但是要设置静音，即：没音频轨道，或者设置了muted属性。</p>
                <p>2.安卓的话，只有部分机型可以自动播放。而且不能模拟自动播放，一定要有用户行为才可以触发播放。</p>
                <p>3、视频行内播放</p>
                <p>默认情况下，点击video播放会全屏播放，如果想要视频在局部内可以播放的话，可以设置：x5-playsinline</p>
                <p>4、视频全屏播放后的大小</p>
                <p>整个视频的尺寸直接设置为当前屏幕的宽高，测试反映说视频被拉伸变形了，因为尺寸不是按照比例的。 因此，采取以下方案。videoHeight()和videoWidth()分别获取原视频的高和宽，然后与屏幕的宽高计算出比例。</p>
                <script type="text/js">
                    if (MJSSDK.UA.android) {
                        this.myPlayer.on('play', () => {
                            // console.log('play');
                            window.onresize = () => {
                                // console.log('onresize-play');
                                this.isfull = true;
                                let vheight = this.myPlayer.videoHeight();
                                let vweight = this.myPlayer.videoWidth();
                                let clientHeight = document.documentElement.clientHeight;
                                document.querySelector('.video-container').style.width = (clientHeight * vweight) / vheight + 'px';
                                document.querySelector('.video-container').style.height = clientHeight + 'px';
                                document.querySelector('#my-video').style.backgroundColor = 'black';
                            };
                        });
                        this.myPlayer.on('pause', () => {
                            // console.log('pause');
                            window.onresize = () => {
                                // console.log('onresize-pause');
                                this.isfull = false;
                                // 全屏后，华为等部分机型会有白边，是页面的颜色，用该值控制背景色
                                document.querySelector('.video-container').style.width = '270px';
                                document.querySelector('.video-container').style.height = '170px';
                            };
                        });
                </script>
                <p>5、视频全屏后出现白边</p>
                <p>安卓启用同层播放器后全屏出现的，这是个很诡异的问题，仅在部分的安卓机型下出现。白边是页面的颜色，就是同层播放器的全屏是把这个页面旋转过来，然后区域放大这样。 解决方法：全屏时把页面背景色设置为黑色，取消全屏时改回来。</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
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
