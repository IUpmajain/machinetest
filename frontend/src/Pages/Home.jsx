import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Makeappt from '../components/Makeappt'
import Allappt from '../components/Allappt'

const Home = () => {
  const {user}= useSelector(state=>state.auth)
  const navigate= useNavigate()
  
  useEffect(()=>{
      if(!user){
          navigate("/login")
      }
  },[user])
  return (
    <div className='container m-4'>
      <Makeappt/>
      <Allappt/>
    </div>
  )
}

export default Home