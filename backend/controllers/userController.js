import User from "../models/userModel.js"


const createuser=async(req,res,next)=>{
    try {
        const check=await User.findOne({username:req.body.username})
        console.log(check)
        if(check){
            return next({status:409,msg:"user already exists"})
        }
        const user=new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (err) {
        next({status:500,msg:err.message})
    }
}

const login=async(req,res,next)=>{
    try {
        const user=await User.findOne(req.body)
        if(!user){
            return next({status:404,msg:"user not found"})
        }
        res.json(user)
    } catch (err) {
        next({status:500,msg:err.message})
    }
}

export {createuser,login}