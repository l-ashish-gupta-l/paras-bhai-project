import React from 'react'
import HeroBackground from "../assets/hero background.png"
function Herosection() {
  return (<>
      <div className='relative'>
          <img src={HeroBackground} alt="background" />
          <div className='absolute  top-32 left-32 w-[30%]
          h-[70%] rounded-lg flex  flex-col p-5 justify-center text-white font-bold'>
              <h1 className='text-6xl'>HERO CONTENT
                  HEADING</h1>
              <p className='text-sm w-[70%] text-start mt-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className=' rounded-3xl text-green-500 font-medium bg-white w-[30%] mt-3 h-8' >Button</button>
          </div>
    </div>
  </>
  )
}

export default Herosection