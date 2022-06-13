import React from 'react'
import SignForm from './Form'

function Page() {
  return (
       
    <div className='page'>
      <div className='signin'>
      <div>
      <h3>Welcome Back</h3>
      <p>Sub-title text goes here</p>
      </div>
      <SignForm />
      </div>
      <div className='bgimg'>
      </div>
    </div>
  )
}

export default Page