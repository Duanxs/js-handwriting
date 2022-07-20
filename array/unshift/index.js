Array.prototype.myUnshift = function (...items) {
  const length = this.length >> 0
  const addLength = items.length
  // this.length += addLength

  // 整体右移
  for (let i = length - 1; i >= 0; i--) {
    this[i + addLength] = this[i]
  }
  // 放入新元素
  for (let i = 0; i < addLength; i++) {
    this[i] = items[i]
  }

  return this.length
}

const a = [1, 2, 3]
const b = [1, 2, 3]

const params = [4, 5, 6]
console.log(`🚀 ~ a.myUnshift()`, a.myUnshift(...params), a)
console.log(`🚀 ~ a.unshift()  `, b.unshift(...params), b)
