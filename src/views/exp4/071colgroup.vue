<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">表格中的列属性colgroup</div>
            <div class="blogContent" v-highlight>
                <p>所有主流浏览器都支持 colgroup 标签。</p>
                <p>colgroup 标签用于对表格中的列进行组合，以便对其进行格式化。</p>
                <p>通过使用 colgroup 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。</p>
                <p>注释：只能在 table 元素之内，在任何一个 caption 元素之后，在任何一个 thead、tbody、tfoot、tr 元素之前使用 colgroup 标签。</p>
                <p class="text-danger">color:#fff; 也不行么</p>
                <p class="text-info">瑶瑶说 不支持px只支持百分百宽度 试了下 果然</p>
                <table class="table">
                    <colgroup>
                        <col span="2" style="color:#fff;background-color:#2196F3;width:10%">
                        <col style="background-color:#8BC34A;width:80%">
                    </colgroup>
                    <tr> <th>ISBN</th> <th>Title</th> <th>Price</th> </tr>
                    <tr> <td>3476896</td> <td>My first HTML</td> <td>$53</td> </tr>
                    <tr> <td>5869207</td> <td>My first CSS</td> <td>$49</td> </tr>
                </table>
                <script type="text/html">
                    <table class="table">
                        <colgroup>
                            <col span="2" style="color:#fff;background-color:#2196F3;width:10%">
                            <col style="background-color:#8BC34A;width:80%">
                        </colgroup>
                        <tr> <th>ISBN</th> <th>Title</th> <th>Price</th> </tr>
                        <tr> <td>3476896</td> <td>My first HTML</td> <td>$53</td> </tr>
                        <tr> <td>5869207</td> <td>My first CSS</td> <td>$49</td> </tr>
                    </table>
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
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
