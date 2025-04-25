import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../features/auth/authSlice'

const Login = () => {

  const {user, isError, isLoading, isSuccess, message}=useSelector(state=>state.auth)
  const [formData2, setFormData2]=useState({
      email:"",
      password:"",
  })

  const { email, password}=formData2
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const handlechange = (e)=>{
      setFormData2({
          ...formData2,
          [e.target.name]:e.target.value
      })
  }

  const handlesubmit = (e)=>{
      e.preventDefault();

      dispatch(loginUser())
  }

  useEffect(()=>{
      if(user && isSuccess)
          navigate("/")
      if(isError && message)
          console.log(message)
  },[user, isError,isSuccess,message])


  return (
    <div className='container mt-5'>
    <form onSubmit={handlesubmit}>
    <input class="form-control mt-2" type="email" name="email" placeholder='enter your email' value={email} onChange={handlechange} />
    <input class="form-control mt-2" type="password" name="password" placeholder='enter your password' value={password} onChange={handlechange} />
    <button type="button" class="btn btn-primary w-100 mt-2">Login</button>
</form>
</div>
  )
}

export default Login