const STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(executor) {
    // 执行器需为函数
    this.checkExeFn(executor)

    // 绑定 this
    this.initBind()

    this.result = ''
    this.state = STATE.PENDING

    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  checkExeFn(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError(`${executor} 需为函数`)
    }
  }

  initBind() {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  resolve(reuslt) {
    if (this.state !== STATE.PENDING) return
    this.state = STATE.FULFILLED
    this.result = reuslt
  }

  reject(reason) {
    if (this.state !== STATE.PENDING) return
    this.state = STATE.REJECTED
    this.result = reason
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected = typeof onRejected === 'function' ? onRejected : (val) => val
    if (this.state === STATE.FULFILLED) {
      onFulfilled(this.result)
    } else if (this.state === STATE.REJECTED) {
      onRejected(this.result)
    }
  }
}

const fn = (resolve, reject) => {
  resolve(1231)
  reject('err')
}

const p1 = new MyPromise(fn)
console.log(`p1`, p1)
const p2 = new Promise(fn)
console.log(`p2`, p2)
