import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, deleteTodostate, editTodostate } from '../features/appt/apptSlice'

const Listappt = ({todo}) => {

    
  const {isSuccess}=useSelector(state=>state.appt)
  const dispatch = useDispatch()

    const handledel=(id)=>{
        if(isSuccess)
          dispatch(deleteTodostate(id))
        dispatch(deleteTodo(id))
          }
          const handleedit = (todo)=>{
            dispatch(editTodostate(todo))
          }

  return (
    <div className='container'>
    <p>{todo.invoice}</p>
    <p>{todo.doctorName}</p>
    <p>{todo.Patientname}</p>
    <p>{todo.reason}</p>
    <p>{todo.medicine}</p>
    <p>{todo.Patientnumber}</p>
    <button onClick={()=>handleedit(todo)}>edit</button>
    <button onClick={()=>handledel(todo._id)}>del</button>
  </div>
  )
}

export default Listappt