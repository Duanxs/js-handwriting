Array.prototype.myFlat = function (depthArg = 1) {
  // 强制转数字，防止输入非整数
  const depth = ~~depthArg

  const result = []

  // 递归函数
  function flat(arr, depth) {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        flat(item, depth - 1)
      } else {
        result.push(item)
      }
    })
  }
  flat(this, depth)

  return result
}

const a = [1, 2, [3, [6]], 4, 5]
const b = [1, 2, [3, [6]], 4, 5]

const depth = 1
console.log(`🚀 ~ a.myFlat()`, a.myFlat(depth))
console.log(`🚀 ~ b.flat()  `, b.flat(depth))
