<template>
    <div>
        <div class="blogCss">
            <div class="blog">
                <div class="blogTitle">所有的表格工具栏中的输入框都需要剔除前后空格</div>
                <div class="blogContent" v-highlight>
                    <p>2019年12月3日13:46:55 运营反应不小心输入的空格总会影响搜索结果 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 必须留意输入框剔除前后空格 </p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">表格页 搜索/排序/分页/操作 的交叉影响</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 流程已完善 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年11月27日17:33:16 通过了检验 本套流程可以投入生产 </p>
                    <hr />
                    <p>1 初始化的时候 给表面搜索项深拷贝两份 <font color="red">一个是实际搜索项 一个是备份 </font></p>
                    <p>2 用户点击搜索按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 分页置为1 刷新页面 </p>
                    <p>3 用户点击排序按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 分页置为1 刷新页面 </p>
                    <p>4 用户点击操作按钮例如导出时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 不关分页 刷新页面 </p>
                    <p>5 用户点击分页时候 <font color="red">实际搜索项拷贝给表面搜索项</font> 刷新页面 </p>
                    <p>6 本来想直接在data声明一个大对象来处理所有表格相关的内容和方法 似乎作用域不支持这样做 this在对象声明时候就绑定了</p>
                    <p>6 即 ()=>{} 可以是this绑定在外 但是如果{}对象中使用 其对象就是this</p>
                    <hr />
                    <p>1 初始化的时候 给表面搜索项深拷贝两份 <font color="red">一个是实际搜索项 一个是备份 </font></p>
                    <p>2 用户点击搜索按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 分页置为1 刷新页面 </p>
                    <p>3 用户点击排序按钮时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 分页置为1 刷新页面 </p>
                    <p>4 用户点击操作按钮例如导出时候 <font color="red">表面搜索项拷贝给实际搜索项</font> 排序内容不变 不关分页 刷新页面 </p>
                    <p>5 用户点击分页时候 <font color="red">实际搜索项拷贝给表面搜索项</font> 刷新页面 </p>
                    <p>6 本来想直接在data声明一个大对象来处理所有表格相关的内容和方法 似乎作用域不支持这样做 this在对象声明时候就绑定了</p>
                    <p>6 即 ()=>{} 可以是this绑定在外 但是如果{}对象中使用 其对象就是this</p>
                    <p>1 能用箭头函数的/杜绝使用<b>var me = this</b></p>
                    <p>2 写HTML时候属性超过3个的话/建议换行/每行3个属性/其中if for 指令提前</p>
                    <p>3 精简所有用到的组件 为模板化配凑做准备</p>
                    <p>4 公共部分拆分 mixin注入式继承</p>
                    <p>5 尝试使用页面生成</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">表格页第一版正式想法</div>
                <div class="blogContent" v-highlight>
                    <p><Icon type="md-checkmark" style="color:green"/> 流程已完善 </p>
                    <p><Icon type="md-checkmark" style="color:green"/> 2019年11月27日17:33:16 通过了检验 本套流程可以投入生产 </p>
                    <hr />
                    <p>1 声明data 按照功能划分 搜索项/分页/排序/表格列属性</p>
                    <p>2 声明method 按照需要 首先放置 goto所有可能跳转 然后 hendleAjax, hendleSearch, hendleSort, hendlePage</p>
                    <p>3 代码堆之间使用分隔符</p>
                    <p>4 ajax必须调用this.$api使用 参数转换/请求必须放在api模块</p>
                    <p>5 表格页作为最常用的第一层页面 其alert/comfime 请用js调用 其model请封装插件引入调用方便修改</p>
                    <p>6 为自动化做好坚实基础准备 目前难点是大力推广的话 自身太累 小莉推广的话 大家偷懒 how???</p>
                    <p></p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">约定俗成的编码规则 要求和我合作的人必须遵守或者改进</div>
                <div class="blogContent" v-highlight>
                    <p class="text-danger">1 本规范定义与2019年10月19日 第一版本 如和旧版本冲突默认遵守本版本</p>
                    <p class="text-danger">2 因为有了mode编译压缩 所有变量/方法/临时方法 必须写注释</p>
                    <p class="text-danger">3 vue编程templete必须放第一位 方便第一眼看出来这是什么页面</p>
                    <p class="text-danger">3 vue编程script必须放第二位 其vue各个属性按照eslint规律排列</p>
                    <p class="text-danger">3 vue编程style必须放第三位 必须scoped 其样式模块化 零散样式进入样式库</p>
                    <p class="text-danger">4 vue编程tab必须抽取组件</p>
                    <p class="text-danger">5 编码风格因人而异 不再强求 但要保证第一要点 易读</p>
                    <p class="text-danger">5 易读的描述 缩进必须严谨 能一行写就一行 不要太长 多写注释</p>
                    <p class="text-danger">6 所有的绑定事件触发的函数统一 hendleXxxx命名 按堆排放</p>
                    <p class="text-danger">6 所有的绑定变量按堆排放 例如表格变量都放在obj中</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
            <div class="blog">
                <div class="blogTitle">统一化写法带来的好处</div>
                <div class="blogContent" v-highlight>
                    <p>1 方便了互相抄袭 复制粘贴永远是编码最简便的方式</p>
                    <p>2 方便了后来接手的人更加容易的切入主题</p>
                    <p>3 方便了统一化的单元测试的写法 初始值/搜索项/分页/排序/单按钮跳转/复位</p>
                </div>
                <div class="blogFooter">
                    <Tag color="green">收集</Tag>
                    <Tag color="cyan">学习</Tag>
                    <Tag color="blue">增长</Tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
