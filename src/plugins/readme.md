项目::插件管理
=================

留言:: liuyp 2019年9月28日20:54:55

***

> 负责::所有的插件有关的声明和配置都放在这里
> 注意::所有的插件禁止直接使用
> 注意::比如公共方法类库moment.js 需要包装一层 因为我发现它有些方法不全面 包装一层方便修改以及更换库
> 注意::index.js出口负责输出初始化既使用的库

```
├── plugins // 三方插件管理
    ├── fontawesome.js // 友好字体图案
    ├── iview.js // iview 基本配置
    ├── moment.js // 日期库
    ├── orgtree.js // 树形控件
    ├── treetable.js // 树形表格
    ├── vueEditor.js // 富文本
    └── index.js //出口
```