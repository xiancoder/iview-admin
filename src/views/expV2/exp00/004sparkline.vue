<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">迷你图 Sparkline 一类信息体积小和数据密度高的图表。</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <type1></type1>
                <hr />
                <type2></type2>
                <hr />
                <type3></type3>
                <hr />
                <type4></type4>
                <hr />
                <Card :bordered="false" style="width:300px;border:1px solid #333;">
                    <p slot="title">今日收益123</p>
                    <p><type5></type5></p>
                </Card>
                <hr />
                <type6></type6>
                <hr />
                <type7></type7>
                <hr />
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
import type1 from '@/components/sparkline/type1'
import type2 from '@/components/sparkline/type2'
import type3 from '@/components/sparkline/type3'
import type4 from '@/components/sparkline/type4'
import type5 from '@/components/sparkline/type5'
import type6 from '@/components/sparkline/type6'
import type7 from '@/components/sparkline/type7'

export default {
    components: { type1, type2, type3, type4, type5, type6, type7 },
    data () {
        return {
        }
    }
}
</script>
