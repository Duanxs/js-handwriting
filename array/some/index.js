Array.prototype.mySome = function (callback, thisArg) {
  // 强制转换为数字
  const length = this.length >> 0

  for (let i = 0; i < length; i++) {
    result = callback.call(thisArg, this[i], i, this)
    if (result) return true
  }

  return false
}

const a = [1, 2, 3, 3, 4, 5]
const b = [1, 2, 3, 3, 4, 5]

const callback = (item) => item === 3
console.log(`🚀 ~ a.mySome()`, a.mySome(callback))
console.log(`🚀 ~ a.some()  `, b.some(callback))

console.log()
console.log('=====类数组=====')
const arrayLike1 = { 0: 1, 1: 2, 2: 3, 3: 3, length: 4 }
const arrayLike2 = { 0: 1, 1: 2, 2: 3, 3: 3, length: 4 }
console.log(`🚀 ~ [].mySome()`, [].mySome.call(arrayLike1, callback))
console.log(`🚀 ~ [].some()  `, [].some.call(arrayLike2, callback))
