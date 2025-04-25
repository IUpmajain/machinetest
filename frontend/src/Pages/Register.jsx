import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser, reset } from '../features/auth/authSlice'

const Register = () => {
  const {user, isLoading, isError, isSuccess,message}=useSelector(state=>state.auth)

  const [formData, setFormData]=useState({
    name:'',
    email:"",
    password:"",
    password2:""
  })

  const {name, email, password, password2}=formData

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handlechange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    if(password!==password2)
        console.log("password are not match")
    else
    dispatch(registerUser(formData))
}


useEffect(()=>{
  if(user || isSuccess)
      navigate("/")
  if(isError && message)
      console.log(message)
  dispatch(reset())
},[user, isError,isLoading,isSuccess,message])

  return (
    <div className='container mt-5'>
       <form onSubmit={handlesubmit}>
        <input class="form-control mt-2" type="text" name="name" placeholder='enter your name' value={name} onChange={handlechange} />
        <input class="form-control mt-2" type="email" name="email" placeholder='enter your email' value={email} onChange={handlechange} />
        <input class="form-control mt-2" type="password" name="password" placeholder='enter your password' value={password} onChange={handlechange} />
        <input class="form-control mt-2" type="password" name="password2" placeholder='enter your confirm password' value={password2}  onChange={handlechange}/>
        <button type="button" class="btn btn-primary w-100 mt-2">Register</button>
    </form>
    </div>
  )
}

export default Register