## 介绍

`every()`，其接收一个回调函数，用以判断数组内所有元素是否满足给定的回调函数，其返回布尔值。此方法不改变原数组。

## 语法

```js
arr.every(callback(element[, index[, array]])[, thisArg])
```

### 参数

<dl>
  <dt><code>callback</code></dt>
  <dd>用以测试每个元素，其接收三个参数：
  <dl>
    <dt><code>element</code></dt>
    <dd>当前值。</dd>
    <dt><code>index</code>(可选)</dt>
    <dd>当前值的索引。</dd>
    <dt><code>array</code>(可选)</dt>
    <dd>当前数组。</dd>
  </dl>
  </dd>
  <dt><code>thisArg</code></dt>
  <dd>指定 <code>callback</code> 的 <code>this</code> 值。</dd>
</dl>

### 返回值

若回调函数每次均返回类真值，则返回 `true`，否则返回 `false`。
