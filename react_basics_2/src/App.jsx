//! rfce
import React, { useState } from 'react'
import Product from './Product'

function App() {
  const [num, setnum] = useState(69)
  const [color, setColor] = useState(false)
  return (
    <>
      <div className='text-red-700 bg-amber-300 inline'>App</div>
      <Product name="mayur"></Product>
      <h1 className='font-bold text-4xl'>{num}</h1>

      {/* Use `` if applying multiple properties else no need */}
      {/* No need of `` here, as only 1 property is applied but in video it is done like this*/}
      <h4 className={`${color === false ? "text-red-600" : "text-blue-600"}`}>{color === false ? "Hello" : "Hey"}</h4>

      <button onClick={()=> setColor(!color)} className='rounded bg-green-500 px-4 py-2 mx-2'>Change</button>
    </>
  )
}

export default App