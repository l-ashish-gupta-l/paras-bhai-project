import React from 'react'
import product1 from "../assets/product1.png"
const flex = {
    display: "flex",
    flexDirection: 'row-reverse',
}
function Product(props) {
    return (
        <div className={ `w-[95 %] m-auto h-[70vh] ${props.flex} flex items-center justify-center `} >  
          <div className="left w-[40%]">
              <h1 className='font-extrabold text-4xl'>Spearmint Oil L-carvone</h1>
              <h3 className='font-bold mt-5 text-xl'>Description</h3>
              <p className='font-normal mt-2 text-sm '>The Essential Oil of Spearmint is extracted by steam distillation of flowering tops of the spearmint plant. The main components of this oil are Alpha Pinene, Beta Pinene, Carvone, Cineole, Caryophyllene, Linalool, Limonene, Menthol and Myrcene. The most abundant compound in spearmint oil is L-Carvone which gives spearmint its distinctive smell. it appears as a clear , pale yellow or greenish yellow liquid.</p>

              <h3 className=' font-bold mt-5 text-xl '>Specifications</h3>
          </div>
          <div className="right  w-[40%]  relative h-[80%] items-end  flex justify-end ">
              <img className='w-2/3 h-[90%]' src={product1} alt="" />
              <div className='price absolute bg-[#499D2FE0] w-[40%] h-[40%] left-20 top-0 rounded-2xl ' >
                  <h1 className='text-white font-extrabold px-6 py-3 text-2xl text-center'>PRICE</h1>
              </div>
          </div>
    </div>
  )
}

export default Product