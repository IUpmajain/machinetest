import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addingTodo, updateTodo } from '../features/appt/apptSlice'

const Makeappt = () => {

    const [todo, settodo]=useState({
        doctorName:"",
        doctorEmail:"",
        doctorContact:"",
        doctorExpertiseIn:"",
        status:"",
        invoice:"",
        reason:"",
        medicine:"",
        Patientname:"",
        Patientage:"",
        Patientcontact:"",
        Patientgender:""
      })
      const {doctorName, doctorEmail,doctorContact, doctorExpertiseIn, status, invoice, reason, medicine, Patientname, Patientage, Patientcontact, Patientgender} = todo
      const {edit}=useSelector(state=>state.appt)
      const dispatch = useDispatch()

    const handlesubmit=(e)=>{
        e.preventDefault()
        if(edit.isedit)
          dispatch(updateTodo({_id:edit.todo._id, title, description}))
        else
        dispatch(addingTodo(formdata))
       settodo("")
      }

    const handlechange = (e)=>{
        settodo({
         ...todo,
         [e.target.name]:e.target.value
        })
         }

  return (
    <div>
    <form onSubmit={handlesubmit}>
        <input class="form-control mt-2" type="text" placeholder='enter doctor name' onChange={handlechange} value={doctorName} name='doctorName'/>
        <input class="form-control mt-2" type="email" name="doctorEmail" placeholder='enter doctor email' onChange={handlechange} value={doctorEmail}/>
        <input class="form-control mt-2" type="number" name="doctorNumber" placeholder='enter doctor contact' onChange={handlechange} value={doctorContact}/>
        <input class="form-control mt-2" type="text" name="doctorExpertiseIn" placeholder='enter doctor expert in' onChange={handlechange} value={doctorExpertiseIn}/>
        <input class="form-control mt-2" type="text" name="status" placeholder='enter status' onChange={handlechange} value={status}/>
        <input class="form-control mt-2" type="number" name="invoice" placeholder='enter invoice ' onChange={handlechange} value={invoice}/>
        <input class="form-control mt-2" type="text" name="reason" placeholder='enter reason' onChange={handlechange} value={reason}/>
        <input class="form-control mt-2" type="text" name="medicine" placeholder='enter medicine name' onChange={handlechange} value={medicine}/>
        <input class="form-control mt-2" type="text" name="PatientName" placeholder='enter patient name' onChange={handlechange} value={Patientname}/>
        <input class="form-control mt-2" type="text" name="Patientage" placeholder='enter patient age' onChange={handlechange} value={Patientage}/>
        <input class="form-control mt-2" type="number" name="Patientcontact" placeholder='enter patient number' onChange={handlechange} value={Patientcontact}/>
        <input class="form-control mt-2" type="text" name="Patientgender" placeholder='enter patient gender' onChange={handlechange} value={Patientgender}/>
        <button type="button" class="btn btn-primary w-100 mt-2">Login</button>
    </form>
</div>
  )
}

export default Makeappt