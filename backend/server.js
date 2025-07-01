import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// import conn from './config/db.js'
import userRoute from './routes/userRoute.js'
import errorHandler from './middleware/errorHandler.js'
import proxyRouter from './routes/proxyRoute.js'
import responseTimer from './middleware/responseTimer.js'
import cors from 'cors'
import reqRouter from './routes/reqRoute.js'

const PORT=process.env.PORT

const app=express()
app.use(cors({
    origin:'http://localhost:5173',  
}))
app.use(express.json())
app.use(responseTimer)

app.get("/test",(req,res)=>{
    res.send("testt")
})

// app.use(userRoute)
app.use(proxyRouter)
// app.use(reqRouter)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`server up and running on ${PORT}`)
})