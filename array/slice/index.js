Array.prototype.mySlice = function (start = 0, end = this.length) {
  // 强制转换为数字
  const length = this.length >> 0
  const formatStart = start >> 0
  const formatEnd = end >> 0

  const truthStart =
    formatStart < 0
      ? Math.max(0, length + formatStart)
      : Math.min(length, formatStart)
  const truthEnd =
    formatEnd < 0
      ? Math.max(0, length + formatEnd)
      : Math.min(length, formatEnd)

  const result = []

  for (let i = truthStart; i < truthEnd; i++) {
    result.push(this[i])
  }

  return result
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const range = [1, 3]
console.log(`🚀 ~ a.mySlice()`, a.mySlice(...range))
console.log(`🚀 ~ a.slice()  `, b.slice(...range))

console.log()
console.log('=====类数组=====')
const arrayLike1 = { 0: 1, 1: 2, length: 2 }
const arrayLike2 = { 0: 1, 1: 2, length: 2 }
console.log(`🚀 ~ [].mySlice()`, [].mySlice.call(arrayLike1, ...range))
console.log(`🚀 ~ [].slice()  `, [].slice.call(arrayLike2, ...range))
