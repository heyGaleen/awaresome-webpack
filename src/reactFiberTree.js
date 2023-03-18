import rootFiber from './element'

const beginWork = (Fiber) => {
  console.log(`${Fiber.key} start`);
}

const completeUnitWork = (Fiber) => {
  console.log(`${Fiber.key} end`);
}

const performUnitWork = (Fiber) => {
  beginWork(Fiber)
  if (Fiber.child) {
    return Fiber.child
  }
  while(Fiber) {
    completeUnitWork(Fiber)
    if (Fiber.sibling) {
      return Fiber.sibling
    }
    Fiber = Fiber.return
  }
}

const workloop = (nextUnitWork) => {
  while(nextUnitWork) {
    nextUnitWork = performUnitWork(nextUnitWork)
  }
  if (!nextUnitWork) {
    console.log('reconciliation阶段结束')
  }
}

workloop(rootFiber)