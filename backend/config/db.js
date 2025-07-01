import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URL=process.env.MONGODB_URL;
const conn=async()=>{
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("db connected")
    } catch (err) {
        console.log(err)
    }
}

conn()

export default conn;