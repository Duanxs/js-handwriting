Array.prototype.myConcat = function (...values) {
  const result = [...this]
  values.forEach((value) => {
    if (Array.isArray(value)) {
      value.forEach((v) => result.push(v))
    } else {
      result.push(value)
    }
  })
  return result
}

const a = [1, 2, 3]
const b = [4, 5, 6]

const newA = a.myConcat(b, 7, { z: 8 })
// [ 1, 2, 3, 4, 5, 6, 7, { z: 8 } ]
