Array.prototype.myLastIndexOf = function (
  valueToFind,
  fromIndex = this.length
) {
  const length = this.length

  // 强制转换为数字，以避免输入字母等其他值
  const formatStart = fromIndex >> 0

  const start = formatStart < 0 ? length + formatStart : formatStart

  for (let i = start; i >= 0; i--) {
    if (valueToFind === this[i]) return i
  }
  return -1
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const params = [3, 4]
console.log(`🚀 ~ a.myLastIndexOf()`, a.myLastIndexOf(...params))
console.log(`🚀 ~ b.lastIndexOf()  `, b.lastIndexOf(...params))
