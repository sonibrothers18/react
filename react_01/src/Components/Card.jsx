//! Event Handling
// import React from 'react'

// function Card() {
//     const data = [
//         {song: "dil ke", description: "i sain dscjaos jofe voem voe fds cjie cwoi kd"},
//         {song: "patel", description: "aidu vcei r fei cei geri eriu epv zizfv breo dd"},
//         {song: "samundar", description: "akb ibr cis rf siuf nic ufbi fei iefc ie fie f"}
//     ]
//   return (
//     <>
//     <div className='flex flex-col items-center justify-center w-full h-screen bg-zinc-300 gap-4'>
//         {data.map((e, index)=>(
//             <div className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
//                 <h3 className='font-semibold text-xl'>{e.song}</h3>
//                 <p className='text-xs mt-2'>{e.description}</p>
//                 <button onClick={()=>alert("Hello Ji")} className='px-2 py-1 bg-blue-600 text-xs font-semibold rounded'>Download Now</button>
//             </div>
//         ))}
//     </div>
//     </>
//   )
// }
// export default Card
//! ===========================================================================================================================

//! Conditional Rendering
// import React from 'react'

// function Card() {
//     const data = [
//       {product: "Laptop", available: true},
//       {product: "Mobile", available: false},
//       {product: "Printer", available: false},
//       {product: "Tablet", available: true}
//     ]

//   return (
//     <>
//     <div className='flex items-center justify-center w-full h-screen bg-zinc-300 gap-4'>
//         {data.map((e, index)=>(
//             <div className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
//                 <h3 className='font-semibold text-xl'>{e.product}</h3>
//                 <p className={`px-4 py-4 rounded ${e.available ? 'bg-green-600' : 'bg-red-600'} mt-3 w-36`}>
//                   {e.available ? "Available" : "Not Available"}
//                 </p>
//             </div>
//         ))}
//     </div>
//     </>
//   )
// }
// export default Card
//! ===========================================================================================================================

//! props
// import React from 'react'

// function Card({text, color}) {
//   return (
//     <>
//     <button className={`${color} px-4 py-3 rounded mx-1.5`}>{text}</button>
//     </>
//   )
// }
// export default Card
//! ===========================================================================================================================

//! Reusing the components using props - I
// import React from "react";

// function Card({ name, work, image }) {
//   return (
//     <div className="w-52 bg-white rounded-md overflow-hidden">
//       <div className="w-full h-40 bg-sky-200">
//         <img className="w-full h-full object-cover object-[center_top]" src={image} alt=""/>
//       </div>
//       <div className="w-full p-3">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <h5 className="text-xs">{work}</h5>
//         <button className="mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">Add Friend</button>
//       </div>
//     </div>
//   );
// }
// export default Card;
//! ===========================================================================================================================

//! Reusing the components using props - II
//! Important
// import React from "react";

// function Card({values, handleClick, index}) {
//     const {image, name, work, friends} = values
//   return (
//     <div className="w-52 bg-white rounded-md overflow-hidden">
//       <div className="w-full h-40 bg-sky-200">
//         <img className="w-full h-full object-cover object-[center_top]" src={image} alt=""/>
//       </div>
//       <div className="w-full p-3">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <h5 className="text-xs">{work}</h5>
//         <button onClick={()=> handleClick(index)} className={`mt-4 px-3 py-1 text-xs text-white ${friends ? "bg-green-600" : "bg-red-600"} font-semibold rounded-md`}>{friends ? "Friends": "Add Friends"}</button>
//       </div>
//     </div>
//   );
// }
// export default Card;
//! ===========================================================================================================================

//! Music Player
// import React from "react";

// function Card({data, index, handleClick}) {

//   const {name, artist, favourite, image} = data
  
//   return (
//     <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 mt-10 pb-8 relative">
//       <div className="w-20 h-20 bg-orange-600 overflow-hidden rounded-md">
//         <img className="w-full h-full object-cover" src={image} alt="" />
//       </div>
//       <div className=" ">
//         <h3 className="text-xl leading-none font-semibold">{name}</h3>
//         <h6 className="text-sm">{artist}</h6>
//       </div>
//       <button onClick={()=> handleClick(index)} className={`px-4 py-3 ${favourite ? "bg-teal-600" : "bg-orange-600"} text-white text-xs rounded-full absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] whitespace-nowrap`}>{favourite ? "Added" : "Add to Favourites"}</button>
//     </div>
//   );
// }
// export default Card;
//! ===========================================================================================================================

//! Form handling exercise
// import React from "react";

// function Card({users, handleRemove, index}) {

//   const {name, email, image} = users

//   return (
//     <>
//     <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
//       <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
//           <img className="w-full h-full object-cover" src={image} alt="" />
//       </div>
//       <h1 className="m-1 text-xl font-semibold text-center leading-none">{name}</h1>
//       <h4 className="m-1 opacity-60 text-xs font-semibold leading-1 ">{email}</h4>
//       <p className="mt-1 text-center text-xs rounded-md font-semibold leading-5 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis neque omnis.</p>
//       <button onClick={()=> handleRemove(index)} className="px-3 py-1 mt-4 bg-red-600 text-xs rounded-md font-semibold text-white">Remove It</button>
//     </div>
//     </>
//   );
// }
// export default Card;
//! ===========================================================================================================================

//! Dynamic Routing