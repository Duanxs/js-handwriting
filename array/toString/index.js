Array.prototype.myToString = function () {
  // 强制转换成整数
  const length = this.length >> 0
  if (length === 0) return ''

  let result = this[0].toString()
  for (let i = 1; i < length; i++) {
    result += ',' + this[i].toString()
  }

  return result
}

const a = [1, { a: 1 }, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
const b = [1, { a: 1 }, 'a', new Date('21 Dec 1997 14:12:00 UTC')]

console.log(`🚀 ~ a.myToString()`, a.myToString())
console.log(`🚀 ~ a.toString()  `, b.toString())
