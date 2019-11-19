<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">DSP 项目产品思路整理</div>
            <div class="blogContent" v-highlight>
                <p>1 总公司A 子公司abc 三个公司账号</p>
                <p>2 一个客户总会有一个公司对接</p>
                <p>3 打钱的人和客户并没有明显的关系 (商务确认) -- '认领'操作</p>
                <p>4 我们的花销流水记录<del>每月</del>定期与客户的花销流水记录对比 (运营确认) -- '确认'操作</p>
                <p>5 双方统一的记录封存 用作以后的参考 (财务确认) -- '封账'操作</p>
                <p>6 4个公司 客户很多 每月花销流水更多 每次操作不便 需要批量导入消耗 批量导入封账</p>
                <p>7 一个账户 登录四个公司网站</p>
                <p></p>
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
