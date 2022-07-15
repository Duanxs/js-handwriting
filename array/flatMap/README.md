## 介绍

`flatMap()`，通俗讲，即是先 `map()` 再 `flat(1)`，`flat` 展平深度为 1。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

## 语法

```js
arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])
```

### 参数

<dl>
  <dt><code>callback</code></dt>
  <dd>返回新数组。其参数有三：</dd>
  <dl>
    <dt><code>currentValue</code></dt>
    <dd>当前元素</dd>
    <dt><code>index</code>(可选)</dt>
    <dd>当前索引</dd>
    <dt><code>array</code>(可选)</dt>
    <dd>调用 <code>flatMap</code> 的数组</dd>
  </dl>
  <dt><code>thisArg</code>(可选)</dt>
  <dd><code>callback</code> 所绑定的 this</dd>
</dl>

### 返回值

处理后的新数组
