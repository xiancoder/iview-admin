<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview 提供的 头像</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 2020年1月7日16:06:10 更新 经历检验 狠有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <Avatar icon="ios-person" size="large" />
                <Avatar icon="ios-person" />
                <Avatar icon="ios-person" size="small" />
                <hr />
                <Avatar shape="square" icon="ios-person" size="large" />
                <Avatar shape="square" icon="ios-person" />
                <Avatar shape="square" icon="ios-person" size="small" />
                <hr />
                <p>混合写法 有图片显示图片 没有图片显示文字 图片破图没有补救措施</p>
                <Avatar icon="ios-person" />
                <Avatar>U</Avatar>
                <Avatar>USER</Avatar>
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg">U</Avatar>
                <Avatar src="https://i.loli.net/2017/08/21/599a5214724243.jpg">U</Avatar>
                <Avatar src="">U</Avatar>
                <Avatar style="background-color: #87d068" icon="ios-person" />
                <hr />
                <p class="text-danger">
                    <span>当信息中有头像.名字时候</span>
                    <Avatar style="color: #f56a00;background-color: #fde3cf" :src="info1.pic"
                        icon="ios-person">{{info1.name}}</Avatar>
                    <span>当信息中有名字,但头像错误的时候</span>
                    <Avatar style="color: #f56a00;background-color: #fde3cf" :src="info2.pic"
                        @on-error="info2.pic=''"
                        :icon="info2.name?'':'ios-person'">{{info2.name[0]}}</Avatar>
                    <span>当信息中没有名字,头像也错误的时候</span>
                    <Avatar style="color: #f56a00;background-color: #fde3cf" :src="info3.pic"
                        @on-error="info3.pic=''"
                        :icon="info3.name?'':'ios-person'">{{info3.name[0]}}</Avatar>
                </p>
                <script type="text/html" v-pre>
                    <span>当信息中有头像.名字时候</span>
                    <Avatar style="color: #f56a00;background-color: #fde3cf" :src="info1.pic"
                        icon="ios-person">{{info1.name}}</Avatar>
                    <span>当信息中有名字,但头像错误的时候</span>
                    <Avatar style="color: #f56a00;background-color: #fde3cf" :src="info2.pic"
                        @on-error="info2.pic=''"
                        :icon="info2.name?'':'ios-person'">{{info2.name[0]}}</Avatar>
                    <span>当信息中没有名字,头像也错误的时候</span>
                    <Avatar style="color: #f56a00;background-color: #fde3cf" :src="info3.pic"
                        @on-error="info3.pic=''"
                        :icon="info3.name?'':'ios-person'">{{info3.name[0]}}</Avatar>
                </script>
                <hr />
                <Badge :count="1">
                    <Avatar shape="square" icon="ios-person" />
                </Badge>
                <Badge dot>
                    <Avatar shape="square" icon="ios-person" />
                </Badge>
                <hr />
                <div class="demo-avatar">
                    <Avatar :style="{background: color}">{{ user }}</Avatar>
                    <Button size="small" @click="handleChange">Change</Button>
                </div>
                <hr />
                <div class="api"><div class="anchor"><h2 id="API">API</h2>  <a href="#API">#</a></div> <div class="anchor"><h3 id="Avatar_props">Avatar props</h3>  <a href="#Avatar_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>shape</td> <td>指定头像的形状，可选值为 circle、square</td> <td>String</td> <td>circle</td></tr> <tr><td>size</td> <td>设置头像的大小，可选值为 large、small、default</td> <td>String</td> <td>default</td></tr> <tr><td>src</td> <td>图片类头像的资源地址</td> <td>String</td> <td>-</td></tr> <tr><td>icon</td> <td>设置头像的图标类型，参考 <code>Icon</code> 组件</td> <td>String</td> <td>-</td></tr> <tr><td>custom-icon</td> <td>自定义图标</td> <td>String</td> <td>-</td></tr></tbody></table> <div class="anchor"><h3 id="Avatar_events">Avatar events</h3>  <a href="#Avatar_events">#</a></div> <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-error <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td> <td>在设置 src 且图片加载不成功时触发</td> <td>event</td></tr></tbody></table></div>
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
const UserList = [1, 2, 3]
const ColorList = [1, 2, 3]
export default {
    data () {
        return {
            user: UserList[0],
            color: ColorList[0],
            info1: {name: 'Lucy', pic: 'https://i.loli.net/2017/08/21/599a521472424.jpg'},
            info2: {name: 'Lucy', pic: 'https://i.loli.net/2017/08/21/599a5214724241.jpg'},
            info3: {name: '', pic: 'https://i.loli.net/2017/08/21/599a5214724241.jpg'}
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
