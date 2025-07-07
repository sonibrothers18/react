//! Dynamic Routing
"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  console.log(params.id)
  console.log(params)

  const {id} = params;

  const [users, setusers] = useState([])
  const getUser = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id) //! Important
    setusers(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
    <div>{JSON.stringify(users)}</div>
    </>
  )
}

export default page