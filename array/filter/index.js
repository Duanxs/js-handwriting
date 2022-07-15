Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length
  const result = []
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
  // callback.call(thisArg, element, index, this)
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const filterFn = (item) => item > 2
console.log(`🚀 ~ a.myFilter()`, a.myFilter(filterFn, { length: 2 }))
console.log(`🚀 ~ a.filter()  `, b.filter(filterFn, { length: 2 }))
