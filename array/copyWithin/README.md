## 介绍

`copyWithin()` 用以浅复制数组某部分，替换到给定位置，并返回。该方法不改变原数组长度。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

## 语法

```js
 arr.copyWithin(target[, start[, end]])
```

### 参数

`target`

插入位。若为负数，则从末尾算起；若大于等于 `arr.length`，则不操作。

`start`

起始位，可选，默认为 `0`。若为负数，则从末尾算起。

`end`
结束位，可选，默认为 `arr.length`。若为负数，则从末尾算起。

三个参数均为整数；`start` 与 `end` 左闭右开。

### 返回值

改变后的数组。
