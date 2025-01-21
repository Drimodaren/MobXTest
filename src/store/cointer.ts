import { makeObservable } from 'mobx'

class Counter {
  count: number

  constructor(count: number = 0) {
    this.count = count
    makeObservable(this, { count: true })
  }
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
}
export default new Counter()
