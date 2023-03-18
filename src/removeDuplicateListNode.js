function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    }
  }
}

var deleteDuplicates = function(head) {
  const dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while(cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val
      while(cur.next && cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
};

console.log(deleteDuplicates(head));