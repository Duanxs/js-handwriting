Array.myIsArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

const obj = []
console.log(`🚀 ~ Array.myIsArray()`, Array.myIsArray(obj))
console.log(`🚀 ~ Array.isArray()  `, Array.isArray(obj))
