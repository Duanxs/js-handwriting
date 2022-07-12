function myAt(index) {
  // 将 index 转为数字
  // ~~1 ==> 1
  // ~~'1' ==> 1
  // ~~undefined ==> 0
  // ~~'abcd' ==> 0
  const parseIndex = ~~index

  return parseIndex >= 0 ? this[parseIndex] : this[this.length + parseIndex]
}

Array.prototype.myAt = myAt

let a = [1, 2, 3, 4, 5]

const item = a.myAt(1) // 2

console.log(`🚀 ~ item`, item)
