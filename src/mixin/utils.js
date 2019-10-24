export default {
    methods: {
        go (name, obj) {
            if (obj) {
                this.$router.push({ name, obj });
            } else if (name) {
                this.$router.push({ name });
            } else {
                window.location.reload();
            }
        },
        saveParamState (obj) {
            const time = new Date().getTime()
            const name = this.$router.history.current.name
            window.localStorage.setItem(name + time, JSON.stringify(obj));
            const query = { 'search': time }
            // this.$router.replace({ name, query }) // 不能回退
            this.$router.push({ name, query })
        },
        getParamState () {
            const time = this.$route.query.search
            const name = this.$router.history.current.name
            if (time) {
                try {
                    const obj = window.localStorage.getItem(name + time);
                    return JSON.parse(obj)
                } catch (e) {
                    return {}
                }
            }
            if (window.history.length <= 1) {
                window.localStorage.clear()
            }
            return {}
        },
        alert (msg) {
            this.$Message.info({
                content: msg || '处理中，请稍后'
            });
        },
        success (msg) {
            this.$Message.info({
                content: msg || '保存成功'
            });
        },
        error (msg) {
            this.$Message.info({
                content: msg || '保存失败',
                duration: 10,
                closable: true
            });
        },
        confirm (msg) {
            return new Promise((resolve, reject) => {
                this.$Modal.confirm({
                    title: '请确认',
                    content: '<p>' + msg + '</p>',
                    onOk: resolve || function () {},
                    onCancel: reject || function () {}
                });
            });
        }
    }
};
