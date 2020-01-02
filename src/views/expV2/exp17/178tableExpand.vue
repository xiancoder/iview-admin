<template>
    <div>
        <p>当表格内容较多不能一次性完全展示时使用。
        通过给 columns 数据设置一项，指定 type: 'expand'，即可开启扩展功能。
        给行数据 data 的某项设置 _expanded 为 true，可以默认展开当前行，设置 _disableExpand 可以禁用当前行的展开功能。
        渲染展开区域与自定义列模板方法类似，使用 render 函数。当内容较复杂时，可拆分为组件或使用 JSX。</p>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">Job: </span>
                <span class="expand-value">{{ row.job }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Interest: </span>
                <span class="expand-value">{{ row.interest }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Birthday: </span>
                <span class="expand-value">{{ row.birthday }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">Favorite book: </span>
                <span class="expand-value">《{{ row.book }}》</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Favorite movie: </span>
                <span class="expand-value">{{ row.movie }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Favorite music: </span>
                <span class="expand-value">{{ row.music }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    props: {
        row: Object
    }
}
</script>
<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
