//! Dynamic Routing
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {

    //! {name} should be same as '/user/:name'
    const {name} = useParams();

    const navigate = useNavigate();

    const goBackHandler = ()=>{
        navigate("/user")
        // navigate(-1)
    };

  return (
    <>
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-red-300 text-5xl mb-2'>User Details</h1>
        <h1 className='text-3xl'>Hii {name}</h1>
        <button onClick={goBackHandler} className="mt-5 text-white px-3 py-2 bg-red-600 rounded">Go Back</button>
    </div>
    </>
  )
}

export default UserDetail