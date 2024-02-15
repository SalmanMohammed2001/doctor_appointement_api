import mongoose from "mongoose";
import express from 'express'
import  process from "process";

const dotenv=require('dotenv')
dotenv.config({ path: 'src/.env' });


const app=express();

const port=process.env.SERVER || 8080


mongoose.connect('mongodb://127.0.0.1:27017/doctor_appointment').then(()=>{
    app.listen(port,()=>{
        console.log(`serve running ${port}`)

    })
})