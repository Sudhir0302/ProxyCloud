import User from "../models/userModel.js"


const createuser=async(req,res)=>{
    try {
        const user=new User(req.body)
        const status=await user.save()
        res.send(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

const getUser=async(req,res)=>{
    try {
        const user=await User.find({username:req.query.username})
        res.send(user)
    } catch (error) {
        console.log(err)
        res.send(err)
    }
}

export {createuser,getUser}