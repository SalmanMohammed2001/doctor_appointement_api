
 import UserSchema from "../models/UserSchema";

 export  const updateUser=(req:any,res:any)=>{

    const id=req.params.id

    try{

        UserSchema.findByIdAndUpdate({'_id':id},{$set:req.body},{new:true}).then((result)=>{
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
 export  const deleteUser=(req:any,res:any)=>{

     const id=req.params.id

     try{

         UserSchema.findByIdAndDelete({'_id':id}).then((deleteUser)=>{
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

 export  const getSingleUser=(req:any,res:any)=>{

     const id=req.params.id

     try{

         UserSchema.findById({'_id':id}).select('-password').then((result)=>{
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
 export  const getAllUser=(req:any,res:any)=>{

     const id=req.params.id

     try{

         UserSchema.find().select('-password').then((result)=>{
             if(result){
                 res.status(200).json({success:true,message:"Successfully getAll User",data:result})
             }else {
                 res.status(500).json({status:false,message:'Try again getAll fail ' })
             }
         })


     }catch (error){
         res.status(500).json({success:false,message:"Internal server error"})
     }

 }