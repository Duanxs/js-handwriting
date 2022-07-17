Array.myFrom = function (arrayLike, mapFn, thisArg) {
  if (mapFn && typeof mapFn !== 'function') {
    throw new TypeError(`${mapFn} 需为函数`)
  }

  const length = arrayLike.length >> 0
  const result = []
  if (length <= 0) return result

  for (let i = 0; i < length; i++) {
    if (mapFn) {
      result[i] = mapFn.call(thisArg, arrayLike[i], i)
    } else {
      result[i] = arrayLike[i]
    }
  }
  return result
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const arrayLike = { 0: 1, 1: [2], length: 3 }
const mapFn = (item) => item * 10
console.log(`🚀 ~ Array.myFrom()`, Array.myFrom(arrayLike, mapFn))
console.log(`🚀 ~ Array.from()  `, Array.from(arrayLike, mapFn))
