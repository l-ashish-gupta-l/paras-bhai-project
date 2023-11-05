import { useState } from 'react'
import React from 'react'
import Header from './component/Header'
import Herosection from './component/Herosection'
import Ourproduct from './component/Ourproduct'
import Product from './component/Product'
function App() {


  return (
    <>
      <Header />
      <Herosection />
      <Ourproduct/>
      <Product />
      <Product flex={"flex-row-reverse  gap-[10%] bg-gray-100"} />
      <Product />
      <Product flex={"flex-row-reverse  gap-[10%]  bg-gray-100"} />
    </>
  )
}

export default App
