- [介绍](#介绍)
- [语法](#语法)
  - [参数](#参数)
  - [返回值](#返回值)

## 介绍

`splice()`，用以添加、删除、替换。此方法会改变原数组

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## 语法

```js
arr.splice(start, deleteCount?, item1?, item2?, ..., itemN?)
```

### 参数

<dl>
  <dt><code>start</code></dt>
  <dd>起始索引。默认为 0。负数表示倒数</dd>
  <dt><code>deleteCount</code>(可选)</dt>
  <dd>删除的数目。不填则表示删除起始索引后的所有数据。小于等于 0 则表示不删除</dd>
  <dt><code>itemN</code>(可选)</dt>
  <dd>要添加的元素</dd>
</dl>

### 返回值

删除后的元素组成的数组
