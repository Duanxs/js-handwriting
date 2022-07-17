## 介绍

`lastIndexOf()`，给定一元素，查找并返回其最后一个索引，没找到则返回 -1。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

## 语法

```js
arr.lastIndexOf(valueToFind[, fromIndex])
```

### 参数

<dl>
  <dt><code>valueToFind</code></dt>
  <dd>待查的元素</dd>
  <dt><code>fromIndex</code>(可选)</dt>
  <dd>查找的起始位，默认为数组长度 -1。若为负数，则从末尾数起</dd>
</dl>

### 返回值

找到则返回索引，否则返回 -1。
