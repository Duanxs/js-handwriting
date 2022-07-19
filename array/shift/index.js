Array.prototype.myShift = function () {
  const length = this.length >> 0

  const deleteValue = this[0]
  for (let i = 0; i < length - 1; i++) {
    this[i] = this[i + 1]
  }

  // 若为类数组，还需删除末尾一项，以保证长度一致
  if (Object.prototype.toString.call(this) === '[object Object]') {
    delete this[length - 1]
  }

  this.length--
  return deleteValue
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

console.log(`🚀 ~ a.myShift()`, a.myShift())
console.log(`🚀 ~ a.shift()  `, b.shift())

console.log()
console.log('=====类数组=====')
const arrayLike1 = { 0: 1, 1: 2, length: 2 }
const arrayLike2 = { 0: 1, 1: 2, length: 2 }
console.log(`🚀 ~ [].myShift()`, [].myShift.call(arrayLike1), arrayLike1)
console.log(`🚀 ~ [].shift()  `, [].shift.call(arrayLike2), arrayLike2)
