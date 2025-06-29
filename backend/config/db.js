import mongoose from 'mongoose'

const conn=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/proxycloud')
        console.log("db connected")
    } catch (err) {
        console.log(err)
    }
}

conn()

export default conn;