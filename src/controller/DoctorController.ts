
import DoctorSchema from "../models/DoctorSchema";

 export  const updateDoctor=(req:any,res:any)=>{

    const id=req.params.id

    try{

        DoctorSchema.findByIdAndUpdate({'_id':id},{$set:req.body},{new:true}).then((result)=>{
            if(result){
                res.status(200).json({success:true,message:"Successfully updated",data:result})
            }else {
                res.status(500).json({status:false,message:'Try again update fail ' })
            }
        })


    }catch (error){
        res.status(500).json({success:false,message:"Internal server error"})
    }

}
 export  const deleteDoctor=(req:any,res:any)=>{

     const id=req.params.id

     try{

         DoctorSchema.findByIdAndDelete({'_id':id}).then((deleteUser)=>{
             if(deleteUser){
                 res.status(200).json({success:true,message:"Successfully delete",data:deleteUser})
             }else {
                 res.status(500).json({status:false,message:'Try again delete fail ' })
             }
         })


     }catch (error){
         res.status(500).json({success:false,message:"Internal server error"})
     }

 }

 export  const getSingleDoctor=(req:any,res:any)=>{

     const id=req.params.id

     try{

         DoctorSchema.findById({'_id':id}).populate("reviews").select('-password').then((result)=>{
             if(result){
                 res.status(200).json({success:true,message:"Successfully get User",data:result})
             }else {
                 res.status(500).json({status:false,message:'Try again get fail ' })
             }
         })


     }catch (error){
         res.status(500).json({success:false,message:"Internal server error"})
     }

 }
 export  const getAllDoctor= async (req:any,res:any)=>{



     try{

         const {query}=req.query
         let doctors;

         if(query){
             doctors=await DoctorSchema.find({"isApproved":"approved", $or:[{name:{$regex:query,$options:"i"}},
                     {specialization:{$regex:query,$options:"i"}},
                 ]
             }).select('-password');
         }else {
             doctors =await DoctorSchema.find({"isApproved":"approved"}).select('-password')
         }


                 res.status(200).json({success:true,message:"Successfully getAll User",data:doctors})




     }catch (error){
         res.status(500).json({success:false,message:"Internal server error"})
     }

 }