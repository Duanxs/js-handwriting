- [介绍](#介绍)
- [语法](#语法)
  - [参数](#参数)
  - [返回值](#返回值)

## 介绍

`toLocaleString()`， 数组转字符串。数组中的元素将使用各自的 `toLocaleString` 方法转成字符串，随后将所有元素用连接符链接并返回。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)

## 语法

```js
arr.toLocaleString(locales?, options?)
```

### 参数

<dl>
  <dt><code>locales</code>(可选)</dt>
  <dd>[Intl 对象参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl)</dd>
  <dt><code>options</code>(可选)</dt>
  <dd>一个可配置属性的对象，对于数字 <code>Number.prototype.toLocaleString()</code>，<code>对于日期Date.prototype.toLocaleString()</code>.</dd>
</dl>

### 返回值

拼接后的字符串
