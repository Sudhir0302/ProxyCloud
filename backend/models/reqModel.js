import mongoose from "mongoose";

const reqSchema=mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    req_metadata:{
        type: Object,
        required: true
    }
})

const reqHistory=mongoose.model('reqHistory',reqSchema)

export default reqHistory