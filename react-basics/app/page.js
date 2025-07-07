//! rafce
// import React from 'react'
// const page = () => {
//     var a = 10;
//   return (
//     // <div>Hello</div> //! jsx (java script xml) element
//     <div>{a}</div>
//   )
// }
// export default page
//! ==============================================================================

// import React from 'react'
// const page = () => {
//     const groom = "Alex";
//     const bride = "Olive";
//   return (
//     <div>{groom} weds {bride}</div>
//   )
// }
// export default page
//! ==============================================================================

//! This is wrong method as we don't create variable like this(let) in react 
// "use client"
// import React from 'react'
// const page = () => {
//   let marks = 80;
//   const changeMarks = ()=>{
//     console.log(marks);
//     marks = 33;
//     console.log(marks);
//   }
//   return (
//     //! fragments (empty tags)
//     <>
//       <h1>My total marks is {marks}</h1>
//       <button onClick={() => {
//         changeMarks();
//       }} className='bg-gray-500 px-5 py-2 rounded text-white font-bold'>Update</button>
//     </>
//   )
// }
// export default page
//! ==============================================================================

// "use client"
// import React, { useState } from 'react'
// const page = () => {
//   //! UseState Hook (Variable of react)
//   const [marks, setmarks] = useState(80) //! useStateSnippet
//   return (
//     <>
//       <h1>Total marks were {marks}</h1>
//       <button onClick={()=>{ //! if fnc is not used here, it will immediately called and error occur
//         setmarks(33); //! use to change the marks value
//       }}>Update</button>
//     </>
//   )
// }
// export default page
//! ==============================================================================

// "use client"
// import React from 'react'
// import Header from '@/Components/Header'

// const page = () => {
//   return (
//     <>
//       <Header/>
//       Hello
//     </>
//   )
// }
// export default page
//! ==============================================================================

// "use client"
// import React, { useState } from 'react'
// import Header from '@/Components/Header'

// const page = () => {
//   const [user, setuser] = useState("Mayur")
//   const [editor, setEditor] = useState("VSCode")
//   return (
//     <>
//       <Header name={user} editor={editor}/>
//       Hello
//     </>
//   )
// }
// export default page
//! ==============================================================================

//! Routing
// import React from 'react'
// import Header from '@/Components/Header'

// const page = () => {
//   return (
//     <></>
//   )
// }
// export default page
//! ==============================================================================

// ! API (application programming interface) calling using axios
"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [Images, setImages] = useState([])
  //! Async and Await is used because axios is fetching data
  const getImages = async ()=>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      // console.log(response);
      // console.log(response.data);
      const data = response.data;
      setImages(data);
      // console.log(Images)
    } catch (error) {
      console.log("Error in fetching images");      
    }
  };
  return (
    <div>
      <button onClick={getImages} className='bg-green-400 px-5 py-3 text-white'>Get Images</button>
      <div className='p-10'>
        {Images.map((elem)=>{
          // console.log(elem, elem.id);
          // return <h1 key={elem.id}>{elem.author}</h1>
          return <img className='inline-block rounded m-10' key ={elem.id} src={elem.download_url} height={300} width={250}/> //! this height, width comes with img tag itself
        })}
      </div>
    </div>
  )
}
export default page