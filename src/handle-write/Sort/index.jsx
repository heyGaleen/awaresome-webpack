import React, { useState } from "react";
import { Input, Button } from "antd";
import { quickSort } from "./quickSort";

function Sort() {
  const [sortArr,setSortArr] = useState([])
  const [sortedArr,setSortedArr] = useState([]) 
  const handleSort = () => {
    const arr = [...sortArr]
    setSortedArr(quickSort(arr))
  }
  return (
    <>
      <h2>快速排序</h2>
      <Input style={{ width: 200 }} onChange={e => {
        let arr = e.target.value.split(',').map(i => +i)
        setSortArr(arr)
      }} />
      <Button type="primary" onClick={handleSort} style={{ marginLeft: 20 }}>点击排序</Button>
      <div>
        输入数组：{JSON.stringify(sortArr)}
      </div>
      <div>
        排序后数组：{JSON.stringify(sortedArr)}
      </div>
    </>
  )
}

export default Sort