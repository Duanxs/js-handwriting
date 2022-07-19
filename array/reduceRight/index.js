Array.prototype.myReduceRight = function (callback, initialValue) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length
  const argumentsLength = arguments.length

  // initialValue 未提供且数组为空，则报错
  if (argumentsLength === 1 && length === 0) throw new TypeError('未提供初始值')

  // 若数组只有一个元素，且未提供初始值，则返回这个元素
  if (argumentsLength === 1 && length === 1) return this[0]
  // 或，有初始值，但数组为空，则返回这个初始值
  if (argumentsLength > 1 && length === 0) return initialValue

  let result
  let index

  // 无初始值，则初始值为倒数第一个元素，索引从倒数第二个开始
  if (argumentsLength === 1) {
    result = this[length - 1]
    index = length - 2
  }
  // 有初始值，索引从最后一个元素开始
  else {
    result = initialValue
    index = length - 1
  }
  for (index; index >= 0; index--) {
    result = callback(result, this[index], index, this)
  }
  return result
}

// 累加
console.log('======累加=====')
const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const reducer = (prev, cur, index) => prev + cur
console.log(`🚀 ~ a.myReduceRight()`, a.myReduceRight(reducer, 10))
console.log(`🚀 ~ a.reduceRight()  `, b.reduceRight(reducer, 10))

console.log()
// 二维数组拍平
console.log('======二维数组拍平=====')
const arr1 = [
  [0, 1],
  [2, 3],
  [4, 5],
]
const arr2 = [
  [0, 1],
  [2, 3],
  [4, 5],
]
const reducer2 = (prev, cur, index) => prev.concat(cur)
console.log(`🚀 ~ arr1.myReduceRight()`, arr1.myReduceRight(reducer2, []))
console.log(`🚀 ~ arr2.reduceRight()  `, arr2.reduceRight(reducer2, []))

console.log()
// 算个数
console.log('======算个数=====')

const str1 = ['a', 'b', 'c', 'd', 'a']
const str2 = ['a', 'b', 'c', 'd', 'a']

const reducer3 = (prev, cur, index) => {
  if (cur in prev) {
    prev[cur]++
  } else {
    prev[cur] = 1
  }
  return prev
}
console.log(`🚀 ~ str1.myReduceRight()`, str1.myReduceRight(reducer3, {}))
console.log(`🚀 ~ str2.reduceRight()  `, str2.reduceRight(reducer3, {}))
