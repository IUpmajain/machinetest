const express = require('express')
const { getallAppointment, createAppt, getsingleAppoint, deleteAppoint, updateAppoint } = require('../controllers/patientControllers')


const router = express.Router()
router.get("/allapt", getallAppointment)
router.post("/createapt",createAppt)
router.route('/:id').get(getsingleAppoint).delete(deleteAppoint).put(updateAppoint)

module.exports=router