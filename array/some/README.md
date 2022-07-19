- [介绍](#介绍)
- [语法](#语法)
  - [参数](#参数)
  - [返回值](#返回值)

## 介绍

`some()`，用以测试数组是否满足给定的回调函数，有一个元素通过即返回 `true`。此方法不会改变原数组

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## 语法

```js
arr.some(callback(element, index?, array?), thisArg?)
```

### 参数

<dl>
  <dt><code>callback</code></dt>
  <dd>测试函数。参数有三：</dd>
  <dl>
    <dt><code>element</code></dt>
    <dd>当前处理元素</dd>
    <dt><code>index</code>(可选)</dt>
    <dd>当前索引</dd>
    <dt><code>array</code>(可选)</dt>
    <dd>数组本身</dd>
  </dl>
  <dt><code>thisArg</code>(可选)</dt>
  <dd>调用 <code>some</code> 所绑定的 <code>this</code></dd>
</dl>

### 返回值

有一个元素通过测试即返回 `true`，否则返回 `false`
