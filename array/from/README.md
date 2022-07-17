## 介绍

`from()`，接收类数组或可迭代对象，返回新数组。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## 语法

```js
Array.from(arrayLike[, mapFn[, thisArg]])
```

### 参数

<dl>
  <dt><code>arrayLike</code></dt>
  <dd>欲转换的类数组或可迭代对象。</dd>
  <dt><code>mapFn</code>(可选)</dt>
  <dd>新数组中，每个元素执行此回调函数。</dd>
  <dt><code>thisArg</code>(可选)</dt>
  <dd>调用 <code>mapFn</code> 时绑定的 <code>this</code>。</dd>
</dl>

### 返回值

新数组。
