import React from "react";
import Component from "./components";
import Sort from './handle-write/Sort'
import RequestAnimationFrame from "./requestAnimationFrame";
const App = () => {
  return (
    <>
      <Sort />
      <RequestAnimationFrame />
    </>
  )
}

export default App