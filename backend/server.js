const express = require('express');
const connectDB = require('./config/db_config');
require('dotenv').config()

const app = express();
PORT=process.env.PORT || 8000
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    res.json({msg:"welcome to hospital management"})
})

app.use("/api/auth",require('./router/authRouter'))
app.use("/api/appointment",require('./router/doctorRouter'))


app.listen(PORT, ()=>{
    console.log(`server is running at port:${PORT}`)
})