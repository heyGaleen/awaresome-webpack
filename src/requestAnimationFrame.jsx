import React, { useEffect } from "react"
// 需求：使用requestAnimationFrame将方块向右移动200px
// 2s后停止

const RequestAnimationFrame = () => {
  useEffect(() => {
    const element = document.getElementById('some-element-you-want-to-animate')
    let start,previousTimestamp
    let done = false

    const workloop = (timestamp) => {
      if (start === undefined) {
        start = timestamp
      }
      let distance = timestamp - start
      if (previousTimestamp !== timestamp) {
        const count = Math.min(0.1*distance,200)
        element.style.transform = `translateX(${count}px)`
        if (count === 200) done = true
      }
      if (distance < 2000) {
        previousTimestamp = timestamp
        if (!done) {
          window.requestAnimationFrame(workloop)
        }
      }
    }

    window.requestAnimationFrame(workloop)

  },[])

  return(
    <div id="some-element-you-want-to-animate" style={{
      width: 200,
      height: 200,
      background: 'red'
    }}></div>
  )
}

export default RequestAnimationFrame