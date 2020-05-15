<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">接口的单元测试</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p>1 开发新页面 宣讲页面功能 定位页面结构(表格结构表单结构图表结构)</p>
                <p>2 确定接口说明 前端编写假数据</p>
                <p>3 前后分工开发 前端根据假数据显示页面 后端根据接口测试模版搞内容</p>
                <p>4 完成后联调</p>
                <hr />
                <p>史上最长的玛丽苏名字 姓名：璃莹殇 · 安洁莉娜 · 樱雪羽晗灵 · 血丽魑 · 魅 · 安塔利亚 · 伤梦薰魅 · 海瑟薇 · 蔷薇玫瑰泪 · 羽灵 · 邪儿 · 凡多姆海威恩 · 夏影 · 琉璃舞 · 雅 · 蕾玥瑷雅 · 曦梦月 · 玥蓝 · 岚樱 · 紫蝶 · 丽馨 · 蕾琦洛 · 凤 · 颜鸢 · 希洛 · 玖兮 · 雨烟 · 叶洛莉兰 · 凝羽冰 · 泪伊如冰落 · 泪伊如琉璃爱梦莲泪 · 冰泪落冰紫蝶梦 · 殇心樱语冰凌伊蝶梦如 · 璃紫陌悠千艳优墨阳云筱残 · 雪莲茉 · 伊文思 · 蕊夏清 · 碎墨音 · 芊乐梦黛怡 · 墨丽莎 · 梦灵 苏魅香 · 紫蓝幽幻倾城萌美迷离 · 茉莉白嫩爱凤风魑 · 殇泪花如霜梦兰 · 萝莉心梦妖丽百千艳 · 瑰百合香珠合梦喃 · 泪伤梦雅爱之瑰 · 墨艳黎幻殇雪倩梦 · 情娜血清恋沫幽弥千月绯心丝梦灵蓝千月筱雪殇 · 希羽岚梦心殇雨樱琉璃舞韵倾雅 · 蕾玥瑷雅芸茜殇樱雪梦 · 曦魂梦月澪瑷琪欣泪 · 咝玥蓝 · 岚樱殇紫乐蝶雨 · 苏丽落雅馨瑷魅 · 音蕾琦洛凤之幽 · 蠫赬飖 · 风璃殇 · 颜鸢璃沫血伤 · 月冰灵希洛梦 · 玖兮恋琴爱 · 雨烟雪殇萌呗 · 血叶洛莉兰 · 泪伊如冰缈娅泪落冰花紫蝶梦珠 · 殇心樱语冰凌伊娜 · 洛丽塔紫心爱 · 蝶梦如璃紫陌悠千艳 · 优花梦冰玫瑰灵伤如爱 · 晶泪墨阳云筱残伤雅 · 琉璃爱梦莲泪 · 爱樱沫渺 · 落璃琴依语 · 千梦然丝伤 · 可薇 · 茉为殇黎 · 幽幻紫银 · 泪如韵影倾乐兰慕 · 冰雪殇璃陌梦 简称：安洁</p>
                <p>字符去重 : 璃 莹 殇 · 安 洁 莉 娜 樱 雪 羽 晗 灵 血 丽 魑 魅 塔 利 亚 伤 梦 薰 海 瑟 薇 蔷 玫 瑰 泪 邪 儿 凡 多 姆 威 恩 夏 影 琉 舞 雅 蕾 玥 瑷 曦 月 蓝 岚 紫 蝶 馨 琦 洛 凤 颜 鸢 希 玖 兮 雨 烟 叶 兰 凝 冰 伊 如 落 心 语 凌 爱 陌 悠 千 艳 优 花 晶 墨 阳 云 筱 残 莲 沫 渺 琴 依 然 丝 可 茉 黎 幽 幻 银 韵 倾 乐 慕 文 思 蕊 清 碎 音 芊 黛 怡 莎 苏 香 城 萌 美 迷 离 白 嫩 风 霜 萝 妖 百 合 珠 喃 之 倩 情 恋 弥 绯 芸 茜 魂 澪 琪 欣 咝 蠫 赬 飖 呗</p>
                <hr />
                <p> url: '/api/student/list',
                    <Icon type="md-checkmark" v-if="test1.list&&test1.list.length&&test1.rowcount" style="color:green"/>
                    <Icon type="md-close" v-else style="color:red"/>
                </p>
                <pre style="width: 100%; height: 200px; overflow: auto; border: 1px solid #ddd;">{{test1}}</pre>
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
import axios from 'axios' // http请求库

export default {
    data () {
        return {
            test1: {}
        }
    },
    methods: {
    },
    mounted () {
        axios({
            method: 'GET',
            url: '/api/student/list',
            data: {
                name: 1,
                comeAge: 1,
                state: 1,
                pageIndex: 1,
                pageSize: 20
            }
        }).then(response => { // 请注意这个返回值是整个结果对象
            const res = response.data
            if (res && res.data) {
                this.test1 = res.data
            }
        })
    }
}
</script>
