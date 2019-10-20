<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview 中的 Notice</div>
            <div class="blogContent" v-highlight>
                <p>常用于以下场景：</p>
                <p>通知内容带有描述信息</p>
                <p>系统主动推送</p>
                <p>https://www.iviewui.com/components/notice</p>
                <p>With desc</p>
                <Button @click="info(false)">Info</Button>
                <Button @click="success(false)">Success</Button>
                <Button @click="warning(false)">Warning</Button>
                <Button @click="error(false)">Error</Button>
                <p>Only title</p>
                <Button @click="info(true)">Info</Button>
                <Button @click="success(true)">Success</Button>
                <Button @click="warning(true)">Warning</Button>
                <Button @click="error(true)">Error</Button>
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
        info (nodesc) {
            this.$Notice.info({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            })
        },
        success (nodesc) {
            this.$Notice.success({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            })
        },
        warning (nodesc) {
            this.$Notice.warning({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            })
        },
        error (nodesc) {
            this.$Notice.error({
                title: 'Notification title',
                desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
            })
        }
    }
}
</script>
