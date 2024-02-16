import userSchema from "../models/UserSchema";
import DoctorSchema from "../models/DoctorSchema";
import ReviewSchema from "../models/ReviewSchema";


export const getAllReview =async (req:any,res:any)=>{

    try {
     const review=   await ReviewSchema.find({})
        res.status(200).json({success:true,message:"Successfully",data:review})

    }catch (error){
        res.status(500).json({success:false,message:"not found"})
    }
}