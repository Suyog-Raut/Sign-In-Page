import React from 'react'
import {Button} from 'antd'

function Navbar() {
  return (
    <div className='navbar'>
    <h3>ATools<span>.</span></h3>
    <div className='btndiv'>
      <Button size='large'>Start Free Trail</Button>
      <Button className='t' size='large'>Login</Button>
    </div>
   
  </div >
  )
}

export default Navbar