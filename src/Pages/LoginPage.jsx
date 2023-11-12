import React from 'react'
import HeroBackground from "../assets/hero background.png"
function LoginPage() {
  return (
      <>
          <div className='relative'>
              <img src={HeroBackground} alt="background" />
              <div className=' bg-white w-[30%] h-[65vh] rounded-md flex justify-center items-center flex-col absolute top-20 left-28 '>
                  <h3>LOGO</h3>                 
                  <h1>SIGN IN</h1>
                  <form action="" method="post">
                      <label>EMAIL</label><br/>
                      <input type="email" placeholder="Username" /><br />
                      <label>PASSWORD</label><br />
                      <input type="password" placeholder="Password" /><br />
                      
                      <button type="submit">Sign In</button><br />
                      
                      <a href="#">Forgot Password?</a>
                  </form>
          </div>
              </div>
          
      </>
  )
}

export default LoginPage