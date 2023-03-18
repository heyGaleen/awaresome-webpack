// import React from 'react'
import './index.less'
import xiaomibangong from '@/assets/xiaomibangong.jpg'
import logo from '@/assets/logo.svg'
console.log(xiaomibangong)

const Component = () => {
  return (
    <>
      <img src={xiaomibangong} alt="" />
      <img src={logo} alt="" />
      <div className='hello'>hello world</div>
    </>
  )
}

export default Component