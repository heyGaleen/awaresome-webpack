class Update {
  constructor(payload,nextUpdate) {
    this.payload = payload
    this.nextUpdate = nextUpdate
  }
}

class UpdateQueue {
  constructor() {
    this.baseState = null
    this.firstUpdate = null
    this.lastUpdate = null
  }
  enqueueUpdate(update) {
    // 当前链表是空链表
    if (!this.firstUpdate) {
      this.firstUpdate = this.lastUpdate = update
    } else {
      this.lastUpdate.nextUpdate = update
      this.lastUpdate = update
    }
  }
  // 获取state，然后遍历这个链表，进行更新
  forceUpdate() {
    let currentState = this.baseState || {}
    let currentUpdate = this.firstUpdate
    while(currentUpdate) {
      let nextState = typeof currentUpdate.payload === 'function' ? currentUpdate.payload(currentState) : currentUpdate.payload
      currentState = { ...currentState, ...nextState }
      currentUpdate = currentUpdate.nextUpdate
    }
    // 更新完成后清空链表
    this.firstUpdate = this.lastUpdate = null
    this.baseState = currentState
    return currentState
  }
}

let queue = new UpdateQueue()
queue.enqueueUpdate(new Update({ name: 'www' }))
queue.enqueueUpdate(new Update({ age: 10 }))
queue.enqueueUpdate(new Update(state => ({ age: state.age + 1 })))
queue.enqueueUpdate(new Update(state => ({ age: state.age + 1 })))
queue.forceUpdate()
console.log(queue.baseState)