Array.prototype.myFill = function (value, start = 0, end = this.length) {
  const length = this.length

  // start end 强制转换为数字
  // ~~'a' === 0
  // ~~2 === 2
  // ~~ 2.5 === 2
  const formatStart = ~~start
  const formatEnd = ~~end

  const truthStart =
    formatStart < 0
      ? Math.max(formatStart + length, 0)
      : Math.min(formatStart, length)

  const truthEnd =
    formatEnd < 0
      ? Math.max(formatEnd + length, 0)
      : Math.min(formatEnd, length)

  let current = truthStart
  while (current < truthEnd) {
    this[current] = value
    current++
  }
  return this
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const fillData = [3, 1, 5]
console.log(`🚀 ~ a.myFill()`, a.myFill(...fillData))
console.log(`🚀 ~ a.fill()  `, b.fill(...fillData))
