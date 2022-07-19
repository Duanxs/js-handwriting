- [介绍](#介绍)
- [语法](#语法)
  - [参数](#参数)
  - [返回值](#返回值)

## 介绍

`slice()`，提供起始索引结束索引，返回两个索引之间的数组，前闭后开。此方法不会改变原数组

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## 语法

```js
arr.slice(begin?, end?)
```

### 参数

`begin`

: 起始索引，默认为 0。若为负数，则从末尾算起，如 -2，表示倒数第二个

`end`

: 结束索引，默认为数组长度，亦可为负数

### 返回值

切片后的数组
