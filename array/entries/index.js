Array.prototype.myEntries = function* () {
  for (let i = 0; i < this.length; i++) {
    yield [i, this[i]]
  }
}

const a = [1, { a: 1 }, 3, 4, 5]

console.log(`🚀 ~ a.myEntries()`, a.myEntries())
console.log(`🚀 ~ a.entries()`, a.entries())

for ([key, value] of a.myEntries()) {
  console.log(key, value)
}
