//! Form handling exercise
// import React from 'react'
// import { useForm } from 'react-hook-form'

// function Form({handleFormSubmitData}) {

//   const{register, handleSubmit, reset} = useForm()

//   //todo reset the form and update the data in app.jsx
//   const handleFormSubmit = (data)=>{
//     handleFormSubmitData(data);
//     reset();
//   }

//   return (
//     <>
//     <div className='mt-10 flex gap-10 justify-center'>
//         <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
//             <input {...register('name')} className='bg-white rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Name' />
//             <input {...register('email')} className='bg-white rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Email' />
//             <input {...register('image')} className='bg-white rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image URL' />
//             <input className='rounded-md px-5 py-1 text-white font-semibold bg-blue-500' type="submit" />
//         </form>
//     </div>
//     </>
//   )
// }
// export default Form
//! ===========================================================================================================================

//! Dynamic Routing