
const responseTimer = (req, res, next) => {

    // console.log(req.path);
    if(req.path!=='/proxy'){
        return next()
    }
    
    const start = process.hrtime()

    const originalJson = res.json

    res.json = function (body) {
        const diff = process.hrtime(start)
        const timeInMs = (diff[0] * 1e3 + diff[1] / 1e6).toFixed(3)

        const data = {
            responseTime: `${timeInMs} ms`,
            timestamp: new Date().toString(),
            statusCode: res.statusCode,
            method: req.method,
            requrl: req.body.url,
            clientIP: req.ip,
        };

        
        let actualData = body
        
        if (body && typeof body.toObject === 'function') {
            actualData = body.toObject() // mongoose providess .toObject() method to convert the internal Mongoose document into a plain JavaScript object.
        }  
        
        const resData = {
            reqdata: actualData,
            metadata: data
        };

        console.log("Res Data:",resData)
        
        return originalJson.call(this, resData)
    };

    next()
}

export default responseTimer
