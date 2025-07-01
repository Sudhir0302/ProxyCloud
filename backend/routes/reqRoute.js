import express from "express"
import saveReq from "../controllers/reqController.js"

const router=express.Router()

router.post('/saveReq',saveReq)

export default router