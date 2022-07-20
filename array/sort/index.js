Array.prototype.mySort = function (compareFn) {
  if (typeof compareFn !== 'function' && compareFn !== undefined) {
    return new TypeError(`${compareFn} 应为函数`)
  }

  // 未提供比较函数
  if (arguments.length === 0) {
    compareFn = (a, b) => {
      if (a === b) return 0
      // 根据规范，默认转字符串比较
      a = String(a)
      b = String(b)
      if (a === b) return 0
      else return a < b ? -1 : 1
    }
  }

  const length = this.length >> 0

  // 插入排序
  for (let i = 1; i < length; i++) {
    let j = i - 1 // 已排序的最大索引
    const current = this[i] // 待排序的第一个值

    // 待排第一个依次与已排好的比较
    for (; j >= 0; j--) {
      const tmp = this[j] // 已排序逆序取值，与待排第一个值比较
      const order = compareFn(tmp, current)
      if (order > 0) {
        // order > 0，则将当前已排值后移一位
        this[j + 1] = tmp
      } else {
        // order <= 0 说明顺序对着，跳出 j 循环即可
        break
      }
    }

    console.log(`🚀 ~ j + 1====`, j + 1)
    // 上面 j 遍历走完，j 指针即停在正确位置前一位，将待排值插入正确位置即可
    this[j + 1] = current
  }

  return this
}

const a = [1, 23, 3, 6, 4, 5]
const b = [1, 23, 3, 6, 4, 5]

const compareFn = (a, b) => a - b
console.log(`🚀 ~ a.mySort()`, a.mySort(compareFn))
console.log(`🚀 ~ a.sort()  `, b.sort(compareFn))
