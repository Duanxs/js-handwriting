## 介绍

`reduce()`，接收累加函数一个，累加函数以上次执行结果为底，每个元素执行之。遍历完成后返回汇总的值。第一次，不存在上次执行结果，若 `initialValue` 有值，则用该值，否则用数组第一个元素，此时累加器从第二个元素起执行

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## 语法

```js
arr.reduce(
  callback(previousValue, currentValue, currentIndex?, array?),
  initialValue?
)
```

### 参数

<dl>
  <dt><code>callback</code></dt>
  <dd>累加器函数。其参数有四：</dd>
  <dl>
    <dt><code>previousValue</code></dt>
    <dd>上次回调返回值。初次，若 <code>initialValue</code> 有值，则为该值，否则为数组第一个值</dd>
    <dt><code>currentValue</code></dt>
    <dd>当前元素。初次，若 <code>initialValue</code> 有值，则为 <code>array[0]</code>，否则为 <code>array[1]</code></dd>
    <dt><code>currentIndex</code>(可选)</dt>
    <dd>当前索引。初次，若 <code>initialValue</code> 有值，则为 <code>0</code>，否则为 <code>1</code></dd>
    <dt><code>array</code>(可选)</dt>
    <dd>调用 <code>reduce</code> 的数组</dd>
  </dl>
  <dt><code>initialValue</code>(可选)</dt>
  <dd><code>previousValue</code> 初始值</dd>
</dl>

### 返回值

处理后的结果
