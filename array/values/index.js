Array.prototype.myValues = function* () {
  const length = this.length >> 0

  for (let i = 0; i < length; i++) {
    yield this[i]
  }
}

const a = [1, 2, 3]
const b = [1, 2, 3]

for (item of a.myValues()) {
  console.log(`🚀 ~ a-item`, item)
}
console.log(`===`)
for (item of b.values()) {
  console.log(`🚀 ~ b-item`, item)
}
