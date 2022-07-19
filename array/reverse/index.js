Array.prototype.myReverse = function () {
  const length = this.length >> 0

  let temp
  if (Object.prototype.toString.call(this) === '[object Object]') {
    temp = { ...this }
  } else {
    temp = [...this]
  }

  for (let i = 0; i < length; i++) {
    this[i] = temp[length - 1 - i]
  }
  return this
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

console.log(`🚀 ~ a.myReverse()`, a.myReverse())
console.log(`🚀 ~ a.reverse()  `, b.reverse())

console.log()
console.log('=====类数组=====')
const arrayLike1 = { 0: 1, 1: 2, length: 2 }
const arrayLike2 = { 0: 1, 1: 2, length: 2 }
console.log(`🚀 ~ [].myReverse()`, [].myReverse.call(arrayLike1))
console.log(`🚀 ~ [].reverse()  `, [].reverse.call(arrayLike2))
