<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">占位符骨架屏</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>loading的更亲民的表达方式</p>
                <p><Icon type="md-checkmark" style="color:red"/>赶脚很好 但是使用场景???</p>
                <Row :gutter="20">
                    <Col span="12">
                        <h2 class="h4">Generic placeholder</h2>
                        <div class="ph-item">
                            <div class="ph-col-12">
                                <div class="ph-picture"></div>
                                <div class="ph-row">
                                    <div class="ph-col-6 big"></div>
                                    <div class="ph-col-4 empty big"></div>
                                    <div class="ph-col-2 big"></div>
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                        <h2 class="h4">Placeholder in a external twitter bootstrap grid</h2>
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <div class="ph-item">
                                    <div class="ph-col-12">
                                        <div class="ph-picture"></div>
                                        <div class="ph-row">
                                            <div class="ph-col-4"></div>
                                            <div class="ph-col-8 empty"></div>
                                            <div class="ph-col-12"></div>
                                        </div>
                                    </div>
                                    <div class="ph-col-2">
                                        <div class="ph-avatar"></div>
                                    </div>
                                    <div>
                                        <div class="ph-row">
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-2"></div>
                                            <div class="ph-col-10 empty"></div>
                                            <div class="ph-col-8 big"></div>
                                            <div class="ph-col-4 big empty"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="ph-item">
                                    <div class="ph-col-12">
                                        <div class="ph-picture"></div>
                                        <div class="ph-row">
                                            <div class="ph-col-4"></div>
                                            <div class="ph-col-8 empty"></div>
                                            <div class="ph-col-12"></div>
                                        </div>
                                    </div>
                                    <div class="ph-col-2">
                                        <div class="ph-avatar"></div>
                                    </div>
                                    <div>
                                        <div class="ph-row">
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-2"></div>
                                            <div class="ph-col-10 empty"></div>
                                            <div class="ph-col-8 big"></div>
                                            <div class="ph-col-4 big empty"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="ph-item">
                                    <div class="ph-col-12">
                                        <div class="ph-picture"></div>
                                        <div class="ph-row">
                                            <div class="ph-col-4"></div>
                                            <div class="ph-col-8 empty"></div>
                                            <div class="ph-col-12"></div>
                                        </div>
                                    </div>
                                    <div class="ph-col-2">
                                        <div class="ph-avatar"></div>
                                    </div>
                                    <div>
                                        <div class="ph-row">
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-2"></div>
                                            <div class="ph-col-10 empty"></div>
                                            <div class="ph-col-8 big"></div>
                                            <div class="ph-col-4 big empty"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span="12">
                        <h2 class="h4">Other placeholder examples</h2>
                        <div class="ph-item">
                            <div class="ph-col-12">
                                <div class="ph-picture"></div>
                            </div>
                            <div class="ph-col-2">
                                <div class="ph-avatar"></div>
                            </div>
                            <div>
                                <div class="ph-row">
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-2"></div>
                                    <div class="ph-col-10 empty"></div>
                                </div>
                            </div>
                            <div class="ph-col-12">
                                <div class="ph-row">
                                    <div class="ph-col-10 big"></div>
                                    <div class="ph-col-2 empty big"></div>
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                        <div class="ph-item">
                            <div class="ph-col-2">
                                <div class="ph-avatar"></div>
                            </div>
                            <div>
                                <div class="ph-row">
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-2"></div>
                                    <div class="ph-col-10 empty"></div>
                                </div>
                            </div>
                            <div class="ph-col-12">
                                <div class="ph-picture"></div>
                                <div class="ph-row">
                                    <div class="ph-col-10 big"></div>
                                    <div class="ph-col-2 empty big"></div>
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                            <div class="ph-col-4">
                                <div class="ph-picture"></div>
                            </div>
                            <div>
                                <div class="ph-row">
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-2"></div>
                                    <div class="ph-col-10 empty"></div>
                                    <div class="ph-col-8"></div>
                                    <div class="ph-col-4 empty"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                        <div class="ph-item">
                            <div class="ph-col-2">
                                <div class="ph-avatar"></div>
                            </div>
                            <div>
                                <div class="ph-row">
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-2"></div>
                                    <div class="ph-col-10 empty"></div>
                                </div>
                            </div>
                            <div class="ph-col-12">
                                <div class="ph-picture"></div>
                                <div class="ph-row">
                                    <div class="ph-col-10 big"></div>
                                    <div class="ph-col-2 empty big"></div>
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
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
