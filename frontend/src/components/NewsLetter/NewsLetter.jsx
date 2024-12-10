import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our newsletter and stuy tunned</p>
      <div>
        <input type="email" placeholder='Your Email id here' />
        <button>Subscribe</button>
      </div>
    </div>

  )
}

export default NewsLetter
