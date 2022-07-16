## 介绍

`indexOf()`，给定一元素，查找并返回其第一个索引，没找到则返回 -1。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## 语法

```js
arr.indexOf(valueToFind[, fromIndex])
```

### 参数

<dl>
  <dt><code>valueToFind</code></dt>
  <dd>待查的元素</dd>
  <dt><code>fromIndex</code>(可选)</dt>
  <dd>查找的起始位，默认为 0。若为负数，则从末尾数起</dd>
</dl>

### 返回值

找到则返回索引，否则返回 -1。
