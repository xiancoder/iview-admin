<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">indexedDB web数据库简单实用</div>
            <div class="blogContent" v-highlight>
                <table> <tbody><tr> <th></th> <th>会话期 Cookie</th> <th>持久性 Cookie</th> <th>sessionStorage</th> <th>localStorage</th> <th>indexedDB</th> <th>WebSQL</th> </tr> <tr> <th>存储大小</th> <td>4kb</td> <td>4kb</td> <td>2.5~10 MB</td> <td>2.5~10 MB</td> <td>&gt;250MB</td> <td>已废弃</td> </tr> <tr> <th>失效时间</th> <td>浏览器关闭自动清除</td> <td>设置过期时间，到期后清除</td> <td>浏览器关闭后清除</td> <td>永久保存（除非手动清除）</td> <td>手动更新或删除</td> <td>已废弃</td> </tr> <tr> <th>与服务端交互</th> <td>有</td> <td>有</td> <td>无</td> <td>无</td> <td>无</td> <td>已废弃</td> </tr> <tr> <th>访问策略</th> <td>符合同源策略可以访问</td> <td>符合同源策略可以访问</td> <td>符合同源策略可以访问</td> <td>即使同源也不可相互访问</td> <td>符合同源策略可以访问</td> <td>已废弃</td> </tr> </tbody></table>
                <h3 id="articleHeader1">一、什么是 IndexedDB ？</h3>
                <blockquote>通俗地说，IndexedDB 就是浏览器提供的本地数据库，它可以被网页脚本创建和操作。IndexedDB 允许储存大量数据，提供查找接口，还能建立索引。这些都是 LocalStorage 所不具备的。就数据库类型而言，IndexedDB 不属于关系型数据库（不支持 SQL 查询语句），更接近 NoSQL 数据库。</blockquote>
                <p>从 DB（Data Base) 可以看出它是一个数据库。常用的数据库有两种类型：</p>
                <ul>
                    <li>关系型数据库：数据存储在表中，使用 sql 语句操作数据库，如：<b>MySQL</b>、<b>Oracle</b>、<b>WebSQL</b>（已废弃）</li>
                    <li>非关系型数据库：数据集作为 JSON 对象存储，不需要写sql 语句，如：<b>Redis</b>、<b>MongoDB</b>、<b>IndexedDB</b></li>
                </ul>
                <p>IndexedDB 是非关系型数据库，不需要写 sql 语句进行数据库操作，数据格式可使用 JSON 对象。</p>
                <p>IndexedDB 有很多优点：</p>
                <ul>
                    <li>存储空间大：没有存储上限，一般来说不小于 250M</li>
                    <li>
                        <p>存储格式多样：</p>
                        <ul>
                            <li>支持字符串存储</li>
                                <li>支持二进制存储(ArrayBuffer 对象和 Blob 对象）</li>
                                <li>支持 JSON 键值对存储，一个对象相当于关系型数据库中的数据表，我们称其为 <b>对象仓库 (object store)</b>
                            </li>
                        </ul>
                    </li>
                    <li>异步操作：性能更强。防止进行大量数据读写时，拖慢网页（localStorage 的操作是同步的）</li>
                    <li>同源限制：每一个数据库对应一个域名。只能访问自身域名下的数据库，不能跨域访问</li>
                    <li>支持事务：在一系列操作步骤之中，如果有一步失败，那么整个事务就都会取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况</li>
                </ul>
                <h3 id="articleHeader2">二、适用场景</h3>
                <ul>
                    <li>cookie：短期登陆，例如：token 会过期，需要设置过期时间，过期后重新换取 token</li>
                    <li>sessionStorage：敏感账号一次性登录</li>
                    <li>localStorage：长期登录</li>
                    <li>indexedDB：存储大量结构化数据数据</li>
                </ul>
                <p>对于简单的数据，应该继续使用 localStorage；对于大量结构化数据，indexedDB 会更适合。当然如果你需要设置过期时间的短期存储，还是使用 cookie 存储吧。</p>
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
    },
    mounted () {
    }
}
</script>
