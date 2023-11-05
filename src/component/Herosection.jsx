import React from 'react'
import HeroBackground from "../assets/hero background.png"
function Herosection() {
  return (<>
      <div className='relative'>
          <img src={HeroBackground} alt="background" />
          <div className='md:absolute  top-32 left-32 md:w-[30%] text-black w-full 
          h-[70%] rounded-lg flex  flex-col p-5 justify-center md:text-white font-bold '>
              <h1 className=' font-extrabold w-60 md:text-white text-green-500  text-4xl md:text-6xl '>HERO CONTENT
                  HEADING</h1>
              <p className='md:text-sm md:w-[70%] md:text-start md:mt-3   text-xs w-52' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className=' rounded-3xl md:text-green-500 text-white font-medium md:bg-white bg-green-600 w-[30%] mt-3 h-8' >Button</button>
          </div>
    </div>
  </>
  )
}

export default Herosection