Array.prototype.mySplice = function (start, deleteCount, ...items) {
  // 强制转换成整数
  const length = this.length >> 0
  const formatStart = start >> 0

  // 省略 deleteCount，则删到尾
  if (arguments.length === 1) deleteCount = this.length - start
  const formatDeleteCount = deleteCount >> 0
  const addCount = items.length

  const from =
    formatStart < 0
      ? // 最小不过 0
        Math.max(0, formatStart + length)
      : // 最大不过 length
        Math.min(length, formatStart)
  const to =
    formatDeleteCount < 0
      ? Math.max(0, formatDeleteCount + from)
      : Math.min(length, formatDeleteCount + from)

  const finalDeleteCount = to - from

  const deleteArray = []

  // 收集欲删除元素
  for (let j = 0; j < finalDeleteCount; j++) {
    deleteArray.push(this[from + j])
  }

  // 添加多于删除，需右移
  if (finalDeleteCount < addCount) {
    // 计算右移位置
    const diff = addCount - finalDeleteCount
    for (let i = length - 1; i >= from; i--) {
      this[i + diff] = this[i]
    }
  }
  // 添加少于删除，需左移
  else if (finalDeleteCount > addCount) {
    const diff = finalDeleteCount - addCount
    // 起始索引加上删除数目，之后的元素需要左移
    for (let i = from + finalDeleteCount; i < length; i++) {
      console.log(`🚀 ~ i`, i, diff)
      this[i - diff] = this[i]
    }
    this.length = length - diff
  }

  // 新增替换删除的
  for (let i = 0; i < addCount; i++) {
    this[from + i] = items[i]
  }

  return deleteArray
}

const a = [1, 23, 3, 4, 5]
const b = [1, 23, 3, 4, 5]

const params = [1, 5, 666, 777]
console.log(`🚀 ~ a.mySplice()`, a.mySplice(...params), a)
console.log(`🚀 ~ a.splice()  `, b.splice(...params), b)
