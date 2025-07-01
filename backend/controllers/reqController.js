import reqHistory from "../models/reqModel.js"

const saveReq=async(req,res,next)=>{
    // console.log(req.body)
    try {
        const Reqdata=new reqHistory(req.body)
        await Reqdata.save()
        return res.status(201).json(Reqdata)
    } catch (err) {
        return next({status:404,msg:err.message})
    }
}


export default saveReq