## 介绍

`map()`，遍历数组元素，经由回调函数处理后，返回新元素组成的数组。此方法不改变原数组。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## 语法

```js
arr.map(callback(element[, index[, array]])[, thisArg])
```

### 参数

<dl>
  <dt><code>callback</code></dt>
  <dd>用以处理数组元素。其参数有三：</dd>
  <dl>
    <dt><code>element</code></dt>
    <dd>当前元素</dd>
    <dt><code>index</code>(可选)</dt>
    <dd>当前索引</dd>
    <dt><code>array</code>(可选)</dt>
    <dd>调用 <code>map</code> 的数组</dd>
  </dl>
  <dt><code>thisArg</code>(可选)</dt>
  <dd><code>callback</code> 所绑定的 this</dd>
</dl>

### 返回值

处理后的新数组
