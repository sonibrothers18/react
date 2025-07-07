//! Music Player
// import React from "react";

// function Navbar({data}) {

//   return (
//     <div className="w-full px-20 py-3 flex justify-between items-center">
//       <h3>Music Player</h3>
//       <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3">
//         <h3>Favourites</h3>
//         <h4>{data.filter((e)=> e.favourite).length}</h4>
//       </div>
//     </div>
//   );
// }
// export default Navbar;
//! ===========================================================================================================================

//! Dynamic Routing
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    {/* <nav className='flex justify-center mt-10 gap-10'>
        <Link to="/">Home</Link>
        <Link to="/user">Users</Link>
        <Link to="/about">About</Link>
    </nav> */}

    {/* "NavLink provide extra feature of styling when changing the page" */}
    <nav className='flex justify-center mt-10 gap-10'>

        <NavLink style={(e)=> {
            return {
                color : e.isActive ? "red" : "",
                fontWeight : e.isActive ? "bold" : ""
            }
        }} to="/">Home</NavLink>

        <NavLink className={(e)=> {
            return[
                e.isActive ? "text-red-600" : "",
                e.isActive ? "font-bold" : ""
            ].join(" ")
        }} to="/user">User</NavLink>
        
        <NavLink to="/about">About</NavLink>
    </nav>
    </>
  )
}

export default Navbar