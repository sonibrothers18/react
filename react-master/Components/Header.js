//! Sharing variable between components (BAD METHOD)
// "use client"
// import React from 'react'
// import Nav from './Nav'

// const Header = (props) => {
//     console.log(props.num)
//   return (
//     <div className='bg-green-400 p-5'>
//         Mai Header Hu
//         <Nav num={props.num}></Nav>
//     </div>
//   )
// }

// export default Header

//! ===================================================================

//! Context API
"use client"
import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = () => {
    const user = useContext(MyContext)
  return (
    <div className='bg-green-400 p-5'>
        {user}
        <Nav></Nav>
    </div>
  )
}

export default Header