Array.prototype.myFind = function (callback, thisArg) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length

  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i]
    }
  }
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const findFn = (item) => item > 10
console.log(`🚀 ~ a.myFind()`, a.myFind(findFn))
console.log(`🚀 ~ a.find()  `, b.find(findFn))
