Array.prototype.myJoin = function (separator) {
  // 因 join 方法可以接收类数组，故而需要强制转换，
  // 以防止出现 {0: 1, length: ‘aa'} 这种情况
  const length = this.length >> 0

  let result = ''
  for (let i = 0; i < length; i++) {
    // 根据文档，undefined null 会转为空字符串
    if (this[i] === undefined || this[i] === null) continue

    // 末尾项不需要连接符
    const needSeparator = i === length - 1 ? '' : separator
    result += this[i] + needSeparator
  }
  return result
}

const a = [1, 2, 3, 4, 5]
const aa = { 0: 1, 1: 2, length: 3 }
const b = [1, 2, 3, 4, 5]

const separator = '-'
console.log(`🚀 ~ a.myJoin()`, a.myJoin(separator))
console.log(`🚀 ~ a.myJoin()`, [].myJoin.call(aa, separator))
console.log(`🚀 ~ b.join()  `, b.join(separator))
console.log(`🚀 ~ b.join()  `, [].join.call(aa, separator))
