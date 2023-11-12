import { useState } from 'react'
import React from 'react'
import Header from './component/Header'
import Herosection from './component/Herosection'
import Product from './component/Product'
import Footer from './component/Footer'
import LoginPage from './Pages/LoginPage'
function App() {


  return (
    <>
      <Header />
      <LoginPage/>
      {/* <Herosection />
      <Product />
      <Product flex={"flex-row-reverse  gap-[10%] bg-gray-100"} />
      <Product />
      <Product flex={"flex-row-reverse  gap-[10%]  bg-gray-100"} /> */}
      <Footer/>
    </>
  )
}

export default App
