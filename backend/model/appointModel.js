const mongoose = require('mongoose')

const appointSchema = new mongoose.Schema({
    // auth:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:'Auth'
    // },
    doctorName:{
        type:String,
        required:true,
    },
    doctorEmail:{
        type:String,
        unique:true,
        required:true,
    },
    doctorContact:{
        type:Number,
        required:[true,'required']
    },
    doctorExpertiseIn:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"unchecked",
    },
    invoice:{
        type:Number,
        required:true,
    },
    reason:{
        type:String,
        default:"Healthy",
        required:true,
    },
    medicine:{
        type:String,
    },
    Patientname:{
        type:String,
        required:[true,'required']
    },
    Patientage:{
        type:Number,
        required:[true,'required']
    },
    Patientcontact:{
        type:Number,
        required:[true,'required']
    },
    Patientgender:{
        type:String,
        required:[true,'required']
    },

},{
    timestamps:true,
})

module.exports=mongoose.model("appoint", appointSchema)