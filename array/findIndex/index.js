Array.prototype.myFindIndex = function (callback, thisArg) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length

  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i
    }
  }
  return -1
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const findIndexFn = (item) => (item = 1)
console.log(`🚀 ~ a.myFindIndex()`, a.myFindIndex(findIndexFn))
console.log(`🚀 ~ a.findIndex()  `, b.findIndex(findIndexFn))
