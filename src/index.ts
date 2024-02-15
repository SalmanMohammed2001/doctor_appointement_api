import mongoose from "mongoose";
import express from 'express'
import  process from "process";
import bodyParser from "body-parser";
import cors from 'cors'
const cookieParse =require('cookie-parser')

const dotenv=require('dotenv')
dotenv.config({ path: 'src/.env' });

const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cors())
// app.use(cookieParse)


let port=process.env.SERVER || 8080

mongoose.connect('mongodb://127.0.0.1:27017/doctor_appointment').then(()=>{
    app.listen(port,()=>{
        console.log(`serve running ${port}`)

    })
})


const authRoute=require('./routes/Auth')

app.use("/api/v1/auth",authRoute)

