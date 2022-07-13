## 介绍

`concat()` 方法用以合并数组，其参数为数组或值，可为多个。此方法返回新数组，且不更改原数组。

[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## 示例

``` js
const 原数组 = [1, 2, 3]

const 数字 = 4

const 数字并入数组 = 原数组.concat(数字) // [1, 2, 3, 4]


const 数组 = [4, 5]

const 数组并入数组 = 原数组.concat(数组) // [1, 2, 3, 4, 5]

```

### 并入多维数组或对象

并入引用类型会保留引用关系

``` js
const 原数组 = [1, 2, 3]

const 二维数组 = [[4]]

const 二维数组并入数组 = 原数组.concat(二维数组) // [1, 2, 3, [4]]

二维数组[0].push(5)

console.log(二维数组并入数组) // [1, 2, 3, [4, 5]]


const 对象 = {
  a: 4
}

const 对象并入数组 = 原数组.concat(对象) // [1, 2, 3, {a: 4}]

对象.b = 5

console.log(对象并入数组) // [1, 2, 3, {a: 4, b: 5}]
```
