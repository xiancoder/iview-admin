## 注意

在运行jest命令之前添加这两个环境变量。以下命令将在调试模式下启动jest：

```
export VUE_CLI_BABEL_TARGET_NODE=true
export VUE_CLI_BABEL_TRANSPILE_MODULES=true
./node_modules/jest/bin/jest.js --clearCache
node --inspect-brk ./node_modules/jest/bin/jest.js -i
```

### 笔记

- 确保**不要** 添加“.babel.rc”，这将使VueJS babel成为现实。
- 通常，您需要使用该`--clearCache`选项运行jest 。否则，陈旧生成的文件也会搞乱。
- jest选项`-i`也很重要。否则，测试将在单独的进程中运行，该进程不会处于调试模式。

以上出处：https://stackoverflow.com/questions/51365250/run-jest-got-unexpected-string-at-scripttransformer-transformandbuildscript

## 常用jest语法

因为本项目中使用了elementUI，所以在写单元测试时，需要挂载elementUI

```
import {
    createLocalVue, // 创建本地Vue实例（防止污染全局vue）
    shallowMount // 浅挂载组件or页面
} from '@vue/test-utils';
import elementUI from 'element-ui';
const localVue = createLocalVue();
localVue.use(elementUI);
shallowMount(componentName, {
	localVue
});
```

在测试中挂载路由

```
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

shallowMount(Component, {
  localVue,
  router
});
```

模拟api接口方法

```
// 模拟api接口方法

jest.mock('@/api/ptAppointment', () => ({

    getHistoryReserveList: jest.fn(() => Promise.resolve({ data: {...} }))

}));
```

单元测试之异步行为

```
it('断言按钮触发click后，value值为value', done => {
  	const wrapper = shallowMount(Foo);
  	wrapper.find('button').trigger('click');
  	wrapper.vm.$nextTick(() => {
    	expect(wrapper.vm.value).toBe('value');
    	done();
  	})
})
```

方法调用相关断言

```
test('测试jest.fn()调用', () => {
  	let mockFn = jest.fn();
  	let result = mockFn(1, 2, 3);

  	// 断言mockFn的执行后返回undefined
  	expect(result).toBeUndefined();
  	// 断言mockFn被调用
  	expect(mockFn).toBeCalled();
  	// 断言mockFn被调用了一次
  	expect(mockFn).toBeCalledTimes(1);
  	// 断言mockFn传入的参数为1, 2, 3
  	expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
})
```

数字匹配

```
test('two plus two', () => {
	const value = 2 + 2;
	const value1 = 0.1 + 0.2;
 	expect(value).toBeGreaterThan(3); // 大于
 	expect(value).toBeGreaterThanOrEqual(3.5); // 大于等于
 	expect(value).toBeLessThan(5); // 小于
 	expect(value).toBeLessThanOrEqual(4.5); // 小于等于

	// toBe 和 toEqual 对于数字来说是一样的
 	expect(value).toBe(4);
 	expect(value).toEqual(4);
 	expect(value1).toBeCloseTo(0.3); // 比较浮点数的相等
});
```

正则表达式

```
test('there is a "stop" in Christoph', () => {
  	expect('Christoph').toMatch(/stop/); // 正则匹配
});
```

数组

```
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('购物清单（shopping list）里面有啤酒（beer）', () => {
  	expect(shoppingList).toContain('beer'); // 判断数组是否包含特定子项
});

function myBeverages() {
    return [
        {delicious: true, sour: false},
        {delicious: false, sour: true}
    ]
}
test('is delicious and not sour', () => {
    const myBeverage = {delicious: true, sour: false};
    expect(myBeverages()).toContainEqual(myBeverage); // 判断数组中是否包含一个特定对象(类似 toEqual 与 toContain 的结合)
});
```

其他

```
expect(houseForSale).toMatchObject(desiredHouse); // 判断houseForSale对象中包含desiredHouse对象的所有key和value值
expect(houseForSale).toHaveProperty('bath'); // 断言houseForSale对象有bath属性
expect(houseForSale).toHaveProperty('bedrooms', 4); // 断言houseForSale对象中有bedrooms属性，且属性值为4
expect(fn()).toThrow('you are using the wrong JDK'); // 断言函数在调用时抛出一个错误，错误信息为you are using the wrong JDK；
expect(compileAndroidCode).toThrow(/JDK/); // 断言函数在调用时抛出一个错误，错误信息中包含JDK

```



## Vue Test Utils中常用

挂载组件获得一个包裹器

```js
import { shallowMount } from '@vue/test-utils';
import Foo from './Foo.vue';
const wrapper = shallowMount(Foo);
```

获取组件实例（用来访问一个实例所有的方法和属性）

```
const vm = wrapper.vm;
```

find()  // 返回查找的元素

findAll() // 返回查找的元素数组

vm.$emit(方法名、生命周期) // 触发方法

exists() // 断言wrapper是否存在

isVisible // 是否可见

setData // 修改属性值

setMethods // 修改方法

setProps // 修改props

trigger // 触发
