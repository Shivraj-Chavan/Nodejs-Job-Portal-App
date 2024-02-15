import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';
import rateLimit from 'express-rate-limit';

const limiter=rateLimit({
    windowMs: 15*60*1000, // 15 minutes
    max: 100, // Limit each IP to 2 requests per window Mins
    standardHeaders:true,
    legacyHeaders:false


})

//router object
const router=express.Router()

//routes


router.post("/register",limiter,registerController)


// LOGIN 
router.post('/login',limiter,loginController)

//export 
export default router;