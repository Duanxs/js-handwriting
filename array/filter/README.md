## 介绍

`filter()`，接收回调函数一个，过滤出所有满足条件的元素，返回这些元素组成的新数组。此方法不改变原数组。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## 语法

```js
arr.filter(callback(element[, index[, array]])[, thisArg])
```

### 参数

<dl>
  <dt><code>callback</code></dt>
  <dd>用以测试数组元素，满足则保留该元素，否则不保留。其参数有三：</dd>
  <dl>
    <dt><code>element</code></dt>
    <dd>当前元素</dd>
    <dt><code>index</code>(可选)</dt>
    <dd>当前索引</dd>
    <dt><code>array</code>(可选)</dt>
    <dd>调用 <code>filter</code> 的数组</dd>
  </dl>
  <dt><code>thisArg</code>(可选)</dt>
  <dd><code>callback</code> 所绑定的 this</dd>
</dl>

### 返回值

过滤后的新数组
