//! Dynamic Routing
// "use client"
// import axios from 'axios'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

// const page = () => {
//   const [users, setusers] = useState([])
//   const getUser = async () => {
//     // const res = await axios.get("https://jsonplaceholder.typicode.com/users")
//     // const data = res.data;
//     // console.log(data)
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
//     console.log(data)
//     setusers(data)
//   }

//   //! For automatic function calling
//   useEffect(() => {
//     getUser()
//   }, [])
  
//   return (
//     <>
//     <button onClick={getUser} className='bg-green-400 text-white px-4 py-2 rounded font-bold'>Get Data</button>
//     <div className='p-8 bg-slate-100 mt-5'>
//       <ul>
//         {users.map((e)=>{
//           //! Dynamic Routing ([id] folder, "folder can have different name also")
//           return <li>{e.username} --- <Link href={`/${e.id}`}>Explore</Link></li>
//         })}
//       </ul>
//     </div>
//     </>
//   )
// }

// export default page

//! =========================================================================================================================

//! Sharing variable between components (BAD METHOD)
// "use client"
// import Header from '@/Components/Header'
// import React, { useState } from 'react'

// const page = () => {
//   const [num, setnum] = useState(150)
//   return (
//     <Header num={num}></Header>
//   )
// }

// export default page

//! =========================================================================================================================

//! Context API -> Used for sharing variables b/w different components without any mediator
// "use client"
// import Header from '@/Components/Header'
// import React from 'react'

// const page = () => {
//   return (
//     <Header></Header>
//   )
// }

// export default page

//todo Redux toolkit -> used in large project(around 2000 components used there)

//! =========================================================================================================================

//! React Toastify -> Used to show flash messages
// "use client"
// import React from 'react'
// import { toast, ToastContainer } from 'react-toastify'

// const page = () => {
//     //todo toastify documentation
//     const notify = ()=>{
//         toast("Login Successfull",{
//             draggable: true
//         })
//     }

//   return (
//     <div>
//         <button onClick={notify} className='px-10 py-20 text-3xl bg-green-400 font-extrabold rounded-2xl'>Login</button>
//         <ToastContainer></ToastContainer>
//     </div>
//   )
// }

// export default page

//! =========================================================================================================================
//! Next.JS has default server side rendering

//! render deployement