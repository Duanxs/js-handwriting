Array.prototype.myFlatMap = function (callback, thisArg) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length

  const result = []
  for (let i = 0; i < length; i++) {
    // 跳过空项
    if (this[i] === undefined) continue

    const item = callback.call(thisArg, this[i], i, this)
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        result.push(item[j])
      }
    } else {
      result.push(item)
    }
  }
  return result
}

const a = [1, , 2, [3], [4, [5]], 6, []]
const b = [1, , 2, [3], [4, [5]], 6, []]
// const a = [5, 4, -3, 20, 17, -33, -4, 18]
// const b = [5, 4, -3, 20, 17, -33, -4, 18]

const fn = (item) => [item * 10]
// const fn = (n) => (n < 0 ? [] : n % 2 == 0 ? [n] : [n - 1, 1])
console.log(`🚀 ~ a.myFlatMap()`, a.myFlatMap(fn))
console.log(`🚀 ~ a.flatMap()  `, b.flatMap(fn))
