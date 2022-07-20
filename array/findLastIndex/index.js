Array.prototype.myFindLastIndex = function (callback, thisArg) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length >> 0

  for (let i = length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i
    }
  }
  return -1
}

const a = [5, 12, 50, 130, 44]
const b = [5, 12, 50, 130, 44]

const findLastIndexFn = (item) => item > 45
console.log(`🚀 ~ a.myFindLastIndex()`, a.myFindLastIndex(findLastIndexFn))
// console.log(`🚀 ~ a.findLastIndex()  `, b.findLastIndex(findLastIndexFn))
