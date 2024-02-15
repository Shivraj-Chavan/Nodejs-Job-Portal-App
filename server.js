// package IMPORTS
import express from 'express';
import 'express-async-errors'
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors'
import morgan from 'morgan'
//security package
import helmet from 'helmet';
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize';
//files import
import connectDB from './config/db.js';

//route import
import testRoutes from './routes/testRoutes.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import jobsRoutes from './routes/jobsRoute.js'
import errorMiddelware from './middelwares/errorMiddelware.js';
//Dot ENV config
dotenv.config()

//mongoDB Connection
connectDB();

//rest object
const app=express()


//middelware
app.use(helmet(``))
app.use(xss())
app.use(mongoSanitize())
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//routes
app.use('/api/v1/test',testRoutes)
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/job',jobsRoutes)


//validation middelware
app.use(errorMiddelware)

//port
const PORT=process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
    console.log(`node server is running in ${process.env.DEV_MODE} mode on port no ${PORT} `.bgCyan.white);
})