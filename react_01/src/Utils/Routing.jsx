//! Dynamic Routing I
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from '../Components/Home'
// import User from '../Components/User'
// import About from '../Components/About'
// import UserDetail from '../Components/UserDetail'

// function Routing() {
//   return (
//     <>
//     <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/user' element={<User/>}></Route>
//         <Route path='/about' element={<About/>}></Route>

//         {/* automatically ":name" will replace by link which is in user.jsx*/}
//         <Route path='/user/:name' element={<UserDetail/>}></Route>
//     </Routes>
//     </>
//   )
// }
// export default Routing
//! ===========================================================================================================================

//! Dynamic Routing II
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from '../Components/Home'
// import User from '../Components/User'
// import About from '../Components/About'
// import UserDetail from '../Components/UserDetail'

// function Routing() {
//   return (
//     <>
//     <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/user' element={<User/>}>
//           <Route path='/user/:name' element={<UserDetail/>}></Route>
//         </Route>
//         <Route path='/about' element={<About/>}></Route>

//     </Routes>
//     </>
//   )
// }
// export default Routing