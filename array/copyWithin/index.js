Array.prototype.myCopyWithin = function (target, start = 0, end = this.length) {
  // 数组长度
  const length = this.length

  // 参数取整
  // target 有可能不为数字
  // 位运算符 >> 为保留符号取整，即：
  // -1 >> 0  === -1
  // 2.6 >> 0 === 2
  // 'a' >> 0 === 0
  const formatTarget = target >> 0
  const formatStart = start >> 0
  const formatEnd = end >> 0

  // 处理正负， 确保三个参数均在 0 至 length 之间
  const truthTarget =
    formatTarget < 0
      ? // 若 formatTarget 与 length 之和仍小于 0，则取 0
        Math.max(formatTarget + length, 0)
      : // 若 formatTarget 大于 0，则最大只取到数组长度
        Math.min(formatTarget, length)

  const truthStart =
    formatStart < 0
      ? Math.max(formatStart + length, 0)
      : Math.min(formatStart, length)

  const truthEnd =
    formatEnd < 0
      ? Math.max(formatEnd + length, 0)
      : Math.min(formatEnd, length)

  // 结束位在开始位之前，或插入位在数组长度之后，则不操作
  if (truthEnd < truthStart || length < truthTarget) return this

  // 移动数目。正常来说，尾减头即长度，但此处要考虑插入位置即 target 可能大于开始位
  // 为保证移动数不超出数组长度，取两者最小值
  const count = Math.min(truthEnd - truthStart, length - truthTarget)

  // 起个别名，好认
  let from = truthStart
  let to = truthTarget
  // 拷贝一份，方便取值
  const copyArr = [...this]
  for (let i = 0; i < count; i++) {
    this[to] = copyArr[from]
    to++
    from++
  }
  return this
}

const a = [1, { a: 1 }, 3, 4, 5]
const b = [1, { a: 1 }, 3, 4, 5]

const range = [2, -4, -3]
console.log(`🚀 ~ a.myCopyWithin()`, a.myCopyWithin(...range))
console.log(`🚀 ~ a.copyWithin()  `, b.copyWithin(...range))
