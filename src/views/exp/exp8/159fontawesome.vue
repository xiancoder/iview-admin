<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">图标字体化 最大化利用</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 完美 通过css和font的合作 避免调用大size的图片了</p>
                <p><Icon type="md-close" style="color:red"/> 2019年11月29日14:45:33 无法说服UI 没人家的资源好看 还限制人家发挥 不占理</p>
                <hr />
                <Row>
                    <Col span="4"><div class="fenhong"><i class="fa fa-shower"></i></div><h3>洗澡模块</h3></Col>
                    <Col span="4"><div class="zise"><i class="fa fa-bathtub"></i></div><h3>洗澡模块</h3></Col>
                    <Col span="4"><div class="fenhong"><i class="fa fa-group"></i></div><h3>用户模块</h3></Col>
                    <Col span="4"><div class="zise"><i class="fa fa-music"></i></div><h3>音乐模块</h3></Col>
                    <Col span="4"><div class="fenhong"><i class="fa fa-clock-o"></i></div><h3>时间模块</h3></Col>
                    <Col span="4"><div class="zise"><i class="fa fa-cart-plus"></i></div><h3>购物车模块</h3></Col>
                </Row>
                <hr />
                <Row>
                    <Col span="4"><div class="huangse"><i class="fa fa-fort-awesome"></i></div><h3>住房模块</h3></Col>
                    <Col span="4"><div class="lvse"><i class="fa fa-money"></i></div><h3>住房模块</h3></Col>
                    <Col span="4"><div class="huangse"><i class="fa fa-mortar-board"></i></div><h3>博士模块</h3></Col>
                    <Col span="4"><div class="lvse"><i class="fa fa-motorcycle"></i></div><h3>摩托车模块</h3></Col>
                    <Col span="4"><div class="huangse"><i class="fa fa-keyboard-o"></i></div><h3>键盘模块</h3></Col>
                    <Col span="4"><div class="lvse"><i class="fa fa-leaf"></i></div><h3>树叶模块</h3></Col>
                </Row>
                <hr />
                <Row>
                    <Col span="4">
                        <div class="huangse">
                            <span class="fa-stack">
                                <i class="fa fa-square-o fa-stack-2x"></i>
                                <i class="fa fa-twitter fa-stack-1x"></i>
                            </span>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="huangse">
                            <span class="fa-stack">
                                <i class="fa fa-circle fa-stack-2x" style=" color: red; opacity: 0.3; "></i>
                                <i class="fa fa-flag fa-stack-1x"></i>
                            </span>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="huangse">
                            <span class="fa-stack">
                                <i class="fa fa-square fa-stack-2x" style=" color: red; opacity: 0.3; "></i>
                                <i class="fa fa-terminal fa-stack-1x"></i>
                            </span>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="huangse">
                            <span class="fa-stack">
                                <i class="fa fa-camera fa-stack-1x"></i>
                                <i class="fa fa-ban fa-stack-2x" style=" color: red; opacity: 0.2; "></i>
                            </span>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="huangse">
                            <i class="fa fa-cog fa-spin fa-fw" aria-hidden="true"></i>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="huangse">
                            <i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i>
                        </div>
                    </Col>
                </Row>
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
<style scope>
    .fenhong {
        width: 60px; background: linear-gradient(to bottom,#FFB95E ,#F35C70); height: 60px; font-size: 29px; border-radius: 50%;
        text-align: center; line-height: 60px; color: #fff; box-shadow: 2px 6px 8px rgba(245, 104, 110, 0.55); opacity: 0.8;
    }
    .zise {
        width: 60px; background: linear-gradient(to bottom,#5058fc ,#889efe); height: 60px; font-size: 29px; border-radius: 50%;
        text-align: center; line-height: 60px; color: #fff; box-shadow: 2px 6px 8px rgba(81, 89, 252, 0.55); opacity: 0.8;
    }
    .huangse {
        width: 60px; background: linear-gradient(to bottom,#ffb555 ,#ffcc39); height: 60px; font-size: 29px; border-radius: 50%;
        text-align: center; line-height: 60px; color: #fff; box-shadow: 2px 6px 8px rgba(255, 181, 85, 0.55); opacity: 0.8;
    }
    .lvse {
        width: 60px; background: linear-gradient(to bottom,#49e4df ,#3ae4be); height: 60px; font-size: 29px; border-radius: 50%;
        text-align: center; line-height: 60px; color: #fff; box-shadow: 2px 6px 8px rgba(73, 228, 223, 0.55); opacity: 0.8;
    }
</style>
