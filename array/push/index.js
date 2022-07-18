Array.prototype.myPush = function (...params) {
  // push 可与 call 连用，强制转化数数字，
  // 以防止类数组 length 不为数字
  // 若 lenth < 0，则置 0
  let length = this.length >> 0
  if (length < 0) length = 0

  const paramsLength = params.length

  for (let i = length; i < length + paramsLength; i++) {
    for (let j = 0; j < paramsLength; j++) {
      this[i] = params[j]
      this.length = length + 1
    }
  }

  return this.length
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const params = [6]
console.log(`🚀 ~ a.myPush()`, a.myPush(...params), a)
console.log(`🚀 ~ a.push()  `, b.push(...params), b)

console.log('=======')

const aLike = { 0: 1, 1: 2, length: 4 }
const bLike = { 0: 1, 1: 2, length: 4 }
console.log(`🚀 ~ a.myPush() call`, [].myPush.call(aLike, 3), aLike)
console.log(`🚀 ~ a.push() call  `, [].push.call(bLike, 3), bLike)
