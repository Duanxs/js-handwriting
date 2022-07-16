Array.prototype.myIncludes = function (valueToFind, fromIndex = 0) {
  const length = this.length

  // 强制转换为数字，以避免输入字母等其他值
  const formatStart = fromIndex >> 0

  const start = formatStart < 0 ? length + formatStart : formatStart

  for (let i = start; i < length; i++) {
    if (valueToFind === this[i]) return true
  }
  return false
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const params = [2, 1]
console.log(`🚀 ~ a.myIncludes()`, a.myIncludes(...params))
console.log(`🚀 ~ b.includes()  `, b.includes(...params))
