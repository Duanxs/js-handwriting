Array.prototype.myEvery = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    const result = callback.call(thisArg, this[i], i, this)
    if (!result) return false
  }
  return true
}

const a = [1, 2, 3, 4, 5]

const compareFn = (item) => item > 0
console.log(`🚀 ~ a.myEvery()`, a.myEvery(compareFn))
console.log(`🚀 ~ a.every()`, a.every(compareFn))
