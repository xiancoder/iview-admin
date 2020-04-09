<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">CSS 切换字符</div>
            <div class="blogContent" v-highlight>
                <div class="rotating-text" style="color: #000">
                    <p>css3 动画</p>
                    <p>
                        <span class="word" style="color: #e74c3c;">awesome.</span>
                        <span class="word" style="color: #8e44ad;">beautiful.</span>
                        <span class="word" style="color: #3498db;">creative.</span>
                        <span class="word" style="color: #2ecc71;">fabulous.</span>
                        <span class="word" style="color: #f1c40f;">interesting.</span>
                    </p>
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
        var words = document.querySelectorAll('.word')
        words.forEach(function (word) {
            var letters = word.textContent.split('')
            word.textContent = ''
            letters.forEach(function (letter) {
                var span = document.createElement('span')
                span.textContent = letter
                span.className = 'letter'
                word.append(span)
            })
        })
        var currentWordIndex = 0
        var maxWordIndex = words.length - 1
        words[currentWordIndex].style.opacity = '1'
        var rotateText = function () {
            var currentWord = words[currentWordIndex]
            var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]
            Array.from(currentWord.children).forEach(function (letter, i) {
                setTimeout(function () { letter.className = 'letter out'; }, i * 80)
            })
            nextWord.style.opacity = '1'
            Array.from(nextWord.children).forEach(function (letter, i) {
                letter.className = 'letter behind'
                setTimeout(function () { letter.className = 'letter in'; }, 340 + i * 80)
            });
            currentWordIndex = (currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1)
        };
        rotateText()
        setInterval(rotateText, 4000)
    }
}
</script>
<style type="text/css">
    .rotating-text { font-family: Lato, sans-serif; font-weight: 600; font-size: 36px; color: white;}
    .rotating-text p { display: inline-flex; margin: 0; vertical-align: top; }
    .rotating-text p .word { position: absolute; display: flex; opacity: 0; }
    .rotating-text p .word .letter { transform-origin: center center 25px; }
    .rotating-text p .word .letter.out { transform: rotateX(90deg); transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2); }
    .rotating-text p .word .letter.in { transition: 0.38s ease; }
    .rotating-text p .word .letter.behind { transform: rotateX(-90deg); }
</style>
