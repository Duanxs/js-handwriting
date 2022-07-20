Array.prototype.myToLocaleString = function (...args) {
  // 强制转换成整数
  const length = this.length >> 0
  if (length === 0) return ''

  let result = this[0].toLocaleString(...args)
  for (let i = 1; i < length; i++) {
    result += ',' + this[i].toLocaleString(...args)
  }

  return result
}

const a = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
const b = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]

const params = ['zh-CN', { timeZone: 'Asia/Shanghai', hour12: false }]
console.log(`🚀 ~ a.myToLocaleString()`, a.myToLocaleString(...params))
console.log(`🚀 ~ a.toLocaleString()  `, b.toLocaleString(...params))
