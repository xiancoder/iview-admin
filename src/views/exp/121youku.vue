<template>
    <div>
        <pre>
            // 静音网页中所有的video标签
            function muteMe(elem) {
                elem.muted = true;
                // elem.pause();
                // elem.play();
            }

            // Try to mute all video and audio elements on the page
            function mutePage() {
                var videos = document.querySelectorAll("video"),
                    audios = document.querySelectorAll("audio");

                [].forEach.call(videos, function(video) { muteMe(video); });
                [].forEach.call(audios, function(audio) { muteMe(audio); });
            }

            mutePage()
        </pre>
        <iframe height="498" width="510" src="http://player.youku.com/embed/XNDM3NTYzMzU0NA==" frameborder="0" allowfullscreen>
        </iframe>
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
