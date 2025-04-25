const auth = require('../model/authModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const register = async(req, res)=>{
    const {name, email, password}=req.body
    if(!name||!email||!password){
        res.status(400)
        throw new Error("fill all details")
    }
    const userExist = await auth.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("user already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password, salt)

    const user = await auth.create({
        name,
        email,
        password:hashedPassword
    })

    if(!user){
        res.status(400)
        throw new Error("invalid details")
    }
    res.status(200).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:generatetoken(user._id)
    })

}

const generatetoken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"1h"})
}


const login =async(req, res)=>{
    const { email, password}=req.body
    if(!email||!password){
        res.status(400)
        throw new Error("fill all details")
    }
    const user = await auth.findOne({email})
    if(user && await bcrypt.compare(password, user.password)){
        res.status(200).json({
            success:true,
            message:"logged in successfully",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
            },
            token:generatetoken(user._id)
        })
    }
}




module.exports = {register, login}