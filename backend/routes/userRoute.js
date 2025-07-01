import Router from 'express'
import {createuser,login} from '../controllers/userController.js'

const router=Router()

router.post('/create',createuser)
router.post('/login',login)

export default router