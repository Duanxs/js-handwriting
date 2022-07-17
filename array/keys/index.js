Array.prototype.myKeys = function* () {
  const length = this.length

  for (let i = 0; i < length; i++) {
    yield i
  }
}

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]

const aKeys = a.myKeys()
for (key of aKeys) {
  console.log('a-key', key)
}
console.log(`========`)

const bKeys = b.keys()
for (key of bKeys) {
  console.log('b-key', key)
}

console.log(`🚀 ~ a.myKeys()`, [...a.myKeys()])
console.log(`🚀 ~ b.keys()  `, [...b.keys()])
