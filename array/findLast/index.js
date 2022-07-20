Array.prototype.myFindLast = function (callback, thisArg) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length

  for (let i = length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i]
    }
  }
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const findFn = (item) => item > 2
console.log(`🚀 ~ a.myFindLast()`, a.myFindLast(findFn))
// console.log(`🚀 ~ a.findLast()  `, b.findLast(findFn))
