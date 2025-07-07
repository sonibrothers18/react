//! Sharing variable between components (BAD METHOD)
// "use client"
// import React from 'react'

// const Nav = (props) => {
//     console.log(props.num)
//   return (
//     <div className='bg-red-500'>{props.num}</div>
//   )
// }

// export default Nav

//! ===============================================================

//! Context API
"use client"
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const Nav = () => {
    const user = useContext(MyContext)
  return (
    <div className='bg-red-500'>
        {user}
    </div>
  )
}

export default Nav