import Router from 'express'
import {createuser, getUser} from '../controllers/userController.js'

const router=Router()

router.post('/create',createuser)
router.get('/getuser',getUser)

export default router