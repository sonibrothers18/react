// import React from 'react'

// function App() {

//   const data = ["mayur", "tanishq", "rohit", "alex"];

//   // return (
//   //   <>
//   //   {data.map((elem, index) => {
//   //     return <div key={index}>{elem}</div>
//   //   })}
//   //   </>
//   // )

//   //todo Another method of writing of upper return
//   return (
//     <>
//     {data.map((elem, index)=> (<div>{elem} {index}</div>))}
//     </>
//   )
// }

// export default App
//! ==========================================================================================================

//! Event Handling
// import React from 'react'
// import Card from './Components/Card'

// function App() {
//   return (
//     <Card></Card>
//   )
// }

// export default App
//! ==========================================================================================================

//! Conditional Rendering
// import React from 'react'
// import Card from './Components/Card'

// function App() {
//   return (
//     <Card></Card>
//   )
// }
// export default App
//! ==========================================================================================================

//! UseState
// import React, { useState } from 'react'

// function App() {
//   const [data, setdata] = useState(50)

//   const [val, setval] = useState({name:"mayur", isBanned: false})
//   return (
//     <>
//     <h1>{data}</h1>
//     <button onClick={()=> {setdata((prev)=> prev+1)}} className='rounded bg-green-600 px-4 py-4'>Click for Change</button>
    
//     <h1>Name: {val.name}</h1>
//     {/* converts boolean to string so that it is visible */}
//     <h1>isBanned: {val.isBanned.toString()}</h1>
//     {/* For Objects */}
//     <button onClick={()=> {setval({...val, isBanned: !val.isBanned})}} className='rounded bg-green-600 px-4 py-4'>Click for Change</button>
//     </>
//   )
// }
// export default App
//! ==========================================================================================================

//! Won't change console in first click, so we use useEffect in future videos
// import React, { useState } from 'react'

// function App() {
//   const [val, setval] = useState({name:"mayur", isBanned: false})
//   return (
//     <>
//     <button onClick={()=> {
//       setval({...val, gender: "male"})
//       console.log(val)
//     }} className='rounded bg-green-600 px-4 py-4'>Click for Console</button>
//     </>
//   )
// }
// export default App
//! ==========================================================================================================

//! Deleting, Adding the array
// import React, { useState } from 'react'

// function App() {
//   const [val, setval] = useState([1,2,3,4,5,6])
//   return (
//     <>
//     {val.map(e=> <h1>{e}</h1>)}
//     <button onClick={()=> setval(()=> val.filter((e, index)=> index != val.length-1))} className='block rounded bg-green-600 px-4 py-4'>Click to Delete</button>
//     <button onClick={()=> setval([...val, val[val.length-1]+1])} className='rounded bg-green-600 px-4 py-4'>Click to Add</button>
//     </>
//   )
// }
// export default App
//! ==========================================================================================================

//! Advanced adding in object which is in array
// import React, { useState } from 'react'

// function App() {
//   const [val, setval] = useState([
//     {name: "mayur", age: 24},
//     {name: "harsh", age: 51},
//     {name: "alex", age: 95}
//   ])
//   return (
//     <>
//     {val.map((e)=> (
//       <>
//       <div>{e.name}</div>
//       <div>{e.age}</div>
//       </>
//     ))}
//     <button onClick={()=> setval(()=> val.map(e=> e.name === "mayur" ? ({name:"mayur", age:20}) : e))} className='rounded bg-green-600 px-4 py-4'>Click to Add</button>
//     </>
//   )
// }
// export default App
//! ==========================================================================================================

//! React Icons for icons use (https://react-icons.github.io/react-icons/)
//! ==========================================================================================================

//! props
// import React from 'react'
// import Card from './Components/Card'

// function App() {
//   return (
//     <>
//     <Card text="Known More" color="bg-red-600"></Card>
//     <Card text="Download" color="bg-green-600"></Card>
//     </>
//   )
// }
// export default App
//! ==========================================================================================================

//! Reusing the components using props - I
// import React, { useState } from 'react'
// import Card from './Components/Card'

// function App() {
//   const data = [
//     {name: "Mayur", work: "Painter", image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "Alex", work: "Coder", image:"https://images.unsplash.com/photo-1546820389-44d77e1f3b31?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "Rohit", work: "Builder", image:"https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "Max", work: "Mechinical", image:"https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
//   ]
//   return (
//     <>
//     <div className='flex gap-4 justify-center items-center h-screen'>
//       {data.map((e)=> (
//         //! This is very long & time taken so pass it in a single. See in below code (II)
//         <Card name={e.name} work={e.work} image={e.image}></Card>
//       ))}
//     </div>
//     </>
//   )
// }
// export default App
//! ==========================================================================================================

//! Reusing the components using props - II
//! Important
// import React, { useState } from 'react'
// import Card from './Components/Card'

// function App() {
//   const data = [
//     {name: "Mayur", work: "Painter", image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
//     {name: "Alex", work: "Coder", image:"https://images.unsplash.com/photo-1546820389-44d77e1f3b31?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
//     {name: "Rohit", work: "Builder", image:"https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
//     {name: "Max", work: "Mechinical", image:"https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false}
//   ]

//   const [realData, setrealData] = useState(data)

//   const handleclick = (cardIndex)=> {
//     setrealData((prev)=> {
//       return prev.map((e, index)=> {
//         if(index === cardIndex)
//           return {...e, friends: !e.friends}
//         return e
//       })
//     })
//   }
  
//   return (
//     <>
//     <div className='flex gap-4 justify-center items-center h-screen'>
//       {realData.map((e, index)=> (
//         <Card values={e} handleClick={handleclick} index={index}></Card>
//       ))}
//     </div>
//     </>
//   )
// }
// export default App
//! ==========================================================================================================

//! Music Player
// import React, { useState } from 'react'
// import Card from './Components/Card'
// import Navbar from './Components/Navbar'

// function App() {

//   const data = [
//     {name: "Warning", artist: "Massom Sharma", favourite: true, image: "https://i.scdn.co/image/ab67616d0000b2732dfdcf5e18fd669782c588a0"},
//     {name: "Blue Eyes", artist: "Honey Singh", favourite: false, image: "https://c.saavncdn.com/279/Blue-Eyes-2013-500x500.jpg"},
//     {name: "Check It Out", artist: "Parmish Verma", favourite: false, image: "https://i.scdn.co/image/ab67616d0000b273f3735ea343894170c59668ce"},
//     {name: "Mitran Nu Shounk Hatyaran Da", artist: "Babbu Maan", favourite: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRscYiZEiB1uB1zjaZ90-frx7qb4GpPDJaGg&s"},
//     {name: "Bahu Kale Ki", artist: "Ajay Hooda", favourite: false, image: "https://c.saavncdn.com/394/Bahu-Kale-Ki-Haryanvi-2022-20220419132022-500x500.jpg"},
//   ]

//   const [songData, setsongData] = useState(data)

//   const handleClick = (cardIndex)=>{
//     setsongData((prev)=> {
//       return prev.map((e, index)=> {
//         if(index === cardIndex)
//           return {...e, favourite: !e.favourite}
//         return e
//       })
//     })
//   }
  
//   return (
//     <>
//     <div className='w-full h-screen bg-zinc-300'>
//       <Navbar data={songData}></Navbar>
//       <div className='px-20 flex gap-10 mt-10 flex-wrap'>
//         {songData.map((e, index)=>(
//           <Card data={e} index={index} handleClick={handleClick}></Card>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }
// export default App
//! ==========================================================================================================

//! CSS Modules
//! ==========================================================================================================

//! Form Handling -> useRef, controlled components, react hook form
//! ==========================================================================================================

//! Form Handling using "useRef"
// import React, { useRef } from 'react'

// function App() {

//     const name = useRef(null)
//     const age = useRef(null)

//     const handleSubmit = (details)=>{
//         details.preventDefault();
//         console.log(name.current.value, age.current.value)
//     }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//         <input ref={name} type="text" placeholder='name'/>
//         <input ref={age} type="text" placeholder='age'/>
//         <input type="submit" />
//     </form>
//   )
// }
// export default App
//! ==========================================================================================================

//! Form Handling using "controlled components"
// import React, { useState } from 'react'

// function App() {
//     const [val, setVal] = useState({name: "", email: ""})

//     const handleSubmit = (event)=> {
//         event.preventDefault();
//         console.log(val);
//     }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//         <input onChange={event=> setVal({...val, name: event.target.value})} type="text" placeholder='Name' />
//         <input onChange={event=> {
//             setVal({...val, email: event.target.value})
//             console.log(event.target.value)
//         }}
//         type="email" placeholder='Email' />
//         <input type="submit" />
//     </form>
//   )
// }
// export default App
//! ==========================================================================================================

//! Form Handling using "react hook form" (Mostly Used)
//! npm install react-hook-form
// import React from 'react'
// import { useForm } from 'react-hook-form'

// function App() {
//     //! register and handleSubmit are the function of library and can't be renamed
//     const {register, handleSubmit} = useForm();

//   return (
//     <form action="" onSubmit={handleSubmit(data=> console.log(data))}>
//         <input {...register('name')} type="text" placeholder='Name' />
//         <input {...register('age')} type="text" placeholder='Age' />
//         <input type="submit" />
//     </form>
//   )
// }
// export default App
//! ==========================================================================================================

//! Form handling exercise
// import React, { useState } from 'react'
// import Cards from './Components/Cards'
// import Form from './Components/Form'

// function App() {

//     const [users, setusers] = useState([])

//     const handleFormSubmitData = (data)=>{
//       setusers([...users, data])
//     }

//     const handleRemove = (id)=>{
//       setusers(()=>users.filter((e, index)=> index!=id))
//     }

//   return (
//     <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
//         <div className='container mx-auto'>
//             <Cards users={users} handleRemove={handleRemove}></Cards>
//             <Form handleFormSubmitData={handleFormSubmitData}></Form>
//         </div>
//     </div>
//   )
// }
// export default App
//! ===========================================================================================================================

//! Dynamic Routing
//! npm install react-router-dom
//! change <App> in main.jsx
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Routing from './Utils/Routing'

function App() {
  return (
  <>
  <Navbar></Navbar>
  <Routing></Routing>
  </>
  )
}

export default App