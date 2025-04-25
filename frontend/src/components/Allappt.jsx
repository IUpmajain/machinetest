import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getallTodo } from '../features/appt/apptSlice'
import Listappt from './Listappt'

const Allappt = () => {

    const {alltodo,isLoading, isSuccess, isError}=useSelector(state=>state.appt)

    useEffect(()=>{
        getallTodo()
    },[])


  return (
    <div>
    {
    alltodo.map((todo)=>  <Listappt todo={todo} key={todo.id}/>)
      }
    </div>
  )
}

export default Allappt