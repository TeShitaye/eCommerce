import React from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email addres' />
          <input type="password"  placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, agree to policy of use and privacy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
