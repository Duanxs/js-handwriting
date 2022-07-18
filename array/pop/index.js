Array.prototype.myPop = function () {
  // pop 可与 call 连用，故而 this.length 可能不为非负整数
  const length = this.length >> 0

  // 根据文档，类数组不含 length 或 length 不为数字，
  // 则将 length 转为 0，并返回 undefined。
  // 空数组，亦返回 undefined。
  if (length <= 0) {
    this.length = 0
    return
  }

  // 被删除的元素，待返回，存之
  const deleteElement = this[length - 1]
  // 长度减一
  this.length = length - 1

  // 删除类数组中的元素
  if (typeof this === 'object') {
    delete this[length - 1]
  }

  return deleteElement
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

console.log(`🚀 ~ a.myPop()`, a.myPop(), a)
console.log(`🚀 ~ a.pop()  `, b.pop(), b)

console.log('=======')

const aLike = { 0: 1, 1: 2, length: 'a' }
const bLike = { 0: 1, 1: 2, length: 'a' }
console.log(`🚀 ~ a.myPop() call`, [].myPop.call(aLike), aLike)
console.log(`🚀 ~ a.pop() call  `, [].pop.call(bLike), bLike)
