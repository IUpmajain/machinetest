import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../features/auth/authSlice'

const Navbar = () => {

  const {user}=useSelector(state=>state.auth)
    const dispatch = useDispatch()
  
    const handlelogout  = ()=>{
      dispatch(logoutUser())
    }

  return (
    <ul class="nav container">
  <li class="nav-item m-2">
    <Link to={'/'}>Home</Link>
  </li>
  {
    !user ? (
      <>
      <li class="nav-item m-2">
    <Link to={'/register'}>Register</Link>
  </li>
  <li class="nav-item m-2">
   <Link to={'/login'}>Login</Link>
  </li>
      </>
    ):(
      <button type="button" class="btn btn-danger m-2" onClick={handlelogout}>Logout</button>
    )
  }
</ul>
  )
}

export default Navbar