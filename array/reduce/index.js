Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length
  const argumentsLength = arguments.length

  // initialValue 未提供且数组为空，则报错
  if (argumentsLength === 1 && length === 0) throw new TypeError('未提供初始值')

  // 若数组只有一个元素，且未提供初始值，则返回这个元素
  if (argumentsLength === 1 && length === 1) return this[0]
  // 或，有初始值，但数组为空，则返回这个初始值
  if (argumentsLength === 2 && length === 0) return initialValue

  let result
  let index

  // 无初始值，则初始值为第一个元素，索引从第二个开始
  if (argumentsLength === 1) {
    result = this[0]
    index = 1
  }
  // 有初始值，索引从第一个元素开始
  else {
    result = initialValue
    index = 0
  }
  for (index; index < length; index++) {
    result = callback(result, this[index], index, this)
  }
  return result
}

// 累加
console.log('======累加=====')
const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const reducer = (prev, cur, index) => prev + cur
console.log(`🚀 ~ a.myReduce()`, a.myReduce(reducer, 10))
console.log(`🚀 ~ a.reduce()  `, b.reduce(reducer, 10))

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
console.log(`🚀 ~ arr1.myReduce()`, arr1.myReduce(reducer2, []))
console.log(`🚀 ~ arr2.reduce()  `, arr2.reduce(reducer2, []))

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
console.log(`🚀 ~ str1.myReduce()`, str1.myReduce(reducer3, {}))
console.log(`🚀 ~ str2.reduce()  `, str2.reduce(reducer3, {}))
