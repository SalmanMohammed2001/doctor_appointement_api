import mongoose from "mongoose";
import express from 'express'
import dotenv from 'dotenv'
import * as process from "process";

dotenv.config()
const app=express();

const port=process.env.SERVER_PORT


mongoose.connect('mongodb://127.0.0.1:27017/doctor_appointment').then(()=>{
    app.listen(8080,()=>{
        console.log("serve running")
        console.log(port)
    })
})