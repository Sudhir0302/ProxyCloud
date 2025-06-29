import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app=express()
const PORT=process.env.PORT

app.get("/test",(req,res)=>{
    res.send("testt")
})

app.listen(PORT,()=>{
    console.log(`server up and running on ${PORT}`)
})