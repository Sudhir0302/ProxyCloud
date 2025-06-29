import User from "../models/userModel.js"


const createuser=async(req,res,next)=>{
    try {
        const check=User.findOne({username:req.body.username})
        // console.log(check)
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

const getUser=async(req,res,next)=>{
    try {
        const user=await User.findOne({username:req.query.username})
        if(!user){
            return next({status:404,msg:"user not found"})
        }
        res.json(user)
    } catch (err) {
        next({status:500,msg:err.message})
    }
}

export {createuser,getUser}