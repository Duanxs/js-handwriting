## 介绍

`join()`，传入连接符，拼接数组所有元素为字符串，并返回。若数组只有一项，则不使用连接符。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## 语法

```js
Array.prototype.join([separator])
```

### 参数

<dl>
  <dt><code>separator</code>(可选)</dt>
  <dd>连接符。默认为 `,`</dd>
</dl>

### 返回值

拼接后的字符串。若数组长度为零，则返回空字符串。
