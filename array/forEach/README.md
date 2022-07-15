## 介绍

`forEach()`，给定一函数，遍历执行。此方法不改变原数组。

> 注：除了抛出异常，否则无法终止遍历。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## 语法

```js
arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])
```

### 参数

<dl>
  <dt><code>callback</code></dt>
  <dd>每个元素执行的函数。其参数有三：</dd>
  <dl>
    <dt><code>currentValue</code></dt>
    <dd>当前元素</dd>
    <dt><code>index</code>(可选)</dt>
    <dd>当前索引</dd>
    <dt><code>array</code>(可选)</dt>
    <dd>调用 <code>forEach</code> 的数组</dd>
  </dl>
  <dt><code>thisArg</code>(可选)</dt>
  <dd><code>callback</code> 所绑定的 this</dd>
</dl>

### 返回值

undefined
