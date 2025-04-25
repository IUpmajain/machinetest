const appoint = require('../model/appointModel')
const Auth= require('../model/authModel')

const getallAppointment = async(req, res)=>{
        const user = await User.findById(req.user.id)
      
        if (!user) {
          res.status(401)
          throw new Error('User not found')
        }
      
        const allAppoint = await appoint.find()
      
        res.status(200).json(allAppoint)
      
}

const getsingleAppoint = async(req,res)=>{

    // const user = await User.findById()
      
    // if (!user) {
    //   res.status(401)
    //   throw new Error('User not found')
    // }
      
    const singleAppoint = await appoint.findById(req.params.id)
      
    if(!singleAppoint){
        res.status(400)
        throw new Error("not found")

    }
      
        // if (singleAppoint.user.toString() !== req.user.id) {
        //   res.status(401)
        //   throw new Error('Not authorized')
        // }
      
        res.status(200).json(singleAppoint)
    }


const deleteAppoint = async (req, res) => {
 
  // const user = await User.findById()

  // if (!user) {
  //   res.status(401)
  //   throw new Error('User not found')
  // }

  const delappt = await patient.findById(req.params.id)

  if (!delappt) {
    res.status(404)
    throw new Error(' not found')
  }

  
  // if (delappt.user.toString() !== req.user.id) {
  //   res.status(401)
  //   throw new Error('Not authorized')
  // }

  await delappt.remove()

  res.status(200).json({ success: true })
}

const updateAppoint = async (req, res) => {
  
  // const user = await User.findById(req.user.id)

  // if (!user) {
  //   res.status(401)
  //   throw new Error('User not found')
  // }

  const updtaapt = await patient.findById(req.params.id)

  if (!updtaapt) {
    res.status(404)
    throw new Error(' not found')
  }

  // if (updtaapt.user.toString() !== req.user.id) {
  //   res.status(401)
  //   throw new Error('Not authorized')
  // }

  const updatedApt = await patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )

  res.status(200).json(updatedApt)
}


const createAppt = async(req, res) => {
  const { doctorName, doctorEmail, doctorContact, doctorExpertiseIn, status, invoice, reason,  medicine, Patientname, Patientage, Patientcontact, Patientgender} = req.body

  if ( !doctorName || !doctorEmail || !doctorContact || !doctorExpertiseIn || !status || !invoice || !reason ||  !medicine || !Patientgender || !Patientname || !Patientage || !Patientcontact ) {
    res.status(400) 
    throw new Error('Please provide details')
  }

  
  // const auth = await Auth.findById(req.auth.id)

  // if (!auth) {
  //   res.status(401)
  //   throw new Error('User not found')
  // }

  const createAppt = await appoint.create({
    doctorName,
    doctorEmail, 
    doctorContact,
    doctorExpertiseIn,
     status,
     invoice, 
     reason,  
    //  date,
      medicine ,
      Patientname,
      Patientage ,
      Patientcontact,
      Patientgender,
      // user:req.user._id,
  })

  // const createAppt = await appoint.bulkSave()

  res.status(201).json(createAppt)
}


module.exports={getallAppointment, getsingleAppoint,deleteAppoint,updateAppoint,createAppt}