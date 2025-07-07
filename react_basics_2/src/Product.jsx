import React from 'react'

function Product({name}) {
    //! Props can also be used
  return (
    <>
        <div>Product is Component</div>
        <div>{name}</div>
    </>
  )
}

export default Product