Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length
  const result = []
  for (let i = 0; i < length; i++) {
    result.push(callback.call(thisArg, this[i], i, this))
  }
  return result
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const mapFn = (item) => item * 2
console.log(`🚀 ~ a.myMap()`, a.myMap(mapFn))
console.log(`🚀 ~ a.map()  `, b.map(mapFn))
