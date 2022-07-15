Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== 'function')
    throw new TypeError(`${callback} 应为函数`)

  const length = this.length

  for (let i = 0; i < length; i++) {
    callback.call(thisArg, this[i], i, this)
  }
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const fn = (item, i) => {
  console.log(i, '==> ', item)
}

a.myForEach(fn)
console.log('=======')
b.forEach(fn)
