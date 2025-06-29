
const errorHandler=async(err,req,res,next)=>{
    console.log("error: "+err.msg)
    return res.status(err.status).json({
        "error":err.msg
    })
}

export default errorHandler