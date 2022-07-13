## 介绍

`at()` 方法用以返回索引到的项目，需传整数参，正负均可。为负数，则从末尾倒数。若索引不到，则返回 `undefined`。

> `at()` 方法为 `ES2022` 新增，[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

## 示例

``` js
const nums = [1, 2, 3, 4, 5]

nums.at(1)
// 输出 2

nums.at(-1)
// 输出 5

```
