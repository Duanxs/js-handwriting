## 介绍

`findLastIndex()`，接收回调函数一个，过滤出满足条件的**最后一个**元素的索引，没找到则返回 `-1`。此方法不改变原数组。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)

## 语法

```js
arr.findLastIndex(callback(element[, index[, array]])[, thisArg])
```

### 参数

<dl>
  <dt><code>callback</code></dt>
  <dd>用以测试数组元素，满足则返回该元素索引，并结束遍历。其参数有三：</dd>
  <dl>
    <dt><code>element</code></dt>
    <dd>当前元素</dd>
    <dt><code>index</code>(可选)</dt>
    <dd>当前索引</dd>
    <dt><code>array</code>(可选)</dt>
    <dd>调用 <code>find</code> 的数组</dd>
  </dl>
  <dt><code>thisArg</code>(可选)</dt>
  <dd><code>callback</code> 所绑定的 this</dd>
</dl>

### 返回值

返回满足条件的最后一个元素索引，否则返回 `-1`。
