import express from 'express'
import proxy from '../controllers/proxyController.js'

const router=express.Router()

router.all("/proxy",proxy)

export default router