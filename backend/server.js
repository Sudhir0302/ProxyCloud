import express from 'express'
import dotenv from 'dotenv'
import conn from './config/db.js'
import userRoute from './routes/userRoute.js'
import errorHandler from './middleware/errorHandler.js'
dotenv.config()
const PORT=process.env.PORT

const app=express()
app.use(express.json())


app.get("/test",(req,res)=>{
    res.send("testt")
})

app.use(userRoute)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`server up and running on ${PORT}`)
})