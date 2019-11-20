<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">js 可以搞 Email邮箱 么???</div>
            <div class="blogContent" v-highlight>
                <p>在前端开发中，JavaScript并没有提供直接操作Email邮箱的功能方法，但是遇到这样的需求，我们应该如何实现js发送邮件至指定邮箱功能呢？下面列举能够在通过前端实现邮件发送的几种方式：</p>
                <p>方式一：利用a标签的href属性(深链接)</p>
                <script type="text/js" v-pre>
                    <a href="mailto:sample@fly63.com?subject=test&cc=sample@hotmail.com&subject=主题&body=内容">send mail</a>
                </script>
                <p>这种方式需要客户端安装有邮件客户端软件，比如 Foxmail,Outlook,YoMail之类的，mailto等于就是调用本机的邮件客户端，来进行发送邮件。记得需要配置邮箱的户手工配POP3和SMTP哦!!</p>
                <p>方式二：利用js中location</p>
                <script type="text/js" v-pre>
                    window.location="mailto:sample@fly63.com?subject=test&cc=sample@hotmail.com&subject=主题&body=内容";
                </script>
                <p>这种和方式一一样，需要安装邮件客户端软件，只是改为在js中调用而已。</p>
                <p>方式三：使用node中nodemail</p>
                <script type="text/js" v-pre>
                    // 首先需要安装node的环境，然后安装nodemailer：
                    npm install nodemailer --save
                    npm install nodemailer-smtp-transport --save
                    // config.js下的配置：
                    module.exports = {
                        email: {//邮件配置
                            service: '邮箱地址',
                            user: '你的邮箱',
                            pass: '你的密码',
                        }
                    }
                    // 调用方法：
                    sendMail('fly63@qq.com','这是测试邮件', '这是内容');
                </script>
                <p>方式五： 使用node的emailjs</p>
                <p>方式六： 使用jMail 第三方邮件操作组件 (服务器组件)</p>
                <h1>综上 没有办法使用纯js实现发送邮件功能</h1>
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
}
</script>
