const mongoose = require('mongoose')

const authSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true, "password is required"]
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Auth', authSchema)