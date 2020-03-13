<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"> 不同域名 子页面能操作父页面的什么东西</div>
            <div class="blogContent" v-highlight>
                <p>动态创建iframe</p>
                <script type="text/js">
                    let ifr = document.createElement('iframe');
                    document.body.appendChild(ifr);
                    ifr.style.display = 'none';
                    let win = ifr.contentWindow;
                    let doc = win.document;
                </script>
                <p>动态加入样式</p>
                <script type="text/js">
                    let style = document.createElement('style');
                    style.type = 'text/css';
                    style.media = 'print';
                    doc.head.appendChild(style);
                    if (!window.createPopup) {
                        style.appendChild(document.createTextNode(''));
                    }
                    let sheet = style.sheet || style.styleSheet;
                    let rules = [
                        '.watername{font-size:14px;font-weight:bold;text-align:center;line-height:60px;border-top:1px solid #000;border-bottom:1px solid #333;}',
                        '.infos{font-size:12px;border-bottom:1px solid #333;padding:8px 0px;}',
                        '.flex-cont{display:flex;align-items:center;}',
                        '.flex-item{flex:1}',
                        '.code-cont{margin-left:20px;}',
                        '.pickcode{font-size:12px;font-weight:bolder;}',
                        '.shoplist{margin-top:25px;padding-bottom:20px;border-bottom:1px solid #333;}',
                        '.bold{font-weight:bolder}',
                        '.mytable tr td{font-size:12px;padding:4px;}',
                        '.itext{font-size:12px;line-height:25px;}',
                        '.memb-cont{border-bottom:1px solid #333;padding: 8px 0;}',
                        '.note-cont{border-bottom:1px solid #000;padding-bottom:8px;}'
                    ];
                    for (let i = 0; i < rules.length; i++) {
                        sheet.insertRule(rules[i]);
                    }
                    document.body.innerHTML = html;
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
