## 介绍

`fill()`，取一定值，填充数组。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

## 语法

```js
arr.fill(value[, start[, end]])
```

### 参数

<dl>
  <dt><code>value</code></dt>
  <dd>填充值</dd>
  <dt><code>start</code>(可选)</dt>
  <dd>起始位置，默认为 0</dd>
  <dt><code>start</code>(可选)</dt>
  <dd>结束位置，默认为数组长度</dd>
</dl>

### 返回值

填充后的数组。

## 描述

`start` 与 `end` 均可为负数，为负数时，表示从末尾数起。

以 `start` 为例，其真实索引为 `length + start`，此处 `length` 为 `this` 对象的 `length` 属性，也就是说 `fill` 方法的 `this` 可以不是数组对象。例：

```js
let arr = []
arr.fill.call({ length: 5 }, 1)
// {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, length: 5}
```

上面例子，其 `this` 为 `{length: 5}`。
