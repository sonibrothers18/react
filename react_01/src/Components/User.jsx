//! Dynamic Routing
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
  <>
  <div className='w-1/2 m-auto mt-10'>
    <h1 className='text-5xl mb-2'>User</h1>

    <div className='flex flex-col mt-5 w-1/2'>
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to={"/user/alex"}>Alex</Link>
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to={"/user/max"}>Max</Link>
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to={"/user/jhon"}>Jhon</Link>
    </div>

    <Outlet></Outlet>

  </div>
  </>  
  )
}

export default User