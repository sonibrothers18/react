"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault() //! prevent page from reloading after the form submission
    // console.log(title);
    // console.log(desc);
    setmainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  //! To see "No Task Available" even if "mainTask" is empty
  if(mainTask.length > 0){
    renderTask = mainTask.map((t, i)=>{
      return(
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3 gap-20'>
            <h5 className='text-2xl font-semibold items-center'>{t.title}</h5>
            <h6 className='text-lg font-medium items-center'>{t.desc}</h6>
        </div>
        <button className='bg-red-400 text-white rounded font-bold px-4 py-2' onClick={()=>{
          deleteHandler(i)
        }}>Delete</button>
        </li>
      )
    })
}

  return (
    <>
      <h1 className='bg-black text-white p-5 font-bold text-center text-5xl'>Mayur's Todo List</h1>

      <form onSubmit={submitHandler}>
        <input className='text-2xl rounded m-8 px-4 py-2 border-zinc-800 border-2' type='text' placeholder='Enter title here!' value={title}
        //! 2-Way binding (user and react both can see the data)
        onChange={(e)=>{
          // console.log(e.target.value)
          settitle(e.target.value)
        }}></input>
        <input className='text-2xl rounded m-8 px-4 py-2 border-zinc-800 border-2' type='text' placeholder='Enter description here!' value={desc} onChange={(e)=>{
          setdesc(e.target.value)
        }}></input>
        <button className='bg-black text-white rounded px-4 py-3 m-5 text-2xl font-bold'>Add Task</button>
      </form>
      <hr></hr>

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page