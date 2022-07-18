Array.myOf = function (...params) {
  return [...params]
}

const params = [undefined, 1, 2]
console.log(`🚀 ~ Array.myOf()`, Array.myOf(...params))
console.log(`🚀 ~ Array.of()  `, Array.of(...params))
