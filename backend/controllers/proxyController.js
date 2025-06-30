import http from 'http'
import https from 'https'
const proxy=async(proxyreq,proxyres,next)=>{

    const url=new URL(proxyreq.body.url)
    console.log(url)
    
    if(!url){
        next({status:500,msg:"error : "+err.message,fix:"check the url"})
    }
    const reqType=url.protocol==='https:' ? https:http

    const req=reqType.request(url,(res)=>{
        let body=''

        res.on('data',(chunk)=>{
            body+=chunk
        })

        res.on('error',(err)=>{
            next({status:500,msg:"error : "+err.message,fix:"check the url"})
        })
        
        res.on('end',()=>{
            proxyres.json(JSON.parse(body))
        })
    })
    req.on('error',(err)=>{
        next({status:500,msg:{"error":err.message,sugg:"check the url"}})
    })

    req.end();
}

export default proxy