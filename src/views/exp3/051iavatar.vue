<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle"></div>
            <div class="blogContent" v-highlight>
                <div class="demo-avatar">
                    <Avatar icon="ios-person" size="large" />
                    <Avatar icon="ios-person" />
                    <Avatar icon="ios-person" size="small" />
                </div>
                <div class="demo-avatar">
                    <Avatar shape="square" icon="ios-person" size="large" />
                    <Avatar shape="square" icon="ios-person" />
                    <Avatar shape="square" icon="ios-person" size="small" />
                </div>
                <div class="demo-avatar">
                    <Avatar icon="ios-person" />
                    <Avatar>U</Avatar>
                    <Avatar>USER</Avatar>
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
                    <Avatar style="background-color: #87d068" icon="ios-person" />
                </div>
                <div class="demo-avatar-badge">
                    <Badge :count="1">
                        <Avatar shape="square" icon="ios-person" />
                    </Badge>
                    <Badge dot>
                        <Avatar shape="square" icon="ios-person" />
                    </Badge>
                </div>
                <div class="demo-avatar">
                    <Avatar :style="{background: color}">{{ user }}</Avatar>
                    <Button size="small" @click="handleChange">Change</Button>
                </div>
                <div class="api"><div class="anchor"><h2 id="API">API</h2>  <a href="#API">#</a></div> <div class="anchor"><h3 id="Avatar_props">Avatar props</h3>  <a href="#Avatar_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>shape</td> <td>指定头像的形状，可选值为 circle、square</td> <td>String</td> <td>circle</td></tr> <tr><td>size</td> <td>设置头像的大小，可选值为 large、small、default</td> <td>String</td> <td>default</td></tr> <tr><td>src</td> <td>图片类头像的资源地址</td> <td>String</td> <td>-</td></tr> <tr><td>icon</td> <td>设置头像的图标类型，参考 <code>Icon</code> 组件</td> <td>String</td> <td>-</td></tr> <tr><td>custom-icon</td> <td>自定义图标</td> <td>String</td> <td>-</td></tr></tbody></table> <div class="anchor"><h3 id="Avatar_events">Avatar events</h3>  <a href="#Avatar_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-error <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td> <td>在设置 src 且图片加载不成功时触发</td> <td>event</td></tr></tbody></table></div>
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
const UserList = [1, 2, 3]
const ColorList = [1, 2, 3]
export default {
    data () {
        return {
            user: UserList[0],
            color: ColorList[0]
        }
    },
    props: {},
    computed: {},
    methods: {
        handleChange () {
            const index = UserList.indexOf(this.user)
            this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
            this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]
        }
    }
}
</script>
